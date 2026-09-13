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

const DEFAULT_FRAME_MS = 800;

// Every sequence starts and ends on "normal" (added at play time, not
// listed here) so the loop always rests on the same neutral frame between
// idle animations, whatever it just played. frameMs is per-sequence — a
// side-eye or an angry look needs longer to read than a quick glance.
const SEQUENCES: { poses: Pose[]; frameMs: number }[] = [
  { poses: ["suspicious"], frameMs: 2400 }, // side-eye, back to normal
  { poses: ["left", "right"], frameMs: DEFAULT_FRAME_MS }, // glances one way, then the other
  { poses: ["top", "bottom"], frameMs: DEFAULT_FRAME_MS }, // glances up, then down
  { poses: ["wink"], frameMs: DEFAULT_FRAME_MS },
  { poses: ["hangry"], frameMs: 2400 },
  { poses: ["funny"], frameMs: 1600 },
];

const IDLE_MIN_MS = 2000;
const IDLE_MAX_MS = 6000;

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

    const playFrame = (seq: (typeof SEQUENCES)[number], i: number) => {
      if (i >= seq.poses.length) {
        setPose("normal");
        scheduleNextIdle();
        return;
      }
      setPose(seq.poses[i]);
      schedule(() => playFrame(seq, i + 1), seq.frameMs);
    };

    scheduleNextIdle();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <img src={POSE_SRC[pose]} alt={alt} style={{ width: "100%", height: "100%" }} />;
}
