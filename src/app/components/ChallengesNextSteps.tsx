import { useIsMobile } from "./useIsMobile";
import { ScaledSection } from "./ScaledSection";
import { SectionHeader } from "./SectionHeader";

interface Block {
  title: string;
  text: string;
}

interface SectionData {
  section_title: string;
  blocks: Block[];
}

interface Props {
  data: SectionData;
  sectionGap: number;
  /** Max width for desktop ScaledSection (default 800) */
  maxWidth?: number;
}

/**
 * Reusable section for "Challenges" and "Next steps".
 * Renders a label + headline-less layout with titled blocks.
 * Same visual style as existing sections (SectionHeader + body paragraphs).
 */
export function ChallengesNextSteps({ data, sectionGap, maxWidth = 800 }: Props) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="relative z-10 px-[24px]" style={{ paddingTop: sectionGap }}>
        <div className="flex flex-col gap-[24px]">
          <p className="font-['Aeonik:Regular',sans-serif] text-[#7a63ca] text-[16px] tracking-[3px] uppercase">
            {data.section_title}
          </p>
          {data.blocks.map((block, i) => (
            <div key={i} className="flex flex-col gap-[8px]">
              <p className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[18px] leading-[28px]">
                {block.title}
              </p>
              <p className="font-['Aeonik:Regular',sans-serif] text-[#40295b] text-[15px] leading-[22px]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ScaledSection maxWidth={maxWidth} style={{ paddingTop: sectionGap }}>
      <div className="flex flex-col gap-[40px] items-start" style={{ width: maxWidth }}>
        <p className="font-['Aeonik:Regular',sans-serif] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">
          {data.section_title}
        </p>
        <div className="flex flex-col gap-[32px] w-full">
          {data.blocks.map((block, i) => (
            <div key={i} className="flex flex-col gap-[8px]">
              <p className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[28px] leading-[normal]">
                {block.title}
              </p>
              <p className="font-['Aeonik:Regular',sans-serif] text-[#40295b] text-[20px] leading-[28px]">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSection>
  );
}
