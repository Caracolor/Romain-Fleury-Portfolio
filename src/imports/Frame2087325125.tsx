import svgPaths from "./svg-1l7j89rko";
import imgFrame1217111 from "@/assets/c431e7c9e80c1d2c40ee9ceef75c1ed1dbfd42a6.webp";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(101.251deg, rgb(255, 255, 255) 20.936%, rgba(255, 255, 255, 0) 64.46%, rgb(255, 255, 255) 90.894%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} className="relative rounded-[25px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-5 border-[#e869b6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <BackgroundImage1>
      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#16121b] text-[43px] w-[40px]">
        <p className="leading-[26px] whitespace-pre-wrap">{text}</p>
      </div>
      <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#16121b] text-[18px] whitespace-pre-wrap">{text1}</p>
      <Helper24StrokeArrowBackgroundImage />
    </BackgroundImage1>
  );
}

function Helper24StrokeArrowBackgroundImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[23.695px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.797px] left-1/2 top-1/2 w-[23.695px]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6951 15.7969">
          <path clipRule="evenodd" d={svgPaths.p1c2d7c00} fill="var(--fill-0, #212121)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full">
      <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0 w-[525px]">
        <BackgroundImage1>
          <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#16121b] text-[43px] w-[40px]">
            <p className="leading-[26px] whitespace-pre-wrap">📱</p>
          </div>
          <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#16121b] text-[18px] whitespace-pre-wrap">{`Navigation de l'app Qare repensée pour faire de la place aux programmes`}</p>
          <Helper24StrokeArrowBackgroundImage />
        </BackgroundImage1>
        <BackgroundImage text="🧩" text1="Système de contenu modulaire sans automatisation ni personnalisation (MVP)" />
        <BackgroundImage text="🍾" text1="Utiliser en priorité le produit comme principal source d’acquisition" />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20.286px] h-full items-center justify-center min-h-px min-w-px mix-blend-multiply relative">
          <div className="h-[303.5px] relative shrink-0 w-[452px]" data-name="Frame 121711 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1217111} />
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#16121b] text-[16px] text-center w-[393px] whitespace-pre-wrap">Les touchpoints clés pour recruter des patients pour les programmes sur le produit</p>
        </div>
      </div>
    </div>
  );
}