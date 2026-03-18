import { HeroStat } from "./HeroStat";

interface HeroStatsCardProps {
  stats: { value: string; label: string; tooltip?: string }[];
  mobile?: boolean;
}

/**
 * Stats card with gradient border and blue shadow.
 * Used in hero sections of BrandedCall and Monetization.
 */
export function HeroStatsCard({ stats, mobile }: HeroStatsCardProps) {
  const radius = mobile ? "20px" : "30px";

  return (
    <div
      className="bg-white relative w-full"
      style={{
        borderRadius: radius,
        boxShadow: "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: radius,
          padding: 4,
          background:
            "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className={`flex items-center justify-between ${mobile ? "px-[20px] py-[24px]" : "px-[40px] py-[32px]"}`}
      >
        {stats.map((stat, i) => (
          <HeroStat
            key={i}
            value={stat.value}
            label={stat.label}
            tooltip={stat.tooltip}
            width={!mobile && i === 0 ? 144 : undefined}
          />
        ))}
      </div>
    </div>
  );
}
