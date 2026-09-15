import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// ── Rate limiter (in-memory, resets on cold start - acceptable for a portfolio) ──
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

// ── Google Sheets logger (inlined - no cross-directory import) ──────────────
async function logToSheet(params: {
  date: string;
  caseStudy: string;
  question: string;
  response: string;
}): Promise<void> {
  try {
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!serviceAccountJson || !sheetId) return;

    const sa = JSON.parse(serviceAccountJson) as {
      client_email: string;
      private_key: string;
    };

    // Build JWT
    const now = Math.floor(Date.now() / 1000);
    const claim = {
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    };
    const b64url = (s: string) =>
      Buffer.from(s).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

    const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
    const payload = b64url(JSON.stringify(claim));
    const toSign = `${header}.${payload}`;

    // Sign with Web Crypto (global in Node.js 18+)
    const pem = sa.private_key
      .replace(/\\n/g, "\n")
      .replace(/-----BEGIN PRIVATE KEY-----/, "")
      .replace(/-----END PRIVATE KEY-----/, "")
      .replace(/\s/g, "");

    const keyData = Uint8Array.from(Buffer.from(pem, "base64"));
    const cryptoKey = await globalThis.crypto.subtle.importKey(
      "pkcs8",
      keyData,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const sigBuf = await globalThis.crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      new TextEncoder().encode(toSign)
    );
    const sig = Buffer.from(sigBuf)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

    const jwt = `${toSign}.${sig}`;

    // Exchange JWT for access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });
    const tokenData = (await tokenRes.json()) as { access_token?: string };
    if (!tokenData.access_token) {
      console.error("[logToSheet] No access_token:", tokenData);
      return;
    }

    // Append row to sheet
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED`;
    const sheetRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[params.date, params.caseStudy, params.question, params.response]],
      }),
    });
    if (!sheetRes.ok) {
      console.error("[logToSheet] Sheets API error:", await sheetRes.text());
    }
  } catch (err) {
    console.error("[logToSheet] Error:", err);
  }
}

// ── System prompt ──────────────────────────────────────────────────────────────
const SYSTEM_PROMPT =
  `Tu es l'assistant de Romain Fleury, Head of Product Design. Tu réponds aux questions sur ce portfolio (le case study en question, ou Romain en général — son parcours, ce qu'il cherche, ses autres projets) en te basant sur la documentation fournie. Cette documentation est riche - contexte, rôle, décisions, chiffres, tensions, apprentissages. Utilise tout ce contenu pour donner des réponses précises et complètes. Tu peux reformuler et synthétiser, pas seulement citer. Si une question porte sur un élément présent dans la doc, réponds-y même si elle n'est pas dans les questions suggérées. Si la réponse n'est pas du tout dans la documentation, dis-le clairement et invite à contacter Romain directement. Réponds dans la langue de la question (français ou anglais). Sois direct et concis - pas de blabla, pas de disclaimer.`;

// The special "caseStudy" value the global floating widget sends when the
// visitor isn't asking about one specific project — loads every doc at once
// (the general bio plus all four case studies) instead of a single file.
const GENERAL_SCOPE = "general";
const ALL_CASE_STUDY_SLUGS = [
  "chronic-programs",
  "llm-medical",
  "monetisation",
  "branded-call",
];

// Human-readable labels for the "currentProject" hint below — keeps the
// hint sentence unambiguous on its own, without relying on the model to
// have already parsed which doc section corresponds to which slug.
const CASE_STUDY_LABELS: Record<string, string> = {
  "chronic-programs": "Programmes chroniques (Qare Shape & Mind)",
  "llm-medical": "Optimiser le temps médical (LLM & Hybrid TC)",
  monetisation: "Monétisation dans la santé",
  "branded-call": "Branded Call",
};

function loadDoc(slug: string): string {
  return readFileSync(join(process.cwd(), "docs", `${slug}.md`), "utf-8");
}

// currentProjectSlug (validated by the caller): when set, that project's
// doc is pulled out and placed right after the bio, clearly marked as the
// one to default to — ahead of the other 3, which are relabeled as
// reference-only. A single instruction sentence competing against 4 flatly
// concatenated docs of equal visual weight wasn't enough on its own (the
// model kept blending case studies together); reordering + explicitly
// marking one section as primary is a stronger, structural nudge than
// prompt wording alone.
function loadGeneralDocContent(currentProjectSlug: string | null): string {
  const about = loadDoc("about-romain");
  const otherSlugs = ALL_CASE_STUDY_SLUGS.filter((slug) => slug !== currentProjectSlug);

  const currentSection = currentProjectSlug
    ? `=== PROJET ACTUEL DE LA PAGE VISITÉE (${CASE_STUDY_LABELS[currentProjectSlug]}) — réponds avec CE case study par défaut pour toute question qui ne nomme pas explicitement un autre projet ===\n\n${loadDoc(currentProjectSlug)}`
    : null;

  const otherSection = `=== AUTRES ÉTUDES DE CAS — ne t'y réfère que si la question nomme explicitement un de ces projets ===\n\n${otherSlugs
    .map((slug) => loadDoc(slug))
    .join("\n\n===\n\n")}`;

  const sections = currentSection ? [about, currentSection, otherSection] : [about, otherSection];
  return sections.join("\n\n===\n\n");
}

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
  const { question, caseStudy, history, currentProject } = req.body ?? {};

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

  // The floating widget is one conversation shared across every page, so a
  // question like "quel était son rôle sur ce projet ?" asked from a
  // project page arrives here as GENERAL_SCOPE (all 4 docs loaded, so
  // follow-up general/bio questions still work) with no project named.
  // currentProject (the page the visitor is currently on, if any) breaks
  // that ambiguity — loadGeneralDocContent() below puts it first and
  // labels it as the default.
  const currentProjectSlug: string | null =
    caseStudy === GENERAL_SCOPE &&
    typeof currentProject === "string" &&
    ALL_CASE_STUDY_SLUGS.includes(currentProject)
      ? currentProject
      : null;

  // Read markdown doc(s) — "general" (the floating widget) loads everything
  // at once instead of a single case study's file.
  let docContent: string;
  try {
    docContent =
      caseStudy === GENERAL_SCOPE ? loadGeneralDocContent(currentProjectSlug) : loadDoc(caseStudy);
  } catch {
    return res.status(404).json({ error: "Case study introuvable." });
  }

  const currentProjectLabel = currentProjectSlug ? CASE_STUDY_LABELS[currentProjectSlug] : null;

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
      model: "claude-sonnet-5",
      max_tokens: 1024,
      system: currentProjectLabel
        ? `${SYSTEM_PROMPT}\n\nLe visiteur est actuellement sur la page du case study "${currentProjectLabel}" — la documentation ci-dessous met cette section en premier, marquée "PROJET ACTUEL DE LA PAGE VISITÉE". Si sa question ne précise pas de quel projet il parle (ex: "ce projet", "il a fait comment ici", "quel était son rôle"), réponds avec CETTE section, sans mélanger avec les autres études de cas et sans demander de clarification. N'utilise les sections "AUTRES ÉTUDES DE CAS" que si la question nomme explicitement un autre projet.\n\n---\n\nDocumentation :\n\n${docContent}`
        : `${SYSTEM_PROMPT}\n\n---\n\nDocumentation :\n\n${docContent}`,
      messages,
    });
    const textBlock = message.content.find((block) => block.type === "text");
    response = textBlock?.type === "text" ? textBlock.text : "";
  } catch (err) {
    console.error("[chat] Anthropic error:", err);
    return res.status(502).json({ error: "Service IA indisponible." });
  }

  // Log to Google Sheets (never throws - errors logged silently)
  await logToSheet({
    date: new Date().toISOString(),
    caseStudy,
    question: question.trim(),
    response,
  });

  return res.status(200).json({ response });
}
