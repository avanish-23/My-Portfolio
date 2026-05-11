import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Clean Project Stories With Better Hiring Signal"
          subtitle="Each card now reads more like a small case study, so recruiters can understand what you built, what you focused on, and where your strengths show up."
        />

        <div className="grid gap-7 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel group flex h-full flex-col overflow-hidden p-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -9, scale: 1.01 }}
            >
              <div className={`relative overflow-hidden rounded-t-[32px] border-b border-white/8 bg-gradient-to-br ${project.accent} p-7`}>
                <div className="absolute right-5 top-5 text-6xl font-semibold tracking-tight text-white/6">
                  0{index + 1}
                </div>

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/20 text-blue-50 shadow-[0_0_24px_rgba(59,130,246,0.12)]">
                    <i className={project.icon} />
                  </span>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-blue-50/80">
                      {project.status}
                    </span>
                    <span className="rounded-full border border-white/10 bg-slate-950/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-slate-100/80">
                      {project.label}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-blue-100/55">Project Outcome</p>
                  <h3 className="mt-3 font-display text-3xl text-white">{project.title}</h3>
                  <p className="mt-2 text-lg text-blue-50/85">{project.outcome}</p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-100/82">{project.description}</p>
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="grid gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-blue-100/55">What I Built</p>
                    <ul className="mt-4 space-y-3">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                          <span className="mt-1 text-blue-200">
                            <i className="fas fa-arrow-right text-xs" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-blue-100/55">Tech Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-300/12 bg-blue-400/[0.06] px-3 py-2 text-xs uppercase tracking-[0.22em] text-blue-50/78"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-blue-100/45">Portfolio Direction</p>
                    <p className="mt-2 text-sm text-slate-300">Practical, responsive, and presentation-focused work.</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition group-hover:-translate-y-0.5 hover:bg-white/[0.08]"
                    >
                      <i className="fab fa-github" />
                      GitHub
                    </a>
                    <a
                      href={`https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(`Hi Avanish, I would like to discuss your ${project.title} project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-300/16 bg-blue-400/[0.08] px-5 py-3 text-sm font-semibold text-blue-50 transition group-hover:-translate-y-0.5 hover:bg-blue-400/[0.14]"
                    >
                      <i className="fas fa-arrow-up-right-from-square" />
                      Discuss Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
