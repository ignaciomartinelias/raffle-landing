"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ShinyText from "./animations/ShinyText";

type BigAdGraphicTypes = {
  title: string;
  subtitle: string;
  Icon?: LucideIcon;
  className?: string;
};

export const BigAdGraphic: React.FC<BigAdGraphicTypes> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <motion.section
      initial={{
        boxShadow: "none",
      }}
      animate={{
        boxShadow:
          "rgba(255, 255, 255, 0.5) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.10) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px",
      }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      className={cn(
        "md:px-56 py-48 md:h-[756px] flex bg-linear-to-b from-neutral-950 via-blue-900 to-blue-700 flex-col items-center rounded-4xl w-full justify-end",
        className
      )}
    >
      <div className="flex flex-col gap-6 max-w-[976px] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-4xl font-bold w-1/2 text-balance text-background tracking-tighter"
        >
          <ShinyText text={title} />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.8 }}
          className="font-semibold tracking-tight text-lg w-2/3 text-balance text-background"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default BigAdGraphic;
