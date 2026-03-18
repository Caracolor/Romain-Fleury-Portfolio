import React from "react";
/* Animated mouse cursor component */

const MOUSE_PATH =
  "M14.3999 5.4889C16.1172 0.972825 22.5068 0.972749 24.2241 5.4889L36.1596 36.8834C37.8072 41.2169 33.4448 45.4053 29.1821 43.5827L19.7251 39.5377C19.4613 39.425 19.1627 39.4251 18.8989 39.5377L9.44185 43.5827C5.17911 45.4056 0.815826 41.217 2.46334 36.8834L14.3999 5.4889Z";

interface AnimatedMouseCursorProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedMouseCursor({
  size = 46,
  className = "",
  style,
}: AnimatedMouseCursorProps) {
  const aspect = 35.043 / 46.084;
  const w = size * aspect;

  return (
    <div
      className={`pointer-events-none ${className}`}
      style={style}
    >
      <div className="rotate-[-42.82deg]">
        <div style={{ height: size, width: w, position: "relative" }}>
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 38.6236 46.128"
            overflow="visible"
          >
            <path
              d={MOUSE_PATH}
              fill="#7A63CA"
              stroke="white"
              strokeWidth="4.20391"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 8,-6; 13,2; 5,11; -7,9; -11,0; -5,-9; 7,-11; 0,0"
                keyTimes="0; 0.13; 0.27; 0.42; 0.56; 0.7; 0.82; 0.92; 1"
                dur="9s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}