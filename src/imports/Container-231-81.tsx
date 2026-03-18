import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">{children}</div>
    </div>
  );
}
type RoleBlockProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function RoleBlock({ text, text1, additionalClassNames = "" }: RoleBlockProps) {
  return (
    <div className={clsx("content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px not-italic relative text-[#40295b]", additionalClassNames)}>
      <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[24px] w-full">{text}</p>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">{text1}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[13.608px]">
      <div aria-hidden="true" className="absolute border-2 border-[#40295b] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full" data-name="Container">
      <div className="h-[134px] relative shrink-0 w-[706px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start not-italic relative size-full">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">MON RÔLE</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-[457.125px]">De la discovery technique à la conception design</p>
        </div>
      </div>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-[794px]">{`J'ai mené la recherche, structuré la conception et facilité les arbitrages pour livrer une solution en deux lots progressifs, en collaboration avec Tristan (PM) et Nicolas (Lead Dev).`}</p>
      <div className="relative shrink-0 w-[800px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <Wrapper>
            <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
              <div className="bg-white h-[10px] shrink-0 w-[2px]" data-name="Container" />
              <Container1 />
              <div className="bg-[#40295b] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </div>
            <RoleBlock text="Discovery et cadrage" text1="Catégorisation continue des feedbacks utilisateurs (stores, Trustpilot) avec Eva pour alimenter le codir. Ce projet est issu de cette discovery au long cours. Investigation technique Vonage, benchmark Livi, Slack, WhatsApp, Signal." additionalClassNames="pb-[24px]" />
          </Wrapper>
          <Wrapper>
            <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
              <div className="bg-[#40295b] h-[10px] shrink-0 w-[2px]" data-name="Container" />
              <Container1 />
              <div className="bg-[#40295b] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px not-italic pb-[24px] relative text-[#40295b]" data-name="RoleBlock">
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[24px] w-full">Conception multi-plateforme</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">{`Cartographie des comportements iOS (CallKit) et Android (ConnectionService) selon 5 états du téléphone. Design des flows patient et praticien pour les deux lots, en tenant compte des contraintes d'interface système.`}</p>
            </div>
          </Wrapper>
          <Wrapper>
            <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
              <div className="bg-[#40295b] h-[10px] shrink-0 w-[2px]" data-name="Container" />
              <Container1 />
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </div>
            <RoleBlock text="Arbitrages et alignement" text1="Structuration de la conception review, lotissement Lot 1 / Lot 2, facilitation des trade-offs techniques (archi modulaire vs ship fast, feature flag, réutilisabilité cross-marché HealthHero)." />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}