import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { useIsMobile } from "./useIsMobile";
import { track } from "../../lib/posthog";
import { MarkdownText } from "./ChatMarkdown";
import { QUESTIONS_BY_CASE_STUDY, caseStudyForPath } from "./suggestedQuestions";

// The scope value api/chat.ts treats specially: loads every doc (the
// general bio + all four case studies) instead of a single project's file.
const GENERAL_SCOPE = "general";

// Shown on "/", "/IC" and "/MG" — a curated mix of general-career questions
// plus one per project, since there's no single case study to anchor on.
// On a "/project/*" page, caseStudyForPath() below picks that project's own
// suggested questions instead (the same ones the embedded chat shows), so
// the prompts are relevant to whatever the visitor is already reading.
const GENERAL_SUGGESTED_QUESTIONS = [
  "Quel est le parcours de Romain ?",
  "Que cherche-t-il comme prochain poste ?",
  "Qu'est-ce qui explique les 230% vs objectif sur Programmes chroniques ?",
  "Comment a-t-il géré les 5 pivots de monétisation ?",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** "/", "/IC", "/MG", and any "/project/*" page — where there's portfolio content to ask about. */
function isChatEligiblePath(pathname: string): boolean {
  const p = pathname.toLowerCase();
  return p === "/" || p === "/ic" || p === "/mg" || p.startsWith("/project/");
}

// Closed size — reused by both the closed circle and the shell's animation
// target, so they always match exactly.
const CLOSED_SIZE = 56;

/**
 * Floating "ask the assistant" button + drawer, mounted once in Layout.tsx
 * (outside any ScaledSection, so position:fixed anchors to the viewport,
 * not a transformed ancestor) so it appears consistently across pages and
 * its conversation survives navigating between them. Rendering is gated by
 * path rather than by mounting/unmounting the component, precisely so that
 * state persists even if the visitor detours through a page where the
 * button is hidden (e.g. reaches a 404, then goes back).
 *
 * The button and the open panel are ONE animated shell (not two separate
 * elements) that resizes/repositions in place between the two, so it
 * visibly grows from the button's own corner — a "zoom" morph — rather
 * than a drawer sliding in from off-screen.
 */
export function GlobalChatWidget() {
  const location = useLocation();
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Tracked in px (not CSS calc()/vh) because the shell's size is driven by
  // Framer Motion's `animate`, which tweens plain numbers smoothly but can't
  // interpolate a calc()/min() expression.
  const [viewport, setViewport] = useState(() => ({
    w: typeof window === "undefined" ? 1280 : window.innerWidth,
    h: typeof window === "undefined" ? 800 : window.innerHeight,
  }));
  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const eligible = isChatEligiblePath(location.pathname);

  // Close the drawer (but keep the conversation) if navigation lands on a
  // page where the button itself is hidden — reopening it later picks the
  // conversation back up rather than losing it.
  useEffect(() => {
    if (!eligible) setIsOpen(false);
  }, [eligible]);

  if (!eligible) return null;

  // On a project page, lead with that project's own suggested questions
  // (recomputed on every render, so navigating prev/next between projects
  // while the drawer is open updates them) — otherwise the general mix.
  const pageCaseStudy = caseStudyForPath(location.pathname);
  const suggestedQuestions = pageCaseStudy
    ? QUESTIONS_BY_CASE_STUDY[pageCaseStudy] ?? GENERAL_SUGGESTED_QUESTIONS
    : GENERAL_SUGGESTED_QUESTIONS;

  const ask = async (q: string, source: "suggested" | "free_input" = "free_input") => {
    if (!q.trim() || loading) return;

    track("chat_question_sent", {
      question: q.trim(),
      caseStudy: GENERAL_SCOPE,
      source,
      page: location.pathname,
    });

    const userMessage: ChatMessage = { role: "user", content: q.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.trim(),
          caseStudy: GENERAL_SCOPE,
          history: messages,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur s'est produite.");
      } else {
        track("chat_answer_received", {
          caseStudy: GENERAL_SCOPE,
          answered: data.answered,
          responseLength: (data.response as string)?.length ?? 0,
        });
        setMessages([...nextMessages, { role: "assistant", content: data.response }]);
      }
    } catch {
      setError("Impossible de joindre le serveur.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (q: string) => {
    track("chat_question_suggested_clicked", { question: q, caseStudy: GENERAL_SCOPE });
    ask(q, "suggested");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input, "free_input");
  };

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    track(next ? "global_chat_opened" : "global_chat_closed", { page: location.pathname });
  };

  const fSize = isMobile ? 15 : 16;
  const lHeight = isMobile ? "22px" : "24px";

  // Closed: a 56px circle anchored bottom-right. Open: the drawer, sized in
  // real px (from `viewport`, not vh/calc — see its declaration above) so
  // Framer Motion can tween every dimension smoothly. The button and the
  // drawer are ONE shell that resizes/repositions in place — not two
  // separate elements — so it visibly grows from the button's own corner
  // instead of a panel sliding in from off-screen.
  const desktopPanelHeight = Math.min(640, viewport.h - 140);
  const shellTarget = isOpen
    ? isMobile
      ? { width: viewport.w, height: viewport.h, right: 0, bottom: 0, borderRadius: 0 }
      : { width: 400, height: desktopPanelHeight, right: 32, bottom: 100, borderRadius: 20 }
    : { width: CLOSED_SIZE, height: CLOSED_SIZE, right: isMobile ? 20 : 32, bottom: isMobile ? 20 : 32, borderRadius: 9999 };

  return (
    <motion.div
      className="fixed flex flex-col overflow-hidden"
      style={{
        zIndex: 60,
        backgroundColor: "var(--color-qare-white)",
        boxShadow: isOpen ? "0 12px 40px rgba(64, 41, 91, 0.25)" : "0 8px 24px rgba(122, 99, 202, 0.4)",
        border: isOpen && !isMobile ? "1px solid var(--color-qare-150)" : "none",
      }}
      initial={false}
      animate={shellTarget}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    >
      <AnimatePresence initial={false}>
        {!isOpen ? (
          <motion.button
            key="icon"
            onClick={toggleOpen}
            aria-label="Poser une question à l'assistant"
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: CLOSED_SIZE,
              height: CLOSED_SIZE,
              backgroundColor: "var(--color-qare-brand)",
              border: "none",
              cursor: "pointer",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <MessageCircle size={24} color="white" />
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            className="flex flex-col"
            style={{ width: 400, maxWidth: "100%", height: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Content only fades in once the shell is mostly done growing,
            // so it never looks stretched mid-resize; on close it fades out
            // immediately (no delay) rather than getting visibly squeezed
            // as the shell shrinks back to a circle.
            transition={{ duration: 0.15, delay: isOpen ? 0.2 : 0 }}
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
            {/* The shell's own toggle button only exists in the closed
                state (it morphs into this panel), so the close action now
                always lives here — on desktop too, not just mobile. */}
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}
