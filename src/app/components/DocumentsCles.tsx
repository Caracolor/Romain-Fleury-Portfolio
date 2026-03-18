import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import imgRectangle2065 from "@/assets/29b08f7bb13f6dda67c4bd717417f76b77a6730a.png";
import imgRectangle2066 from "@/assets/5fbfa8664a8e7235ddf4eecd1681a7eea0c2de5a.png";
import imgRectangle2067 from "@/assets/0340fd21e644f3e79fb70a6148ca3346d42f5503.png";
import imgRectangle2068 from "@/assets/623c959409db4893ffbb1a4c84b4c225c3506adf.png";
import Starterkit from "../../imports/Starterkit";
import Benchmark from "../../imports/Benchmark";
import Landing from "../../imports/Landing";
import Funnel from "../../imports/Funnel";
import { useIsMobile } from "./useIsMobile";
import { useTranslation } from "./LanguageContext";

type ModalKey =
  | "starterkit"
  | "benchmark"
  | "landing"
  | "funnel"
  | null;

/** Native (design) dimensions for each modal */
const MODAL_SIZES: Record<
  Exclude<ModalKey, null>,
  { w: number; h: number }
> = {
  starterkit: { w: 998, h: 885 },
  benchmark: { w: 998, h: 666 },
  landing: { w: 998, h: 774 },
  funnel: { w: 1282, h: 880 },
};

const MODAL_TITLES: Record<Exclude<ModalKey, null>, string> = {
  starterkit: "Starter kit for Shape patient",
  benchmark: "Benchmark concurrentiel",
  landing: "Landing weight management",
  funnel: "Tunnel de souscription",
};

/**
 * Wrapper that measures the viewport and scales its children
 * (rendered at their native Figma size) to fit within 92vw × 92vh.
 */
function ScaledModal({
  nativeW,
  nativeH,
  children,
  onClick,
}: {
  nativeW: number;
  nativeH: number;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [scale, setScale] = useState(1);

  const computeScale = useCallback(() => {
    const vw = window.innerWidth * 0.92;
    const vh = window.innerHeight * 0.92;
    const s = Math.min(vw / nativeW, vh / nativeH, 1);
    setScale(s);
  }, [nativeW, nativeH]);

  useEffect(() => {
    computeScale();
    window.addEventListener("resize", computeScale);
    return () =>
      window.removeEventListener("resize", computeScale);
  }, [computeScale]);

  return (
    <div
      onClick={onClick}
      style={{
        width: nativeW * scale,
        height: nativeH * scale,
      }}
    >
      <div
        style={{
          width: nativeW,
          height: nativeH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Mobile full-screen viewer with pinch-to-zoom & pan.
 * Renders the Figma component at native size, initially scaled to fit width,
 * and lets the user zoom in/out with two fingers.
 */
function MobileZoomableModal({
  nativeW,
  nativeH,
  title,
  children,
  onClose,
}: {
  nativeW: number;
  nativeH: number;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const translateRef = useRef({ x: 0, y: 0 });
  const baseScale = useRef(1);
  const pinchStart = useRef<{
    dist: number;
    scale: number;
    midX: number;
    midY: number;
    tx: number;
    ty: number;
  } | null>(null);
  const panStart = useRef<{
    x: number;
    y: number;
    tx: number;
    ty: number;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [, forceRender] = useState(0);

  // Apply transform directly to DOM for smoothness
  const applyTransform = useCallback(() => {
    if (contentRef.current) {
      const { x, y } = translateRef.current;
      const s = scaleRef.current;
      contentRef.current.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    }
  }, []);

  // Compute initial scale to fit width
  useEffect(() => {
    const fitScale = (window.innerWidth * 0.96) / nativeW;
    baseScale.current = fitScale;
    scaleRef.current = fitScale;
    // Always start at top, below the header bar (~52px)
    const offsetX =
      (window.innerWidth - nativeW * fitScale) / 2;
    translateRef.current = { x: offsetX, y: 52 };
    applyTransform();
    forceRender((n) => n + 1);
  }, [nativeW, nativeH, applyTransform]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const getDist = (t: React.TouchList) => {
    const dx = t[0].clientX - t[1].clientX;
    const dy = t[0].clientY - t[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getMid = (t: React.TouchList) => ({
    x: (t[0].clientX + t[1].clientX) / 2,
    y: (t[0].clientY + t[1].clientY) / 2,
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const mid = getMid(e.touches);
      pinchStart.current = {
        dist: getDist(e.touches),
        scale: scaleRef.current,
        midX: mid.x,
        midY: mid.y,
        tx: translateRef.current.x,
        ty: translateRef.current.y,
      };
    } else if (e.touches.length === 1) {
      panStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        tx: translateRef.current.x,
        ty: translateRef.current.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      e.preventDefault();
      const newDist = getDist(e.touches);
      const ratio = newDist / pinchStart.current.dist;
      const oldScale = pinchStart.current.scale;
      const newScale = Math.max(
        baseScale.current * 0.5,
        Math.min(oldScale * ratio, baseScale.current * 5),
      );

      // Zoom towards the initial pinch midpoint
      const mx = pinchStart.current.midX;
      const my = pinchStart.current.midY;
      // Content point under midpoint at start: cx = (mx - tx) / oldScale
      const cx = (mx - pinchStart.current.tx) / oldScale;
      const cy = (my - pinchStart.current.ty) / oldScale;
      // Keep that content point under the current midpoint of fingers
      const curMid = getMid(e.touches);
      const newTx = curMid.x - cx * newScale;
      const newTy = curMid.y - cy * newScale;

      scaleRef.current = newScale;
      translateRef.current = { x: newTx, y: newTy };
      applyTransform();
    } else if (e.touches.length === 1 && panStart.current) {
      const dx = e.touches[0].clientX - panStart.current.x;
      const dy = e.touches[0].clientY - panStart.current.y;
      translateRef.current = {
        x: panStart.current.tx + dx,
        y: panStart.current.ty + dy,
      };
      applyTransform();
    }
  };

  const handleTouchEnd = () => {
    pinchStart.current = null;
    panStart.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[var(--color-qare-white)] overflow-hidden"
      style={{ touchAction: "none" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar: title + close — outside scrollable area */}
      <div
        className="absolute top-0 left-0 right-0 z-[10000] flex items-center justify-between px-4 py-3 bg-[var(--color-qare-white)]/90 backdrop-blur-sm"
        style={{ pointerEvents: "auto" }}
      >
        <p className="font-['Aeonik:Regular',sans-serif] text-[15px] text-[var(--color-qare-text)] tracking-[1.5px] uppercase truncate pr-3">
          {title}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-[36px] h-[36px] rounded-full bg-black/8 flex items-center justify-center cursor-pointer shrink-0"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Zoom hint */}
      <div className="absolute bottom-6 left-0 right-0 z-[10000] flex justify-center pointer-events-none">
        <span className="text-black/40 text-[13px] font-['Aeonik:Regular',sans-serif] bg-black/5 px-3 py-1.5 rounded-full">
          Pincez pour zoomer
        </span>
      </div>

      {/* Zoomable content — hide internal header of Figma components */}
      <style>{`
        .mobile-doc-viewer > div > div:first-child { display: none !important; }
        .mobile-doc-viewer > div {
          padding: 0 !important;
          border-radius: 0 !important;
          height: auto !important;
          min-height: 0 !important;
          gap: 0 !important;
          background: transparent !important;
        }
        .mobile-doc-viewer > div > div:not(:first-child) {
          overflow: visible !important;
          flex: none !important;
          min-height: 0 !important;
          border-radius: 0 !important;
          position: relative !important;
        }
      `}</style>
      <div
        ref={contentRef}
        className="mobile-doc-viewer"
        style={{
          width: nativeW,
          transformOrigin: "top left",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function DocumentsCles() {
  const [activeModal, setActiveModal] =
    useState<ModalKey>(null);
  const isMobile = useIsMobile();
  const cs = useTranslation("case_study_chronic_programs");
  const docs = cs.documents;

  return (
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[56px] items-start relative shrink-0 w-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 max-w-full md:w-[706px]">
        <h4 className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[var(--color-qare-brand)] text-[18px] md:text-[24px] tracking-[4.8px] uppercase">
          {docs.section_title}
        </h4>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[32px] md:leading-[45px] not-italic relative shrink-0 text-[var(--color-qare-ink)] text-[24px] md:text-[36px] max-w-full md:w-[539px]">
          {docs.headline}
        </h2>
      </div>

      {/* Grid — 2-col on mobile, 5-col mosaic on desktop */}
      <div className="flex flex-col gap-[12px] md:grid md:grid-cols-[repeat(5,minmax(0,1fr))] md:grid-rows-[repeat(2,fit-content(100%))] md:gap-x-[24px] md:gap-y-[24px] relative shrink-0 w-full">
        {/* Starter kit */}
        <button
          type="button"
          onClick={() => setActiveModal("starterkit")}
          className="w-full md:w-auto md:col-[1/span_2] md:row-[1] h-[180px] md:h-[341px] justify-self-stretch relative rounded-[20px] md:rounded-[30px] shrink-0 cursor-pointer group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px]">
            <div className="absolute bg-[var(--color-qare-neutral-300)] inset-0 rounded-[20px] md:rounded-[30px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[30px]">
              <img
                alt="Starter kit for Shape patient"
                className="absolute inset-0 w-full h-full object-cover md:h-[150.41%] md:left-[-20.81%] md:max-w-none md:top-[-16.91%] md:w-[141.61%] md:inset-auto"
                src={imgRectangle2065}
              />
            </div>
            <div className="absolute bg-[var(--overlay-qare-purple-light)] inset-0 rounded-[20px] md:rounded-[30px]" />
          </div>
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px] bg-[var(--overlay-qare-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[12px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[14px] md:text-[24px] text-center text-white tracking-[2px] md:tracking-[4.8px] uppercase">
              {docs.items[0]}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-4 border-[var(--color-qare-200)] border-solid inset-0 pointer-events-none rounded-[20px] md:rounded-[30px]"
          />
        </button>

        {/* Benchmark */}
        <button
          type="button"
          onClick={() => setActiveModal("benchmark")}
          className="w-full md:w-auto md:col-[3/span_3] md:row-[1] h-[180px] md:h-[341px] justify-self-stretch relative rounded-[20px] md:rounded-[30px] shrink-0 cursor-pointer group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px]">
            <div className="absolute bg-[var(--color-qare-neutral-300)] inset-0 rounded-[20px] md:rounded-[30px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[30px]">
              <img
                alt="Benchmark concurrentiel"
                className="absolute inset-0 w-full h-full object-cover md:h-[285.34%] md:left-[-17.96%] md:max-w-none md:top-[-14.69%] md:w-[189.56%] md:inset-auto"
                src={imgRectangle2066}
              />
            </div>
            <div className="absolute bg-[var(--overlay-qare-purple-light)] inset-0 rounded-[20px] md:rounded-[30px]" />
          </div>
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px] bg-[var(--overlay-qare-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[12px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[14px] md:text-[24px] text-center text-white tracking-[2px] md:tracking-[4.8px] uppercase">
              {docs.items[1]}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-4 border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px] md:rounded-[30px]"
          />
        </button>

        {/* Landing page Shape */}
        <button
          type="button"
          onClick={() => setActiveModal("landing")}
          className="w-full md:w-auto md:col-[1/span_3] md:row-[2] h-[180px] md:h-[341px] justify-self-stretch relative rounded-[20px] md:rounded-[30px] shrink-0 cursor-pointer group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[30px]">
              <img
                alt="Landing page Shape"
                className="absolute inset-0 w-full h-full object-cover md:h-[333.62%] md:left-[-0.48%] md:max-w-none md:top-[-63.03%] md:w-[227.38%] md:inset-auto"
                src={imgRectangle2067}
              />
            </div>
            <div className="absolute bg-[var(--overlay-qare-purple-light)] inset-0 rounded-[20px] md:rounded-[30px]" />
          </div>
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px] bg-[var(--overlay-qare-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[12px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[14px] md:text-[24px] text-center text-white tracking-[2px] md:tracking-[4.8px] uppercase">
              {docs.items[2]}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-4 border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px] md:rounded-[30px]"
          />
        </button>

        {/* Tunnel de souscription */}
        <button
          type="button"
          onClick={() => setActiveModal("funnel")}
          className="w-full md:w-auto md:col-[4/span_2] md:row-[2] h-[180px] md:h-[341px] justify-self-stretch relative rounded-[20px] md:rounded-[30px] shrink-0 cursor-pointer group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px]">
            <div className="absolute bg-[var(--color-qare-neutral-300)] inset-0 rounded-[20px] md:rounded-[30px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[30px]">
              <img
                alt="Tunnel de souscription et Onboarding"
                className="absolute inset-0 w-full h-full object-cover md:h-[149.18%] md:left-[-12.38%] md:max-w-none md:top-[-16.55%] md:w-[163.74%] md:inset-auto"
                src={imgRectangle2068}
              />
            </div>
            <div className="absolute bg-[var(--overlay-qare-purple-light)] inset-0 rounded-[20px] md:rounded-[30px]" />
          </div>
          <div className="absolute inset-0 rounded-[20px] md:rounded-[30px] bg-[var(--overlay-qare-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[12px]">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[14px] md:text-[24px] text-center text-white tracking-[2px] md:tracking-[4.8px] uppercase">
              {docs.items[3]}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-4 border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px] md:rounded-[30px]"
          />
        </button>
      </div>

      {/* Modal overlay — rendered via portal to escape transform context */}
      {activeModal &&
        createPortal(
          isMobile ? (
            <MobileZoomableModal
              nativeW={MODAL_SIZES[activeModal].w}
              nativeH={MODAL_SIZES[activeModal].h}
              title={MODAL_TITLES[activeModal]}
              onClose={() => setActiveModal(null)}
            >
              {activeModal === "starterkit" && <Starterkit />}
              {activeModal === "benchmark" && <Benchmark />}
              {activeModal === "landing" && <Landing />}
              {activeModal === "funnel" && <Funnel />}
            </MobileZoomableModal>
          ) : (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveModal(null)}
            >
              <ScaledModal
                nativeW={MODAL_SIZES[activeModal].w}
                nativeH={MODAL_SIZES[activeModal].h}
                onClick={(e) => e.stopPropagation()}
              >
                {activeModal === "starterkit" && (
                  <Starterkit
                    onClose={() => setActiveModal(null)}
                  />
                )}
                {activeModal === "benchmark" && (
                  <Benchmark
                    onClose={() => setActiveModal(null)}
                  />
                )}
                {activeModal === "landing" && (
                  <Landing
                    onClose={() => setActiveModal(null)}
                  />
                )}
                {activeModal === "funnel" && (
                  <Funnel
                    onClose={() => setActiveModal(null)}
                  />
                )}
              </ScaledModal>
            </div>
          ),
          document.body,
        )}
    </div>
  );
}