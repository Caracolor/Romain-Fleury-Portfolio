import image_8e716b81ae9e4efdf9e10cfaa7c4c52b3f26825d from 'figma:asset/8e716b81ae9e4efdf9e10cfaa7c4c52b3f26825d.png'
import svgPaths from "./svg-0dbtaqq88m";
import imgDesktopLanding1 from "figma:asset/0ccaac6df6f9c41f48563a32e4a8282c0a418563.png";

export default function Landing({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-end p-[60px] relative rounded-[51.675px] size-full" data-name="Landing">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#16121b] text-[24px]">Landing weight managemenet</p>
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
      <div className="flex-1 min-h-0 relative rounded-[20px] shrink-0 w-full overflow-y-auto overflow-x-hidden">
        <div className="relative w-full" style={{ height: 4294 }}>
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
            src={image_8e716b81ae9e4efdf9e10cfaa7c4c52b3f26825d}
          />
        </div>
        
      </div>
    </div>
  );
}
