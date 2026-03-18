import { useTranslation } from "./LanguageContext";

const CONTENT_WIDTH = 950;
const DESKTOP_SIDE_PADDING = 200;
const MAX_WIDTH_WITH_PADDING = CONTENT_WIDTH + DESKTOP_SIDE_PADDING * 2; // 1350

export function FooterLookingFor() {
  const t = useTranslation("footer_looking_for");

  return (
    <div className="bg-[#f2effa] w-full relative z-10">
      {/* Desktop */}
      <div className="hidden md:block">
        <div
          className="mx-auto py-[56px]"
          style={{
            maxWidth: MAX_WIDTH_WITH_PADDING,
            paddingLeft: DESKTOP_SIDE_PADDING,
            paddingRight: DESKTOP_SIDE_PADDING,
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <div className="flex flex-col gap-[40px] items-start" style={{ maxWidth: CONTENT_WIDTH }}>
            <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[#40295b] tracking-[15px] uppercase text-[40px]">
              {t.title}
            </p>
            <div className="flex gap-[24px] items-start w-full">
              <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[4px]" />
              <div className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic text-[#40295b] text-[24px]">
                <p className="mb-0">
                  {t.body}
                </p>
                <br aria-hidden="true" />
                <p className="font-['Aeonik:Bold',sans-serif]">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-[24px] px-[24px] py-[40px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[#40295b] tracking-[8px] uppercase text-[20px]">
          {t.title}
        </p>
        <div className="flex gap-[16px] items-start w-full">
          <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[3px]" />
          <div className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[26px] not-italic text-[#40295b] text-[17px]">
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
