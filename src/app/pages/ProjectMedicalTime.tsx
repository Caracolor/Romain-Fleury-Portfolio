import { ScaledSection } from "../components/ScaledSection";
import { useIsMobile } from "../components/useIsMobile";
import { useDesignScale } from "../components/useDesignScale";
import { ProjectPageWrapper } from "../components/ProjectPageWrapper";
import { ResponsiveSection } from "../components/ResponsiveSection";
import {
  HeroDesktopTempsMedical,
  ChallengeDesktop,
  MonRoleDesktop,
  DiscoveryDesktop,
  ApprochDesignDesktop,
  IterationDesktop,
  LearningsDesktop,
} from "../components/TempsMedicalDesktop";
import {
  HeroMobileAdapted,
  ChallengeMobileAdapted,
  MonRoleMobileAdapted,
  DiscoveryMobileAdapted,
  ApprochDesignMobileAdapted,
  IterationMobileAdapted,
  LearningsMobileAdapted,
} from "../components/TempsMedicalMobileAdapted";
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
          mobile={<HeroMobileAdapted />}
          desktop={<HeroDesktopTempsMedical />}
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
        mobile={<ChallengeMobileAdapted />}
        desktop={<ChallengeDesktop />}
      />

      {/* 3. Mon Role */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<MonRoleMobileAdapted />}
        desktop={<MonRoleDesktop />}
      />

      {/* 4. Discovery */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<DiscoveryMobileAdapted />}
        desktop={<DiscoveryDesktop />}
      />

      {/* 4b. Challenges */}
      <ChallengesNextSteps
        data={cs.challenges}
        sectionGap={SECTION_GAP}
        maxWidth={CONTENT_WIDTH}
      />

      {/* 5. L'Approche Design */}
      {isMobile ? (
        <div
          className="bg-[var(--color-qare-050)] w-full"
          style={{ marginTop: SECTION_GAP, paddingTop: 32, paddingBottom: 32 }}
        >
          <ApprochDesignMobileAdapted />
        </div>
      ) : (
        <div
          className="bg-[var(--color-qare-050)] w-full"
          style={{
            marginTop: SECTION_GAP,
            paddingTop: Math.round(50 * s),
            paddingBottom: Math.round(50 * s),
          }}
        >
          <ScaledSection maxWidth={CONTENT_WIDTH}>
            <ApprochDesignDesktop />
          </ScaledSection>
        </div>
      )}

      {/* 6. Iteration */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<IterationMobileAdapted />}
        desktop={<IterationDesktop />}
      />

      {/* 7. Learnings */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<LearningsMobileAdapted />}
        desktop={<LearningsDesktop />}
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