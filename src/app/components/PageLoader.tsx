import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-jrftw4tb9m";

const DARK = "#40295B";
const MID = "#CAC1EA";
const LIGHT = "#e4e0f4";

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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {/* Logo flottant */}
            <motion.div
              animate={{ y: [-8, 0, -8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="52" height="72" viewBox="0 0 52 72" fill="none">
                <defs>
                  <clipPath id="clip-loader">
                    <rect fill="white" height="72" width="52" />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip-loader)">
                  <path d={svgPaths.p2d243d70} fill={DARK} />
                  <path d={svgPaths.p12205e00} fill={MID} />
                  <path d={svgPaths.p2c77ea00} fill={DARK} />
                </g>
              </svg>
            </motion.div>
            {/* Ombre */}
            <motion.div
              animate={{ scaleX: [1, 0.55, 1], opacity: [0.35, 0.12, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 36,
                height: 6,
                borderRadius: 9999,
                background: LIGHT,
                transformOrigin: "center",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
