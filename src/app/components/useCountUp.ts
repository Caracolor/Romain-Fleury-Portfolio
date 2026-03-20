import { useState, useEffect, useRef } from "react";

/** Cubic ease-out — démarre vite, ralentit vers la fin */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Anime un nombre de 0 vers `target` en `duration` ms.
 * Retourne la valeur courante arrondie.
 */
export function useCountUp(target: number, duration = 5000): number {
  const [count, setCount] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef   = useRef<number>();

  useEffect(() => {
    if (target === 0) { setCount(0); return; }

    startRef.current = null;

    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed  = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return count;
}

/**
 * Parse "12+", "72+", "7", "B2B" → { num, suffix }
 * num = NaN si non numérique (ex: "B2B")
 */
export function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: NaN, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}
