import image_9df522785521e74f1bbae9a8a4e18454c4d8e38e from 'figma:asset/9df522785521e74f1bbae9a8a4e18454c4d8e38e.png'
import svgPaths from "./svg-1bl6ypmu62";
import imgRectangle from "figma:asset/f9e309890f0c6e1e474802111bac509e74358b67.png";

export default function Group() {
  return (
    <>
      <style>{`
        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      <div className="relative size-full">
        <div className="absolute h-[69px] left-[152px] top-[370px] w-[166px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 69">
            <path d={svgPaths.p3fdeab00} fill="var(--fill-0, #9EB4B5)" fillOpacity="0.35" id="Vector 369" />
          </svg>
        </div>
        <div className="absolute h-[447px] left-0 top-0 w-[460px]" data-name="Rectangle">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="block w-full h-full object-contain" style={{ animation: "floatImage 3.5s ease-in-out infinite" }} src={image_9df522785521e74f1bbae9a8a4e18454c4d8e38e} />
          </div>
        </div>
      </div>
    </>
  );
}