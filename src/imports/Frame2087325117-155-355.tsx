import imgCaptureDecran20260311A1646111 from "@/assets/3b92b510279dff858eeeea280c7b9c830671086f.webp";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative w-full">{children}</div>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{`L'insight décisif`}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">Comprendre avant de redesigner</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-full">{`Une discovery rigoureuse, menée par Léa et Titouan, que j'ai cadrée en amont et challengée (lorsque nécessaire) pour garantir la pertinence des insights.`}</p>
      </div>
      <div className="aspect-[2424/768] relative shrink-0 w-full" data-name="Capture d’écran 2026-03-11 à 16.46.11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaptureDecran20260311A1646111} />
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
        <div className="bg-[#f2effa] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch" data-name="Container">
          <div className="content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[36px] py-[32px] relative size-full">
            <ParagraphText text="Plan de discovery" />
            <Wrapper>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="leading-[28px]">{`Revue de la littérature médicale et recommandations `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">HAS</span>
                  <span className="leading-[28px]">{` (Haute Autorité de Santé)`}</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[28px] min-h-px min-w-px relative text-[#40295b] text-[20px]">{`Session de travail avec l'équipe médicale (Dr. Melot)`}</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="leading-[28px]">{`Analyse data via `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">Metabase</span>
                  <span className="leading-[28px]">{` & `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">Contentsquare</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">5 fausses téléconsultations</span>
                  <span className="leading-[28px]">{` pour la gêne urinaire`}</span>
                </p>
              </div>
            </Wrapper>
            <div className="absolute h-[154.895px] left-[12.66px] rounded-[15px] top-[250.58px] w-[431.454px]">
              <div aria-hidden="true" className="absolute border-4 border-[#3c3162] border-dashed inset-0 pointer-events-none rounded-[17px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#e4f6ee] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
            <ParagraphText text="Les enseignements clés" />
            <Wrapper>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="leading-[28px]">La gêne urinaire est facile à diagnostiquer, la cystite est la cause la plus fréquente (</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">65% des femmes</span>
                  <span className="leading-[28px]">)</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="leading-[28px]">{`La consultation moyenne dure `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">{`8 minutes `}</span>
                  <span className="leading-[28px]">(5 min médecin généraliste, 2 min gynéco)</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="leading-[28px]">{`Seulement `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">4 questions clés</span>
                  <span className="leading-[28px]">{` à l'interrogatoire et `}</span>
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">2 diagnostics différentiels</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#7a63ca] text-[16px] tracking-[-0.3125px] whitespace-nowrap">→</p>
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#40295b] text-[0px] text-[20px]">
                  <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">{`99% des téléconsultations `}</span>
                  <span className="leading-[28px]">aboutissent à une prescription, 6% on des arrêts de travail</span>
                </p>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}