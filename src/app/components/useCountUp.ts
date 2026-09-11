import { useState, useEffect, useRef } from "react";

/** Cubic ease-out — démarre vite, ralentit vers la fin */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

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

export function parseStatValue(value: string): {
  prefix: string; num: number; suffix: string; useSpaceFormat: boolean;
} {
  const useSpaceFormat = /\d[\s\u00A0]\d/.test(value);
  const cleaned = value.replace(/[\s\u00A0]/g, "");
  const match = cleaned.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: "", num: NaN, suffix: value, useSpaceFormat: false };
  const [, prefix, digits, suffix] = match;
  // A letter in front of the digits means this isn't a magnitude at all \u2014
  // it's a short code like "B2B"/"B2C" that happens to contain a digit.
  // Every real prefix in this codebase is a currency/sign symbol (\u20AC, +, -),
  // never a letter, so this can't misfire on a genuine stat. Left
  // unguarded, "B2B" parsed as num=2 with prefix/suffix "B", and the
  // count-up animation would visibly flicker "B0B" -> "B1B" -> "B2B"
  // before landing on the right text.
  if (/[A-Za-z]/.test(prefix)) return { prefix: "", num: NaN, suffix: value, useSpaceFormat: false };
  return { prefix, num: parseInt(digits, 10), suffix, useSpaceFormat };
}
