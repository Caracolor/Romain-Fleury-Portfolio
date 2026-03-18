import svgPaths from "./svg-jrftw4tb9m";

export default function Header() {
  return (
    <div className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between px-[40px] py-[14px] relative rounded-[20px] size-full" data-name="Header">
      <div className="content-stretch flex gap-[57px] items-center relative shrink-0">
        <div className="h-[72px] relative shrink-0 w-[52px]" data-name="Caracolor logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 72">
            <g clipPath="url(#clip0_56_22)" id="Caracolor logo">
              <path d={svgPaths.p2d243d70} fill="var(--fill-0, #40295B)" id="Vector" />
              <path d={svgPaths.p12205e00} fill="var(--fill-0, #CAC1EA)" id="Vector_2" />
              <path d={svgPaths.p2c77ea00} fill="var(--fill-0, #40295B)" id="Vector_3" />
            </g>
            <defs>
              <clipPath id="clip0_56_22">
                <rect fill="white" height="72" width="52" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="content-stretch flex font-['Aeonik:Regular',sans-serif] gap-[48px] items-center leading-[28px] not-italic relative shrink-0 text-[#16121b] text-[20px] whitespace-nowrap">
          <p className="relative shrink-0">About</p>
          <p className="relative shrink-0">Projects</p>
          <p className="relative shrink-0">Experience</p>
        </div>
      </div>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#16121b] text-[20px] whitespace-nowrap">r.s.fleury@gmail.com</p>
    </div>
  );
}