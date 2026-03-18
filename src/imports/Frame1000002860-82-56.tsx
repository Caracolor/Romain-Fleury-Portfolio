import clsx from "clsx";
import imgRectangle2065 from "figma:asset/11af05f0212fbda46592464adca2cfe9cb64b28e.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[30px] shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-4 border-[#7a63ca] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">{text}</p>
      <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] relative shrink-0 text-[#40295b] text-[36px] w-full">{text1}</p>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper additionalClassNames="h-[300px]">
      <div className="bg-[#7a63ca] flex-[1_0_0] min-h-px min-w-px w-full" />
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[60px] tracking-[18px] uppercase w-[547px]">Projects</p>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[946px]">
        <Wrapper additionalClassNames="h-[461px]">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#7a63ca] inset-0" />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle2065} />
            </div>
          </div>
        </Wrapper>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase w-full">Qare</p>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#40295b] text-[36px] whitespace-nowrap">Chronic Programs</p>
          </div>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-[min-content] whitespace-pre-wrap">
          <span className="leading-[30px]">{`Transformer un service de téléconsultation ponctuelle en programmes d'abonnement pour des soins récurent et/ou chronique  → `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">2 179</span>
          <span className="leading-[30px]">{` patients, `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">230%</span>
          <span className="leading-[30px]">{` vs objectif, `}</span>
          <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">€18k</span>
          <span className="leading-[30px]">{` MRR en 6 mois`}</span>
        </p>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <Text text="IC design Lead" />
          <Text text="Business Impact" />
          <Text text="Vision" />
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-[946px]">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
          <Helper />
          <Helper1 text="Lorem ipsum" text1="Titre du case" />
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[24px] w-[min-content]">Sin dolor</p>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <Text text="IC design Lead" />
            <Text text="3 mois" />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
          <Helper />
          <Helper1 text="Lorem ipsum" text1="Titre du case" />
          <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] min-w-full not-italic relative shrink-0 text-[#40295b] text-[24px] w-[min-content]">Lorem ipsum</p>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <Text text="IC design Lead" />
            <Text text="1 PM, 3 Devs" />
            <Text text="3 mois" />
          </div>
        </div>
      </div>
    </div>
  );
}
