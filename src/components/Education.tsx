import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic Journey With Continued Upskilling"
          subtitle="A clear snapshot of your formal education path, structured to be easy for hiring teams to scan."
        />

        <div className="relative grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.duration}`}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                  <i className="fas fa-graduation-cap" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100/65">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-300">{item.institute}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.note}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
