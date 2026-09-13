import type { CSSProperties } from "react";

interface AvatarStatusDotProps {
  /** Diameter in px. */
  size: number;
  borderWidth?: number;
  style?: CSSProperties;
}

/**
 * The small green "online" badge on the mascot's avatar — signals the
 * assistant is live and ready to answer, not just decorative branding.
 * Positioned at the avatar's bottom-right corner by default; pass `style`
 * to override when the parent isn't a plain relative-positioned wrapper
 * (e.g. the floating button, whose own overflow:hidden would clip a badge
 * placed right at its corner — see GlobalChatWidget.tsx).
 */
export function AvatarStatusDot({ size, borderWidth = 2, style }: AvatarStatusDotProps) {
  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#22C55E",
        border: `${borderWidth}px solid var(--color-qare-white)`,
        boxSizing: "content-box",
        ...style,
      }}
    />
  );
}
