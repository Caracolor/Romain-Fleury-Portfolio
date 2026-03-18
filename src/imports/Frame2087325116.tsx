import svgPaths from "./svg-nuo1rvtwwd";
import imgMind from "figma:asset/d6920b25d0dacb652a7f15f95d1fa9fc65e4be75.png";
import imgPhone from "figma:asset/df79892ff413427f060d32c68e012fe91c5915f1.png";

type Frame1BackgroundImageProps = {
  text: string;
  text1: string;
};

function Frame1BackgroundImage({ text, text1 }: Frame1BackgroundImageProps) {
  return (
    <div className="relative shrink-0">
      <p className="mb-0 text-[39.304px]">{text}</p>
      <p className="font-['Aeonik:Light',sans-serif] text-[14.739px]">{text1}</p>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="bg-white relative shrink-0 size-[8px]">
      <div aria-hidden="true" className="absolute border border-[#008ff0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="content-stretch flex flex-col gap-[136px] items-start justify-center relative shrink-0">
      <BackgroundImage1 />
      <BackgroundImage1 />
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d8dded] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f0f0f] text-[16.685px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[37px] items-center relative size-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[619px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
          <div aria-hidden="true" className="absolute border border-[#008ff0] border-dashed inset-[-1px] pointer-events-none" />
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <BackgroundImageAndText text="IC design Lead" />
            <BackgroundImageAndText text="1 PM, 3 Devs" />
            <BackgroundImageAndText text="3 mois" />
          </div>
          <div className="content-stretch flex h-[144px] items-center justify-center relative shrink-0 w-[553px]">
            <div aria-hidden="true" className="absolute border border-[#008ff0] border-solid inset-[-1px] pointer-events-none" />
            <BackgroundImage />
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[60px] tracking-[18px] uppercase w-[547px] whitespace-pre-wrap">{`Qare programme `}</p>
            <BackgroundImage />
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[32px] w-[520px] whitespace-pre-wrap">Transformer un modèle épisodique en revenus récurrents</p>
          <div className="absolute h-0 left-[6px] top-[121px] w-[230px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
                <line id="Line 1" stroke="var(--stroke-0, #008FF0)" x2="230" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute h-0 left-[6px] top-[193px] w-[531px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 531 1">
                <line id="Line 2" stroke="var(--stroke-0, #008FF0)" x2="531" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bg-[#008ff0] content-stretch flex items-center justify-center left-[226px] px-[8px] py-[2px] rounded-[2px] top-[211px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[10px] text-white">619 Fill x 144 Hug</p>
          </div>
          <div className="absolute flex h-[57.62px] items-center justify-center left-[463px] top-[169px] w-[57.026px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="flex-none rotate-[-42.82deg]">
              <div className="h-[46.084px] relative w-[35.043px]" data-name="Mouse">
                <div className="absolute inset-[3.29%_-5.11%_-3.38%_-5.11%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6236 46.128" overflow="visible">
                    <path d={svgPaths.p27d15600} fill="var(--fill-0, #F59260)" id="Mouse" stroke="var(--stroke-0, white)" strokeWidth="4.20391">
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
        <div
          className="relative rounded-[30px] shrink-0 w-full shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]"
          style={{
            border: "5px solid transparent",
            background: [
              "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%) 0 0 / auto auto padding-box",
              "radial-gradient(circle, rgba(190,170,230,0.45) 1px, transparent 1px) 0 0 / 13px 13px padding-box",
              "linear-gradient(white, white) 0 0 / auto auto padding-box",
              "linear-gradient(135deg, rgba(232,105,182,0.1) 0%, rgba(255,255,255,0.1) 100%) border-box",
            ].join(", "),
          }}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] items-center justify-between leading-[1.512] not-italic px-[56px] py-[32px] relative text-[#16121b] text-[0px] text-center w-full whitespace-nowrap">
              <Frame1BackgroundImage text="€18k" text1="Revenue mensuels" />
              <Frame1BackgroundImage text="2 179" text1="Patients actifs" />
              <Frame1BackgroundImage text="+56%" text1="Croissance mensuelle moyenne" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[694px] relative shrink-0 w-[532px]">
        <div className="absolute h-[723.779px] left-[-80px] top-[-97px] w-[566.99px]" data-name="Image des programmes">
          <style>{`
            @keyframes float-a {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
            @keyframes float-b {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-9px); }
            }
          `}</style>
          <div className="absolute flex h-[627.561px] items-center justify-center left-[55px] top-[105px] w-[390.587px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18", animation: "float-a 5s ease-in-out infinite" } as React.CSSProperties}>
            <div className="flex-none rotate-[-2.36deg]">
              <div className="h-[613.023px] relative w-[365.653px]" data-name="Mind">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[112.07%] left-[-7.25%] max-w-none top-[-12.07%] w-[107.25%]" src={imgMind} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[663.5px] left-[208px] top-[190px] w-[436.5px]" data-name="Shape 1" style={{ animation: "float-b 6s ease-in-out infinite", animationDelay: "1.2s" }}>
            <img alt="Gérer mon poids" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhone} />
          </div>
        </div>
        <div className="absolute bg-[#fef4ef] content-stretch flex gap-[10px] items-center justify-center left-[315px] px-[12px] py-[8px] rounded-[20px] top-[637px]">
          <div aria-hidden="true" className="absolute border border-[#f59260] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[10px_12px_34px_0px_rgba(188,193,220,0.37)]" />
          <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[16.685px]">🔥</p>
          <p className="font-['Aeonik:Regular',sans-serif] h-[22px] leading-[0] not-italic relative shrink-0 text-[#16121b] text-[16.685px] w-[137px] whitespace-pre-wrap">
            <span className="font-['Aeonik:Bold',sans-serif] leading-[normal]">Shape</span>
            <span className="leading-[normal]">{` - 491 users`}</span>
          </p>
        </div>
        <div className="absolute bg-[#feedf8] content-stretch flex gap-[10px] items-center justify-center left-[133px] px-[12px] py-[8px] rounded-[20px] top-[-2px]">
          <div aria-hidden="true" className="absolute border border-[#e152a4] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[10px_12px_34px_0px_rgba(222,172,204,0.37)]" />
          <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[16.685px]">🔥🔥</p>
          <p className="font-['Aeonik:Regular',sans-serif] h-[22px] leading-[0] not-italic relative shrink-0 text-[#16121b] text-[16.685px] w-[134px] whitespace-pre-wrap">
            <span className="font-['Aeonik:Bold',sans-serif] leading-[normal]">Mind</span>
            <span className="leading-[normal]">{` - 1702 users`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}