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
      setScrolled(window.scrollY > 28);
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

  const downloadResume = () => {
    window.open(profile.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#04131f]/80 shadow-[0_18px_60px_rgba(2,12,22,0.55)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <motion.button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left shadow-[0_0_40px_rgba(80,180,255,0.08)] backdrop-blur-md"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white/30 to-cyan-400/20 text-cyan-50 ring-1 ring-white/20">
              <i className="fas fa-water text-sm" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base font-semibold text-white">
                {profile.name}
              </span>
              <span className="block text-xs text-cyan-100/70">Ocean Portfolio</span>
            </span>
          </motion.button>

          {!isMobile && (
            <div className="hidden items-center gap-2 md:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-slate-300 hover:text-cyan-50"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full border border-cyan-200/30 bg-gradient-to-r from-white/15 to-cyan-300/15"
                        initial={false}
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <i className={`fas ${item.icon} text-xs`} />
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                type="button"
                onClick={downloadResume}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-cyan-200/20 bg-gradient-to-r from-white/10 to-cyan-300/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(131,222,255,0.15)] backdrop-blur-md"
              >
                Resume
              </motion.button>
            </div>
          )}

          {isMobile && (
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur-md transition-colors duration-200 hover:text-cyan-50 md:hidden"
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
              <div className="mt-2 space-y-2 rounded-[28px] border border-white/10 bg-[#071827]/90 px-3 pb-4 pt-3 shadow-[0_18px_50px_rgba(2,12,22,0.45)] backdrop-blur-xl">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-white/10 to-cyan-300/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-cyan-50"
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <i className={`fas ${item.icon} w-5 text-sm`} />
                      <span>{item.label}</span>
                    </span>

                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobileActiveSection"
                        className="absolute inset-y-2 left-1 w-1 rounded-full bg-cyan-200"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}

                <motion.button
                  type="button"
                  onClick={downloadResume}
                  className="mt-2 flex w-full items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-white/10 to-cyan-300/10 px-4 py-3 font-semibold text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-white via-sky-200 to-cyan-400"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
