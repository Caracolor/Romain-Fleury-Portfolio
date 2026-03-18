import imgFrame1000002860 from "figma:asset/11af05f0212fbda46592464adca2cfe9cb64b28e.png";

export default function Frame() {
  return (
    <div className="relative rounded-[30px] size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-95 rounded-[30px] size-full" src={imgFrame1000002860} />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex gap-[8px] items-end p-[32px] relative size-full">
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">IC design Lead</p>
              </div>
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">Business Impact</p>
              </div>
              <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[43px]">Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}