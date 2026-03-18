export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Le challenge</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">Un modèle fragile, une opportunité claire</p>
      </div>
      <div className="content-stretch flex gap-[40px] h-[278px] items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">Le problème</p>
            <p className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
              {`L'offre épisodique de Qare perdait 50% de ses patients après une seule consultation. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              Ce modèle volatile, dépendant des conditions saisonnières et épidémiologiques, empêchait toute stabilité financière.
            </p>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">{`Les opportunités `}</p>
            <div className="leading-[28px] relative shrink-0 text-[20px] w-full whitespace-pre-wrap">
              <p className="mb-0">{`La santé mentale concerne `}</p>
              <p className="mb-0">
                1 Français sur 5 et 80% n’ont jamais consulté (déserts médicaux, prix, stigmatisation)
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <p>{`L’obésité touche 15 % de la population Française. `}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
            <p className="leading-[normal] relative shrink-0 text-[32px] w-full">La contrainte</p>
            <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`Lancer un minimum viable product d’un nouveau service en un temps record pour Qare (3.5 semaines) avec 3 développeurs et un Product manager, tout en validant un nouveau business model et une nouvelle offre. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}