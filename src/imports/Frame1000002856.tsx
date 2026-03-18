import imgRectangle2068 from "figma:asset/623c959409db4893ffbb1a4c84b4c225c3506adf.png";
import imgRectangle2067 from "figma:asset/0340fd21e644f3e79fb70a6148ca3346d42f5503.png";
import imgRectangle2066 from "figma:asset/5fbfa8664a8e7235ddf4eecd1681a7eea0c2de5a.png";
import imgRectangle2065 from "figma:asset/29b08f7bb13f6dda67c4bd717417f76b77a6730a.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
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
    <BackgroundImage>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase w-[271.245px]">{text}</p>
    </BackgroundImage>
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
          <BackgroundImage>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase whitespace-nowrap">Landing page Shape</p>
          </BackgroundImage>
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
          <BackgroundImage>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[4.8px] uppercase w-[393.16px]">Benchmark concurrentiel</p>
          </BackgroundImage>
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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[706px]" data-name="Container">
        <div className="content-stretch flex h-[29px] items-start relative shrink-0 w-[378.508px]" data-name="Heading 4">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{`Documents clés `}</p>
        </div>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#40295b] text-[36px] w-[539px]">Des livrables avancé pour un impact maximisé</p>
      </div>
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
        <StarterKit className="col-[1/span_2] relative row-1 self-start shrink-0 w-[364px]" />
        <Benchmark className="col-[3/span_3] relative row-1 self-start shrink-0 w-[558px]" />
        <LandingPage className="col-[1/span_3] relative row-2 self-start shrink-0 w-[558px]" />
        <Funnel className="col-[4/span_2] relative row-2 self-start shrink-0 w-[364px]" />
      </div>
    </div>
  );
}