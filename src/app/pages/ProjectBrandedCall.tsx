import image_2deade2a147c6a50b530c3268f88ff199de14276 from '@/assets/2deade2a147c6a50b530c3268f88ff199de14276.webp'
import { ScaledSection } from "../components/ScaledSection";
import { useTranslation } from "../components/LanguageContext";
import { useIsMobile } from "../components/useIsMobile";
import { ProjectPageWrapper } from "../components/ProjectPageWrapper";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { Tag } from "../components/Tag";
import { ContentCard } from "../components/ContentCard";
import { HeroStatsCard } from "../components/HeroStatsCard";
import { SectionHeader } from "../components/SectionHeader";
import { LearningsSection } from "../components/LearningsSection";
import { AnchoringBlock } from "../components/AnchoringBlock";
import { RoleDot, RoleTimelineBlock } from "../components/RoleTimeline";
import { AnimatedMouseCursor } from "../components/AnimatedMouseCursor";
import { ProjectNavigation } from "../components/ProjectNavigation";
import { ContextSection } from "../components/ContextSection";
import { ChallengesNextSteps } from "../components/ChallengesNextSteps";
import { LazySection } from "../components/LazySection";
import svgQuote from "../../imports/svg-eda8j0i4h7";
import imgHeroBrandedCall from "@/assets/07ce22b1b88d174a8705a3dedf40795c96815c79.webp";
import imgWaitingRoom from "@/assets/9d671a799b6c8e651bc72a1e7a229fe1eb8345cf.webp";
import imgNoShowLogic from "@/assets/c1cc6a616be8de19fe5f8895eabaddff80aea7c6.webp";
import imgTriggerLogic from "@/assets/2eeeab41dcae822d135c01c33a2caeb3acd4b7c5.webp";
import imgSketchBrandedCall from "@/assets/1ea6fd23dc5cbfb308b899ec3a13e623566b0de3.webp";
import imgRoleGrid1 from "@/assets/fc9ea84d4278e19a62dbac88dd0fc2f64597e90b.webp";
import imgRoleGrid2 from "@/assets/1ac1c00a853def5807d6bdb5f60c31c75e6f02e6.webp";
import imgRoleGrid3 from "@/assets/eb011123c8e70c165a23555a609d1067dfd55470.webp";

/* ── QuoteMark SVG ── */
function QuoteMark({ size = 100 }: { size?: number }) {
  const h = Math.round(size * 0.76);
  return (
    <svg
      className="block"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 100 76"
      style={{ width: size, height: h }}
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <path d={svgQuote.p36b9e80} fill="#F8F3FF" />
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════════ */
export default function ProjectBrandedCall() {
  const isMobile = useIsMobile();
  const cs = useTranslation("case_study_branded_call") as any;

  const topPad = isMobile ? 120 : 169;
  const SECTION_GAP = isMobile ? 80 : 180;

  return (
    <ProjectPageWrapper>
      {/* ── HERO ──────────────────────────────────────── */}
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: topPad }}>
          <div className="flex flex-col items-center gap-[20px]">
            {/* Hero image */}
            <div className="relative w-full rounded-[20px] overflow-visible" style={{ height: 320 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <img alt="" className="pointer-events-none" src={imgHeroBrandedCall} style={{ width: 260, height: 338, transform: "scale(1.1)" }} />
              </div>
              <AnimatedMouseCursor size={36} style={{ position: "absolute", bottom: 40, right: 40, zIndex: 10 }} />
            </div>
            <div className="flex flex-wrap gap-[10px] justify-center">
              <Tag>{cs.meta.tag1}</Tag>
              <Tag>{cs.meta.tag2}</Tag>
            </div>
            <h1 className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[36px] leading-[normal] tracking-[10px] uppercase text-center">
              {cs.hero.title}
            </h1>
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] text-[20px] text-center">
              {cs.hero.subtitle}
            </p>
            <HeroStatsCard stats={cs.hero_stats} mobile />
          </div>
        </div>
      ) : (
        <ScaledSection maxWidth={950} style={{ paddingTop: topPad }}>
          <div className="flex items-end justify-between pt-[90px]">
            <div className="flex flex-col gap-[64px] items-start w-[550px] relative pb-[80px]">
              <div className="flex flex-col gap-[24px] items-start">
                <div className="flex gap-[16px] items-center">
                  <Tag>{cs.meta.tag1}</Tag>
                  <Tag>{cs.meta.tag2}</Tag>
                </div>
                <h1 className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] tracking-[15px] uppercase w-[547px] text-[40px] pl-[8px]">
                  {cs.hero.title}
                </h1>
                <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] text-[28px] whitespace-pre-wrap pl-[8px]">
                  {cs.hero.subtitle}
                </p>
              </div>
              <HeroStatsCard stats={cs.hero_stats} />
              <AnimatedMouseCursor size={46} style={{ position: "absolute", top: "50%", right: -30, transform: "translateY(-50%)", zIndex: 10 }} />
            </div>
            <div className="overflow-visible relative shrink-0" style={{ width: 455, height: 591, transform: "translate(-20px, 0px)" }}>
              <img alt="" className="absolute pointer-events-none" src={imgHeroBrandedCall} style={{ width: 455, height: 591, left: 0, top: 0 }} />
            </div>
          </div>
        </ScaledSection>
      )}

      {/* ── CONTEXTE ──────────────────────────────────── */}
      <LazySection>
        <ContextSection
          translationKey="case_study_branded_call"
          topSpacing={SECTION_GAP}
          desktopMaxWidth={800}
          useMargin
        />
      </LazySection>

      {/* ── LE CHALLENGE ──────────────────────────────── */}
      <LazySection>
      {isMobile ? (
        <div className="relative z-10 px-[24px] mx-[0px] mt-[24px] mb-[0px]" style={{ paddingTop: SECTION_GAP * 0.6 }}>
          <div className="mb-[24px]">
            <SectionHeader label={cs.challenge.section_title} headline={cs.challenge.headline} mobile />
          </div>
          <div className="mb-[24px]">
            <AnchoringBlock mobile />
          </div>
          <div className="flex flex-col gap-[24px]">
            {cs.challenge.cards.map((card: { title: string; text: string }, i: number) => (
              <ContentCard key={i} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ marginTop: SECTION_GAP }}>
          <ScaledSection maxWidth={800} style={{ paddingTop: 56, paddingBottom: 56 }}>
            <div className="flex flex-col gap-[52px] items-start w-[800px]">
              <SectionHeader label={cs.challenge.section_title} headline={cs.challenge.headline} />
              <AnchoringBlock />
              <div className="flex gap-[40px] items-start w-full">
                {cs.challenge.cards.map((card: { title: string; text: string }, i: number) => (
                  <ContentCard key={i} title={card.title} text={card.text} />
                ))}
              </div>
            </div>
          </ScaledSection>
        </div>
      )}

      </LazySection>

      {/* ── INSIGHT ───────────────────────────────────── */}
      <LazySection>
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[24px]">
            <SectionHeader label={cs.insight.section_title} headline={cs.insight.headline} mobile />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px]">
              {cs.insight.text}
            </p>
            {/* Verbatims */}
            {cs.insight.verbatims && (
              <div className="flex flex-col gap-[24px]">
                {cs.insight.verbatims.map((v: { quote: string; source: string }, i: number) => (
                  <div key={i} className="flex flex-col gap-[12px] items-start relative">
                    <div className="absolute mix-blend-multiply" style={{ left: -12, top: -12 }}>
                      <QuoteMark size={70} />
                    </div>
                    <p className="font-['Times_New_Roman:Bold_Italic',sans-serif] italic leading-[normal] text-[var(--color-qare-brand)] text-[18px] relative">
                      {v.quote}
                    </p>
                    <p className="font-['Aeonik:Regular',sans-serif] text-[13px] leading-[normal] text-[var(--color-qare-text)]">
                      {v.source}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* Waiting room image */}
            <div className="flex flex-col gap-[12px] items-center w-full">
              <div className="relative w-full overflow-hidden rounded-[20px]" style={{ aspectRatio: "800/490.41" }}>
                <img loading="lazy" alt="" className="w-full h-full object-contain" src={image_2deade2a147c6a50b530c3268f88ff199de14276} />
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] text-center leading-[normal]">
                {cs.insight.image_caption}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ScaledSection maxWidth={800} style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[52px] items-start w-[800px]">
            <SectionHeader label={cs.insight.section_title} headline={cs.insight.headline} />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[20px] leading-[30px] w-[794px]">
              {cs.insight.text}
            </p>
            {/* Verbatims */}
            {cs.insight.verbatims && (
              <div className="flex gap-[52px] items-start w-full">
                {cs.insight.verbatims.map((v: { quote: string; source: string }, i: number) => (
                  <div key={i} className="flex-1 min-w-0 flex flex-col gap-[16px] items-start relative">
                    <div className="absolute mix-blend-multiply" style={{ left: -20, top: -18 }}>
                      <QuoteMark size={100} />
                    </div>
                    <p className="font-['Times_New_Roman:Bold_Italic',sans-serif] italic leading-[normal] text-[var(--color-qare-brand)] text-[30px] relative">
                      {v.quote}
                    </p>
                    <p className="font-['Aeonik:Regular',sans-serif] text-[16px] leading-[normal] text-[var(--color-qare-text)]">
                      {v.source}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* Waiting room image */}
            <div className="flex flex-col gap-[12px] items-center w-full">
              <div className="relative w-full overflow-hidden rounded-[20px]" style={{ aspectRatio: "800/490.41" }}>
                <img loading="lazy" alt="" className="w-full h-full object-contain" style={{ transform: "scale(1.07)" }} src={image_2deade2a147c6a50b530c3268f88ff199de14276} />
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] text-center leading-[normal]">
                {cs.insight.image_caption}
              </p>
            </div>
          </div>
        </ScaledSection>
      )}

      </LazySection>

      {/* ── TRIGGER LOGIC IMAGE ─────────────────────────── */}
      <LazySection>
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP * 0.6 }}>
          <div className="flex flex-col gap-[16px] items-center w-full">
            <div className="relative w-full overflow-hidden rounded-[16px]">
              <img loading="lazy" alt="" className="w-full h-auto object-cover" src={imgTriggerLogic} />
            </div>
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] text-center leading-[normal] w-full">
              {cs.design_approach.image_captions?.trigger_logic}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ marginTop: SECTION_GAP }}>
          <ScaledSection maxWidth={800} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="flex flex-col gap-[16px] items-center w-[800px]">
              <div className="relative w-[800px] overflow-hidden rounded-[16px]" style={{ aspectRatio: "800/1031" }}>
                <img loading="lazy" alt="" className="w-full h-full object-cover" src={imgTriggerLogic} />
              </div>
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[16px] text-center leading-[normal] w-[800px]">
                {cs.design_approach.image_captions?.trigger_logic}
              </p>
            </div>
          </ScaledSection>
        </div>
      )}

      </LazySection>

      {/* ── MON ROLE ──────────────────────────────────── */}
      <LazySection>
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[24px]">
            <SectionHeader label={cs.role.section_title} headline={cs.role.headline} mobile />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px]">
              {cs.role.description}
            </p>
            <div className="flex flex-col">
              {cs.role.blocks.map((block: { title: string; text: string }, i: number) => (
                <RoleTimelineBlock
                  key={i}
                  title={block.title}
                  text={block.text}
                  isFirst={i === 0}
                  isLast={i === cs.role.blocks.length - 1}
                />
              ))}
            </div>
            {/* Role images - mobile */}
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="relative w-full overflow-hidden rounded-[16px]" style={{ aspectRatio: "800/426" }}>
                <img loading="lazy" alt="Storyboard esquissé : patient sur autre app, sonnerie, retour en consultation" className="absolute w-full h-[140.79%] left-0 top-[-20.52%] object-cover" src={imgSketchBrandedCall} />
                <div className="absolute inset-0 bg-[rgba(163,144,214,0.2)] mix-blend-multiply rounded-[16px]" />
              </div>
              <div className="flex flex-col gap-[12px] w-full">
                <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "392/185" }}>
                  <img loading="lazy" alt="Comparatif iOS vs Android — 5 états de l'interface d'appel" className="absolute inset-0 w-full h-full object-cover rounded-[16px]" src={imgRoleGrid1} />
                </div>
                <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "392/185" }}>
                  <img loading="lazy" alt="MVP iOS et Android — écrans d'appel entrant Branded Call" className="absolute inset-0 w-full h-full object-cover rounded-[16px]" src={imgRoleGrid2} />
                </div>
                <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "392/300" }}>
                  <img loading="lazy" alt="Android Lot 1 — design libre avec photo praticien" className="absolute inset-0 w-full h-full object-cover rounded-[16px]" src={imgRoleGrid3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ScaledSection maxWidth={800} style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[52px] items-start w-[800px]">
            <SectionHeader label={cs.role.section_title} headline={cs.role.headline} />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[20px] leading-[28px] w-[794px]">
              {cs.role.description}
            </p>
            <div className="flex flex-col w-full">
              {cs.role.blocks.map((block: { title: string; text: string }, i: number) => (
                <RoleTimelineBlock key={i} title={block.title} text={block.text} isFirst={i === 0} isLast={i === cs.role.blocks.length - 1} />
              ))}
            </div>
            {/* Role images */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="relative w-[800px] overflow-hidden rounded-[20px]" style={{ aspectRatio: "800/426" }}>
                <img loading="lazy" alt="Storyboard esquissé : patient sur autre app, sonnerie, retour en consultation" className="absolute w-full h-[140.79%] left-0 top-[-20.52%] object-cover" src={imgSketchBrandedCall} />
                <div className="absolute inset-0 bg-[rgba(163,144,214,0.2)] mix-blend-multiply rounded-[20px]" />
              </div>
              <div className="grid grid-cols-2 gap-[16px] w-[800px]">
                <div className="relative rounded-[20px] overflow-hidden" style={{ aspectRatio: "392/185" }}>
                  <img loading="lazy" alt="Comparatif iOS vs Android — 5 états de l'interface d'appel" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" src={imgRoleGrid1} />
                </div>
                <div className="relative rounded-[20px] overflow-hidden row-span-2" style={{ height: 385 }}>
                  <img loading="lazy" alt="Android Lot 1 — design libre avec photo praticien" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" src={imgRoleGrid3} />
                </div>
                <div className="relative rounded-[20px] overflow-hidden" style={{ aspectRatio: "392/185" }}>
                  <img loading="lazy" alt="MVP iOS et Android — écrans d'appel entrant Branded Call" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" src={imgRoleGrid2} />
                </div>
              </div>
            </div>
          </div>
        </ScaledSection>
      )}

      </LazySection>

      {/* ── DESIGN APPROACH ───────────────────────────── */}
      <LazySection>
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[24px]">
            <SectionHeader label={cs.design_approach.section_title} headline={cs.design_approach.headline} mobile />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px]">
              {cs.design_approach.cards[0].text}
            </p>
            {/* No-show logic diagram */}
            <div className="flex flex-col gap-[12px] items-center w-full">
              <img loading="lazy" alt="" className="w-full h-auto object-contain rounded-[12px]" src={imgNoShowLogic} />
              <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] text-center leading-[normal]">
                {cs.design_approach.image_captions?.no_show_logic}
              </p>
            </div>
            <div className="flex flex-col">
              {cs.design_approach.cards.slice(1).map((card: { title: string; text: string }, i: number) => (
                <div key={i} className="flex gap-[16px] items-start w-full">
                  <div className="flex flex-col items-center self-stretch shrink-0">
                    <div className="shrink-0 w-[2px]" style={{ height: 10, backgroundColor: i === 0 ? "white" : "var(--color-qare-text)" }} />
                    <RoleDot />
                    <div className="w-[2px]" style={{ flex: "1 0 0", minHeight: 1, backgroundColor: i === cs.design_approach.cards.length - 2 ? "white" : "var(--color-qare-text)" }} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-[12px] text-[var(--color-qare-text)]" style={{ paddingBottom: i === cs.design_approach.cards.length - 2 ? 0 : 24 }}>
                    <p className="font-['Aeonik:Bold',sans-serif] text-[18px] leading-[28px]">{card.title}</p>
                    <p className="font-['Aeonik:Regular',sans-serif] text-[15px] leading-[22px]">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ backgroundColor: "var(--color-qare-050)", marginTop: SECTION_GAP }}>
          <ScaledSection maxWidth={800} style={{ paddingTop: 56, paddingBottom: 56 }}>
            <div className="flex flex-col gap-[52px] items-start w-[800px]">
              <SectionHeader label={cs.design_approach.section_title} headline={cs.design_approach.headline} />
              <div className="flex flex-col gap-[40px] items-start justify-center w-full">
                <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[20px] leading-[28px] w-full">
                  {cs.design_approach.cards[0].text}
                </p>
                {/* No-show logic diagram */}
                <div className="flex flex-col gap-[16px] items-start">
                  <div className="relative w-[800px] overflow-hidden rounded-[16px]" style={{ aspectRatio: "800/508" }}>
                    <img loading="lazy" alt="" className="w-full h-full object-cover" src={imgNoShowLogic} />
                  </div>
                  <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[16px] text-center leading-[normal] w-[800px]">
                    {cs.design_approach.image_captions?.no_show_logic}
                  </p>
                </div>
                <div className="flex flex-col items-start w-full">
                  {cs.design_approach.cards.slice(1).map((card: { title: string; text: string }, i: number) => (
                    <div key={i} className="flex gap-[24px] items-start w-full">
                      <div className="flex flex-col items-center self-stretch shrink-0">
                        <div className="shrink-0 w-[2px]" style={{ height: 10, backgroundColor: i === 0 ? "var(--color-qare-050)" : "var(--color-qare-text)" }} />
                        <RoleDot />
                        <div className="w-[2px]" style={{ flex: "1 0 0", minHeight: 1, backgroundColor: i === cs.design_approach.cards.length - 2 ? "var(--color-qare-050)" : "var(--color-qare-text)" }} />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-[16px] items-start pb-[40px] rounded-[30px] text-[var(--color-qare-text)]">
                        <p className="font-['Aeonik:Regular',sans-serif] text-[28px] leading-[normal] w-full">{card.title}</p>
                        <p className="font-['Aeonik:Regular',sans-serif] text-[20px] leading-[28px] w-full">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScaledSection>
        </div>
      )}

      </LazySection>

      {/* ── CHALLENGES ─────────────────────────────────── */}
      <LazySection>
        <ChallengesNextSteps
          data={cs.challenges}
          sectionGap={SECTION_GAP}
          maxWidth={800}
        />
      </LazySection>

      {/* ── LEARNINGS ─────────────────────────────────── */}
      <LazySection>
        <LearningsSection
          sectionTitle={cs.learnings.section_title}
          headline={cs.learnings.headline}
          workedTitle={cs.learnings.worked_title}
          worked={cs.learnings.worked}
          failedTitle={cs.learnings.failed_title}
          failed={cs.learnings.failed}
          sectionGap={SECTION_GAP}
        />
      </LazySection>

      {/* ── NEXT STEPS ─────────────────────────────────── */}
      <LazySection>
        <ChallengesNextSteps
          data={cs.next_steps}
          sectionGap={SECTION_GAP}
          maxWidth={800}
        />
      </LazySection>

      {/* ── Navigation projet ─────────────────────────── */}
      <ResponsiveSection
        maxWidth={800}
        style={{ paddingTop: SECTION_GAP, paddingBottom: isMobile ? 60 : 300 }}
        mobile={<ProjectNavigation currentSlug="branded-call" />}
        desktop={<ProjectNavigation currentSlug="branded-call" />}
      />
    </ProjectPageWrapper>
  );
}