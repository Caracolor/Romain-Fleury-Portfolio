import { useCountUp, parseStatValue } from "./useCountUp";

/** Affiche une valeur stat animée (count-up). Gère "12+", "€18k", "+56%", "2 179", "B2B"… */
export function AnimatedStatValue({ value }: { value: string }) {
  const { prefix, num, suffix, useSpaceFormat } = parseStatValue(value);
  const count = useCountUp(isNaN(num) ? 0 : num);

  if (isNaN(num)) return <>{value}</>;

  const formatted = useSpaceFormat && count >= 1000
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0")
    : count.toString();

  return <>{prefix}{formatted}{suffix}</>;
}
