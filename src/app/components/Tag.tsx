import type { ReactNode } from "react";

/** Pill-shaped tag with subtle violet border. Used in project hero sections. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 px-[16px] py-[8px]">
      <div
        aria-hidden="true"
        className="absolute border-4 border-[var(--color-qare-030)] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[14px] md:text-[16px] whitespace-nowrap relative">
        {children}
      </p>
    </div>
  );
}
