import svgPaths from "./svg-xjepifcudg";
import imgBenchmark1 from "@/assets/5fbfa8664a8e7235ddf4eecd1681a7eea0c2de5a.webp";

export default function Benchmark({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-end p-[60px] relative rounded-[51.675px] size-full" data-name="Benchmark">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#16121b] text-[24px]">Benchmark concurrentiel</p>
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
      <div className="aspect-[878.47998046875/445.5654296875] relative shrink-0 w-full" data-name="Benchmark 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[150.34%] left-[-2.44%] max-w-none top-[-3.59%] w-[104.88%]" src={imgBenchmark1} />
          </div>
          <div className="absolute bg-gradient-to-b from-[57.665%] from-[rgba(255,255,255,0)] inset-0 to-white" />
        </div>
      </div>
    </div>
  );
}