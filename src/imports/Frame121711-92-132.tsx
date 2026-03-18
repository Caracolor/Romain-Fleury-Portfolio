export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">IC design Lead</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[89px]">1 PM, 3 Devs</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[49px]">3 mois</p>
      </div>
    </div>
  );
}