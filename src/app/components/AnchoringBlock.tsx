import { useLanguage } from "./LanguageContext";

/* ── Anchoring block translations ── */
const ANCHORING_T = {
  fr: {
    intro_line1: "Cette feature semble triviale.",
    intro_line2:
      "Pourtant, en 4 ans chez Qare, elle n'avait jamais \u00e9t\u00e9 impl\u00e9ment\u00e9e, la raison :",
    term: "Biais d'ancrage",
    type: "Biais cognitif",
    definition:
      "Reproduire dans un environnement num\u00e9rique les codes du monde physique, m\u00eame lorsqu\u2019ils n\u2019ont plus lieu d\u2019\u00eatre. Ici : supposer que le patient reste devant son \u00e9cran comme dans une salle d\u2019attente physique. Alors qu\u2019il vit sa vie, navigue, s\u2019\u00e9loigne.",
  },
  en: {
    intro_line1: "This feature seems trivial.",
    intro_line2:
      "Yet in 4 years at Qare, it had never been implemented, the reason:",
    term: "physical world anchoring",
    type: "cognitive bias",
    definition:
      "Replicating physical world conventions in a digital environment, even when they no longer apply. Here: assuming the patient stays in front of their screen like in a physical waiting room. When they\u2019re actually living their life, browsing, walking away.",
  },
};

interface AnchoringBlockProps {
  mobile?: boolean;
}

/**
 * Cognitive bias callout block used on the Branded Call challenge section.
 * Self-contained: reads language from context, contains its own translations.
 */
export function AnchoringBlock({ mobile }: AnchoringBlockProps) {
  const { lang } = useLanguage();
  const anchoring = ANCHORING_T[lang as "fr" | "en"];

  const radius = mobile ? "20px" : "30px";
  const gap = mobile ? "16px" : "24px";
  const termSize = mobile ? "16px" : "20px";
  const defSize = mobile ? "14px" : "16px";

  return (
    <div className="flex flex-col gap-[16px] md:gap-[20px]">
      <p
        className={`font-['Aeonik:Regular',sans-serif] text-[#40295b] ${mobile ? "text-[16px] leading-[24px]" : "text-[24px] leading-[30px]"}`}
      >
        {anchoring.intro_line1}
        {mobile ? " " : "\n"}
        {anchoring.intro_line2}
      </p>
      <div
        className="bg-[#f2effa] w-full"
        style={{ borderTopRightRadius: radius, borderBottomRightRadius: radius }}
      >
        <div className="flex items-start w-full" style={{ gap }}>
          <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[4px]" />
          <div
            className="flex-1 min-w-0 flex flex-col gap-[4px] md:gap-[6px] py-[12px] md:py-[16px]"
            style={{ paddingRight: gap }}
          >
            <div className="flex gap-[8px] md:gap-[10px] items-end">
              <p
                className="font-['Aeonik:Bold',sans-serif] text-[#40295b] whitespace-nowrap"
                style={{ fontSize: termSize, lineHeight: mobile ? "24px" : "28px" }}
              >
                {anchoring.term}
              </p>
              <p className="font-['Aeonik:Regular',sans-serif] text-[#3c3162] text-[11px] md:text-[12px] leading-[normal]">
                {anchoring.type}
              </p>
            </div>
            <p
              className="font-['Aeonik:Regular',sans-serif] text-[#40295b] leading-[normal] w-full"
              style={{ fontSize: defSize }}
            >
              {anchoring.definition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
