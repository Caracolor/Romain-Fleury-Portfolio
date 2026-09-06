import { useCallback, useEffect, useRef } from "react";

/**
 * Miniature animée. La vidéo se fige toujours sur `restTime` (en secondes) :
 * - à la première apparition à l'écran, elle se joue depuis le début ;
 * - si `playRef` est fourni (desktop, au survol), elle repart et boucle une
 *   fois pour revenir se figer au même endroit. Sur mobile, où il n'y a pas
 *   de survol, on omet `playRef` : la vidéo joue une seule fois puis reste
 *   figée — rejouer au tap n'aurait pas de sens puisque le tap navigue déjà
 *   vers le case study.
 * - si `resetRef` est fourni (mobile, piloté par la section qui contient
 *   toutes les cartes), l'appeler réarme la lecture : la prochaine fois que
 *   la vidéo redevient visible, elle se rejoue depuis le début plutôt que de
 *   rester figée. Prévu pour être déclenché une fois que le visiteur a
 *   quitté toute la section (pas juste cette carte), pour ne pas relancer
 *   inutilement au moindre petit scroll dans les deux sens.
 * Elle n'est téléchargée qu'à l'approche du viewport.
 */
export function ThumbnailVideo({
  src,
  poster,
  restTime,
  playRef,
  resetRef,
  rounded = "30px",
}: {
  src: string;
  poster: string;
  restTime: number;
  playRef?: React.MutableRefObject<(() => void) | null>;
  resetRef?: React.MutableRefObject<(() => void) | null>;
  /** Rayon des coins (doit correspondre au conteneur qui la clippe). */
  rounded?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const running = useRef(false);
  const wrapped = useRef(false);
  const previous = useRef(0);
  const autoPlayed = useRef(false);

  /** Fige la vidéo dès qu'elle atteint son image d'arrêt. */
  const stopAtRest = useCallback(() => {
    const el = ref.current;
    if (!el || !running.current) return;
    const t = el.currentTime;
    if (t < previous.current - 0.1) wrapped.current = true; // repassée par 0
    previous.current = t;
    if (wrapped.current && t >= restTime) {
      el.pause();
      el.loop = false;
      el.currentTime = restTime;
      running.current = false;
    }
  }, [restTime]);

  const playToRest = useCallback((fromStart: boolean) => {
    const el = ref.current;
    if (!el || running.current) return;

    if (fromStart) el.currentTime = 0;
    // Depuis l'image d'arrêt, il faut un tour complet avant de s'y refiger.
    wrapped.current = fromStart || el.currentTime < restTime - 0.05;
    previous.current = el.currentTime;
    running.current = true;
    el.loop = true;
    el.play().catch(() => {
      // Chrome peut rejeter cette promesse tout en laissant la lecture se
      // poursuivre réellement (ex : rejet lié à l'économie d'énergie sur un
      // onglet jugé en arrière-plan, sans interruption effective). On ne se
      // fie donc pas au rejet seul : si la vidéo tourne bel et bien,
      // `running` doit rester vrai pour que stopAtRest continue à la
      // surveiller et l'arrête à `restTime` normalement.
      if (!el.paused) return;
      // Sinon la lecture a vraiment échoué : on revient à l'image d'arrêt
      // et on redonne sa chance à l'observateur de réessayer au prochain
      // passage dans la zone, plutôt que de rester bloquée indéfiniment sur
      // une frame arbitraire.
      running.current = false;
      el.loop = false;
      el.currentTime = restTime;
      autoPlayed.current = false;
    });
  }, [restTime]);

  useEffect(() => {
    if (!playRef) return;
    playRef.current = () => playToRest(false);
  }, [playRef, playToRest]);

  useEffect(() => {
    if (!resetRef) return;
    resetRef.current = () => {
      const el = ref.current;
      // Si le premier passage n'avait pas fini de tourner (ex: connexion
      // lente, ou un onglet ralenti par le navigateur), on l'arrête pour de
      // bon ici — sinon `running` reste vrai et le prochain retour dans la
      // zone se ferait bloquer en silence par le garde-fou anti-chevauchement
      // de `playToRest`, sans jamais rejouer.
      if (el && running.current) {
        el.pause();
        el.loop = false;
      }
      running.current = false;
      autoPlayed.current = false;
    };
  }, [resetRef]);

  // Surveillance double : requestAnimationFrame pour la précision quand l'onglet
  // est visible, et l'événement `timeupdate` — qui, lui, continue en arrière-plan —
  // pour que la vidéo se fige bien même si l'utilisateur change d'onglet.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id = requestAnimationFrame(function tick() {
      stopAtRest();
      id = requestAnimationFrame(tick);
    });
    el.addEventListener("timeupdate", stopAtRest);
    return () => {
      cancelAnimationFrame(id);
      el.removeEventListener("timeupdate", stopAtRest);
    };
  }, [stopAtRest]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;

    // Tant que la vidéo n'a pas joué, on affiche son image d'arrêt.
    const onLoaded = () => {
      if (!autoPlayed.current) el.currentTime = restTime;
    };
    el.addEventListener("loadeddata", onLoaded);

    // Téléchargement à l'approche…
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.preload = "auto";
        el.load();
        loader.disconnect();
      },
      { rootMargin: "400px" }
    );
    loader.observe(el);

    // …puis lecture lorsque la carte devient visible. Reste actif (ne se
    // déconnecte pas après le premier déclenchement) : c'est ce qui permet
    // à `resetRef` de la relancer plus tard, sans réobserver quoi que ce
    // soit — `autoPlayed` est le seul garde-fou contre les rejouages
    // intempestifs au moindre petit va-et-vient de scroll.
    const starter = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayed.current) return;
        autoPlayed.current = true;
        playToRest(true);
      },
      { threshold: 0.3 }
    );
    starter.observe(el);

    return () => {
      el.removeEventListener("loadeddata", onLoaded);
      loader.disconnect();
      starter.disconnect();
    };
  }, [playToRest, restTime]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="none"
      poster={poster}
      className="absolute max-w-none object-cover opacity-95 size-full"
      style={{ borderRadius: rounded }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
