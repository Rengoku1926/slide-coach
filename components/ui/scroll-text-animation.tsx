"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";
import { DotBackground } from "./dot-background";

export const ScrollTextAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1) Split the text into characters
  const textContent = `In a world moving at lightning speed, the answer isn't more tools—but the right one. Bird unifies communication, customer insights, operations and automation into a single, powerful platform. Automate what slows you down, focus on what moves you forward, and scale without limits. Welcome to business reimagined.`;
  const characters = textContent.split("");

  // 2) 3D-image hover state
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 400, damping: 40 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 15;
    const rotateYValue = (centerX - e.clientX) / 15;
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.08);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const total = characters.length;
  const charStartProgresses = characters.map((_, i) => i / total);
  const charEndProgresses = characters.map((_, i) => (i + 1) / total);

  /* eslint-disable react-hooks/rules-of-hooks */
  const charColors = characters.map((_, index) => {
    return useTransform(
      scrollYProgress,
      [charStartProgresses[index], charEndProgresses[index]],
      ["#cbd5e1", "#000000"]
    );
  });

  const shadowTranslateX = useTransform(rotateY, [-25, 25], [12, -12]);
  const shadowTranslateY = useTransform(rotateX, [-25, 25], [-12, 12]);

  return (
    <div ref={containerRef} className="relative bg-white">
      <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="h-[400vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 lg:px-16">
            <div className="max-w-7xl w-full flex flex-col items-center">
              {/* Features Title - Centered at Top */}
              <div className="mb-6 lg:mb-20">
                <ScrollFloat
                  scrollStart={0.2}
                  scrollEnd={0.8}
                  stagger={0.03}
                  ease="backInOut"
                  textClassName="text-7xl md:text-8xl lg:text-9xl font-bold text-center"
                >
                  Features
                </ScrollFloat>
              </div>

              {/* Content Section - Text Left, Image Right */}
              <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
                {/* Left: Character-by-character scroll-colors */}
                <div className="flex-1 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl">
                    <div className="text-xl sm:text-2xl lg:text-4xl xl:text-4xl leading-[1.2] tracking-tight whitespace-pre-wrap block">
                      {characters.map((char, idx) => {
                        const colorMotionValue = charColors[idx];
                        return (
                          <motion.span
                            key={idx}
                            style={{ color: colorMotionValue }}
                            className="inline"
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right: 3D-tilt card with hover-and-shadow */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <motion.div
                    style={{
                      rotateX,
                      rotateY,
                      scale,
                      transformStyle: "preserve-3d",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative cursor-pointer"
                  >
                    <motion.div
                      className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden"
                      style={{
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                      }}
                      whileHover={{
                        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Next.js Image */}
                      <Image
                        src="/testImage2.jpg"
                        alt="3D Animated Image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

                      {/* Floating orbs for extra 3D effect */}
                      <motion.div
                        className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full blur-[0.5px]"
                        animate={
                          isHovered
                            ? {
                                y: [-4, 4, -4],
                                x: [-2, 2, -2],
                                scale: [1, 1.2, 1],
                              }
                            : { y: 0, x: 0, scale: 1 }
                        }
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400 rounded-full blur-[0.5px]"
                        animate={
                          isHovered
                            ? {
                                y: [3, -3, 3],
                                x: [2, -2, 2],
                                scale: [1, 1.3, 1],
                              }
                            : { y: 0, x: 0, scale: 1 }
                        }
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 0.8,
                        }}
                      />

                      <motion.div
                        className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-green-400 rounded-full blur-[0.5px]"
                        animate={
                          isHovered
                            ? {
                                y: [-2, 2, -2],
                                x: [-1, 1, -1],
                                scale: [1, 1.4, 1],
                              }
                            : { y: 0, x: 0, scale: 1 }
                        }
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 1.2,
                        }}
                      />
                    </motion.div>

                    {/* Underneath "shadow" to give extra depth */}
                    <motion.div
                      className="absolute inset-0 bg-black/10 rounded-3xl -z-10 blur-sm"
                      style={{
                        translateZ: -60,
                        translateX: shadowTranslateX,
                        translateY: shadowTranslateY,
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DotBackground>
    </div>
  );
};

export default ScrollTextAnimation;
