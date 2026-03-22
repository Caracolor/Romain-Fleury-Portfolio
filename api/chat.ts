import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { logToSheet } from "../lib/logToSheet";

// ── Rate limiter (in-memory, resets on cold start — acceptable for a portfolio) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ── System prompt ──────────────────────────────────────────────────────────────
const SYSTEM_PROMPT =
  `Tu es l'assistant de Romain Fleury, Head of Product Design. Tu réponds aux questions sur ce case study en te basant sur la documentation fournie. Cette documentation est riche — contexte, rôle, décisions, chiffres, tensions, apprentissages. Utilise tout ce contenu pour donner des réponses précises et complètes. Tu peux reformuler et synthétiser, pas seulement citer. Si une question porte sur un élément présent dans la doc, réponds-y même si elle n'est pas dans les questions suggérées. Si la réponse n'est pas du tout dans la documentation, dis-le clairement et invite à contacter Romain directement. Réponds dans la langue de la question (français ou anglais). Sois direct et concis — pas de blabla, pas de disclaimer.`;

// ── Handler ────────────────────────────────────────────────────────────────────
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Rate limiting by IP
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ??
    req.socket?.remoteAddress ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: "Trop de requêtes. Réessayez dans une minute.",
    });
  }

  // Parse body (Vercel auto-parses JSON bodies)
  const { question, caseStudy, history } = req.body ?? {};

  // Validate question
  if (!question || typeof question !== "string" || question.trim().length === 0) {
    return res.status(400).json({ error: "Paramètre 'question' manquant." });
  }
  if (question.length > 500) {
    return res.status(400).json({
      error: "Question trop longue. Maximum 500 caractères.",
    });
  }

  // Validate caseStudy (alphanumeric + dashes only)
  if (
    !caseStudy ||
    typeof caseStudy !== "string" ||
    !/^[a-z0-9-]+$/.test(caseStudy)
  ) {
    return res.status(400).json({ error: "Paramètre 'caseStudy' invalide." });
  }

  // Read markdown doc
  let docContent: string;
  try {
    const docPath = join(process.cwd(), "docs", `${caseStudy}.md`);
    docContent = readFileSync(docPath, "utf-8");
  } catch {
    return res.status(404).json({ error: "Case study introuvable." });
  }

  // Build messages array with optional history
  type ChatMessage = { role: "user" | "assistant"; content: string };
  const safeHistory: ChatMessage[] = Array.isArray(history)
    ? history
        .filter(
          (m: any) =>
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string"
        )
        .map((m: any) => ({ role: m.role, content: m.content }))
    : [];

  const messages: ChatMessage[] = [
    ...safeHistory,
    { role: "user", content: question.trim() },
  ];

  // Call Anthropic
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  let response: string;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `${SYSTEM_PROMPT}\n\n---\n\nDocumentation du case study :\n\n${docContent}`,
      messages,
    });
    response =
      message.content[0].type === "text" ? message.content[0].text : "";
  } catch (err) {
    console.error("[chat] Anthropic error:", err);
    return res.status(502).json({ error: "Service IA indisponible." });
  }

  // Log to Google Sheets
  await logToSheet({
    date: new Date().toISOString(),
    caseStudy,
    question: question.trim(),
  });

  return res.status(200).json({ response });
}
