import { createContext, useContext, type ReactNode } from "react";

interface ChatContextValue {
  /** Opens the global chat panel and immediately sends `question`. */
  openAndAsk: (question: string) => void;
  /** Opens the panel without sending anything. */
  openChat: () => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ value, children }: { value: ChatContextValue; children: ReactNode }) {
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

/**
 * Lets any page reach the one global chat conversation Layout.tsx owns —
 * used by ProjectChatCta.tsx so clicking a suggested question at the
 * bottom of a case study opens/asks in the same panel as the floating
 * button, instead of running a second, separate conversation.
 */
export function useChat(): ChatContextValue {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error("useChat() must be used within <ChatProvider> — it's provided by Layout.tsx around <Outlet/>.");
  }
  return ctx;
}
