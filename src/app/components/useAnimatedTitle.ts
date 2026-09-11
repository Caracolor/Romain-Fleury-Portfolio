import { useState, useEffect } from "react";
import { useHomeVariant, type HomeVariant } from "./HomeVariant";

type TitleSpec = { full: string; split: number };

// split = nombre de caractères dans le premier pill (999 = tout dans un seul pill)

// Le titre "primaire" (celui qui reste affiché la majeure partie du temps,
// et sur lequel l'animation revient) dépend de l'URL : "/MG" veut lire
// "Product designer manager" dès l'arrivée, "/" et "/IC" "Senior/Staff
// Product designer" — voir HomeVariant.tsx.
const PRIMARY: Record<HomeVariant, TitleSpec> = {
  // Both are too wide for the 54px single-pill layout at its intended
  // container width (measured: 597px / 547px rendered vs a 438px box) —
  // split onto two stacked pills like the pre-existing "Product design
  // manager" alternate did, instead of overflowing on one line.
  ic: { full: "Senior/Staff Product designer", split: 12 }, // "Senior/Staff" | "Product designer"
  mg: { full: "Product designer manager", split: 16 },      // "Product designer" | "manager"
};

// Titres secondaires, affichés brièvement entre deux passages sur le titre
// primaire — pure fantaisie, communs aux deux variantes. Le titre "primaire"
// de l'AUTRE variante y est inclus aussi, pour rester lisible si le lien
// circule au-delà de son audience d'origine.
const FLAVOR: TitleSpec[] = [
  { full: "Design builder", split: 999 },
  { full: "Growth hacker", split: 999 },
];

// Titre supplémentaire, propre à /MG uniquement.
const MG_EXTRA: TitleSpec[] = [{ full: "Head of design", split: 999 }];

function titlesFor(variant: HomeVariant): TitleSpec[] {
  const other = variant === "ic" ? PRIMARY.mg : PRIMARY.ic;
  const extra = variant === "mg" ? MG_EXTRA : [];
  return [PRIMARY[variant], other, ...extra, ...FLAVOR];
}

export type AnimatedTitleState = {
  p1: string;         // contenu du premier pill
  p2: string;         // contenu du deuxième pill ("" = caché)
  isAnimating: boolean;
};

export function useAnimatedTitle(): AnimatedTitleState {
  const variant = useHomeVariant();
  const TITLES = titlesFor(variant);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx,    setNextIdx]    = useState(0);
  const [displayed,  setDisplayed]  = useState(TITLES[0].full);
  const [phase, setPhase] = useState<"idle" | "erasing" | "typing">("idle");

  // Planifie le prochain changement
  useEffect(() => {
    if (phase !== "idle") return;
    const delay  = currentIdx === 0
      ? 8000 + Math.random() * 3000   // primaire : 8-11s
      : 2500 + Math.random() * 1500;  // alternatif : 2.5-4s
    const target = currentIdx === 0
      ? 1 + Math.floor(Math.random() * (TITLES.length - 1))
      : 0;
    const timer = setTimeout(() => {
      setNextIdx(target);
      setPhase("erasing");
    }, delay);
    return () => clearTimeout(timer);
  }, [phase, currentIdx]);

  // Efface caractère par caractère (30ms/char)
  useEffect(() => {
    if (phase !== "erasing") return;
    if (displayed.length === 0) {
      setCurrentIdx(nextIdx);
      setPhase("typing");
      return;
    }
    const timer = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 16);
    return () => clearTimeout(timer);
  }, [phase, displayed]);

  // Réécrit caractère par caractère (42ms/char)
  useEffect(() => {
    if (phase !== "typing") return;
    const target = TITLES[currentIdx].full;
    if (displayed.length >= target.length) {
      setPhase("idle");
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(TITLES[currentIdx].full.slice(0, displayed.length + 1));
    }, 22);
    return () => clearTimeout(timer);
  }, [phase, displayed, currentIdx]);

  // Calcule les contenus des deux pills
  const { split, full } = TITLES[currentIdx];
  let p1: string;
  let p2: string;

  if (displayed.length <= split) {
    // Tout rentre dans le premier pill
    p1 = displayed;
    p2 = "";
  } else {
    // On fixe pill1 au contenu cible et pill2 reçoit le reste
    p1 = full.slice(0, split);
    p2 = displayed.slice(split + 1); // +1 pour sauter l'espace
  }

  return { p1, p2, isAnimating: phase !== "idle" };
}
