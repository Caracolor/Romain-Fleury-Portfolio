import clsx from "clsx";
import imgRectangle2068 from "@/assets/623c959409db4893ffbb1a4c84b4c225c3506adf.png";
import imgRectangle2067 from "@/assets/0340fd21e644f3e79fb70a6148ca3346d42f5503.png";
import imgRectangle2066 from "@/assets/5fbfa8664a8e7235ddf4eecd1681a7eea0c2de5a.png";
import imgRectangle2065 from "@/assets/29b08f7bb13f6dda67c4bd717417f76b77a6730a.png";
import svgPaths from "./svg-qr4n8dr41d";
import imgMind from "@/assets/d6920b25d0dacb652a7f15f95d1fa9fc65e4be75.png";
import imgShape1 from "@/assets/df79892ff413427f060d32c68e012fe91c5915f1.png";
import imgImg1 from "@/assets/f8e2e46d3dfe67538f50f1b78a004a8a3e250bd6.png";
import imgFrame20873251291 from "@/assets/be3c68be05446c05aa5d0b0e20ea4003ae3c4135.png";
import imgRectangle from "@/assets/f9e309890f0c6e1e474802111bac509e74358b67.png";
import imgRectangle1 from "@/assets/f776a534aef1cb13cd22e25a8a1b6f4a69a03846.png";

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">{children}</div>
    </div>
  );
}

function ParagraphBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[21.5px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Aeonik:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b] text-[18px]">{children}</p>
    </div>
  );
}

function HeadingBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[29px] items-start relative shrink-0 w-[378.508px]">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{children}</p>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[24px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#feeff2] h-[96px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <BackgroundImage6>{children}</BackgroundImage6>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6fcf9] h-[96px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#a4e0c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <BackgroundImage6>{children}</BackgroundImage6>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[30px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] items-center justify-between leading-[normal] not-italic px-[40px] py-[32px] relative text-[#40295b] text-center w-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
        <path clipRule="evenodd" d={svgPaths.p7bd3900} fill="var(--fill-0, #F9A2AF)" fillRule="evenodd" id="vector" />
      </svg>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="h-[7.922px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
        <path clipRule="evenodd" d={svgPaths.p406e100} fill="var(--fill-0, #A4E0C6)" fillRule="evenodd" id="vector" />
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  text: string;
  text1: string;
};

function BackgroundImage4({ text, text1 }: BackgroundImage4Props) {
  return (
    <button className="bg-white content-stretch cursor-pointer flex gap-[16px] items-center p-[24px] relative rounded-[30px] shrink-0 w-[430px]">
      <div aria-hidden="true" className="absolute border-4 border-[#d7d0ef] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40295b] text-[43px] text-left w-[40px]">
        <p className="leading-[26px]">{text}</p>
      </div>
      <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px] text-left">{text1}</p>
      <Helper24StrokeArrowBackgroundImage />
    </button>
  );
}

function Helper24StrokeArrowBackgroundImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[23.695px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.797px] left-1/2 top-1/2 w-[23.695px]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6951 15.7969">
          <path clipRule="evenodd" d={svgPaths.p1c2d7c00} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ additionalClassNames = "" }: BackgroundImage3Props) {
  return (
    <div className={clsx("absolute h-[76px] mix-blend-multiply w-[100px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 76">
        <g id="â" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p36b9e80} fill="var(--fill-0, #F8F3FF)" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundImage2Props = {
  text: string;
  text1: string;
};

function BackgroundImage2({ text, text1 }: BackgroundImage2Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[20px] w-full">{text1}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
      <p className="min-w-full relative shrink-0 text-[32px] w-[min-content]">{text}</p>
      <p className="relative shrink-0 text-[12px] whitespace-nowrap">{text1}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[12px] w-full">{text1}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function StarterKitBackgroundImage() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[30px]">
      <img alt="" className="absolute h-[150.41%] left-[-20.81%] max-w-none top-[-16.91%] w-[141.61%]" src={imgRectangle2065} />
    </div>
  );
}

function BenchmarkBackgroundImage() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[30px]">
      <img alt="" className="absolute h-[285.34%] left-[-17.96%] max-w-none top-[-14.69%] w-[189.56%]" src={imgRectangle2066} />
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <BackgroundImage7>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase w-[271.245px]">{text}</p>
    </BackgroundImage7>
  );
}

function FunnelBackgroundImage() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[30px]">
      <img alt="" className="absolute h-[149.18%] left-[-12.38%] max-w-none top-[-16.55%] w-[163.74%]" src={imgRectangle2068} />
    </div>
  );
}
type FunnelProps = {
  className?: string;
  property1?: "Default";
};

function Funnel({ className, property1 = "Default" }: FunnelProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `relative w-[364px] ${isDefault ? "h-[341px] rounded-[30px]" : ""}`}>
      <div aria-hidden={isDefault ? "true" : undefined} className={isDefault ? "absolute inset-0 pointer-events-none rounded-[30px]" : "content-stretch flex flex-col items-start relative w-full"}>
        <div className={`rounded-[30px] ${isDefault ? "absolute bg-[#d9d9d9] inset-0" : "h-[341px] pointer-events-none relative shrink-0 w-full"}`}>
          {isDefault && (
            <>
              <div aria-hidden="true" className="absolute inset-0 rounded-[30px]">
                <div className="absolute bg-[#d9d9d9] inset-0 rounded-[30px]" />
                <FunnelBackgroundImage />
                <div className="absolute bg-[rgba(59,58,87,0.05)] inset-0 rounded-[30px]" />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 rounded-[30px]" />
            </>
          )}
        </div>
        {isDefault && (
          <>
            <FunnelBackgroundImage />
            <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(59, 58, 87, 0.75) 0%, rgba(59, 58, 87, 0.75) 100%), linear-gradient(90deg, rgba(59, 58, 87, 0.05) 0%, rgba(59, 58, 87, 0.05) 100%)" }} />
          </>
        )}
      </div>
      {isDefault && (
        <>
          <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <BackgroundImageAndText text="Tunnel de souscription et Onboarding" />
        </>
      )}
    </div>
  );
}
type LandingPageProps = {
  className?: string;
  property1?: "Frame 1000002860" | "Frame 2087325873";
};

function LandingPage({ className, property1 = "Frame 1000002860" }: LandingPageProps) {
  const isFrame1000002860 = property1 === "Frame 1000002860";
  const isFrame2087325873 = property1 === "Frame 2087325873";
  return (
    <div className={className || `relative w-[558px] ${isFrame2087325873 ? "h-[341px] rounded-[30px]" : ""}`}>
      <div aria-hidden={isFrame2087325873 ? "true" : undefined} className={isFrame2087325873 ? "absolute inset-0 pointer-events-none rounded-[30px]" : "content-stretch flex flex-col items-start relative w-full"}>
        <div className={`rounded-[30px] ${isFrame2087325873 ? "absolute inset-0 overflow-hidden" : "h-[341px] pointer-events-none relative shrink-0 w-full"}`}>
          {isFrame1000002860 && (
            <>
              <div aria-hidden="true" className="absolute inset-0 rounded-[30px]">
                <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                  <img alt="" className="absolute h-[333.62%] left-[-0.48%] max-w-none top-[-63.03%] w-[227.38%]" src={imgRectangle2067} />
                </div>
                <div className="absolute bg-[rgba(59,58,87,0.05)] inset-0 rounded-[30px]" />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 rounded-[30px]" />
            </>
          )}
          {isFrame2087325873 && <img alt="" className="absolute h-[333.62%] left-[-0.48%] max-w-none top-[-63.03%] w-[227.38%]" src={imgRectangle2067} />}
        </div>
        {isFrame2087325873 && <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(59, 58, 87, 0.75) 0%, rgba(59, 58, 87, 0.75) 100%), linear-gradient(90deg, rgba(59, 58, 87, 0.05) 0%, rgba(59, 58, 87, 0.05) 100%)" }} />}
      </div>
      {isFrame2087325873 && (
        <>
          <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <BackgroundImage7>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase whitespace-nowrap">Landing page Shape</p>
          </BackgroundImage7>
        </>
      )}
    </div>
  );
}
type BenchmarkProps = {
  className?: string;
  property1?: "Default";
};

function Benchmark({ className, property1 = "Default" }: BenchmarkProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `relative w-[558px] ${isDefault ? "h-[341px] rounded-[30px]" : ""}`}>
      <div aria-hidden={isDefault ? "true" : undefined} className={isDefault ? "absolute inset-0 pointer-events-none rounded-[30px]" : "content-stretch flex flex-col items-start relative w-full"}>
        <div className={`rounded-[30px] ${isDefault ? "absolute bg-[#d9d9d9] inset-0" : "h-[341px] pointer-events-none relative shrink-0 w-full"}`}>
          {isDefault && (
            <>
              <div aria-hidden="true" className="absolute inset-0 rounded-[30px]">
                <div className="absolute bg-[#d9d9d9] inset-0 rounded-[30px]" />
                <BenchmarkBackgroundImage />
                <div className="absolute bg-[rgba(59,58,87,0.05)] inset-0 rounded-[30px]" />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 rounded-[30px]" />
            </>
          )}
        </div>
        {isDefault && (
          <>
            <BenchmarkBackgroundImage />
            <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(59, 58, 87, 0.75) 0%, rgba(59, 58, 87, 0.75) 100%), linear-gradient(90deg, rgba(59, 58, 87, 0.05) 0%, rgba(59, 58, 87, 0.05) 100%)" }} />
          </>
        )}
      </div>
      {isDefault && (
        <>
          <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <BackgroundImage7>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase w-[393.16px]">Benchmark concurrentiel</p>
          </BackgroundImage7>
        </>
      )}
    </div>
  );
}
type StarterKitProps = {
  className?: string;
  property1?: "Default";
};

function StarterKit({ className, property1 = "Default" }: StarterKitProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `relative w-[364px] ${isDefault ? "h-[341px] rounded-[30px]" : ""}`}>
      <div aria-hidden={isDefault ? "true" : undefined} className={isDefault ? "absolute inset-0 pointer-events-none rounded-[30px]" : "content-stretch flex flex-col items-start relative w-full"}>
        <div className={`rounded-[30px] ${isDefault ? "absolute bg-[#d9d9d9] inset-0" : "h-[341px] pointer-events-none relative shrink-0 w-full"}`}>
          {isDefault && (
            <>
              <div aria-hidden="true" className="absolute inset-0 rounded-[30px]">
                <div className="absolute bg-[#d9d9d9] inset-0 rounded-[30px]" />
                <StarterKitBackgroundImage />
                <div className="absolute bg-[rgba(59,58,87,0.05)] inset-0 rounded-[30px]" />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#cac1ea] border-solid inset-0 rounded-[30px]" />
            </>
          )}
        </div>
        {isDefault && (
          <>
            <StarterKitBackgroundImage />
            <div className="absolute bg-[rgba(59,58,87,0.75)] inset-0 rounded-[30px]" />
          </>
        )}
      </div>
      {isDefault && (
        <>
          <div aria-hidden="true" className="absolute border-4 border-[#cac1ea] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <BackgroundImageAndText text="Starter kit for shape patient" />
        </>
      )}
    </div>
  );
}

export default function PortfolioPageCreation() {
  return (
    <div className="relative size-full" data-name="Portfolio page creation" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1672 8929\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(62.665 215.8 -40.41 167.11 35.126 180.28)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.75332\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(255,255,255,0.6)] content-stretch flex h-[100px] items-center justify-between left-1/2 px-[40px] py-[14px] rounded-[20px] top-[80px] w-[1188px]" data-name="Header">
        <div className="content-stretch flex gap-[57px] items-center relative shrink-0">
          <div className="h-[72px] relative shrink-0 w-[52px]" data-name="Caracolor logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 72">
              <g clipPath="url(#clip0_80_1320)" id="Caracolor logo">
                <path d={svgPaths.p2d243d70} fill="var(--fill-0, #40295B)" id="Vector" />
                <path d={svgPaths.p12205e00} fill="var(--fill-0, #CAC1EA)" id="Vector_2" />
                <path d={svgPaths.p2c77ea00} fill="var(--fill-0, #40295B)" id="Vector_3" />
              </g>
              <defs>
                <clipPath id="clip0_80_1320">
                  <rect fill="white" height="72" width="52" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] gap-[48px] items-center leading-[28px] not-italic relative shrink-0 text-[#16121b] text-[20px] whitespace-nowrap">
            <p className="relative shrink-0">About</p>
            <p className="relative shrink-0">Projects</p>
            <p className="relative shrink-0">Experience</p>
          </div>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#16121b] text-[20px] whitespace-nowrap">r.s.fleury@gmail.com</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[180px] items-center left-[calc(14.29%+3.14px)] top-[380px] w-[1188px]">
        <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[1188px]">
          <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[550px]">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <BackgroundImageAndText1 text="IC design Lead" />
                <BackgroundImageAndText1 text="1 PM, 3 Devs" />
                <BackgroundImageAndText1 text="3 mois" />
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase w-[547px]">Chronic Programs</p>
              <div className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[32px] w-[min-content]">
                <p className="mb-0">Transformer un modèle épisodique</p>
                <p>en revenus récurrents</p>
              </div>
            </div>
            <BackgroundImage5>
              <BackgroundImage text="€18k" text1="Revenue mensuels" />
              <BackgroundImage1 text="+56%" text1="Croissance mensuelle" />
              <BackgroundImage text="2 179" text1="Patients actifs" />
            </BackgroundImage5>
            <div className="absolute h-[281px] left-[319px] top-[69.5px] w-[403px]" data-name="Component 3">
              <div className="absolute flex h-[57.62px] items-center justify-center left-[97px] top-[107px] w-[57.026px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="flex-none rotate-[-42.82deg]">
                  <div className="h-[46.084px] relative w-[35.043px]" data-name="Mouse">
                    <div className="absolute inset-[3.29%_-5.11%_-3.38%_-5.11%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6236 46.128">
                        <path d={svgPaths.p27d15600} fill="var(--fill-0, #7A63CA)" id="Mouse" stroke="var(--stroke-0, white)" strokeWidth="4.20391" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[654.056px] relative shrink-0 w-[501px]">
            <div className="absolute h-[736.57px] left-[-64.94px] top-[-117.3px] w-[577.01px]" data-name="Image des programmes">
              <div className="absolute flex h-[638.651px] items-center justify-center left-[38.97px] top-[104.86px] w-[397.489px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="flex-none rotate-[-2.36deg]">
                  <div className="h-[623.856px] relative w-[372.114px]" data-name="Mind">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[112.07%] left-[-7.25%] max-w-none top-[-12.07%] w-[107.25%]" src={imgMind} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[675.225px] left-[194.68px] top-[191.36px] w-[444.214px]" data-name="Shape 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShape1} />
              </div>
            </div>
            <div className="absolute bg-[#fef4ef] content-stretch flex gap-[9.424px] items-center justify-center left-[283.53px] px-[11.309px] py-[7.54px] rounded-[18.849px] top-[640.34px]">
              <div aria-hidden="true" className="absolute border-[#f59260] border-[0.942px] border-solid inset-0 pointer-events-none rounded-[18.849px] shadow-[9.424px_11.309px_32.043px_0px_rgba(188,193,220,0.37)]" />
              <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[15.725px] whitespace-nowrap">🔥</p>
              <p className="font-['Aeonik:Regular',sans-serif] h-[20.734px] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[15.725px] w-[129.115px]">
                <span className="font-['Aeonik:Bold',sans-serif] leading-[normal]">Shape</span>
                <span className="leading-[normal]">{` - 491 users`}</span>
              </p>
            </div>
            <div className="absolute bg-[#feedf8] content-stretch flex gap-[9.424px] items-center justify-center left-[185.17px] px-[11.309px] py-[7.54px] rounded-[18.849px] top-[-26.42px]">
              <div aria-hidden="true" className="absolute border-[#e152a4] border-[0.942px] border-solid inset-0 pointer-events-none rounded-[18.849px] shadow-[9.424px_11.309px_32.043px_0px_rgba(222,172,204,0.37)]" />
              <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[15.725px] whitespace-nowrap">🔥🔥</p>
              <p className="font-['Aeonik:Regular',sans-serif] h-[20.734px] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[15.725px] w-[126.287px]">
                <span className="font-['Aeonik:Bold',sans-serif] leading-[normal]">Mind</span>
                <span className="leading-[normal]">{` - 1702 users`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 w-[946px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Le challenge</p>
            <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">Un modèle fragile, une opportunité claire</p>
          </div>
          <div className="content-stretch flex gap-[40px] h-[278px] items-center relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                <p className="leading-[normal] relative shrink-0 text-[32px] w-full">Le problème</p>
                <p className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
                  {`L'offre épisodique de Qare perdait 50% de ses patients après une seule consultation. `}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                  Ce modèle volatile, dépendant des conditions saisonnières et épidémiologiques, empêchait toute stabilité financière.
                </p>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                <p className="leading-[normal] relative shrink-0 text-[32px] w-full">{`Les opportunités `}</p>
                <div className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
                  <p className="mb-0">{`La santé mentale concerne `}</p>
                  <p className="mb-0">
                    1 Français sur 5 et 80% n’ont jamais consulté (déserts médicaux, prix, stigmatisation)
                    <br aria-hidden="true" />
                    <br aria-hidden="true" />
                  </p>
                  <p>{`L’obésité touche 15 % de la population Française. `}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                <p className="leading-[normal] relative shrink-0 text-[32px] w-full">La contrainte</p>
                <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`Lancer un minimum viable product d’un nouveau service en un temps record pour Qare (3.5 semaines) avec 3 développeurs et un Product manager, tout en validant un nouveau business model et une nouvelle offre. `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[815px] items-start relative shrink-0 w-[946px]">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] h-[702px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[701px]">
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Mon rôle</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{`De la recherche à l'exécution`}</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{`J'ai conduit la recherche utilisateur et assuré la conception de bout en bout du premier programme Shape, qui a défini la stratégie pour que d’autres product designers prennent la suite. `}</p>
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
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#16121b] text-[16px] text-center w-[min-content]">Illustration : Shape mobile landing page</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
                  <BackgroundImage2 text="Compréhension" text1="Récolter et comprendre les attentes des stakeholders et des utilisateurs, puis les traduire en une expérience adaptée à cette nouvelle offre de suivi chronique." />
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
                  <BackgroundImage2 text="Fondations" text1="Poser les fondations du service et des patterns design réutilisables pour l’ensemble des future programme. (Système de contenu modulaire et réorganisation de l’application Qare)" />
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
                    <p className="relative shrink-0 text-[32px] w-full">Stratégie</p>
                    <p className="relative shrink-0 text-[20px] w-full">{`Inspirer la roadmap des lots futurs et aligner l'équipe sur la vision produit : transformer Qare de l'épisodique au chronic care.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[946px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{`L'insight décisif`}</p>
            <div className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full whitespace-pre-wrap">
              <p className="mb-0">{`Les patients souhaites `}</p>
              <p>un accompagnement continue d’une équipe pluridiciplinaire</p>
            </div>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{`Les patients ne veulent pas une app digitale ou suivre un programme en autonomie, ils veulent échanger régulièrement avec des professionnels de santés. `}</p>
          </div>
          <div className="relative shrink-0 w-full" data-name="Component 2">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[56px] items-center relative w-full">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
                    <BackgroundImage3 additionalClassNames="left-[-20px] top-[-18px]" />
                    <p className="font-['Times_New_Roman:Bold_Italic',sans-serif] italic leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[30px] w-[min-content]">{`Moi, je suis responsable de service avec beaucoup de responsabilité, donc j'ai besoin de parler, de vider mon sac`}</p>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[350px]">Interview téléphonique - Mind</p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-full items-start min-h-px min-w-px relative">
                    <BackgroundImage3 additionalClassNames="left-[-23px] top-[-24px]" />
                    <p className="font-['Times_New_Roman:Bold_Italic',sans-serif] italic leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[30px] w-[min-content]">Je veux une équipe qui me comprend et me suit sur le long terme, pas juste une consultation isolée</p>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">Interview téléphonique - Shape</p>
                  </div>
                </div>
                <button className="content-stretch cursor-pointer flex h-[140px] items-center justify-center relative shrink-0 w-[68px]">
                  <div className="overflow-clip relative shrink-0 size-[41.756px]" data-name="24 stroke - arrow">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[27.837px] left-1/2 top-1/2 w-[41.755px]" data-name="vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7555 27.8372">
                        <path clipRule="evenodd" d={svgPaths.p2404ac00} fill="var(--fill-0, #212121)" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
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
                                  <path clipRule="evenodd" d={svgPaths.p27285580} fill="var(--fill-0, #7A63CA)" fillRule="evenodd" />
                                  <path d={svgPaths.p18b1c700} fill="var(--fill-0, #7A63CA)" />
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
                  <p className="font-['Aeonik:Bold',sans-serif] relative shrink-0 text-[24px] w-full">Pourquoi pluridisciplinaire ?</p>
                  <p className="font-['Aeonik:Regular',sans-serif] relative shrink-0 text-[20px] w-full">{`25% des patients en situation d'obésité déclarent avoir des troubles alimentaires compulsifs et cherchent donc à améliorer leur santé physique ET mentale en parallèle. (Source : questionnaire quantitatif) `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f2effa] relative rounded-[40px] shrink-0 w-[1705px]" data-name="Section approche design">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[50px] relative w-full">
              <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{`L'approche design`}</p>
                  <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{`L’interface n’est qu'un facilitateur`}</p>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">Le cœur de notre service repose sur une prise en charge médicale de qualité, accessible rapidement et dans la durée.</p>
                </div>
                <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[946px]">
                  <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0 w-[430px]">
                    <div className="bg-white content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[30px] shrink-0 w-[430px]">
                      <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
                      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40295b] text-[43px] w-[40px]">
                        <p className="leading-[26px]">📱</p>
                      </div>
                      <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Navigation de l'app Qare repensée pour faire de la place aux programmes`}</p>
                      <Helper24StrokeArrowBackgroundImage />
                    </div>
                    <BackgroundImage4 text="🧩" text1="Système de contenu modulaire sans automatisation ni personnalisation (MVP)" />
                    <BackgroundImage4 text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20.286px] h-full items-center justify-center min-h-px min-w-px overflow-clip relative">
                      <div className="aspect-[742/382] relative rounded-[20px] shrink-0 w-full" data-name="Enregistrement de l’écran 2026-02-26 à 11.14.20 1">
                        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                          <video autoPlay className="absolute h-[100.3%] left-[-0.67%] max-w-none top-[-0.43%] w-[100.94%]" controlsList="nodownload" loop playsInline>
                            <source src="/_videos/v1/e9222fe7847fcc24bb5e47b68ea0b5a99a9e2794" />
                          </video>
                        </div>
                      </div>
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-full">Simplification puis réorganisation de l’application puis ajout des éléments des programmes (en violet)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ backgroundImage: "linear-gradient(184.638deg, rgb(255, 255, 255) 11.415%, rgba(255, 255, 255, 0.18) 37.968%, rgba(255, 255, 255, 0) 74.845%, rgb(255, 255, 255) 96.384%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
          <div className="flex h-[1817.212px] items-center justify-center relative shrink-0 w-[2168.742px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-[-4.28deg]">
              <div className="h-[1669px] relative w-[2050px]" data-name="Frame 2087325129 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame20873251291} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[946px]" data-name="Container">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[706px]" data-name="Container">
            <HeadingBackgroundImage>{`Résultats & Learnings`}</HeadingBackgroundImage>
            <div className="font-['Aeonik:Bold',sans-serif] leading-[45px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[36px] w-[min-content] whitespace-pre-wrap">
              <p className="mb-0">{`Des métriques `}</p>
              <p>qui confirment le modèle</p>
            </div>
          </div>
          <BackgroundImage5>
            <BackgroundImage1 text="+56%" text1="Croissance mensuelle" />
            <BackgroundImage text="€18k" text1="Revenue mensuels" />
            <BackgroundImage text="2 179" text1="Patients actifs" />
            <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px] whitespace-nowrap">
              <p className="relative shrink-0 text-[32px]">85%</p>
              <p className="relative shrink-0 text-[12px]">de rétention estimée</p>
            </div>
            <BackgroundImage1 text="80%" text1="D’activation" />
          </BackgroundImage5>
          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage2>
              <ParagraphBackgroundImage>Ce qui a fonctionné</ParagraphBackgroundImage>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                    <IconBackgroundImage />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Inscription en ligne → pic d'inscriptions + réduction du goulot opérationnel`}</p>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                    <IconBackgroundImage />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Ciblage déserts médicaux + message tiers-payant = combo gagnant</p>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                    <IconBackgroundImage />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Promesse autour de l'équipe pluridisciplinaire spécialisée`}</p>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                    <IconBackgroundImage />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Accompagnement constant : améliore acquisition ET rétention</p>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                    <IconBackgroundImage />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Volume consultations en croissance constante — preuve d'engagement réel`}</p>
                </ContainerBackgroundImage>
              </div>
            </ContainerBackgroundImage2>
            <ContainerBackgroundImage2>
              <ParagraphBackgroundImage>{`Ce qui n'a pas fonctionné`}</ParagraphBackgroundImage>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage1>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                    <IconBackgroundImage1 />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Mentionner les GLP-1 pour l'acquisition (sans impact)`}</p>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                    <IconBackgroundImage1 />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Le contenu non personnalisé pour créer de la rétention</p>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                    <IconBackgroundImage1 />
                  </div>
                  <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Le chat actuel, non adapté aux besoins produit sur la durée</p>
                </ContainerBackgroundImage1>
              </div>
            </ContainerBackgroundImage2>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[946px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[706px]" data-name="Container">
            <HeadingBackgroundImage>{`Documents clés `}</HeadingBackgroundImage>
            <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#40295b] text-[36px] w-[539px]">Des livrables avancé pour un impact maximisé</p>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
            <StarterKit className="col-[1/span_2] relative row-1 self-start shrink-0 w-[364px]" />
            <Benchmark className="col-[3/span_3] relative row-1 self-start shrink-0 w-[558px]" />
            <LandingPage className="col-[1/span_3] relative row-2 self-start shrink-0 w-[558px]" />
            <Funnel className="col-[4/span_2] relative row-2 self-start shrink-0 w-[364px]" />
          </div>
        </div>
        <div className="absolute contents left-[844px] top-[3166px]">
          <div className="absolute h-[69px] left-[996px] top-[3536px] w-[166px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 69">
              <path d={svgPaths.p3fdeab00} fill="var(--fill-0, #9EB4B5)" fillOpacity="0.35" id="Vector 369" />
            </svg>
          </div>
          <div className="absolute h-[447px] left-[844px] top-[3166px] w-[460px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[337.737px] items-center justify-center left-[548.25px] top-[7025.77px] w-[319.746px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.3deg]">
            <div className="h-[336.085px] relative w-[318px]" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[0.136px] left-[calc(42.86%-9.46px)] top-[4531.53px] w-0">
        <div className="absolute inset-[0_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 0.136254">
            <path d={svgPaths.p33391200} fill="var(--stroke-0, #633232)" id="Vector 25" />
          </svg>
        </div>
      </div>
    </div>
  );
}