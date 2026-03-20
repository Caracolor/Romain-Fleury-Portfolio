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
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3], useSpaceFormat };
}
