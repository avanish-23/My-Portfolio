import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-frame px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Modern Frontend Foundation With MERN Momentum"
          subtitle="Everything here is rendered from structured data so your portfolio stays easy to update as you grow."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className={`rounded-[26px] border border-white/10 bg-gradient-to-br ${group.accent} p-5`}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-50">
                  <i className={group.icon} />
                </div>
                <h3 className="font-display text-2xl text-white">{group.title}</h3>
              </div>

              <div className="mt-6 space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.08 + skillIndex * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-100">{skill.name}</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100/65">
                        {skill.level}
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/5">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-white via-sky-200 to-cyan-300"
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            skill.level === "Advanced"
                              ? "92%"
                              : skill.level === "Strong"
                                ? "84%"
                                : skill.level === "Working"
                                  ? "72%"
                                  : "64%",
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
