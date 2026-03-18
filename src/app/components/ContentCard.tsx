/** Card with bold title + body text. Used in Challenge, Methods, Design Approach sections. */
export function ContentCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-[16px] rounded-[30px]">
      <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] leading-[normal] font-bold text-[22px] md:text-[24px]">
        {title}
      </p>
      <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-[15px] md:text-[20px] leading-[22px] md:leading-[28px]">
        {text}
      </p>
    </div>
  );
}