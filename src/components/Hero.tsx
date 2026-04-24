import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { heroStats, profile, socialLinks } from "../data/portfolio";

export default function Hero() {
  const handleDownloadResume = () => {
    window.open(profile.resume, "_blank", "noopener,noreferrer");
  };

  const handleViewProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(
        "Hi Avanish, I saw your portfolio and would like to connect.",
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute left-[12%] top-28 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-sky-200/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.25, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-cyan-50/90 shadow-[0_0_30px_rgba(144,220,255,0.1)] backdrop-blur-md"
            whileHover={{ y: -2, scale: 1.01 }}
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-100 shadow-[0_0_12px_rgba(186,230,253,0.9)]" />
            {profile.availability}
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-100/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Underwater Portfolio
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <span className="mb-4 block text-slate-100/92">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent">
              <AnimatedText text={profile.name} />
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            {profile.headline} {profile.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
          >
            {["React.js", "Tailwind CSS", "JavaScript", "MERN Training"].map((item, index) => (
              <motion.span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-50/90 backdrop-blur-sm"
                whileHover={{ y: -3, scale: 1.04 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.08 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.65 }}
          >
            <motion.button
              type="button"
              onClick={handleViewProjects}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-sky-200 px-7 py-4 font-semibold text-slate-950 shadow-[0_14px_40px_rgba(174,231,255,0.28)]"
            >
              Explore Projects
            </motion.button>

            <motion.button
              type="button"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-cyan-100/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md"
            >
              Download Resume
            </motion.button>

            <motion.button
              type="button"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-cyan-300/10 px-7 py-4 font-semibold text-cyan-50 backdrop-blur-md"
            >
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className={`group inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r ${social.accent} px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(128,207,255,0.08)] backdrop-blur-md`}
                title={social.note ?? social.label}
              >
                <i className={social.icon} />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.65 }}
          >
            {heroStats.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-100/60">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex max-w-[540px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-6 rounded-full border border-cyan-100/10 bg-cyan-200/5 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="hero-photo-ring relative z-10"
            animate={{ y: [0, -14, 0], rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero-photo-core">
              <img src={profile.photo} alt={profile.name} className="hero-photo-image" />
            </div>
            <div className="hero-photo-reflection" />
          </motion.div>

          <motion.div
            className="hero-floating-card left-2 top-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero-floating-kicker">Training</span>
            <strong>CETPA MERN Track</strong>
          </motion.div>

          <motion.div
            className="hero-floating-card right-4 top-20"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <span className="hero-floating-kicker">Study</span>
            <strong>MCA 2025 - Present</strong>
          </motion.div>

          <motion.div
            className="hero-floating-card bottom-10 right-10"
            animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <span className="hero-floating-kicker">Based In</span>
            <strong>{profile.location}</strong>
          </motion.div>

          <motion.div
            className="pookie-buddy"
            animate={{ y: [0, -12, 0], rotate: [0, -4, 0, 4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="pookie-fin pookie-fin-left" />
            <span className="pookie-fin pookie-fin-right" />
            <span className="pookie-eye pookie-eye-left" />
            <span className="pookie-eye pookie-eye-right" />
            <span className="pookie-mouth" />
            <span className="pookie-tail" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
