import { useEffect, useRef, useState } from "react";
import { useTranslation } from "./LanguageContext";

/* ── Timeline dot ── */
function TimelineDot({
  isFirst = false,
}: {
  isFirst?: boolean;
}) {
  return (
    <div className="flex flex-col items-center shrink-0 self-stretch">
      {/* Top line */}
      <div
        className="w-[2px] shrink-0"
        style={{
          height: 16,
          background: isFirst ? "transparent" : "var(--color-qare-text)",
        }}
      />
      {/* Dot */}
      <div className="w-[14px] h-[14px] rounded-full border-[2px] border-[var(--color-qare-text)] shrink-0" />
      {/* Bottom line */}
      <div className="w-[2px] flex-1 bg-[var(--color-qare-text)]" />
    </div>
  );
}

/* ── Accordion toggle icon ── */
/* Même animation que le desktop, transposée des keyframes Figma : les deux
   barres tournent ensemble de -180° (300 ms ease-in-out) et seule la barre
   verticale s'efface, en pleine rotation. La barre horizontale reste opaque
   en permanence, donc jamais de blanc qui filtre entre les deux états.
   Proportions reprises des anciens SVG : barre = 52,4% du cercle en longueur,
   10% en épaisseur. */
const ICON_SWAP_MS = 300;
const ICON_SIZE = 28;
const BAR_LEN = ICON_SIZE * 0.524;
const BAR_THICK = ICON_SIZE * 0.1;

function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  const prevOpen = useRef(isOpen);
  const [direction, setDirection] = useState<"opening" | "closing" | null>(null);

  // Comparaison pendant le rendu (pas dans un effet) : la classe d'animation
  // est posée dès le premier rendu qui suit le tap, sans rendu intermédiaire
  // figé sur l'état final qui provoquerait un flash.
  if (prevOpen.current !== isOpen) {
    prevOpen.current = isOpen;
    setDirection(isOpen ? "opening" : "closing");
  }

  useEffect(() => {
    if (direction === null) return;
    const t = setTimeout(() => setDirection(null), ICON_SWAP_MS);
    return () => clearTimeout(t);
  }, [direction]);

  const rotorAnim =
    direction === "opening" ? "animate-[icon-rotor-out_300ms_ease-in-out_forwards]"
    : direction === "closing" ? "animate-[icon-rotor-in_300ms_ease-in-out_forwards]"
    : "";
  const vBarAnim =
    direction === "opening" ? "animate-[icon-vbar-out_120ms_ease-in-out_120ms_both]"
    : direction === "closing" ? "animate-[icon-vbar-in_120ms_ease-in-out_60ms_both]"
    : "";

  return (
    <div className="w-[28px] h-[28px] shrink-0 relative">
      <div className="absolute inset-0 rounded-full bg-[var(--color-qare-text)]" />
      {/* Rotor — porte la rotation commune aux deux barres */}
      <div
        className={`absolute inset-0 ${rotorAnim}`}
        style={direction ? undefined : { transform: `rotate(${isOpen ? -180 : 0}deg)` }}
      >
        {/* Barre horizontale — devient le "−", jamais de fondu */}
        <div
          className="absolute top-1/2 left-1/2 rounded-full bg-white"
          style={{ width: BAR_LEN, height: BAR_THICK, transform: "translate(-50%, -50%)" }}
        />
        {/* Barre verticale — complète le "+", s'efface en pleine rotation */}
        <div
          className={`absolute top-1/2 left-1/2 rounded-full bg-white ${vBarAnim}`}
          style={{
            width: BAR_LEN,
            height: BAR_THICK,
            transform: "translate(-50%, -50%) rotate(90deg)",
            ...(direction ? undefined : { opacity: isOpen ? 0 : 1 }),
          }}
        />
      </div>
    </div>
  );
}

/* ── Repli/dépli animé (voir Frame1000002861.tsx pour le détail) ── */
function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className="grid w-full transition-[grid-template-rows] duration-300 ease-in-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      aria-hidden={!open}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className="pt-[12px]"
          style={{
            opacity: open ? 1 : 0,
            transition: open ? "opacity 200ms ease-out 100ms" : "opacity 150ms ease-in",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Experience accordion entry ── */
function ExperienceEntry({
  title,
  role,
  period,
  description,
  highlights,
  isOpen,
  onToggle,
  isFirst,
}: {
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}) {
  return (
    <div className="flex gap-[16px] items-stretch w-full">
      <TimelineDot isFirst={isFirst} />
      <div className="flex-1 min-w-0 pb-[20px]">
        <div
          role="button"
          tabIndex={0}
          className="flex items-center justify-between gap-[8px] w-full cursor-pointer text-left select-none"
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
          style={{
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          <div className="flex flex-col gap-[4px] min-w-0 flex-1">
            <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-800)] text-[20px]">
              {title}
            </p>
            <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[2px]">
              <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-brand)] text-[12px] tracking-[2.5px] uppercase">
                {role}
              </p>
              <div className="bg-[var(--color-qare-150)] h-[14px] w-[2px] shrink-0" />
              <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-brand)] text-[12px] tracking-[2.5px] uppercase">
                {period}
              </p>
            </div>
          </div>
          <ToggleIcon isOpen={isOpen} />
        </div>
        <Collapsible open={isOpen}>
          <div className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[14px] leading-[20px]">
            <p>{description}</p>
            <ul className="list-disc pl-[24px] mt-[8px] flex flex-col gap-[2px]">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

/* ── Education entry ── */
function EducationEntry({
  school,
  period,
  description,
  isFirst,
  isLast,
}: {
  school: string;
  period: string;
  description: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-[16px] items-stretch w-full">
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0 self-stretch">
        <div
          className="w-[2px] shrink-0"
          style={{
            height: 16,
            background: isFirst ? "transparent" : "var(--color-qare-text)",
          }}
        />
        <div className="w-[14px] h-[14px] rounded-full border-[2px] border-[var(--color-qare-text)] shrink-0" />
        {!isLast && (
          <div className="w-[2px] flex-1 bg-[var(--color-qare-text)]" />
        )}
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 pb-[20px]">
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[20px]">
          {school}
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-brand)] text-[12px] tracking-[2.5px] uppercase mt-[4px]">
          {period}
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[14px] leading-[20px] mt-[4px]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ── Main component ── */
export function ExperienceMobile() {
  const [openItems, setOpenItems] = useState<
    Record<string, boolean>
  >({});
  const exp = useTranslation("experience");
  const edu = useTranslation("education");
  const langs = useTranslation("languages_section");

  const toggle = (key: string) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex flex-col gap-[60px] w-full px-[24px]">
      {/* ── Experience ── */}
      <div className="flex flex-col gap-[24px] w-full">
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[24px] min-[450px]:text-[30px] tracking-[8px] uppercase">
          {exp.section_title}
        </p>
        <div className="flex flex-col w-full">
          {exp.items.map((item, i) => (
            <ExperienceEntry
              key={item.company}
              title={item.company}
              role={item.role}
              period={item.period}
              description={item.description}
              highlights={item.highlights}
              isOpen={!!openItems[item.company]}
              onToggle={() => toggle(item.company)}
              isFirst={i === 0}
            />
          ))}
          {/* LinkedIn link — integrated into timeline */}
          <div className="flex gap-[16px] items-stretch w-full">
            {/* Timeline connector */}
            <div className="flex flex-col items-center shrink-0 self-stretch">
              <div
                className="w-[2px] shrink-0"
                style={{ height: 16, background: "var(--color-qare-text)" }}
              />
              <div
                className="rounded-full shrink-0 flex items-center justify-center"
                style={{ width: 14, height: 14, border: "2px solid var(--color-qare-text)", backgroundColor: "transparent" }}
              >
                <div className="rounded-full shrink-0" style={{ width: 6, height: 6, backgroundColor: "#7D6CCC" }} />
              </div>
            </div>
            {/* Link */}
            <div
              className="flex-1 min-w-0 flex items-center"
              style={{ minHeight: 48 }}
            >
              <a
                href="https://www.linkedin.com/in/romain-fleury/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-brand)] text-[14px] underline decoration-solid"
              >
                {exp.linkedin_cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Education ── */}
      <div className="flex flex-col gap-[24px] w-full">
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[24px] min-[450px]:text-[30px] tracking-[8px] uppercase">
          {edu.section_title}
        </p>
        <div className="flex flex-col w-full">
          {edu.items.map((item, i) => (
            <EducationEntry
              key={item.school}
              school={item.school}
              period={item.period}
              description={item.degree}
              isFirst={i === 0}
              isLast={i === edu.items.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Languages ── */}
      <div className="flex flex-col gap-[24px] w-full">
        <p className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[24px] min-[450px]:text-[30px] tracking-[8px] uppercase">
          {langs.section_title}
        </p>
        <div className="flex flex-col gap-[16px]">
          {langs.items.map((l) => (
            <p
              key={l.language}
              className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[17px] leading-[24px]"
            >
              <span className="font-['Aeonik:Bold',sans-serif]">
                {l.language}
              </span>
              {` - ${l.level}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
