import imgMind from "@/assets/d6920b25d0dacb652a7f15f95d1fa9fc65e4be75.webp";
import imgShape1 from "@/assets/df79892ff413427f060d32c68e012fe91c5915f1.webp";

export default function ImageDesProgrammes() {
  return (
    <div className="relative size-full" data-name="Image des programmes">
      <div className="absolute flex h-[627.561px] items-center justify-center left-[55px] top-[105px] w-[390.587px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.36deg]">
          <div className="h-[613.023px] relative w-[365.653px]" data-name="Mind">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[112.07%] left-[-7.25%] max-w-none top-[-12.07%] w-[107.25%]" src={imgMind} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[663.5px] left-[208px] top-[190px] w-[436.5px]" data-name="Shape 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShape1} />
      </div>
    </div>
  );
}