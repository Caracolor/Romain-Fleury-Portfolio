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
 * Parse des valeurs comme "12+", "€18k", "+56%", "2 179", "B2B"
 * → { prefix, num, suffix, useSpaceFormat }
 * num = NaN si non numérique (ex: "B2B", "Remote")
 */
export function parseStatValue(value: string): {
  prefix: string;
  num: number;
  suffix: string;
  useSpaceFormat: boolean; // "2 179" → true, affiche avec espace milliers
} {
  // Supprimer les espaces internes pour détecter le nombre ("2 179" → "2179")
  const useSpaceFormat = /\d[\s\u00A0]\d/.test(value);
  const cleaned = value.replace(/[\s\u00A0]/g, "");

  // prefix (non-chiffre) + nombre + suffix (non-chiffre)
  const match = cleaned.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: "", num: NaN, suffix: value, useSpaceFormat: false };

  return {
    prefix: match[1],                  // "€", "+", ""
    num: parseInt(match[2], 10),       // 18, 56, 2179
    suffix: match[3],                  // "k", "%", "+"
    useSpaceFormat,
  };
}

/**
 * Composant React affichant une valeur stat animée.
 * Gère : "12+", "€18k", "+56%", "2 179", "B2B", "Remote"…
 */
export function AnimatedStatValue({ value }: { value: string }) {
  const { prefix, num, suffix, useSpaceFormat } = parseStatValue(value);
  const count = useCountUp(isNaN(num) ? 0 : num);

  if (isNaN(num)) return <>{value}</>;

  const formatted = useSpaceFormat && count >= 1000
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") // espace insécable
    : count.toString();

  return <>{prefix}{formatted}{suffix}</>;
}
