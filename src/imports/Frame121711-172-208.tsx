import imgPicture from "@/assets/d056db09b2a2d24aa59fd3a25ea1adb45c65452e.webp";
import imgPicture1 from "@/assets/ccffe314c01aeb4af4ddf2ea17f67a0f97538d27.webp";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[27px] items-center justify-center py-[40px] relative size-full">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[340px]">
        <div className="relative rounded-[1000px] shrink-0 size-[72px]" data-name="⚙️Unpublished/PictureCover">
          <Wrapper>
            <div className="relative shrink-0 size-[70.875px]" data-name="Picture">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPicture} />
            </div>
          </Wrapper>
          <div aria-hidden="true" className="absolute border-[3.375px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
        </div>
        <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#24466c] text-[0px] text-[20px] w-[223.456px] whitespace-pre-wrap">
          <p className="font-['Aeonik:Bold',sans-serif] mb-0">{`Léa `}</p>
          <p>Product Designer asign to the impact team</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[340px]">
        <div className="relative rounded-[1000px] shrink-0 size-[72px]" data-name="⚙️Unpublished/PictureCover">
          <Wrapper>
            <div className="relative shrink-0 size-[71.633px]" data-name="Picture">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPicture1} />
            </div>
          </Wrapper>
          <div aria-hidden="true" className="absolute border-[3.411px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
        </div>
        <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#24466c] text-[0px] text-[20px] w-[245.12px]">
          <p className="font-['Aeonik:Bold',sans-serif] mb-0">Titouan</p>
          <p>Product Designer in charge of the Design System</p>
        </div>
      </div>
    </div>
  );
}