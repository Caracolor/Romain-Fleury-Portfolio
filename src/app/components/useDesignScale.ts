import { useState, useEffect, useCallback } from "react";

/**
 * Returns a scale factor (0..1) based on viewport width vs design viewport.
 * Used by pages that need Figma-accurate scaling outside of ScaledSection.
 *
 * `reservedPx` — width to subtract before computing the ratio, e.g. the
 * open chat drawer's width (see chatLayout.ts). ScaledSection doesn't need
 * this: it measures its own container's rendered width via ResizeObserver,
 * which already shrinks on its own once Layout.tsx makes that container
 * narrower. This hook measures window.innerWidth directly instead, so it
 * has no such container to observe — callers pass the same reserved width
 * Layout.tsx used, so the page's outer gaps/padding shrink in step with
 * the content ScaledSection is already rescaling.
 */
export function useDesignScale(designVP = 1200, reservedPx = 0) {
  const compute = useCallback(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(1, (window.innerWidth - reservedPx) / designVP);
  }, [designVP, reservedPx]);

  const [scale, setScale] = useState(compute);

  useEffect(() => {
    const onResize = () => setScale(compute());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [compute]);

  return scale;
}
