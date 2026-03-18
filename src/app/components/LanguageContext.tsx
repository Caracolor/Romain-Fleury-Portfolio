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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "fr") return stored;
    } catch {}
    return "fr";
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