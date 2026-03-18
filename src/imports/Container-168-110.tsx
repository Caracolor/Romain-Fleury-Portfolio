import svgPaths from "./svg-b6nbpwykbe";

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

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#feeff2] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-4 border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
        <path clipRule="evenodd" d={svgPaths.p406e100} fill="var(--fill-0, #A4E0C6)" fillRule="evenodd" id="vector" />
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[706px]" data-name="Container">
        <div className="content-stretch flex h-[29px] items-start relative shrink-0 w-[378.508px]" data-name="Heading 4">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">Learnings</p>
        </div>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[36px] w-[min-content]">Les leçons clés de ce projet</p>
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
        <Container3>
          <Paragraph>Ce qui a fonctionné</Paragraph>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
            <Container1>
              <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                <Icon />
              </div>
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Le qualitatif a révélé des choses que la data seule ne montrait pas</p>
            </Container1>
            <Container1>
              <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                <Icon />
              </div>
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Comprendre le workflow réel du praticien, pas celui que la data suggérait</p>
            </Container1>
            <Container1>
              <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                <Icon />
              </div>
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Le concept d'interface contextuelle, qui recentre le praticien sur l'échange médical`}</p>
            </Container1>
            <Container1>
              <div className="content-stretch flex flex-col h-[7.922px] items-start relative shrink-0 w-[10.422px]" data-name="Container">
                <Icon />
              </div>
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Changer le workflow praticien avec une modification d’enchainement de bouton</p>
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
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">Ne pas s’occuper de la dette de l’expérience design sur la partie particien</p>
            </Container2>
            <Container2>
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[10px]" data-name="Container">
                <Icon1 />
              </div>
              <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#40295b] text-[20px]">{`Le LLM n'est pas toujours la bonne réponse, des automatisations classiques auraient suffi`}</p>
            </Container2>
          </div>
        </Container3>
      </div>
    </div>
  );
}