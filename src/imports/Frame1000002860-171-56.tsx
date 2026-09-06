import { useCallback, useEffect, useRef } from "react";
import chronicVideoUrl from "@/assets/chronic-thumbnail.mp4";
import chronicPosterUrl from "@/assets/chronic-thumbnail-poster.webp";
import tempsMedicalVideoUrl from "@/assets/temps-medical-thumbnail.mp4";
import tempsMedicalPosterUrl from "@/assets/temps-medical-thumbnail-poster.webp";
import monetisationVideoUrl from "@/assets/monetisation-thumbnail.mp4";
import monetisationPosterUrl from "@/assets/monetisation-thumbnail-poster.webp";
import brandedCallVideoUrl from "@/assets/branded-call-thumbnail.mp4";
import brandedCallPosterUrl from "@/assets/branded-call-thumbnail-poster.webp";
import { useTranslation } from "../app/components/LanguageContext";

/**
 * Miniature animée. La vidéo se fige toujours sur `restTime` (en secondes) :
 * - à la première apparition à l'écran, elle se joue depuis le début ;
 * - au survol, elle repart et boucle une fois pour revenir se figer au même
 *   endroit.
 * Elle n'est téléchargée qu'à l'approche du viewport.
 */
function ThumbnailVideo({
  src,
  poster,
  restTime,
  playRef,
}: {
  src: string;
  poster: string;
  restTime: number;
  playRef: React.MutableRefObject<(() => void) | null>;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const running = useRef(false);
  const wrapped = useRef(false);
  const previous = useRef(0);
  const autoPlayed = useRef(false);

  /** Fige la vidéo dès qu'elle atteint son image d'arrêt. */
  const stopAtRest = useCallback(() => {
    const el = ref.current;
    if (!el || !running.current) return;
    const t = el.currentTime;
    if (t < previous.current - 0.1) wrapped.current = true; // repassée par 0
    previous.current = t;
    if (wrapped.current && t >= restTime) {
      el.pause();
      el.loop = false;
      el.currentTime = restTime;
      running.current = false;
    }
  }, [restTime]);

  const playToRest = useCallback((fromStart: boolean) => {
    const el = ref.current;
    if (!el || running.current) return;

    if (fromStart) el.currentTime = 0;
    // Depuis l'image d'arrêt, il faut un tour complet avant de s'y refiger.
    wrapped.current = fromStart || el.currentTime < restTime - 0.05;
    previous.current = el.currentTime;
    running.current = true;
    el.loop = true;
    el.play().catch(() => {
      running.current = false;
      el.loop = false;
    });
  }, [restTime]);

  useEffect(() => {
    playRef.current = () => playToRest(false);
  }, [playRef, playToRest]);

  // Surveillance double : requestAnimationFrame pour la précision quand l'onglet
  // est visible, et l'événement `timeupdate` — qui, lui, continue en arrière-plan —
  // pour que la vidéo se fige bien même si l'utilisateur change d'onglet.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id = requestAnimationFrame(function tick() {
      stopAtRest();
      id = requestAnimationFrame(tick);
    });
    el.addEventListener("timeupdate", stopAtRest);
    return () => {
      cancelAnimationFrame(id);
      el.removeEventListener("timeupdate", stopAtRest);
    };
  }, [stopAtRest]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;

    // Tant que la vidéo n'a pas joué, on affiche son image d'arrêt.
    const onLoaded = () => {
      if (!autoPlayed.current) el.currentTime = restTime;
    };
    el.addEventListener("loadeddata", onLoaded);

    // Téléchargement à l'approche…
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.preload = "auto";
        el.load();
        loader.disconnect();
      },
      { rootMargin: "400px" }
    );
    loader.observe(el);

    // …puis lecture unique lorsque la carte est réellement visible.
    const starter = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayed.current) return;
        autoPlayed.current = true;
        playToRest(true);
        starter.disconnect();
      },
      { threshold: 0.3 }
    );
    starter.observe(el);

    return () => {
      el.removeEventListener("loadeddata", onLoaded);
      loader.disconnect();
      starter.disconnect();
    };
  }, [playToRest, restTime]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="none"
      poster={poster}
      className="absolute max-w-none object-cover opacity-95 rounded-[30px] size-full"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

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
              <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
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
                <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
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
                <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
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
                  <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
                  <ThumbnailVideo src={brandedCallVideoUrl} poster={brandedCallPosterUrl} restTime={2.269} playRef={brandedCallPlay} />
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
              <div className="aspect-[1140/982] relative rounded-[30px] shrink-0 w-full bg-[#231633] flex items-center justify-center">
                <p className="font-['Aeonik:Bold',sans-serif] text-[#afa2df] text-[24px] tracking-[5px] uppercase">
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