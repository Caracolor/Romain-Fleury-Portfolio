import type { ReactNode, CSSProperties } from "react";
import { ScaledSection } from "./ScaledSection";
import { useIsMobile } from "./useIsMobile";

interface ResponsiveSectionProps {
  /** Desktop content (inside ScaledSection) */
  desktop: ReactNode;
  /** Mobile content (inside a plain div) */
  mobile: ReactNode;
  /** Style applied to wrapper (ScaledSection or div) */
  style?: CSSProperties;
  /** Max width for ScaledSection (default 950) */
  maxWidth?: number;
  /** Additional className for mobile wrapper */
  mobileClassName?: string;
}

/**
 * Renders ScaledSection on desktop, plain div on mobile.
 * Eliminates the repeated `isMobile ? <div> : <ScaledSection>` pattern.
 */
export function ResponsiveSection({
  desktop,
  mobile,
  style,
  maxWidth = 950,
  mobileClassName,
}: ResponsiveSectionProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={mobileClassName} style={style}>
        {mobile}
      </div>
    );
  }

  return (
    <ScaledSection maxWidth={maxWidth} style={style}>
      {desktop}
    </ScaledSection>
  );
}
