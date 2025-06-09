"use client"

import React, { useMemo, useRef, ReactNode, RefObject } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: number;
  scrollEnd?: number;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "backInOut",
  scrollStart = 0,
  scrollEnd = 1,
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10% 0px -10% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    container: scrollContainerRef
  });

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <CharacterAnimation
        key={index}
        char={char}
        index={index}
        scrollYProgress={scrollYProgress}
        stagger={stagger}
        ease={ease}
        duration={animationDuration}
        scrollStart={scrollStart}
        scrollEnd={scrollEnd}
        isInView={isInView}
      />
    ));
  }, [children, scrollYProgress, stagger, ease, animationDuration, scrollStart, scrollEnd, isInView]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  );
};

interface CharacterAnimationProps {
  char: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  stagger: number;
  ease: string;
  duration: number;
  scrollStart: number;
  scrollEnd: number;
  isInView: boolean;
}

const CharacterAnimation: React.FC<CharacterAnimationProps> = ({
  char,
  index,
  scrollYProgress,
  stagger,
  ease,
  duration,
  scrollStart,
  scrollEnd,
}) => {
  // Calculate staggered progress for this character
  const staggerOffset = index * stagger;
  const adjustedStart = Math.max(0, scrollStart - staggerOffset);
  const adjustedEnd = Math.min(1, scrollEnd - staggerOffset);
  
  // Transform values based on scroll progress
  const opacity = useTransform(
    scrollYProgress,
    [adjustedStart, adjustedEnd],
    [0, 1]
  );
  
  const yPercent = useTransform(
    scrollYProgress,
    [adjustedStart, adjustedEnd],
    [120, 0]
  );
  
  const scaleY = useTransform(
    scrollYProgress,
    [adjustedStart, adjustedEnd],
    [2.3, 1]
  );
  
  const scaleX = useTransform(
    scrollYProgress,
    [adjustedStart, adjustedEnd],
    [0.7, 1]
  );

  // Convert ease string to framer motion format
  const getEasing = (easeStr: string) => {
    switch (easeStr) {
      case "back.inOut(2)":
      case "backInOut":
        return [0.68, -0.6, 0.32, 1.6];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "easeIn":
        return [0.42, 0, 1, 1];
      case "easeOut":
        return [0, 0, 0.58, 1];
      case "easeInOut":
        return [0.42, 0, 0.58, 1];
      default:
        return [0.68, -0.6, 0.32, 1.6];
    }
  };

  return (
    <motion.span
      className="char"
      style={{
        display: "inline-block",
        opacity,
        y: yPercent,
        scaleY,
        scaleX,
        transformOrigin: "50% 0%",
        willChange: "opacity, transform"
      }}
      transition={{
        duration,
        ease: getEasing(ease)
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default ScrollFloat;