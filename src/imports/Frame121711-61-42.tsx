import svgPaths from "./svg-juwm4ya8ml";
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[30px] shrink-0 w-[430px]">
      <div aria-hidden="true" className="absolute border-4 border-[#d7d0ef] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40295b] text-[43px] w-[40px]">
        <p className="leading-[26px]">{text}</p>
      </div>
      <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{text1}</p>
      <Helper24StrokeArrow />
    </div>
  );
}

function Helper24StrokeArrow() {
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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start relative size-full">
      <div className="bg-white content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[30px] shrink-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40295b] text-[43px] w-[40px]">
          <p className="leading-[26px]">📱</p>
        </div>
        <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Navigation de l'app Qare repensée pour faire de la place aux programmes`}</p>
        <Helper24StrokeArrow />
      </div>
      <Helper text="🧩" text1="Système de contenu modulaire sans automatisation ni personnalisation (MVP)" />
      <Helper text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" />
    </div>
  );
}