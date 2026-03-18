import svgPaths from "./svg-161w5b2d80";
import imgRectangle from "figma:asset/f776a534aef1cb13cd22e25a8a1b6f4a69a03846.png";

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[21.5px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Aeonik:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b] text-[18px]">{children}</p>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#feeff2] h-[96px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6fcf9] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#a4e0c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[0.55%_-8.5%_-0.55%_8.5%]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
          <path clipRule="evenodd" d={svgPaths.p7bd3900} fill="var(--fill-0, #F9A2AF)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[7.922px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[0.69%_0.01%_-0.69%_-0.01%]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
          <path clipRule="evenodd" d={svgPaths.p406e100} fill="var(--fill-0, #A4E0C6)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative size-full" data-name="Container">
      <Container3>
        <Paragraph>Ce qui a fonctionné</Paragraph>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <Container1>
            <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
              <Icon />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Inscription en ligne → pic d'inscriptions + réduction du goulot opérationnel`}</p>
          </Container1>
          <Container1>
            <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
              <Icon />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Ciblage déserts médicaux + message tiers-payant = combo gagnant</p>
          </Container1>
          <Container1>
            <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
              <Icon />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Promesse autour de l'équipe pluridisciplinaire spécialisée`}</p>
          </Container1>
          <Container1>
            <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
              <Icon />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Accompagnement constant : améliore acquisition ET rétention</p>
          </Container1>
          <Container1>
            <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
              <Icon />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Volume consultations en croissance constante, preuve d'engagement réel`}</p>
          </Container1>
        </div>
      </Container3>
      <Container3>
        <Paragraph>{`Ce qui n'a pas fonctionné`}</Paragraph>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <Container2>
            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
              <Icon1 />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Mentionner les GLP-1 pour l'acquisition (sans impact)`}</p>
          </Container2>
          <Container2>
            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
              <Icon1 />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Le contenu non personnalisé pour créer de la rétention</p>
          </Container2>
          <Container2>
            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
              <Icon1 />
            </div>
            <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Le chat actuel, non adapté aux besoins produit sur la durée</p>
          </Container2>
        </div>
      </Container3>
      <div className="absolute flex h-[337.737px] items-center justify-center left-[338.13px] top-[373.5px] w-[319.746px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.3deg]">
          <div className="h-[336.085px] relative w-[318px]" data-name="Rectangle">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}