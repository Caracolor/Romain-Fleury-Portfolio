import { describe, it, expect } from "vitest";
import translations from "./translations_Portfolio.json";

/**
 * useTranslation() (LanguageContext.tsx) does `sectionData[lang]` with no
 * fallback — if a section is missing "en" entirely, or "en" has a
 * different shape than "fr" (a missing key, a shorter array), the site
 * renders `undefined` for that piece of copy when the visitor is in that
 * language, silently, with no error. These tests catch that at commit time
 * instead of by someone clicking around the English version of the site.
 */
describe("translations_Portfolio.json — FR/EN parity", () => {
  const sections = Object.entries(translations) as [string, Record<string, unknown>][];

  it("every top-level section has both a fr and an en entry", () => {
    for (const [name, section] of sections) {
      expect(section, `section "${name}"`).toHaveProperty("fr");
      expect(section, `section "${name}"`).toHaveProperty("en");
    }
  });

  it("fr and en carry the same shape for every section (same keys, same array lengths)", () => {
    const mismatches: string[] = [];
    for (const [name, section] of sections) {
      if (!section.fr || !section.en) continue; // already reported above
      const diff = shapeDiff(section.fr, section.en, name);
      mismatches.push(...diff);
    }
    expect(mismatches, mismatches.join("\n")).toEqual([]);
  });

  it("no translated string is empty", () => {
    const empties: string[] = [];
    for (const [name, section] of sections) {
      for (const lang of ["fr", "en"] as const) {
        collectEmptyStrings((section as Record<string, unknown>)[lang], `${name}.${lang}`, empties);
      }
    }
    expect(empties, empties.join("\n")).toEqual([]);
  });
});

/** Returns a list of human-readable mismatches between two same-language-pair trees. */
function shapeDiff(a: unknown, b: unknown, path: string): string[] {
  const out: string[] = [];

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      out.push(`${path}: one side is an array, the other isn't`);
      return out;
    }
    if (a.length !== b.length) {
      out.push(`${path}: fr has ${a.length} items, en has ${b.length}`);
    }
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) out.push(...shapeDiff(a[i], b[i], `${path}[${i}]`));
    return out;
  }

  const aIsObj = a && typeof a === "object";
  const bIsObj = b && typeof b === "object";
  if (aIsObj || bIsObj) {
    if (!aIsObj || !bIsObj) {
      out.push(`${path}: one side is an object, the other isn't`);
      return out;
    }
    const aKeys = Object.keys(a as object);
    const bKeys = Object.keys(b as object);
    for (const k of aKeys) if (!bKeys.includes(k)) out.push(`${path}.${k}: present in fr, missing in en`);
    for (const k of bKeys) if (!aKeys.includes(k)) out.push(`${path}.${k}: present in en, missing in fr`);
    for (const k of aKeys) {
      if (bKeys.includes(k)) {
        out.push(...shapeDiff((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`));
      }
    }
    return out;
  }

  // Leaves: types should match (e.g. not a string on one side and a
  // boolean — like the "coming_soon" flag — on the other).
  if (typeof a !== typeof b) {
    out.push(`${path}: type mismatch (fr is ${typeof a}, en is ${typeof b})`);
  }
  return out;
}

function collectEmptyStrings(node: unknown, path: string, out: string[]) {
  if (typeof node === "string") {
    if (node.trim() === "") out.push(path);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => collectEmptyStrings(item, `${path}[${i}]`, out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      collectEmptyStrings(v, `${path}.${k}`, out);
    }
  }
}
