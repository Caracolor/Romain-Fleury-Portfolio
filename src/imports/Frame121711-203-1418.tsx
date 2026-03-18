import clsx from "clsx";
import svgPaths from "./svg-xyqgfq209u";

function Container7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Paragraph1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[21.5px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Aeonik:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b] text-[18px]">{children}</p>
    </div>
  );
}

function Container6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start not-italic pb-[56px] relative w-full">{children}</div>
    </div>
  );
}

function Container5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[56px] relative w-full">{children}</div>
    </div>
  );
}
type ParagraphProps = {
  additionalClassNames?: string;
};

function Paragraph({ children, additionalClassNames = "" }: React.PropsWithChildren<ParagraphProps>) {
  return (
    <div className={clsx("h-[19.137px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Container4Props = {
  additionalClassNames?: string;
};

function Container4({ children, additionalClassNames = "" }: React.PropsWithChildren<Container4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-[20.413px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#feeff2] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6fcf9] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#a4e0c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
        <path clipRule="evenodd" d={svgPaths.p7bd3900} fill="var(--fill-0, #F9A2AF)" fillRule="evenodd" id="vector" />
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[7.922px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[0_0.01%_0_-0.01%]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
          <path clipRule="evenodd" d={svgPaths.p406e100} fill="var(--fill-0, #A4E0C6)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ additionalClassNames = "" }: Container1Props) {
  return (
    <div className={clsx("relative rounded-full shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#3c3162] border-solid inset-0 pointer-events-none rounded-full" />
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[17.861px] relative shrink-0 w-full">
      <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#7a63ca] text-[20px] top-[-0.3px] tracking-[4px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ additionalClassNames = "" }: ContainerProps) {
  return (
    <div className={clsx("relative rounded-full shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#40295b] border-solid inset-0 pointer-events-none rounded-full" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-center pb-[300px] pt-[169px] relative size-full">
      <div className="content-stretch flex items-end justify-between pt-[228px] relative shrink-0 w-[950px]">
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[550px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21.469px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[112.158px]">IC Design Lead</p>
              </div>
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[98.997px]">Management</p>
              </div>
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[86.17px]">2023-2026</p>
              </div>
            </div>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[50px] tracking-[15px] uppercase w-[547px]">Monétisation dans la santé</p>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[28px] w-[459.885px]">{`3 ans d'itérations entre business, design et régulation`}</p>
          </div>
          <div className="bg-white relative rounded-[30px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
            <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] items-start justify-between leading-[normal] not-italic px-[40px] py-[32px] relative text-[#40295b] text-center w-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
                <p className="min-w-full relative shrink-0 text-[32px] w-[min-content]">1/3</p>
                <p className="relative shrink-0 text-[16px] w-[132px]">du revenu repose sur les frais de service</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
                <p className="relative shrink-0 text-[32px] w-full">87%</p>
                <p className="relative shrink-0 text-[16px] w-full">{`D'acceptation des frais de service`}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
                <p className="relative shrink-0 text-[32px] w-full">5</p>
                <p className="relative shrink-0 text-[16px] w-full">Pivots autour de la monétisation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e5e7eb] content-stretch flex flex-col h-[479px] items-center justify-center pl-[126.423px] pr-[126.429px] relative rounded-[16px] shrink-0 w-[360px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#9ca3af] text-[15px] text-center w-[228.878px]">Illustration monétisation</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[110px] items-start not-italic relative shrink-0 w-[800px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-1 content-stretch flex flex-col gap-[8px] items-start ml-0 mt-0 relative row-1 w-[706px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Contexte</p>
            <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">À propos de Qare ?</p>
          </div>
          <div className="col-1 content-stretch flex font-['Aeonik:Regular',sans-serif] gap-[52px] items-start leading-[30px] ml-0 mt-[134px] relative row-1 text-[#40295b] text-[24px] w-[800px]">
            <p className="flex-[1_0_0] min-h-px min-w-px relative">{`Qare est une plateforme française de téléconsultation médicale qui permet aux patients de consulter des médecins généralistes et spécialistes 24h/24 et 7j/7, depuis chez eux. `}</p>
            <p className="flex-[1_0_0] min-h-px min-w-px relative">Avec plus de 2 500 médecins et 15 000 consultations quotidiennes, Qare est un acteur clé de la santé numérique en France.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 text-[#40295b]">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[36px] w-[800px]">La problèmatique</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[24px] w-[800px] whitespace-pre-wrap">
            {`La monétisation dans la santé digitale est un exercice d'équilibriste. D'un côté, un modèle économique à protéger (les frais de service représentent un tiers du chiffre d'affaires de Qare). `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`De l'autre, un régulateur qui remet en cause l'existence même de ces frais. Entre les deux, des patients qui ne sont pas sensibles au prix mais à la valeur perçue du service. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Pendant 3 ans, j'ai piloté la discovery et le design de chaque pivot de monétisation chez Qare, en utilisant des méthodes quantitatives (Van Westendorp, user tests asynchrones à grande échelle) pour transformer une contrainte réglementaire en opportunité produit. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Le constat : quand la discovery précède la décision, ça marche. Quand elle est absente, ça échoue. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            C’est cette histoire que je vous propose de développer ici
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[71px] items-start relative shrink-0" data-name="ScaledSection">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="MonetisationPage">
          <div className="h-[30.619px] relative shrink-0 w-[808px]" data-name="Heading 4">
            <p className="absolute font-['Aeonik:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#7a63ca] text-[24px] top-[-1.02px] tracking-[4.8px] uppercase whitespace-nowrap">Historique</p>
          </div>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#16121b] text-[36px] whitespace-nowrap">5 pivots en 3 ans</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] w-[594px]">{`La monétisation chez Qare n'a jamais été un projet unique. C'est une série de pivots stratégiques, chacun porté par la discovery.`}</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="MonetisationPage">
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container additionalClassNames="size-[13.608px]" />
              <div className="bg-[#40295b] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container5>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">Janvier 2023</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#16121b] text-[24px] w-full">Lancement des frais de service</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">Qare facture 4€ de frais de service à chaque consultation. Je mène une première étude de sensibilité au prix (Van Westendorp) qui confirme que les patients ne sont pas sensibles à ce montant. Aucun impact sur la conversion.</p>
              <div className="bg-[#e5e7eb] h-[386px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pl-[126.423px] pr-[126.429px] relative size-full">
                    <Paragraph additionalClassNames="w-[294.887px]">
                      <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[22.5px] left-[147.5px] not-italic text-[#9ca3af] text-[15px] text-center top-[-0.3px] whitespace-nowrap">Image: Van Westendorp chart (optimal price curves)</p>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container additionalClassNames="h-[13.609px] w-[13.608px]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-[2px]" data-name="Container">
                <div aria-hidden="true" className="absolute border border-[#40295b] border-solid inset-0 pointer-events-none" />
              </div>
            </Container4>
            <Container5>
              <ParagraphText text="Février 2024" />
              <div className="h-[25.516px] relative shrink-0 w-full" data-name="Heading 3">
                <p className="absolute font-['Aeonik:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#16121b] text-[24px] top-[-0.72px] whitespace-nowrap">Le décret change les règles</p>
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">Un décret impose que les frais de téléconsultation deviennent optionnels. Objectif : couvrir 80% des pertes. Je lance une discovery complète : questionnaires quanti (500-800 patients par service), Van Westendorp, analyse Contentsquare, benchmark hors santé, user tests asynchrones.</p>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container additionalClassNames="size-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container5>
              <ParagraphText text="Mai 2024" />
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#16121b] text-[24px] w-full">Qare+ mis en pause</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">{`Le projet d'abonnement premium est abandonné avant le lancement pour des raisons logistiques et financières. C'est le seul pivot où aucune discovery n'a été menée en amont, et c'est un échec.`}</p>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container1 additionalClassNames="size-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container5>
              <ParagraphText text="Août 2024" />
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#16121b] text-[24px] w-full">Passage aux frais optionnels en bundle</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">{`Les frais deviennent optionnels sous forme de bundle (consultation <3h + assurance annulation + tiers payant). 87% d'application, aucun impact sur la conversion. L'étude Van Westendorp initiale a directement alimenté le pricing du bundle.`}</p>
              <div className="bg-[#e5e7eb] h-[352px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pl-[139.181px] pr-[139.187px] relative size-full">
                    <Paragraph additionalClassNames="w-[269.371px]">
                      <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[22.5px] left-[135.5px] not-italic text-[#9ca3af] text-[15px] text-center top-[-0.3px] whitespace-nowrap">Image: Bar chart bundle acceptance rate (90%)</p>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container1 additionalClassNames="h-[13.609px] w-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container5>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">Juin 2025</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#16121b] text-[24px] w-full">{`Lancement des programmes Shape & Mind`}</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full">Premier abonnement chez Qare. Les insights de la discovery sur la sensibilité au prix et la valeur perçue ont été réutilisés pour le pricing des programmes chroniques.</p>
              <div className="bg-[#e5e7eb] h-[398px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center pl-[123.871px] pr-[123.878px] relative size-full">
                    <Paragraph additionalClassNames="w-[299.99px]">
                      <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[22.5px] left-[150.5px] not-italic text-[#9ca3af] text-[15px] text-center top-[-0.3px] whitespace-nowrap">{`Image: Shape & Mind program interface screenshots`}</p>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container additionalClassNames="h-[13.609px] w-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start not-italic pb-[56px] relative w-full whitespace-nowrap">
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase">Juillet 2025</p>
                <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#16121b] text-[24px]">Le régulateur conteste</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#40295b] text-[20px]">Les régulateurs remettent en question le caractère optionnel des services payants.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container1 additionalClassNames="size-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container5>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase whitespace-nowrap">Août 2025</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#16121b] text-[24px] whitespace-nowrap">Pivot coupe-fil</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[20px] w-[min-content]">{`Qare simplifie l'offre : un coupe-fil (<6h) affiché dès le début du parcours.`}</p>
              <div className="bg-[#e5e7eb] h-[562px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[114.828px] relative size-full">
                    <Paragraph additionalClassNames="w-[318.084px]">
                      <p className="-translate-x-1/2 absolute font-['Aeonik:Regular',sans-serif] leading-[22.5px] left-[159px] not-italic text-[#9ca3af] text-[15px] text-center top-[-0.3px] whitespace-nowrap">Image: Practitioner search page with fast-track indicator</p>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Container5>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="self-stretch">
              <Container additionalClassNames="size-[13.608px]" />
              <div className="bg-[#3c3162] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />
            </Container4>
            <Container6>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">Mars 2026</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#16121b] text-[24px] w-full">Mise en demeure</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#40295b] text-[20px] w-full">Les régulateurs exigent le retrait des frais coupe-fil.</p>
            </Container6>
          </div>
          <div className="content-stretch flex gap-[27.217px] items-start relative shrink-0 w-full" data-name="TimelineEvent">
            <Container4 additionalClassNames="h-[140.337px]">
              <Container1 additionalClassNames="size-[13.608px]" />
            </Container4>
            <Container6>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[20px] tracking-[4px] uppercase w-full">Août 2026</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#16121b] text-[24px] w-full">Pivot assurance annulation</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#40295b] text-[20px] w-full">{`Nouveau pivot vers l'assurance annulation. 50-60% d'application des frais, sans impact sur la conversion.`}</p>
            </Container6>
          </div>
        </div>
      </div>
      <div className="bg-[#f2effa] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[436px] py-[56px] relative w-full">
          <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 w-[800px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
              <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Méthodes</p>
              <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">Les outils de discovery qui ont fait la différence</p>
            </div>
            <div className="content-stretch flex gap-[40px] h-[302px] items-center relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                  <p className="leading-[normal] relative shrink-0 text-[28px] w-full">Van Westendorp</p>
                  <p className="leading-[28px] relative shrink-0 text-[20px] w-full">4 questions (trop cher, pas assez cher, cher, bonne affaire) pour déterminer la zone de prix optimale. Utilisé dès janvier 2023 sur les frais de service, puis réutilisé pour chaque nouveau modèle de pricing.</p>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                  <p className="leading-[normal] relative shrink-0 text-[28px] w-full">Effet Zeigarnik</p>
                  <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`Ce biais cognitif nous a guidé pour placer le choix de pricing au bon moment du funnel : après la recherche et l'inscription, quand l'engagement est déjà fort.`}</p>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] h-full items-start min-h-px min-w-px not-italic relative rounded-[30px] text-[#40295b]">
                  <p className="leading-[normal] relative shrink-0 text-[28px] w-full">User tests asynchrones</p>
                  <p className="leading-[28px] relative shrink-0 text-[20px] w-full">{`~60 patients par option, testés en parallèle. Permet d'obtenir un volume statistique significatif rapidement, et de comparer objectivement les parcours.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[800px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[706px]" data-name="Container">
          <div className="content-stretch flex h-[29px] items-start relative shrink-0 w-[378.508px]" data-name="Heading 4">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">Learnings</p>
          </div>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[36px] w-[min-content]">Les leçons clés de ce projet</p>
        </div>
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
          <Container7>
            <Paragraph1>Ce qui a fonctionné</Paragraph1>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
              <Container2>
                <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                  <Icon />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">La discovery comme moteur business</p>
              </Container2>
              <Container2>
                <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                  <Icon />
                </div>
                <div className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">
                  <p className="mb-0">La valeur perçue compte plus</p>
                  <p>que le prix</p>
                </div>
              </Container2>
              <Container2>
                <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                  <Icon />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Savoir pivoter rapidement lorsque le contexte réglementaire change</p>
              </Container2>
              <Container2>
                <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                  <Icon />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Travailler à l'intersection du design et du juridique dès le premier jour`}</p>
              </Container2>
              <Container2>
                <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                  <Icon />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Inclure les équipes produits et Technique dans les discussion avec les régulateurs</p>
              </Container2>
            </div>
          </Container7>
          <Container7>
            <Paragraph1>{`Ce qui n'a pas fonctionné`}</Paragraph1>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
              <Container3>
                <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                  <Icon1 />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`L'absence de discovery mène à l'échec, Qare+ en est la preuve`}</p>
              </Container3>
              <Container3>
                <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                  <Icon1 />
                </div>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Le design seul n'est pas suffisant face à la réglementation`}</p>
              </Container3>
              <Container3>
                <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                  <Icon1 />
                </div>
                <div className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">
                  <p className="mb-0">La conformité réglementaire</p>
                  <p>est une cible mouvante</p>
                </div>
              </Container3>
            </div>
          </Container7>
        </div>
      </div>
      <div className="absolute h-[281px] left-[738.67px] top-[516.5px] w-[403px]" data-name="Component 3">
        <div className="absolute flex h-[57.62px] items-center justify-center left-[97px] top-[107px] w-[57.026px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-42.82deg]">
            <div className="h-[46.084px] relative w-[35.043px]" data-name="Mouse">
              <div className="absolute inset-[3.29%_-5.11%_-3.38%_-5.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6236 46.128">
                  <path d={svgPaths.p27d15600} fill="var(--fill-0, #7A63CA)" id="Mouse" stroke="var(--stroke-0, white)" strokeWidth="4.20391" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}