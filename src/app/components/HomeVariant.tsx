import { createContext, useContext, type ReactNode } from "react";
import { useTranslation } from "./LanguageContext";
import translationsData from "../../imports/translations_Portfolio.json";

/**
 * The homepage exists at three URLs framed for different readers:
 *  - "/" and "/IC" — the default: Senior/Staff Product Designer (IC).
 *  - "/MG"         — Design Manager framing.
 * Only a handful of sections actually differ per audience (hero title,
 * stats, the "What I'm looking for" footer); everything else on the
 * page — the intro paragraph, projects, experience — stays the same
 * regardless of variant.
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

// ── Remembering which homepage a visitor is browsing ────────────────────
// A recruiter who opened /MG, then clicked into a project case study, and
// then hit the logo or the "About"/"Experience" nav links to come back,
// would otherwise land back on "/" — which resolves to the IC framing —
// losing the persona the link was meant to convey for the rest of their
// visit. Home.tsx records its resolved variant here on every render; the
// three "go home" actions in Header.tsx read it back instead of hardcoding
// "/", so they return to whichever homepage the visit actually started on.
const SESSION_KEY = "homeVariant";

export function rememberHomeVariant(variant: HomeVariant) {
  try {
    sessionStorage.setItem(SESSION_KEY, variant);
  } catch {
    // sessionStorage unavailable (private mode, etc.) — fall back silently
    // to always treating the visit as the default IC framing.
  }
}

/** Where a "go home" action should land, given the current visit's variant. */
export function getHomePath(): string {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "mg" ? "/MG" : "/";
  } catch {
    return "/";
  }
}

/** "/", "/IC" and "/MG" (any casing — routing itself is case-insensitive). */
export function isHomePath(pathname: string): boolean {
  return ["/", "/ic", "/mg"].includes(pathname.toLowerCase());
}

/**
 * The only sections with a "_mg" audience-specific rewrite. The hero pill
 * itself (the big animated "Senior/Staff Product designer" /
 * "Product designer manager" title) isn't translated content at all — see
 * useAnimatedTitle.ts, which reads the variant directly.
 */
type VariantableSection = "stats" | "footer_looking_for";

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
