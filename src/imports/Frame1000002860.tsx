import clsx from "clsx";
import svgPaths from "./svg-2k7gxlzkzt";
import imgDsc087301 from "@/assets/1680f5d397351ddf45665415243080fa4096145a.png";
import { useTranslation } from "../app/components/LanguageContext";
import { useAnimatedTitle } from "../app/components/useAnimatedTitle";
import { AnimatedStatValue } from "../app/components/AnimatedStatValue";
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
      <p className="relative shrink-0 text-[32px] w-full"><AnimatedStatValue value={text} /></p>
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
  const { p1, p2 } = useAnimatedTitle();
  const introLines = intro.text.split("\n\n");

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[120px] items-center justify-center relative shrink-0 w-[946px] px-[0px] pt-[40px] pb-[0px]">
        <div className="content-stretch flex gap-[80px] items-end relative shrink-0 w-full">
          <div className="h-[426px] relative shrink-0 w-[362px]">
            {/* Deer antlers — flash lightning every 25s */}
            <svg
              className="deer-flash absolute"
              style={{ top: -80, left: 4, width: 355, height: 103 }}
              viewBox="0 0 355 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48.3104 75.3366C66.1528 90.1009 88.4798 99.55 111.44 102.106C112.309 102.203 113.174 102.29 114.045 102.366C116.193 102.555 118.081 101.003 118.264 98.9018C118.446 96.7966 116.855 94.9378 114.712 94.7499C101.09 93.542 87.651 89.722 75.3059 83.6659C74.1115 75.7282 73.8355 67.6351 74.5168 59.5006C74.629 58.144 74.7733 56.7699 74.9409 55.4194C75.2002 53.3228 73.6755 51.4121 71.5364 51.1487C69.3972 50.8852 67.4556 52.372 67.1963 54.4686C67.0176 55.9192 66.8669 57.3898 66.744 58.8424C66.1725 65.6412 66.2382 72.4094 66.8951 79.0956C62.1391 76.2379 57.5938 73.036 53.3228 69.5013C50.9778 67.5627 48.7325 65.5422 46.5816 63.4478C44.9358 52.1301 45.1601 40.7038 47.26 29.4692C47.646 27.3952 46.2432 25.3967 44.127 25.0048C42.0104 24.617 39.9791 25.9797 39.5883 28.0575C37.9924 36.5846 37.4072 45.2115 37.8229 53.8315C28.1787 41.8686 21.2799 28.052 17.5543 13.0337C17.2276 11.7085 16.9164 10.3597 16.6427 9.02353C16.2137 6.95172 14.1561 5.60713 12.0453 6.01868C9.93455 6.43024 8.57248 8.44212 9.00145 10.5139L8.99719 10.5135C9.29478 11.9453 9.62079 13.3929 9.97606 14.81C15.8626 38.5327 29.1172 59.4628 48.31 75.3408L48.3104 75.3366Z" fill="#CAC1EA"/>
              <path d="M305.941 71.7401C288.895 87.417 267.092 98.0205 244.297 101.773C243.434 101.915 242.575 102.048 241.709 102.17C239.574 102.47 237.607 101.019 237.316 98.9303C237.023 96.8376 238.515 94.8981 240.645 94.5984C254.185 92.68 267.406 88.1626 279.418 81.4693C280.196 73.4801 280.048 65.3836 278.942 57.2958C278.76 55.9469 278.544 54.5822 278.306 53.2424C277.937 51.1622 279.36 49.1744 281.482 48.7995C283.605 48.4245 285.621 49.8078 285.99 51.888C286.244 53.3273 286.472 54.788 286.67 56.2322C287.596 62.9918 287.885 69.7542 287.578 76.4655C292.178 73.3631 296.55 69.928 300.63 66.1747C302.871 64.1162 305.007 61.9811 307.046 59.7771C308.098 48.3889 307.276 36.9898 304.592 25.8805C304.098 23.8295 305.394 21.7603 307.487 21.2583C309.581 20.7605 311.68 22.0151 312.179 24.0696C314.219 32.5015 315.254 41.086 315.29 49.716C324.295 37.2652 330.462 23.1069 333.398 7.9143C333.655 6.57386 333.895 5.21065 334.098 3.86198C334.418 1.77058 336.403 0.320249 338.532 0.620883C340.662 0.921516 342.127 2.85944 341.807 4.95084L341.811 4.95014C341.589 6.39554 341.339 7.85824 341.058 9.29197C336.42 33.29 324.278 54.8844 305.942 71.7442L305.941 71.7401Z" fill="#CAC1EA"/>
            </svg>
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
                    <img alt="" className="absolute h-[148.9%] left-[-23.45%] max-w-none top-[-7.49%] w-[115.29%]" style={{ transform: "rotate(-8deg) translateX(50px)" }} src={imgDsc087301} loading="eager" decoding="sync" />
                  </div>
                </div>
              </div>
            </div>
            <Component className="absolute left-[18.52px] top-[-66.27px]" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-[554px]">
            <p className="font-['Aeonik:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[54px] whitespace-pre-wrap">{hero.greeting}</p>
            <Text text={p1} />
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              {p2 && <Text text={p2} />}
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
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[32px] text-center w-[26.35px]"><AnimatedStatValue value={stats[2].value} /></p>
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