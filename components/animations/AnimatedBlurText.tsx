"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // slower stagger
      delayChildren: 0.5, // initial delay
    },
  },
};

const wordAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    rotateY: 20,
    y: 20,
    filter: "blur(20px)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 0.8, // more weight slows it down
      damping: 25,
      stiffness: 100,
    },
  },
};

type AnimatedTextProps = {
  text: string;
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className="inline-block -ml-2 text-balance"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="first:mr-1 tracking-tighter inline-block whitespace-nowrap"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
