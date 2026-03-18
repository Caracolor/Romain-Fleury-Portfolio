function Container() {
  return (
    <div className="relative rounded-full shrink-0 size-[13.608px]">
      <div aria-hidden="true" className="absolute border-2 border-[#40295b] border-solid inset-0 pointer-events-none rounded-full" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{`L'APPROCHE DESIGN`}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">Être appelé par son praticien comme un appel classique</p>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-[30px] shrink-0 w-full">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">{`Le branded call ne se déclenche que lorsque toutes les conditions pré-consultation sont remplies et que le patient n'est pas en salle d'attente. Pour limiter les coûts et éviter une expérience incohérente.`}</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
              <div className="bg-[#f2effa] h-[10px] shrink-0 w-[2px]" data-name="Container" />
              <Container />
              <div className="bg-[#40295b] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start min-h-px min-w-px not-italic pb-[40px] relative rounded-[30px] text-[#40295b]">
              <p className="leading-[normal] relative shrink-0 text-[28px] w-full">Lot 1 : déclenchement réactif</p>
              <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`L'appel est passé quand le praticien rejoint la consultation. Deux tentatives à 20 secondes d'intervalle. Clôture automatique du no-show, le praticien n'a plus à déclarer les absences manuellement.`}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
              <div className="bg-[#40295b] h-[10px] shrink-0 w-[2px]" data-name="Container" />
              <Container />
              <div className="bg-[#f2effa] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start min-h-px min-w-px not-italic pb-[40px] relative rounded-[30px] text-[#40295b]">
              <p className="leading-[normal] relative shrink-0 text-[28px] w-full">Lot 2 : déclenchement proactif</p>
              <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`L'appel est déclenché en amont sur un signal prédictif data-driven (clôture consultation précédente, génération du CR). Le praticien en modèle horaire ne voit plus de no-show. Qare devient sans non-présent.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}