import svgPaths from "./svg-c3ko4dbfwy";
import imgRectangle from "@/assets/f9e309890f0c6e1e474802111bac509e74358b67.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[69px] left-[152px] top-[370px] w-[166px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 69">
          <path d={svgPaths.p3fdeab00} fill="var(--fill-0, #9EB4B5)" fillOpacity="0.35" id="Vector 369" />
        </svg>
      </div>
      <div className="absolute h-[447px] left-0 top-0 w-[460px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}