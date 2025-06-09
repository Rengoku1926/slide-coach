"use client";

import React, { useRef, useMemo } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Container rotation variants (static per prop values)
  const containerVariants: Variants = {
    hidden: { rotate: baseRotation },
    visible: {
      rotate: 0,
      transition: { ease: "linear", duration: 0.5 },
    },
  };

  // If children is a string, split into words/spaces; otherwise, ignore
  const text = typeof children === "string" ? children : "";

  // Compute word spans and their variants inside one useMemo
  const parts = useMemo(() => {
    // Define childVariants here so it doesn't trigger re-creation outside
    const childVariants: Variants = {
      hidden: {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { ease: "easeOut", duration: 0.5 },
      },
    };

    return text.split(/(\s+)/).map((segment, i) => {
      if (/^\s+$/.test(segment)) {
        return segment; // preserve whitespace
      }
      return (
        <motion.span
          key={`word-${i}`}
          variants={childVariants}
          className="inline-block"
        >
          {segment}
        </motion.span>
      );
    });
  }, [text, baseOpacity, blurStrength, enableBlur]);

  return (
    <motion.h2
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        root: scrollContainerRef ?? undefined,
        amount: 0.1,
      }}
    >
      <motion.p
        className={`scroll-reveal-text max-w-3xl text-lg text-left md:text-xl lg:text-4xl  ${textClassName}`}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {parts}
      </motion.p>
      {typeof children !== "string" && children}
    </motion.h2>
  );
};

export default ScrollReveal;
