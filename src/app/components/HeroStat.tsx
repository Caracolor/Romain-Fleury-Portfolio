import { StatTooltip } from "./StatTooltip";
import { AnimatedStatValue } from "./AnimatedStatValue";

/** Single stat value + label used in hero stats cards. */
export function HeroStat({
  value,
  label,
  tooltip,
  width,
  flex: flexItem,
}: {
  value: string;
  label: string;
  tooltip?: string;
  width?: number;
  flex?: boolean;
}) {
  return (
    <StatTooltip tooltip={tooltip}>
      <div
        className="flex flex-col items-center gap-[2px]"
        style={flexItem ? { flex: 1, minWidth: 0 } : { width: width ?? 132 }}
      >
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[28px] md:text-[32px] text-center w-full">
          <AnimatedStatValue value={value} />
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[13px] md:text-[16px] text-center leading-[18px] md:leading-[normal]">
          {label}
        </p>
      </div>
    </StatTooltip>
  );
}
