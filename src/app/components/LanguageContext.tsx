import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import translationsData from "../../imports/translations_Portfolio.json";

export type Lang = "fr" | "en";

// All section keys available in the JSON
type SectionKey = keyof typeof translationsData;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
});

/**
 * Browser-language detection, the industry-standard signal for this (what
 * GitHub, Stripe, Airbnb… all key off) — not IP/geolocation, which is
 * unreliable (VPNs, travel, corporate proxies) and would need an async
 * lookup that either blocks first paint or flashes the wrong language.
 * navigator.language is synchronous and already reflects the OS/browser's
 * Accept-Language preference.
 *
 * Only "fr" and "en" exist as content, so: French browser → fr, anything
 * else → en (the universal fallback — this portfolio also targets non-FR
 * recruiters).
 */
export function detectLang(): Lang {
  if (typeof navigator === "undefined") return "fr";
  const primary = navigator.language || navigator.languages?.[0];
  return primary?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>(() => {
    try {
      // An explicit past choice (the FR/EN toggle) always wins over
      // browser detection — we never override what the visitor picked.
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "fr") return stored;
    } catch {}
    return detectLang();
  });

  // Sync <html lang="…"> with current language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    if (l === lang) return;
    const root = document.documentElement;
    // Phase 1: fade text out
    root.classList.add("lang-fade-out");
    setTimeout(() => {
      // Phase 2: swap language while invisible, then fade in
      setLangRaw(l);
      root.classList.remove("lang-fade-out");
      root.classList.add("lang-fade-in");
      setTimeout(() => root.classList.remove("lang-fade-in"), 150);
    }, 150);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Returns the translated content for a given section key.
 * Usage: const nav = useTranslation("nav");
 *        nav.about // → "About" or "À propos" depending on lang
 */
export function useTranslation<K extends SectionKey>(section: K) {
  const { lang } = useLanguage();
  const sectionData = translationsData[section] as Record<string, unknown>;
  return sectionData[lang] as (typeof translationsData)[K]["fr"];
}