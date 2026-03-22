# Optimiser le temps médical — LLM & Hybrid TC

**Lancement :** Assistant Médical : octobre 2025 / Hybrid TC : mars 2026
**Rôle :** Head of Product Design — Management et alignement stratégique
**Entreprise :** Qare (groupe HealthHero)
**Équipe :** Romain Fleury (Head of Product Design), Léa Rabi (Product Designer), Titouan (Product Designer), Gregory Guilloth (Product Manager), Pierre-Olivier Calande (CPO)

---

## Contexte

Deux chantiers menés en parallèle autour d'une même vision : libérer du temps médical en réduisant la charge cognitive et administrative des médecins à chaque téléconsultation. L'objectif affiché dans la Product Vision 2028 : **gagner 40% du temps médical**.

**Assistant Médical** — Génération automatique du compte-rendu par LLM pendant la consultation, et suggestions cliniques intelligentes pré-remplies avant la TC via un agent conversationnel (Bilan de Santé / Symptom Checker).

**Hybrid TC** — Consultation augmentée où tout est pré-rempli par l'IA avant que le médecin ne démarre : diagnostic avec probabilités, prescription suggérée, compte-rendu en cours de rédaction en temps réel. Le médecin contrôle, corrige, valide.

La Product Vision 2028 a été co-construite avec le CPO en format narratif — une journée type d'un médecin et d'un patient — pour embarquer l'ensemble des équipes produit. Hybrid TC y était positionné comme le chantier central.

---

## Rôle

Rôle de management et d'alignement stratégique exclusivement sur ce projet. Léa Rabi et Titouan assuraient la conception et les tests utilisateurs.

- **Vision & cadrage** — co-construction avec le CPO Pierre-Olivier Calande d'une Product Vision 2028 en format narratif pour embarquer les équipes produit.
- **COPIL** — animation et participation aux comités de pilotage réunissant le CEO, CFO, direction médicale, ops, marketing, PMM. Présence explicitement justifiée par la nécessité d'ancrer les décisions C-suite dans l'expérience réelle.
- **Coaching design** — challenge continu des équipes sur la discovery, la conception et les tests utilisateurs. Participation en tant qu'observateur à certaines sessions de recherche.
- **Concept & Conception reviews** — animation des reviews pour élever le niveau d'exigence sur les parcours et les interfaces dans un contexte où les outputs du LLM sont imprévisibles.

La présence du Head of Design en COPIL C-suite était explicitement justifiée par la nature très technique et produit du sujet. Sans design dans la salle, le risque était des arbitrages purement techniques ou business déconnectés de l'expérience réelle des médecins et patients.

---

## Problème

**Côté médecin :**
- Une consultation de télémédecine concentre plusieurs activités cognitives simultanées : écouter le patient, poser un diagnostic, rédiger le CR, gérer l'ordonnance, naviguer dans une interface lourde.
- Plus de 2 minutes de charge administrative par TC.
- Fatigue liée à la répétition des mêmes tâches de saisie.
- Difficulté à assurer un compte-rendu complet et structuré.
- Visibilité difficile des comptes-rendus précédents et prescriptions en cours de TC.

**Côté patient :**
- Prescriptions avec des erreurs ou des oublis, sans possibilité de contacter le médecin après coup.
- Sentiment de ne pas être écouté — le médecin partage son attention entre le patient et l'écran.
- Hétérogénéité de la qualité des consultations selon le médecin.

---

## La contrainte centrale : la black box du LLM

Le défi design le plus structurant sur ce projet n'était pas réglementaire ni technique au sens classique — c'était l'imprévisibilité des outputs du LLM. Les équipes ne pouvaient pas concevoir avec certitude : un prompt légèrement différent produit des résultats très différents.

**Risques concrets documentés :**
- Hallucinations — confusion entre patient et tiers (ex : "la maman vomit" au lieu de "le bébé vomit")
- Erreurs de terminologie médicale — utilisation du langage patient au lieu du langage clinique
- Comptes-rendus trop verbeux — trop de symptômes listés au lieu de prioriser
- Diagnostics trop prudents — "probable gastroentérite virale" au lieu de "gastroentérite"
- Examen clinique rempli automatiquement sans qu'aucun examen n'ait été réalisé

**Réponse design :** Le médecin reste toujours en contrôle. Chaque output est présenté comme une suggestion modifiable, jamais comme une vérité. Le design du feedback loop (relire, corriger, valider) est aussi important que le design de l'output lui-même.

Le vrai problème aujourd'hui n'est pas le LLM — c'est la qualité audio en entrée. Un mauvais input donne un mauvais output, peu importe la qualité du modèle.

---

## Contraintes réglementaires

- EU MDR et ANSM — dispositif médical numérique soumis à certification
- LAP (Logiciel d'Aide à la Prescription) — chaque suggestion de prescription doit être validée explicitement par le médecin
- Confidentialité des données patients — suppression de l'audio à la fin de chaque TC
- Exclusion initiale des psychologues et psychiatres — outil non adapté en l'état

---

## Solution déployée

**Prise de notes** — Enregistrement audio automatique de la TC. Génération du compte-rendu par IA en moins de 5 secondes à la fin de la consultation. Le médecin relit, modifie, valide. KPI objectif : 70% des comptes-rendus générés par l'IA.

**Suggestions cliniques intelligentes (Bilan de Santé)** — Agent conversationnel IA qui interroge le patient entre la réservation et la TC. À l'ouverture de la consultation, le médecin accède à un contexte clinique structuré avec probabilités de diagnostic et suggestions de prescription. Phase 1 MVP : motif "Gêne urinaire" uniquement — cas clinique fréquent, schéma prévisible, faible variabilité. Exemple : Cystite aiguë simple 95% de probabilité → prescriptions PIVMECILINAM et MONURIL suggérées.

**Hybrid TC** — Si la probabilité de diagnostic est suffisamment élevée → tout est pré-rempli. Le médecin contrôle et valide. Si la probabilité est trop faible → interface TC classique. Le médecin peut basculer vers l'interface classique à tout moment. KPI principal : durée de consultation (Hybrid TC vs TC standard). Objectif déploiement : 30% des TC en Hybrid TC d'ici fin mars 2026, sur environ 427 médecins top actifs.

---

## Stratégie d'adoption

- **Praticiens existants :** Volontariat — entre 2 et 3 demandes d'accès par jour sur 2500 praticiens actifs.
- **Nouveaux praticiens :** Feature activée par défaut — décision de Romain Fleury pour normaliser l'usage sans biais de sélection.
- Une minorité de praticiens reste réfractaire, ce qui est normal dans tout déploiement d'outil IA en milieu médical.

---

## Analyse qualité LLM — 8 900 comptes-rendus (post-prompt du 12/02/2026)

Méthodologie : Analyse NLP comparative pour identifier les hallucinations (ajouts par l'IA) et les omissions (suppressions par l'IA) par rapport à la correction finale du médecin.

**Compte-rendu et diagnostic :** 85% des erreurs sont des hallucinations. Phrases de disclaimer systématiquement supprimées, manque de concision, abréviations non utilisées (l'IA écrit "traitement", les médecins corrigent par "ttt").

**Diagnostic :** 85% des erreurs sont des hallucinations, dont 75% sont des termes médicaux. Excès de prudence ("probable gastroentérite virale" au lieu de "gastroentérite"), termes génériques au lieu de diagnostic précis.

**Interrogatoire :** 76% des erreurs sont des hallucinations. Langage patient au lieu de langage médical ("maux de tête" vs "céphalées", "pas de fièvre" vs "apyrétique"). Verbes de narration systématiquement supprimés. Âge du patient souvent absent du CR IA.

**Omissions :** 5% des omissions concernent des noms de médicaments — signal de risque médical direct.

**Recommandations prompt engineering issues de l'analyse :**
- Bannir les termes d'incertitude : supprimer "probable", "suspicion de", "ambiguïté"
- Forcer la terminologie clinique précise — remplacer les termes génériques par la pathologie exacte
- Supprimer le narratif explicatif — ne garder que le diagnostic
- Traduire systématiquement les symptômes patient en terminologie médicale
- Autoriser les abréviations standards (ttt, ATCD, apyrétique, etc.)

---

## Impact

L'impact est positif quand les comptes-rendus sont courts et concis. Mais certains praticiens passent plus de temps à relire et corriger les outputs qu'à les écrire eux-mêmes. Le vrai enjeu c'est la confiance : tant que les résultats sont volatils, les médecins ne délèguent pas vraiment.

Objectifs : 70% des CR générés par l'IA, 30% des TC en Hybrid TC d'ici fin mars 2026.

---

## Apprentissages

- La black box du LLM redéfinit ce que "tester" veut dire en design. On ne peut pas valider un parcours comme on valide un formulaire — les outputs varient et les cas limites sont imprévisibles.
- La confiance des médecins se construit (ou se perd) sur des détails que le design doit anticiper sans pouvoir les fixer.
- Le vrai problème n'est pas le modèle — c'est la qualité de l'input. L'audio est le premier goulot d'étranglement.
- Embarquer une organisation sur une vision IA demande un travail de narration autant que de conception. Les COPIL C-suite se pilotent avec des histoires concrètes, pas des specs.

---

## Q&R

**Quel était ton rôle sur ce projet ?**
Un rôle de management et d'alignement stratégique exclusivement. Léa Rabi et Titouan assuraient la conception et les tests utilisateurs. J'intervenais sur la vision — co-construction avec le CPO d'une Product Vision 2028 en format narratif pour embarquer les équipes — sur les COPIL avec le CEO, CFO, direction médicale, ops et marketing, et sur le coaching des équipes design via les concept et conception reviews.

**Comment avez-vous géré les contraintes réglementaires ?**
Le cadre réglementaire est strict : EU MDR, ANSM, et LAP pour les suggestions de prescription. La réponse design a été de ne jamais présenter un output du LLM comme une vérité — tout est une suggestion modifiable, validée explicitement par le médecin avant envoi. L'audio est supprimé automatiquement à la fin de chaque TC. Les psychologues et psychiatres ont été exclus du déploiement initial.

**Comment les médecins ont-ils adopté l'outil ?**
Il y a une minorité réfractaire, c'est normal. La stratégie d'adoption : volontariat pour les praticiens existants — entre 2 et 3 demandes d'accès par jour sur 2500 praticiens actifs. Et pour les nouveaux praticiens, la feature est activée par défaut. C'est ma décision : le volontariat crée un biais de sélection, le default-on normalise l'usage.

**Quels risques avez-vous identifiés sur les outputs du LLM ?**
Plusieurs types documentés : hallucinations, erreurs de terminologie médicale, comptes-rendus trop verbeux, diagnostics trop prudents. Sur 8900 CR analysés, 85% des erreurs sont des hallucinations — le LLM produit trop, pas trop peu. Mais le vrai problème aujourd'hui c'est la qualité audio — un mauvais input donne un mauvais output, peu importe la qualité du modèle.

**Quel impact sur le temps de consultation ?**
L'impact est positif quand les comptes-rendus sont courts et concis. Mais certains praticiens passent plus de temps à relire et corriger les outputs qu'à les écrire eux-mêmes. Le vrai enjeu c'est la confiance : tant que les résultats sont volatils, les médecins ne délèguent pas vraiment. Et le LLM seul ne résoudra pas ça — la consistance des outputs dépend aussi de la qualité audio en amont.
