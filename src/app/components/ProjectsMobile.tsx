import imgQare from "@/assets/11af05f0212fbda46592464adca2cfe9cb64b28e.png";
import imgTempsMedical from "@/assets/b1e327b80299135e2fc027ba55121756be6c94ae.png";
import imgMonetisation from "@/assets/42b0e4588a42e64d9354d4538b430ccc04ef48a9.png";
import imgBrandedCall from "@/assets/f5121ae8295ff655c5d23a610e7985e780962097.png";
import { Link } from "react-router";
import { useTranslation } from "./LanguageContext";

function ProjectTag({ text }: { text: string }) {
  return (
    <div className="bg-white inline-flex items-center justify-center px-[12px] py-[6px] relative rounded-[16px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[3px] border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative text-[#40295b] text-[14px]">
        {text}
      </p>
    </div>
  );
}

interface ProjectCardProps {
  image: string;
  label: string;
  title: string;
  description: React.ReactNode;
  tags: string[];
  to?: string;
  comingSoon?: string;
}

function ProjectCard({
  image,
  label,
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
          className="relative w-full rounded-[20px] overflow-hidden flex items-center justify-center bg-[#231633]"
          style={{ aspectRatio: "946 / 600" }}
        >
          <p className="font-['Aeonik:Bold',sans-serif] text-[#afa2df] text-[20px] tracking-[4px] uppercase">
            {comingSoon}
          </p>
          <div
            aria-hidden="true"
            className="absolute border-[3px] border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[20px]"
          />
        </div>
      ) : (
        <div
          className="relative w-full rounded-[20px] overflow-hidden"
          style={{ aspectRatio: "946 / 600" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[20px]"
          >
            <div className="absolute bg-[#231633] inset-0 rounded-[20px]" />
            <img
              alt=""
              className="absolute max-w-none object-cover opacity-95 rounded-[20px] size-full"
              src={image}
            />
          </div>
          {/* Tags overlay */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-[6px] p-[16px]">
            {tags.map((tag) => (
              <ProjectTag key={tag} text={tag} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[3px] border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[20px] bg-[#23163300]"
          />
        </div>
      )}

      {/* Label + Title */}
      <div className="flex flex-col items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[#7a63ca] text-[14px] tracking-[3px] uppercase">
          {label}
        </p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[32px] not-italic text-[#40295b] text-[24px]">
          {title}
        </p>
      </div>

      {/* Description */}
      <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] not-italic text-[#40295b] text-[15px]">
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

  return (
    <div className="flex flex-col gap-[32px] w-full px-[24px]">
      {/* Section title */}
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[#40295b] text-[28px] min-[450px]:text-[36px] tracking-[8px] uppercase">
        {proj.section_title}
      </p>

      {/* Project 1 — Programmes chroniques */}
      <ProjectCard
        image={imgQare}
        label={items[0].company}
        title={items[0].title}
        tags={[items[0].tag, ...(items[0].tag2 ? [items[0].tag2] : [])]}
        to="/project/qare"
        description={
          <p>
            {items[0].description}{" "}
            <span className="font-['Aeonik:Bold',sans-serif]">{`→ ${items[0].result}`}</span>
          </p>
        }
      />

      {/* Project 2 — Temps Médical */}
      <ProjectCard
        image={imgTempsMedical}
        label={items[1].company}
        title={items[1].title}
        tags={[items[1].tag, ...(items[1].team ? [items[1].team] : [])]}
        to="/project/temps-medical"
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
        image={imgMonetisation}
        label={items[2].company}
        title={items[2].title}
        tags={[items[2].tag, ...(items[2].tag2 ? [items[2].tag2] : [])]}
        to="/project/monetisation"
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
          image={imgBrandedCall}
          label={items[3].company}
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
          image=""
          label={items[4].company}
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