import { useTranslation } from "./LanguageContext";
import { useIsMobile } from "./useIsMobile";
import { ScaledSection } from "./ScaledSection";

interface ContextSectionProps {
  /** The translation section key, e.g. "case_study_monetisation" */
  translationKey: string;
  /** Spacing applied above the section */
  topSpacing: number;
  /** maxWidth for the ScaledSection in desktop (default 950) */
  desktopMaxWidth?: number;
  /** Use marginTop instead of paddingTop (allows negative values) */
  useMargin?: boolean;
}

export function ContextSection({
  translationKey,
  topSpacing,
  desktopMaxWidth = 950,
  useMargin = false,
}: ContextSectionProps) {
  const cs = useTranslation(translationKey as any) as any;
  const isMobile = useIsMobile();
  const ctx = cs.contexte;

  if (!ctx) return null;

  if (isMobile) {
    return (
      <div
        className="relative z-10 px-[24px]"
        style={useMargin ? { marginTop: topSpacing } : { paddingTop: topSpacing }}
      >
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Aeonik:Regular',sans-serif] text-[#7a63ca] text-[18px] tracking-[4.8px] uppercase">
              {ctx.section_title}
            </p>
            <h2 className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[24px] leading-[32px]">
              {ctx.headline}
            </h2>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] text-[#40295b] text-[16px] leading-[24px]">
            {ctx.col1}
          </p>
          <p className="font-['Aeonik:Regular',sans-serif] text-[#40295b] text-[16px] leading-[24px]">
            {ctx.col2}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScaledSection
      maxWidth={desktopMaxWidth}
      style={useMargin ? { marginTop: topSpacing } : { paddingTop: topSpacing }}
    >
      <div className="flex flex-col gap-[8px] items-start">
        <p className="font-['Aeonik:Regular',sans-serif] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">
          {ctx.section_title}
        </p>
        <h2 className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[36px] leading-[45px] w-full">
          {ctx.headline}
        </h2>
      </div>
      <div className="flex gap-[52px] items-start mt-[40px] font-['Aeonik:Regular',sans-serif] text-[#40295b] text-[20px] leading-[30px]">
        <p className="flex-1">{ctx.col1}</p>
        <p className="flex-1">{ctx.col2}</p>
      </div>
    </ScaledSection>
  );
}