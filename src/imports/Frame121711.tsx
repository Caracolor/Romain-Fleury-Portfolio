import clsx from "clsx";
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div
      className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]", additionalClassNames)}
      style={{
        border: "5px solid transparent",
        background: [
          "linear-gradient(white, white) 0 0 / auto auto padding-box",
          "linear-gradient(135deg, rgba(232,105,182,0.1) 0%, rgba(255,255,255,0.1) 100%) border-box",
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1 additionalClassNames="h-full">
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start not-italic p-[32px] relative size-full text-[#16121b] whitespace-pre-wrap">{children}</div>
    </BackgroundImage1>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 whitespace-pre-wrap">
        <h4 className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#4d47b4] text-[24px] tracking-[4.8px] uppercase w-full">Le challenge</h4>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#16121b] text-[36px] w-full">
          {`Un modèle fragile, `}<br />une opportunité claire
        </h2>
      </div>
      <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <BackgroundImage>
            <p className="leading-[normal] relative shrink-0 text-[30px] w-full">Le problème</p>
            <p className="leading-[26px] relative shrink-0 text-[20px] w-full">{`L'offre épisodique de Qare perdait 50% de ses patients après une seule consultation. Ce modèle volatile, dépendant des conditions saisonnières et épidémiologiques, empêchait toute stabilité financière.`}</p>
          </BackgroundImage>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <BackgroundImage>
            <p className="leading-[normal] relative shrink-0 text-[30px] w-full">{`Les opportunités `}</p>
            <div className="leading-[26px] relative shrink-0 text-[20px] w-full">
              <p className="mb-0">{`La santé mentale concerne `}</p>
              <p className="mb-0">
                1 Français sur 5 et 80% n’ont jamais consulté (déserts médicaux, prix, stigmatisation)
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </p>
              <p>{`L’obésité touche 15 % de la population Française. `}</p>
            </div>
          </BackgroundImage>
        </div>
        <BackgroundImage1>
          <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start not-italic p-[32px] relative text-[#16121b] w-full whitespace-pre-wrap">
            <p className="leading-[normal] relative shrink-0 text-[30px] w-full">La contrainte</p>
            <p className="leading-[26px] relative shrink-0 text-[20px] w-full">{`Lancer un minimum viable product d’un nouveau service en un temps record pour Qare (3.5 semaines) avec 3 développeurs et un Product manager, tout en validant un nouveau business model et une nouvelle offre. `}</p>
          </div>
        </BackgroundImage1>
      </div>
    </div>
  );
}