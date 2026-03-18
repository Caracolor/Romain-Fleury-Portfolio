type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center w-[132px]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[12px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[40px] py-[32px] relative rounded-[30px] size-full">
      <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <Helper text="€18k" text1="Revenue mensuels" />
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center w-[132px]">
        <p className="min-w-full relative shrink-0 text-[32px] w-[min-content]">+56%</p>
        <p className="relative shrink-0 text-[12px] whitespace-nowrap">Croissance mensuelle</p>
      </div>
      <Helper text="2 179" text1="Patients actifs" />
    </div>
  );
}