// Test script: appelle logToSheet directement et affiche le résultat complet
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

// Charge .env.local manuellement
const envPath = decodeURIComponent(new URL("../.env.local", import.meta.url).pathname);
const env = readFileSync(envPath, "utf-8");
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq < 0) continue;
  const key = trimmed.slice(0, eq).trim();
  let val = trimmed.slice(eq + 1).trim();
  // Strip surrounding quotes only — leave escape sequences intact
  if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
    val = val.slice(1, -1);
  }
  process.env[key] = val;
}

// --- Copie inline de logToSheet pour voir les erreurs complètes ---

const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
const sheetId = process.env.GOOGLE_SHEET_ID;

console.log("GOOGLE_SHEET_ID:", sheetId ?? "(missing)");
console.log(
  "GOOGLE_SERVICE_ACCOUNT_JSON:",
  serviceAccountJson ? `${serviceAccountJson.slice(0, 40)}...` : "(missing)"
);

if (!serviceAccountJson || !sheetId) {
  console.error("❌ Variables manquantes — arrêt.");
  process.exit(1);
}

// Parse JSON
// Vercel .env.local stores the JSON with literal \n (backslash-n) for both:
//   1. Outer formatting whitespace  → must become real whitespace for JSON.parse
//   2. Inside string values (\n escape sequence) → must stay as \n
// A state machine handles both cases correctly.
function sanitizeEnvJson(raw: string): string {
  let result = "";
  let inString = false;
  let i = 0;
  while (i < raw.length) {
    const ch = raw[i];
    if (inString) {
      if (ch === "\\") {
        // Escape sequence — keep both chars (e.g. \n, \", \\)
        result += ch;
        i++;
        if (i < raw.length) { result += raw[i]; i++; }
      } else if (ch === '"') {
        result += ch; inString = false; i++;
      } else {
        result += ch; i++;
      }
    } else {
      if (ch === '"') {
        result += ch; inString = true; i++;
      } else if (ch === "\\" && i + 1 < raw.length && raw[i + 1] === "n") {
        // Structural \n outside a string → convert to real newline (valid JSON whitespace)
        result += "\n"; i += 2;
      } else {
        result += ch; i++;
      }
    }
  }
  return result;
}

let serviceAccount: { client_email: string; private_key: string };
try {
  serviceAccount = JSON.parse(sanitizeEnvJson(serviceAccountJson));
  console.log("✅ JSON parsé — client_email:", serviceAccount.client_email);
} catch (e) {
  console.error("❌ Impossible de parser GOOGLE_SERVICE_ACCOUNT_JSON :", e);
  process.exit(1);
}

// Build JWT
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

let jwt: string;
try {
  const sign = createSign("RSA-SHA256");
  sign.update(toSign);
  const signature = sign.sign(privateKey, "base64url");
  jwt = `${toSign}.${signature}`;
  console.log("✅ JWT signé");
} catch (e) {
  console.error("❌ Erreur de signature JWT :", e);
  process.exit(1);
}

// Exchange JWT for access token
console.log("⏳ Échange du JWT contre un access token...");
const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  }),
});
const tokenData = (await tokenRes.json()) as Record<string, unknown>;
console.log("Token response:", JSON.stringify(tokenData, null, 2));

if (!tokenData.access_token) {
  console.error("❌ Pas d'access_token — arrêt.");
  process.exit(1);
}
const accessToken = tokenData.access_token as string;
console.log("✅ Access token obtenu");

// Append to sheet
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED`;
console.log("⏳ Appel Google Sheets API...", url);

const response = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    values: [[new Date().toISOString(), "test", "Test de connexion Google Sheets"]],
  }),
});

const body = await response.text();
console.log(`\nHTTP ${response.status}`);
console.log("Response:", body);

if (response.ok) {
  console.log("\n✅ Ligne ajoutée dans le sheet !");
} else {
  console.error("\n❌ Erreur Google Sheets API — voir ci-dessus.");
}
