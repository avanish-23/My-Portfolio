import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import { navItems, profile } from "../data/portfolio";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.35,
  });
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 22);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -35% 0px",
      },
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openResume = () => {
    window.open(profile.resume, "_blank", "noopener,noreferrer");
  };

  const openLinkedIn = () => {
    window.open(profile.linkedin, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border transition-all duration-300 ${
          scrolled
            ? "border-blue-400/12 bg-[#050b13]/86 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
            : "border-white/8 bg-[#050b13]/58 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-5">
          <motion.button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-2 text-left"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-400/25 to-white/10 text-white ring-1 ring-blue-300/20">
              <span className="font-display text-sm font-semibold">AK</span>
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base font-semibold text-white">
                {profile.name}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-blue-100/55">
                Frontend Portfolio
              </span>
            </span>
          </motion.button>

          {!isMobile && (
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] px-2 py-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`group relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-slate-300 hover:text-blue-50"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full border border-blue-300/20 bg-gradient-to-r from-blue-500/20 to-white/[0.06] shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <i className={`fas ${item.icon} text-[11px]`} />
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2.5 xl:flex">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.8)]" />
                <span className="text-xs uppercase tracking-[0.28em] text-slate-300/80">
                  Open To Work
                </span>
              </div>

              <motion.button
                type="button"
                onClick={openLinkedIn}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100"
              >
                LinkedIn
              </motion.button>

              <motion.button
                type="button"
                onClick={openResume}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(59,130,246,0.35)]"
              >
                Download Resume
              </motion.button>
            </div>
          )}

          {isMobile && (
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition-colors duration-200 hover:text-blue-50 md:hidden"
            >
              <motion.i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-2 border-t border-white/8 px-4 pb-4 pt-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500/16 to-white/[0.05] text-white"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-blue-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <i className={`fas ${item.icon} w-5 text-sm`} />
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}

                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                  <motion.button
                    type="button"
                    onClick={openLinkedIn}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-semibold text-white"
                  >
                    LinkedIn
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={openResume}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-300 px-4 py-3 font-semibold text-slate-950"
                  >
                    Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="mx-auto mt-2 h-[2px] max-w-7xl origin-left rounded-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
