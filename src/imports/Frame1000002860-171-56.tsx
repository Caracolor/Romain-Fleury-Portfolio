import { useRef } from "react";
import { ThumbnailVideo } from "../app/components/ThumbnailVideo";
import chronicVideoUrl from "@/assets/chronic-thumbnail.mp4";
import chronicPosterUrl from "@/assets/chronic-thumbnail-poster.webp";
import tempsMedicalVideoUrl from "@/assets/temps-medical-thumbnail.mp4";
import tempsMedicalPosterUrl from "@/assets/temps-medical-thumbnail-poster.webp";
import monetisationVideoUrl from "@/assets/monetisation-thumbnail.mp4";
import monetisationPosterUrl from "@/assets/monetisation-thumbnail-poster.webp";
import brandedCallVideoUrl from "@/assets/branded-call-thumbnail.mp4";
import brandedCallPosterUrl from "@/assets/branded-call-thumbnail-poster.webp";
import comingSoonBgUrl from "@/assets/coming-soon-bg.webp";
import { useTranslation } from "../app/components/LanguageContext";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end p-[32px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#40295b] text-[30px] w-full">
        {text1}
      </p>
    </div>
  );
}

function HelperChronicPrograms() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">{"IC design Lead"}</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">{"Business Impact"}</p>
      </div>
    </Wrapper>
  );
}

function HelperTempsMedical() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[89.729px]">Design Lead</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[182.313px]">2 Designers, 1 PM, 4 Devs</p>
      </div>
    </Wrapper>
  );
}

function HelperMonetisation() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">{"IC design Lead"}</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">{"Business Impact"}</p>
      </div>
    </Wrapper>
  );
}

type FrameProps = {
  onQareClick?: () => void;
  onTempsMedicalClick?: () => void;
  onMonetisationClick?: () => void;
  onBrandedCallClick?: () => void;
};

export default function Frame({ onQareClick, onTempsMedicalClick, onMonetisationClick, onBrandedCallClick }: FrameProps) {
  const proj = useTranslation("projects_section");
  const items = proj.items;
  const chronicPlay = useRef<(() => void) | null>(null);
  const tempsMedicalPlay = useRef<(() => void) | null>(null);
  const monetisationPlay = useRef<(() => void) | null>(null);
  const brandedCallPlay = useRef<(() => void) | null>(null);

  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] tracking-[15px] uppercase w-[547px] text-[40px]">{proj.section_title}</p>
        <div 
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[946px] cursor-pointer group"
          onClick={onQareClick}
          role={onQareClick ? "button" : undefined}
        >
          <div
            className="aspect-[1158/716] relative rounded-[30px] shrink-0 w-full"
            onMouseEnter={() => chronicPlay.current?.()}
          >
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-[#e4e0f4] inset-0 rounded-[30px]" />
              <ThumbnailVideo src={chronicVideoUrl} poster={chronicPosterUrl} restTime={6.474} playRef={chronicPlay} />
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <HelperChronicPrograms />
            </div>
            <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px] transition-colors duration-200 group-hover:border-[#40295b]" />
          </div>
          <Helper1 text={items[0].company} text1={items[0].title} />
          <p className="font-['Aeonik:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[18px] w-full whitespace-pre-wrap">
            <span className="leading-[26px]">{`${items[0].description}  `}</span>
            <span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{`\u2192 ${items[0].result}`}</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] h-[568px] items-center relative shrink-0 w-full">
        <div 
          className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer group"
          onClick={onTempsMedicalClick}
          role={onTempsMedicalClick ? "button" : undefined}
        >
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
            <div
              className="aspect-[1140/982] relative rounded-[30px] shrink-0 w-full"
              onMouseEnter={() => tempsMedicalPlay.current?.()}
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                <div className="absolute bg-[#e4e0f4] inset-0 rounded-[30px]" />
                <ThumbnailVideo src={tempsMedicalVideoUrl} poster={tempsMedicalPosterUrl} restTime={1.759} playRef={tempsMedicalPlay} />
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <HelperTempsMedical />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#E4E0F4] border-solid inset-0 pointer-events-none rounded-[30px] transition-colors duration-200 group-hover:border-[#40295b]" />
            </div>
            <Helper1 text={items[1].company} text1={items[1].title} />
            <p className="font-['Aeonik:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[18px] w-full">
              <span className="leading-[26px]">{`${items[1].description} `}</span>
              <span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{`\u2192 ${items[1].result}`}</span>
            </p>
          </div>
        </div>
        <div 
          className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer group"
          onClick={onMonetisationClick}
          role={onMonetisationClick ? "button" : undefined}
        >
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
            <div
              className="aspect-[1140/982] relative rounded-[30px] shrink-0 w-full"
              onMouseEnter={() => monetisationPlay.current?.()}
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                <div className="absolute bg-[#e4e0f4] inset-0 rounded-[30px]" />
                <ThumbnailVideo src={monetisationVideoUrl} poster={monetisationPosterUrl} restTime={1.163} playRef={monetisationPlay} />
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <HelperMonetisation />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px] transition-colors duration-200 group-hover:border-[#40295b]" />
            </div>
            <Helper1 text={items[2].company} text1={items[2].title} />
            <p className="font-['Aeonik:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[18px] w-full whitespace-pre-wrap">
              <span className="leading-[26px]">{`${items[2].description}  `}</span>
              <span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{`\u2192 `}</span>
              <span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{items[2].result}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Project 4 — Branded Call (same half-row layout as Monetisation) */}
      {items[3] && (
        <div className="content-stretch flex gap-[40px] h-[568px] items-center relative shrink-0 w-full">
          <div 
            className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer group"
            onClick={onBrandedCallClick}
            role={onBrandedCallClick ? "button" : undefined}
          >
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
              <div
                className="aspect-[1140/982] relative rounded-[30px] shrink-0 w-full"
                onMouseEnter={() => brandedCallPlay.current?.()}
              >
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                  <div className="absolute bg-[#e4e0f4] inset-0 rounded-[30px]" />
                  <ThumbnailVideo src={brandedCallVideoUrl} poster={brandedCallPosterUrl} restTime={2.993} playRef={brandedCallPlay} />
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <Wrapper>
                    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                      <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px]">{items[3].tag}</p>
                    </div>
                    {items[3].tag2 && (
                      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px]">{items[3].tag2}</p>
                      </div>
                    )}
                  </Wrapper>
                </div>
                <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px] transition-colors duration-200 group-hover:border-[#40295b]" />
              </div>
              <Helper1 text={items[3].company} text1={items[3].title} />
              <p className="font-['Aeonik:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[18px] w-full whitespace-pre-wrap"><span className="leading-[26px]">{`${items[3].description}  `}</span><span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{`\u2192 ${items[3].result}`}</span></p>
            </div>
          </div>
          {/* Project 5 — Design System (Coming Soon) */}
          {items[4] ? (
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch opacity-50 cursor-default">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
              <div className="aspect-[1140/982] relative rounded-[30px] shrink-0 w-full bg-white flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 rounded-[30px]"
                  style={{ backgroundImage: `url(${comingSoonBgUrl})` }}
                />
                <p className="relative font-['Aeonik:Bold',sans-serif] text-black text-[24px] tracking-[5px] uppercase">
                  {proj.coming_soon_label}
                </p>
                <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
              </div>
              <Helper1 text={items[4].company} text1={items[4].title} />
              <p className="font-['Aeonik:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[18px] w-full whitespace-pre-wrap">
                <span className="leading-[26px]">{`${items[4].description}  `}</span>
                <span className="font-['Aeonik:Regular',sans-serif] leading-[26px]">{`\u2192 ${items[4].result}`}</span>
              </p>
              
            </div>
          </div>
          ) : (
          <div className="flex-[1_0_0] min-h-px min-w-px" />
          )}
        </div>
      )}

    </div>
  );
}