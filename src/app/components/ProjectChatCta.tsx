import { useState } from "react";
import { Send } from "lucide-react";
import { ScaledSection } from "./ScaledSection";
import { useIsMobile } from "./useIsMobile";
import { useChat } from "./ChatContext";
import { QUESTIONS_BY_CASE_STUDY } from "./suggestedQuestions";
import { track } from "../../lib/posthog";

interface ProjectChatCtaProps {
  caseStudy: string;
}

/**
 * "Ask about this project" block at the bottom of each case study —
 * replaces what used to be a second, self-contained chat UI (its own
 * input, its own separate conversation) with an input + suggested-question
 * chips that open/post into the ONE global chat conversation instead (see
 * ChatContext.tsx / useGlobalChat.ts). Two independent chats on the same
 * page — each with a different answer if asked the same thing — was worse
 * than one, reached from two places.
 *
 * The input here is a local, unsent draft — typing doesn't touch the real
 * chat state, and there's no message list under it, so it can't pretend to
 * be a real conversation. Submitting hands the text to openAndAsk(), which
 * opens the panel AND fires the question in one call, matching how the
 * suggested chips already behave — the panel is position:fixed, so it's
 * already in view the instant it slides in regardless of how far down the
 * page this block sits, and the just-typed question becomes its first
 * message, so the handoff reads as one continuous action, not a jump to a
 * blank chat.
 */
export function ProjectChatCta({ caseStudy }: ProjectChatCtaProps) {
  const isMobile = useIsMobile();
  const { openAndAsk } = useChat();
  const [draft, setDraft] = useState("");
  const suggestedQuestions = QUESTIONS_BY_CASE_STUDY[caseStudy] ?? [];

  const handleSuggestion = (q: string) => {
    track("chat_question_suggested_clicked", { question: q, caseStudy, source: "project_cta" });
    openAndAsk(q);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = draft.trim();
    if (!q) return;
    track("chat_question_freeform_submitted", { question: q, caseStudy, source: "project_cta" });
    openAndAsk(q, "free_input");
    setDraft("");
  };

  const inner = (
    <div className="flex flex-col" style={{ gap: isMobile ? 24 : 32 }}>
      {/* Label + headline */}
      <div className="flex flex-col" style={{ gap: 8 }}>
        <p
          className="font-['Aeonik:Regular',sans-serif] uppercase"
          style={{
            color: "var(--color-qare-brand)",
            fontSize: isMobile ? 16 : 24,
            letterSpacing: isMobile ? "3px" : "4.8px",
          }}
        >
          Vous avez une question ?
        </p>
        <p
          className="font-['Aeonik:Bold',sans-serif]"
          style={{
            color: "var(--color-qare-text)",
            fontSize: isMobile ? 22 : 36,
            lineHeight: isMobile ? "28px" : "45px",
          }}
        >
          Posez votre question à l'assistant IA de ce portfolio
        </p>
      </div>

      {/* Freeform input — submitting opens the global panel with this as
          the first message (see handleSubmit above) */}
      <form onSubmit={handleSubmit}>
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
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Posez votre question..."
            maxLength={500}
            className="flex-1 bg-transparent outline-none font-['Aeonik:Regular',sans-serif]"
            style={{ fontSize: isMobile ? 15 : 16, color: "var(--color-qare-text)" }}
          />
          <button
            type="submit"
            disabled={!draft.trim()}
            className="shrink-0 flex items-center justify-center rounded-full transition-opacity"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--color-qare-brand)",
              opacity: draft.trim() ? 1 : 0.35,
              cursor: draft.trim() ? "pointer" : "not-allowed",
              border: "none",
            }}
          >
            <Send size={15} color="white" />
          </button>
        </div>
      </form>

      {/* Suggested questions, for anyone who'd rather pick than type */}
      <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
        {suggestedQuestions.slice(0, 3).map((q, i) => (
          <button
            key={i}
            onClick={() => handleSuggestion(q)}
            className="font-['Aeonik:Regular',sans-serif] text-left transition-colors"
            style={{
              fontSize: isMobile ? 13 : 14,
              lineHeight: "normal",
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 999,
              border: "1px solid var(--color-qare-800)",
              color: "var(--color-qare-text)",
              backgroundColor: "transparent",
              cursor: "pointer",
              opacity: 0.7,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-qare-050)";
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Contact mention */}
      <p
        className="font-['Aeonik:Regular',sans-serif]"
        style={{ fontSize: isMobile ? 15 : 16, lineHeight: isMobile ? "22px" : "26px", color: "var(--color-qare-text)", opacity: 0.45 }}
      >
        Vous souhaitez des informations absentes de ce case study ?{" "}
        <a
          href="mailto:romain.fleury@gmail.com"
          style={{ color: "var(--color-qare-brand)", opacity: 1, textDecoration: "underline" }}
        >
          Écrivez-moi
        </a>
      </p>
    </div>
  );

  if (isMobile) {
    return <div className="px-[24px]">{inner}</div>;
  }

  return <ScaledSection maxWidth={950}>{inner}</ScaledSection>;
}
