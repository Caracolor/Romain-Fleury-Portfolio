import { Link } from "react-router";
import imgQare from "@/assets/11af05f0212fbda46592464adca2cfe9cb64b28e.png";
import imgTempsMedical from "@/assets/b1e327b80299135e2fc027ba55121756be6c94ae.png";
import imgMonetisation from "@/assets/42b0e4588a42e64d9354d4538b430ccc04ef48a9.png";
import { useIsMobile } from "./useIsMobile";
import { useTranslation } from "./LanguageContext";

interface Project {
  slug: string;
  path: string;
  image: string;
  titleKey: "chronic" | "medical" | "monetisation" | "branded_call";
}

const PROJECTS: Project[] = [
  {
    slug: "qare",
    path: "/project/qare",
    image: imgQare,
    titleKey: "chronic",
  },
  {
    slug: "temps-medical",
    path: "/project/temps-medical",
    image: imgTempsMedical,
    titleKey: "medical",
  },
  {
    slug: "monetisation",
    path: "/project/monetisation",
    image: imgMonetisation,
    titleKey: "monetisation",
  },
  {
    slug: "branded-call",
    path: "/project/branded-call",
    image: imgMonetisation,
    titleKey: "branded_call",
  },
];

function NavCard({
  project,
  direction,
  isMobile,
  directionLabel,
  title,
}: {
  project: Project;
  direction: "prev" | "next";
  isMobile: boolean;
  directionLabel: string;
  title: string;
}) {
  const isPrev = direction === "prev";

  return (
    <Link
      to={project.path}
      className="group no-underline flex-1 min-w-0"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div
        className="relative overflow-hidden h-full"
        style={{
          borderRadius: isMobile ? 20 : 30,
          background: "white",
        }}
      >
        {/* Border */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none border-4 border-solid border-[#d7d0ef]"
          style={{
            borderRadius: isMobile ? 20 : 30,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col gap-[8px]"
          style={{
            padding: isMobile ? "20px 16px" : "32px 28px",
            alignItems: isPrev ? "flex-start" : "flex-end",
            textAlign: isPrev ? "left" : "right",
          }}
        >
          {/* Arrow + direction label */}
          <div
            className="flex items-center gap-[8px]"
            style={{
              flexDirection: isPrev ? "row" : "row-reverse",
            }}
          >
            <svg
              width={isMobile ? 18 : 22}
              height={isMobile ? 18 : 22}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: isPrev ? "rotate(180deg)" : "none",
              }}
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#16121b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className="font-['Aeonik:Regular',sans-serif] uppercase tracking-[3px] text-[#16121b]"
              style={{
                fontSize: isMobile ? 11 : 13,
                lineHeight: "normal",
              }}
            >
              {directionLabel}
            </p>
          </div>

          {/* Project title */}
          <p
            className="font-['Aeonik:Bold',sans-serif] text-[#16121b] group-hover:text-[#7a63ca] transition-colors duration-300"
            style={{
              fontSize: isMobile ? 17 : 22,
              lineHeight: isMobile ? "24px" : "30px",
            }}
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function ProjectNavigation({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const isMobile = useIsMobile();
  const chronicNav = useTranslation("case_study_chronic_programs").project_nav;
  const medicalNav = useTranslation("case_study_medical_time").project_nav;
  const brandedCallNav = useTranslation("case_study_branded_call").project_nav;
  const projSection = useTranslation("projects_section");

  // Build a title map from the translations
  const titleMap: Record<string, string> = {
    chronic: projSection.items[0].title,
    medical: projSection.items[1].title,
    monetisation: projSection.items[2].title,
    branded_call: projSection.items[3]?.title || "Branded Call",
  };

  // Get direction labels based on current page
  const navForSlug: Record<string, { prev_label: string; next_label: string }> = {
    qare: { prev_label: chronicNav.previous_label, next_label: chronicNav.next_label },
    "temps-medical": { prev_label: medicalNav.previous_label, next_label: medicalNav.next_label },
    monetisation: { prev_label: chronicNav.previous_label, next_label: chronicNav.next_label },
    "branded-call": { prev_label: brandedCallNav.previous_label, next_label: brandedCallNav.next_label },
  };

  const currentIndex = PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const labels = navForSlug[currentSlug] || { prev_label: "Previous project", next_label: "Next project" };

  return (
    <div
      className="w-full"
      style={{
        maxWidth: isMobile ? undefined : 950,
        margin: "0 auto",
        padding: isMobile ? "0 20px" : "0",
      }}
    >
      {/* Separator line */}
      <div
        className="w-full mx-auto"
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #e4e0f4 30%, #afa2df 50%, #e4e0f4 70%, transparent)",
          marginBottom: isMobile ? 24 : 40,
          borderRadius: 1,
        }}
      />

      {/* Nav cards */}
      <div
        className="flex gap-[16px]"
        style={{
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <NavCard
          project={prevProject}
          direction="prev"
          isMobile={isMobile}
          directionLabel={labels.prev_label}
          title={titleMap[prevProject.titleKey]}
        />
        <NavCard
          project={nextProject}
          direction="next"
          isMobile={isMobile}
          directionLabel={labels.next_label}
          title={titleMap[nextProject.titleKey]}
        />
      </div>
    </div>
  );
}