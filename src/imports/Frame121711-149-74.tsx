import imgOffreDemande1 from "figma:asset/21363b588e3c244cb572f9799af56ec8ae7a2fb9.png";
import imgConsultationTimeDesktop1 from "figma:asset/119b9d08982735226c998127e9e2ca9ad617a580.png";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-[min-content]">Le challenge</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] min-w-full relative shrink-0 text-[#40295b] text-[36px] w-[min-content]">Un plafond de croissance, un levier clair</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-[686px]">{`La demande dépasse l'offre médicale. Le principal levier pour augmenter cette offre est la réduction du temps administratif.`}</p>
      </div>
      <div className="aspect-[2838/1077] relative shrink-0 w-full" data-name="Offre:demande 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOffreDemande1} />
      </div>
      <div className="content-stretch flex gap-[40px] h-[334px] items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">Le problème</p>
            <div className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
              <p className="mb-0">{`La demande patient dépasse l'offre médicale disponible, ce qui limite directement la croissance de Qare. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>{`Les optimisations incrémentales sur le produit existant n'ont eu qu'un impact trop marginal. L'approche devait être beaucoup plus ambitieuse.`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">{`Les opportunités `}</p>
            <div className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
              <p className="mb-0">
                {`L'intégration d’automatisation  (ex : LLM) permet de pré-remplir le contexte clinique, générer des propositions diagnostiques et des prescriptions avant l'échange vidéo. `}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <p>Le cas de la gêne urinaire semble offrir un terrain idéal pour itérer.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">La contrainte</p>
            <div className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
              <p className="mb-0">{`Une interface legacy très fragmentée : seulement 10 onglets sur 4 utilisés quotidiennement. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>Le redesign ne peut pas être incrémental, il faut repenser le flux complet de la consultation, tout en intégrant des automatisations.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-[3890/1016] relative shrink-0 w-full" data-name="Consultation time - Desktop 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConsultationTimeDesktop1} />
      </div>
    </div>
  );
}