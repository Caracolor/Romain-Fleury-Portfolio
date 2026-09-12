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
 * input, its own separate conversation) with a row of suggested-question
 * chips that open/post into the ONE global chat conversation instead (see
 * ChatContext.tsx / useGlobalChat.ts). Two independent chats on the same
 * page — each with a different answer if asked the same thing — was worse
 * than one, reached from two places.
 *
 * The panel is position:fixed, so it's already in view the instant it
 * opens regardless of how far down the page this block sits — no need to
 * scroll the page itself. The clicked question becomes the first message
 * in the panel that slides in, so the click-to-panel jump still reads as
 * one continuous action rather than a non-sequitur.
 */
export function ProjectChatCta({ caseStudy }: ProjectChatCtaProps) {
  const isMobile = useIsMobile();
  const { openAndAsk, openChat } = useChat();
  const suggestedQuestions = QUESTIONS_BY_CASE_STUDY[caseStudy] ?? [];

  const handleSuggestion = (q: string) => {
    track("chat_question_suggested_clicked", { question: q, caseStudy, source: "project_cta" });
    openAndAsk(q);
  };

  const handleOpen = () => {
    track("chat_cta_open_clicked", { caseStudy });
    openChat();
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

      {/* Suggested questions + a catch-all "open the chat" action */}
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

        <button
          onClick={handleOpen}
          className="font-['Aeonik:Regular',sans-serif] transition-opacity hover:opacity-85"
          style={{
            fontSize: isMobile ? 13 : 14,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 999,
            border: "none",
            color: "white",
            backgroundColor: "var(--color-qare-brand)",
            cursor: "pointer",
          }}
        >
          Poser une question →
        </button>
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
