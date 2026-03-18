import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-jrftw4tb9m";

/* ═══════════════════════════════════════════════════════════════
   Logo SVG Loader — fill animation from light violet to real colors
   ═══════════════════════════════════════════════════════════════ */

const LIGHT = "#e4e0f4"; // starting light violet
const DARK_FINAL = "#40295B"; // final dark
const MID_FINAL = "#CAC1EA"; // final mid-tone

export function PageLoader({ visible = true }: { visible?: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-qare-white)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-[20px]">
            {/* Animated Logo */}
            <div className="relative" style={{ width: 52, height: 72 }}>
              <svg
                className="block"
                width="52"
                height="72"
                viewBox="0 0 52 72"
                fill="none"
              >
                <defs>
                  <clipPath id="clip0_loader">
                    <rect fill="white" height="72" width="52" />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip0_loader)">
                  {/* Bottom shape — dark */}
                  <motion.path
                    d={svgPaths.p2d243d70}
                    initial={{ fill: LIGHT }}
                    animate={{ fill: [LIGHT, DARK_FINAL, LIGHT] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                    }}
                  />
                  {/* Middle shape — mid */}
                  <motion.path
                    d={svgPaths.p12205e00}
                    initial={{ fill: LIGHT }}
                    animate={{ fill: [LIGHT, MID_FINAL, LIGHT] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      delay: 0.15,
                    }}
                  />
                  {/* Top arc — dark */}
                  <motion.path
                    d={svgPaths.p2c77ea00}
                    initial={{ fill: LIGHT }}
                    animate={{ fill: [LIGHT, DARK_FINAL, LIGHT] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      delay: 0.3,
                    }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
