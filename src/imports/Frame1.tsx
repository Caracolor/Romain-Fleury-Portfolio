type Frame1BackgroundImageProps = {
  text: string;
  text1: string;
};

function Frame1BackgroundImage({ text, text1 }: Frame1BackgroundImageProps) {
  return (
    <div className="font-['Aeonik:Regular',sans-serif] leading-[1.512] not-italic relative shrink-0 text-[#16121b] text-[0px] text-center whitespace-nowrap">
      <p className="mb-0 text-[39.304px]">{text}</p>
      <p className="font-['Aeonik:Light',sans-serif] text-[14.739px]">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between px-[56px] py-[32px] relative rounded-[30px] size-full" style={{ backgroundImage: "linear-gradient(99.715deg, rgb(255, 255, 255) 20.936%, rgba(255, 255, 255, 0) 64.46%, rgb(255, 255, 255) 90.894%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-5 border-[#e869b6] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <Frame1BackgroundImage text="€18k" text1="Revenue mensuels" />
      <Frame1BackgroundImage text="2 179" text1="Patients actifs" />
      <Frame1BackgroundImage text="+56%" text1="Croissance mensuelle moyenne" />
    </div>
  );
}