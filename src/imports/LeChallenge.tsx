function ContentCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start not-italic relative text-[#40295b] w-full">{children}</div>
    </div>
  );
}

export default function LeChallenge() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative size-full" data-name="Le challenge">
      <div className="content-stretch flex flex-col gap-[8px] h-[89px] items-start not-italic relative shrink-0 w-[706px] whitespace-nowrap" data-name="Container">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase">LE CHALLENGE</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px]">Des patients disponibles mais pas alertés</p>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] w-full whitespace-pre-wrap">
          {`Cette feature semble triviale. `}
          <br aria-hidden="true" />
          {`Pourtant, en 4 ans chez Qare, elle n'avait jamais été implémentée, la raison :`}
        </p>
        <div className="bg-[#f2effa] relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-full" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
            <div className="bg-[#d7d0ef] relative rounded-[20px] self-stretch shrink-0 w-[4px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
            </div>
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pr-[24px] py-[16px] relative w-full">
                <div className="relative shrink-0 w-full" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="content-stretch flex gap-[10px] items-end not-italic relative shrink-0">
                      <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#40295b] text-[20px] whitespace-nowrap">{`Biais d'ancrage`}</p>
                      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[24.59px] justify-center leading-[0] relative shrink-0 text-[#3c3162] text-[12px] w-[79px]">
                        <p className="leading-[normal]">Biais cognitif</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[666.467px]">{`Reproduire dans un environnement numérique les codes du monde physique, même lorsqu'ils n'ont plus lieu d'être. Ici : supposer que le patient reste devant son écran comme dans une salle d'attente physique. Alors qu'il vit sa vie, navigue, s'éloigne.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]" data-name="ContentCard">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
            <div className="h-[29px] relative shrink-0 w-[240px]" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#40295b] text-[24px]">Le problème</p>
              </div>
            </div>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#40295b] text-[0px] text-[20px] w-[min-content] whitespace-pre-wrap">
              <span className="leading-[28px]">
                {`Les patients en attente d'une téléconsultation ne sont pas alertés quand leur consultation démarre. Ils naviguent sur une autre app, s'éloignent de leur téléphone, ou laissent l'écran se mettre en veille.`}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
              <span className="font-['Aeonik:Bold',sans-serif] leading-[28px]">Résultat :</span>
              <span className="leading-[28px]">{` 146K no-shows par an, 8,4M de manque à gagner, et une insatisfaction majeure chez les praticiens.`}</span>
            </p>
          </div>
        </div>
        <ContentCard>
          <p className="h-[29px] leading-[30px] relative shrink-0 text-[24px] w-[240px]">Les opportunités</p>
          <p className="leading-[28px] min-w-full relative shrink-0 text-[20px] w-[min-content] whitespace-pre-wrap">
            {`Le branded call est un pattern courant hors santé (livraison, transport, services). Seul Livi parmi nos concurrents le propose. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`L'appel téléphonique est la seule alerte impossible à ignorer pour un patient qui n'est plus sur l'app.`}
          </p>
        </ContentCard>
        <ContentCard>
          <p className="h-[29px] leading-[30px] relative shrink-0 text-[24px] w-[240px]">La contrainte</p>
          <p className="leading-[28px] min-w-full relative shrink-0 text-[20px] w-[min-content]">{`Les alternatives moins coûteuses (push notifications, SMS) ont déjà été explorées sans résultat suffisant. Le branded call nécessite un développement natif sur iOS et Android (pas de SDK Vonage React Native), avec des contraintes d'affichage différentes selon l'OS.`}</p>
        </ContentCard>
      </div>
    </div>
  );
}