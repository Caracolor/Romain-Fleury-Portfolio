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
 * Straddles the avatar's top-right corner by default (translate(50%,-50%)
 * centers the dot exactly on that corner point, half in/half out) — pass
 * `style` to override the anchor when the parent isn't a plain
 * relative-positioned wrapper (e.g. the floating button, whose own
 * overflow:hidden would clip a badge placed right at its corner — see
 * GlobalChatWidget.tsx, which anchors it as a fixed sibling instead).
 */
export function AvatarStatusDot({ size, borderWidth = 2, style }: AvatarStatusDotProps) {
  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translate(50%, -50%)",
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
