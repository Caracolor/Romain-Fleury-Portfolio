import React from "react";
import { StatTooltip } from "./StatTooltip";
import { AnimatedStatValue } from "./AnimatedStatValue";

export type StatItem = {
  value: string;
  label: string;
  tooltip?: string;
  hiddenOnMobile?: boolean;
};

type StatsCardProps = {
  items: StatItem[];
};

export function StatsCard({ items }: StatsCardProps) {
  return (
    <div className="relative w-full rounded-[30px] bg-[var(--color-qare-white)]" style={{ boxShadow: "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[30px]"
        style={{
          padding: 4,
          background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="flex items-center justify-center px-[16px] py-[24px] md:px-[40px] md:py-[32px] relative w-full gap-[8px] md:gap-0 md:justify-between">
        {items.map(({ value, label, tooltip, hiddenOnMobile }, i) => (
          <StatTooltip key={i} tooltip={tooltip}>
            <div
              className={`flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic shrink-0 text-[var(--color-qare-text)] text-center min-w-0 flex-1 md:flex-none md:w-[132px]${hiddenOnMobile ? " hidden min-[480px]:flex" : ""}`}
            >
              <p className="relative shrink-0 text-[24px] md:text-[32px] w-full"><AnimatedStatValue value={value} /></p>
              <p className="relative shrink-0 text-[11px] min-[400px]:text-[13px] md:text-[16px]">
                {label}
              </p>
            </div>
          </StatTooltip>
        ))}
      </div>
    </div>
  );
}
