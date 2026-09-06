import { useCallback, useEffect, useRef } from "react";

/**
 * Miniature animée. La vidéo se fige toujours sur `restTime` (en secondes) :
 * - à la première apparition à l'écran, elle se joue depuis le début ;
 * - si `playRef` est fourni (desktop, au survol), elle repart et boucle une
 *   fois pour revenir se figer au même endroit. Sur mobile, où il n'y a pas
 *   de survol, on omet `playRef` : la vidéo joue une seule fois puis reste
 *   figée — rejouer au tap n'aurait pas de sens puisque le tap navigue déjà
 *   vers le case study.
 * Elle n'est téléchargée qu'à l'approche du viewport.
 */
export function ThumbnailVideo({
  src,
  poster,
  restTime,
  playRef,
  rounded = "30px",
}: {
  src: string;
  poster: string;
  restTime: number;
  playRef?: React.MutableRefObject<(() => void) | null>;
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
      running.current = false;
      el.loop = false;
    });
  }, [restTime]);

  useEffect(() => {
    if (!playRef) return;
    playRef.current = () => playToRest(false);
  }, [playRef, playToRest]);

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

    // …puis lecture unique lorsque la carte est réellement visible.
    const starter = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayed.current) return;
        autoPlayed.current = true;
        playToRest(true);
        starter.disconnect();
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
