import svgPaths from "./svg-zcy5iblb1g";
import imgMind from "@/assets/d6920b25d0dacb652a7f15f95d1fa9fc65e4be75.webp";
import imgShape1 from "@/assets/df79892ff413427f060d32c68e012fe91c5915f1.webp";
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[12px] w-full">{text1}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center px-[56px] relative size-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[550px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <Text text="IC design Lead" />
            <Text text="1 PM, 3 Devs" />
            <Text text="3 mois" />
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase w-[547px]">Chronic Programs</p>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[32px] w-[min-content]">
            <p className="mb-0">Transformer un modèle épisodique</p>
            <p>en revenus récurrents</p>
          </div>
        </div>
        <div className="bg-white relative rounded-[30px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] items-center justify-between leading-[normal] not-italic px-[40px] py-[32px] relative text-[#40295b] text-center w-full">
              <Helper text="€18k" text1="Revenue mensuels" />
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
                <p className="min-w-full relative shrink-0 text-[32px] w-[min-content]">+56%</p>
                <p className="relative shrink-0 text-[12px] whitespace-nowrap">Croissance mensuelle</p>
              </div>
              <Helper text="2 179" text1="Patients actifs" />
            </div>
          </div>
        </div>
        <div className="absolute h-[281px] left-[319px] top-[69.5px] w-[403px]" data-name="Component 3">
          <div className="absolute flex h-[57.62px] items-center justify-center left-[97px] top-[107px] w-[57.026px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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
          <div className="absolute flex h-[638.651px] items-center justify-center left-[38.97px] top-[104.86px] w-[397.489px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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
  );
}