import HeroFrame from "../../imports/Frame2087325116-53-169";
import Frame2 from "../../imports/Frame121711-178-173";
import Frame3 from "../../imports/Frame2087325117";
import Frame4 from "../../imports/Frame121711-7-193";
import MonRoleFrame from "../../imports/Frame121711-56-287";
import CookingPotIllustration from "../../imports/Group1000002858-65-27";
import { ResultatsLearnings } from "../components/ResultatsLearnings";
import { DocumentsCles } from "../components/DocumentsCles";
import { ScaledSection } from "../components/ScaledSection";
import { useIsMobile } from "../components/useIsMobile";
import { useDesignScale } from "../components/useDesignScale";
import { ProjectPageWrapper } from "../components/ProjectPageWrapper";
import { ResponsiveSection } from "../components/ResponsiveSection";
import {
  HeroMobileChronic,
  ChallengeMobile,
  MonRoleMobile,
  VerbatimsMobile,
  ApprocheMobile,
} from "../components/QareMobile";
import { ProjectNavigation } from "../components/ProjectNavigation";
import { ContextSection } from "../components/ContextSection";
import { ChallengesNextSteps } from "../components/ChallengesNextSteps";
import { useTranslation } from "../components/LanguageContext";
import image_showcase from "@/assets/d6e137ac84f850b9345374da1bfb5243f027efc5.png";

const CONTENT_WIDTH = 950;

export default function ProjectChronicPrograms() {
  const s = useDesignScale();
  const isMobile = useIsMobile();
  const cs = useTranslation("case_study_chronic_programs") as any;

  const HERO_PAD_TOP = isMobile ? 100 : Math.round(180 * s);
  const HERO_TO_CHALLENGE = isMobile ? 40 : Math.round(65 * s);
  const SECTION_GAP = isMobile ? 100 : Math.round(200 * s);
  const SHOWCASE_MARGIN = isMobile ? 100 : Math.round(180 * s);
  const BOTTOM_PAD = isMobile ? 60 : Math.round(200 * s);
  const APPROACH_PY = isMobile ? 30 : Math.round(50 * s);

  return (
    <ProjectPageWrapper scale={s}>
      {/* ── Hero ───────────────────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ paddingTop: HERO_PAD_TOP }}
        mobile={<HeroMobileChronic />}
        desktop={<div style={{ height: 694 }}><HeroFrame /></div>}
      />

      {/* ── Contexte ──────────────────────────────── */}
      <ContextSection
        translationKey="case_study_chronic_programs"
        topSpacing={isMobile ? SECTION_GAP : HERO_TO_CHALLENGE}
      />

      {/* ── Le Challenge ───────────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<ChallengeMobile />}
        desktop={<Frame2 />}
      />

      {/* ── Mon role ───────────────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<MonRoleMobile />}
        desktop={<MonRoleFrame />}
      />

      {/* ── Verbatims patients ─────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobile={<VerbatimsMobile />}
        desktop={<Frame3 />}
      />

      {/* ── Challenges ─────────────────────────────────── */}
      <ChallengesNextSteps
        data={cs.challenges}
        sectionGap={SECTION_GAP}
        maxWidth={CONTENT_WIDTH}
      />

      {/* ── L'approche design ──────────────────────── */}
      {isMobile ? (
        <div
          className="bg-[var(--color-qare-050)] w-full"
          style={{ marginTop: SECTION_GAP, paddingTop: 32, paddingBottom: 32 }}
        >
          <ApprocheMobile />
        </div>
      ) : (
        <div
          className="bg-[var(--color-qare-050)] w-full relative overflow-visible"
          style={{ marginTop: SECTION_GAP, paddingTop: APPROACH_PY, paddingBottom: APPROACH_PY }}
        >
          <ScaledSection maxWidth={CONTENT_WIDTH}>
            <div
              className="absolute pointer-events-none z-10"
              style={{ right: -40 * s, top: -200 * s, width: 260 * s, height: 253 * s }}
            >
              <CookingPotIllustration />
            </div>
            <Frame4 />
          </ScaledSection>
        </div>
      )}

      {/* ── Showcase des ecrans mobiles ── */}
      <div
        className="w-full flex justify-center overflow-hidden"
        style={{ marginTop: SHOWCASE_MARGIN, marginBottom: SHOWCASE_MARGIN }}
      >
        <img
          src={image_showcase}
          alt="Showcase des ecrans mobiles Qare Programme"
          className="h-auto object-contain"
          style={{
            width: isMobile ? "220%" : "160%",
            maxWidth: "none",
            transform: "rotate(-4.28deg)",
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Resultats & Learnings ──────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP }}
        mobileClassName="px-[20px]"
        mobile={<ResultatsLearnings />}
        desktop={<ResultatsLearnings />}
      />

      {/* ── Next steps ─────────────────────────────────── */}
      <ChallengesNextSteps
        data={cs.next_steps}
        sectionGap={SECTION_GAP}
        maxWidth={CONTENT_WIDTH}
      />

      {/* ── Documents cles ─────────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ marginTop: SECTION_GAP, paddingBottom: isMobile ? BOTTOM_PAD : undefined }}
        mobileClassName="px-[20px]"
        mobile={<DocumentsCles />}
        desktop={<div style={{ paddingBottom: BOTTOM_PAD }}><DocumentsCles /></div>}
      />

      {/* ── Navigation projet ──────────────────────── */}
      <ResponsiveSection
        maxWidth={CONTENT_WIDTH}
        style={{ paddingBottom: isMobile ? 60 : BOTTOM_PAD }}
        mobile={<ProjectNavigation currentSlug="qare" />}
        desktop={<ProjectNavigation currentSlug="qare" />}
      />
    </ProjectPageWrapper>
  );
}