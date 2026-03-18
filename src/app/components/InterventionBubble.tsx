import React from "react";
import svgPaths from "../../imports/svg-kf00idfee1";
import imgTitouan from "figma:asset/c56d5debaacac6566dcecd8d88a82d82ecdd2621.png";

interface InterventionBubbleProps {
  text: string;
  className?: string;
}

export function InterventionBubble({ text, className = "" }: InterventionBubbleProps) {
  return (
    <div className={`flex flex-col items-center relative shrink-0 ${className}`}>
      {/* Triangle pointer */}
      <div className="h-[21px] relative shrink-0 w-[42px]">
        <div className="absolute inset-[0_-0.25%_-1.92%_-0.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.4754 21.4028">
            <path d={svgPaths.p2d1c9870} fill="#3C3162" />
          </svg>
        </div>
      </div>
      
      {/* Bulle */}
      <div className="bg-[#3c3162] flex gap-[16px] items-center p-[16px] relative rounded-[24px] shrink-0 w-full max-w-[387px]">
        {/* Avatar */}
        <div className="relative rounded-full shrink-0 size-[49px] overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgTitouan}
          />
          <div
            aria-hidden="true"
            className="absolute border-3 border-[#9483d5] border-solid inset-0 pointer-events-none rounded-full"
          />
        </div>

        {/* Texte */}
        <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[normal] text-white text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
}