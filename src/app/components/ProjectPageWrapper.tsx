import { useRef, type ReactNode } from "react";
import { PageLoader } from "./PageLoader";
import { useImagePreloader } from "./useImagePreloader";
import { DotPatternBackground } from "./DotPatternBackground";
import { useIsMobile } from "./useIsMobile";

interface ProjectPageWrapperProps {
  children: ReactNode;
  /** Scale factor for the dot pattern fade (default 1) */
  scale?: number;
}

/**
 * Wraps every project page with:
 * - PageLoader (image preload gate)
 * - Full-width container with overflow-hidden
 * - DotPatternBackground
 *
 * Exposes containerRef for child usage via render prop pattern.
 */
export function ProjectPageWrapper({ children, scale }: ProjectPageWrapperProps) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesReady = useImagePreloader(containerRef);

  return (
    <>
      <PageLoader visible={!imagesReady} />
      <div
        ref={containerRef}
        className="relative min-h-screen w-full bg-white overflow-x-hidden"
      >
        <DotPatternBackground isMobile={isMobile} scale={scale} />
        {children}
      </div>
    </>
  );
}
