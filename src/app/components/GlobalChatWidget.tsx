import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import { useIsMobile } from "./useIsMobile";
import { ChatBotIcon } from "./ChatBotIcon";
import { AvatarStatusDot } from "./AvatarStatusDot";
import { track } from "../../lib/posthog";
import { MarkdownText } from "./ChatMarkdown";
import { QUESTIONS_BY_CASE_STUDY, caseStudyForPath } from "./suggestedQuestions";
import { CHAT_TRANSITION_MS, CHAT_EASE_MOTION, CHAT_MARGIN, CHAT_RADIUS } from "./chatLayout";
import type { ChatMessage, AskSource } from "./useGlobalChat";

// Shown on "/", "/IC" and "/MG" — a curated mix of general-career questions
// plus one per project, since there's no single case study to anchor on.
// On a "/project/*" page, caseStudyForPath() below picks that project's own
// suggested questions instead (the same ones ProjectChatCta.tsx shows at
// the bottom of that page), so the prompts are relevant to whatever the
// visitor is already reading.
// The recurring hint bubble above the button: shows after this much page
// inactivity, stays up for this long, then waits for the next idle stretch.
const HINT_IDLE_MS = 6000;
const HINT_VISIBLE_MS = 20000;

const GENERAL_SUGGESTED_QUESTIONS = [
  "Quel est le parcours de Romain ?",
  "Que cherche-t-il comme prochain poste ?",
  "Qu'est-ce qui explique les 230% vs objectif sur Programmes chroniques ?",
  "Comment a-t-il géré les 5 pivots de monétisation ?",
];

/** "/", "/IC", "/MG", and any "/project/*" page — where there's portfolio content to ask about. */
export function isChatEligiblePath(pathname: string): boolean {
  const p = pathname.toLowerCase();
  return p === "/" || p === "/ic" || p === "/mg" || p.startsWith("/project/");
}

interface GlobalChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleOpen: () => void;
  /** Desktop panel width in px, computed once in Layout.tsx (chatLayout.ts)
   *  so it's the exact same number Layout used to push the Header/content
   *  — the panel's own width can't drift out of sync with the push. */
  widthPx: number;
  input: string;
  setInput: (value: string) => void;
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  ask: (question: string, source?: AskSource) => void;
}

/**
 * Floating "ask the assistant" button + a panel that slides in from the
 * right edge, mounted once in Layout.tsx (outside any ScaledSection, so
 * position:fixed anchors to the viewport, not a transformed ancestor) so it
 * appears consistently across pages.
 *
 * Purely presentational — all the actual conversation state (isOpen,
 * messages, ask()...) lives in useGlobalChat.ts, instantiated once in
 * Layout.tsx and passed down as props here. That's what lets
 * ProjectChatCta.tsx (the "ask about this project" block at the bottom of
 * each case study) open and post into this exact same conversation via
 * ChatContext.tsx, rather than running a second, separate one.
 */
export function GlobalChatWidget({
  isOpen,
  setIsOpen,
  toggleOpen,
  widthPx,
  input,
  setInput,
  messages,
  loading,
  error,
  ask,
}: GlobalChatWidgetProps) {
  const location = useLocation();
  const isMobile = useIsMobile();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const eligible = isChatEligiblePath(location.pathname);

  // Close the panel (but keep the conversation) if navigation lands on a
  // page where the button itself is hidden — reopening it later picks the
  // conversation back up rather than losing it.
  useEffect(() => {
    if (!eligible) setIsOpen(false);
  }, [eligible, setIsOpen]);

  // A speech-bubble hint above the button, nudging visitors to notice it —
  // recurring, not one-time: it shows after HINT_IDLE_MS of no page
  // activity (mouse/scroll/keyboard/touch), stays up for HINT_VISIBLE_MS,
  // then hides and starts watching for the next idle stretch. Runs off
  // refs rather than state so a stream of mousemove events doesn't cause a
  // re-render each time — only actually showing/hiding the hint does.
  const [showHint, setShowHint] = useState(false);
  const isOpenRef = useRef(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) setShowHint(false);
  }, [isOpen]);

  useEffect(() => {
    if (!eligible) return;

    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let visibleTimer: ReturnType<typeof setTimeout> | null = null;
    let hintVisible = false;

    const scheduleIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(fireIdle, HINT_IDLE_MS);
    };

    const fireIdle = () => {
      // The chat is open (button/hint both hidden elsewhere) — keep
      // watching instead of showing something nobody would see.
      if (isOpenRef.current) {
        scheduleIdle();
        return;
      }
      hintVisible = true;
      setShowHint(true);
      visibleTimer = setTimeout(() => {
        hintVisible = false;
        setShowHint(false);
        scheduleIdle();
      }, HINT_VISIBLE_MS);
    };

    const onActivity = () => {
      if (hintVisible) return; // already showing — let its own timer run out
      scheduleIdle();
    };

    const events = ["mousemove", "mousedown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
    scheduleIdle();

    return () => {
      events.forEach((e) => window.removeEventListener(e, onActivity));
      if (idleTimer) clearTimeout(idleTimer);
      if (visibleTimer) clearTimeout(visibleTimer);
    };
  }, [eligible]);

  if (!eligible) return null;

  // On a project page, lead with that project's own suggested questions
  // (recomputed on every render, so navigating prev/next between projects
  // while the panel is open updates them) — otherwise the general mix.
  const pageCaseStudy = caseStudyForPath(location.pathname);
  const suggestedQuestions = pageCaseStudy
    ? QUESTIONS_BY_CASE_STUDY[pageCaseStudy] ?? GENERAL_SUGGESTED_QUESTIONS
    : GENERAL_SUGGESTED_QUESTIONS;

  const handleSuggestion = (q: string) => {
    track("chat_question_suggested_clicked", { question: q, caseStudy: "general" });
    ask(q, "suggested");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input, "free_input");
  };

  const fSize = isMobile ? 15 : 16;
  const lHeight = isMobile ? "22px" : "24px";
  const panelWidth = isMobile ? "100%" : widthPx;

  // Shared with the hint bubble below, so it stays anchored to the button
  // regardless of viewport size.
  const buttonBottom = isMobile ? 20 : 32;
  const buttonRight = isMobile ? 20 : 32;
  const buttonSize = isMobile ? 56 : 64;

  return (
    <>
      {/* One-time hint bubble, nudging attention to the button above it —
          see the showHint effects above for its timing/dismissal rules.
          The tail sits at 80% of the bubble's own width (not centered —
          centering it made the bubble spill past the viewport's right edge,
          since half its width extended further right than the button
          itself) and the bubble is positioned so that same 80%-point lines
          up with the button's horizontal center: `right` is the button's
          own center (as a distance from the viewport's right edge), and
          shifting the bubble right by 20% of its OWN width — the
          complement of 80% — re-lands that 80%-point exactly on the
          button's center regardless of how wide the bubble ends up being
          (its width isn't known up front, the text can wrap). That shift
          has to go through Framer's own `x` motion value, not a plain
          style.transform string — Framer fully owns and rewrites the
          element's `transform` property to animate y/scale, so a
          manually-set transform gets silently overwritten. */}
      <AnimatePresence>
        {!isOpen && showHint && (
          <motion.div
            initial={{ opacity: 0, y: 8, x: "20%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "20%", scale: 1 }}
            exit={{ opacity: 0, y: 8, x: "20%", scale: 0.95 }}
            transition={{ duration: 0.25, ease: CHAT_EASE_MOTION }}
            className="fixed"
            style={{
              bottom: buttonBottom + buttonSize + 14,
              right: buttonRight + buttonSize / 2,
              maxWidth: isMobile ? 200 : 220,
              zIndex: 59,
            }}
          >
            <div
              onClick={toggleOpen}
              className="flex items-center gap-2 cursor-pointer"
              style={{
                backgroundColor: "var(--color-qare-text)",
                borderRadius: 16,
                padding: "10px 14px",
                boxShadow: "0 8px 20px rgba(39, 20, 66, 0.18)",
              }}
            >
              <p
                className="font-['Aeonik:Regular',sans-serif]"
                style={{ fontSize: 14, lineHeight: "18px", color: "white", margin: 0 }}
              >
                👋 Une question ?
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHint(false);
                }}
                aria-label="Fermer"
                className="shrink-0 flex items-center justify-center"
                style={{ width: 16, height: 16, background: "none", border: "none", cursor: "pointer", opacity: 0.6 }}
              >
                <X size={12} color="white" />
              </button>
            </div>
            {/* Downward-pointing tail, at 80% of the bubble's width — see
                the comment above the bubble itself for why 80/20. */}
            <div
              style={{
                position: "absolute",
                bottom: -6,
                left: "80%",
                transform: "translateX(-50%) rotate(45deg)",
                width: 12,
                height: 12,
                backgroundColor: "var(--color-qare-text)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button — only exists while closed; the panel takes
          over once open, sliding in from the right rather than the button
          growing into it. */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          aria-label="Poser une question à l'assistant"
          className="fixed flex items-center justify-center transition-transform hover:scale-105"
          style={{
            bottom: buttonBottom,
            right: buttonRight,
            width: buttonSize,
            height: buttonSize,
            // The icon's own rounded-square card (rx 45 of a 120 viewBox,
            // i.e. 3/8) sits on a transparent background, but boxShadow
            // still needs a matching radius on this wrapper itself to hug
            // the visible card's shape instead of casting a square shadow.
            borderRadius: `${buttonSize * 0.375}px`,
            boxShadow: "0 8px 20px rgba(39, 20, 66, 0.35)",
            padding: 0,
            overflow: "hidden",
            backgroundColor: "transparent",
            border: "none",
            zIndex: 60,
            cursor: "pointer",
          }}
        >
          <ChatBotIcon alt="" />
        </button>
      )}
      {/* "Online" badge for the floating button — rendered as its own
          fixed sibling rather than inside the button: the button's
          overflow:hidden (needed for its own boxShadow radius) would clip
          a badge sitting right at its corner. Anchored at (right:
          buttonRight, bottom: buttonBottom + buttonSize) — the icon's
          top-right corner in the same bottom/right coordinate space the
          button itself uses — then the component's own
          translate(0%, 90%) nudges it down just inside that corner.
          `top: "auto"` clears the component's default top:0 anchor, which
          would otherwise conflict with bottom here (both stretching the
          element instead of just positioning it). */}
      {!isOpen && (
        <AvatarStatusDot
          size={10}
          style={{ position: "fixed", top: "auto", bottom: buttonBottom + buttonSize, right: buttonRight, zIndex: 61 }}
        />
      )}

      {/* Panel — always mounted (not conditionally rendered) so closing
          animates a slide back out to the right rather than an instant
          unmount; translateX(100%) puts it fully off-screen either way,
          so it never intercepts clicks while closed.
          Desktop: floats CHAT_MARGIN in from the top/right/bottom edges
          with CHAT_RADIUS corners, matching the Header's own floating-pill
          treatment (its 24px top gap, 20px radius — see Header.tsx).
          Mobile stays edge-to-edge full screen, no margin or rounding. */}
      <motion.div
        className="fixed flex flex-col overflow-hidden"
        style={{
          top: isMobile ? 0 : CHAT_MARGIN,
          right: isMobile ? 0 : CHAT_MARGIN,
          bottom: isMobile ? 0 : CHAT_MARGIN,
          width: panelWidth,
          borderRadius: isMobile ? 0 : CHAT_RADIUS,
          zIndex: 59,
          backgroundColor: "var(--color-qare-white)",
          boxShadow: "0 12px 40px rgba(64, 41, 91, 0.25)",
          border: isMobile ? "none" : "1px solid var(--color-qare-150)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
        initial={false}
        // "100%" (of the panel's own width) is only fully off-screen when
        // the panel sits flush against the edge (mobile, no margin). On
        // desktop it now floats CHAT_MARGIN in from the right, so a plain
        // 100% translate undershoots by exactly that margin, leaving a
        // CHAT_MARGIN-wide sliver of the panel visible even closed — use
        // an explicit px offset (width + margin) there instead.
        animate={{ x: isOpen ? 0 : isMobile ? "100%" : widthPx + CHAT_MARGIN }}
        transition={{ duration: CHAT_TRANSITION_MS / 1000, ease: CHAT_EASE_MOTION }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between shrink-0"
          style={{
            padding: isMobile ? "20px 20px" : "20px 24px",
            borderBottom: "1px solid var(--color-qare-150)",
          }}
        >
          <div className="flex items-center" style={{ gap: 12 }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src="/bot/normal.svg"
                alt=""
                style={{ width: 40, height: 40, borderRadius: 15, display: "block" }}
              />
              <AvatarStatusDot size={10} style={{ transform: "translate(10%, -10%)" }} />
            </div>
            <div className="flex flex-col" style={{ gap: 2 }}>
              <p
                className="font-['Aeonik:Bold',sans-serif]"
                style={{ fontSize: 16, color: "var(--color-qare-text)", margin: 0 }}
              >
                L'assistant de Romain
              </p>
              <p
                className="font-['Aeonik:Regular',sans-serif]"
                style={{ fontSize: 13, color: "var(--color-qare-muted)", margin: 0 }}
              >
                Pose une question sur son parcours ou ses projets
              </p>
            </div>
          </div>
          <button
            onClick={toggleOpen}
            aria-label="Fermer"
            className="shrink-0 flex items-center justify-center rounded-full"
            style={{ width: 32, height: 32, border: "none", backgroundColor: "var(--color-qare-050)", cursor: "pointer" }}
          >
            <X size={16} color="var(--color-qare-text)" />
          </button>
        </div>

        {/* Conversation */}
        <div
          className="flex-1 flex flex-col overflow-y-auto"
          style={{ gap: 16, padding: isMobile ? 20 : 24 }}
        >
          {messages.length === 0 && (
            <div className="flex flex-wrap" style={{ gap: 8 }}>
              {suggestedQuestions.slice(0, 4).map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestion(q)}
                  disabled={loading}
                  className="font-['Aeonik:Regular',sans-serif] text-left transition-colors"
                  style={{
                    fontSize: 13,
                    lineHeight: "normal",
                    padding: "8px 14px",
                    borderRadius: 999,
                    border: "1px solid var(--color-qare-800)",
                    color: "var(--color-qare-text)",
                    backgroundColor: "transparent",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.35 : 0.7,
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                padding: "14px 20px",
                backgroundColor: msg.role === "user" ? "transparent" : "var(--color-qare-050)",
                border: msg.role === "user" ? "1px solid var(--color-qare-800)" : "none",
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "92%",
              }}
            >
              {msg.role === "user" ? (
                <p
                  className="font-['Aeonik:Regular',sans-serif]"
                  style={{ fontSize: fSize, lineHeight: lHeight, color: "var(--color-qare-text)", margin: 0 }}
                >
                  {msg.content}
                </p>
              ) : (
                <div className="font-['Aeonik:Regular',sans-serif]">
                  <MarkdownText text={msg.content} fontSize={fSize} lineHeight={lHeight} color="var(--color-qare-text)" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div style={{ borderRadius: 16, padding: "14px 20px", backgroundColor: "var(--color-qare-050)", alignSelf: "flex-start" }}>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-qare-brand)",
                      animation: `bounce 1s ease-in-out ${d * 0.15}s infinite`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="font-['Aeonik:Regular',sans-serif]" style={{ fontSize: 13, color: "var(--color-qare-800)", margin: 0 }}>
              {error}
            </p>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0"
          style={{
            paddingLeft: isMobile ? 20 : 24,
            paddingRight: isMobile ? 20 : 24,
            paddingBottom: isMobile ? 20 : 24,
            paddingTop: 0,
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: 12,
              backgroundColor: "var(--color-qare-050)",
              borderRadius: 16,
              padding: "12px 12px 12px 20px",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={messages.length > 0 ? "Question de suivi..." : "Posez votre question..."}
              disabled={loading}
              maxLength={500}
              className="flex-1 bg-transparent outline-none font-['Aeonik:Regular',sans-serif]"
              style={{ fontSize: fSize, color: "var(--color-qare-text)" }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="shrink-0 flex items-center justify-center rounded-full transition-opacity"
              style={{
                width: 36,
                height: 36,
                backgroundColor: "var(--color-qare-brand)",
                opacity: loading || !input.trim() ? 0.35 : 1,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                border: "none",
              }}
            >
              {loading ? (
                <div
                  style={{
                    width: 15,
                    height: 15,
                    border: "2px solid rgba(255,255,255,0.4)",
                    borderTopColor: "white",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
              ) : (
                <Send size={15} color="white" />
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}
