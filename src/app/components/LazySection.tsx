import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Approximate height to reserve before render (avoids layout shift). Default 400px. */
  minHeight?: number;
  /** How far before viewport to start rendering. Default "300px". */
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Defers rendering of children until the section approaches the viewport.
 * Reserves space via minHeight to avoid scroll position jumps.
 */
export function LazySection({
  children,
  minHeight = 400,
  rootMargin = "300px",
  className,
  style,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: visible ? undefined : minHeight, ...style }}
    >
      {visible ? children : null}
    </div>
  );
}
