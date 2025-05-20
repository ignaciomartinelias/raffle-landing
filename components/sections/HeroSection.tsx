"use client";

import React from "react";
import { Button } from "../ui/button";
import AnimatedText from "../animations/AnimatedBlurText";
import { motion } from "framer-motion";
import BigAdGraphic from "../BigAdGraphic";

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="gap-16 pb-18 pt-18 flex flex-col items-center w-full justify-between bg-linear-to-b from-muted-foreground/4 via-background">
      <div className="flex flex-col lg:max-w-[976px] lg:min-w-[976px] lg:px-0 w-full gap-8 px-6">
        <div className="flex flex-col gap-6 max-w-3/4">
          <h1 className="text-6xl font-bold text-balance tracking-tight align-left">
            <AnimatedText text={title} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              mass: 0.6, // more weight slows it down
              damping: 25,
              stiffness: 100,
            }}
            className="font-medium text-lg text-balance tracking-tight max-w-3/4 text-neutral-600"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            type: "spring",
            mass: 0.6, // more weight slows it down
            damping: 25,
            stiffness: 100,
          }}
          className="flex flex-row gap-4 max-w-3/4"
        >
          <Button variant="default">Start building</Button>
          <Button variant="secondary">Learn more</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
          scale: 0.9,
          rotate: 1.5,
        }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="w-full h-auto flex justify-center px-6"
      >
        <BigAdGraphic
          title="Search that understands. Assistants that know."
          subtitle="Build lightning-fast search engines and AI assistants grounded in your own data — powered by our retrieval-first platform."
          className="lg:max-w-[1440px] w-full lg:min-w-[976px]"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
