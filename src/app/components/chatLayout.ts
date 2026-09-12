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
 * Whether the chat is open, pushing content over — read by both
 * ScaledSection.tsx (its side padding) and Header.tsx (its own, separate
 * side padding — a different fixed value, 150px vs ScaledSection's 200px,
 * since the nav bar and the content column were never pixel-aligned to
 * begin with) so both shrink by the same logic instead of only one of
 * them reacting to the push. Default false: any consumer rendered outside
 * Layout.tsx's provider (there shouldn't be one) just gets the normal,
 * unreduced padding.
 *
 * Target: ~30% chat / ~55% content / ~15% margin of the viewport
 * (CHAT_WIDTH_RATIO already is 30%). 11% padding on each side of the
 * pushed container works out to roughly that 15% once the container
 * itself is ~70% of the viewport — verified in the browser across the
 * range of window widths this site is actually used at. The 160px ceiling
 * keeps it from ballooning further on ultra-wide monitors.
 */
export const ChatOpenContext = createContext(false);

const CHAT_OPEN_PADDING_MIN_PX = 24;
const CHAT_OPEN_PADDING_RATIO = 0.11;
export const CHAT_OPEN_SIDE_PADDING_MAX_PX = 160;
// CSS clamp() string for ScaledSection.tsx: it's in normal flow, so a
// percentage padding correctly resolves against its real DOM parent
// (Layout.tsx's pushed content wrapper) — no JS needed.
export const CHAT_OPEN_SIDE_PADDING = `clamp(${CHAT_OPEN_PADDING_MIN_PX}px, ${CHAT_OPEN_PADDING_RATIO * 100}%, ${CHAT_OPEN_SIDE_PADDING_MAX_PX}px)`;
/**
 * Same clamp, computed in JS from an explicit container width — for
 * Header.tsx, which can't use the CSS string above: its wrapper is
 * position:fixed, and a percentage padding on a fixed element resolves
 * against the *viewport*, not its own (pushed, narrower) rendered width —
 * so the same "11%" would come out to a different, larger number there
 * than it does for ScaledSection's normal-flow container.
 */
export function computeChatOpenPadding(containerWidthPx: number): number {
  return Math.round(Math.min(CHAT_OPEN_SIDE_PADDING_MAX_PX, Math.max(CHAT_OPEN_PADDING_MIN_PX, containerWidthPx * CHAT_OPEN_PADDING_RATIO)));
}

// Closed state: Header's 150px side padding vs ScaledSection's 200px means
// the header runs 50px wider on each side. That's a ratio of 150/200 = 0.75
// — Header always sits at 75% of ScaledSection's padding. Applying the same
// ratio to computeChatOpenPadding() keeps the header proportionally wider
// once the chat is open too, instead of both converging to the same width.
export const HEADER_PADDING_RATIO = 150 / 200;

export function computeHeaderChatOpenPadding(containerWidthPx: number): number {
  return Math.round(computeChatOpenPadding(containerWidthPx) * HEADER_PADDING_RATIO);
}

export const CHAT_TRANSITION_MS = 400;
// Same curve motion/react's cubic-bezier easing arrays use, spelled out as a
// CSS transition-timing-function string for the plain-CSS side (Header,
// content wrapper) that doesn't go through Framer Motion.
export const CHAT_EASE_CSS = "cubic-bezier(0.32, 0.72, 0, 1)";
export const CHAT_EASE_MOTION: [number, number, number, number] = [0.32, 0.72, 0, 1];
