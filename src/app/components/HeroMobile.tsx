import svgPaths from "../../imports/svg-2k7gxlzkzt";
import imgDsc087301 from "@/assets/1680f5d397351ddf45665415243080fa4096145a.png";
import { useTranslation } from "./LanguageContext";
import { useAnimatedTitle } from "./useAnimatedTitle";

function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[var(--color-qare-brand)] inline-flex items-center justify-center pb-[8px] pt-[2px] px-[16px] relative rounded-[18px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[2.5px] border-solid border-white inset-[-2.5px] pointer-events-none rounded-[20.5px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] min-[450px]:text-[35px] text-white whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic text-[var(--color-qare-text)] text-center">
      <p className="text-[24px]">{value}</p>
      <p className="text-[13px] whitespace-nowrap">{label}</p>
    </div>
  );
}

export function HeroMobile() {
  const hero = useTranslation("hero");
  const stats = useTranslation("stats");
  const intro = useTranslation("intro");
  const { p1, p2 } = useAnimatedTitle();

  const introLines = intro.text.split("\n\n");

  return (
    <div className="flex flex-col items-center gap-[40px] w-full px-[24px]">
      {/* ── Photo + Title block ── */}
      <div className="flex flex-col items-center gap-[24px] w-full">
        {/* Photo — scales fluidly between 200px and 320px */}
        <div
          className="relative mx-auto aspect-[200/240]"
          style={{ width: "clamp(200px, 45vw, 320px)" }}
        >
          {/* Background shape */}
          <div className="absolute h-[77.5%] left-0 bottom-0 w-full">
            <div className="absolute inset-[3.52%_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 361.761 320.268"
              >
                <path
                  d={svgPaths.pecda100}
                  fill="var(--fill-0, #CAC1EA)"
                  id="Rectangle 2064"
                />
              </svg>
            </div>
          </div>
          {/* Photo image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="-scale-y-100 rotate-180 size-full">
              <div className="size-full relative rounded-[24px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img
                    alt="Romain"
                    className="absolute h-[148.9%] left-[-23.45%] max-w-none top-[-7.49%] w-[115.29%]"
                    style={{ transform: "rotate(-8deg) translateX(28px)" }}
                    src={imgDsc087301}
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cursor animé — à droite de la photo */}
          <div className="absolute -right-[28px] bottom-[30px] rotate-[-42.82deg]">
            <div className="h-[36px] relative w-[28px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 38.6236 46.128"
                overflow="visible"
              >
                <path
                  d={svgPaths.p27d15600}
                  fill="var(--fill-0, #7A63CA)"
                  id="Mouse"
                  stroke="var(--stroke-0, white)"
                  strokeWidth="4.20391"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-20,0; -12,-6; -7,2; -15,11; -27,9; -31,0; -25,-9; -13,-11; -20,0"
                    keyTimes="0; 0.13; 0.27; 0.42; 0.56; 0.7; 0.82; 0.92; 1"
                    dur="9s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>

        {/* Title + tags — scale text on wider mobiles */}
        <div className="flex flex-col gap-[6px] items-center w-full">
          <p className="font-['Aeonik:Light',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[32px] min-[450px]:text-[40px] text-center">
            {hero.greeting}
          </p>
          <div className="flex flex-col gap-[6px] items-center w-full">
            <div className="flex flex-wrap gap-[6px] items-center justify-center">
              <Tag text={p1} />
            </div>
            <div className="flex flex-wrap gap-[6px] items-center justify-center">
              {p2 && <Tag text={p2} />}
              <p className="font-['Aeonik:Light',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[32px] min-[450px]:text-[40px]">
                {hero.role_line3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats card ── */}
      <div
        className="bg-white relative rounded-[24px] shrink-0 w-full"
        style={{
          boxShadow:
            "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[24px]"
          style={{
            padding: 3,
            background:
              "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div className="grid grid-cols-2 min-[450px]:grid-cols-3 gap-y-[20px] gap-x-[8px] px-[16px] py-[20px] relative w-full">
          <StatItem value={stats[0].value} label={stats[0].label} />
          <StatItem value={stats[1].value} label={stats[1].label} />
          {/* visible à partir de 450px */}
          <div className="hidden min-[450px]:flex">
            <StatItem value={stats[3].value} label={stats[3].label} />
          </div>
        </div>
      </div>

      {/* ── Description text ── */}
      <div className="flex gap-[16px] items-start w-full">
        <div className="bg-[var(--color-qare-150)] rounded-[20px] self-stretch shrink-0 w-[3px]" />
        <div className="font-['Aeonik:Regular',sans-serif] leading-[24px] not-italic text-[var(--color-qare-text)] text-[16px] flex-1">
          {introLines.map((line, i) => (
            <p key={i} className={i < introLines.length - 1 ? "mb-[16px]" : ""}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
