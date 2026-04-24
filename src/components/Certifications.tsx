import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { journey } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="journey" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Journey"
          title="Training, Certifications, And Learning Momentum"
          subtitle="This section stays honest to your current stage while still showing strong intent, consistency, and growth."
        />

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.article
            className="glass-panel p-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/15 to-cyan-300/10 p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                <i className="fas fa-water-ladder" />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl text-white">{journey.training.title}</h3>
                <span className="rounded-full border border-white/10 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-100">
                  {journey.training.status}
                </span>
              </div>
              <p className="mt-3 text-slate-200">{journey.training.org}</p>
              <p className="mt-5 leading-7 text-slate-300">{journey.training.summary}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {journey.training.modules.map((module) => (
                <li key={module} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 text-cyan-100">
                    <i className="fas fa-circle-check text-sm" />
                  </span>
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {journey.certifications.map((certification, index) => (
              <motion.article
                key={`${certification.title}-${certification.date}`}
                className="glass-panel p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-white">{certification.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{certification.issuer}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100/70">
                    {certification.date}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
