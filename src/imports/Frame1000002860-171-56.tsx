import imgFrame1000002860 from "figma:asset/11af05f0212fbda46592464adca2cfe9cb64b28e.png";
import imgFrame1000002861 from "figma:asset/b1e327b80299135e2fc027ba55121756be6c94ae.png";
import imgFrame1000002862 from "figma:asset/42b0e4588a42e64d9354d4538b430ccc04ef48a9.png";
import imgBrandedCall from "figma:asset/f5121ae8295ff655c5d23a610e7985e780962097.png";
import { useTranslation } from "../app/components/LanguageContext";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end p-[32px] relative size-full">{children}</div>
      </div>
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

function HelperChronicPrograms() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">{"IC design Lead"}</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">{"Business Impact"}</p>
      </div>
    </Wrapper>
  );
}

function HelperTempsMedical() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[89.729px]">Design Lead</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[182.313px]">2 Designers, 1 PM, 4 Devs</p>
      </div>
    </Wrapper>
  );
}

function HelperMonetisation() {
  return (
    <Wrapper>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[107px]">{"IC design Lead"}</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Aeonik:Regular',sans-serif] h-[21px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px] w-[118px]">{"Business Impact"}</p>
      </div>
    </Wrapper>
  );
}

type FrameProps = {
  onQareClick?: () => void;
  onTempsMedicalClick?: () => void;
  onMonetisationClick?: () => void;
  onBrandedCallClick?: () => void;
};

export default function Frame({ onQareClick, onTempsMedicalClick, onMonetisationClick, onBrandedCallClick }: FrameProps) {
  const proj = useTranslation("projects_section");
  const items = proj.items;

  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] tracking-[15px] uppercase w-[547px] text-[40px]">{proj.section_title}</p>
        <div 
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[946px] cursor-pointer transition-opacity hover:opacity-90"
          onClick={onQareClick}
          role={onQareClick ? "button" : undefined}
        >
          <div className="h-[461px] relative rounded-[30px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
              <img alt="" className="absolute max-w-none object-cover opacity-95 rounded-[30px] size-full" src={imgFrame1000002860} />
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <HelperChronicPrograms />
            </div>
            <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
          </div>
          <Helper1 text={items[0].company} text1={items[0].title} />
          <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full whitespace-pre-wrap">
            <span className="leading-[30px]">{`${items[0].description}  `}</span>
            <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{`\u2192 ${items[0].result}`}</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] h-[568px] items-center relative shrink-0 w-full">
        <div 
          className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer transition-opacity hover:opacity-90"
          onClick={onTempsMedicalClick}
          role={onTempsMedicalClick ? "button" : undefined}
        >
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
            <div className="h-[327px] relative rounded-[30px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
                <div className="absolute inset-0 opacity-95 overflow-hidden rounded-[30px]">
                  <img alt="" className="absolute h-[137.55%] left-0 max-w-none top-0 w-[113.43%]" src={imgFrame1000002861} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <HelperTempsMedical />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#E4E0F4] border-solid inset-0 pointer-events-none rounded-[30px]" />
            </div>
            <Helper1 text={items[1].company} text1={items[1].title} />
            <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full">
              <span className="leading-[30px]">{`${items[1].description} `}</span>
              <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{`\u2192 ${items[1].result}`}</span>
            </p>
          </div>
        </div>
        <div 
          className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer transition-opacity hover:opacity-90"
          onClick={onMonetisationClick}
          role={onMonetisationClick ? "button" : undefined}
        >
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
            <div className="h-[327px] relative rounded-[30px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                  <img alt="" className="absolute h-[104.27%] left-[-2.99%] max-w-none top-[-2.13%] w-[96.56%]" src={imgFrame1000002862} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <HelperMonetisation />
              </div>
              <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
            </div>
            <Helper1 text={items[2].company} text1={items[2].title} />
            <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full whitespace-pre-wrap">
              <span className="leading-[30px]">{`${items[2].description}  `}</span>
              <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{`\u2192 `}</span>
              <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{items[2].result}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Project 4 — Branded Call (same half-row layout as Monetisation) */}
      {items[3] && (
        <div className="content-stretch flex gap-[40px] h-[568px] items-center relative shrink-0 w-full">
          <div 
            className="flex flex-[1_0_0] flex-row items-center self-stretch cursor-pointer transition-opacity hover:opacity-90"
            onClick={onBrandedCallClick}
            role={onBrandedCallClick ? "button" : undefined}
          >
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
              <div className="h-[327px] relative rounded-[30px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                  <div className="absolute bg-[#231633] inset-0 rounded-[30px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[30px] opacity-95" src={imgBrandedCall} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <Wrapper>
                    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                      <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px]">{items[3].tag}</p>
                    </div>
                    {items[3].tag2 && (
                      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                        <div aria-hidden="true" className="absolute border-4 border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[16px]">{items[3].tag2}</p>
                      </div>
                    )}
                  </Wrapper>
                </div>
                <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
              </div>
              <Helper1 text={items[3].company} text1={items[3].title} />
              <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full whitespace-pre-wrap"><span className="leading-[30px]">{`${items[3].description}  `}</span><span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{`\u2192 ${items[3].result}`}</span></p>
            </div>
          </div>
          {/* Project 5 — Design System (Coming Soon) */}
          {items[4] ? (
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch opacity-50 cursor-default">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative">
              <div className="h-[327px] relative rounded-[30px] shrink-0 w-full bg-[#231633] flex items-center justify-center">
                <p className="font-['Aeonik:Bold',sans-serif] text-[#afa2df] text-[24px] tracking-[5px] uppercase">
                  {proj.coming_soon_label}
                </p>
                <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
              </div>
              <Helper1 text={items[4].company} text1={items[4].title} />
              <p className="font-['Aeonik:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40295b] text-[0px] text-[24px] w-full whitespace-pre-wrap">
                <span className="leading-[30px]">{`${items[4].description}  `}</span>
                <span className="font-['Aeonik:Bold',sans-serif] leading-[30px]">{`\u2192 ${items[4].result}`}</span>
              </p>
              
            </div>
          </div>
          ) : (
          <div className="flex-[1_0_0] min-h-px min-w-px" />
          )}
        </div>
      )}

    </div>
  );
}