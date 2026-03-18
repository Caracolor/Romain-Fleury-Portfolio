import clsx from "clsx";
import imgImg2026031809485221 from "@/assets/1ea6fd23dc5cbfb308b899ec3a13e623566b0de3.png";
import imgPlaceholderVisual from "@/assets/fc9ea84d4278e19a62dbac88dd0fc2f64597e90b.png";
import imgPlaceholderVisual1 from "@/assets/1ac1c00a853def5807d6bdb5f60c31c75e6f02e6.png";
import imgPlaceholderVisual2 from "@/assets/eb011123c8e70c165a23555a609d1067dfd55470.png";

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
    <div className={clsx("content-stretch flex flex-col gap-[12px] items-start not-italic relative text-[#40295b]", additionalClassNames)}>
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
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative">
              <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
                <div className="bg-white h-[10px] shrink-0 w-[2px]" data-name="Container" />
                <Container1 />
                <div className="bg-[#40295b] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
              </div>
              <RoleBlock text="Discovery et cadrage" text1="Catégorisation continue des feedbacks utilisateurs (stores, Trustpilot) avec Eva pour alimenter le codir. Ce projet est issu de cette discovery au long cours. Investigation technique Vonage, benchmark Livi, Slack, WhatsApp, Signal." additionalClassNames="pb-[24px] shrink-0 w-[762.392px]" />
            </div>
          </div>
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
            <RoleBlock text="Arbitrages et alignement" text1="Structuration de la conception review, lotissement Lot 1 / Lot 2, facilitation des trade-offs techniques (archi modulaire vs ship fast, feature flag, réutilisabilité cross-marché HealthHero)." additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
          </Wrapper>
        </div>
      </div>
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative">
          <div className="h-[426.164px] relative rounded-[20px] shrink-0 w-[800px]" data-name="IMG_20260318_094852-2 1">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute h-[140.79%] left-0 max-w-none top-[-20.52%] w-full" src={imgImg2026031809485221} />
              </div>
              <div className="absolute bg-[rgba(163,144,214,0.2)] inset-0 mix-blend-multiply rounded-[20px]" />
            </div>
          </div>
          <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-[800px]" data-name="Container">
            <div className="col-1 justify-self-stretch relative rounded-[20px] row-1 self-stretch shrink-0" data-name="PlaceholderVisual">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgPlaceholderVisual} />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute h-[22px] left-[261.73px] top-0 w-[272.547px]" data-name="Paragraph" />
              </div>
            </div>
            <div className="col-1 justify-self-stretch relative rounded-[20px] row-2 self-stretch shrink-0" data-name="PlaceholderVisual">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgPlaceholderVisual1} />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute h-[22px] left-[261.73px] top-[-0.32px] w-[272.547px]" data-name="Paragraph" />
              </div>
            </div>
            <div className="col-2 h-[385px] justify-self-stretch relative rounded-[20px] row-[1/span_2] self-start shrink-0" data-name="PlaceholderVisual">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgPlaceholderVisual2} />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute h-[22px] left-[191.74px] top-0 w-[412.516px]" data-name="Paragraph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}