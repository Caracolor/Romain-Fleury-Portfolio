import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Watches a container ref for <img> elements and resolves
 * `imagesReady` to true once every image has loaded (or errored).
 *
 * - Uses MutationObserver to catch images inserted after initial render
 * - Enforces a minimum display time (minDisplayMs) so the loader is always visible
 * - Safety timeout so the loader never stays forever
 */
export function useImagePreloader(
  containerRef: React.RefObject<HTMLElement | null>,
  {
    timeoutMs = 8000,
    minDisplayMs = 600,
    settleDelayMs = 200,
  }: { timeoutMs?: number; minDisplayMs?: number; settleDelayMs?: number } = {}
) {
  const [imagesReady, setImagesReady] = useState(false);
  const resolved = useRef(false);
  const startTime = useRef(Date.now());

  const resolve = useCallback(() => {
    if (resolved.current) return;
    const elapsed = Date.now() - startTime.current;
    const remaining = Math.max(0, minDisplayMs - elapsed);
    setTimeout(() => {
      if (!resolved.current) {
        resolved.current = true;
        setImagesReady(true);
      }
    }, remaining);
  }, [minDisplayMs]);

  useEffect(() => {
    // Reset
    resolved.current = false;
    startTime.current = Date.now();
    setImagesReady(false);

    // Safety timeout
    const safetyTimer = setTimeout(resolve, timeoutMs);

    // Tracks all images currently being watched
    const watchedImages = new Set<HTMLImageElement>();
    let pendingCount = 0;

    const onImgDone = () => {
      pendingCount--;
      if (pendingCount <= 0) resolve();
    };

    const watchImage = (img: HTMLImageElement) => {
      if (watchedImages.has(img)) return;
      watchedImages.add(img);
      if (img.complete && img.naturalWidth > 0) return; // already loaded
      pendingCount++;
      img.addEventListener("load", onImgDone, { once: true });
      img.addEventListener("error", onImgDone, { once: true });
    };

    const scanImages = () => {
      const el = containerRef.current;
      if (!el) return;
      el.querySelectorAll("img").forEach(watchImage);
    };

    // Delay initial scan to let React render children
    const settleTimer = setTimeout(() => {
      const el = containerRef.current;
      if (!el) {
        resolve();
        return;
      }

      scanImages();

      // Watch for dynamically added images
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node instanceof HTMLImageElement) {
              watchImage(node);
            } else if (node instanceof HTMLElement) {
              node.querySelectorAll("img").forEach(watchImage);
            }
          }
        }
      });
      observer.observe(el, { childList: true, subtree: true });

      // After scan + a tick, if nothing is pending, resolve
      requestAnimationFrame(() => {
        if (pendingCount <= 0) resolve();
      });

      // Cleanup observer on unmount
      cleanupFns.push(() => observer.disconnect());
    }, settleDelayMs);

    const cleanupFns: (() => void)[] = [];

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(settleTimer);
      cleanupFns.forEach((fn) => fn());
    };
  }, [containerRef, timeoutMs, settleDelayMs, resolve]);

  return imagesReady;
}
