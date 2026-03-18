function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[30px]">
      <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[32px] relative size-full">{children}</div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container1>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">🎯</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] min-w-full relative shrink-0 text-[#40295b] text-[24px] w-[min-content]">Contexte clinique immédiat</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">{`Toutes les informations pertinentes disponibles immédiatement : dossier patient, résumé des symptômes pré-consultation, alertes médicales, visibles d'un coup d'œil.`}</p>
        </Container1>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container1>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">📋</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] min-w-full relative shrink-0 text-[#40295b] text-[24px] w-[min-content]">Documents pré-générés</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">{`Prescriptions et documents déjà disponibles selon le diagnostic sélectionné. Le choix d'hypothèse diagnostique influence directement les propositions de prescriptions.`}</p>
        </Container1>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic pb-[143px] pt-[32px] px-[32px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">⚡</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] min-w-full relative shrink-0 text-[#40295b] text-[24px] w-[min-content]">Flux inversé</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#40295b] text-[16px] w-[min-content]">{`Inversion des boutons : 'Générer le compte-rendu' avant 'Raccrocher'. Tout se passe pendant la consultation, pas après.`}</p>
        </div>
      </div>
    </div>
  );
}