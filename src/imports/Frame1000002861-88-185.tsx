import clsx from "clsx";
import svgPaths from "./svg-tkf3hjp872";

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
      <div className="flex flex-row items-center self-stretch">
        <button className="content-stretch cursor-pointer flex h-full items-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name="Full/Information/Less">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.p23196c80} fill="var(--fill-0, #4D4D4D)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </button>
      </div>
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
      <div className="h-[14.2px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14.2002">
            <path d="M2 0V14.2002" id="Vector 10" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Helper />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
        <div className="absolute inset-[0_-2px]">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
      <div className="h-[15.279px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 15.2788">
            <path d="M2 0V15.2788" id="Vector 10" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Helper />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
        <div className="absolute inset-[0_-2px]">{children}</div>
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
            <div className="absolute inset-[0_-2px]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperbuttonHelper1() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0">
      <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name="Full/Information/More">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.7966 34.7966">
            <path clipRule="evenodd" d={svgPaths.pfd03300} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
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
      <p className="decoration-solid flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a63ca] text-[20px] underline">{text}</p>
    </div>
  );
}
type Component4HelperProps = {
  text: string;
  text1: string;
};

function Component4Helper({ text, text1 }: Component4HelperProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase whitespace-nowrap">{text}</p>
      <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase whitespace-nowrap">{text1}</p>
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
                <Wrapper>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 426">
                    <path d="M2 0V426" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[24px] relative">
                  <Wrapper4 additionalClassNames="gap-[32px]">
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] w-full">Qare</p>
                    <Component4Helper text="Head of product design" text1="2021 - Today" />
                  </Wrapper4>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[20px] w-[603.085px] whitespace-pre-wrap">
                    <p className="leading-[28px] mb-0">Leading the Product Design team and driving design strategy across a fast-growing digital healthcare platform. I oversee team growth, design processes and cross-functional alignment in a highly regulated environment.</p>
                    <p className="leading-[28px] mb-0">&nbsp;</p>
                    <p className="leading-[28px] mb-0">Key challenges:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Made user discovery and user testing a core step</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Led the design team and contributed to product delivery</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Monetize an health plateform in France</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Launching new medical services and AI-powered tools</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">From startup to scale-up</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">From 4 to 8 designers</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[28px]">Switch to a cross country design system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <Wrapper1>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 322.721">
                    <path d="M2 0V322.721" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper1>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[24px] relative">
                  <Wrapper4 additionalClassNames="gap-[16px]">
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] whitespace-nowrap">Papernest</p>
                    <Component4Helper text="Lead product designer" text1="2018 - 2021" />
                  </Wrapper4>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[20px] w-[578.418px] whitespace-pre-wrap">
                    <p className="leading-[28px] mb-0">{`Worked across product design, branding and motion design for a fast-scaling subscription management tool startup. `}</p>
                    <p className="leading-[28px] mb-0">&nbsp;</p>
                    <p className="leading-[28px] mb-0">Highlights:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Made user discovery and user testing a core step</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Consolidated the design system and built a brand/illustration system</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Led the design team and contributed to product delivery</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[28px]">Designed and refined high-impact conversion flows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                <Wrapper2>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 351.8">
                    <path d="M2 0V351.8" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </Wrapper2>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[24px] relative">
                  <Wrapper4 additionalClassNames="gap-[16px]">
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] whitespace-nowrap">Frog (ex-Backelite)</p>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase whitespace-nowrap">{`Product designer & Brand designer`}</p>
                      <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase whitespace-nowrap">2016 - 2018</p>
                    </div>
                  </Wrapper4>
                  <div className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[20px] w-[601.543px] whitespace-pre-wrap">
                    <p className="leading-[28px] mb-0">Worked with major French brands to design the future of banking and service applications. Led UX and UI initiatives, improved client processes through UX workshops and delivered high-impact product design and motion work.</p>
                    <p className="leading-[28px] mb-0">&nbsp;</p>
                    <p className="leading-[28px] mb-0">Highlights:</p>
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Lead UI designe for LCL’s native consumer banking apps</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[28px]">Designed and refined high-impact conversion flows for EDF, Crédit Agricole and Meetic (UX/UI)</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[28px]">Motion design for Société Générale and LCL</span>
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
            <button className="content-stretch cursor-pointer flex gap-[32px] items-start relative shrink-0 w-[946px]">
              <Wrapper>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 54">
                  <path d="M2 0V54" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                </svg>
              </Wrapper>
              <Wrapper5>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] text-left w-full">Qare</p>
                <HelperbuttonHelper text="Head of product design" text1="2021 - Today" />
              </Wrapper5>
              <HelperbuttonHelper1 />
            </button>
            <button className="content-stretch cursor-pointer flex gap-[32px] items-start relative shrink-0 w-[946px]">
              <Wrapper1>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 54.7212">
                  <path d="M2 0V54.7212" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                </svg>
              </Wrapper1>
              <Wrapper5>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] text-left whitespace-nowrap">Papernest</p>
                <HelperbuttonHelper text="Lead product designer" text1="2018 - 2021" />
              </Wrapper5>
              <HelperbuttonHelper1 />
            </button>
            <button className="content-stretch cursor-pointer flex gap-[32px] items-start relative shrink-0 w-[946px]">
              <Wrapper2>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 55.7998">
                  <path d="M2 0V55.7998" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                </svg>
              </Wrapper2>
              <Wrapper5>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3c3162] text-[32px] text-left whitespace-nowrap">Frog (ex-Backelite)</p>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] text-left tracking-[4px] uppercase whitespace-nowrap">{`Product designer & Brand designer`}</p>
                  <div className="bg-[#d7d0ef] h-[23px] shrink-0 w-[2px]" />
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] text-left tracking-[4px] uppercase whitespace-nowrap">2016 - 2018</p>
                </div>
              </Wrapper5>
              <HelperbuttonHelper1 />
            </button>
            <Component4Text text="View my full profile on LinkedIn" additionalClassNames="w-[946px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative size-full">
      <Component className="relative shrink-0" property1="Frame 2087325871" />
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase whitespace-nowrap">Education</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex gap-[32px] h-[160px] items-start relative shrink-0 w-[946px]">
            <div className="content-stretch flex flex-col h-full items-center relative shrink-0">
              <div className="h-[47.616px] relative shrink-0 w-0">
                <div className="absolute inset-[0_-2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 47.6165">
                    <path d="M2 0V47.6165" id="Vector 10" stroke="var(--stroke-0, white)" strokeDasharray="7 7" strokeWidth="4" />
                  </svg>
                </div>
              </div>
              <Helper />
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
                <div className="absolute inset-[0_-2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 92.3835">
                    <path d="M2 0V92.3835" id="Vector 9" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
              <p className="leading-[normal] relative shrink-0 text-[#40295b] text-[32px] w-full">IESA Multimédia Paris</p>
              <p className="leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">2010 - 2012</p>
              <p className="leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">Master-level program in Digital Project Management and Design</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] h-[160px] items-start relative shrink-0 w-[946px]">
            <div className="content-stretch flex flex-col h-full items-center relative shrink-0">
              <div className="h-[50.702px] relative shrink-0 w-0">
                <div className="absolute inset-[0_-2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 50.7017">
                    <path d="M2 0V50.7017" id="Vector 10" stroke="var(--stroke-0, #40295B)" strokeWidth="4" />
                  </svg>
                </div>
              </div>
              <Helper />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[8px] items-start min-h-px min-w-px not-italic relative">
              <p className="leading-[normal] relative shrink-0 text-[#40295b] text-[32px] w-full">ESMA Montpellier</p>
              <p className="leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">2008 – 2010</p>
              <p className="leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{`BTS in Design & Visual Communication`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[40px] items-start not-italic relative shrink-0 text-[#40295b] w-full">
        <p className="leading-[normal] relative shrink-0 text-[60px] tracking-[18px] uppercase whitespace-nowrap">Languages</p>
        <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] relative shrink-0 text-[0px] text-[24px] w-full">
          <p className="relative shrink-0 w-[170px]">
            <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">French</span>
            <span className="leading-[30px]">{` - Native`}</span>
          </p>
          <p className="relative shrink-0 w-[170px]">
            <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">English</span>
            <span className="leading-[30px]">{` - Fluent`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}