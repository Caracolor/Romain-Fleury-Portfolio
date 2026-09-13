import { useEffect, useRef, useState } from "react";

type Pose =
  | "normal"
  | "wink"
  | "left1"
  | "left2"
  | "left3"
  | "left4"
  | "right1"
  | "right2"
  | "right3"
  | "right4"
  | "top1"
  | "top2"
  | "top3"
  | "top4"
  | "top5"
  | "bottom1"
  | "bottom2"
  | "bottom3"
  | "bottom4"
  | "bottom5"
  | "hangry1"
  | "hangry2"
  | "hangry3"
  | "suspicious1"
  | "suspicious2"
  | "suspicious3"
  | "funny1"
  | "funny2"
  | "funny3"
  | "funny4";

const POSE_SRC: Record<Pose, string> = {
  normal: "/bot/normal.svg",
  wink: "/bot/wink.svg",
  left1: "/bot/left-1.svg",
  left2: "/bot/left-2.svg",
  left3: "/bot/left-3.svg",
  left4: "/bot/left-4.svg",
  right1: "/bot/right-1.svg",
  right2: "/bot/right-2.svg",
  right3: "/bot/right-3.svg",
  right4: "/bot/right-4.svg",
  top1: "/bot/top-1.svg",
  top2: "/bot/top-2.svg",
  top3: "/bot/top-3.svg",
  top4: "/bot/top-4.svg",
  top5: "/bot/top-5.svg",
  bottom1: "/bot/bottom-1.svg",
  bottom2: "/bot/bottom-2.svg",
  bottom3: "/bot/bottom-3.svg",
  bottom4: "/bot/bottom-4.svg",
  bottom5: "/bot/bottom-5.svg",
  hangry1: "/bot/hangry-1.svg",
  hangry2: "/bot/hangry-2.svg",
  hangry3: "/bot/hangry-3.svg",
  suspicious1: "/bot/suspicious-1.svg",
  suspicious2: "/bot/suspicious-2.svg",
  suspicious3: "/bot/suspicious-3.svg",
  funny1: "/bot/funny-1.svg",
  funny2: "/bot/funny-2.svg",
  funny3: "/bot/funny-3.svg",
  funny4: "/bot/funny-4.svg",
};

interface Frame {
  pose: Pose;
  ms: number;
}

const WINK_MS = 800;
const GLANCE_RAMP_MS = 50; // left/right/top/bottom: time between intermediate frames
const GLANCE_HOLD_MS = 800; // ...and the pause at the extreme + at "normal" in between
const REACTION_MS = 100; // suspicious/hangry ping-pong
const FUNNY_MS = 50; // giggle bounce

function uniform(poses: Pose[], ms: number): Frame[] {
  return poses.map((pose) => ({ pose, ms }));
}

// left1-4 / top1-5 are the eye's *intermediate* positions between "normal"
// and its most extreme glance — ramping through them one at a time (rather
// than jumping straight to the extreme) is what makes the glance read as a
// smooth motion instead of a snap-cut. Each cluster ramps up at
// GLANCE_RAMP_MS/frame, holds on the most extreme frame for
// GLANCE_HOLD_MS, then ramps back down through the same intermediates.
function rampCluster(frames: Pose[]): Frame[] {
  const up = frames.map((pose, i) => ({ pose, ms: i === frames.length - 1 ? GLANCE_HOLD_MS : GLANCE_RAMP_MS }));
  const down = frames
    .slice(0, -1)
    .reverse()
    .map((pose) => ({ pose, ms: GLANCE_RAMP_MS }));
  return [...up, ...down];
}

const LEFT_RIGHT_SEQUENCE: Frame[] = [
  ...rampCluster(["left1", "left2", "left3", "left4"]),
  { pose: "normal", ms: GLANCE_HOLD_MS },
  ...rampCluster(["right1", "right2", "right3", "right4"]),
];

const TOP_BOTTOM_SEQUENCE: Frame[] = [
  ...rampCluster(["top1", "top2", "top3", "top4", "top5"]),
  { pose: "normal", ms: GLANCE_HOLD_MS },
  ...rampCluster(["bottom1", "bottom2", "bottom3", "bottom4", "bottom5"]),
];

// A gentle ping-pong across the 3 frames (not a single static pose) so the
// head reads as subtly alive while held, rather than frozen mid-expression.
const SUSPICIOUS_SEQUENCE: Frame[] = uniform(
  ["suspicious1", "suspicious2", "suspicious3", "suspicious2", "suspicious1", "suspicious2"],
  REACTION_MS
);
const HANGRY_SEQUENCE: Frame[] = uniform(["hangry1", "hangry2", "hangry3", "hangry2", "hangry1", "hangry2"], REACTION_MS);

// One "va-et-vient" = one full bounce through all 4 frames and back
// (1->2->3->4->3->2->1), like a head bobbing with laughter. Repeating
// units share their boundary frame (each repeat after the first starts at
// frame 2, since the previous one already ended on frame 1) so the loop
// doesn't visibly pause on a duplicated frame at each seam.
const FUNNY_UNIT: Pose[] = ["funny1", "funny2", "funny3", "funny4", "funny3", "funny2", "funny1"];
function buildFunnySequence(bounces: number): Frame[] {
  const seq = [...FUNNY_UNIT];
  for (let i = 1; i < bounces; i++) seq.push(...FUNNY_UNIT.slice(1));
  return uniform(seq, FUNNY_MS);
}
const FUNNY_SEQUENCE = buildFunnySequence(6);

// Every sequence starts and ends on "normal" (the trailing one added at
// play time, not listed here) so the loop always rests on the same
// neutral frame between idle animations, whatever it just played.
const SEQUENCES: Frame[][] = [
  SUSPICIOUS_SEQUENCE,
  LEFT_RIGHT_SEQUENCE,
  TOP_BOTTOM_SEQUENCE,
  uniform(["wink"], WINK_MS),
  HANGRY_SEQUENCE,
  FUNNY_SEQUENCE,
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

    const playFrame = (seq: Frame[], i: number) => {
      if (i >= seq.length) {
        setPose("normal");
        scheduleNextIdle();
        return;
      }
      setPose(seq[i].pose);
      schedule(() => playFrame(seq, i + 1), seq[i].ms);
    };

    scheduleNextIdle();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <img src={POSE_SRC[pose]} alt={alt} style={{ width: "100%", height: "100%" }} />;
}
