"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, Repeat2, Speech, Zap, Megaphone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ValuePropSectionType = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  Icon?: LucideIcon;
};

export const ValuePropSection: React.FC<ValuePropSectionType> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="py-40 flex bg-linear-to-b from-muted-foreground/4 via-background flex-col items-center w-full justify-between">
      <div className="flex flex-col max-w-[976px] gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 max-w-3/5">
            <h1 className="text-5xl font-bold text-balance text-foreground tracking-tighter align-left">
              {title}
            </h1>
            <p className="font-medium tracking-tight text-lg text-balance text-muted-foreground">
              {subtitle}
            </p>
          </div>
          <div className="w-full h-80 bg-neutral-100 rounded-2xl flex items-center justify-center" />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="grid grid-cols-2 w-full">
            {valuePropItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col col-span-2 border-t last:border-b gap-2 border-dashed border-neutral-200",
                  index === 1 && "pr-0"
                )}
              >
                <div className="flex flex-row gap-6 items-center p-4">
                  <div className="flex flex-col p-10 gap-2 w-full first:pl-0 last:pl-0">
                    <h2 className="text-xl text-balance text-foreground font-semibold tracking-tighter max-w-4/5 align-left">
                      {item.title}
                    </h2>
                    <p className="text-balance tracking-tight text-muted-foreground max-w-4/5">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="p-14 flex items-center w-full h-full bg-neutral-100 rounded-r-3xl" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6 w-full items-center justify-center">
            <AnimatePresence>
              {smallValueItems.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "flex flex-col w-full gap-2 border-dashed border-neutral-200"
                  )}
                >
                  <div className="flex gap-2 items-center text-blue-800">
                    {value.Icon && <value.Icon className="size-4" />}
                    <h3 className="text-balance text-sm font-semibold tracking-tighter max-w-4/5 align-left">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-balance text-sm tracking-tight text-muted-foreground max-w-4/5">
                    {value.subtitle}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;

export const valuePropItems: ValuePropSectionType[] = [
  {
    title: "Effortless Raffle Management",
    subtitle:
      "Easily create, manage, and track your raffles with our intuitive platform.",
  },
  {
    title: "Secure and Transparent Draws",
    subtitle:
      "Ensure fairness and trust with verifiable, transparent raffle results.",
  },
  {
    title: "Engage Your Audience",
    subtitle:
      "Boost participation and excitement with interactive features and real-time updates.",
  },
];

export const smallValueItems: ValuePropSectionType[] = [
  {
    title: "Re-ranking",
    subtitle: "Easily adjust the order of your search results.",
    Icon: Repeat2,
  },
  {
    title: "Instant Answers",
    subtitle: "Ensure fairness and trust with verifiable results.",
    Icon: Zap,
  },
  {
    title: "Banners",
    subtitle: "Boost participation with interactive features.",
    Icon: Megaphone,
  },
  {
    title: "Insights",
    subtitle: "Boost participation and excitement.",
    Icon: Speech,
  },
];
