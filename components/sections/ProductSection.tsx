"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const rings = [
  { size: "80%", opacity: "30" },
  { size: "70%", opacity: "40" },
  { size: "50%", opacity: "50" },
  { size: "40%", opacity: "60" },
  { size: "30%", opacity: "70" },
];

type ProductSectionType = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  Icon?: LucideIcon;
};

export const ProductSection: React.FC<ProductSectionType> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="py-40 relative flex px-6 bg-linear-to-b from-muted-foreground/4 via-background flex-col items-center w-full justify-between overflow-hidden">
      {rings.map((ring, i) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            mass: 0.6,
            damping: 25,
            stiffness: 100,
            delay: 0.3 + i * 0.1,
          }}
          viewport={{ once: false, amount: 0.5 }}
          key={i}
          className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        aspect-square rounded-full border border-dashed
        border-neutral-200/${ring.opacity}
      `}
          style={{ width: ring.size }}
        />
      ))}

      <div className="flex flex-col max-w-[976px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center w-full">
            <motion.div
              initial={{ y: 200, opacity: 0, filter: "blur(5px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                type: "spring",
                mass: 0.6,
                damping: 25,
                stiffness: 100,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 1 }}
              className="dark w-[90%] h-60 md:h-60 p-12 md:p-20 bg-linear-to-b from-neutral-950 via-blue-900 to-blue-700 backdrop-blur-md border-x border-t border-blue-900 rounded-t-3xl flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 30, opacity: 0, filter: "blur(5px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  mass: 0.6,
                  damping: 25,
                  stiffness: 100,
                  delay: 0.3,
                }}
                viewport={{ once: true, amount: 1 }}
                className="flex flex-col gap-2 w-full"
              >
                <h1 className="text-xl md:text-3xl font-bold text-balance text-foreground tracking-tighter align-left">
                  {title}
                </h1>
                <p className="font-medium tracking-tight text-balance text-neutral-300">
                  {subtitle}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: 100, boxShadow: "none" }}
              whileInView={{
                y: 0,
                boxShadow:
                  "rgba(255, 255, 255, 0.5) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.10) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px",
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                mass: 0.6,
                damping: 25,
                stiffness: 100,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid shadow-2xl overflow-hidden z-10 grid-cols-1 md:grid-cols-3 border border-dotted rounded-3xl w-full"
            >
              <div className="flex w-full flex-col bg-neutral-50 border-b md:border-b-transparent md:border-r border-dotted p-12 gap-6">
                <p className="font-bold text-balance tracking-tight">
                  Work 55% faster.{" "}
                  <span className="font-medium text-muted-foreground">
                    Increase productivity with AI-powered coding assistance,
                    including code completion, chat, and more.
                  </span>
                </p>
              </div>
              <div className="flex w-full bg-neutral-50 flex-col border-b md:border-b-transparent md:border-r border-dotted p-12 gap-6">
                <p className=" font-bold text-balance tracking-tight">
                  Work 55% faster.{" "}
                  <span className="font-medium text-muted-foreground">
                    Increase productivity with AI-powered coding assistance,
                    including code completion, chat, and more.
                  </span>
                </p>
              </div>
              <div className="flex w-full bg-neutral-50 flex-col p-12 gap-6">
                <p className="font-bold text-balance tracking-tight">
                  Work 55% faster.{" "}
                  <span className="font-medium text-muted-foreground">
                    Increase productivity with AI-powered coding assistance,
                    including code completion, chat, and more.
                  </span>
                </p>
              </div>
              <div className="flex w-full bg-neutral-100/20 backdrop-blur-sm border-t border-dotted md:col-span-3 flex-col p-12 gap-6">
                <p className="font-bold text-balance tracking-tight">
                  Work 55% faster.{" "}
                  <span className="font-medium text-muted-foreground">
                    Increase productivity with AI-powered coding assistance,
                    including code completion, chat, and more.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="grid grid-cols-4 gap-6 w-full items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
