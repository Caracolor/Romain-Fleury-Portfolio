import clsx from "clsx";
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center", additionalClassNames)}>
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[16px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between px-[40px] py-[32px] relative rounded-[30px] size-full">
      <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
      <Helper text="1/3" text1="du revenu Qare issu des frais de service" additionalClassNames="w-[144px]" />
      <div className="content-stretch flex flex-col font-['Aeonik:Regular',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#40295b] text-center w-[132px]">
        <p className="relative shrink-0 text-[32px] w-full">87%</p>
        <p className="relative shrink-0 text-[16px] w-full">{`d'acceptation des frais de service`}</p>
      </div>
      <Helper text="5" text1="pivots autour de la monétisation" additionalClassNames="w-[132px]" />
    </div>
  );
}