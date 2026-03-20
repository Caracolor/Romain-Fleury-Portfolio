import { useState, useEffect } from "react";

// Les titres alternatifs — head of product design en majorité,
// les autres apparaissent ponctuellement (~toutes les 8-10s)
const TITLES = [
  { line1: "Head of product", line2: "design" },   // primaire
  { line1: "Product design",  line2: "manager" },
  { line1: "Design",          line2: "builder" },
  { line1: "Growth",          line2: "hacker" },
];

export function useAnimatedTitle() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (idx === 0) {
      // Titre primaire : attente longue (8–11s) avant de basculer
      timer = setTimeout(() => {
        const alt = 1 + Math.floor(Math.random() * (TITLES.length - 1));
        setIdx(alt);
      }, 8000 + Math.random() * 3000);
    } else {
      // Titre alternatif : visible 2.5–4s puis retour au primaire
      timer = setTimeout(() => setIdx(0), 2500 + Math.random() * 1500);
    }

    return () => clearTimeout(timer);
  }, [idx]);

  return { ...TITLES[idx], idx };
}
