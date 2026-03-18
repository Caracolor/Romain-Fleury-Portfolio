import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import svgPaths from "./svg-luorhfvsnk";
import svgPathsNew from "./svg-a7p7sqn3p1";
import { useTranslation } from "../app/components/LanguageContext";

type Component2HelperProps = {
  additionalClassNames?: string;
};

function Component2Helper({ additionalClassNames = "" }: Component2HelperProps) {
  return (
    <div className={clsx("absolute h-[76px] mix-blend-multiply w-[100px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 76">
        <g id="â" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p36b9e80} fill="var(--fill-0, #F8F3FF)" />
        </g>
      </svg>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "Frame 2087325124" | "Frame 2087325125";
  direction?: "next" | "prev";
  onNext?: () => void;
  onPrev?: () => void;
  quotes?: { text: string; source: string }[];
};

function Component({ className, property1 = "Frame 2087325124", direction = "next", onNext, onPrev, quotes = [] }: ComponentProps) {
  const isSlide1 = property1 === "Frame 2087325124";
  const isSlide2 = property1 === "Frame 2087325125";

  const slideAnim: React.CSSProperties = {
    animation: `${direction === "next" ? "verbatimSlideInRight" : "verbatimSlideInLeft"} 0.48s cubic-bezier(0.4, 0, 0.2, 1) both`,
  };

  return (
    <div className={className}>
      <div className="flex flex-row items-center size-full gap-[24px]">
        {/* Left arrow (prev) */}
        <button
          onClick={onPrev}
          disabled={isSlide1}
          onMouseDown={e => !isSlide1 && (e.currentTarget.style.transform = "scale(0.85)")}
          onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          style={{ transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}
          className={`content-stretch flex h-[140px] items-center justify-center relative shrink-0 w-[68px] transition-opacity duration-300 ${
            isSlide1 ? "opacity-20 cursor-default" : "cursor-pointer"
          }`}
        >
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="overflow-clip relative size-[41.756px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[27.837px] left-1/2 top-1/2 w-[41.755px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7555 27.8372">
                    <path clipRule="evenodd" d={svgPathsNew.p2404ac00} fill="var(--fill-0, #212121)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Verbatims content */}
        <div
          key={property1}
          style={slideAnim}
          className="content-stretch flex flex-1 gap-[56px] items-center relative"
        >
          {isSlide1 && (
            <>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
                  <Component2Helper additionalClassNames="left-[-20px] top-[-18px]" />
                  <TypewriterText
                    text={quotes[0]?.text ?? ""}
                    className="font-['Times_New_Roman',serif] italic leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[30px] w-[min-content]"
                    delay={0}
                  />
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[350px]">{quotes[0]?.source ?? ""}</p>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-full items-start min-h-px min-w-px relative">
                  <Component2Helper additionalClassNames="left-[-23px] top-[-24px]" />
                  <TypewriterText
                    text={quotes[1]?.text ?? ""}
                    className="font-['Times_New_Roman',serif] italic leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[30px] w-[min-content]"
                    delay={0}
                  />
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">{quotes[1]?.source ?? ""}</p>
                </div>
              </div>
            </>
          )}
          {isSlide2 && (
            <>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-full items-start min-h-px min-w-px leading-[normal] relative">
                <Component2Helper additionalClassNames="left-[-20px] top-[-18px]" />
                <TypewriterText
                  text={`"Un psychiatre, ça coûte cher. Si vous le voyez plusieurs fois par mois, c'est rentable"`}
                  className="font-['Times_New_Roman',serif] italic relative shrink-0 text-[#7a63ca] text-[30px] w-full"
                  delay={0}
                />
                <p className="font-['Aeonik:Regular',sans-serif] not-italic relative shrink-0 text-[#40295b] text-[16px] w-full">Interview téléphonique - Mind</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-full items-start min-h-px min-w-px relative">
                <Component2Helper additionalClassNames="left-[-23px] top-[-18px]" />
                <TypewriterText
                  text={`« Mon médecin, il a plus de 70 ans, il ne connaît pas les nouveaux traitements. »`}
                  className="font-['Times_New_Roman',serif] italic leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[30px] w-[min-content]"
                  delay={0}
                />
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">Interview téléphonique - Shape</p>
              </div>
            </>
          )}
        </div>

        {/* Right arrow (next) */}
        <button
          onClick={onNext}
          disabled={isSlide2}
          onMouseDown={e => !isSlide2 && (e.currentTarget.style.transform = "scale(0.85)")}
          onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          style={{ transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}
          className={`content-stretch flex h-[140px] items-center justify-center relative shrink-0 w-[68px] transition-opacity duration-300 ${
            isSlide2 ? "opacity-20 cursor-default" : "cursor-pointer"
          }`}
        >
          <div className="overflow-clip relative shrink-0 size-[41.756px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[27.837px] left-1/2 top-1/2 w-[41.755px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7555 27.8372">
                <path clipRule="evenodd" d={svgPathsNew.p2404ac00} fill="var(--fill-0, #212121)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Frame() {
  const [slide, setSlide] = useState<"Frame 2087325124" | "Frame 2087325125">("Frame 2087325124");
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const cs = useTranslation("case_study_chronic_programs");
  const insight = cs.insight;

  return (
    <>
      <style>{`
        @keyframes verbatimSlideInRight {
          from { opacity: 0; transform: translateX(56px); }
          to   { opacity: 1; transform: translateX(0);   }
        }
        @keyframes verbatimSlideInLeft {
          from { opacity: 0; transform: translateX(-56px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes typewriterBlink {
          from, to { border-color: transparent; }
          50% { border-color: #7a63ca; }
        }
      `}</style>
      <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{insight.section_title}</p>
          <div className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full whitespace-pre-wrap">
            <p>{insight.headline}</p>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{insight.description}</p>
        </div>
        <Component
          className="relative shrink-0 w-full"
          property1={slide}
          direction={direction}
          onNext={() => { setDirection("next"); setSlide("Frame 2087325125"); }}
          onPrev={() => { setDirection("prev"); setSlide("Frame 2087325124"); }}
          quotes={insight.quotes}
        />
        {/* Dots indicator */}
        <div className="flex justify-center gap-[10px] shrink-0 w-full">
          {(["Frame 2087325124", "Frame 2087325125"] as const).map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(s === "Frame 2087325124" ? "prev" : "next");
                setSlide(s);
              }}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                slide === s ? "w-[28px] h-[10px] bg-[#7a63ca]" : "size-[10px] bg-[#d7d0ef]"
              }`}
            />
          ))}
        </div>
        <div className="bg-[#f2effa] relative rounded-[30px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[30px] items-center p-[32px] relative w-full">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#e4e0f4] content-stretch flex flex-col items-center justify-center overflow-clip p-[3.8px] relative rounded-[22.8px] size-[76px]" data-name="noun-team-6788322 1">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="overflow-clip relative size-[44px]" data-name="Outlined/Système/Beneficiary">
                          <div className="absolute inset-[22.92%_14.68%]" data-name="vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0789 23.8336">
                              <g id="vector">
                                <path clipRule="evenodd" d={svgPathsNew.p27285580} fill="var(--fill-0, #7A63CA)" fillRule="evenodd" />
                                <path d={svgPathsNew.p18b1c700} fill="var(--fill-0, #7A63CA)" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[26px] min-h-px min-w-px not-italic relative text-[#40295b]">
                <p className="font-['Aeonik:Bold',sans-serif] relative shrink-0 text-[24px] w-full">{insight.pluridisciplinary_title}</p>
                <p className="font-['Aeonik:Regular',sans-serif] relative shrink-0 text-[20px] w-full">{insight.pluridisciplinary_text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TypewriterText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Start animation on mount (covers both viewport entry and slide switch)
  useEffect(() => {
    setDisplayedCount(0);
    setStarted(false);
    const timer = setTimeout(() => setStarted(true), delay + 100);
    return () => clearTimeout(timer);
  }, [text, delay]);

  // Typewriter tick
  useEffect(() => {
    if (!started || displayedCount >= text.length) return;
    const speed = Math.max(12, 30 - Math.floor(displayedCount / 10) * 2);
    const timer = setTimeout(() => setDisplayedCount((c) => c + 1), speed);
    return () => clearTimeout(timer);
  }, [started, displayedCount, text]);

  return (
    <p ref={ref} className={className}>
      {text.slice(0, displayedCount)}
      {displayedCount < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-[#7a63ca] ml-[2px] align-middle" style={{ animation: "typewriterBlink 0.6s steps(2) infinite" }} />
      )}
    </p>
  );
}