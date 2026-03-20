import { ScaledSection } from "../components/ScaledSection";
import { useTranslation } from "../components/LanguageContext";
import { useIsMobile } from "../components/useIsMobile";
import { ProjectPageWrapper } from "../components/ProjectPageWrapper";
import { Tag } from "../components/Tag";
import { ContentCard } from "../components/ContentCard";
import { HeroStatsCard } from "../components/HeroStatsCard";
import { SectionHeader } from "../components/SectionHeader";
import { LearningsSection } from "../components/LearningsSection";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { HeroPhoneCarousel } from "../components/HeroPhoneCarousel";
import { AnimatedMouseCursor } from "../components/AnimatedMouseCursor";
import { ProjectNavigation } from "../components/ProjectNavigation";
import { ContextSection } from "../components/ContextSection";

// Timeline images
import imgPriceSensibilityMobile from "@/assets/dc6ee1bfdf23a92bf7600d11316969bca0b66dea.png";
import imgPriceSensibilityDesktop from "@/assets/a87641c26b355f8eb3b0d2ee21837f4876f54fc4.png";
import imgAcceptanceDesktop from "@/assets/a8b6053946f629022e134fe46fa66f582a6a36cb.png";
import imgAcceptanceMobile from "@/assets/4a319af4da30f34269a20e91b709e6b2d8cc5e4d.png";
import imgShapeMind from "@/assets/9266f5273d04579f2e153f47053fa924a782b161.png";
import imgFastTrack from "@/assets/9e14cc9bcd4ce1150f063e079f11058e9d413e7c.png";

/* ── Timeline sub-components ──────────────────────────── */

function TimelineDot({ type }: { type: string }) {
  return (
    <div
      className="rounded-full shrink-0 z-10"
      style={{
        width: 14,
        height: 14,
        border: `2px solid ${type === "alert" ? "var(--color-qare-800)" : "var(--color-qare-text)"}`,
        backgroundColor: "transparent",
      }}
    />
  );
}

function TimelineEvent({
  event,
  isLast,
  image,
}: {
  event: { date: string; title: string; description: string; type: string };
  isLast: boolean;
  image?: string;
}) {
  return (
    <div className="flex gap-[20px] md:gap-[27px] relative">
      <div className="flex flex-col items-center shrink-0 w-[20px]">
        <TimelineDot type={event.type} />
        {!isLast && (
          <div
            className="flex-1 w-[2px]"
            style={{ backgroundColor: "var(--color-qare-800)", minHeight: 40 }}
          />
        )}
      </div>
      <div className="flex-1 pb-[40px] md:pb-[56px]">
        <p className="font-['Aeonik:Regular',sans-serif] text-[13px] md:text-[20px] tracking-[3px] md:tracking-[4px] uppercase text-[var(--color-qare-brand)] mb-[6px] md:mb-[8px]">
          {event.date}
        </p>
        <h3 className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-ink)] text-[18px] md:text-[24px] leading-[26px] md:leading-[30px] mb-[8px]">
          {event.title}
        </h3>
        <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] md:text-[20px] leading-[22px] md:leading-[28px]">
          {event.description}
        </p>
        {image && (
          <div className="mt-[16px] rounded-[16px] overflow-hidden">
            <img loading="lazy" src={image} alt={event.title} className="w-full h-auto object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════════ */
export default function ProjectMonetization() {
  const isMobile = useIsMobile();
  const cs = useTranslation("case_study_monetisation") as any;

  const topPad = isMobile ? 120 : 169;
  const SECTION_GAP = isMobile ? 80 : 180;

  const timelineImages: Record<number, string> = {
    0: isMobile ? imgPriceSensibilityMobile : imgPriceSensibilityDesktop,
    3: isMobile ? imgAcceptanceMobile : imgAcceptanceDesktop,
    4: imgShapeMind,
    6: imgFastTrack,
  };

  const renderTimeline = () => {
    const events = cs.timeline.events as {
      date: string;
      title: string;
      description: string;
      type: string;
    }[];
    return (
      <div className="flex flex-col">
        {events.map((event, i) => (
          <TimelineEvent
            key={i}
            event={event}
            isLast={i === events.length - 1}
            image={timelineImages[i]}
          />
        ))}
      </div>
    );
  };

  return (
    <ProjectPageWrapper>
      {/* ── HERO ──────────────────────────────────────── */}
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: topPad }}>
          <div className="flex flex-col gap-[20px]">
            <div
              className="relative flex justify-center w-full"
              style={{ marginTop: -40, marginBottom: -60 }}
            >
              <HeroPhoneCarousel mobile />
              <AnimatedMouseCursor
                size={36}
                style={{ position: "absolute", bottom: 250, right: "calc(8% + 140px)", zIndex: 10 }}
              />
            </div>
            <div className="flex flex-wrap gap-[10px] justify-center">
              <Tag>{cs.meta.tag1}</Tag>
              <Tag>{cs.meta.tag2}</Tag>
              <Tag>{cs.meta.period}</Tag>
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
          <div className="flex items-end justify-between mt-[-180px]">
            <div className="flex flex-col gap-[64px] items-start w-[550px] relative">
              <div className="flex flex-col gap-[24px] items-start">
                <div className="flex gap-[16px] items-center">
                  <Tag>{cs.meta.tag1}</Tag>
                  <Tag>{cs.meta.tag2}</Tag>
                  <Tag>{cs.meta.period}</Tag>
                </div>
                <h1 className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] tracking-[15px] uppercase w-[547px] text-[40px] pl-[8px]">
                  {cs.hero.title}
                </h1>
                <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] text-[28px] whitespace-pre-wrap pl-[8px]">
                  {cs.hero.subtitle}
                </p>
              </div>
              <HeroStatsCard stats={cs.hero_stats} />
              <AnimatedMouseCursor
                size={46}
                style={{ position: "absolute", top: "50%", right: -80, transform: "translateY(-50%)", zIndex: 10 }}
              />
            </div>
            <div className="relative" style={{ transform: "translate(-110px, 120px)" }}>
              <HeroPhoneCarousel />
            </div>
          </div>
        </ScaledSection>
      )}

      {/* ── CONTEXTE ──────────────────────────────────── */}
      <ContextSection
        translationKey="case_study_monetisation"
        topSpacing={isMobile ? SECTION_GAP : -100}
        desktopMaxWidth={800}
        useMargin
      />

      {/* ── LA PROBLEMATIQUE ──────────────────────────── */}
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP * 0.6 }}>
          <h2 className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-text)] text-[22px] leading-[28px] mb-[24px]">
            {cs.problematique.headline}
          </h2>
          <div className="flex flex-col gap-[16px]">
            {cs.problematique.paragraphs.map((p: string, i: number) => (
              <p key={i} className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <ScaledSection maxWidth={800} style={{ paddingTop: 110 }}>
          <div className="flex flex-col gap-[52px] items-start text-[var(--color-qare-text)]">
            <h2 className="font-['Aeonik:Bold',sans-serif] text-[36px] leading-[45px] w-[800px]">
              {cs.problematique.headline}
            </h2>
            <div className="font-['Aeonik:Regular',sans-serif] text-[20px] leading-[30px] w-[800px] flex flex-col gap-[24px]">
              {cs.problematique.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </ScaledSection>
      )}

      {/* ── TIMELINE ──────────────────────────────────── */}
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[8px] mb-[32px]">
            <SectionHeader label={cs.timeline.section_title} headline={cs.timeline.headline} mobile />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] leading-[22px] mt-[4px]">
              {cs.timeline.subtitle}
            </p>
          </div>
          {renderTimeline()}
        </div>
      ) : (
        <ScaledSection maxWidth={800} style={{ paddingTop: SECTION_GAP }}>
          <div className="flex flex-col gap-[8px] mb-[71px]">
            <SectionHeader label={cs.timeline.section_title} headline={cs.timeline.headline} />
            <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[30px] w-[594px] mt-[4px] text-[20px]">
              {cs.timeline.subtitle}
            </p>
          </div>
          {renderTimeline()}
        </ScaledSection>
      )}

      {/* ── METHODS ───────────────────────────────────── */}
      {isMobile ? (
        <div className="relative z-10 px-[24px]" style={{ paddingTop: SECTION_GAP }}>
          <div className="mb-[24px]">
            <SectionHeader label={cs.methods.section_title} headline={cs.methods.headline} mobile />
          </div>
          <div className="flex flex-col gap-[24px]">
            {cs.methods.cards.map((card: { title: string; text: string }, i: number) => (
              <ContentCard key={i} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ backgroundColor: "var(--color-qare-050)", marginTop: SECTION_GAP }}>
          <ScaledSection maxWidth={800} style={{ paddingTop: 56, paddingBottom: 56 }}>
            <div className="flex flex-col gap-[52px] items-start w-[800px]">
              <SectionHeader label={cs.methods.section_title} headline={cs.methods.headline} />
              <div className="flex gap-[40px] items-start w-full">
                {cs.methods.cards.map((card: { title: string; text: string }, i: number) => (
                  <ContentCard key={i} title={card.title} text={card.text} />
                ))}
              </div>
            </div>
          </ScaledSection>
        </div>
      )}

      {/* ── LEARNINGS ─────────────────────────────────── */}
      <LearningsSection
        sectionTitle={cs.learnings.section_title}
        headline={cs.learnings.headline}
        workedTitle={cs.learnings.worked_title}
        worked={cs.learnings.worked}
        failedTitle={cs.learnings.failed_title}
        failed={cs.learnings.failed}
        sectionGap={SECTION_GAP}
      />

      {/* ── Navigation projet ─────────────────────────── */}
      <ResponsiveSection
        maxWidth={950}
        style={{ paddingTop: SECTION_GAP, paddingBottom: isMobile ? 60 : 300 }}
        mobile={<ProjectNavigation currentSlug="health-monetization" />}
        desktop={<ProjectNavigation currentSlug="health-monetization" />}
      />
    </ProjectPageWrapper>
  );
}