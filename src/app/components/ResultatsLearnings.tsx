import React from "react";
import OutlinedSystemeCheck from "../../imports/OutlinedSystemeCheck";
import OutlinedSystemeCancel from "../../imports/OutlinedSystemeCancel";
import imgLearnings from "@/assets/f776a534aef1cb13cd22e25a8a1b6f4a69a03846.png";
import { StatsCard } from "./StatsCard";
import { useTranslation } from "./LanguageContext";

export function ResultatsLearnings() {
  const cs = useTranslation("case_study_chronic_programs");
  const r = cs.results;

  return (
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[56px] items-start relative w-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[var(--color-qare-brand)] text-[18px] md:text-[24px] tracking-[4.8px] uppercase">
          {r.section_title}
        </p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[32px] md:leading-[45px] relative shrink-0 text-[var(--color-qare-ink)] text-[24px] md:text-[36px] max-w-full md:w-[620px]">
          {r.headline}
        </h2>
      </div>

      {/* Stats card */}
      <StatsCard items={r.stats.map((s, i) => ({ ...s, hiddenOnMobile: i < 2 }))} />

      {/* Learnings grid */}
      <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] w-full items-start relative">
        {/* CE QUI A FONCTIONNÉ */}
        <div className="flex flex-col gap-[16px] flex-1 w-full">
          <p className="font-['Aeonik:Bold',sans-serif] text-[18px] leading-[normal] relative shrink-0 text-[var(--color-qare-ink)]">
            {r.worked_title}
          </p>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            {r.worked.map((text, i) => (
              <div
                key={i}
                className="bg-[#f6fcf9] min-h-[72px] md:h-[96px] relative rounded-[14px] shrink-0 w-full"
                style={{ border: "4px solid #a4e0c6" }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="flex gap-[12px] md:gap-[16px] items-center p-[16px] md:p-[24px] relative w-full">
                    <div
                      className="shrink-0 size-[20px]"
                      style={{ "--fill-0": "#a4e0c6" } as React.CSSProperties}
                    >
                      <OutlinedSystemeCheck />
                    </div>
                    <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-ink)] text-[16px] md:text-[20px]">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CE QUI N'A PAS FONCTIONNÉ */}
        <div className="flex flex-col gap-[16px] flex-1 w-full">
          <p className="font-['Aeonik:Bold',sans-serif] text-[18px] leading-[normal] relative shrink-0 text-[var(--color-qare-ink)]">
            {r.failed_title}
          </p>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            {r.failed.map((text, i) => (
              <div
                key={i}
                className="bg-[#feeff2] min-h-[72px] md:h-[96px] relative rounded-[14px] shrink-0 w-full"
                style={{ border: "4px solid #f9a2af" }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="flex gap-[12px] md:gap-[16px] items-center p-[16px] md:p-[24px] relative w-full">
                    <div
                      className="shrink-0 size-[20px]"
                      style={{ "--fill-0": "#f9a2af" } as React.CSSProperties}
                    >
                      <OutlinedSystemeCancel />
                    </div>
                    <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-ink)] text-[16px] md:text-[20px]">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Illustration — desktop only */}
        <img
          alt=""
          src={imgLearnings}
          className="hidden md:block absolute pointer-events-none"
          style={{ width: 319, height: 337, left: "50%", bottom: -60, transform: "translateX(calc(-50% + 100px)) rotate(0.3deg)" }}
        />
      </div>
    </div>
  );
}