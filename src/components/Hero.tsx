import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { heroStats, profile, recruiterPoints, recruiterTags, socialLinks } from "../data/portfolio";

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
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute left-[8%] top-32 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 right-[6%] h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.32, 0.18, 0.32] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-300/14 bg-blue-400/[0.06] px-5 py-3 text-sm text-blue-50/90 backdrop-blur-md"
            whileHover={{ y: -2, scale: 1.01 }}
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
            {profile.availability}
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.42em] text-blue-100/58"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Frontend Developer Portfolio
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[0.94] text-white sm:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <span className="mb-4 block text-slate-100/92">Avanish Kumar</span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              <AnimatedText text="Frontend-ready. Recruiter-friendly. Growth-focused." />
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-xl leading-8 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
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
            {recruiterTags.map((item, index) => (
              <motion.span
                key={item}
                className="rounded-full border border-blue-300/12 bg-white/[0.03] px-4 py-2 text-sm text-slate-100"
                whileHover={{ y: -3, scale: 1.04 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.06 }}
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
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-200 px-8 py-4 font-semibold text-slate-950 shadow-[0_16px_38px_rgba(59,130,246,0.34)]"
            >
              Download Resume
            </motion.button>

            <motion.button
              type="button"
              onClick={handleViewProjects}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-blue-300/16 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md"
            >
              View Projects
            </motion.button>

            <motion.button
              type="button"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/16 bg-emerald-400/[0.08] px-8 py-4 font-semibold text-emerald-50 backdrop-blur-md"
            >
              Contact on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
          >
            <div className="rounded-[30px] border border-blue-300/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-blue-100/55">What Recruiters Can Expect</p>
              <ul className="mt-5 space-y-4">
                {recruiterPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 text-blue-200">
                      <i className="fas fa-circle-check text-sm" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {heroStats.map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-[26px] border border-blue-300/10 bg-white/[0.03] p-5"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-blue-100/55">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white"
                title={social.note ?? social.label}
              >
                <i className={social.icon} />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[560px] flex-col gap-5"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-[38px] border border-blue-300/12 bg-gradient-to-br from-white/[0.05] to-blue-500/[0.06] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.38)]">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_48%)]"
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10">
              <img src={profile.photo} alt={profile.name} className="h-[520px] w-full object-cover" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div
              className="rounded-[26px] border border-blue-300/10 bg-white/[0.03] p-5"
              whileHover={{ y: -4 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-100/55">Location</p>
              <p className="mt-3 text-base font-semibold text-white">{profile.location}</p>
            </motion.div>

            <motion.div
              className="rounded-[26px] border border-blue-300/10 bg-white/[0.03] p-5"
              whileHover={{ y: -4 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-100/55">Focus</p>
              <p className="mt-3 text-base font-semibold text-white">Frontend + MERN</p>
            </motion.div>

            <motion.div
              className="rounded-[26px] border border-blue-300/10 bg-white/[0.03] p-5"
              whileHover={{ y: -4 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-100/55">Contact</p>
              <p className="mt-3 break-words text-base font-semibold text-white">{profile.email}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
