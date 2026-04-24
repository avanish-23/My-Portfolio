import { motion, Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const wordVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: index % 2 === 0 ? 28 : -24,
    x: index % 3 === 0 ? -12 : 12,
    rotate: index % 2 === 0 ? -5 : 5,
    filter: "blur(10px)",
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.08,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
};

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          custom={index}
          variants={wordVariants}
          whileHover={{
            y: -4,
            scale: 1.04,
            textShadow: "0 0 22px rgba(186, 230, 253, 0.38)",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
