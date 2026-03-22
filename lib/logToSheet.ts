interface LogParams {
  date: string;
  caseStudy: string;
  question: string;
}

// Sign a string with an RSA-SHA256 private key using the Web Crypto API
// (globally available in Node.js 18+ — no import needed)
async function signRS256(data: string, pemKey: string): Promise<string> {
  const pemContents = pemKey
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");

  const binaryKey = Buffer.from(pemContents, "base64");

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(data)
  );

  return Buffer.from(signature).toString("base64url");
}

// Build a signed JWT and exchange it for a Google OAuth2 access token
async function getAccessToken(serviceAccount: {
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

  const header = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" })
  ).toString("base64url");

  const payload = Buffer.from(JSON.stringify(claim)).toString("base64url");
  const toSign = `${header}.${payload}`;

  // Private keys stored as env vars have literal \n — restore real newlines
  const privateKey = serviceAccount.private_key.replace(/\\n/g, "\n");

  const signature = await signRS256(toSign, privateKey);
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

// Append one row [date, caseStudy, question] to the Google Sheet.
// Never throws — errors are logged silently to avoid blocking the API response.
export async function logToSheet(params: LogParams): Promise<void> {
  try {
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountJson || !sheetId) {
      console.error(
        "[logToSheet] Missing GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SHEET_ID."
      );
      return;
    }

    const serviceAccount = JSON.parse(serviceAccountJson);
    const accessToken = await getAccessToken(serviceAccount);

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[params.date, params.caseStudy, params.question]],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[logToSheet] Google Sheets API error:", errorText);
    }
  } catch (err) {
    console.error("[logToSheet] Unexpected error:", err);
  }
}
