import svgPaths from "./svg-q4l3m5ssp7";
import imgImage715 from "@/assets/29b08f7bb13f6dda67c4bd717417f76b77a6730a.webp";
import imgImage716 from "@/assets/a1628c1e0a466f01138d6b3b2432901a0eefb85a.webp";
import imgImage717 from "@/assets/6d84aab448b0a17c03a9a8efe59ab130eaf16760.webp";

export default function Starterkit({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-end p-[60px] relative rounded-[51.675px] size-full" data-name="Starterkit">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#16121b] text-[24px]">Starter kit for shape patient</p>
        <button className="content-stretch cursor-pointer flex items-center p-[4px] relative shrink-0" onClick={onClose}>
          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Outlined/Système/Cross">
            <div className="absolute inset-1/4" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.p18a9af00} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="h-[725px] relative rounded-[29.529px] shrink-0 w-[878px]">
        <div className="content-start flex flex-wrap gap-y-0 items-start overflow-clip pr-[0.728px] relative rounded-[inherit] size-full">
          <div className="h-[435.549px] mr-[-0.728px] relative shrink-0 w-[439.24px]" data-name="image 715">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.43%] left-[-0.17%] max-w-none top-[-0.5%] w-[100.08%]" src={imgImage715} />
            </div>
          </div>
          <div className="h-[436.287px] mr-[-0.728px] relative shrink-0 w-[435.549px]" data-name="image 716">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.09%] left-[-0.85%] max-w-none top-[-0.03%] w-[100.76%]" src={imgImage716} />
            </div>
          </div>
          <div className="h-[438.501px] mr-[-0.728px] relative shrink-0 w-[873.312px]" data-name="image 717">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.09%] left-[-0.59%] max-w-none top-[-0.03%] w-[100.59%]" src={imgImage717} />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[2.953px] border-[rgba(255,204,96,0.2)] border-solid inset-0 pointer-events-none rounded-[29.529px]" />
      </div>
    </div>
  );
}