import image_50943770418c16aae344d1425538ab4848b6617c from '@/assets/50943770418c16aae344d1425538ab4848b6617c.png'
import image_758f2ade10de96bb2fb4159b7acc2bfa13440e59 from '@/assets/758f2ade10de96bb2fb4159b7acc2bfa13440e59.png'
import { useState } from "react";
import svgPaths from "./svg-6xhyatu5cg";
import imgCaptureDecran20260226A0908541 from "@/assets/f629ac87b5e08989098c25c5aea7b7440d75ed78.png";
import imgFrame1217111 from "@/assets/c431e7c9e80c1d2c40ee9ceef75c1ed1dbfd42a6.png";
import imgNavigation from "@/assets/a07a6d726bebe0040766453e49c540e024a24462.png";
import { useTranslation } from "../app/components/LanguageContext";

type CardVariant = "nav" | "system" | "acquisition";

interface CardProps {
  emoji: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

function ArrowIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[23.695px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.797px] left-1/2 top-1/2 w-[23.695px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6951 15.7969">
          <path clipRule="evenodd" d={svgPaths.p1c2d7c00} fill="var(--fill-0, #40295B)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function Card({ emoji, label, active, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white cursor-pointer flex-1 relative rounded-[30px] text-left min-w-0"
    >
      <div
        aria-hidden="true"
        className={`absolute border-4 border-solid inset-0 pointer-events-none rounded-[30px] transition-colors duration-300 ${
          active ? "border-[#afa2df]" : "border-[#d7d0ef]"
        }`}
      />
      <div className="flex flex-col justify-between p-[24px] h-full gap-[16px]">
        <div className="flex flex-col gap-[16px] font-['Aeonik:Regular',sans-serif] text-[#40295b]">
          <div className="text-[43px] leading-[0] h-[52px] flex flex-col justify-center w-[40px]">
            <p className="leading-[26px]">{emoji}</p>
          </div>
          <p className="text-[20px] leading-[28px]">
            {label}
          </p>
        </div>
        <div className="self-end">
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
}

export default function Frame() {
  const [active, setActive] = useState<CardVariant>("nav");
  const cs = useTranslation("case_study_chronic_programs");
  const da = cs.design_approach;

  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative w-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <h4 className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">
          {da.section_title}
        </h4>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">
          {da.headline}
        </h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">
          {da.description}
        </p>
      </div>

      {/* Cards row + Content below */}
      <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full">
        {/* 3 cards in a row */}
        <div className="flex gap-[33px] items-stretch w-full">
          {da.pillars.map((pillar, i) => {
            const keys: CardVariant[] = ["nav", "system", "acquisition"];
            return (
              <Card
                key={i}
                emoji={pillar.emoji}
                label={pillar.text}
                active={active === keys[i]}
                onClick={() => setActive(keys[i])}
              />
            );
          })}
        </div>

        {/* Content area below cards */}
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full">
          {active === "nav" && (
            <div className="flex flex-col gap-[16px] items-center w-full">
              <div className="w-full overflow-hidden rounded-[20px]">
                <img className="w-[calc(100%+4px)] h-auto -ml-[2px] -mt-[2px]" src={imgNavigation} alt="Navigation" />
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center max-w-[440px]">
                {da.navigation_text}
              </p>
            </div>
          )}
          {active === "system" && (
            <div className="flex flex-col gap-[16px] items-center w-full">
              <img className="w-full h-auto rounded-[20px]" src={image_758f2ade10de96bb2fb4159b7acc2bfa13440e59} alt="Système de contenu" />
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center max-w-[440px]">
                {da.system_text}
              </p>
            </div>
          )}
          {active === "acquisition" && (
            <div className="flex flex-col gap-[16px] items-center w-full">
              <img className="w-full h-auto rounded-[20px]" src={image_50943770418c16aae344d1425538ab4848b6617c} alt="Acquisition" />
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center max-w-[440px]">
                {da.acquisition_text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}