"use client";

import React from "react";
import { ProductBanner } from "../ProductBanner";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, MessageCircleMore, Search, Speech } from "lucide-react";

type CardSectionTypes = {
  title: string;
  subtitle: string;
  iconClassName?: string;
  Icon?: LucideIcon;
};

export const CardSection: React.FC<CardSectionTypes> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="py-40 flex bg-linear-to-b from-muted-foreground/4 via-background flex-col items-center w-full justify-between">
      <div className="flex flex-col max-w-[976px] gap-16">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-6 w-full items-end">
            <h1 className="text-5xl font-bold text-foreground tracking-tighter align-left">
              {title}
            </h1>
            <p className="font-medium tracking-tight text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full items-center">
          <AnimatePresence>
            {cardItem.map((item, index) => (
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
                viewport={{ once: true, amount: 0.01 }}
              >
                <ProductBanner
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  iconClassName={item.iconClassName}
                  description={item.subtitle}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CardSection;

export const cardItem: CardSectionTypes[] = [
  {
    title: "State-of-the-Art Search Engine",
    subtitle:
      "We pride ourselves on our top-line search engine, which is built to be extremely reliable and accurate.",
    iconClassName: "bg-linear-to-br from-orange-500 to-orange-300",
    Icon: Search,
  },
  {
    title: "Explore Raffle Assistant",
    subtitle:
      "Boost your self-service options with a secure, reliable and intelligent Raffle Assistant.",
    iconClassName: "bg-linear-to-br from-blue-500 to-blue-300",
    Icon: MessageCircleMore,
  },
  {
    title: "Engage Your Audience with Insights",
    subtitle:
      "Utilize our Insights to meet your audience and ensure to engage them where they need it most.",
    iconClassName: "bg-linear-to-br from-blue-900 to-blue-700",
    Icon: Speech,
  },
];
