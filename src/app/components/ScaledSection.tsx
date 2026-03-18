import { useRef, useState, useEffect, ReactNode, CSSProperties } from "react";

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

  // Use less side padding on mobile for a better scale factor
  const isMobileView = typeof window !== "undefined" && window.innerWidth < 768;
  const sidePadding = isMobileView
    ? "clamp(16px, 4vw, 32px)"
    : "200px";
  const maxWidthWithPadding = isMobileView
    ? maxWidth + 64   // 32*2 max mobile padding
    : maxWidth + 400; // 200*2 desktop padding

  return (
    <div
      ref={outerRef}
      className={className}
      style={{
        width: "100%",
        maxWidth: maxWidthWithPadding,
        marginLeft: "auto",
        marginRight: "auto",
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