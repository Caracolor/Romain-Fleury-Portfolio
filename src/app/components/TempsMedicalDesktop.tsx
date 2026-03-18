import React from "react";
import { StatsCard } from "./StatsCard";
import { InterventionBubble } from "./InterventionBubble";
import { AnimatedMouseCursor } from "./AnimatedMouseCursor";
import { useTranslation } from "./LanguageContext";
import { StatTooltip } from "./StatTooltip";
import svgPathsCarrot from "../../imports/svg-e0fdtd1c5z";
import svgPathsMouse from "../../imports/svg-h3681qlot9";
import svgPathsBubble from "../../imports/svg-kf00idfee1";
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
   Shared styles
   ═══════════════════════════════════════════════════════════════ */

const LABEL_CLS = "font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase";
const TITLE_CLS = "font-['Aeonik:Bold',sans-serif] leading-[45px] text-[#16121b] text-[36px]";
const BODY_CLS = "font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px]";
const CARD_BORDER = "absolute inset-0 pointer-events-none rounded-[30px]";

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-[8px] items-start">
      <p className={LABEL_CLS}>{label}</p>
      <h2 className={`${TITLE_CLS} max-w-[700px]`}>{title}</h2>
      {subtitle && <p className={`${BODY_CLS} max-w-[700px] mt-[4px]`}>{subtitle}</p>}
    </div>
  );
}

function Placeholder({ width, height, text }: { width: number | string; height: number | string; text: string }) {
  return (
    <div
      className="bg-[#E5E7EB] rounded-[12px] flex items-center justify-center"
      style={{ width, height }}
    >
      <p className="font-['Aeonik:Regular',sans-serif] text-[#9CA3AF] text-[14px] text-center px-[24px] leading-[20px]">
        {text}
      </p>
    </div>
  );
}

function Highlight({ children, color = "rose" }: { children: React.ReactNode; color?: "rose" | "teal" }) {
  const bg = color === "rose" ? "bg-[#fce4ec]" : "bg-[#e0f2f1]";
  return <span className={`${bg} px-[4px] py-[1px] rounded-[4px]`}>{children}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */

function TagPill({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <div className="bg-white relative inline-flex items-center justify-center px-[16px] py-[8px] rounded-[20px] shrink-0">
      <div
        aria-hidden="true"
        className={`absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[20px] ${accent ? "border-[#afa2df]" : "border-[#eeedff]"}`}
      />
      <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[16px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

export function HeroDesktopTempsMedical() {
  const cs = useTranslation("case_study_medical_time");

  return (
    <div className="flex items-start justify-between w-full relative px-[0px] pt-[80px] pb-[0px]">
      {/* Left column */}
      <div className="flex flex-col gap-[64px] items-start shrink-0 w-[550px] relative">
        <div className="flex flex-col gap-[24px] items-start">
          {/* Tags */}
          <div className="flex gap-[16px] items-center">
            <TagPill text={cs.meta.tag} />
            <TagPill text={cs.meta.team} />
            <TagPill text={cs.meta.duration} />
          </div>
          <h1 className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[40px] tracking-[18px] uppercase pl-[8px] pr-[0px] py-[0px]">
            {cs.hero.title}
          </h1>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[28px] pl-[8px] pr-[0px] py-[0px]">
            {cs.hero.subtitle}
          </p>
        </div>

        {/* KPI card */}
        <div className="bg-white relative rounded-[30px] w-full" style={{ boxShadow: "26.83px 40.245px 53.66px 0px rgba(159,188,246,0.15)" }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[30px]"
            style={{
              padding: 4,
              background: "linear-gradient(to right, rgba(195,192,255,0.3), rgba(255,255,255,0.3))",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="flex items-center justify-between px-[40px] py-[32px] font-['Aeonik:Regular',sans-serif] text-[#40295b] text-center w-full">
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

        {/* Decorative mouse cursor */}
        <AnimatedMouseCursor
          size={46}
          style={{ position: "absolute", top: "50%", right: -80, transform: "translateY(-50%)", zIndex: 10 }}
        />
      </div>

      {/* Right illustration */}
      <div className="h-[538px] shrink-0 w-[426px]">
        <img
          alt="Interface de téléconsultation redesignée"
          className="max-w-none object-cover pointer-events-none size-full"
          src={imgIllustrationHybrid1}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. LE CHALLENGE
   ═══════════════════════════════════════════════════════════════ */

export function ChallengeDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const ch = cs.challenge;

  return (
    <div className="flex flex-col gap-[52px] w-full">
      <SectionHeader
        label={ch.section_title}
        title={ch.headline}
        subtitle={ch.intro}
      />

      {/* Offre vs Demande chart */}
      <div className="relative w-full" style={{ aspectRatio: "2838 / 1077" }}>
        <img alt="Graphique offre vs demande" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOffreDemande1} />
      </div>

      {/* 3 columns */}
      <div className="flex gap-[40px] items-start w-full">
        <div className="flex flex-1 flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start text-[#40295b] rounded-[30px]">
          <p className="text-[32px] leading-[normal] w-full">{ch.problem_title}</p>
          <div className="text-[20px] leading-[28px] w-full whitespace-pre-wrap">
            <p>{ch.problem_text}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start text-[#40295b] rounded-[30px]">
          <p className="text-[32px] leading-[normal] w-full">{ch.opportunities_title}</p>
          <div className="text-[20px] leading-[28px] w-full">
            <p className="mb-0">{ch.opportunities[0]}</p>
            <p className="mt-[28px]">{ch.opportunities[1]}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col font-['Aeonik:Regular',sans-serif] gap-[16px] items-start text-[#40295b] rounded-[30px]">
          <p className="text-[32px] leading-[normal] w-full">{ch.constraint_title}</p>
          <div className="text-[20px] leading-[28px] w-full whitespace-pre-wrap">
            <p>{ch.constraint_text}</p>
          </div>
        </div>
      </div>

      {/* Consultation time chart */}
      <div className="relative w-full" style={{ aspectRatio: "3890 / 1016" }}>
        <img alt="Average time in consultation" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConsultationTimeDesktop1} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. MON RÔLE
   ═══════════════════════════════════════════════════════════════ */

function PillarItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-[16px] items-start w-full">
      <div className="rounded-[10px] shrink-0 w-[4px] self-stretch bg-[#d7d0ef]" />
      <div className="flex flex-col gap-[16px] flex-1 font-['Aeonik:Regular',sans-serif] text-[#40295b]">
        <p className="text-[32px] leading-[normal]">{title}</p>
        <p className="text-[20px] leading-[normal]">{body}</p>
      </div>
    </div>
  );
}

export function MonRoleDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const role = cs.role;

  return (
    <div className="flex flex-col gap-[56px] w-full">
      <SectionHeader label={role.section_title} title={role.headline} subtitle={role.description} />

      <div className="flex gap-[80px] w-full items-center">
        {/* Left column - Organigramme */}
        <div className="shrink-0 flex flex-col gap-[24px] items-end">
          <div className="bg-[#f6fcf9] rounded-[30px] w-[420px] overflow-hidden">
            <div className="relative w-[420px]" style={{ height: 480 }}>
              <img
                alt="Organigram de l'équipe design"
                className="absolute max-w-none"
                style={{ width: "100.03%", height: "71.04%", left: "0.24%", top: "14.06%" }}
                src={imgOrganisgram1}
              />
            </div>
          </div>
          <p className="font-['Aeonik:Regular',sans-serif] text-[#16121b] text-[16px] text-center leading-[normal] w-full">Organigramme de l'équipe design</p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[32px] flex-1">
          <PillarItem title={role.pillars[0].title} body={role.pillars[0].text} />
          <PillarItem title={role.pillars[1].title} body={role.pillars[1].text} />
          <PillarItem title={role.pillars[2].title} body={role.pillars[2].text} />
        </div>
      </div>

      {/* Team members */}
      <div className="flex gap-[27px] items-center justify-center py-[40px] w-full">
        <div className="flex gap-[16px] items-center w-[340px]">
          <div className="relative rounded-[1000px] shrink-0 size-[72px]">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[70.875px]">
                  <img alt="Léa" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLea} />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[3.375px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic text-[#24466c] text-[20px] w-[223.456px] whitespace-pre-wrap">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">{role.team_members[0].name} </p>
            <p>{role.team_members[0].role}</p>
          </div>
        </div>
        
        <div className="flex gap-[16px] items-center w-[340px]">
          <div className="relative rounded-[1000px] shrink-0 size-[72px]">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[71.633px]">
                  <img alt="Titouan" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTitouan} />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[3.411px] border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
          </div>
          <div className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic text-[#24466c] text-[20px] w-[245.12px]">
            <p className="font-['Aeonik:Bold',sans-serif] mb-0">{role.team_members[1].name}</p>
            <p>{role.team_members[1].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. DISCOVERY
   ═══════════════════════════════════════════════════════════════ */

export function DiscoveryDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const ins = cs.insight;

  return (
    <div className="flex flex-col gap-[56px] w-full">
      <SectionHeader
        label={ins.section_title}
        title={ins.headline}
        subtitle={ins.description}
      />

      {/* Discovery workflow image */}
      <div className="relative w-full" style={{ aspectRatio: "2424 / 768" }}>
        <img alt="Discovery workflow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiscoveryWorkflow} />
      </div>

      <div className="flex gap-[40px] items-start w-full">
        {/* Left col - Plan de discovery */}
        <div className="bg-[#f2effa] flex-1 rounded-[24px] self-stretch relative">
          <div className="flex flex-col gap-[24px] items-start w-full pl-[32px] pr-[36px] pt-[32px] pb-[58px]">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[#40295b] text-[24px]">Plan de discovery</p>
            <div className="flex flex-col gap-[16px] w-full">
              {/* Item 1 */}
              <div className="flex gap-[12px] items-start w-full">
                <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[#7a63ca] text-[16px] shrink-0">→</span>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px] flex-1">
                  <span>Revue de la littérature médicale et recommandations </span>
                  <span className="font-['Aeonik:Bold',sans-serif]">HAS</span>
                  <span> (Haute Autorité de Santé)</span>
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="flex gap-[12px] items-start w-full">
                <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[#7a63ca] text-[16px] shrink-0">→</span>
                <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px] flex-1">{`Session de travail avec l'équipe médicale (Dr. Melot)`}</p>
              </div>
              
              {/* Items 3 & 4 avec bordure pointillée */}
              <div className="relative mt-[8px]">
                {/* Bordure pointillée */}
                <div className="border-4 border-[#3c3162] border-dashed rounded-[20px] p-[20px]">
                  <div className="flex flex-col gap-[16px]">
                    {/* Item 3 - Analyse data */}
                    <div className="flex gap-[12px] items-start w-full">
                      <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[#7a63ca] text-[16px] shrink-0">→</span>
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px] flex-1">
                        <span>Analyse data via </span>
                        <span className="font-['Aeonik:Bold',sans-serif]">Metabase</span>
                        <span> & </span>
                        <span className="font-['Aeonik:Bold',sans-serif]">Contentsquare</span>
                      </p>
                    </div>
                    
                    {/* Item 4 - 5 fausses téléconsultations */}
                    <div className="flex gap-[12px] items-start w-full">
                      <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[#7a63ca] text-[16px] shrink-0">→</span>
                      <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px] flex-1">
                        <span className="font-['Aeonik:Bold',sans-serif]">5 fausses téléconsultations</span>
                        <span> pour la gêne urinaire</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bulle d'intervention positionnée sous la bordure */}
                <div className="absolute left-0 right-0 top-full mt-[13px] flex justify-center">
                  <InterventionBubble text={ins.discovery_note} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right col - Enseignements clés */}
        <div className="bg-[#e4f6ee] flex-1 rounded-[24px]">
          <div className="flex flex-col gap-[24px] items-start p-[32px] w-full">
            <p className="font-['Aeonik:Bold',sans-serif] leading-[30px] text-[#40295b] text-[24px]">{ins.key_findings_title}</p>
            <div className="flex flex-col gap-[16px] w-full">
              {ins.key_findings.map((finding, i) => (
                <div key={i} className="flex gap-[12px] items-start w-full">
                  <span className="font-['Aeonik:Regular',sans-serif] leading-[24px] text-[#7a63ca] text-[16px] shrink-0">→</span>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px] flex-1">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insight décisif – déplacé ici */}
      
      {/* Arbre de décision sur la gêne urinaire */}
      <div className="flex flex-col gap-[26px] items-center w-full px-[0px] pt-[80px] pb-[0px]">
        <div className="relative rounded-[30px] shadow-[0px_0px_0px_1.063px_rgba(0,0,0,0.2),0px_0px_2.125px_0px_rgba(0,0,0,0.08),0px_2.125px_6.376px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[946px]" style={{ height: "1737.156px" }}>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
            <div className="absolute bg-white inset-0 rounded-[30px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[30px]">
              <img alt="Arbre de décision sur la gêne urinaire" className="absolute left-0 max-w-none size-full top-0" src={imgImage24} />
            </div>
          </div>
        </div>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[16px] text-center w-full max-w-[946px]">
          {ins.decision_tree_caption}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. L'APPROCHE DESIGN
   ═══════════════════════════════════════════════════════════════ */

export function ApprochDesignDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const da = cs.design_approach;

  return (
    <div className="bg-[#f2effa] flex flex-col items-center justify-center py-[56px] w-full">
      <div className="flex flex-col gap-[56px] items-start shrink-0 w-[946px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] items-start w-[706px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase">{da.section_title}</p>
          <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[#40295b] text-[36px] w-[533.9px]">{da.headline}</p>
        </div>
        
        {/* 3 Cards */}
        <div className="flex gap-[40px] items-stretch w-full">
          {da.pillars.map((pillar, i) => (
            <div key={i} className="flex-1 flex flex-row items-stretch">
              <div className="bg-white flex-1 min-h-px min-w-px relative rounded-[30px]">
                <div aria-hidden="true" className="absolute border-4 border-[#e4e0f4] border-solid inset-0 pointer-events-none rounded-[30px]" />
                <div className="flex flex-col gap-[16px] items-start p-[32px] w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] text-[#0a0a0a] text-[32px] tracking-[0.4063px] whitespace-nowrap">{pillar.emoji}</p>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] text-[#40295b] text-[24px]">{pillar.title}</p>
                  <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#40295b] text-[16px]">{pillar.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Avant-Après Image */}
        <div className="aspect-[4054/1876] relative rounded-[30px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
            <div className="absolute bg-[#f6fcf9] inset-0 rounded-[30px]" />
            <img alt="Avant-après de l'interface de consultation" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgAvantApres1} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. ITÉRATION
   ═══════════════════════════════════════════════════════════════ */

export function IterationDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const it = cs.iteration;

  return (
    <div className="flex flex-col gap-[40px] items-start w-full">
      {/* Header */}
      <div className="flex flex-col gap-[10px] items-start">
        <div className="flex h-[29.5px] items-start">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{it.section_title}</p>
        </div>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[#16121b] text-[36px] whitespace-nowrap">{it.headline}</p>
        <p className="font-['Aeonik:Regular',sans-serif] leading-[30px] text-[#40295b] text-[24px] w-[660px]">{it.description}</p>
      </div>
      
      {/* Layout iteration image */}
      <div className="aspect-[4096/1726] relative shrink-0 w-full">
        <img alt="Évolution des 3 versions de layout" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[30px]" src={imgLayoutIteration1} />
      </div>
      
      {/* Bold move block */}
      <div className="bg-[#f2effa] flex gap-[30px] items-center p-[32px] relative rounded-[30px] shrink-0 w-[950px]">
        <div aria-hidden="true" className="absolute border-4 border-[#afa2df] border-solid inset-0 pointer-events-none rounded-[30px]" />
        
        {/* Icon container */}
        <div className="bg-[#e4e0f4] flex items-center justify-center relative rounded-[22.8px] shrink-0 size-[76px]">
          <div className="relative shrink-0 size-[28px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <g>
                  <path d={svgPathsRocket.p5001800} fill="#7A63CA" />
                  <path d={svgPathsRocket.p19b0b9f0} fill="#7A63CA" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Text content */}
        <div className="flex flex-col gap-[8px] h-[122px] items-start text-[#40295b] shrink-0 w-[780px]">
          <p className="font-['Aeonik:Bold',sans-serif] leading-[36px] text-[24px] whitespace-nowrap">{it.bold_move_title}</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[20px] w-[753px]">{it.bold_move_text}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. USER TEST
   ═══════════════════════════════════════════════════════════════ */

export function UserTestDesktop() {
  return (
    <div className="flex flex-col gap-[40px] w-full">
      <SectionHeader
        label="User test"
        title="Valider par la preuve"
        subtitle="Un exemple concret de comment le challenge en amont se traduit en amélioration mesurable après les tests."
      />

      <div className="grid grid-cols-2 gap-[24px] w-full">
        <div className="bg-[#f7f7fa] rounded-[24px] p-[32px] flex flex-col gap-[16px]">
          <p className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[22px]">Avant les tests</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[#40295b] text-[18px]">
            J'étais convaincu que le bouton 'Nouvelle prescription' dans le panneau de prescriptions n'était pas assez visible car il manquait de contexte. Plutôt que d'imposer un changement, j'en ai discuté avec Léa pour qu'elle intègre ce point dans le protocole de test utilisateur.
          </p>
        </div>
        <div className="bg-[#f0faf5] rounded-[24px] p-[32px] flex flex-col gap-[16px]" style={{ border: "3px solid #a4e0c6" }}>
          <p className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[22px]">Après les tests</p>
          <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[#40295b] text-[18px]">
            Le test a confirmé le problème. L'emplacement a été modifié pour améliorer la visibilité et la compréhension. L'action 'Ajouter un médicament' est passée en bas de la liste des prescriptions, dans le contexte d'usage.
          </p>
        </div>
      </div>

      <Placeholder width="100%" height={300} text="Image : Before/After du panneau prescriptions (bouton 'New prescription' en haut à droite → 'Ajouter un médicament' en bas de liste)" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. LEARNINGS
   ═══════════════════════════════════════════════════════════════ */

export function LearningsDesktop() {
  const cs = useTranslation("case_study_medical_time");
  const lr = cs.learnings;

  return (
    <div className="flex flex-col gap-[56px] items-start w-full">
      {/* Header */}
      <div className="flex flex-col gap-[8px] items-start w-[706px]">
        <div className="flex h-[29px] items-start w-[378.508px]">
          <p className="font-['Aeonik:Regular',sans-serif] leading-[normal] text-[#7a63ca] text-[24px] tracking-[4.8px] uppercase whitespace-nowrap">{lr.section_title}</p>
        </div>
        <p className="font-['Aeonik:Bold',sans-serif] leading-[45px] text-[#40295b] text-[36px] w-full">{lr.headline}</p>
      </div>
      
      {/* Two columns */}
      <div className="flex gap-[40px] items-start w-full">
        {/* Left column */}
        <div className="flex-1 min-h-px min-w-px flex flex-col gap-[16px] items-start">
          <div className="flex h-[21.5px] items-start w-full">
            <p className="flex-1 font-['Aeonik:Bold',sans-serif] leading-[normal] text-[#40295b] text-[18px]">{lr.worked_title}</p>
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {lr.worked.map((text, i) => (
              <div key={i} className="bg-[#f6fcf9] relative rounded-[14px] w-full">
                <div aria-hidden="true" className="absolute border-4 border-[#a4e0c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="flex gap-[16px] items-center p-[24px] w-full">
                  <div className="flex flex-col h-[7.922px] items-start shrink-0 w-[10.422px]">
                    <div className="h-[7.922px] overflow-clip relative w-full">
                      <div className="absolute inset-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4219 7.92188">
                          <path clipRule="evenodd" d={svgPathsLearnings.p406e100} fill="#A4E0C6" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right column */}
        <div className="flex-1 min-h-px min-w-px flex flex-col gap-[16px] items-start">
          <div className="flex h-[21.5px] items-start w-full">
            <p className="flex-1 font-['Aeonik:Bold',sans-serif] leading-[normal] text-[#40295b] text-[18px]">{lr.failed_title}</p>
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {lr.failed.map((text, i) => (
              <div key={i} className="bg-[#feeff2] relative rounded-[14px] w-full">
                <div aria-hidden="true" className="absolute border-4 border-[#f9a2af] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="flex gap-[16px] items-center p-[24px] w-full">
                  <div className="flex flex-col items-start shrink-0 size-[10px]">
                    <div className="h-[10px] overflow-clip relative w-full">
                      <div className="absolute inset-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99998 9.99998">
                          <path clipRule="evenodd" d={svgPathsLearnings.p7bd3900} fill="#F9A2AF" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="flex-1 font-['Aeonik:Regular',sans-serif] leading-[28px] text-[#40295b] text-[20px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. BANDEAU STATUS
   ═══════════════════════════════════════════════════════════════ */

export function StatusBannerDesktop() {
  return (
    <div
      className="bg-[#f2effa] border-4 border-[#afa2df] rounded-[30px] p-[48px] flex flex-col gap-[20px] items-center text-center w-full"
      style={{ boxShadow: "26.83px 40.24px 53.66px 0px rgba(159,188,246,0.15)" }}
    >
      {/* Icon circle */}
      <div className="w-[76px] h-[76px] rounded-full bg-[#e4e0f4] flex items-center justify-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7A63CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <p className="font-['Aeonik:Bold',sans-serif] text-[#40295b] text-[28px]">Projet en cours</p>
      <p className="font-['Aeonik:Regular',sans-serif] leading-[26px] text-[#40295b] text-[18px] max-w-[600px]">
        Ce projet est actuellement en phase de livraison tech. Les métriques d'impact seront disponibles après le déploiement.
      </p>
    </div>
  );
}