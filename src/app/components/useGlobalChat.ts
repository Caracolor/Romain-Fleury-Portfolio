import { useState } from "react";
import { track } from "../../lib/posthog";

// The scope value api/chat.ts treats specially: loads every doc (the
// general bio + all four case studies) instead of a single project's file.
const GENERAL_SCOPE = "general";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export type AskSource = "suggested" | "free_input" | "cta";

/**
 * All state for the one global chat conversation, instantiated once in
 * Layout.tsx (not inside GlobalChatWidget) so it can be triggered from
 * anywhere in the tree — specifically ProjectChatCta.tsx, the "ask a
 * question about this project" block at the bottom of each case study,
 * which opens this same conversation rather than running its own separate
 * one (see ChatContext.tsx for how it reaches this hook).
 */
export function useGlobalChat(pathname: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ask = async (q: string, source: AskSource = "free_input") => {
    if (!q.trim() || loading) return;

    track("chat_question_sent", { question: q.trim(), caseStudy: GENERAL_SCOPE, source, page: pathname });

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

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      track(next ? "global_chat_opened" : "global_chat_closed", { page: pathname });
      return next;
    });
  };

  /** Opens the panel (if not already) and immediately sends `question` —
   *  what ProjectChatCta.tsx calls, both for its suggested-question chips
   *  and for the question typed into its own input. */
  const openAndAsk = (question: string, source: AskSource = "cta") => {
    setIsOpen(true);
    track("global_chat_opened", { page: pathname });
    ask(question, source);
  };

  return { isOpen, setIsOpen, toggleOpen, openAndAsk, input, setInput, messages, loading, error, ask };
}
