import { useTranslation } from "./LanguageContext";
import { ScaledSection } from "./ScaledSection";

export function FooterLookingFor() {
  const t = useTranslation("footer_looking_for");

  return (
    <div className="bg-[var(--color-qare-050)] w-full relative z-10">
      {/* Desktop */}
      <div className="hidden md:block">
        <ScaledSection maxWidth={950} style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div className="flex flex-col gap-[40px] items-start w-full">
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] tracking-[15px] uppercase text-[40px]">
              {t.title}
            </p>
            <div className="flex gap-[24px] items-start w-full">
              <div className="bg-[var(--color-qare-150)] rounded-[20px] self-stretch shrink-0 w-[4px]" />
              <div className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic text-[var(--color-qare-text)] text-[24px]">
                <p className="mb-0">
                  {t.body}
                </p>
                <br aria-hidden="true" />
                <p className="font-['Aeonik:Bold',sans-serif]">{t.location}</p>
              </div>
            </div>
          </div>
        </ScaledSection>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-[24px] px-[24px] py-[40px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] tracking-[8px] uppercase text-[20px]">
          {t.title}
        </p>
        <div className="flex gap-[16px] items-start w-full">
          <div className="bg-[var(--color-qare-150)] rounded-[20px] self-stretch shrink-0 w-[3px]" />
          <div className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[26px] not-italic text-[var(--color-qare-text)] text-[17px]">
            <p className="mb-0">
              {t.body}
            </p>
            <br aria-hidden="true" />
            <p className="font-['Aeonik:Bold',sans-serif]">{t.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
