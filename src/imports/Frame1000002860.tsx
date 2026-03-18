import clsx from "clsx";
import svgPaths from "./svg-2k7gxlzkzt";
import imgDsc087301 from "@/assets/1680f5d397351ddf45665415243080fa4096145a.png";
import { useTranslation } from "../app/components/LanguageContext";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center w-[132px]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[16px] w-full">{text1}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#7a63ca] content-stretch flex items-center justify-center pb-[12px] pt-[4px] px-[24px] relative rounded-[23px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[3.48px] border-solid border-white inset-[-3.48px] pointer-events-none rounded-[26.48px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[54px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "Frame 1000002861" | "Frame 2087325871" | "Frame 2087325872" | "Frame 2087325873" | "Frame 2087325874" | "Frame 2087325875" | "Variant7";
};

function Component({ className, property1 = "Frame 2087325871" }: ComponentProps) {
  const isFrame1000002861OrFrame2087325873OrFrame2087325875 = ["Frame 1000002861", "Frame 2087325873", "Frame 2087325875"].includes(property1);
  const isFrame2087325871OrFrame2087325872OrVariant7OrFrame2087325874 = ["Frame 2087325871", "Frame 2087325872", "Variant7", "Frame 2087325874"].includes(property1);
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[97px] items-end relative">
          <Wrapper additionalClassNames="h-[97.28px] w-[127.198px]">
            <div className="flex-none rotate-[6.35deg]">
              <div className="h-[84.684px] relative w-[118.557px]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isFrame1000002861OrFrame2087325873OrFrame2087325875 ? "0 0 118.557 84.6836" : "0 0 32 32"}>
                  <path d={isFrame1000002861OrFrame2087325873OrFrame2087325875 ? svgPaths.p2f8f3e00 : svgPaths.p8e56200} fill="var(--fill-0, #CAC1EA)" id="Vector" opacity={isFrame2087325871OrFrame2087325872OrVariant7OrFrame2087325874 ? "0" : undefined} />
                </svg>
              </div>
            </div>
          </Wrapper>
          <Wrapper additionalClassNames="h-[102.817px] w-[130.739px]">
            <div className="-scale-y-100 flex-none rotate-[170.65deg]">
              <div className="h-[84.684px] relative w-[118.557px]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isFrame1000002861OrFrame2087325873OrFrame2087325875 ? "0 0 118.557 84.6836" : "0 0 32 32"}>
                  <path d={svgPaths.p2f8f3e00} fill="var(--fill-0, #CAC1EA)" id="Vector" opacity={isFrame2087325871OrFrame2087325872OrVariant7OrFrame2087325874 ? "0" : undefined} />
                </svg>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  const hero = useTranslation("hero");
  const stats = useTranslation("stats");
  const intro = useTranslation("intro");
  const introLines = intro.text.split("\n\n");

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[120px] items-center justify-center relative shrink-0 w-[946px] px-[0px] pt-[40px] pb-[0px]">
        <div className="content-stretch flex gap-[80px] items-end relative shrink-0 w-full">
          <div className="h-[426px] relative shrink-0 w-[362px]">
            <div className="absolute h-[331.968px] left-0 top-[93.58px] w-[361.761px]">
              <div className="absolute inset-[3.52%_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361.761 320.268">
                  <path d={svgPaths.pecda100} fill="var(--fill-0, #CAC1EA)" id="Rectangle 2064" />
                </svg>
              </div>
            </div>
            <div className="absolute flex h-[425.601px] items-center justify-center left-0 top-[0.4px] w-[361.761px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[425.601px] relative rounded-[36.176px] w-[361.761px]" data-name="DSC08730 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[36.176px]">
                    <img alt="" className="absolute h-[148.9%] left-[-23.45%] max-w-none top-[-7.49%] w-[115.29%]" style={{ transform: "rotate(-8deg) translateX(50px)" }} src={imgDsc087301} />
                  </div>
                </div>
              </div>
            </div>
            <Component className="absolute left-[18.52px] top-[-66.27px]" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-[554px]">
            <p className="font-['Aeonik:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[54px] whitespace-pre-wrap">{hero.greeting}</p>
            <Text text={hero.role_line1} />
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <Text text={hero.role_line2} additionalClassNames="w-[207px]" />
              <p className="font-['Aeonik:Light',sans-serif] h-[72px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[54px] whitespace-nowrap">{hero.role_line3}</p>
            </div>
          </div>
          <div className="absolute h-[281px] left-[232px] overflow-clip top-[100.5px] w-[403px]" data-name="Component 3">
            <div className="absolute flex h-[57.62px] items-center justify-center left-[97px] top-[107px] w-[57.026px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-[-42.82deg]">
                <div className="h-[46.084px] relative w-[35.043px]" data-name="Mouse">
                  <div className="absolute inset-[3.29%_-5.11%_-3.38%_-5.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6236 46.128" overflow="visible">
                      <path d={svgPaths.p27d15600} fill="var(--fill-0, #7A63CA)" id="Mouse" stroke="var(--stroke-0, white)" strokeWidth="4.20391">
                        <animateTransform
                          attributeName="transform"
                          type="translate"
                          values="0,0; 8,-6; 13,2; 5,11; -7,9; -11,0; -5,-9; 7,-11; 0,0"
                          keyTimes="0; 0.13; 0.27; 0.42; 0.56; 0.7; 0.82; 0.92; 1"
                          dur="9s"
                          repeatCount="indefinite"
                          calcMode="spline"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                        />
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[30px] shrink-0 w-full" style={{ boxShadow: "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)" }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[30px]"
            style={{
              padding: 4,
              background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[40px] py-[32px] relative w-full">
              <Helper text={stats[0].value} text1={stats[0].label} />
              <Helper text={stats[1].value} text1={stats[1].label} />
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
                <div className="content-stretch flex items-start relative shrink-0">
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[32px] text-center w-[26.35px]">{stats[2].value}</p>
                </div>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-[min-content]">{stats[2].label}</p>
              </div>
              <Helper text={stats[3].value} text1={stats[3].label} />
              <Helper text={stats[4].value} text1={stats[4].label} />
              <Helper text={stats[5].value} text1={stats[5].label} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[4px]" />
          <div className="font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[918px] whitespace-pre-wrap">
            {introLines.map((line, i) => (
              <p key={i} className={i < introLines.length - 1 ? "mb-[30px]" : ""}>{line}</p>
            ))}
          </div>
          
          
        </div>
      </div>
    </div>
  );
}