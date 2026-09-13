import { useEffect, useRef, useState } from "react";

type Pose = "normal" | "suspicious" | "left" | "right" | "top" | "bottom" | "wink" | "hangry" | "funny";

const POSE_SRC: Record<Pose, string> = {
  normal: "/bot/normal.svg",
  suspicious: "/bot/suspicious.svg",
  left: "/bot/left.svg",
  right: "/bot/right.svg",
  top: "/bot/top.svg",
  bottom: "/bot/bottom.svg",
  wink: "/bot/wink.svg",
  hangry: "/bot/hangry.svg",
  funny: "/bot/funny.svg",
};

// Every sequence starts and ends on "normal" (added at play time, not
// listed here) so the loop always rests on the same neutral frame between
// idle animations, whatever it just played.
const SEQUENCES: Pose[][] = [
  ["suspicious"], // side-eye, back to normal
  ["left", "right"], // glances one way, then the other
  ["top", "bottom"], // glances up, then down
  ["wink"],
  ["hangry"],
  ["funny"],
];

const FRAME_MS = 800;
const IDLE_MIN_MS = 3500;
const IDLE_MAX_MS = 7000;

/**
 * The floating chat button's mascot, idling on "normal" and occasionally
 * flashing through a short random expression (a glance, a wink, a side-eye)
 * before settling back — a sprite-style flipbook over plain <img> swaps,
 * not a cross-fade, to match the pixel-art style of the source assets.
 */
export function ChatBotIcon({ alt }: { alt: string }) {
  const [pose, setPose] = useState<Pose>("normal");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    const schedule = (fn: () => void, ms: number) => {
      timeoutRef.current = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const scheduleNextIdle = () => {
      const delay = IDLE_MIN_MS + Math.random() * (IDLE_MAX_MS - IDLE_MIN_MS);
      schedule(playRandomSequence, delay);
    };

    const playRandomSequence = () => {
      const seq = SEQUENCES[Math.floor(Math.random() * SEQUENCES.length)];
      playFrame(seq, 0);
    };

    const playFrame = (seq: Pose[], i: number) => {
      if (i >= seq.length) {
        setPose("normal");
        scheduleNextIdle();
        return;
      }
      setPose(seq[i]);
      schedule(() => playFrame(seq, i + 1), FRAME_MS);
    };

    scheduleNextIdle();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <img src={POSE_SRC[pose]} alt={alt} style={{ width: "100%", height: "100%" }} />;
}
