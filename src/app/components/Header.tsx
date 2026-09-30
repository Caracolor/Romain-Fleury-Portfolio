import { useLanguage } from "./LanguageContext";
import { useRef, useState, useEffect, useCallback, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { useIsMobile } from "./useIsMobile";
import { useTranslation } from "./LanguageContext";
import { getHomePath, isHomePath } from "./HomeVariant";
import { CHAT_TRANSITION_MS, CHAT_EASE_CSS, ChatOpenContext, computeHeaderChatOpenPadding } from "./chatLayout";
import Lottie from "lottie-react";
import logoAnimation from "../../../public/logo-animation.json";

function LogoLottie({ width, height, enableHover = false }: { width: number; height: number; enableHover?: boolean }) {
  const lottieRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = useRef(false);
  const isPlayingRef = useRef(true); // démarre en playing (autoplay)

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const play = useCallback(() => {
    isPlayingRef.current = true;
    lottieRef.current?.goToAndPlay(0);
  }, []);

  const scheduleReplay = useCallback(() => {
    isPlayingRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isHoveringRef.current) {
      timerRef.current = setTimeout(play, 10_000);
    }
  }, [play]);

  const handleMouseEnter = useCallback(() => {
    if (!enableHover) return;
    isHoveringRef.current = true;
    if (!isPlayingRef.current) {
      if (timerRef.current) clearTimeout(timerRef.current);
      play();
    }
  }, [enableHover, play]);

  const handleMouseLeave = useCallback(() => {
    if (!enableHover) return;
    isHoveringRef.current = false;
    if (!isPlayingRef.current) {
      timerRef.current = setTimeout(play, 10_000);
    }
    // Si elle joue encore, onComplete déclenchera scheduleReplay
  }, [enableHover, play]);

  return (
    <div
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={logoAnimation}
        loop={false}
        autoplay
        style={{ width, height }}
        onComplete={scheduleReplay}
      />
    </div>
  );
}

const HEADER_MAX_WIDTH = 1100;
const SCROLL_THRESHOLD_DESKTOP = 500;
const SCROLL_THRESHOLD_MOBILE = 300;

interface HeaderProps {
  /** Reserved chat-drawer width (px) to shrink the desktop header's right
   *  edge by, so it stays flush with the pushed content beneath it rather
   *  than running full-bleed under the chat panel. 0 on mobile — there the
   *  chat covers the header instead. See chatLayout.ts. */
  pushRight?: number;
}

export function Header({ pushRight = 0 }: HeaderProps) {
  // Mirrors ScaledSection.tsx's own reaction to the same context, but stays
  // proportionally wider: closed, Header's 150px vs ScaledSection's 200px
  // padding already makes Header run wider on each side (the nav bar and
  // content column were never pixel-aligned) — computeHeaderChatOpenPadding
  // keeps that same 150/200 ratio once the chat has eaten into the width,
  // instead of both converging onto the same padding.
  const isChatOpen = useContext(ChatOpenContext);
  // The outer wrapper's own rendered (border-box) width — i.e. before its
  // own padding is subtracted. Needed to compute that padding itself in
  // JS (see computeChatOpenPadding): it's position:fixed, so a CSS
  // percentage padding would resolve against the viewport, not this.
  //
  // Derived analytically (window.innerWidth - pushRight) rather than
  // measured live off the DOM via ResizeObserver — this div is
  // position:fixed with left:0/right:pushRight, so its rendered width IS
  // window.innerWidth - pushRight, always, by definition; no need to
  // measure it. Measuring it live used to cause a visible bounce when the
  // chat opened/closed: ResizeObserver fires on every frame of the
  // `right`/`padding` CSS transition (since those properties changing IS
  // a resize), and each fire recomputed a new padding target from the
  // mid-transition width — repeatedly retargeting the CSS "padding"
  // transition against a moving target instead of letting it interpolate
  // once, smoothly, from the old value to the real final one.
  const [containerWidth, setContainerWidth] = useState(() =>
    typeof window === "undefined" ? HEADER_MAX_WIDTH + 300 : window.innerWidth - pushRight
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { lang, setLang } = useLanguage();
  const nav = useTranslation("nav");
  const projectsSection = useTranslation("projects_section");

  const projectLinks = [
    { title: projectsSection.items?.[0]?.title || "Chronic Programs", path: "/project/chronic-programs" },
    { title: projectsSection.items?.[1]?.title || "Temps Médical", path: "/project/medical-time" },
    { title: projectsSection.items?.[2]?.title || "Monétisation", path: "/project/health-monetization" },
    { title: projectsSection.items?.[3]?.title || "Branded Call", path: "/project/branded-call" },
  ];

  // Animated close helper
  const closeMenu = useCallback(() => {
    if (!menuOpen || menuClosing) return;
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 300);
  }, [menuOpen, menuClosing]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMenuClosing(false);
    setProjectsDropdownOpen(false);
    setMobileProjectsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll direction detection
  useEffect(() => {
    const threshold = isMobile ? SCROLL_THRESHOLD_MOBILE : SCROLL_THRESHOLD_DESKTOP;

    const onScroll = () => {
      const currentY = window.scrollY;
      // Always show header if above the threshold
      if (currentY < threshold) {
        setHeaderVisible(true);
        lastScrollY.current = currentY;
        return;
      }
      // Don't hide while menu is open
      if (menuOpen) {
        lastScrollY.current = currentY;
        return;
      }
      const delta = currentY - lastScrollY.current;
      if (delta > 8) {
        // scrolling down past threshold → hide
        setHeaderVisible(false);
      } else if (delta < -4) {
        // scrolling up → show
        setHeaderVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, menuOpen]);

  // Reset visibility on route change (scroll to top)
  useEffect(() => {
    setHeaderVisible(true);
    lastScrollY.current = 0;
  }, [location.pathname]);

  // Keeps containerWidth in sync with organic viewport-width changes (window
  // resize) — the animated open/close transition itself never touches this,
  // since containerWidth is derived analytically from window.innerWidth,
  // not measured off the (possibly mid-transition) DOM. See the comment on
  // containerWidth's useState above.
  useEffect(() => {
    if (isMobile) return; // skip desktop scale on mobile
    const update = () => setContainerWidth(window.innerWidth - pushRight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile, pushRight]);

  // Derived (not state) from the now-stable containerWidth, so it changes in
  // a single step alongside the CSS-transitioned padding/right instead of
  // ticking across multiple ResizeObserver-driven renders — the inner scale
  // div's own CSS transition (see its style below) is what animates this
  // smoothly, the same way `right`/`padding` animate via CSS on the outer div.
  const headerSidePadding = isChatOpen ? computeHeaderChatOpenPadding(containerWidth) : 150;
  const scale = Math.min(1, (containerWidth - headerSidePadding * 2) / HEADER_MAX_WIDTH);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      setMenuOpen(false);
      const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 300;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      };
      if (!isHomePath(location.pathname)) {
        navigate(getHomePath());
        setTimeout(() => scrollTo(sectionId), 100);
      } else {
        scrollTo(sectionId);
      }
    },
    [location.pathname, navigate]
  );

  const innerHeight = 100;

  // ── Mobile Header ──
  if (isMobile) {
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 z-50 px-[16px] pt-[12px]"
          style={{
            pointerEvents: "none",
            transform: headerVisible ? "translateY(0)" : "translateY(calc(-100% - 20px))",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="flex items-center justify-between px-[20px] py-[10px] rounded-[16px]"
            style={{
              backdropFilter: "blur(7px)",
              WebkitBackdropFilter: "blur(7px)",
              backgroundColor: "rgba(255,255,255,0.6)",
              pointerEvents: "auto",
            }}
          >
            {/* Logo */}
            <div
              className="shrink-0 cursor-pointer"
              style={{ width: 35, height: 48 }}
              onClick={() => {
                navigate(getHomePath());
                setMenuOpen(false);
              }}
            >
              <LogoLottie width={35} height={48} />
            </div>

            {/* Hamburger button */}
            <button
              className="relative w-[32px] h-[32px] flex flex-col items-center justify-center gap-[6px] cursor-pointer"
              onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-[24px] h-[2px] bg-[var(--color-qare-text)] rounded-full transition-all duration-300"
                style={
                  menuOpen
                    ? { transform: "translateY(4px) rotate(45deg)" }
                    : {}
                }
              />
              <span
                className="block w-[24px] h-[2px] bg-[var(--color-qare-text)] rounded-full transition-all duration-300"
                style={
                  menuOpen
                    ? { transform: "translateY(-4px) rotate(-45deg)" }
                    : {}
                }
              />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-[40px] px-[40px]"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              backgroundColor: "rgba(255,255,255,0.92)",
              opacity: menuClosing ? 0 : 1,
              transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* About */}
            <button
              className="font-['Aeonik:Regular',sans-serif] text-[28px] text-[var(--color-qare-text)] cursor-pointer capitalize tracking-[2px] hover:text-[var(--color-qare-brand)] transition-colors"
              style={{
                transform: menuClosing ? "translateY(20px)" : "translateY(0)",
                opacity: menuClosing ? 0 : 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.25s ease 0ms",
              }}
              onClick={() => scrollToSection("about")}
            >
              {nav.about}
            </button>

            {/* Projects with collapse */}
            <div
              style={{
                transform: menuClosing ? "translateY(20px)" : "translateY(0)",
                opacity: menuClosing ? 0 : 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 40ms, opacity 0.25s ease 40ms",
              }}
            >
              <button
                className="font-['Aeonik:Regular',sans-serif] text-[28px] text-[var(--color-qare-text)] cursor-pointer capitalize tracking-[2px] hover:text-[var(--color-qare-brand)] transition-colors flex items-center gap-[10px]"
                onClick={() => setMobileProjectsOpen((v) => !v)}
              >
                {nav.projects}
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  style={{
                    transform: mobileProjectsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  <path d="M1 1L7 7L13 1" stroke="var(--color-qare-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: mobileProjectsOpen ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div className="flex flex-col gap-[16px] pl-[16px] pt-[20px]">
                  {projectLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <button
                        key={link.path}
                        className={`font-['Aeonik:Regular',sans-serif] text-[20px] text-left transition-opacity ${
                          isActive
                            ? "text-[var(--color-qare-text)]/35 cursor-default"
                            : "text-[var(--color-qare-brand)] cursor-pointer hover:opacity-70"
                        }`}
                        onClick={() => {
                          if (isActive) return;
                          closeMenu();
                          navigate(link.path);
                        }}
                        disabled={isActive}
                      >
                        {link.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Experience */}
            <button
              className="font-['Aeonik:Regular',sans-serif] text-[28px] text-[var(--color-qare-text)] cursor-pointer capitalize tracking-[2px] hover:text-[var(--color-qare-brand)] transition-colors"
              style={{
                transform: menuClosing ? "translateY(20px)" : "translateY(0)",
                opacity: menuClosing ? 0 : 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 80ms, opacity 0.25s ease 80ms",
              }}
              onClick={() => scrollToSection("experience")}
            >
              {nav.experience}
            </button>

            <a
              href="mailto:r.s.fleury@gmail.com"
              className="font-['Aeonik:Regular',sans-serif] text-[28px] text-[var(--color-qare-brand)] underline decoration-solid mt-[20px]"
              style={{
                transform: menuClosing ? "translateY(20px)" : "translateY(0)",
                opacity: menuClosing ? 0 : 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 120ms, opacity 0.25s ease 120ms",
              }}
            >
              r.s.fleury@gmail.com
            </a>
            {/* Language toggle */}
            <div
              className="flex items-center gap-[6px] font-['Aeonik:Regular',sans-serif] text-[28px] mt-[12px] select-none"
              style={{
                transform: menuClosing ? "translateY(20px)" : "translateY(0)",
                opacity: menuClosing ? 0 : 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 160ms, opacity 0.25s ease 160ms",
              }}
            >
              <button
                className={`cursor-pointer transition-opacity ${lang === "fr" ? "text-[var(--color-qare-text)] font-['Aeonik:Bold',sans-serif]" : "text-[var(--color-qare-text)]/40"} text-[28px]`}
                onClick={() => { setLang("fr"); closeMenu(); }}
              >
                FR
              </button>
              <span className="text-[var(--color-qare-text)]/30">/</span>
              <button
                className={`cursor-pointer transition-opacity ${lang === "en" ? "text-[var(--color-qare-text)] font-['Aeonik:Bold',sans-serif]" : "text-[var(--color-qare-text)]/40"} text-[28px]`}
                onClick={() => { setLang("en"); closeMenu(); }}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // ── Desktop Header ──
  return (
    <div
      className="fixed top-0 left-0 z-50"
      style={{
        right: pushRight,
        pointerEvents: "none",
        paddingLeft: headerSidePadding,
        paddingRight: headerSidePadding,
        transform: headerVisible ? "translateY(0)" : "translateY(calc(-100% - 20px))",
        transition: `transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), right ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}, padding ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}`,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: HEADER_MAX_WIDTH,
          marginLeft: "auto",
          marginRight: "auto",
          height: innerHeight * scale,
          paddingTop: 24 * scale,
          transition: `height ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}, padding-top ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}`,
        }}
      >
        <div
          style={{
            width: HEADER_MAX_WIDTH,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            transition: `transform ${CHAT_TRANSITION_MS}ms ${CHAT_EASE_CSS}`,
            pointerEvents: "auto",
          }}
        >
          <div
            className="flex items-center justify-between px-[40px] py-[14px] rounded-[20px]"
            style={{
              backdropFilter: "blur(7px)",
              WebkitBackdropFilter: "blur(7px)",
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            <div className="flex gap-[57px] items-center">
              {/* Caracolor logo */}
              <div
                className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ width: 52, height: 72 }}
                onClick={() => navigate(getHomePath())}
              >
                <LogoLottie width={52} height={72} enableHover />
              </div>
              <div className="flex font-['Aeonik:Regular',sans-serif] gap-[48px] items-center leading-[28px] not-italic text-[var(--color-qare-ink)] text-[20px] whitespace-nowrap">
                <p className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => scrollToSection("about")}>{nav.about}</p>
                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => setProjectsDropdownOpen(false), 200);
                  }}
                >
                  <p className="inline-block hover:opacity-70 transition-opacity">{nav.projects}</p>
                  
                  {projectsDropdownOpen && (
                    <div
                      className="absolute left-0 top-full mt-2 bg-white rounded-[16px] z-50 overflow-hidden"
                      style={{
                        boxShadow: "0px 8px 24px rgba(64, 41, 91, 0.12)",
                      }}
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => setProjectsDropdownOpen(false), 200);
                      }}
                    >
                      <div className="flex flex-col py-[8px]">
                        {projectLinks.map((link) => {
                          const isActive = location.pathname === link.path;
                          return (
                            <button
                              key={link.path}
                              className={`text-left px-[20px] py-[10px] text-[16px] font-['Aeonik:Regular',sans-serif] leading-[24px] not-italic whitespace-nowrap transition-colors ${
                                isActive
                                  ? "text-[var(--color-qare-text)]/30 cursor-default"
                                  : "text-[var(--color-qare-text)] cursor-pointer hover:bg-[var(--color-qare-050)] hover:text-[var(--color-qare-brand)]"
                              }`}
                              onClick={() => {
                                if (isActive) return;
                                setProjectsDropdownOpen(false);
                                navigate(link.path);
                              }}
                              disabled={isActive}
                            >
                              {link.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <p className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => scrollToSection("experience")}>{nav.experience}</p>
              </div>
            </div>
            <div className="flex items-center gap-[32px]">
              <a href="mailto:r.s.fleury@gmail.com" className="font-['Aeonik:Regular',sans-serif] leading-[28px] not-italic text-[var(--color-qare-brand)] text-[20px] whitespace-nowrap underline decoration-solid">
                r.s.fleury@gmail.com
              </a>
              {/* Language toggle */}
              <div className="flex items-center gap-[4px] font-['Aeonik:Regular',sans-serif] text-[20px] leading-[28px] whitespace-nowrap select-none">
                <button
                  className={`cursor-pointer transition-opacity ${lang === "fr" ? "text-[var(--color-qare-text)] font-['Aeonik:Bold',sans-serif]" : "text-[var(--color-qare-text)]/40 hover:text-[var(--color-qare-text)]/60"}`}
                  onClick={() => setLang("fr")}
                >
                  FR
                </button>
                <span className="text-[var(--color-qare-text)]/30">/</span>
                <button
                  className={`cursor-pointer transition-opacity ${lang === "en" ? "text-[var(--color-qare-text)] font-['Aeonik:Bold',sans-serif]" : "text-[var(--color-qare-text)]/40 hover:text-[var(--color-qare-text)]/60"}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}