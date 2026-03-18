function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[30px]">
      <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] not-italic p-[32px] relative size-full text-[#16121b] whitespace-pre-wrap">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px] whitespace-pre-wrap">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Le challenge</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#16121b] text-[36px] w-full">Un modèle fragile, une opportunité claire</p>
      </div>
      <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Wrapper>
            <p className="relative shrink-0 text-[32px] w-full">Le problème</p>
            <p className="relative shrink-0 text-[20px] w-full">{`L'offre épisodique de Qare perdait 50% de ses patients après une seule consultation. Ce modèle volatile, dépendant des conditions saisonnières et épidémiologiques, empêchait toute stabilité financière.`}</p>
          </Wrapper>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Wrapper>
            <p className="relative shrink-0 text-[32px] w-full">{`Les opportunités `}</p>
            <div className="relative shrink-0 text-[20px] w-full">
              <p className="mb-0">{`La santé mentale concerne `}</p>
              <p className="mb-0">
                1 Français sur 5 et 80% n’ont jamais consulté (déserts médicaux, prix, stigmatisation)
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <p>{`L’obésité touche 15 % de la population Française. `}</p>
            </div>
          </Wrapper>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Wrapper>
            <p className="relative shrink-0 text-[32px] w-full">La contrainte</p>
            <p className="relative shrink-0 text-[20px] w-full">{`Lancer un minimum viable product d’un nouveau service en un temps record pour Qare (3.5 semaines) avec 3 développeurs et un Product manager, tout en validant un nouveau business model et une nouvelle offre. `}</p>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}