import svgPaths from "./svg-7b5ztfqg5z";
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <button className="bg-white content-stretch cursor-pointer flex gap-[16px] items-center p-[24px] relative rounded-[30px] shrink-0 w-[430px]">
      <div aria-hidden="true" className="absolute border-4 border-[#d7d0ef] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40295b] text-[43px] text-left w-[40px]">
        <p className="leading-[26px]">{text}</p>
      </div>
      <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px] text-left">{text1}</p>
      <SectionApprocheDesign24StrokeArrow />
    </button>
  );
}

function SectionApprocheDesign24StrokeArrow() {
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

export default function SectionApprocheDesign() {
  return (
    <div className="bg-[#f2effa] relative rounded-[40px] size-full" data-name="Section approche design">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[50px] relative size-full">
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
                  <SectionApprocheDesign24StrokeArrow />
                </div>
                <Helper text="🧩" text1="Système de contenu modulaire sans automatisation ni personnalisation (MVP)" />
                <Helper text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" />
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
  );
}