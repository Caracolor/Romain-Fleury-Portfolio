import { useRef, useState, useEffect, ReactNode, CSSProperties } from "react";
import { useOutletContext } from "react-router";
import { CHAT_OPEN_SIDE_PADDING, CHAT_OPEN_SIDE_PADDING_MAX_PX, CHAT_TRANSITION_MS, CHAT_EASE_CSS } from "./chatLayout";

interface ScaledSectionProps {
  maxWidth: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/**
 * Centres content at `maxWidth` and scales it down proportionally
 * when the viewport is narrower — preserving the pixel-perfect Figma layout.
 *
 * Uses generous side padding via clamp() so content never touches edges:
 *   - min 24px, ideal 4vw, max 80px per side
 * The scale calculation accounts for this padding.
 *
 * When the chat is open, THIS component (not an ancestor) absorbs the
 * push: marginRight becomes the reserved chat width directly (width
 * switches from a fixed "100%" to "auto" so the box can shrink by exactly
 * that margin instead of overflowing). Page-level wrappers and section
 * backgrounds are never actually narrowed, so they stay full-bleed behind
 * the chat panel automatically — no per-section "bleed layer" workaround
 * needed. The rendered box ends up the exact same width either way (it's
 * the same subtraction, just moved here), so `scale` comes out identical.
 */
export function ScaledSection({
  maxWidth,
  children,
  style,
  className,
}: ScaledSectionProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [outerHeight, setOuterHeight] = useState<number | undefined>();
  const { chatReservedWidth = 0 } = useOutletContext<{ chatReservedWidth?: number }>() ?? {};
  const isChatOpen = chatReservedWidth > 0;

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const cs = getComputedStyle(outer);
      const pl = parseFloat(cs.paddingLeft) || 0;
      const pr = parseFloat(cs.paddingRight) || 0;
      const pt = parseFloat(cs.paddingTop) || 0;
      const pb = parseFloat(cs.paddingBottom) || 0;
      const availableWidth = outer.getBoundingClientRect().width - pl - pr;
      const s = Math.min(1, availableWidth / maxWidth);
      setScale(s);
      // With border-box, height must include vertical padding
      setOuterHeight(inner.scrollHeight * s + pt + pb);
    };

    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    update();
    return () => ro.disconnect();
  }, [maxWidth]);

  // Use less side padding on mobile for a better scale factor. Also less
  // once the chat has pushed content over: the fixed 200px desktop gutter
  // was tuned for the full-width column, and eats a much bigger share of
  // an already-narrowed ~70%-of-viewport space — CHAT_OPEN_SIDE_PADDING
  // keeps the intended 30% chat / 55% content / 15% margin split for that
  // state (see chatLayout.ts) instead of squeezing the actual content down
  // far more than the push alone already does. Header.tsx mirrors this
  // same constant for its own (separately fixed, 150px) side padding.
  const isMobileView = typeof window !== "undefined" && window.innerWidth < 768;
  const sidePadding = isMobileView
    ? "clamp(16px, 4vw, 32px)"
    : isChatOpen
      ? CHAT_OPEN_SIDE_PADDING
      : "200px";
  const maxWidthWithPadding = isMobileView
    ? maxWidth + 64   // 32*2 max mobile padding
    : isChatOpen
      ? maxWidth + CHAT_OPEN_SIDE_PADDING_MAX_PX * 2
      : maxWidth + 400; // 200*2 desktop padding

  return (
    <div
      ref={outerRef}
      className={className}
      style={{
        width: !isMobileView && isChatOpen ? "auto" : "100%",
        maxWidth: maxWidthWithPadding,
        marginLeft: "auto",
        marginRight: !isMobileView && isChatOpen ? chatReservedWidth : "auto",
        transition: `margin-right ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}`,
        overflow: "visible",
        height: outerHeight,
        paddingLeft: sidePadding,
        paddingRight: sidePadding,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: maxWidth,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
