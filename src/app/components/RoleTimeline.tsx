/** Outlined circle dot used in timeline layouts. */
export function RoleDot() {
  return (
    <div
      className="rounded-full shrink-0 z-10"
      style={{
        width: 13.6,
        height: 13.6,
        border: "2px solid var(--color-qare-text)",
        backgroundColor: "transparent",
      }}
    />
  );
}

interface RoleTimelineBlockProps {
  title: string;
  text: string;
  isFirst: boolean;
  isLast: boolean;
  /** Background color for hidden line segments (default "white") */
  hiddenLineColor?: string;
}

/** Timeline block with vertical line + dot + content. */
export function RoleTimelineBlock({
  title,
  text,
  isFirst,
  isLast,
  hiddenLineColor = "white",
}: RoleTimelineBlockProps) {
  return (
    <div className="flex gap-[24px] items-stretch relative w-full">
      {/* Line + dot */}
      <div className="flex flex-col items-center shrink-0 self-stretch">
        <div
          className="shrink-0 w-[2px]"
          style={{
            height: 10,
            backgroundColor: isFirst ? hiddenLineColor : "var(--color-qare-text)",
          }}
        />
        <RoleDot />
        <div
          className="w-[2px]"
          style={{
            flex: "1 0 0",
            minHeight: 8,
            backgroundColor: isLast ? hiddenLineColor : "var(--color-qare-text)",
          }}
        />
      </div>
      {/* Content */}
      <div
        className="flex-1 min-w-0 flex flex-col gap-[12px] text-[var(--color-qare-text)]"
        style={{ paddingBottom: isLast ? 0 : 24 }}
      >
        <p className="font-['Aeonik:Bold',sans-serif] text-[22px] md:text-[24px] leading-[28px] md:leading-[30px] w-full">
          {title}
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] text-[15px] md:text-[20px] leading-[22px] md:leading-[28px] w-full">
          {text}
        </p>
      </div>
    </div>
  );
}