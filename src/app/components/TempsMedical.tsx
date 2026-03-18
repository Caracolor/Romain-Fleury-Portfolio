import React from "react";
import { StatsCard } from "./StatsCard";
import { InterventionBubble } from "./InterventionBubble";
import { AnimatedMouseCursor } from "./AnimatedMouseCursor";
import { useTranslation } from "./LanguageContext";
import { StatTooltip } from "./StatTooltip";
import { useIsMobile } from "./useIsMobile";
import svgPathsRocket from "../../imports/svg-ih2ozeb3v7";
import svgPathsLearnings from "../../imports/svg-b6nbpwykbe";

// Shared images
import imgIllustrationHybrid1 from "@/assets/4a694fe37c89e831b17ffcc945ced9c8d1ccbca5.png";
import imgOffreDemande1 from "@/assets/21363b588e3c244cb572f9799af56ec8ae7a2fb9.png";
import imgConsultationTimeDesktop from "@/assets/119b9d08982735226c998127e9e2ca9ad617a580.png";
import imgConsultationTimeMobile from "@/assets/25f97dea947a0e3a5412c371eacde1a450de3759.png";
import imgHeroMobile from "@/assets/67dd1390210a8a11cd0de85d6a6c0edc1ad99a51.png";
import imgOrganisgram1 from "@/assets/fb28a3fd7c23dbf855f8316f9a578b7e5395c3cd.png";
import imgLea from "@/assets/5d3aa7fff8e1d250f910487a824ca86998ddd868.png";
import imgTitouan from "@/assets/cdbc2a9643259de6fa0b6a470f74773eadf8d035.png";
import imgDiscoveryWorkflow from "@/assets/3b92b510279dff858eeeea280c7b9c830671086f.png";
import imgImage24 from "@/assets/6a84daf118dcd7bdbc8533ef80263c5e6dc6c58b.png";
import imgAvantApresDesktop from "@/assets/5abc98df57480d34cdb6e825b2ac4fb4b883c7f3.png";
import imgAvantApresMobile from "@/assets/512ff59f04327aa92ced48924ddb5bdfd2d746ee.png";
import imgLayoutDesktop from "@/assets/d72fc7a5015b34c695ad837485b43c1f6291fcd4.png";
import imgLayoutMobile from "@/assets/9c21aee94ef64637cfbeed778dd9762776306afb.png";

/* ═══════════════════════════════════════════════════════════════
   Internal sub-components
   ═══════════════════════════════════════════════════════════════ */

function TagPill({ text, mobile }: { text: string; mobile?: boolean }) {
  return (
    <div className={`bg-[var(--color-qare-white)] relative inline-flex items-center justify-center rounded-[20px] shrink-0 ${mobile ? "px-[12px] py-[6px]" : "px-[16px] py-[8px]"}`}>
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[20px] border-[var(--color-qare-030)] ${mobile ? "border-[2.5px]" : "border-[3px]"}`}
      />
      <p className={`font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] whitespace-nowrap ${mobile ? "text-[13px]" : "text-[16px]"}`}>
        {text}
      </p>
    </div>
  );
}

function ChallengeCardTM({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-qare-white)] relative rounded-[20px] p-[20px] flex flex-col gap-[12px] w-full">
      <div aria-hidden="true" className="absolute border-[4px] border-[#deddf8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[var(--color-qare-text)] text-[22px]">{title}</p>
      <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] not-italic text-[var(--color-qare-text)] text-[15px]">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */

export function HeroTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-[24px] w-full px-[20px] pt-[20px] pb-[0px]">
        <div className="relative w-full">
          <img src={imgHeroMobile} alt="Interface de téléconsultation redesignée" className="w-full rounded-[16px] object-contain" />
          <AnimatedMouseCursor size={36} style={{ position: "absolute", top: "58%", left: "58%" }} />
        </div>
        <div className="flex flex-wrap gap-[8px] justify-center">
          <TagPill text={cs.meta.tag} mobile /><TagPill text={cs.meta.team} mobile /><TagPill text={cs.meta.duration} mobile />
        </div>
        <h1 className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[36px] tracking-[10px] uppercase text-center">{cs.hero.title}</h1>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[20px] text-center">{cs.hero.subtitle}</p>
        <div className="bg-[var(--color-qare-white)] relative rounded-[20px] w-full" style={{ boxShadow: "12px 18px 30px 0px rgba(159,188,246,0.15)" }}>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]" style={{ padding: 3, background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
          <div className="flex items-center justify-between px-[20px] py-[20px] font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-center w-full">
            {cs.hero_stats.map((stat, i) => (
              <StatTooltip key={i} tooltip={stat.tooltip}>
                <div className="flex flex-col gap-[2px] items-center flex-1">
                  <p className="text-[22px]">{stat.value}</p>
                  <p className="text-[12px]">{stat.label}</p>
                </div>
              </StatTooltip>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between w-full relative px-[0px] pt-[80px] pb-[0px]">
      <div className="flex flex-col gap-[64px] items-start shrink-0 w-[550px] relative">
        <div className="flex flex-col gap-[24px] items-start">
          <div className="flex gap-[16px] items-center">
            <TagPill text={cs.meta.tag} /><TagPill text={cs.meta.team} /><TagPill text={cs.meta.duration} />
          </div>
          <h1 className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[40px] tracking-[18px] uppercase pl-[8px]">{cs.hero.title}</h1>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[28px] pl-[8px]">{cs.hero.subtitle}</p>
        </div>
        <div className="bg-[var(--color-qare-white)] relative rounded-[30px] w-full" style={{ boxShadow: "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)" }}>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]" style={{ padding: 4, background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
          <div className="flex items-center justify-between px-[40px] py-[32px] font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] text-center w-full">
            {cs.hero_stats.map((stat, i) => (
              <StatTooltip key={i} tooltip={stat.tooltip}>
                <div className="flex flex-col gap-[2px] items-center w-[132px]">
                  <p className="text-[32px]">{stat.value}</p>
                  <p className="text-[16px] whitespace-nowrap">{stat.label}</p>
                </div>
              </StatTooltip>
            ))}
          </div>
        </div>
        <AnimatedMouseCursor size={46} style={{ position: "absolute", top: "50%", right: -80, transform: "translateY(-50%)", zIndex: 10 }} />
      </div>
      <div className="h-[538px] shrink-0 w-[426px]">
        <img alt="Interface de téléconsultation redesignée" className="max-w-none object-cover pointer-events-none size-full" src={imgIllustrationHybrid1} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. LE CHALLENGE
   ═══════════════════════════════════════════════════════════════ */

export function ChallengeTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const ch = cs.challenge;
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[6px] items-start px-[20px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{ch.section_title}</p>
          <h2 className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{ch.headline}</h2>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] mt-[4px]">{ch.intro}</p>
        </div>
        <div className="px-[20px]">
          <div className="relative w-full" style={{ aspectRatio: "2838 / 1077" }}>
            <img loading="lazy" alt="Graphique offre vs demande" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOffreDemande1} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] px-[20px]">
          <ChallengeCardTM title={ch.problem_title}><p>{ch.problem_text}</p></ChallengeCardTM>
          <ChallengeCardTM title={ch.opportunities_title}>
            <p className="mb-0">{ch.opportunities[0]}</p>
            <p className="mt-[8px]">{ch.opportunities[1]}</p>
          </ChallengeCardTM>
          <ChallengeCardTM title={ch.constraint_title}><p>{ch.constraint_text}</p></ChallengeCardTM>
        </div>
        <div className="px-[20px]">
          <img loading="lazy" alt="Average time in consultation" className="w-full pointer-events-none" src={imgConsultationTimeMobile} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[52px] w-full">
      <div className="flex flex-col gap-[8px] items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase">{ch.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-ink)] text-[36px] max-w-[700px]">{ch.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] max-w-[700px] mt-[4px]">{ch.intro}</p>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "2838 / 1077" }}>
        <img loading="lazy" alt="Graphique offre vs demande" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOffreDemande1} />
      </div>
      <div className="flex gap-[40px] items-start w-full">
        {[{ title: ch.problem_title, content: <p>{ch.problem_text}</p> }, { title: ch.opportunities_title, content: <><p className="mb-0">{ch.opportunities[0]}</p><p className="mt-[28px]">{ch.opportunities[1]}</p></> }, { title: ch.constraint_title, content: <p>{ch.constraint_text}</p> }].map(({ title, content }, i) => (
          <div key={i} className="flex flex-1 flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start text-[var(--color-qare-text)] rounded-[30px]">
            <p className="text-[32px] leading-[normal] w-full">{title}</p>
            <div className="text-[20px] leading-[28px] w-full whitespace-pre-wrap">{content}</div>
          </div>
        ))}
      </div>
      <div className="relative w-full" style={{ aspectRatio: "3890 / 1016" }}>
        <img loading="lazy" alt="Average time in consultation" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConsultationTimeDesktop} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. MON RÔLE
   ═══════════════════════════════════════════════════════════════ */

export function MonRoleTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const role = cs.role;
  const isMobile = useIsMobile();

  const teamMembers = [
    { img: imgLea, alt: "Léa", name: role.team_members[0].name, role: role.team_members[0].role },
    { img: imgTitouan, alt: "Titouan", name: role.team_members[1].name, role: role.team_members[1].role },
  ];

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[6px] items-start px-[20px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{role.section_title}</p>
          <h2 className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{role.headline}</h2>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] mt-[4px]">{role.description}</p>
        </div>
        <div className="px-[20px]">
          <div className="bg-[#f6fcf9] rounded-[20px] w-full overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "420 / 480" }}>
              <img alt="Organigram de l'équipe design" className="absolute max-w-none" style={{ width: "100%", height: "71%", left: "0%", top: "14%" }} src={imgOrganisgram1} />
            </div>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-ink)] text-[13px] text-center leading-[normal] w-full mt-[12px]">Organigram de l'équipe design</p>
        </div>
        <div className="flex flex-col gap-[24px] px-[20px]">
          {role.pillars.map((p: { title: string; text: string }, i: number) => (
            <div key={i} className="flex gap-[12px] items-start w-full">
              <div className="rounded-[8px] shrink-0 w-[3px] self-stretch bg-[var(--color-qare-150)]" />
              <div className="flex flex-col gap-[10px] flex-1 font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)]">
                <p className="text-[18px] leading-[normal]">{p.title}</p>
                <p className="text-[15px] leading-[22px]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[20px] items-center px-[20px]">
          {teamMembers.map((m) => (
            <div key={m.alt} className="flex gap-[12px] items-center w-full">
              <div className="relative rounded-full shrink-0 size-[52px] overflow-hidden">
                <img loading="lazy" alt={m.alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={m.img} />
                <div aria-hidden="true" className="absolute border-[2.5px] border-solid border-white inset-0 pointer-events-none rounded-full" />
              </div>
              <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#24466c] text-[15px]">
                <p className="font-['Aeonik:Bold',sans-serif] mb-0">{m.name}</p>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[56px] w-full">
      <div className="flex flex-col gap-[8px] items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase">{role.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-ink)] text-[36px] max-w-[700px]">{role.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] max-w-[700px] mt-[4px]">{role.description}</p>
      </div>
      <div className="flex gap-[80px] w-full items-center">
        <div className="shrink-0 flex flex-col gap-[24px] items-end">
          <div className="bg-[#f6fcf9] rounded-[30px] w-[420px] overflow-hidden">
            <div className="relative w-[420px]" style={{ height: 480 }}>
              <img alt="Organigram de l'équipe design" className="absolute max-w-none" style={{ width: "100.03%", height: "71.04%", left: "0.24%", top: "14.06%" }} src={imgOrganisgram1} />
            </div>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-ink)] text-[16px] text-center leading-[normal] w-full">Organigramme de l'équipe design</p>
        </div>
        <div className="flex flex-col gap-[32px] flex-1">
          {role.pillars.map((p: { title: string; text: string }, i: number) => (
            <div key={i} className="flex gap-[16px] items-start w-full">
              <div className="rounded-[10px] shrink-0 w-[4px] self-stretch bg-[var(--color-qare-150)]" />
              <div className="flex flex-col gap-[16px] flex-1 font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)]">
                <p className="text-[32px] leading-[normal]">{p.title}</p>
                <p className="text-[20px] leading-[normal]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[27px] items-center justify-center py-[40px] w-full">
        {teamMembers.map((m) => (
          <div key={m.alt} className="flex gap-[16px] items-center w-[340px]">
            <div className="relative rounded-full shrink-0 size-[72px] overflow-hidden">
              <img loading="lazy" alt={m.alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={m.img} />
              <div aria-hidden="true" className="absolute border-[3.375px] border-solid border-white inset-0 pointer-events-none rounded-full" />
            </div>
            <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic text-[#24466c] text-[20px]">
              <p className="font-['Aeonik:Bold',sans-serif] mb-0">{m.name}</p>
              <p>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. DISCOVERY
   ═══════════════════════════════════════════════════════════════ */

export function DiscoveryTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const ins = cs.insight;
  const isMobile = useIsMobile();

  const discoveryItems = [
    { content: <><span>Revue de la littérature médicale et recommandations </span><span className="font-['Aeonik:Bold',sans-serif]">HAS</span><span> (Haute Autorité de Santé)</span></> },
    { content: <span>{`Session de travail avec l'équipe médicale (Dr. Melot)`}</span> },
  ];
  const borderedItems = [
    { content: <><span>Analyse data via </span><span className="font-['Aeonik:Bold',sans-serif]">Metabase</span><span> & </span><span className="font-['Aeonik:Bold',sans-serif]">Contentsquare</span></> },
    { content: <><span className="font-['Aeonik:Bold',sans-serif]">5 fausses téléconsultations</span><span> pour la gêne urinaire</span></> },
  ];

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[6px] items-start px-[20px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{ins.section_title}</p>
          <h2 className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{ins.headline}</h2>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] mt-[4px]">{ins.description}</p>
        </div>
        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="bg-[var(--color-qare-050)] rounded-[20px] w-full">
            <div className="flex flex-col gap-[16px] items-start p-[20px]">
              <p className="font-['Aeonik:Bold',sans-serif] leading-[26px] text-[var(--color-qare-text)] text-[20px]">Plan de discovery</p>
              <div className="flex flex-col gap-[12px] w-full">
                {discoveryItems.map((item, i) => (
                  <div key={i} className="flex gap-[10px] items-start w-full">
                    <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[var(--color-qare-brand)] text-[14px] shrink-0">→</span>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] flex-1">{item.content}</p>
                  </div>
                ))}
                <div className="relative mt-[4px]">
                  <div className="border-[3px] border-[var(--color-qare-800)] border-dashed rounded-[16px] p-[16px]">
                    <div className="flex flex-col gap-[12px]">
                      {borderedItems.map((item, i) => (
                        <div key={i} className="flex gap-[10px] items-start w-full">
                          <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[var(--color-qare-brand)] text-[14px] shrink-0">→</span>
                          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] flex-1">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-[10px] flex justify-center">
                    <div className="w-full max-w-[320px]">
                      <InterventionBubble text={ins.discovery_note} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#e4f6ee] rounded-[20px] w-full">
            <div className="flex flex-col gap-[16px] items-start p-[20px]">
              <p className="font-['Aeonik:Bold',sans-serif] leading-[26px] text-[var(--color-qare-text)] text-[20px]">{ins.key_findings_title}</p>
              <div className="flex flex-col gap-[12px] w-full">
                {ins.key_findings.map((finding: string, i: number) => (
                  <div key={i} className="flex gap-[10px] items-start w-full">
                    <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[var(--color-qare-brand)] text-[14px] shrink-0">→</span>
                    <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] flex-1">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-center px-[20px]">
          <div className="relative rounded-[20px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] w-full overflow-hidden" style={{ aspectRatio: "946 / 1737" }}>
            <img loading="lazy" alt="Arbre de décision sur la gêne urinaire" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage24} />
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[13px] text-center w-full">{ins.decision_tree_caption}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[56px] w-full">
      <div className="flex flex-col gap-[8px] items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase">{ins.section_title}</p>
        <h2 className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-ink)] text-[36px] max-w-[700px]">{ins.headline}</h2>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] max-w-[700px] mt-[4px]">{ins.description}</p>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "2424 / 768" }}>
        <img loading="lazy" alt="Discovery workflow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiscoveryWorkflow} />
      </div>
      <div className="flex gap-[40px] items-start w-full">
        <div className="bg-[var(--color-qare-050)] flex-1 rounded-[24px] self-stretch relative">
          <div className="flex flex-col gap-[24px] items-start w-full pl-[32px] pr-[36px] pt-[32px] pb-[58px]">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[24px]">Plan de discovery</p>
            <div className="flex flex-col gap-[16px] w-full">
              {discoveryItems.map((item, i) => (
                <div key={i} className="flex gap-[12px] items-start w-full">
                  <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[var(--color-qare-brand)] text-[16px] shrink-0">→</span>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] flex-1">{item.content}</p>
                </div>
              ))}
              <div className="relative mt-[8px]">
                <div className="border-4 border-[var(--color-qare-800)] border-dashed rounded-[20px] p-[20px]">
                  <div className="flex flex-col gap-[16px]">
                    {borderedItems.map((item, i) => (
                      <div key={i} className="flex gap-[12px] items-start w-full">
                        <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[var(--color-qare-brand)] text-[16px] shrink-0">→</span>
                        <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] flex-1">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 right-0 top-full mt-[13px] flex justify-center">
                  <InterventionBubble text={ins.discovery_note} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e4f6ee] flex-1 rounded-[24px]">
          <div className="flex flex-col gap-[24px] items-start p-[32px] w-full">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[24px]">{ins.key_findings_title}</p>
            <div className="flex flex-col gap-[16px] w-full">
              {ins.key_findings.map((finding: string, i: number) => (
                <div key={i} className="flex gap-[12px] items-start w-full">
                  <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[var(--color-qare-brand)] text-[16px] shrink-0">→</span>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[20px] flex-1">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[26px] items-center w-full px-[0px] pt-[80px] pb-[0px]">
        <div className="relative rounded-[30px] shadow-[0px_0px_0px_1.063px_rgba(0,0,0,0.2),0px_0px_2.125px_0px_rgba(0,0,0,0.08),0px_2.125px_6.376px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[946px]" style={{ height: "1737.156px" }}>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
            <div className="absolute bg-[var(--color-qare-white)] inset-0 rounded-[30px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[30px]">
              <img loading="lazy" alt="Arbre de décision sur la gêne urinaire" className="absolute left-0 max-w-none size-full top-0" src={imgImage24} />
            </div>
          </div>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[16px] text-center w-full max-w-[946px]">{ins.decision_tree_caption}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. L'APPROCHE DESIGN
   ═══════════════════════════════════════════════════════════════ */

export function ApprochDesignTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const da = cs.design_approach;
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[32px] items-start w-full px-[20px]">
        <div className="flex flex-col gap-[6px] items-start">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{da.section_title}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{da.headline}</p>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          {da.pillars.map((card: { emoji: string; title: string; text: string }) => (
            <div key={card.title} className="bg-[var(--color-qare-white)] relative rounded-[20px] w-full">
              <div aria-hidden="true" className="absolute border-[3px] border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <div className="flex flex-col gap-[10px] items-start p-[20px]">
                <p className="text-[28px] leading-[36px]">{card.emoji}</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[var(--color-qare-text)] text-[18px]">{card.title}</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px]">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[20px] w-full overflow-hidden">
          <img loading="lazy" alt="Avant-après de l'interface de consultation" className="w-full pointer-events-none" src={imgAvantApresMobile} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[56px] items-start w-full">
      <div className="flex flex-col gap-[8px] items-start w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase">{da.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-text)] text-[36px] w-[533.9px]">{da.headline}</p>
      </div>
      <div className="flex gap-[40px] items-stretch w-full">
        {da.pillars.map((pillar: { emoji: string; title: string; text: string }, i: number) => (
          <div key={i} className="flex-1 flex flex-row items-stretch">
            <div className="bg-[var(--color-qare-white)] flex-1 min-h-px min-w-px relative rounded-[30px]">
              <div aria-hidden="true" className="absolute border-4 border-[var(--color-qare-100)] border-solid inset-0 pointer-events-none rounded-[30px]" />
              <div className="flex flex-col gap-[16px] items-start p-[32px] w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">{pillar.emoji}</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[24px]">{pillar.title}</p>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[16px]">{pillar.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="aspect-[4054/1876] relative rounded-[30px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <div className="absolute bg-[#f6fcf9] inset-0 rounded-[30px]" />
          <img loading="lazy" alt="Avant-après de l'interface de consultation" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgAvantApresDesktop} />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. ITÉRATION
   ═══════════════════════════════════════════════════════════════ */

export function IterationTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const it = cs.iteration;
  const isMobile = useIsMobile();

  const boldMoveCard = (
    <div className={`bg-[var(--color-qare-050)] relative rounded-[20px] w-full ${isMobile ? "flex gap-[16px] items-start p-[20px]" : "flex gap-[30px] items-center p-[32px] rounded-[30px]"}`}>
      <div aria-hidden="true" className={`absolute border-solid border-[var(--color-qare-300)] inset-0 pointer-events-none ${isMobile ? "border-[3px] rounded-[20px]" : "border-4 rounded-[30px]"}`} />
      <div className={`bg-[var(--color-qare-100)] flex items-center justify-center rounded-[16px] shrink-0 ${isMobile ? "size-[52px]" : "rounded-[22.8px] size-[76px]"}`}>
        <div className={`relative shrink-0 ${isMobile ? "size-[20px]" : "size-[28px]"}`}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g>
              <path d={svgPathsRocket.p5001800} fill="var(--color-qare-brand)" />
              <path d={svgPathsRocket.p19b0b9f0} fill="var(--color-qare-brand)" />
            </g>
          </svg>
        </div>
      </div>
      <div className={`flex flex-col text-[var(--color-qare-text)] flex-1 ${isMobile ? "gap-[6px]" : "gap-[8px]"}`}>
        <p className={`font-['Aeonik:Bold',sans-serif] ${isMobile ? "leading-[28px] text-[20px]" : "leading-[36px] text-[24px]"}`}>{it.bold_move_title}</p>
        <p className={`font-['Aeonik:Regular',sans-serif] ${isMobile ? "leading-[22px] text-[15px]" : "leading-[26px] text-[20px]"}`}>{it.bold_move_text}</p>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
        <div className="flex flex-col gap-[6px] items-start">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{it.section_title}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-ink)] text-[22px]">{it.headline}</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[var(--color-qare-text)] text-[15px] mt-[4px]">{it.description}</p>
        </div>
        <div className="w-full">
          <img loading="lazy" alt="Évolution des 3 versions de layout" className="w-full pointer-events-none rounded-[30px]" src={imgLayoutMobile} />
        </div>
        {boldMoveCard}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[40px] items-start w-full">
      <div className="flex flex-col gap-[10px] items-start">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{it.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-ink)] text-[36px] whitespace-nowrap">{it.headline}</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] text-[var(--color-qare-text)] text-[24px] w-[660px]">{it.description}</p>
      </div>
      <div className="aspect-[4096/1726] relative shrink-0 w-full">
        <img loading="lazy" alt="Évolution des 3 versions de layout" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[30px]" src={imgLayoutDesktop} />
      </div>
      {boldMoveCard}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. LEARNINGS
   ═══════════════════════════════════════════════════════════════ */

export function LearningsTempsMedical() {
  const cs = useTranslation("case_study_medical_time");
  const lr = cs.learnings;
  const isMobile = useIsMobile();

  const checkIcon = (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
      <path clipRule="evenodd" d={svgPathsLearnings.p406e100} fill="#A4E0C6" fillRule="evenodd" />
    </svg>
  );
  const crossIcon = (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
      <path clipRule="evenodd" d={svgPathsLearnings.p7bd3900} fill="#F9A2AF" fillRule="evenodd" />
    </svg>
  );

  const workedItems = lr.worked.map((text: string, i: number) => (
    <div key={i} className={`bg-[#f6fcf9] relative ${isMobile ? "rounded-[12px]" : "rounded-[14px]"} w-full`}>
      <div aria-hidden="true" className={`absolute border-solid border-[#a4e0c6] inset-0 pointer-events-none ${isMobile ? "border-[3px] rounded-[12px]" : "border-4 rounded-[14px]"}`} />
      <div className={`flex gap-[12px] md:gap-[16px] items-center w-full ${isMobile ? "p-[16px]" : "p-[24px]"}`}>
        <div className={`shrink-0 relative ${isMobile ? "w-[10px] h-[8px]" : "w-[10.422px] h-[7.922px]"}`}><div className="absolute inset-0">{checkIcon}</div></div>
        <p className={`flex-1 font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] ${isMobile ? "leading-[22px] text-[15px]" : "leading-[28px] text-[20px]"}`}>{text}</p>
      </div>
    </div>
  ));

  const failedItems = lr.failed.map((text: string, i: number) => (
    <div key={i} className={`bg-[#feeff2] relative ${isMobile ? "rounded-[12px]" : "rounded-[14px]"} w-full`}>
      <div aria-hidden="true" className={`absolute border-solid border-[#f9a2af] inset-0 pointer-events-none ${isMobile ? "border-[3px] rounded-[12px]" : "border-4 rounded-[14px]"}`} />
      <div className={`flex gap-[12px] md:gap-[16px] items-center w-full ${isMobile ? "p-[16px]" : "p-[24px]"}`}>
        <div className={`shrink-0 relative ${isMobile ? "size-[10px]" : "size-[10px]"}`}><div className="absolute inset-0">{crossIcon}</div></div>
        <p className={`flex-1 font-['Aeonik:Regular',sans-serif] text-[var(--color-qare-text)] ${isMobile ? "leading-[22px] text-[15px]" : "leading-[28px] text-[20px]"}`}>{text}</p>
      </div>
    </div>
  ));

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[32px] items-start w-full px-[20px]">
        <div className="flex flex-col gap-[6px] items-start">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[16px] tracking-[3px] uppercase">{lr.section_title}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[var(--color-qare-text)] text-[22px]">{lr.headline}</p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[16px]">{lr.worked_title}</p>
          {workedItems}
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[16px]">{lr.failed_title}</p>
          {failedItems}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[56px] items-start w-full">
      <div className="flex flex-col gap-[8px] items-start w-[706px]">
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[var(--color-qare-brand)] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{lr.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[var(--color-qare-text)] text-[36px] w-full">{lr.headline}</p>
      </div>
      <div className="flex gap-[40px] items-start w-full">
        <div className="flex-1 min-h-px min-w-px flex flex-col gap-[16px] items-start">
          <p className="flex-1 font-['Aeonik:Bold',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[18px]">{lr.worked_title}</p>
          <div className="flex flex-col gap-[16px] items-start w-full">{workedItems}</div>
        </div>
        <div className="flex-1 min-h-px min-w-px flex flex-col gap-[16px] items-start">
          <p className="flex-1 font-['Aeonik:Bold',sans-serif] leading-[normal] text-[var(--color-qare-text)] text-[18px]">{lr.failed_title}</p>
          <div className="flex flex-col gap-[16px] items-start w-full">{failedItems}</div>
        </div>
      </div>
    </div>
  );
}
