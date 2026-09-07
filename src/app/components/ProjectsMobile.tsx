import chronicVideoUrl from "@/assets/chronic-thumbnail.mp4";
import chronicPosterUrl from "@/assets/chronic-thumbnail-poster.webp";
import tempsMedicalVideoUrl from "@/assets/temps-medical-thumbnail.mp4";
import tempsMedicalPosterUrl from "@/assets/temps-medical-thumbnail-poster.webp";
import monetisationVideoUrl from "@/assets/monetisation-thumbnail.mp4";
import monetisationPosterUrl from "@/assets/monetisation-thumbnail-poster.webp";
import brandedCallVideoUrl from "@/assets/branded-call-thumbnail.mp4";
import brandedCallPosterUrl from "@/assets/branded-call-thumbnail-poster.webp";
import comingSoonBgUrl from "@/assets/coming-soon-bg.webp";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ThumbnailVideo } from "./ThumbnailVideo";
import { useTranslation } from "./LanguageContext";

function ProjectTag({ text }: { text: string }) {
  return (
    <div className="bg-[var(--color-qare-white)] inline-flex items-center justify-center px-[12px] py-[6px] relative rounded-[16px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-[var(--color-qare-030)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative text-[var(--color-qare-text)] text-[14px]">
        {text}
      </p>
    </div>
  );
}

interface ProjectCardProps {
  /** Absents pour la carte "coming soon", qui n'affiche pas de vidéo. */
  video?: string;
  poster?: string;
  restTime?: number;
  resetRef?: React.MutableRefObject<(() => void) | null>;
  title: string;
  description: React.ReactNode;
  tags: string[];
  to?: string;
  comingSoon?: string;
}

function ProjectCard({
  video,
  poster,
  restTime,
  resetRef,
  title,
  description,
  tags,
  to,
  comingSoon,
}: ProjectCardProps) {
  const content = (
    <div
      className={`flex flex-col gap-[12px] w-full ${
        comingSoon ? "opacity-50" : ""
      }`}
    >
      {/* Image */}
      {comingSoon ? (
        <div
          className="relative w-full rounded-[20px] overflow-hidden flex items-center justify-center bg-white"
          style={{ aspectRatio: "1140 / 982" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${comingSoonBgUrl})` }}
          />
          <p className="relative font-['Aeonik:Bold',sans-serif] text-black text-[20px] tracking-[4px] uppercase">
            {comingSoon}
          </p>
          <div
            aria-hidden="true"
            className="absolute border-[3px] border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px]"
          />
        </div>
      ) : (
        <div
          className="relative w-full rounded-[20px] overflow-hidden"
          style={{ aspectRatio: "1140 / 982" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[20px]"
          >
            <div className="absolute bg-[#231633] inset-0 rounded-[20px]" />
            <ThumbnailVideo src={video} poster={poster} restTime={restTime} resetRef={resetRef} rounded="20px" />
          </div>
          {/* Tags overlay */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-[6px] p-[16px]">
            {tags.map((tag) => (
              <ProjectTag key={tag} text={tag} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[3px] border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px] bg-[#23163300]"
          />
        </div>
      )}

      {/* Title */}
      <div className="flex flex-col items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[32px] not-italic text-[var(--color-qare-text)] text-[24px]">
          {title}
        </p>
      </div>

      {/* Description */}
      <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] not-italic text-[var(--color-qare-text)] text-[15px]">
        {description}
      </div>
    </div>
  );

  if (to && !comingSoon) {
    return (
      <Link
        to={to}
        className="no-underline block cursor-pointer transition-opacity hover:opacity-90"
      >
        {content}
      </Link>
    );
  }
  return content;
}

export function ProjectsMobile() {
  const proj = useTranslation("projects_section");
  const items = proj.items;

  const sectionRef = useRef<HTMLDivElement>(null);
  const chronicReset = useRef<(() => void) | null>(null);
  const tempsMedicalReset = useRef<(() => void) | null>(null);
  const monetisationReset = useRef<(() => void) | null>(null);
  const brandedCallReset = useRef<(() => void) | null>(null);

  // Une fois la section entièrement quittée (pas juste une carte), réarme
  // les quatre vidéos : au prochain retour dans la zone, chacune rejoue
  // depuis le début plutôt que de rester figée sur son image d'arrêt.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return;
        chronicReset.current?.();
        tempsMedicalReset.current?.();
        monetisationReset.current?.();
        brandedCallReset.current?.();
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-[32px] w-full px-[24px]">
      {/* Section title */}
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[28px] min-[450px]:text-[36px] tracking-[8px] uppercase">
        {proj.section_title}
      </p>

      {/* Project 1 — Programmes chroniques */}
      <ProjectCard
        video={chronicVideoUrl}
        poster={chronicPosterUrl}
        restTime={6.474}
        resetRef={chronicReset}
        title={items[0].title}
        tags={[items[0].tag, ...(items[0].tag2 ? [items[0].tag2] : [])]}
        to="/project/chronic-programs"
        description={
          <p>
            {items[0].description}{" "}
            <span className="font-['Aeonik:Bold',sans-serif]">{`→ ${items[0].result}`}</span>
          </p>
        }
      />

      {/* Project 2 — Temps Médical */}
      <ProjectCard
        video={tempsMedicalVideoUrl}
        poster={tempsMedicalPosterUrl}
        restTime={1.759}
        resetRef={tempsMedicalReset}
        title={items[1].title}
        tags={[items[1].tag, ...(items[1].team ? [items[1].team] : [])]}
        to="/project/medical-time"
        description={
          <p>
            {items[1].description}{" "}
            <span className="font-['Aeonik:Bold',sans-serif]">
              {`→ ${items[1].result}`}
            </span>
          </p>
        }
      />

      {/* Project 3 — Monétisation */}
      <ProjectCard
        video={monetisationVideoUrl}
        poster={monetisationPosterUrl}
        restTime={1.163}
        resetRef={monetisationReset}
        title={items[2].title}
        tags={[items[2].tag, ...(items[2].tag2 ? [items[2].tag2] : [])]}
        to="/project/health-monetization"
        description={
          <p>
            {items[2].description}{" "}
            <span className="font-['Aeonik:Bold',sans-serif]">
              {`→ ${items[2].result}`}
            </span>
          </p>
        }
      />

      {/* Project 4 — Branded Call */}
      {items[3] && (
        <ProjectCard
          video={brandedCallVideoUrl}
          poster={brandedCallPosterUrl}
          restTime={2.269}
          resetRef={brandedCallReset}
          title={items[3].title}
          tags={[items[3].tag, ...(items[3].tag2 ? [items[3].tag2] : [])]}
          to="/project/branded-call"
          description={
            <p>
              {items[3].description}{" "}
              <span className="font-['Aeonik:Bold',sans-serif]">
                {`→ ${items[3].result}`}
              </span>
            </p>
          }
        />
      )}

      {/* Project 5 — Design System (Coming Soon) */}
      {items[4] && (
        <ProjectCard
          title={items[4].title}
          tags={[items[4].tag, ...(items[4].tag2 ? [items[4].tag2] : [])]}
          comingSoon={proj.coming_soon_label}
          description={
            <p>
              {items[4].description}{" "}
              <span className="font-['Aeonik:Bold',sans-serif]">
                {`→ ${items[4].result}`}
              </span>
            </p>
          }
        />
      )}
    </div>
  );
}