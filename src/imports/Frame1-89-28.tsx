type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center w-[132px]">
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[16px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[40px] py-[32px] relative rounded-[30px] size-full">
      <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <Helper text="12+" text1="Years experiences" />
      <Helper text="6+" text1="Years leading" />
      <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[132px]">
        <div className="content-stretch flex items-start relative shrink-0">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[32px] text-center w-[26.35px]">7</p>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#40295b] text-[16px] text-center w-[min-content]">Team members</p>
      </div>
      <Helper text="72+" text1="Features shipped" />
      <Helper text="B2B" text1="Expertise" />
      <Helper text="B2C" text1="Expertise" />
    </div>
  );
}