import { Link } from "react-router";
import svgPaths from "../../imports/svg-jrftw4tb9m";

const DARK = "#40295B";
const MID = "#CAC1EA";

/**
 * Shared visual template for full-page error states (404, unhandled crash).
 * Reuses the loader's logo mark, at rest instead of floating, and the same
 * dot-pattern background as the homepage so the page still reads as part
 * of the site rather than a generic browser error screen.
 */
export function ErrorPage({
  code,
  headline,
  body,
  primaryLabel,
  primaryHref,
  primaryOnClick,
  secondaryLabel,
  secondaryOnClick,
}: {
  code: string;
  headline: string;
  body: string;
  primaryLabel: string;
  primaryHref?: string;
  primaryOnClick?: () => void;
  secondaryLabel?: string;
  secondaryOnClick?: () => void;
}) {
  const PrimaryCta = primaryHref ? (
    <Link
      to={primaryHref}
      className="inline-flex items-center justify-center rounded-full bg-[var(--color-qare-brand)] hover:opacity-85 transition-opacity no-underline"
      style={{ padding: "14px 32px" }}
    >
      <span className="font-['Aeonik:Bold',sans-serif] text-white text-[14px] uppercase tracking-[2.5px]">
        {primaryLabel}
      </span>
    </Link>
  ) : (
    <button
      onClick={primaryOnClick}
      className="inline-flex items-center justify-center rounded-full bg-[var(--color-qare-brand)] hover:opacity-85 transition-opacity cursor-pointer border-none"
      style={{ padding: "14px 32px" }}
    >
      <span className="font-['Aeonik:Bold',sans-serif] text-white text-[14px] uppercase tracking-[2.5px]">
        {primaryLabel}
      </span>
    </button>
  );

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-qare-white)] overflow-hidden flex items-center justify-center px-[24px]">
      {/* Dot pattern — same wash as the homepage hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
            "var(--bg-qare-dot-pattern)",
          ].join(", "),
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 85%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-[24px]" style={{ maxWidth: 480 }}>
        <svg width="44" height="61" viewBox="0 0 52 72" fill="none">
          <defs>
            <clipPath id="clip-error-logo">
              <rect fill="white" height="72" width="52" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-error-logo)">
            <path d={svgPaths.p2d243d70} fill={DARK} />
            <path d={svgPaths.p12205e00} fill={MID} />
            <path d={svgPaths.p2c77ea00} fill={DARK} />
          </g>
        </svg>

        <p
          className="font-['Aeonik:Bold',sans-serif] text-[var(--color-qare-brand)]"
          style={{ fontSize: 72, lineHeight: 1, letterSpacing: 4 }}
        >
          {code}
        </p>

        <div className="flex flex-col gap-[8px]">
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[24px] leading-[30px]">
            {headline}
          </p>
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-muted)] text-[16px] leading-[24px]">
            {body}
          </p>
        </div>

        <div className="flex items-center gap-[24px] mt-[8px]">
          {PrimaryCta}
          {secondaryLabel && secondaryOnClick && (
            <button
              onClick={secondaryOnClick}
              className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[14px] uppercase tracking-[2.5px] underline decoration-solid hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none"
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
