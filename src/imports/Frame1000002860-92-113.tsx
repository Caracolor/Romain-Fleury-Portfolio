import clsx from "clsx";
import imgFrame1000002860 from "figma:asset/11af05f0212fbda46592464adca2cfe9cb64b28e.png";
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-white h-[327px] relative rounded-[30px] shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Helper />
        </div>
        <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
      <Helper1 text="Qare" text1="Optimiser le temps médical" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#40295b] text-[24px] w-full">{text}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-[min-content]">{text}</p>
      <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-[305px]">{text1}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end p-[32px] relative size-full">
          <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
            <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">{"IC design Lead"}</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
            <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">{"Business Impact"}</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
            <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[43px]">{"Vision"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type FrameProps = {
  onQareClick?: () => void;
  onTempsMedicalClick?: () => void;
};

export default function Frame({ onQareClick, onTempsMedicalClick }: FrameProps) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase w-[547px]">Projects</p>
      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[946px] cursor-pointer transition-opacity hover:opacity-90"
        onClick={onQareClick}
        role={onQareClick ? "button" : undefined}
      >
        <div className="h-[461px] relative rounded-[30px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
            <div className="absolute bg-white inset-0 rounded-[30px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgFrame1000002860} />
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <Helper />
          </div>
          <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
        </div>
        <Helper1 text="Qare" text1="Chronic Programs" />
        <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full whitespace-pre-wrap">
          <span className="leading-[30px]">{`Transformer un service de téléconsultation ponctuelle en programmes d'abonnement pour des soins récurent et/ou chronique  → `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">2 179</span>
          <span className="leading-[30px]">{` patients, `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">230%</span>
          <span className="leading-[30px]">{` vs objectif, `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">€18k</span>
          <span className="leading-[30px]">{` MRR en 6 mois`}</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
        <div
          className="flex flex-[1_0_0] flex-row items-start self-stretch cursor-pointer transition-opacity hover:opacity-90"
          onClick={onTempsMedicalClick}
          role={onTempsMedicalClick ? "button" : undefined}
        >
          <Text text="Passer d'une interface exhaustive à une interface contextuelle pour libérer 40% de temps administratif" additionalClassNames="h-full" />
        </div>
        <Text text="Lorem ipsum" />
      </div>
    </div>
  );
}