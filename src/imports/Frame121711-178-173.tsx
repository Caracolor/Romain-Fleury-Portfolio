import { useTranslation } from "../app/components/LanguageContext";

export default function Frame() {
  const cs = useTranslation("case_study_chronic_programs");
  const ch = cs.challenge;

  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{ch.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{ch.headline}</p>
      </div>
      <div className="content-stretch flex gap-[40px] h-[362px] items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative rounded-[30px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[32px] w-[min-content]">{ch.problem_title}</p>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[20px] w-[min-content] whitespace-pre-wrap">
              {ch.problem_text}
            </p>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative rounded-[30px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[32px] w-[min-content]">{ch.opportunities_title}</p>
            <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[20px] w-[min-content] whitespace-pre-wrap">
              <p className="mb-[16px]">{ch.opportunities[0]}</p>
              <p>{ch.opportunities[1]}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">{ch.constraint_title}</p>
            <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{ch.constraint_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
