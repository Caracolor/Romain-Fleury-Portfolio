import clsx from "clsx";
import svgPaths from "./svg-xxwwsl2lbb";
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
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center relative shrink-0", additionalClassNames)}>
      <div className="shrink-0 w-[4px] bg-[#40295b]" style={{ height: 14.2 }} />
      <Component4Helper />
      <div className="flex-[1_0_0] min-h-px w-[4px] bg-[#40295b]" />
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center relative shrink-0", additionalClassNames)}>
      <div className="shrink-0 w-[4px] bg-[#40295b]" style={{ height: 15.279 }} />
      <Component4Helper />
      <div className="flex-[1_0_0] min-h-px w-[4px] bg-[#40295b]" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col h-full items-center pt-[16px] relative">
          <Component4Helper />
          <div className="flex-[1_0_0] min-h-px w-[4px] bg-[#40295b]" />
        </div>
      </div>
    </div>
  );
}

function Component4Helper4() {
  return (
    <div className="content-stretch flex h-[122px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name="Full/Information/More">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2809ec00} fill="var(--fill-0, #4D4D4D)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
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
      <p className="decoration-solid flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#7a63ca] text-[24px] underline">{text}</p>
    </div>
  );
}
type Component4Helper3Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Component4Helper3({ text, text1, additionalClassNames = "" }: Component4Helper3Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start relative", additionalClassNames)}>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#3c3162] text-[38px] whitespace-nowrap">{text}</p>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{`Product designer & Brand designer`}</p>
        <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{text1}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start relative", additionalClassNames)}>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#3c3162] text-[38px] whitespace-nowrap">{text}</p>
      <Helper text="Lead product designer" text1="2018 - 2021" />
    </div>
  );
}

function Component4Helper2() {
  return (
    <button className="content-stretch cursor-pointer flex h-[82px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name="Full/Information/Less">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.7966 34.7966">
            <path clipRule="evenodd" d={svgPaths.p3247a400} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </button>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{text}</p>
      <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{text1}</p>
    </div>
  );
}
type Component4Helper1Props = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Component4Helper1({ text, text1, text2, additionalClassNames = "" }: Component4Helper1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start relative", additionalClassNames)}>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#3c3162] text-[38px] w-full">{text}</p>
      <Helper text={text1} text1={text2} />
    </div>
  );
}

function Component4Helper() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper3 additionalClassNames="inset-[-20%]">
        <circle cx="14" cy="14" id="Ellipse 393" r="12" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
      </Wrapper3>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "Frame 1000002860" | "Frame 2087325871";
};

function Component({ className, property1 = "Frame 1000002860" }: ComponentProps) {
  const isFrame1000002860 = property1 === "Frame 1000002860";
  const isFrame2087325871 = property1 === "Frame 2087325871";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative">
        {isFrame1000002860 && <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase w-[547px]">Experience</p>}
        <div className={`content-stretch flex relative shrink-0 ${isFrame2087325871 ? "items-center w-full" : "flex-col items-start w-[946px]"}`}>
          {isFrame1000002860 && (
            <>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <Wrapper additionalClassNames="self-stretch">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 574">
                    <path d="M2 0V574" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[40px] relative">
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
                    <Component4Helper1 text="Qare" text1="Head of product design" text2="2021 - Today" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                    <Component4Helper2 />
                  </div>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[603.085px] whitespace-pre-wrap">
                    <p className="leading-[30px] mb-0">Leading the Product Design team and driving design strategy across a fast-growing digital healthcare platform. I oversee team growth, design processes and cross-functional alignment in a highly regulated environment.</p>
                    <p className="leading-[30px] mb-0">&nbsp;</p>
                    <p className="leading-[30px] mb-0">Key challenges:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Made user discovery and user testing a core step</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Led the design team and contributed to product delivery</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Monetize an health plateform in France</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Launching new medical services and AI-powered tools</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">From startup to scale-up</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">From 4 to 8 designers</span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[30px]">Switch to a cross country design system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <Wrapper1 additionalClassNames="self-stretch">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 462.721">
                    <path d="M2 0V462.721" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper1>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[40px] relative">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <Text text="Papernest" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                    <Component4Helper2 />
                  </div>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[578.418px] whitespace-pre-wrap">
                    <p className="leading-[30px] mb-0">{`Worked across product design, branding and motion design for a fast-scaling subscription management tool startup. `}</p>
                    <p className="leading-[30px] mb-0">&nbsp;</p>
                    <p className="leading-[30px] mb-0">Highlights:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Made user discovery and user testing a core step</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Consolidated the design system and built a brand/illustration system</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Led the design team and contributed to product delivery</span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[30px]">Designed and refined high-impact conversion flows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <Wrapper2 additionalClassNames="self-stretch">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 463.8">
                    <path d="M2 0V463.8" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper2>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[40px] relative">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <Component4Helper3 text="Frog (ex-Backelite)" text1="2016 - 2018" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                    <Component4Helper2 />
                  </div>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[601.543px] whitespace-pre-wrap">
                    <p className="leading-[30px] mb-0">Worked with major French brands to design the future of banking and service applications. Led UX and UI initiatives, improved client processes through UX workshops and delivered high-impact product design and motion work.</p>
                    <p className="leading-[30px] mb-0">&nbsp;</p>
                    <p className="leading-[30px] mb-0">Highlights:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Lead UI designe for LCL’s native consumer banking apps</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[30px]">Designed and refined high-impact conversion flows for EDF, Crédit Agricole and Meetic (UX/UI)</span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[30px]">Motion design for Société Générale and LCL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Component4Text text="View my full profile on LinkedIn" additionalClassNames="w-full" />
            </>
          )}
          {isFrame2087325871 && <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b] text-[60px] tracking-[18px] uppercase">Experience</p>}
        </div>
        {isFrame2087325871 && (
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[946px]">
              <div className="flex flex-row items-center self-stretch">
                <Wrapper additionalClassNames="h-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 86">
                    <path d="M2 0V86" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[40px] relative">
                <Component4Helper1 text="Qare" text1="Head of product design" text2="2021 - Today" additionalClassNames="shrink-0 w-full" />
              </div>
              <Component4Helper4 />
            </div>
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[946px]">
              <div className="flex flex-row items-center self-stretch">
                <Wrapper1 additionalClassNames="h-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 86.7212">
                    <path d="M2 0V86.7212" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper1>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[40px] relative">
                <Text text="Papernest" additionalClassNames="shrink-0 w-full" />
              </div>
              <Component4Helper4 />
            </div>
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[946px]">
              <div className="flex flex-row items-center self-stretch">
                <Wrapper2 additionalClassNames="h-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 87.7998">
                    <path d="M2 0V87.7998" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper2>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[40px] relative">
                <Component4Helper3 text="Frog (ex-Backelite)" text1="2016 - 2018" additionalClassNames="shrink-0 w-full" />
              </div>
              <Component4Helper4 />
            </div>
            <Component4Text text="View my full profile on LinkedIn" additionalClassNames="w-[946px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="relative size-full" />;
}