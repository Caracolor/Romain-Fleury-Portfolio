import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import imgScreen1 from "@/assets/719be8b40038074e2e5653e96e2637c01ff07358.webp";
import imgScreen2 from "@/assets/adc61ec21a8ee5cd871b10ebae30a0019b402800.webp";
import imgScreen3 from "@/assets/3edd87430316fdb862ee9332b0aff018bf6b92d6.webp";

const HERO_IMAGES = [imgScreen1, imgScreen2, imgScreen3];
const CYCLE_MS = 5000;

/**
 * Vertical sliding phone screen carousel.
 * Used in the Monetization project hero section.
 */
export function HeroPhoneCarousel({ mobile = false }: { mobile?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const w = mobile ? 380 : 680;
  const h = mobile ? 550 : 779;

  return (
    <div
      className="relative shrink-0 rounded-[16px]"
      style={{
        width: w,
        height: h,
        overflow: "visible",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "calc(100% + 80px)" }}
          animate={{ y: "0%" }}
          exit={{ y: "calc(-100% - 80px)" }}
          transition={{ duration: 0.85, ease: [0.22, 1.08, 0.36, 1] }}
        >
          <img
            src={HERO_IMAGES[index]}
            alt=""
            className="object-contain rounded-[12px]"
            style={{ transform: "scale(0.95)", opacity: 0.95 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}