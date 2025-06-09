"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
//   title = "Our Values",
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}) => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-100/30 to-blue-100/30 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2.5,
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Main heading with enhanced styling */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
           
            {/* Main text with gradient */}
            <motion.span
              className="relative bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Our Values
            </motion.span>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: 2,
              }}
            />
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The principles that guide our mission to transform education through
            innovative technology
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-8 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          <div
            className={cn(
              "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
              className
            )}
          >
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  textColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
        {icon}
        <div
          className={`text-lg sm:text-xl md:text-2xl lg:text-2xl mt-2 mb-2 font-sans font-bold ${
            textColor || "text-neutral-600"
          } dark:text-neutral-200`}
        >
          {title}
        </div>
        <div className="font-sans text-sm sm:text-base md:text-md lg:text-md font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
