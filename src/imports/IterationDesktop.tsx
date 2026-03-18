import svgPaths from "./svg-ih2ozeb3v7";
import imgLayoutIteration1 from "figma:asset/d72fc7a5015b34c695ad837485b43c1f6291fcd4.png";

export default function IterationDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="IterationDesktop">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="SectionHeader">
        <div className="content-stretch flex h-[29.5px] items-start relative shrink-0 w-[166.922px]" data-name="Paragraph">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">Itération</p>
        </div>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#16121b] text-[36px] whitespace-nowrap">Challenger pour converger</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[660px]">{`Trois itérations de layout, chacune poussant vers la vision 'hands-free teleconsultation', moins d'interaction, plus d'automatisation.`}</p>
      </div>
      <div className="aspect-[4096/1726] relative shrink-0 w-full" data-name="layout iteration 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLayoutIteration1} />
      </div>
      <div className="bg-[#f2effa] content-stretch flex gap-[30px] items-center p-[32px] relative rounded-[30px] shrink-0 w-[950px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="bg-[#e4e0f4] content-stretch flex items-center justify-center relative rounded-[22.8px] shrink-0 size-[76px]" data-name="Container">
          <div className="relative shrink-0 size-[28px]" data-name="Icon">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <g id="Group">
                  <path d={svgPaths.p5001800} fill="var(--fill-0, #7A63CA)" id="Vector" />
                  <path d={svgPaths.p19b0b9f0} fill="var(--fill-0, #7A63CA)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] h-[122px] items-start not-italic relative shrink-0 text-[#40295b] w-[780px]" data-name="Container">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] whitespace-nowrap">Bold move</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] relative shrink-0 text-[20px] w-[753px]">{`Inverser la séquence des boutons, 'Générer le compte-rendu' remplace 'Raccrocher' comme action principale. Aujourd'hui, le rapport n'est généré qu'au raccroché. Demain, tout se passe pendant la consultation.`}</p>
        </div>
      </div>
    </div>
  );
}