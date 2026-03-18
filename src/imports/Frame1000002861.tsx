import React, { useState } from "react";
import clsx from "clsx";
import svgPaths from "./svg-tkf3hjp872";
import { useTranslation } from "../app/components/LanguageContext";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[24px] relative">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("content-stretch flex items-center relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
      <div className="shrink-0 w-[5px] bg-[#40295b]" style={{ height: 14.2 }} />
      <Helper />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 100">
            <path d="M2 0V100" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
      <div className="shrink-0 w-[5px] bg-[#40295b]" style={{ height: 15.279 }} />
      <Helper />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 100">
            <path d="M2 0V100" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col h-full items-center pt-[16px] relative">
          <Helper />
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
            <div className="absolute inset-[0_-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 100">
                <path d="M2 0V100" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type HelperbuttonHelper1Props = {
  isOpen?: boolean;
};

function HelperbuttonHelper1({ isOpen = false }: HelperbuttonHelper1Props) {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0">
      <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name={isOpen ? "Full/Information/Less" : "Full/Information/More"}>
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isOpen ? "0 0 20 20" : "0 0 34.7966 34.7966"}>
            <path
              clipRule="evenodd"
              d={isOpen ? svgPaths.p23196c80 : svgPaths.pfd03300}
              fill={isOpen ? "var(--fill-0, #4D4D4D)" : "var(--fill-0, #40295B)"}
              fillRule="evenodd"
              id="vector"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
type HelperbuttonHelperProps = {
  text: string;
  text1: string;
};

function HelperbuttonHelper({ text, text1 }: HelperbuttonHelperProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] text-left tracking-[4px] uppercase whitespace-nowrap">{text}</p>
      <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] text-left tracking-[4px] uppercase whitespace-nowrap">{text1}</p>
    </div>
  );
}
type Component4TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Component4Text({ text, additionalClassNames = "" }: Component4TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[32px] h-[22px] items-center relative shrink-0", additionalClassNames)}>
      <div className="h-[22px] relative shrink-0 w-[21px]">
        <Wrapper3 additionalClassNames="inset-[-13.64%_-14.29%_-13.64%_-19.05%]">
          <g id="Frame 2085663515">
            <path d="M14.5 3V4" id="Vector 10" stroke="var(--stroke-0, #40295B)" />
            <g id="Frame 2085663519">
              <circle cx="14" cy="14" id="Ellipse 394" r="12" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
              <circle cx="14" cy="14" fill="var(--fill-0, #7D6CCC)" id="Ellipse 393" r="5.34919" />
            </g>
          </g>
        </Wrapper3>
      </div>
      <a href="https://www.linkedin.com/in/romain-fleury/" target="_blank" rel="noopener noreferrer" className="decoration-solid flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a63ca] text-[20px] underline">{text}</a>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper3 additionalClassNames="inset-[-20%]">
        <circle cx="14" cy="14" id="Ellipse 393" r="12" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
      </Wrapper3>
    </div>
  );
}

function ExperienceDetails({ description, highlights }: { description: string; highlights: string[] }) {
  return (
    <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full whitespace-pre-wrap">
      <p className="leading-[28px] mb-0">{description}</p>
      <p className="leading-[28px] mb-0">&nbsp;</p>
      <ul className="list-disc">
        {highlights.map((h, i) => (
          <li key={i} className={`${i < highlights.length - 1 ? "mb-0" : ""} ms-[30px]`}>
            <span className="leading-[28px]">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Component({ className }: { className?: string }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const exp = useTranslation("experience");

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = exp.items;
  const wrappers = [Wrapper, Wrapper1, Wrapper2];

  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative">
        {/* Title row */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b] tracking-[15px] uppercase text-[40px]">{exp.section_title}</p>
        </div>

        {/* Accordion entries */}
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          {items.map((item, i) => {
            const WrapperComp = wrappers[i] || Wrapper2;
            const key = item.company.toLowerCase().replace(/[^a-z]/g, "");
            return (
              <div key={key} className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[946px]">
                <WrapperComp />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[24px] relative">
                  <button
                    className="content-stretch cursor-pointer flex gap-[32px] items-center relative shrink-0 w-full"
                    onClick={() => toggle(key)}
                  >
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] text-left w-full">{item.company}</p>
                      <HelperbuttonHelper text={item.role} text1={item.period} />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <HelperbuttonHelper1 isOpen={!!openItems[key]} />
                    </div>
                  </button>
                  {openItems[key] && (
                    <ExperienceDetails description={item.description} highlights={item.highlights} />
                  )}
                </div>
              </div>
            );
          })}

          <Component4Text text={exp.linkedin_cta} additionalClassNames="w-[946px]" />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  const edu = useTranslation("education");
  const langs = useTranslation("languages_section");

  return (
    <div className="content-stretch flex flex-col gap-[180px] items-start relative size-full">
      <Component className="relative shrink-0 w-full" />
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] tracking-[15px] uppercase whitespace-nowrap text-[40px]">{edu.section_title}</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          {edu.items.map((item, i) => (
            <div key={item.school} className="content-stretch flex gap-[32px] h-[160px] items-start relative shrink-0 w-[946px]">
              <div className="content-stretch flex flex-col h-full items-center relative shrink-0">
                {i === 0 ? (
                  <div className="shrink-0 w-[4px] border-l-[4px] border-dashed border-white" style={{ height: 47.6165 }} />
                ) : (
                  <div className="shrink-0 w-[4px] bg-[#40295b]" style={{ height: 50.702 }} />
                )}
                <Helper />
                {i < edu.items.length - 1 && (
                  <div className="flex-[1_0_0] min-h-px w-[4px] bg-[#40295b]" />
                )}
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
                <p className="leading-[normal] relative shrink-0 text-[#40295b] text-[32px] w-full">{item.school}</p>
                <p className="leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">{item.period}</p>
                <p className="leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[40px] items-start not-italic relative shrink-0 text-[#40295b] w-full">
        <p className="leading-[normal] relative shrink-0 tracking-[15px] uppercase whitespace-nowrap text-[40px]">{langs.section_title}</p>
        <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] relative shrink-0 text-[0px] text-[24px] w-full">
          {langs.items.map((l) => (
            <p key={l.language} className="relative shrink-0 w-[170px]">
              <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{l.language}</span>
              <span className="leading-[30px]">{` - ${l.level}`}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
