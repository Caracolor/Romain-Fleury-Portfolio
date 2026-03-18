import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const PIVOT_GIF_URL = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lqeHpxczNwMm1kdWpzbjN0Zng4YzJlN2E3ajU3OXpsenh4aDIxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2OP9jbHFlFPW/giphy.gif";

interface SectionHeaderProps {
  label: string;
  headline: string;
  /** Render in mobile size (smaller text) */
  mobile?: boolean;
}

/**
 * Violet uppercase label + bold headline.
 * Consistent pattern used across all project page sections.
 */
export function SectionHeader({ label, headline, mobile }: SectionHeaderProps) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">
          {label}
        </p>
        <h2 className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-text)] text-[22px] leading-[28px]">
          {renderHeadline(headline)}
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[8px] items-start w-[706px]">
      <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase w-full">
        {label}
      </p>
      <h2 className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-text)] text-[36px] leading-[45px] w-full">
        {renderHeadline(headline)}
      </h2>
    </div>
  );
}

function PivotWord({ word }: { word: string }) {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const spanRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (spanRef.current) {
      const rect = spanRef.current.getBoundingClientRect();
      setPos({ x: rect.left + rect.width / 2, y: rect.top });
    }
    setVisible(true);
    requestAnimationFrame(() => setReady(true));
  };
  const hide = () => {
    setReady(false);
    timeoutRef.current = setTimeout(() => setVisible(false), 200);
  };

  return (
    <span
      ref={spanRef}
      className="relative cursor-default"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {word}
      {visible && createPortal(
        <div
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y - 16,
            transform: "translate(-50%, -100%)",
            zIndex: 99999,
            pointerEvents: "none",
            opacity: ready ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        >
          <img
            src={PIVOT_GIF_URL}
            alt="PIVOT!!!"
            style={{
              width: 200,
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              display: "block",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderTop: "7px solid #1e1430",
            }}
          />
        </div>,
        document.body
      )}
    </span>
  );
}

/** Render headline, wrapping the word "pivots" with a hover easter egg */
function renderHeadline(text: string) {
  const regex = /(pivots)/gi;
  const parts = text.split(regex);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    regex.test(part) ? <PivotWord key={i} word={part} /> : part
  );
}