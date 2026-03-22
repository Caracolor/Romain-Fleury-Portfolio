/**
 * Local dev API server — mirrors /api/chat for use with `npm run dev` (Vite).
 * Reads .env.local automatically. Runs on port 3001.
 * Proxy in vite.config.ts routes /api → http://localhost:3001.
 *
 * Terminal 1: npm run dev
 * Terminal 2: npm run dev:api
 */

import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createSign } from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// ── Load .env.local ────────────────────────────────────────────────────────────
try {
  const envFile = readFileSync(join(process.cwd(), ".env.local"), "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const raw = trimmed.slice(eqIdx + 1).trim();
    // Strip surrounding quotes (single or double)
    const val = raw.replace(/^["']|["']$/g, "");
    if (key && !(key in process.env)) process.env[key] = val;
  }
  console.log("[dev-api] Loaded .env.local");
} catch {
  console.warn("[dev-api] No .env.local found — using existing env vars");
}

// ── Rate limiter ───────────────────────────────────────────────────────────────
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

// ── Google Sheets logger ───────────────────────────────────────────────────────
async function getGoogleAccessToken(serviceAccount: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify(claim)).toString("base64url");
  const toSign = `${header}.${payload}`;
  const privateKey = serviceAccount.private_key.replace(/\\n/g, "\n");
  const sign = createSign("RSA-SHA256");
  sign.update(toSign);
  const signature = sign.sign(privateKey, "base64url");
  const jwt = `${toSign}.${signature}`;
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = (await tokenRes.json()) as { access_token: string };
  return data.access_token;
}

async function logToSheet(params: { date: string; caseStudy: string; question: string }) {
  try {
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!serviceAccountJson || !sheetId) return;
    const serviceAccount = JSON.parse(serviceAccountJson);
    const accessToken = await getGoogleAccessToken(serviceAccount);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED`;
    await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [[params.date, params.caseStudy, params.question]] }),
    });
  } catch (err) {
    console.error("[dev-api] logToSheet error:", err);
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function send(res: ServerResponse, status: number, data: unknown) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(body);
}

// ── Server ────────────────────────────────────────────────────────────────────
const PORT = 3001;

async function handleChat(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "POST") return send(res, 405, { error: "Method Not Allowed" });

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ??
    req.socket?.remoteAddress ??
    "unknown";

  if (!checkRateLimit(ip)) return send(res, 429, { error: "Trop de requêtes. Réessayez dans une minute." });

  type ChatMessage = { role: "user" | "assistant"; content: string };
  let body: { question?: string; caseStudy?: string; history?: ChatMessage[] };
  try {
    body = JSON.parse(await readBody(req));
  } catch {
    return send(res, 400, { error: "Corps JSON invalide." });
  }

  const { question, caseStudy, history } = body;

  if (!question || typeof question !== "string" || question.trim().length === 0)
    return send(res, 400, { error: "Paramètre 'question' manquant." });
  if (question.length > 500)
    return send(res, 400, { error: "Question trop longue. Maximum 500 caractères." });
  if (!caseStudy || typeof caseStudy !== "string" || !/^[a-z0-9-]+$/.test(caseStudy))
    return send(res, 400, { error: "Paramètre 'caseStudy' invalide." });

  let docContent: string;
  try {
    docContent = readFileSync(join(process.cwd(), "docs", `${caseStudy}.md`), "utf-8");
  } catch {
    return send(res, 404, { error: "Case study introuvable." });
  }

  // Build messages array with optional history
  const safeHistory: ChatMessage[] = Array.isArray(history)
    ? history.filter(
        (m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
      )
    : [];

  const messages: ChatMessage[] = [
    ...safeHistory,
    { role: "user", content: question.trim() },
  ];

  // Dynamic import of Anthropic SDK (installed in project)
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  let response: string;
  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `${SYSTEM_PROMPT}\n\n---\n\nDocumentation du case study :\n\n${docContent}`,
      messages,
    });
    response = message.content[0].type === "text" ? message.content[0].text : "";
  } catch (err) {
    console.error("[dev-api] Anthropic error:", err);
    return send(res, 502, { error: "Service IA indisponible." });
  }

  return send(res, 200, { response });
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url ?? "/", `http://localhost:${PORT}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }

  if (url.pathname === "/api/chat") {
    handleChat(req, res).catch((err) => {
      console.error("[dev-api] Unhandled error:", err);
      send(res, 500, { error: "Erreur interne." });
    });
  } else {
    send(res, 404, { error: "Not found" });
  }
});

server.listen(PORT, () => {
  console.log(`[dev-api] ✓ API server ready → http://localhost:${PORT}/api/chat`);
});
