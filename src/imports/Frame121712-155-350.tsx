import imgOrganisgram1 from "figma:asset/fb28a3fd7c23dbf855f8316f9a578b7e5395c3cd.png";
import imgPicture from "figma:asset/d056db09b2a2d24aa59fd3a25ea1adb45c65452e.png";
import imgPicture1 from "figma:asset/ccffe314c01aeb4af4ddf2ea17f67a0f97538d27.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[701px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-[min-content]">Mon rôle</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] min-w-full relative shrink-0 text-[#40295b] text-[36px] w-[min-content]">Encadrer, challenger, débloquer</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#40295b] text-[24px] w-[436.526px]">Mon rôle est de donner aux designers les moyens de réussir.</p>
      </div>
      <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex flex-col gap-[24px] h-full items-end justify-center relative shrink-0 w-[420px]">
            <div className="bg-[#f6fcf9] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[30px] w-[420px]">
              <div className="h-[480.293px] relative shrink-0 w-[420px]" data-name="Organisgram 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[71.04%] left-[0.24%] max-w-none top-[14.06%] w-[100.03%]" src={imgOrganisgram1} />
                </div>
              </div>
            </div>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#16121b] text-[16px] text-center w-[min-content]">Organigram de l’équipe design</p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
              <p className="relative shrink-0 text-[32px] w-full">Cadrage de la discovery</p>
              <p className="relative shrink-0 text-[20px] w-full">{`Poser les objectifs, le scope et accompagner sur méthode. Challenger la profondeur de recherche, l'ordre des étapes, le rapport effort attendu vs. valeur produite.`}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
              <p className="relative shrink-0 text-[32px] w-full">Challenge continu du design</p>
              <p className="relative shrink-0 text-[20px] w-full">{`Questionner les décisions via des alternatives et des mises en situation. Promouvoir un concept design de layout “Sans les mains” pour pousser vers moins d'interaction et plus d'automatisation.`}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#d7d0ef] rounded-[10px] self-stretch shrink-0 w-[4px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[#40295b]">
              <p className="relative shrink-0 text-[32px] w-full">Connexion stratégique</p>
              <p className="relative shrink-0 text-[20px] w-full">{`Relier chaque décision design aux objectifs business (+40% temps médical) et médicaux (qualité diagnostique). Présentation de l’avancement et alignement avec les stakeholders P&T.`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[27px] items-center justify-center py-[40px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[340px]">
          <div className="relative rounded-[1000px] shrink-0 size-[72px]" data-name="⚙️Unpublished/PictureCover">
            <Wrapper>
              <div className="relative shrink-0 size-[70.875px]" data-name="Picture">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPicture} />
              </div>
            </Wrapper>
            <div aria-hidden="true" className="absolute border-[3.375px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#24466c] text-[0px] text-[20px] w-[223.456px] whitespace-pre-wrap">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">{`Léa `}</p>
            <p>Product Designer asign to the impact team</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[340px]">
          <div className="relative rounded-[1000px] shrink-0 size-[72px]" data-name="⚙️Unpublished/PictureCover">
            <Wrapper>
              <div className="relative shrink-0 size-[71.633px]" data-name="Picture">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPicture1} />
              </div>
            </Wrapper>
            <div aria-hidden="true" className="absolute border-[3.411px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#24466c] text-[0px] text-[20px] w-[245.12px]">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">Titouan</p>
            <p>Product Designer in charge of the Design System</p>
          </div>
        </div>
      </div>
    </div>
  );
}