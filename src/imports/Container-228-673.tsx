export default function Container() {
  return (
    <div className="bg-[#f2effa] content-stretch flex flex-col items-start p-[32px] relative rounded-[30px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#40295b] text-[20px] w-full whitespace-pre-wrap">
          {`Cette feature semble triviale. `}
          <br aria-hidden="true" />
          {`Pourtant, en 4 ans chez Qare, elle n'avait jamais été implémentée, la raison :`}
        </p>
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative w-full">
            <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[4px]" data-name="Container" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start py-[4px] relative w-full">
                <div className="h-[30px] relative shrink-0 w-full" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute content-stretch flex gap-[10px] items-center left-0 not-italic top-0">
                      <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[20px] whitespace-nowrap">{`Biais d'ancrage`}</p>
                      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] h-[30px] justify-center leading-[0] relative shrink-0 text-[#3c3162] text-[12px] w-[79px]">
                        <p className="leading-[normal]">Biais cognitif</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-full">{`Reproduire dans un environnement numérique les codes du monde physique, même lorsqu'ils n'ont plus lieu d'être. Ici : supposer que le patient reste devant son écran comme dans une salle d'attente physique. Alors qu'il vit sa vie, navigue, s'éloigne.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}