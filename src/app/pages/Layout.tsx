import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Suspense, useEffect, useState } from "react";
import { PageLoader } from "../components/PageLoader";
import { GlobalChatWidget } from "../components/GlobalChatWidget";
import { useIsMobile } from "../components/useIsMobile";
import { computeChatWidth, CHAT_TRANSITION_MS, CHAT_EASE_CSS } from "../components/chatLayout";
import { initPostHog, trackPageview } from "../../lib/posthog";

// Init PostHog once
initPostHog();

export default function Layout() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  // Chat open/width state lives here, not inside GlobalChatWidget: opening
  // the chat also pushes the Header and page content over (see
  // chatLayout.ts), and Layout is the nearest common ancestor of all three.
  const [isChatOpen, setIsChatOpen] = useState(false);
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
  const reservedPx = isChatOpen && !isMobile ? chatWidthPx : 0;

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
          {/* Pages that call useDesignScale() directly (not just through
              ScaledSection, which already reacts on its own — see its
              ResizeObserver) read this back via useOutletContext() so their
              own gap/padding math shrinks in step with the pushed content. */}
          <Outlet context={{ chatReservedWidth: reservedPx }} />
        </Suspense>
      </div>
      <GlobalChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} widthPx={chatWidthPx} />
    </>
  );
}
