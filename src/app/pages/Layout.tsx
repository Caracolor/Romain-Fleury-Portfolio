import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Suspense, useEffect, useState } from "react";
import { PageLoader } from "../components/PageLoader";
import { GlobalChatWidget } from "../components/GlobalChatWidget";
import { useGlobalChat } from "../components/useGlobalChat";
import { ChatProvider } from "../components/ChatContext";
import { useIsMobile } from "../components/useIsMobile";
import { computeChatWidth, CHAT_MARGIN, CHAT_TRANSITION_MS, CHAT_EASE_CSS, ChatOpenContext } from "../components/chatLayout";
import { initPostHog, trackPageview } from "../../lib/posthog";

// Init PostHog once
initPostHog();

export default function Layout() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  // The one global chat conversation, instantiated here (not inside
  // GlobalChatWidget): opening it also pushes the Header and page content
  // over, and ProjectChatCta.tsx (bottom of each case study, via
  // ChatContext) needs to reach the very same conversation — Layout is the
  // common ancestor of all three, so the state has to live here.
  const chat = useGlobalChat(pathname);

  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const chatWidthPx = computeChatWidth(viewportWidth);
  // Mobile chat is a full-screen overlay, not a push — nothing to reserve.
  // +CHAT_MARGIN: the panel itself floats CHAT_MARGIN in from the
  // viewport's right edge (see GlobalChatWidget.tsx), so the reserved push
  // has to cover that gap too, not just the panel's own width.
  const reservedPx = chat.isOpen && !isMobile ? chatWidthPx + CHAT_MARGIN : 0;

  // Scroll to top + track pageview on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageview();
  }, [pathname]);

  return (
    <>
      <Header pushRight={reservedPx} />
      <div
        style={{
          marginRight: reservedPx,
          transition: `margin-right ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}`,
        }}
      >
        <Suspense fallback={<PageLoader visible />}>
          <ChatProvider value={{ openAndAsk: chat.openAndAsk, openChat: chat.openChat }}>
            {/* ScaledSection.tsx reads this directly (no prop threading
                through the many pages/components that render one) to shrink
                its own side padding once the chat has actually eaten into
                the available width — see chatLayout.ts. */}
            <ChatOpenContext.Provider value={reservedPx > 0}>
              {/* Pages that call useDesignScale() directly (not just through
                  ScaledSection, which already reacts on its own — see its
                  ResizeObserver) read this back via useOutletContext() so
                  their own gap/padding math shrinks in step with the pushed
                  content. */}
              <Outlet context={{ chatReservedWidth: reservedPx }} />
            </ChatOpenContext.Provider>
          </ChatProvider>
        </Suspense>
      </div>
      <GlobalChatWidget
        isOpen={chat.isOpen}
        setIsOpen={chat.setIsOpen}
        toggleOpen={chat.toggleOpen}
        widthPx={chatWidthPx}
        input={chat.input}
        setInput={chat.setInput}
        messages={chat.messages}
        loading={chat.loading}
        error={chat.error}
        ask={chat.ask}
      />
    </>
  );
}
