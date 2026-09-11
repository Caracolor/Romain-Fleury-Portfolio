import { describe, it, expect, afterEach, vi } from "vitest";
import { detectLang } from "./LanguageContext";

function withNavigator(nav: Partial<Navigator> | undefined) {
  vi.stubGlobal("navigator", nav);
}

describe("detectLang", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("picks fr for a French browser locale", () => {
    withNavigator({ language: "fr-FR", languages: ["fr-FR", "en-US"] });
    expect(detectLang()).toBe("fr");
  });

  it("picks fr regardless of region/casing (fr-CA, FR-fr, etc.)", () => {
    withNavigator({ language: "fr-CA" });
    expect(detectLang()).toBe("fr");
    withNavigator({ language: "FR" });
    expect(detectLang()).toBe("fr");
  });

  it("falls back to en for any non-French locale", () => {
    for (const lang of ["en-US", "de-DE", "es-ES", "ja-JP", "pt-BR"]) {
      withNavigator({ language: lang });
      expect(detectLang(), lang).toBe("en");
    }
  });

  it("falls back to navigator.languages[0] when navigator.language is unset", () => {
    withNavigator({ language: "", languages: ["fr-BE", "en-US"] });
    expect(detectLang()).toBe("fr");
  });

  it("never throws when navigator carries no usable language info", () => {
    withNavigator({});
    expect(detectLang()).toBe("en");
  });

  it("defaults to fr when navigator itself is unavailable (non-browser context)", () => {
    vi.stubGlobal("navigator", undefined);
    expect(detectLang()).toBe("fr");
  });
});
