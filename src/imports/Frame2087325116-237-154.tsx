import clsx from "clsx";
import imgImage724 from "@/assets/07ce22b1b88d174a8705a3dedf40795c96815c79.webp";
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[2px] items-center relative shrink-0", additionalClassNames)}>
      <p className="relative shrink-0 text-[32px] w-full">{text}</p>
      <p className="relative shrink-0 text-[16px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[228px] relative size-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[550px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
              <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <p className="font-['Aeonik:Regular',sans-serif] h-[21.469px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[112.158px]">IC Design Lead</p>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
              <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[120.038px]">1 PM, 1 Lead Dev</p>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
              <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[65px]">En cours</p>
            </div>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[40px] tracking-[12px] uppercase w-[547px]">BRANDED CALL</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[28px] w-[344.196px]">Réduire les no-shows en appelant les patients comme un appel classique</p>
        </div>
        <div className="bg-white relative rounded-[30px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-4 border-[#c3c0ff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[26.83px_40.245px_53.66px_0px_rgba(159,188,246,0.15)]" />
          <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] items-start justify-between leading-[normal] not-italic px-[40px] py-[32px] relative text-[#40295b] text-center w-full">
            <Helper text="8,4M€" text1="de revenus récupérés par an" additionalClassNames="w-[144px]" />
            <Helper text="-146K" text1="de no-shows patients par an" additionalClassNames="w-[132px]" />
            <Helper text="2 167h" text1="de temps médical restitué par an" additionalClassNames="w-[132px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[479px] items-center justify-center pl-[126.423px] pr-[126.429px] relative rounded-[16px] shrink-0 w-[360px]">
        <div className="h-[591.358px] relative shrink-0 w-[455.004px]" data-name="image 724">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage724} />
        </div>
      </div>
    </div>
  );
}