import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Practical Work That Shows Your Direction"
          subtitle="These cards are built to help recruiters understand your current strengths fast, without overclaiming experience."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel flex h-full flex-col overflow-hidden p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${project.accent} p-6`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                    <i className={project.icon} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-50/80">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{project.description}</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-100">
                      <i className="fas fa-circle-check text-sm" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-cyan-50/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <i className="fab fa-github" />
                  GitHub
                </a>
                <a
                  href={`https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(`Hi Avanish, I would like to discuss your ${project.title} project.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp" />
                  Discuss
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
