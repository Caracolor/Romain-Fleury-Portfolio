import { useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { motion } from "motion/react";
import { X, Send } from "lucide-react";
import { useIsMobile } from "./useIsMobile";
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

  return (
    <>
      {/* Floating toggle button — only exists while closed; the panel takes
          over once open, sliding in from the right rather than the button
          growing into it. */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          aria-label="Poser une question à l'assistant"
          className="fixed flex items-center justify-center transition-transform hover:scale-105"
          style={{
            bottom: isMobile ? 20 : 32,
            right: isMobile ? 20 : 32,
            width: isMobile ? 56 : 64,
            height: isMobile ? 56 : 64,
            padding: 0,
            backgroundColor: "transparent",
            border: "none",
            zIndex: 60,
            cursor: "pointer",
          }}
        >
          <img
            src="/chat-icon.svg"
            alt=""
            style={{ width: "100%", height: "100%", filter: "drop-shadow(0 8px 20px rgba(39, 20, 66, 0.35))" }}
          />
        </button>
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
