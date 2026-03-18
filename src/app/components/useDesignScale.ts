import { useState, useEffect, useCallback } from "react";

/**
 * Returns a scale factor (0..1) based on viewport width vs design viewport.
 * Used by pages that need Figma-accurate scaling outside of ScaledSection.
 */
export function useDesignScale(designVP = 1200) {
  const compute = useCallback(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(1, window.innerWidth / designVP);
  }, [designVP]);

  const [scale, setScale] = useState(compute);

  useEffect(() => {
    const onResize = () => setScale(compute());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [compute]);

  return scale;
}
