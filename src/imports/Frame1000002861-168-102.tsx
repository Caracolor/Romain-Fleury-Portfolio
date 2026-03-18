import imgAvantApres1 from "@/assets/5abc98df57480d34cdb6e825b2ac4fb4b883c7f3.png";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[30px]">
      <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[32px] relative size-full">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f2effa] content-stretch flex flex-col items-center justify-center py-[56px] relative size-full">
      <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[946px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-[min-content]">{`L'approche design`}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-[533.9px]">{`D'une interface exhaustive à une interface contextuelle`}</p>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">🎯</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-[190px]">Contexte clinique immédiat</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#40295b] text-[16px] w-[210px]">{`Toutes les informations pertinentes disponibles immédiatement : dossier patient, résumé des symptômes pré-consultation, alertes médicales, visibles d'un coup d'œil.`}</p>
            </Container>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">📋</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-[175px]">Documents pré-générés</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#40295b] text-[16px] w-[234px]">{`Prescriptions et documents déjà disponibles selon le diagnostic sélectionné. Le choix d'hypothèse diagnostique influence directement les propositions de prescriptions.`}</p>
            </Container>
          </div>
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start not-italic pb-[143px] pt-[32px] px-[32px] relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">⚡</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] whitespace-nowrap">Flux inversé</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#40295b] text-[16px] w-[228px]">{`Inversion des boutons : 'Générer le compte-rendu' avant 'Raccrocher'. Tout se passe pendant la consultation, pas après.`}</p>
            </div>
          </div>
        </div>
        <div className="aspect-[4054/1876] relative rounded-[30px] shrink-0 w-full" data-name="Avant-apres 1">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
            <div className="absolute bg-[#f6fcf9] inset-0 rounded-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgAvantApres1} />
          </div>
        </div>
      </div>
    </div>
  );
}