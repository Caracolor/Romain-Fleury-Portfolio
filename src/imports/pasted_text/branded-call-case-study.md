Tu as raison, tes case studies sont bilingues. Voici le prompt complet avec les deux langues :

Prompt Figma Make :
Crée une page de case study portfolio pour "Branded Call" en respectant strictement le layout, la grille, la typographie et les composants des pages "Monétisation dans la santé", "Programmes Chronique" et "Optimiser le temps médical" existantes. La structure visuelle doit être identique : même grille à colonnes, mêmes styles de titres (overlines en petites majuscules espacées, titres display en majuscules espacées pour le hero, titres de section en gras), mêmes spacings, mêmes composants (metrics cards, cards en ligne, colonnes de learnings). Ne pas inventer de nouveaux composants. La page doit supporter le bilinguisme FR/EN. Voici le contenu dans les deux langues.

Nav : ← Accueil / Home (lien retour) à gauche | r.s.fleury@gmail.com à droite
Tags : IC Design Lead | 1 PM, 1 Lead Dev | 2025-2026
Image hero : [placeholder - maquette branded call iOS et Android côte à côte]
Hero titre (display, majuscules espacées) :
FR : BRANDED CALL
EN : BRANDED CALL
Hero sous-titre :
FR : Réduire les no-shows en appelant les patients comme un coup de fil classique
EN : Reducing no-shows by calling patients like a regular phone call
3 metrics cards en ligne :

8,4M€/an / 8.4M€/yr : FR: de revenus récupérés | EN: in recovered revenue
-146K/an / -146K/yr : FR: de no-shows patients | EN: patient no-shows
2 167h/an / 2,167h/yr : FR: de temps médical restitué | EN: of medical time restored


Overline : FR: CONTEXTE | EN: CONTEXT
Titre : FR: À propos de Qare ? | EN: About Qare?
Texte (2 colonnes) :
Colonne gauche :
FR : Qare est une plateforme française de téléconsultation médicale qui permet aux patients de consulter des médecins généralistes et spécialistes 24h/24 et 7j/7, depuis chez eux.
EN : Qare is a French telemedicine platform that allows patients to consult general practitioners and specialists 24/7, from home.
Colonne droite :
FR : Avec plus de 2 500 médecins et 15 000 consultations quotidiennes, Qare est un acteur clé de la santé numérique en France.
EN : With over 2,500 doctors and 15,000 daily consultations, Qare is a key player in digital healthcare in France.

Overline : FR: LE CHALLENGE | EN: THE CHALLENGE
Titre :
FR : Des patients disponibles mais pas alertés
EN : Available patients, no effective alert
3 cards en ligne :
Card 1 - FR: Le problème | EN: The problem :
FR : Les patients en attente d'une téléconsultation ne sont pas alertés quand leur consultation démarre. Ils naviguent sur une autre app, s'éloignent de leur téléphone, ou laissent l'écran se mettre en veille. Résultat : 146K no-shows par an, 8,4M de manque à gagner, et une insatisfaction majeure chez les praticiens.
EN : Patients waiting for a teleconsultation are not effectively alerted when their session starts. They switch to another app, walk away from their phone, or let the screen go to sleep. Result: 146K no-shows per year, 8.4M in lost revenue, and major practitioner dissatisfaction.
Card 2 - FR: Les opportunités | EN: The opportunities :
FR : Le branded call (appel de marque) est un pattern courant hors santé (livraison, transport, services). Seul Livi parmi nos concurrents le propose. L'appel téléphonique est la seule alerte impossible à ignorer pour un patient qui n'est plus sur l'app.
EN : Branded calling is a common pattern outside healthcare (delivery, transport, services). Only Livi among our competitors offers it. A phone call is the only alert impossible to ignore for a patient who has left the app.
Card 3 - FR: La contrainte | EN: The constraint :
FR : Les alternatives moins coûteuses (push notifications, SMS) ont déjà été explorées sans résultat suffisant. Le branded call nécessite un développement natif sur iOS et Android (pas de SDK Vonage React Native), avec des contraintes d'affichage différentes selon l'OS.
EN : Cheaper alternatives (push notifications, SMS) had already been tried without sufficient results. Branded calling requires native development on iOS and Android (no Vonage React Native SDK), with different display constraints per OS.

Overline : FR: MON RÔLE | EN: MY ROLE
Titre :
FR : De la discovery technique à la conception review
EN : From technical discovery to design review
Texte d'introduction :
FR : J'ai mené la recherche, structuré la conception et facilité les arbitrages pour livrer une solution en deux lots progressifs, en collaboration avec Tristan (PM) et Nicolas (Lead Dev).
EN : I led the research, structured the design and facilitated trade-offs to deliver a solution in two progressive phases, collaborating with Tristan (PM) and Nicolas (Lead Dev).
3 blocs rôle :
Bloc 1 - FR: Discovery et cadrage | EN: Discovery and framing :
FR : Catégorisation continue des feedbacks utilisateurs (stores, Trustpilot) avec Eva pour alimenter le codir. Ce projet est issu de cette discovery au long cours. Investigation technique Vonage, benchmark Livi, Slack, WhatsApp, Signal.
EN : Ongoing categorization of user feedback (app stores, Trustpilot) with Eva to feed the executive committee. This project emerged from that continuous discovery. Technical investigation of Vonage, benchmarking Livi, Slack, WhatsApp, Signal.
Bloc 2 - FR: Conception multi-plateforme | EN: Cross-platform design :
FR : Cartographie des comportements iOS (CallKit) et Android (ConnectionService) selon 5 états du téléphone. Design des flows patient et praticien pour les deux lots, en tenant compte des contraintes d'interface système.
EN : Mapping of iOS (CallKit) and Android (ConnectionService) behaviors across 5 phone states. Designing patient and practitioner flows for both phases, accounting for system interface constraints.
Bloc 3 - FR: Arbitrages et alignement | EN: Trade-offs and alignment :
FR : Structuration de la conception review, lotissement Lot 1 / Lot 2, facilitation des trade-offs techniques (archi modulaire vs ship fast, feature flag, réutilisabilité cross-marché HealthHero).
EN : Structuring the design review, phasing into Lot 1 / Lot 2, facilitating technical trade-offs (modular architecture vs ship fast, feature flags, cross-market reusability for HealthHero).

Overline : FR: L'INSIGHT DÉCISIF | EN: THE KEY INSIGHT
Titre :
FR : Seule une alerte impossible à ignorer fonctionne
EN : Only an alert impossible to ignore works
Texte :
FR : Qare avait déjà exploré les alternatives moins coûteuses : push notifications, SMS, écrans d'attente améliorés. Aucune n'a suffisamment réduit les no-shows. L'insight clé : quand un patient n'est plus sur l'app, seul un appel téléphonique le ramène. C'est le geste le plus familier et le plus intrusif, donc le plus efficace.
EN : Qare had already explored cheaper alternatives: push notifications, SMS, improved waiting screens. None reduced no-shows enough. The key insight: when a patient has left the app, only a phone call brings them back. It's the most familiar and intrusive gesture, and therefore the most effective.
Placeholder visuel : [Benchmark visuel - screenshots Livi, Slack, Signal, WhatsApp]

Overline : FR: L'APPROCHE DESIGN | EN: THE DESIGN APPROACH
Titre :
FR : Être appelé par son praticien comme un appel classique
EN : Being called by your doctor like a regular phone call
3 cards en ligne :
Card 1 - FR: Pré-conditions intelligentes | EN: Smart pre-conditions :
FR : Le branded call ne se déclenche que lorsque toutes les conditions pré-consultation sont remplies et que le patient n'est pas en salle d'attente. Pour limiter les coûts et éviter une expérience incohérente.
EN : The branded call only triggers when all pre-consultation conditions are met and the patient is not in the waiting room. To limit costs and avoid an inconsistent experience.
Card 2 - FR: Lot 1 : déclenchement réactif | EN: Phase 1: reactive trigger :
FR : L'appel est passé quand le praticien rejoint la consultation. Deux tentatives à 20 secondes d'intervalle. Clôture automatique du no-show, le praticien n'a plus à déclarer les absences manuellement.
EN : The call is placed when the practitioner joins the consultation. Two attempts 20 seconds apart. Automatic no-show closure, the practitioner no longer has to manually declare absences.
Card 3 - FR: Lot 2 : déclenchement proactif | EN: Phase 2: proactive trigger :
FR : L'appel est déclenché en amont sur un signal prédictif data-driven (clôture consultation précédente, génération du CR). Le praticien en modèle horaire ne voit plus de no-show. Qare devient sans non-présent.
EN : The call is triggered ahead of time based on a data-driven predictive signal (previous consultation closure, report generation). Hourly-model practitioners no longer see no-shows. Qare becomes no-show free.
Placeholder visuel pleine largeur : [Arbre de décision des pré-conditions + flows Lot 1 et Lot 2]
Placeholder visuel pleine largeur : [Maquettes côté patient iOS (3 états : inactif+lock, inactif+unlock, actif) et Android (2 états : inactif, actif)]
Placeholder visuel pleine largeur : [Maquettes côté praticien : suppression du CTA "Déclarer une absence", popin "Votre patient ne répond pas", redirection vers patient suivant]

Overline : FR: ÉLÉMENTS TECHNIQUES | EN: TECHNICAL ELEMENTS
Titre :
FR : L'affichage n'est pas identique sur iOS et Android
EN : The display differs between iOS and Android
Texte :
FR : Dev natif obligatoire, 3 bases de code à maintenir. Sur iOS, CallKit impose l'interface système avec un branding limité au nom du praticien. Sur Android, le design est entièrement libre : logo Qare, nom du praticien, contexte de consultation.
EN : Native development required, 3 codebases to maintain. On iOS, CallKit enforces the system interface with branding limited to the practitioner's name. On Android, the design is fully customizable: Qare logo, practitioner name, consultation context.
Placeholder visuel pleine largeur : [Comparatif iOS vs Android - 5 états du téléphone avec tags "Interface système" / "System interface" et "Design libre" / "Custom design"]

Overline : FR: LEARNINGS | EN: LEARNINGS
Titre :
FR : Les leçons clés de ce projet
EN : Key lessons from this project
Layout 2 colonnes :
Colonne gauche - FR: Ce qui a fonctionné | EN: What worked :

FR: La solution la plus bold est parfois la bonne : les approches incrémentales avaient échoué | EN: Sometimes the boldest solution is the right one: incremental approaches had failed
FR: Le lotissement Lot 1 / Lot 2 permet de shipper vite et d'itérer avec la data | EN: Phasing into Lot 1 / Lot 2 allows shipping fast and iterating with data
FR: Automatiser la déclaration de no-show supprime une friction majeure côté praticien | EN: Automating no-show declaration removes a major friction point for practitioners
FR: La discovery continue (feedbacks stores + Trustpilot) nourrit les bons projets | EN: Continuous discovery (app store + Trustpilot feedback) feeds the right projects

Colonne droite - FR: Ce qui reste à valider | EN: What remains to validate :

FR: L'impact réel post-lancement (Lot 1 en développement) | EN: Real impact post-launch (Phase 1 in development)
FR: Le signal prédictif du Lot 2 nécessite un travail data approfondi | EN: Phase 2's predictive signal requires deeper data work
FR: L'architecture modulaire pour les autres marchés HealthHero | EN: Modular architecture for other HealthHero markets
FR: L'affichage du nom du praticien vs "Consultation Qare" sur l'appel (à tester post Lot 1) | EN: Displaying practitioner name vs "Qare Consultation" on the call (to test post Phase 1)


Règles strictes :

Respecter exactement la grille, les colonnes, les spacings et les composants des 3 case studies existants
Ne pas inventer de nouveaux composants ou layouts
Les placeholder visuels seront remplacés par les vraies maquettes ultérieurement
Conserver le même rythme de lecture et la même alternance texte / visuels