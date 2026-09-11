import { describe, it, expect } from "vitest";
import { parseStatValue } from "./useCountUp";
import translations from "../../imports/translations_Portfolio.json";

describe("parseStatValue", () => {
  it("parses a plain integer with a trailing suffix", () => {
    expect(parseStatValue("12+")).toEqual({
      prefix: "", num: 12, suffix: "+", useSpaceFormat: false,
    });
  });

  it("parses a leading currency/sign prefix", () => {
    expect(parseStatValue("€18k")).toEqual({
      prefix: "€", num: 18, suffix: "k", useSpaceFormat: false,
    });
    expect(parseStatValue("+56%")).toEqual({
      prefix: "+", num: 56, suffix: "%", useSpaceFormat: false,
    });
    expect(parseStatValue("-146K")).toEqual({
      prefix: "-", num: 146, suffix: "K", useSpaceFormat: false,
    });
  });

  it("detects space-separated thousands (French formatting) and strips the space", () => {
    const result = parseStatValue("2 179");
    expect(result.num).toBe(2179);
    expect(result.useSpaceFormat).toBe(true);
  });

  it("parses a bare number with no prefix or suffix", () => {
    expect(parseStatValue("7")).toEqual({
      prefix: "", num: 7, suffix: "", useSpaceFormat: false,
    });
  });

  it("leaves non-numeric values alone (num is NaN, suffix carries the original string)", () => {
    const result = parseStatValue("XL");
    expect(Number.isNaN(result.num)).toBe(true);
    expect(result.suffix).toBe("XL");
  });

  // Regression test: "B2B"/"B2C" (real values in the stats section) used
  // to parse as num=2 with a "B" stuck on each side, because a letter
  // directly against the digit looks the same to the regex as a genuine
  // unit prefix. That made the count-up animation flicker through "B0B"
  // -> "B1B" -> "B2B" before settling. A letter prefix now bails out to
  // the static-text fallback instead.
  it("does not mistake a short alphanumeric code for a number with a letter prefix", () => {
    for (const value of ["B2B", "B2C"]) {
      const result = parseStatValue(value);
      expect(Number.isNaN(result.num), value).toBe(true);
      expect(result.suffix, value).toBe(value);
    }
  });

  // ── Known gap: a second digit group separated from the first by a
  // non-digit character (a decimal comma/point, a slash, a dash-range)
  // breaks the ^([^0-9]*)(\d+)([^0-9]*)$ regex, since it allows only ONE
  // contiguous run of digits. The function still degrades safely (NaN,
  // no crash — AnimatedStatValue then renders the raw string statically),
  // but it silently drops the count-up animation for these real site
  // values. Documented here so a future format tweak doesn't reintroduce
  // it unnoticed, and so it's visible as a known, non-crashing gap rather
  // than a mystery if someone notices these stats don't animate.
  describe("known gap — values with a second digit group", () => {
    it.each([
      ["8,4M€", "FR decimal comma (Branded Call revenue)"],
      ["€8.4M", "EN decimal point (Branded Call revenue)"],
      ["1/3", "fraction (Monetisation revenue share)"],
      ["75-85%", "range (Chronic Programs retention)"],
      ["2,179", "EN thousands comma (Chronic Programs patients)"],
      ["2,167h", "EN thousands comma (Branded Call hours)"],
    ])("%s (%s) parses to NaN instead of animating", (value) => {
      const result = parseStatValue(value);
      expect(Number.isNaN(result.num)).toBe(true);
    });
  });

  it("parses every FR hero/stat value in the translations file without throwing", () => {
    // Not asserting every one animates (see the documented gap above) —
    // just that parsing never throws, since AnimatedStatValue relies on
    // parseStatValue never blowing up mid-render.
    const values = collectStatValues(translations);
    expect(values.length).toBeGreaterThan(0);
    for (const v of values) {
      expect(() => parseStatValue(v)).not.toThrow();
    }
  });
});

/** Recursively collect every string found under a "value" key in the translations tree. */
function collectStatValues(node: unknown, out: string[] = []): string[] {
  if (Array.isArray(node)) {
    for (const item of node) collectStatValues(item, out);
  } else if (node && typeof node === "object") {
    for (const [key, val] of Object.entries(node as Record<string, unknown>)) {
      if (key === "value" && typeof val === "string") out.push(val);
      else collectStatValues(val, out);
    }
  }
  return out;
}
