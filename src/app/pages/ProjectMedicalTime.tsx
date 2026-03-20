import { useIsMobile } from "../components/useIsMobile";
import { useDesignScale } from "../components/useDesignScale";
import { ProjectPageWrapper } from "../components/ProjectPageWrapper";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { ScaledSection } from "../components/ScaledSection";
import {
  HeroTempsMedical,
  ChallengeTempsMedical,
  MonRoleTempsMedical,
  DiscoveryTempsMedical,
  ApprochDesignTempsMedical,
  IterationTempsMedical,
  LearningsTempsMedical,
} from "../components/TempsMedical";
import { ProjectNavigation } from "../components/ProjectNavigation";
import { ContextSection } from "../components/ContextSection";
import { ChallengesNextSteps } from "../components/ChallengesNextSteps";
import { useTranslation } from "../components/LanguageContext";
import { LazySection } from "../components/LazySection";

const CONTENT_WIDTH = 950;

export default function ProjectMedicalTime() {
  const s = useDesignScale();
  const isMobile = useIsMobile();
  const cs = useTranslation("case_study_medical_time") as any;

  const HERO_PAD_TOP = isMobile ? 100 : Math.round(180 * s);
  const SECTION_GAP = isMobile ? 64 : Math.round(160 * s);

  return (
    <ProjectPageWrapper scale={s}>
      {/* 1. Hero */}
      <div className="relative z-10">
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ paddingTop: HERO_PAD_TOP }}
          mobile={<HeroTempsMedical />}
          desktop={<HeroTempsMedical />}
        />
      </div>

      {/* 1b. Contexte */}
      <LazySection>
        <ContextSection
          translationKey="case_study_medical_time"
          topSpacing={isMobile ? 60 : SECTION_GAP}
        />
      </LazySection>

      {/* 2. Le Challenge */}
      <LazySection>
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ marginTop: SECTION_GAP }}
          mobile={<ChallengeTempsMedical />}
          desktop={<ChallengeTempsMedical />}
        />
      </LazySection>

      {/* 3. Mon Role */}
      <LazySection>
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ marginTop: SECTION_GAP }}
          mobile={<MonRoleTempsMedical />}
          desktop={<MonRoleTempsMedical />}
        />
      </LazySection>

      {/* 4. Discovery */}
      <LazySection>
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ marginTop: SECTION_GAP }}
          mobile={<DiscoveryTempsMedical />}
          desktop={<DiscoveryTempsMedical />}
        />
      </LazySection>

      {/* 4b. Challenges */}
      <LazySection>
        <ChallengesNextSteps
          data={cs.challenges}
          sectionGap={SECTION_GAP}
          maxWidth={CONTENT_WIDTH}
        />
      </LazySection>

      {/* 5. L'Approche Design */}
      <LazySection>
        <div
          className="bg-[var(--color-qare-050)] w-full"
          style={{
            marginTop: SECTION_GAP,
            paddingTop: isMobile ? 32 : Math.round(50 * s),
            paddingBottom: isMobile ? 32 : Math.round(50 * s),
          }}
        >
          <ScaledSection maxWidth={CONTENT_WIDTH}>
            <ApprochDesignTempsMedical />
          </ScaledSection>
        </div>
      </LazySection>

      {/* 6. Iteration */}
      <LazySection>
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ marginTop: SECTION_GAP }}
          mobile={<IterationTempsMedical />}
          desktop={<IterationTempsMedical />}
        />
      </LazySection>

      {/* 7. Learnings */}
      <LazySection>
        <ResponsiveSection
          maxWidth={CONTENT_WIDTH}
          style={{ marginTop: SECTION_GAP }}
          mobile={<LearningsTempsMedical />}
          desktop={<LearningsTempsMedical />}
        />
      </LazySection>

      {/* 7b. Next steps */}
      <LazySection>
        <ChallengesNextSteps
          data={cs.next_steps}
          sectionGap={SECTION_GAP}
          maxWidth={CONTENT_WIDTH}
        />
      </LazySection>

      {/* ── Navigation projet ──────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{
          paddingBottom: isMobile ? 60 : 180,
          marginTop: SECTION_GAP,
        }}
        mobile={<ProjectNavigation currentSlug="medical-time" />}
        desktop={<ProjectNavigation currentSlug="medical-time" />}
      />
    </ProjectPageWrapper>
  );
}
