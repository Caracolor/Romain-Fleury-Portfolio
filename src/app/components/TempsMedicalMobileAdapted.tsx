import React from "react";
import { InterventionBubble } from "./InterventionBubble";
import { AnimatedMouseCursor } from "./AnimatedMouseCursor";
import { useTranslation } from "./LanguageContext";
import { StatTooltip } from "./StatTooltip";
import image_9c21aee94ef64637cfbeed778dd9762776306afb from 'figma:asset/9c21aee94ef64637cfbeed778dd9762776306afb.png'
import image_512ff59f04327aa92ced48924ddb5bdfd2d746ee from 'figma:asset/512ff59f04327aa92ced48924ddb5bdfd2d746ee.png'
import image_25f97dea947a0e3a5412c371eacde1a450de3759 from 'figma:asset/25f97dea947a0e3a5412c371eacde1a450de3759.png'
import image_67dd1390210a8a11cd0de85d6a6c0edc1ad99a51 from 'figma:asset/67dd1390210a8a11cd0de85d6a6c0edc1ad99a51.png'
import svgPathsCarrot from "../../imports/svg-e0fdtd1c5z";
import svgPathsRocket from "../../imports/svg-ih2ozeb3v7";
import svgPathsLearnings from "../../imports/svg-b6nbpwykbe";
import imgIllustrationHybrid1 from "figma:asset/4a694fe37c89e831b17ffcc945ced9c8d1ccbca5.png";
import imgOffreDemande1 from "figma:asset/21363b588e3c244cb572f9799af56ec8ae7a2fb9.png";
import imgConsultationTimeDesktop1 from "figma:asset/119b9d08982735226c998127e9e2ca9ad617a580.png";
import imgOrganisgram1 from "figma:asset/fb28a3fd7c23dbf855f8316f9a578b7e5395c3cd.png";
import imgLea from "figma:asset/5d3aa7fff8e1d250f910487a824ca86998ddd868.png";
import imgTitouan from "figma:asset/cdbc2a9643259de6fa0b6a470f74773eadf8d035.png";
import imgDiscoveryWorkflow from "figma:asset/3b92b510279dff858eeeea280c7b9c830671086f.png";
import imgImage24 from "figma:asset/6a84daf118dcd7bdbc8533ef80263c5e6dc6c58b.png";
import imgAvantApres1 from "figma:asset/5abc98df57480d34cdb6e825b2ac4fb4b883c7f3.png";
import imgLayoutIteration1 from "figma:asset/d72fc7a5015b34c695ad837485b43c1f6291fcd4.png";

/* ═══════════════════════════════════════════════════════════════
   Shared mobile styles
   ═══════════════════════════════════════════════════════════════ */

const LABEL_CLS = "font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#7a63ca] text-[16px] tracking-[3px] uppercase";
const TITLE_CLS = "font-['Aeonik:Bold',sans-serif] leading-[28px] text-[#40295b] text-[22px]";
const BODY_CLS = "font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px]";

function MobileSectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-start px-[20px]">
      <p className={LABEL_CLS}>{label}</p>
      <h2 className={TITLE_CLS}>{title}</h2>
      {subtitle && <p className={`${BODY_CLS} mt-[4px]`}>{subtitle}</p>}
    </div>
  );
}

function TagPill({ text }: { text: string }) {
  return (
    <div className="bg-white relative inline-flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[2.5px] border-solid inset-0 pointer-events-none rounded-[16px] border-[#eeedff]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[13px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function HeroMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");

  return (
    <div className="flex flex-col items-center gap-[24px] w-full px-[20px] pt-[20px] pb-[0px]">
      <div className="relative w-full">
        <img
          src={image_67dd1390210a8a11cd0de85d6a6c0edc1ad99a51}
          alt="Interface de téléconsultation redesignée"
          className="w-full rounded-[16px] object-contain"
        />
        <AnimatedMouseCursor
          size={36}
          style={{
            position: "absolute",
            top: "58%",
            left: "58%",
          }}
        />
      </div>

      <div className="flex flex-wrap gap-[8px] justify-center">
        <TagPill text={cs.meta.tag} />
        <TagPill text={cs.meta.team} />
        <TagPill text={cs.meta.duration} />
      </div>

      <h1 className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[36px] tracking-[10px] uppercase text-center">
        {cs.hero.title}
      </h1>

      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[20px] text-center">
        {cs.hero.subtitle}
      </p>

      {/* KPI card */}
      <div className="bg-white relative rounded-[20px] w-full" style={{ boxShadow: "12px 18px 30px 0px rgba(159,188,246,0.15)" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={{
            padding: 3,
            background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div className="flex items-center justify-between px-[20px] py-[20px] font-['Aeonik:Regular',sans-serif] text-[#40295b] text-center w-full">
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

/* ═══════════════════════════════════════════════════════════════
   2. LE CHALLENGE MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function ChallengeMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const ch = cs.challenge;

  return (
    <div className="flex flex-col gap-[32px] w-full">
      <MobileSectionHeader label={ch.section_title} title={ch.headline} subtitle={ch.intro} />

      <div className="px-[20px]">
        <div className="relative w-full" style={{ aspectRatio: "2838 / 1077" }}>
          <img alt="Graphique offre vs demande" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOffreDemande1} />
        </div>
      </div>

      {/* 3 blocks stacked */}
      <div className="flex flex-col gap-[16px] px-[20px]">
        <ChallengeCardTM title={ch.problem_title}>
          <p>{ch.problem_text}</p>
        </ChallengeCardTM>
        <ChallengeCardTM title={ch.opportunities_title}>
          <p className="mb-0">{ch.opportunities[0]}</p>
          <p className="mt-[8px]">{ch.opportunities[1]}</p>
        </ChallengeCardTM>
        <ChallengeCardTM title={ch.constraint_title}>
          <p>{ch.constraint_text}</p>
        </ChallengeCardTM>
      </div>

      <div className="px-[20px]">
        <img alt="Average time in consultation" className="w-full pointer-events-none" src={image_25f97dea947a0e3a5412c371eacde1a450de3759} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. MON RÔLE MOBILE
   ═══════════════════════════════════════════════════════════════ */

function PillarItemMobile({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-[12px] items-start w-full">
      <div className="rounded-[8px] shrink-0 w-[3px] self-stretch bg-[#d7d0ef]" />
      <div className="flex flex-col gap-[10px] flex-1 font-['Aeonik:Regular',sans-serif] text-[#40295b]">
        <p className="text-[18px] leading-[normal]">{title}</p>
        <p className="text-[15px] leading-[22px]">{body}</p>
      </div>
    </div>
  );
}

export function MonRoleMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const role = cs.role;

  return (
    <div className="flex flex-col gap-[32px] w-full">
      <MobileSectionHeader label={role.section_title} title={role.headline} subtitle={role.description} />

      {/* Organigramme */}
      <div className="px-[20px]">
        <div className="bg-[#f6fcf9] rounded-[20px] w-full overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: "420 / 480" }}>
            <img
              alt="Organigram de l'équipe design"
              className="absolute max-w-none"
              style={{ width: "100%", height: "71%", left: "0%", top: "14%" }}
              src={imgOrganisgram1}
            />
          </div>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] text-[#16121b] text-[13px] text-center leading-[normal] w-full mt-[12px]">Organigram de l'équipe design</p>
      </div>

      {/* Pillars */}
      <div className="flex flex-col gap-[24px] px-[20px]">
        <PillarItemMobile title={role.pillars[0].title} body={role.pillars[0].text} />
        <PillarItemMobile title={role.pillars[1].title} body={role.pillars[1].text} />
        <PillarItemMobile title={role.pillars[2].title} body={role.pillars[2].text} />
      </div>

      {/* Team members */}
      <div className="flex flex-col gap-[20px] items-center px-[20px]">
        <div className="flex gap-[12px] items-center w-full">
          <div className="relative rounded-full shrink-0 size-[52px] overflow-hidden">
            <img alt="Léa" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLea} />
            <div aria-hidden="true" className="absolute border-[2.5px] border-solid border-white inset-0 pointer-events-none rounded-full" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#24466c] text-[15px]">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">{role.team_members[0].name}</p>
            <p>{role.team_members[0].role}</p>
          </div>
        </div>
        <div className="flex gap-[12px] items-center w-full">
          <div className="relative rounded-full shrink-0 size-[52px] overflow-hidden">
            <img alt="Titouan" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTitouan} />
            <div aria-hidden="true" className="absolute border-[2.5px] border-solid border-white inset-0 pointer-events-none rounded-full" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#24466c] text-[15px]">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">{role.team_members[1].name}</p>
            <p>{role.team_members[1].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. DISCOVERY MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function DiscoveryMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const ins = cs.insight;

  return (
    <div className="flex flex-col gap-[32px] w-full">
      <MobileSectionHeader label={ins.section_title} title={ins.headline} subtitle={ins.description} />

      {/* Discovery workflow image */}
      <div className="px-[20px]">
        
      </div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-[20px] px-[20px]">
        {/* Plan de discovery */}
        <div className="bg-[#f2effa] rounded-[20px] w-full">
          <div className="flex flex-col gap-[16px] items-start p-[20px]">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[26px] text-[#40295b] text-[20px]">Plan de discovery</p>
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex gap-[10px] items-start w-full">
                <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[#7a63ca] text-[14px] shrink-0">→</span>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] flex-1">
                  <span>Revue de la littérature médicale et recommandations </span>
                  <span className="font-['Aeonik:Bold',sans-serif]">HAS</span>
                  <span> (Haute Autorité de Santé)</span>
                </p>
              </div>
              <div className="flex gap-[10px] items-start w-full">
                <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[#7a63ca] text-[14px] shrink-0">→</span>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] flex-1">{`Session de travail avec l'équipe médicale (Dr. Melot)`}</p>
              </div>

              {/* Bordered items */}
              <div className="relative mt-[4px]">
                <div className="border-[3px] border-[#3c3162] border-dashed rounded-[16px] p-[16px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex gap-[10px] items-start w-full">
                      <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[#7a63ca] text-[14px] shrink-0">→</span>
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] flex-1">
                        <span>Analyse data via </span>
                        <span className="font-['Aeonik:Bold',sans-serif]">Metabase</span>
                        <span> & </span>
                        <span className="font-['Aeonik:Bold',sans-serif]">Contentsquare</span>
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-start w-full">
                      <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[#7a63ca] text-[14px] shrink-0">→</span>
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] flex-1">
                        <span className="font-['Aeonik:Bold',sans-serif]">5 fausses téléconsultations</span>
                        <span> pour la gêne urinaire</span>
                      </p>
                    </div>
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

        {/* Enseignements clés */}
        <div className="bg-[#e4f6ee] rounded-[20px] w-full">
          <div className="flex flex-col gap-[16px] items-start p-[20px]">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[26px] text-[#40295b] text-[20px]">{ins.key_findings_title}</p>
            <div className="flex flex-col gap-[12px] w-full">
              {ins.key_findings.map((finding, i) => (
                <div key={i} className="flex gap-[10px] items-start w-full">
                  <span className="font-['Aeonik:Regular',sans-serif] leading-[20px] text-[#7a63ca] text-[14px] shrink-0">→</span>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] flex-1">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arbre de décision */}
      <div className="flex flex-col gap-[16px] items-center px-[20px]">
        <div className="relative rounded-[20px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] w-full overflow-hidden" style={{ aspectRatio: "946 / 1737" }}>
          <img alt="Arbre de décision sur la gène urinaire" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage24} />
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[13px] text-center w-full">
          Illustration : Arbre de décision sur la gène urinaire
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. L'APPROCHE DESIGN MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function ApprochDesignMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const da = cs.design_approach;

  return (
    <div className="flex flex-col gap-[32px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[6px] items-start">
        <p className={LABEL_CLS}>{da.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[#40295b] text-[22px]">{da.headline}</p>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        {da.pillars.map((card) => (
          <div key={card.title} className="bg-white relative rounded-[20px] w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="flex flex-col gap-[10px] items-start p-[20px]">
              <p className="text-[28px] leading-[36px]">{card.emoji}</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[#40295b] text-[18px]">{card.title}</p>
              <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[20px] w-full overflow-hidden">
        <img alt="Avant-après de l'interface de consultation" className="w-full pointer-events-none" src={image_512ff59f04327aa92ced48924ddb5bdfd2d746ee} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. ITÉRATION MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function IterationMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const it = cs.iteration;

  return (
    <div className="flex flex-col gap-[24px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[6px] items-start">
        <p className={LABEL_CLS}>{it.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[#16121b] text-[22px]">{it.headline}</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px] mt-[4px]">{it.description}</p>
      </div>
      <div className="w-full">
        <img alt="Évolution des 3 versions de layout" className="w-full pointer-events-none rounded-[30px]" src={image_9c21aee94ef64637cfbeed778dd9762776306afb} />
      </div>
      <div className="bg-[#f2effa] flex gap-[16px] items-start p-[20px] relative rounded-[20px] w-full">
        <div aria-hidden="true" className="absolute border-[3px] border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[20px]" />

        {/* Icon */}
        <div className="bg-[#e4e0f4] flex items-center justify-center rounded-[16px] shrink-0 size-[52px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <g>
                <path d={svgPathsRocket.p5001800} fill="#7A63CA" />
                <path d={svgPathsRocket.p19b0b9f0} fill="#7A63CA" />
              </g>
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[6px] flex-1 text-[#40295b]">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[20px]">{it.bold_move_title}</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[22px] text-[15px]">{it.bold_move_text}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. LEARNINGS MOBILE
   ═══════════════════════════════════════════════════════════════ */

export function LearningsMobileAdapted() {
  const cs = useTranslation("case_study_medical_time");
  const lr = cs.learnings;

  return (
    <div className="flex flex-col gap-[32px] items-start w-full px-[20px]">
      <div className="flex flex-col gap-[6px] items-start">
        <p className={LABEL_CLS}>{lr.section_title}</p>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[28px] text-[#40295b] text-[22px]">{lr.headline}</p>
      </div>
      <div className="flex flex-col gap-[12px] items-start w-full">
        <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] text-[#40295b] text-[16px]">{lr.worked_title}</p>
        {lr.worked.map((text, i) => (
          <div key={i} className="bg-[#f6fcf9] relative rounded-[12px] w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-[#a4e0c6] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex gap-[12px] items-center p-[16px] w-full">
              <div className="shrink-0 w-[10px] h-[8px] relative">
                <div className="absolute inset-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
                    <path clipRule="evenodd" d={svgPathsLearnings.p406e100} fill="#A4E0C6" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[12px] items-start w-full">
        <p className="font-['Aeonik:Bold',sans-serif] leading-[normal] text-[#40295b] text-[16px]">{lr.failed_title}</p>
        {lr.failed.map((text, i) => (
          <div key={i} className="bg-[#feeff2] relative rounded-[12px] w-full">
            <div aria-hidden="true" className="absolute border-[3px] border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex gap-[12px] items-center p-[16px] w-full">
              <div className="shrink-0 size-[10px] relative">
                <div className="absolute inset-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
                    <path clipRule="evenodd" d={svgPathsLearnings.p7bd3900} fill="#F9A2AF" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[22px] text-[#40295b] text-[15px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. CHALLENGE CARD TM
   ═══════════════════════════════════════════════════════════════ */

function ChallengeCardTM({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white relative rounded-[20px] p-[20px] flex flex-col gap-[12px] w-full">
      <div
        aria-hidden="true"
        className="absolute border-[4px] border-[#deddf8] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] not-italic text-[#40295b] text-[22px]">
        {title}
      </p>
      <div className="font-['Aeonik:Regular',sans-serif] leading-[22px] not-italic text-[#40295b] text-[15px]">
        {children}
      </div>
    </div>
  );
}