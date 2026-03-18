import { useRef } from "react";
import { useNavigate } from "react-router";
import { useIsMobile } from "../components/useIsMobile";
import { useDesignScale } from "../components/useDesignScale";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { HeroMobile } from "../components/HeroMobile";
import { ProjectsMobile } from "../components/ProjectsMobile";
import { ExperienceMobile } from "../components/ExperienceMobile";
import AboutFrame from "../../imports/Frame1000002860";
import ProjectsFrame from "../../imports/Frame1000002860-171-56";
import ExperienceFrame from "../../imports/Frame1000002861";
import { PageLoader } from "../components/PageLoader";
import { useImagePreloader } from "../components/useImagePreloader";
import { FooterLookingFor } from "../components/FooterLookingFor";

const CONTENT_WIDTH = 950;

export default function Home() {
  const s = useDesignScale();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesReady = useImagePreloader(containerRef);

  const sectionGap = isMobile ? 80 : Math.round(180 * s);
  const topPad = isMobile ? 100 : Math.round(180 * s);
  const bottomPad = isMobile ? 60 : Math.round(120 * s);

  return (
    <>
      <PageLoader visible={!imagesReady} />
      <div ref={containerRef} className="relative min-h-screen w-full bg-[var(--color-qare-white)] overflow-x-hidden">
        {/* Dot pattern — Home uses a non-mobile-aware gradient with different fade distances */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: [
              "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
              "var(--bg-qare-dot-pattern)",
            ].join(", "),
            maskImage: `linear-gradient(to bottom, black 0%, black ${500 * s}px, transparent ${800 * s}px)`,
            WebkitMaskImage: `linear-gradient(to bottom, black 0%, black ${500 * s}px, transparent ${800 * s}px)`,
          }}
        />

        {/* ── About ────────────────────────────────────── */}
        <section id="about" className="relative z-10">
          <ResponsiveSection
            maxWidth={CONTENT_WIDTH}
            style={{ paddingTop: topPad }}
            mobile={<HeroMobile />}
            desktop={<AboutFrame />}
          />
        </section>

        {/* ── Projects ─────────────────────────────────── */}
        <section id="projects" className="relative z-10">
          <ResponsiveSection
            maxWidth={CONTENT_WIDTH}
            style={{ marginTop: sectionGap }}
            mobile={<ProjectsMobile />}
            desktop={
              <ProjectsFrame
                onQareClick={() => navigate("/project/qare")}
                onTempsMedicalClick={() => navigate("/project/temps-medical")}
                onMonetisationClick={() => navigate("/project/monetisation")}
                onBrandedCallClick={() => navigate("/project/branded-call")}
              />
            }
          />
        </section>

        {/* ── Experience ────────────────────────────────── */}
        <section id="experience" className="relative z-10">
          <ResponsiveSection
            maxWidth={CONTENT_WIDTH}
            style={{ marginTop: sectionGap, paddingBottom: bottomPad }}
            mobile={<ExperienceMobile />}
            desktop={<ExperienceFrame />}
          />
        </section>

        {/* ── Footer ─────────────────────────────────── */}
        <FooterLookingFor />
      </div>
    </>
  );
}
