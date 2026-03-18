import { useState, useRef, useEffect, ReactNode } from "react";

interface StatTooltipProps {
  tooltip?: string;
  children: ReactNode;
}

/**
 * Wraps a stat element and shows a tooltip above on hover.
 * Dark background, light text, small arrow, fade-in animation.
 */
export function StatTooltip({ tooltip, children }: StatTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const show = () => {
    if (!tooltip) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
    requestAnimationFrame(() => setReady(true));
  };

  const hide = () => {
    setReady(false);
    timeoutRef.current = setTimeout(() => setVisible(false), 180);
  };

  if (!tooltip) return <>{children}</>;

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      style={{ cursor: "default" }}
    >
      {children}
      {visible && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: 240,
            width: "max-content",
            padding: "10px 14px",
            borderRadius: 10,
            backgroundColor: "#1e1430",
            color: "#e8e4f0",
            fontSize: 13,
            lineHeight: "18px",
            fontFamily: "'Aeonik:Regular', sans-serif",
            textAlign: "center",
            zIndex: 100,
            pointerEvents: "none",
            opacity: ready ? 1 : 0,
            transition: "opacity 180ms ease",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          {tooltip}
          {/* Arrow */}
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #1e1430",
            }}
          />
        </div>
      )}
    </div>
  );
}
