import { useState, useEffect } from "react";

// split = nombre de caractères dans le premier pill (999 = tout dans un seul pill)
const TITLES = [
  { full: "Head of product design", split: 15 },  // "Head of product" | "design"
  { full: "Product design manager", split: 14 },  // "Product design"  | "manager"
  { full: "Design builder",         split: 999 }, // "Design builder"  (1 pill)
  { full: "Growth hacker",          split: 999 }, // "Growth hacker"   (1 pill)
];

export type AnimatedTitleState = {
  p1: string;         // contenu du premier pill
  p2: string;         // contenu du deuxième pill ("" = caché)
  isAnimating: boolean;
};

export function useAnimatedTitle(): AnimatedTitleState {
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
