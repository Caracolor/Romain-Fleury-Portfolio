// Shared between CaseStudyChat.tsx (the embedded per-project chat) and
// GlobalChatWidget.tsx (the floating one), so a project's suggested
// questions are defined once.
import chronicData from "../../data/qa-chronic-programs.json";
import llmData from "../../data/qa-llm-medical.json";
import monetisationData from "../../data/qa-monetisation.json";
import brandedCallData from "../../data/qa-branded-call.json";

export const QUESTIONS_BY_CASE_STUDY: Record<string, string[]> = {
  "chronic-programs": chronicData.suggestedQuestions.map((q) => q.question),
  "llm-medical": llmData.suggestedQuestions.map((q) => q.question),
  monetisation: monetisationData.suggestedQuestions.map((q) => q.question),
  "branded-call": brandedCallData.suggestedQuestions.map((q) => q.question),
};

// Maps the "/project/<slug>" URL segment to the qa-*.json / docs/*.md slug
// above — they differ for two of the four projects (medical-time vs
// llm-medical, health-monetization vs monetisation).
const PATH_SLUG_TO_CASE_STUDY: Record<string, string> = {
  "chronic-programs": "chronic-programs",
  "medical-time": "llm-medical",
  "health-monetization": "monetisation",
  "branded-call": "branded-call",
};

/** Given a pathname, the qa-*.json/docs slug for the project page it matches, or null. */
export function caseStudyForPath(pathname: string): string | null {
  const match = pathname.match(/^\/project\/([a-z0-9-]+)/i);
  if (!match) return null;
  return PATH_SLUG_TO_CASE_STUDY[match[1].toLowerCase()] ?? null;
}
