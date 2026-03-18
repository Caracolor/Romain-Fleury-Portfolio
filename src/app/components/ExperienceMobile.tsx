import { useState } from "react";
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
        className="w-[4px] shrink-0"
        style={{
          height: 16,
          background: isFirst ? "transparent" : "var(--color-qare-text)",
        }}
      />
      {/* Dot */}
      <div className="w-[16px] h-[16px] rounded-full border-[3px] border-[var(--color-qare-text)] shrink-0" />
      {/* Bottom line */}
      <div className="w-[4px] flex-1 bg-[var(--color-qare-text)]" />
    </div>
  );
}

/* ── Accordion toggle icon ── */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-[28px] h-[28px] shrink-0 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox={isOpen ? "0 0 20 20" : "0 0 34.7966 34.7966"}
        fill="none"
      >
        <path
          clipRule="evenodd"
          d={
            isOpen
              ? "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM4.75737 9.99999C4.75737 9.4477 5.20509 8.99999 5.75737 8.99999H14.2427C14.7949 8.99999 15.2427 9.4477 15.2427 9.99999C15.2427 10.5523 14.7949 11 14.2427 11C10.9289 11 9.07108 11 5.75737 11C5.20509 11 4.75737 10.5523 4.75737 9.99999Z"
              : "M17.3983 34.7966C27.0071 34.7966 34.7966 27.0071 34.7966 17.3983C34.7966 7.78947 27.0071 0 17.3983 0C7.78947 0 0 7.78947 0 17.3983C0 27.0071 7.78947 34.7966 17.3983 34.7966ZM19.1381 10.0168C19.1381 9.05591 18.3592 8.27696 17.3983 8.27696C16.4374 8.27696 15.6585 9.05591 15.6585 10.0168V15.6584L10.0168 15.6584C9.05595 15.6584 8.27701 16.4374 8.27701 17.3983C8.27701 18.3591 9.05596 19.1381 10.0168 19.1381H15.6585V24.7797C15.6585 25.7406 16.4374 26.5195 17.3983 26.5195C18.3592 26.5195 19.1381 25.7406 19.1381 24.7797V19.1381H24.7798C25.7406 19.1381 26.5196 18.3591 26.5196 17.3983C26.5196 16.4374 25.7406 15.6584 24.7798 15.6584L19.1381 15.6584V10.0168Z"
          }
          fill={isOpen ? "#4D4D4D" : "var(--color-qare-text)"}
          fillRule="evenodd"
        />
      </svg>
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
        {isOpen && (
          <div className="font-['Aeonik:Regular',sans-serif] not-italic text-[var(--color-qare-text)] text-[14px] leading-[20px] mt-[12px]">
            <p>{description}</p>
            <ul className="list-disc pl-[24px] mt-[8px] flex flex-col gap-[2px]">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}
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
          className="w-[4px] shrink-0"
          style={{
            height: 16,
            background: isFirst ? "transparent" : "var(--color-qare-text)",
          }}
        />
        <div className="w-[16px] h-[16px] rounded-full border-[3px] border-[var(--color-qare-text)] shrink-0" />
        {!isLast && (
          <div className="w-[4px] flex-1 bg-[var(--color-qare-text)]" />
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
                className="w-[4px] shrink-0"
                style={{ height: 16, background: "var(--color-qare-text)" }}
              />
              <div className="w-[16px] h-[16px] shrink-0 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="12"
                    stroke="var(--color-qare-text)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="14"
                    cy="14"
                    r="5.35"
                    fill="#7D6CCC"
                  />
                </svg>
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
