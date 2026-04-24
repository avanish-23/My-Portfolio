import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutHighlights, languages, profile, strengths } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A Fresher Developer With A Design-First Mindset"
          subtitle="Professional enough for recruiters, dynamic enough to be memorable, and grounded in the real experience listed on your resume."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="glass-panel overflow-hidden p-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.18),transparent_60%)]" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative z-10 h-full min-h-[420px] w-full rounded-[26px] object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">Location</p>
                <p className="mt-3 text-lg text-white">{profile.location}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">Role Focus</p>
                <p className="mt-3 text-lg text-white">Frontend / MERN</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="glass-panel p-7"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg leading-8 text-slate-300">{profile.about}</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-3">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-panel p-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.09, duration: 0.55 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                    <i className={item.icon} />
                  </div>
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="glass-panel grid gap-5 p-7 sm:grid-cols-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Strengths</p>
                <ul className="mt-4 space-y-3">
                  {strengths.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-1 text-cyan-100">
                        <i className="fas fa-circle-check text-sm" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Languages</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
