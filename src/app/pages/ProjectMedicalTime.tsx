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
      <ContextSection
        translationKey="case_study_medical_time"
        topSpacing={isMobile ? 60 : SECTION_GAP}
      />

      {/* 2. Le Challenge */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<ChallengeTempsMedical />}
        desktop={<ChallengeTempsMedical />}
      />

      {/* 3. Mon Role */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<MonRoleTempsMedical />}
        desktop={<MonRoleTempsMedical />}
      />

      {/* 4. Discovery */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<DiscoveryTempsMedical />}
        desktop={<DiscoveryTempsMedical />}
      />

      {/* 4b. Challenges */}
      <ChallengesNextSteps
        data={cs.challenges}
        sectionGap={SECTION_GAP}
        maxWidth={CONTENT_WIDTH}
      />

      {/* 5. L'Approche Design */}
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

      {/* 6. Iteration */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<IterationTempsMedical />}
        desktop={<IterationTempsMedical />}
      />

      {/* 7. Learnings */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<LearningsTempsMedical />}
        desktop={<LearningsTempsMedical />}
      />

      {/* 7b. Next steps */}
      <ChallengesNextSteps
        data={cs.next_steps}
        sectionGap={SECTION_GAP}
        maxWidth={CONTENT_WIDTH}
      />

      {/* ── Navigation projet ──────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{
          paddingBottom: isMobile ? 60 : 180,
          marginTop: SECTION_GAP,
        }}
        mobile={<ProjectNavigation currentSlug="temps-medical" />}
        desktop={<ProjectNavigation currentSlug="temps-medical" />}
      />
    </ProjectPageWrapper>
  );
}
