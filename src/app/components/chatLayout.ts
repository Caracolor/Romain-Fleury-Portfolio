import { createContext } from "react";

/**
 * Shared between Layout.tsx (pushes the Header + page content) and
 * GlobalChatWidget.tsx (renders the panel itself), so both sides of the
 * push/slide stay in lockstep — same width, same timing.
 */

// 30% of the viewport, clamped so it's never so narrow the chat itself is
// unusable (small desktop windows) nor absurdly wide (ultra-wide monitors).
export const CHAT_WIDTH_RATIO = 0.3;
export const CHAT_MIN_WIDTH = 360;
export const CHAT_MAX_WIDTH = 560;

export function computeChatWidth(viewportWidth: number): number {
  return Math.min(CHAT_MAX_WIDTH, Math.max(CHAT_MIN_WIDTH, Math.round(viewportWidth * CHAT_WIDTH_RATIO)));
}

// Desktop only (mobile stays edge-to-edge full screen). Matches the
// Header's own floating-pill treatment: 24px top gap (its paddingTop) and
// 20px corner radius (its rounded-[20px]) — see Header.tsx. Layout.tsx
// folds this into the reserved push width too, since the panel's right
// edge sits CHAT_MARGIN in from the viewport, not flush against it.
export const CHAT_MARGIN = 24;
export const CHAT_RADIUS = 20;

/**
 * Whether the chat is open, pushing content over — read by ScaledSection.tsx
 * so its own side padding (a generous fixed 200px, tuned for the full-width
 * default column) can shrink instead of eating a huge share of the already
 * narrower space. Default false: any consumer rendered outside Layout.tsx's
 * provider (there shouldn't be one) just gets the normal, unreduced padding.
 *
 * ~30% chat / ~60% content / ~10% margin of the viewport was the target
 * (CHAT_WIDTH_RATIO already is 30%); 7% padding on each side of the
 * ScaledSection container works out to roughly that 10% once the container
 * itself is ~70% of the viewport, across the range window widths this site
 * actually gets used at.
 */
export const ChatOpenContext = createContext(false);

export const CHAT_TRANSITION_MS = 400;
// Same curve motion/react's cubic-bezier easing arrays use, spelled out as a
// CSS transition-timing-function string for the plain-CSS side (Header,
// content wrapper) that doesn't go through Framer Motion.
export const CHAT_EASE_CSS = "cubic-bezier(0.32, 0.72, 0, 1)";
export const CHAT_EASE_MOTION: [number, number, number, number] = [0.32, 0.72, 0, 1];
