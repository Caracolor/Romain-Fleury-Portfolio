import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgMind from "@/assets/d6920b25d0dacb652a7f15f95d1fa9fc65e4be75.png";
import imgShape1 from "@/assets/df79892ff413427f060d32c68e012fe91c5915f1.png";
import imgMonRole from "@/assets/f8e2e46d3dfe67538f50f1b78a004a8a3e250bd6.png";
import imgNavigation from "@/assets/a07a6d726bebe0040766453e49c540e024a24462.png";
import imgSystem from "@/assets/f629ac87b5e08989098c25c5aea7b7440d75ed78.png";
import imgAcquisition from "@/assets/c431e7c9e80c1d2c40ee9ceef75c1ed1dbfd42a6.png";
import { StatsCard } from "./StatsCard";
import svgPathsNew from "../../imports/svg-a7p7sqn3p1";
import { useTranslation } from "./LanguageContext";

/* ═══════════════════════════════════════════════════════════════
   1. HERO MOBILE
   ═══════════════════════════════════════════════════════════════ */

function TagPill({ text }: { text: string }) {
  return (
    <div className="bg-[var(--color-qare-white)] relative inline-flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-[var(--color-qare-030)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[13px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

export function HeroMobileChronic() {
  const cs = useTranslation("case_study_chronic_programs");

  return (
    <div className="flex flex-col items-center gap-[32px] w-full px-[20px]">
      {/* App screenshots */}
      <div className="relative w-full flex justify-center" style={{ height: "clamp(280px, 55vw, 400px)" }}>
        {/* Animated mouse cursor */}
        <div className="absolute z-20" style={{ right: "40px", top: "30%", width: "clamp(28px, 7vw, 40px)", height: "clamp(34px, 8.5vw, 48px)" }}>
          <div className="rotate-[-42.82deg] w-full h-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6236 46.128" overflow="visible">
              <path d="M14.3999 5.4889C16.1172 0.972825 22.5068 0.972749 24.2241 5.4889L36.1596 36.8834C37.8072 41.2169 33.4448 45.4053 29.1821 43.5827L19.7251 39.5377C19.4613 39.425 19.1627 39.4251 18.8989 39.5377L9.44185 43.5827C5.17911 45.4056 0.815826 41.217 2.46334 36.8834L14.3999 5.4889Z" fill="var(--color-qare-brand)" stroke="white" strokeWidth="4.20391">
                <animateTransform attributeName="transform" type="translate" values="0,0; 8,-6; 13,2; 5,11; -7,9; -11,0; -5,-9; 7,-11; 0,0" keyTimes="0; 0.13; 0.27; 0.42; 0.56; 0.7; 0.82; 0.92; 1" dur="9s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
              </path>
            </svg>
          </div>
        </div>

        <div className="absolute" style={{ width: "clamp(180px, 40vw, 260px)", left: "10%", top: 0, animation: "float-a 5s ease-in-out infinite" }}>
          <img loading="lazy" src={imgMind} alt="Mind program" className="w-full h-auto rounded-[16px]" />
        </div>
        <div className="absolute" style={{ width: "clamp(200px, 44vw, 300px)", right: "5%", top: "15%", animation: "float-b 6s ease-in-out infinite", animationDelay: "1.2s" }}>
          <img loading="lazy" src={imgShape1} alt="Shape program" className="w-full h-auto" />
        </div>

        {/* Floating badges */}
        <div className="absolute bg-[#fef4ef] flex gap-[6px] items-center px-[8px] py-[5px] rounded-[14px] z-10" style={{ right: "8%", bottom: "5%" }}>
          <div aria-hidden="true" className="absolute border-[#f59260] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" style={{ boxShadow: "6px 7px 20px 0px rgba(188,193,220,0.37)" }} />
          <span className="text-[12px]">{cs.programs[0].emoji}</span>
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[12px]">
            <span className="font-['Aeonik:Bold',sans-serif]">{cs.programs[0].name}</span> - {cs.programs[0].detail}
          </p>
        </div>
        <div className="absolute bg-[#feedf8] flex gap-[6px] items-center px-[8px] py-[5px] rounded-[14px] z-10" style={{ left: "5%", top: "5%" }}>
          <div aria-hidden="true" className="absolute border-[#e152a4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" style={{ boxShadow: "6px 7px 20px 0px rgba(222,172,204,0.37)" }} />
          <span className="text-[12px]">{cs.programs[1].emoji}</span>
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[12px]">
            <span className="font-['Aeonik:Bold',sans-serif]">{cs.programs[1].name}</span> - {cs.programs[1].detail}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-a { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float-b { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
      `}</style>

      {/* Tags */}
      <div className="flex flex-wrap gap-[8px] justify-center">
        <TagPill text={cs.meta.tag} />
        <TagPill text={cs.meta.team} />
        <TagPill text={cs.meta.duration} />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center gap-[16px] text-center">
        <h1 className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[36px] tracking-[10px] uppercase">
          {cs.hero.title}
        </h1>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[20px]">
          {cs.hero.subtitle}
        </p>
      </div>

      {/* Stats card */}
      <StatsCard items={cs.hero_stats} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. LE CHALLENGE — MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function ChallengeCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-qare-white)] relative rounded-[20px] p-[20px] flex flex-col gap-[12px] w-full">
      <div aria-hidden="true" className="absolute border-[4px] border-[#deddf8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[22px]">{title}</p>
      <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] not-italic text-[var(--color-qare-text)] text-[15px]">{children}</div>
    </div>
  );
}

export function ChallengeMobile() {
  const cs = useTranslation("case_study_chronic_programs");
  const ch = cs.challenge;

  return (
    <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{ch.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[22px]">{ch.headline}</h2>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        <ChallengeCard title={ch.problem_title}><p>{ch.problem_text}</p></ChallengeCard>
        <ChallengeCard title={ch.opportunities_title}>
          <p className="mb-[8px]">{ch.opportunities[0]}</p>
          <p>{ch.opportunities[1]}</p>
        </ChallengeCard>
        <ChallengeCard title={ch.constraint_title}><p>{ch.constraint_text}</p></ChallengeCard>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. MON RÔLE — MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function MonRoleMobile() {
  const cs = useTranslation("case_study_chronic_programs");
  const role = cs.role;

  return (
    <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{role.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[22px]">{role.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px]">{role.description}</p>
      </div>
      <div className="w-full flex justify-center">
        <img loading="lazy" src={imgMonRole} alt="Shape mobile landing page" className="w-[75%] max-w-[320px] h-auto rounded-[16px]" />
      </div>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[13px] text-center w-full">{role.illustration_caption}</p>
      <div className="flex flex-col gap-[16px] w-full">
        {role.pillars.map(({ title, text }) => (
          <div key={title} className="flex gap-[12px] items-start w-full">
            <div className="bg-[var(--color-qare-150)] rounded-[10px] shrink-0 w-[4px] self-stretch" />
            <div className="flex flex-col gap-[8px] flex-1">
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[18px] leading-[normal]">{title}</p>
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. VERBATIMS — MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function VerbatimsMobile() {
  const cs = useTranslation("case_study_chronic_programs");
  const insight = cs.insight;
  const verbatims = insight.quotes;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef(0);

  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % verbatims.length); };
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + verbatims.length) % verbatims.length); };

  return (
    <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{insight.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{insight.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px]">{insight.description}</p>
      </div>

      {/* Quote card */}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
        }}
      >
        <div className="flex items-center gap-[16px] w-full">
          <button onClick={current > 0 ? prev : undefined} disabled={current === 0} className={`shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full transition-opacity duration-300 ${current === 0 ? "opacity-20 cursor-default" : "cursor-pointer"}`} aria-label="Previous verbatim">
            <div className="overflow-clip relative shrink-0 size-[32px] rotate-180">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21px] left-1/2 top-1/2 w-[32px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7555 27.8372">
                  <path clipRule="evenodd" d="M26.607 0.509584C27.2864 -0.169861 28.388 -0.169861 29.0675 0.509584L41.2455 12.6876C41.2455 12.6876 41.2463 12.6884 40.016 13.9186L41.2455 12.6876C41.925 13.3671 41.9257 14.4694 41.2463 15.1489L29.0675 27.3277C28.388 28.0071 27.2864 28.0071 26.607 27.3277C25.9276 26.6482 25.9276 25.5466 26.607 24.8672L35.8157 15.6584H1.73983C0.778947 15.6584 0 14.8795 0 13.9186C0 12.9577 0.778947 12.1788 1.73983 12.1788H35.8157L26.607 2.97007C25.9276 2.29063 25.9276 1.18903 26.607 0.509584Z" fill="#212121" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>

          <div className="flex-1 min-w-0 relative rounded-[20px] p-[24px] min-h-[160px] overflow-hidden">
            <div className="absolute left-[14px] top-[14px] h-[38px] w-[50px] mix-blend-multiply select-none pointer-events-none z-[0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 76">
                <g style={{ mixBlendMode: "multiply" }}>
                  <path d="M24.8428 76C17.2956 76 11.2159 72.9389 6.60377 66.8167C2.20126 60.4833 0 52.7778 0 43.7C0 30.1889 3.87841 19.6333 11.6352 12.0333C19.6017 4.43333 30.5031 0.422217 44.3396 0V14.8833C35.1153 15.0944 28.4067 17.7333 24.2138 22.8C20.021 27.8667 17.9245 33.6722 17.9245 40.2167C17.9245 42.1167 18.0293 43.4889 18.239 44.3333C20.7547 41.8 24.3187 40.5333 28.9308 40.5333C33.9623 40.5333 37.9455 42.0111 40.8805 44.9667C44.0252 47.9222 45.5975 52.1444 45.5975 57.6333C45.5975 62.9111 43.7107 67.3444 39.9371 70.9333C36.3732 74.3111 31.3417 76 24.8428 76ZM79.2453 76C71.6981 76 65.6184 72.9389 61.0063 66.8167C56.6038 60.4833 54.4025 52.7778 54.4025 43.7C54.4025 30.1889 58.2809 19.6333 66.0377 12.0333C74.0042 4.43333 84.9057 0.422217 98.7421 0V14.8833C89.5178 15.0944 82.8092 17.7333 78.6163 22.8C74.4235 27.8667 72.327 33.6722 72.327 40.2167C72.327 42.1167 72.4319 43.4889 72.6415 44.3333C75.1572 41.8 78.7212 40.5333 83.3333 40.5333C88.3648 40.5333 92.348 42.0111 95.283 44.9667C98.4277 47.9222 100 52.1444 100 57.6333C100 62.9111 98.1132 67.3444 94.3396 70.9333C90.7757 74.3111 85.7442 76 79.2453 76Z" fill="#F8F3FF" />
                </g>
              </svg>
            </div>
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
                className="relative z-[1]"
              >
                <p className="font-['Aeonik:Regular',sans-serif] italic leading-[26px] text-[var(--color-qare-brand)] text-[18px] mb-[12px] relative">{verbatims[current].text}</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[13px] relative">{verbatims[current].source}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={current < verbatims.length - 1 ? next : undefined} disabled={current === verbatims.length - 1} className={`shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full transition-opacity duration-300 ${current === verbatims.length - 1 ? "opacity-20 cursor-default" : "cursor-pointer"}`} aria-label="Next verbatim">
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21px] left-1/2 top-1/2 w-[32px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7555 27.8372">
                  <path clipRule="evenodd" d="M26.607 0.509584C27.2864 -0.169861 28.388 -0.169861 29.0675 0.509584L41.2455 12.6876C41.2455 12.6876 41.2463 12.6884 40.016 13.9186L41.2455 12.6876C41.925 13.3671 41.9257 14.4694 41.2463 15.1489L29.0675 27.3277C28.388 28.0071 27.2864 28.0071 26.607 27.3277C25.9276 26.6482 25.9276 25.5466 26.607 24.8672L35.8157 15.6584H1.73983C0.778947 15.6584 0 14.8795 0 13.9186C0 12.9577 0.778947 12.1788 1.73983 12.1788H35.8157L26.607 2.97007C25.9276 2.29063 25.9276 1.18903 26.607 0.509584Z" fill="#212121" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-[8px] mt-[16px]">
          {verbatims.map((_, i) => (
            <button key={i} aria-label={`Verbatim ${i + 1}`} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`rounded-full transition-all duration-300 ${i === current ? "w-[24px] h-[8px] bg-[var(--color-qare-brand)]" : "size-[8px] bg-[var(--color-qare-150)]"}`} />
          ))}
        </div>
      </div>

      {/* Insight card */}
      <div className="bg-[var(--color-qare-050)] relative rounded-[20px] w-full p-[20px]">
        <div aria-hidden="true" className="absolute border-4 border-[var(--color-qare-300)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex gap-[16px] items-start">
          <div className="bg-[var(--color-qare-100)] rounded-[16px] size-[48px] shrink-0 flex items-center justify-center text-[24px]">
            <svg width="24" height="18" fill="none" viewBox="0 0 31.0789 23.8336">
              <g id="vector">
                <path clipRule="evenodd" d={svgPathsNew.p27285580} fill="var(--color-qare-brand)" fillRule="evenodd" />
                <path d={svgPathsNew.p18b1c700} fill="var(--color-qare-brand)" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col gap-[6px] flex-1">
            <p className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-text)] text-[16px] leading-[normal]">{insight.pluridisciplinary_title}</p>
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] leading-[20px]">{insight.pluridisciplinary_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. L'APPROCHE DESIGN — MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function ApprocheMobile() {
  const cs = useTranslation("case_study_chronic_programs");
  const da = cs.design_approach;
  const [active, setActive] = useState<string>("nav");

  const cardImages = [imgNavigation, imgSystem, imgAcquisition];
  const cardKeys = ["nav", "system", "acquisition"];

  return (
    <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{da.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{da.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px]">{da.description}</p>
      </div>

      <div className="flex flex-col gap-[12px] w-full">
        {da.pillars.map((card, i) => {
          const key = cardKeys[i];
          const isOpen = active === key;
          return (
            <div key={key} className="w-full">
              <button
                onClick={() => setActive(isOpen ? "" : key)}
                className="bg-[var(--color-qare-white)] relative rounded-[16px] w-full p-[16px] flex gap-[12px] items-center cursor-pointer text-left"
              >
                <div aria-hidden="true" className={`absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-300 ${isOpen ? "border-[var(--color-qare-300)]" : "border-[var(--color-qare-150)]"}`} />
                <span className="text-[28px] shrink-0">{card.emoji}</span>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[20px] not-italic text-[var(--color-qare-text)] text-[15px] flex-1">{card.text}</p>
                <svg className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-qare-text)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}>
                <div className="pt-[12px] flex flex-col gap-[8px] items-center">
                  <img loading="lazy" src={cardImages[i]} alt={card.text} className="w-full h-auto rounded-[12px]" />
                  {i === 0 && (
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[18px] not-italic text-[var(--color-qare-text)] text-[13px] text-center px-[8px]">
                      {da.navigation_text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
