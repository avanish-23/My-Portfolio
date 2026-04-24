import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.p
        className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/80"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>

      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        <AnimatedText text={title} />
      </h2>

      <motion.div
        className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-white via-sky-200 to-cyan-400"
        initial={{ scaleX: 0, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p
        className="mt-6 text-base leading-7 text-slate-300 sm:text-lg"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
