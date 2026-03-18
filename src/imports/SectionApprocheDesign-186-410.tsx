import clsx from "clsx";
import svgPaths from "./svg-aiwr537a48";
import imgCaptureDecran20260226A0908541 from "figma:asset/3bed108660497d47cf40f8a8e62abf095735707b.png";
import imgFrame1217111 from "figma:asset/c431e7c9e80c1d2c40ee9ceef75c1ed1dbfd42a6.png";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-end justify-end size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-end justify-end p-[24px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[23.695px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.797px] left-1/2 top-1/2 w-[23.695px]" data-name="vector">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <button className={clsx("bg-white cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-4 border-[#d7d0ef] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-end justify-end size-full">{children}</div>
    </button>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="self-stretch">
      <div className="content-stretch flex flex-col gap-[16px] items-end justify-end p-[24px] relative size-full">{children}</div>
    </Wrapper1>
  );
}
type SectionApprocheDesignHelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function SectionApprocheDesignHelper({ text, text1, additionalClassNames = "" }: SectionApprocheDesignHelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start min-h-px min-w-px not-italic relative text-[#40295b] w-full", additionalClassNames)}>
      <div className="flex flex-col h-[61.579px] justify-center leading-[0] relative shrink-0 text-[43px] w-[53.695px]">
        <p className="leading-[26px]">{text}</p>
      </div>
      <p className="h-[99.474px] leading-[28px] relative shrink-0 text-[20px] w-full">{text1}</p>
    </div>
  );
}

function Helperbutton24StrokeArrow() {
  return (
    <Wrapper2>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6951 15.7969">
        <path clipRule="evenodd" d={svgPaths.p1c2d7c00} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
      </svg>
    </Wrapper2>
  );
}

function SectionApprocheDesign24StrokeArrow() {
  return (
    <Wrapper2>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9998 16">
        <path clipRule="evenodd" d={svgPaths.p22454070} fill="var(--fill-0, #212121)" fillRule="evenodd" id="vector" />
      </svg>
    </Wrapper2>
  );
}
type SectionApprocheDesignProps = {
  className?: string;
  property1?: "Default";
};

function SectionApprocheDesign({ className, property1 = "Default" }: SectionApprocheDesignProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `bg-[#f2effa] relative w-[3265px] ${isDefault ? "h-[1182px]" : "h-[1181px]"}`}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[80px] relative size-full">
          <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[800px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{`L'approche design`}</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{`L’interface n’est qu'un facilitateur`}</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">Le cœur de notre service repose sur une prise en charge médicale de qualité, accessible rapidement et dans la durée.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-full">
                {isDefault && (
                  <>
                    <Wrapper>
                      <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start min-h-px min-w-px not-italic relative text-[#40295b] text-left w-full">
                        <div className="flex flex-col h-[61.579px] justify-center leading-[0] relative shrink-0 text-[43px] w-[32.065px]">
                          <p className="leading-[26px]">📱</p>
                        </div>
                        <p className="h-[99.474px] leading-[28px] relative shrink-0 text-[20px] w-full">{`Navigation de l'app Qare repensée pour faire de la place aux programmes`}</p>
                      </div>
                      <SectionApprocheDesign24StrokeArrow />
                    </Wrapper>
                    <div className={`bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] ${isDefault ? "h-[295.695px]" : "self-stretch"}`}>
                      <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
                      <Wrapper3>
                        <div className={`content-stretch flex flex-col font-["Aeonik:Regular",sans-serif] gap-[16px] items-start not-italic relative text-[#40295b] w-full ${isDefault ? "shrink-0" : "flex-[1_0_0] min-h-px min-w-px"}`}>
                          <div className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[43px] ${isDefault ? "h-[52px] w-[40px]" : "h-[61.579px] w-[32.065px]"}`}>
                            <p className="leading-[26px]">{isDefault ? "🧩" : "📱"}</p>
                          </div>
                          <p className={`leading-[28px] relative shrink-0 text-[20px] ${isDefault ? "min-w-full w-[min-content]" : "h-[99.474px] w-full"}`}>{isDefault ? "Système de contenu modulaire sans automatisation ni personnalisation (MVP)" : "Navigation de l'app Qare repensée pour faire de la place aux programmes"}</p>
                        </div>
                        <Wrapper2>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefault ? "0 0 23.9998 16" : "0 0 23.6951 15.7969"}>
                            <path clipRule="evenodd" d={isDefault ? svgPaths.p22454070 : svgPaths.p1c2d7c00} fill={isDefault ? "var(--fill-0, #212121)" : "var(--fill-0, #40295B)"} fillRule="evenodd" id="vector" />
                          </svg>
                        </Wrapper2>
                      </Wrapper3>
                    </div>
                    <button className={`bg-white cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] ${isDefault ? "" : "self-stretch"}`}>
                      <div aria-hidden="true" className="absolute border-4 border-[#d7d0ef] border-solid inset-0 pointer-events-none rounded-[30px]" />
                      <div className="flex flex-col items-end justify-end size-full">
                        <div className={`content-stretch flex flex-col gap-[16px] items-end justify-end p-[24px] relative ${isDefault ? "w-full" : "size-full"}`}>
                          <div className={`content-stretch flex flex-col font-["Aeonik:Regular",sans-serif] gap-[16px] items-start not-italic relative text-[#40295b] text-left w-full ${isDefault ? "shrink-0" : "flex-[1_0_0] min-h-px min-w-px"}`}>
                            <div className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[43px] ${isDefault ? "h-[52px] w-[40px]" : "h-[61.579px] w-[53.695px]"}`}>
                              <p className="leading-[26px]">{isDefault ? "🧩" : isDefault ? "🍾" : ""}</p>
                            </div>
                            <p className={`leading-[28px] relative shrink-0 text-[20px] ${isDefault ? "min-w-full w-[min-content]" : "h-[99.474px] w-full"}`}>{isDefault ? "Système de contenu modulaire sans automatisation ni personnalisation (MVP)" : isDefault ? "Utiliser en priorité le produit comme principal source d’acquisition" : ""}</p>
                          </div>
                          <SectionApprocheDesign24StrokeArrow />
                        </div>
                      </div>
                    </button>
                    <Wrapper1>
                      <div className="content-stretch flex flex-col gap-[16px] items-end justify-end p-[24px] relative w-full">
                        <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start not-italic relative shrink-0 text-[#40295b] text-left w-full">
                          <div className="flex flex-col h-[52px] justify-center leading-[0] relative shrink-0 text-[43px] w-[40px]">
                            <p className="leading-[26px]">🧩</p>
                          </div>
                          <p className="leading-[28px] min-w-full relative shrink-0 text-[20px] w-[min-content]">Système de contenu modulaire sans automatisation ni personnalisation (MVP)</p>
                        </div>
                        <Helperbutton24StrokeArrow />
                      </div>
                    </Wrapper1>
                    <Wrapper>
                      <SectionApprocheDesignHelper text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" additionalClassNames="text-left" />
                      <Helperbutton24StrokeArrow />
                    </Wrapper>
                    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] self-stretch">
                      <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
                      <Wrapper3>
                        <SectionApprocheDesignHelper text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" />
                        <SectionApprocheDesign24StrokeArrow />
                      </Wrapper3>
                    </div>
                  </>
                )}
              </div>
              <div className="content-stretch flex flex-col gap-[20.286px] items-center justify-center overflow-clip relative shrink-0 w-full">
                {isDefault && (
                  <>
                    <div className="aspect-[742/382] relative rounded-[30px] shrink-0 w-full" data-name="Enregistrement de l’écran 2026-02-26 à 11.14.20 1">
                      <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                        <video autoPlay className="absolute h-[100.3%] left-[-0.67%] max-w-none top-[-0.43%] w-[100.94%]" controlsList="nodownload" loop playsInline>
                          <source src="/_videos/v1/e9222fe7847fcc24bb5e47b68ea0b5a99a9e2794" />
                        </video>
                      </div>
                    </div>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-[376.852px]">Simplification puis réorganisation de l’application puis ajout des éléments des programmes (en violet)</p>
                    <div className="h-[411.86px] relative rounded-[30px] shrink-0 w-[800.001px]" data-name="Capture d’écran 2026-02-26 à 09.08.54 1">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                        <div className="absolute bg-white inset-0 rounded-[30px]" />
                        <div className="absolute inset-0 mix-blend-multiply overflow-hidden rounded-[30px]">
                          <img alt="" className="absolute h-[100.13%] left-[0.05%] max-w-none top-[0.01%] w-[119.36%]" src={imgCaptureDecran20260226A0908541} />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-[376.852px]">Présentation du concept en module et de socle commun pour les contenu médicaux</p>
                    <div className="bg-white h-[411.86px] relative rounded-[30px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start p-[30px] relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[740px]" data-name="Frame 121711 1">
                          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame1217111} />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-[376.852px]">Les touchpoints clés pour recruter des patients pour les programmes sur le produit</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionApprocheDesign1() {
  return <SectionApprocheDesign className="bg-[#f2effa] relative size-full" />;
}