import { createContext, useContext, type ReactNode } from "react";
import { useTranslation } from "./LanguageContext";
import translationsData from "../../imports/translations_Portfolio.json";

/**
 * The homepage exists at three URLs framed for different readers:
 *  - "/" and "/IC" — the default: Senior/Staff Product Designer (IC).
 *  - "/MG"         — Design Manager framing.
 * Only a handful of sections actually differ per audience (hero title,
 * stats order, intro paragraph); everything else on the page — projects,
 * experience, footer — stays the same regardless of variant.
 */
export type HomeVariant = "ic" | "mg";

const HomeVariantContext = createContext<HomeVariant>("ic");

export function HomeVariantProvider({
  variant,
  children,
}: {
  variant: HomeVariant;
  children: ReactNode;
}) {
  return (
    <HomeVariantContext.Provider value={variant}>
      {children}
    </HomeVariantContext.Provider>
  );
}

export function useHomeVariant(): HomeVariant {
  return useContext(HomeVariantContext);
}

/**
 * The only sections with a "_mg" audience-specific rewrite. The hero pill
 * itself (the big animated "Senior/Staff Product designer" /
 * "Product designer manager" title) isn't translated content at all — see
 * useAnimatedTitle.ts, which reads the variant directly.
 */
type VariantableSection = "stats" | "intro";

/**
 * Same as useTranslation(), for the sections above: reads "<section>_mg"
 * when the variant is "mg", otherwise reads the plain section — which
 * already carries the IC (default) copy. A page that never renders inside
 * a HomeVariantProvider gets "ic" from the context's default value, so
 * this is safe to use without changing behavior anywhere else.
 */
export function useVariantTranslation<S extends VariantableSection>(section: S) {
  const variant = useHomeVariant();
  const key = (variant === "mg" ? `${section}_mg` : section) as keyof typeof translationsData;
  return useTranslation(key);
}
