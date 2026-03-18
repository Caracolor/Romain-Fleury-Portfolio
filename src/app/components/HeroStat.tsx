import { StatTooltip } from "./StatTooltip";

/** Single stat value + label used in hero stats cards. */
export function HeroStat({
  value,
  label,
  tooltip,
  width,
}: {
  value: string;
  label: string;
  tooltip?: string;
  width?: number;
}) {
  return (
    <StatTooltip tooltip={tooltip}>
      <div
        className="flex flex-col items-center gap-[2px]"
        style={{ width: width ?? 132 }}
      >
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[28px] md:text-[32px] text-center w-full">
          {value}
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[13px] md:text-[16px] text-center leading-[18px] md:leading-[normal]">
          {label}
        </p>
      </div>
    </StatTooltip>
  );
}
