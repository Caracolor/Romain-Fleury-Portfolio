interface DotPatternBackgroundProps {
  isMobile: boolean;
  /** Scale factor for desktop fade distances (default 1) */
  scale?: number;
}

/**
 * Decorative dot-grid background that fades out vertically.
 * Used on all pages as the first child of the page container.
 */
export function DotPatternBackground({
  isMobile,
  scale: s = 1,
}: DotPatternBackgroundProps) {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: [
          isMobile
            ? "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%)"
            : "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
          "radial-gradient(circle, rgba(190,170,230,0.45) 1px, transparent 1px) 0 0 / 13px 13px",
        ].join(", "),
        maskImage: `linear-gradient(to bottom, black 0%, black ${isMobile ? 200 : Math.round(700 * s)}px, transparent ${isMobile ? 380 : Math.round(960 * s)}px)`,
        WebkitMaskImage: `linear-gradient(to bottom, black 0%, black ${isMobile ? 200 : Math.round(700 * s)}px, transparent ${isMobile ? 380 : Math.round(960 * s)}px)`,
      }}
    />
  );
}
