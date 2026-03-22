import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { ScaledSection } from "./ScaledSection";
import { useIsMobile } from "./useIsMobile";

// ── JSON data (suggested questions per case study) ───────────────────────────
import chronicData from "../../data/qa-chronic-programs.json";
import llmData from "../../data/qa-llm-medical.json";
import monetisationData from "../../data/qa-monetisation.json";
import brandedCallData from "../../data/qa-branded-call.json";

const QUESTIONS_MAP: Record<string, string[]> = {
  "chronic-programs": chronicData.suggestedQuestions.map((q) => q.question),
  "llm-medical": llmData.suggestedQuestions.map((q) => q.question),
  monetisation: monetisationData.suggestedQuestions.map((q) => q.question),
  "branded-call": brandedCallData.suggestedQuestions.map((q) => q.question),
};

// ── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface CaseStudyChatProps {
  caseStudy: string;
}

// ── Markdown renderer ─────────────────────────────────────────────────────────
function MarkdownText({
  text,
  fontSize,
  lineHeight,
  color,
}: {
  text: string;
  fontSize: number;
  lineHeight: string;
  color: string;
}) {
  const baseStyle = {
    fontFamily: "inherit",
    fontSize,
    lineHeight,
    color,
    margin: 0,
  };

  const renderInline = (line: string): React.ReactNode[] => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const blocks = text.split(/\n\n+/);

  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isAllList = lines.every((l) => /^[-*] /.test(l.trim()) || l.trim() === "");
        const hasSomeList = lines.some((l) => /^[-*] /.test(l.trim()));

        if (isAllList && hasSomeList) {
          return (
            <ul
              key={bi}
              style={{
                ...baseStyle,
                paddingLeft: 18,
                marginTop: bi === 0 ? 0 : 10,
                marginBottom: 0,
              }}
            >
              {lines
                .filter((l) => /^[-*] /.test(l.trim()))
                .map((l, li) => (
                  <li key={li} style={{ marginBottom: 4 }}>
                    {renderInline(l.trim().replace(/^[-*] /, ""))}
                  </li>
                ))}
            </ul>
          );
        }

        // Mixed block (text + maybe list items)
        return (
          <p
            key={bi}
            style={{
              ...baseStyle,
              marginTop: bi === 0 ? 0 : 10,
            }}
          >
            {lines.map((line, li) => {
              const isListItem = /^[-*] /.test(line.trim());
              const content = renderInline(
                isListItem ? line.trim().replace(/^[-*] /, "• ") : line
              );
              return (
                <span key={li}>
                  {li > 0 && <br />}
                  {content}
                </span>
              );
            })}
          </p>
        );
      })}
    </>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CaseStudyChat({ caseStudy }: CaseStudyChatProps) {
  const isMobile = useIsMobile();
  const suggestedQuestions = QUESTIONS_MAP[caseStudy] ?? [];

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const ask = async (q: string) => {
    if (!q.trim() || loading) return;
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
          caseStudy,
          history: messages, // send previous turns as context
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur s'est produite.");
      } else {
        setMessages([
          ...nextMessages,
          { role: "assistant", content: data.response },
        ]);
      }
    } catch {
      setError("Impossible de joindre le serveur.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (q: string) => ask(q);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const fSize = isMobile ? 15 : 16;
  const lHeight = isMobile ? "22px" : "26px";

  const inner = (
    <div className="flex flex-col" style={{ gap: isMobile ? 24 : 32 }}>
      {/* Label */}
      <p
        className="font-['Aeonik:Regular',sans-serif] text-[13px] tracking-[4px] uppercase"
        style={{ color: "var(--color-qare-brand)" }}
      >
        Questions fréquentes
      </p>

      {/* Zone 1 — Suggested questions */}
      <div className="flex flex-wrap" style={{ gap: 10 }}>
        {suggestedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSuggestion(q)}
            disabled={loading}
            className="font-['Aeonik:Regular',sans-serif] text-left transition-colors"
            style={{
              fontSize: isMobile ? 13 : 15,
              lineHeight: "normal",
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 999,
              border: "1px solid var(--color-qare-800)",
              color: "var(--color-qare-text)",
              backgroundColor: "transparent",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.45 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading)
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "var(--color-qare-050)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Zone 2 — Conversation + input */}
      <div className="flex flex-col" style={{ gap: 12 }}>
        {/* Conversation history */}
        {messages.length > 0 && (
          <div className="flex flex-col" style={{ gap: 10 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  backgroundColor:
                    msg.role === "user"
                      ? "transparent"
                      : "var(--color-qare-050)",
                  border:
                    msg.role === "user"
                      ? "1px solid var(--color-qare-800)"
                      : "none",
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
                    <MarkdownText
                      text={msg.content}
                      fontSize={fSize}
                      lineHeight={lHeight}
                      color="var(--color-qare-text)"
                    />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  borderRadius: 16,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  backgroundColor: "var(--color-qare-050)",
                  alignSelf: "flex-start",
                }}
              >
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
            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit}>
          <div
            className="flex items-center"
            style={{
              gap: 12,
              backgroundColor: "var(--color-qare-050)",
              borderRadius: 16,
              paddingLeft: 20,
              paddingRight: 14,
              paddingTop: 14,
              paddingBottom: 14,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={messages.length > 0 ? "Posez une question de suivi..." : "Posez votre question..."}
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

        {/* Error */}
        {error && (
          <p
            className="font-['Aeonik:Regular',sans-serif]"
            style={{ fontSize: 14, lineHeight: "20px", color: "var(--color-qare-800)" }}
          >
            {error}
          </p>
        )}
      </div>

      {/* Zone 3 — Contact mention */}
      <p
        className="font-['Aeonik:Regular',sans-serif]"
        style={{ fontSize: 13, lineHeight: "normal", color: "var(--color-qare-text)", opacity: 0.45 }}
      >
        Vous souhaitez des informations absentes de ce case study ?{" "}
        <a
          href="mailto:romain.fleury@gmail.com"
          style={{ color: "var(--color-qare-brand)", opacity: 1, textDecoration: "underline" }}
        >
          Écrivez-nous
        </a>
      </p>
    </div>
  );

  if (isMobile) {
    return <div className="px-[24px]">{inner}</div>;
  }

  return <ScaledSection maxWidth={800}>{inner}</ScaledSection>;
}
