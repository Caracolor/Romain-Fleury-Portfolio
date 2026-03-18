import React from "react";
import OutlinedSystemeCheck from "../../imports/OutlinedSystemeCheck";
import OutlinedSystemeCancel from "../../imports/OutlinedSystemeCancel";
import { useIsMobile } from "./useIsMobile";
import { ScaledSection } from "./ScaledSection";
import { SectionHeader } from "./SectionHeader";

interface LearningsSectionProps {
  sectionTitle: string;
  headline: string;
  workedTitle: string;
  worked: string[];
  failedTitle: string;
  failed: string[];
  sectionGap: number;
}

/** Reusable Learnings section (worked / failed cards) used in BrandedCall & Monetization. */
export function LearningsSection({
  sectionTitle,
  headline,
  workedTitle,
  worked,
  failedTitle,
  failed,
  sectionGap,
}: LearningsSectionProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div
        className="relative z-10 px-[24px]"
        style={{ paddingTop: sectionGap }}
      >
        <div className="mb-[24px]">
          <SectionHeader label={sectionTitle} headline={headline} mobile />
        </div>

        {/* Worked */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          <p className="font-['Aeonik:Bold',sans-serif] text-[18px] text-[var(--color-qare-text)]">
            {workedTitle}
          </p>
          {worked.map((text, i) => (
            <LearningCard key={i} text={text} variant="success" mobile />
          ))}
        </div>

        {/* Failed */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Aeonik:Bold',sans-serif] text-[18px] text-[var(--color-qare-text)]">
            {failedTitle}
          </p>
          {failed.map((text, i) => (
            <LearningCard key={i} text={text} variant="error" mobile />
          ))}
        </div>
      </div>
    );
  }

  return (
    <ScaledSection maxWidth={800} style={{ paddingTop: sectionGap }}>
      <div className="flex flex-col gap-[56px] items-start w-[800px]">
        <SectionHeader label={sectionTitle} headline={headline} />

        <div className="flex gap-[40px] w-full items-start">
          {/* Worked */}
          <div className="flex flex-col gap-[16px] flex-1">
            <p className="font-['Aeonik:Bold',sans-serif] text-[18px] text-[var(--color-qare-text)]">
              {workedTitle}
            </p>
            <div className="flex flex-col gap-[16px]">
              {worked.map((text, i) => (
                <LearningCard key={i} text={text} variant="success" />
              ))}
            </div>
          </div>

          {/* Failed */}
          <div className="flex flex-col gap-[16px] flex-1">
            <p className="font-['Aeonik:Bold',sans-serif] text-[18px] text-[var(--color-qare-text)]">
              {failedTitle}
            </p>
            <div className="flex flex-col gap-[16px]">
              {failed.map((text, i) => (
                <LearningCard key={i} text={text} variant="error" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledSection>
  );
}

/* ── Internal sub-component ── */

function LearningCard({
  text,
  variant,
  mobile,
}: {
  text: string;
  variant: "success" | "error";
  mobile?: boolean;
}) {
  const isSuccess = variant === "success";
  const bg = isSuccess ? "#f6fcf9" : "#feeff2";
  const border = isSuccess ? "4px solid #a4e0c6" : "4px solid #f9a2af";
  const fillColor = isSuccess ? "#a4e0c6" : "#f9a2af";
  const Icon = isSuccess ? OutlinedSystemeCheck : OutlinedSystemeCancel;

  return (
    <div
      className={`bg-[${bg}] ${mobile ? "min-h-[72px]" : ""} relative rounded-[14px] w-full`}
      style={{ border, backgroundColor: bg }}
    >
      <div
        className={`flex items-center ${mobile ? "p-[16px] gap-[12px]" : "p-[24px] gap-[16px]"} size-full`}
      >
        <div
          className="shrink-0 size-[20px]"
          style={{ "--fill-0": fillColor } as React.CSSProperties}
        >
          <Icon />
        </div>
        <p
          className={`flex-1 font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] ${mobile ? "text-[16px] leading-[normal]" : "text-[20px] leading-[28px]"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
