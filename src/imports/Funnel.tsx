import clsx from "clsx";
import svgPaths from "./svg-a102n0vf9s";
import imgOnboardingFunnelShape3 from "@/assets/2e8772cf9ade8d51857159caab4e7697c5cde3df.png";
import imgOnboardingFunnelShape4 from "@/assets/c451dbc6094083fc2a3ba8336599e708e4bb3281.png";
type OnboardingFunnelShapeProps = {
  additionalClassNames?: string;
};

function OnboardingFunnelShape({ children, additionalClassNames = "" }: React.PropsWithChildren<OnboardingFunnelShapeProps>) {
  return (
    <div className={clsx("relative rounded-[20px] shrink-0 w-full", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">{children}</div>
    </div>
  );
}

export default function Funnel({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#ffeac0] content-stretch flex flex-col gap-[40px] items-center justify-center p-[60px] relative rounded-[40px] size-full" data-name="Funnel">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#16121b] text-[24px]">Tunnel de souscription et Onboarding</p>
        <button className="content-stretch cursor-pointer flex items-center p-[4px] relative shrink-0" onClick={onClose}>
          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Outlined/Système/Cross">
            <div className="absolute inset-1/4" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.p18a9af00} fill="var(--fill-0, #40295B)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10.756px] items-center relative shrink-0 w-full">
          <OnboardingFunnelShape additionalClassNames="aspect-[1162/318]">
            <img alt="" className="absolute h-[130.09%] left-[-0.02%] max-w-none top-[-11.28%] w-[102.91%]" src={imgOnboardingFunnelShape3} />
          </OnboardingFunnelShape>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#010101] text-[20px] text-right w-full">Subscription</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[10.218px] items-start relative shrink-0 w-full">
        <OnboardingFunnelShape additionalClassNames="aspect-[1162/294]">
          <img alt="" className="absolute h-[140.71%] left-[-1.84%] max-w-none top-[-10.91%] w-[102.91%]" src={imgOnboardingFunnelShape4} />
        </OnboardingFunnelShape>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#010101] text-[20px] text-right w-full">Onboarding</p>
      </div>
    </div>
  );
}