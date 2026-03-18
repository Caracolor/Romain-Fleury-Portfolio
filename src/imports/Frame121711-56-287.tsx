import imgImg1 from "figma:asset/f8e2e46d3dfe67538f50f1b78a004a8a3e250bd6.png";
import { useTranslation } from "../app/components/LanguageContext";

type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[20px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  const cs = useTranslation("case_study_chronic_programs");
  const role = cs.role;

  return (
    <div className="content-stretch flex items-start relative size-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] h-[702px] items-start min-h-px min-w-px relative">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[701px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{role.section_title}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{role.headline}</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{role.description}</p>
        </div>
        <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[420px]">
              <div className="h-[536px] relative shrink-0 w-[420px]">
                <div className="absolute h-[600.958px] left-0 top-[-20.34px] w-[470.9px]" data-name="Img 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.71%] left-0 max-w-none top-[0.02%] w-full" src={imgImg1} />
                  </div>
                </div>
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#16121b] text-[16px] text-center w-[min-content]">{role.illustration_caption}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative">
            {role.pillars.map((pillar, i) => (
              <div key={i} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
                <Helper text={pillar.title} text1={pillar.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
