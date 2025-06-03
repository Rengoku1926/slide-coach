"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  // Timeline scroll progress for the animated line
  const timelineScrollProgress = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(timelineScrollProgress.scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(timelineScrollProgress.scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setTimelineHeight(rect.height);
    }
  }, [content]);

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* Timeline sidebar */}
      <div className="relative w-16 flex-shrink-0 hidden lg:block">
        <div 
          ref={timelineRef}
          className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-transparent via-slate-600 to-transparent"
          style={{ height: `${content.length * 160}px` }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
        
        {/* Timeline dots */}
        {content.map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-4 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10"
            style={{ 
              top: `${index * 160 + 80}px`,
              borderColor: activeCard >= index ? '#8b5cf6' : '#64748b',
              backgroundColor: activeCard >= index ? '#8b5cf6' : 'transparent'
            }}
            animate={{
              scale: activeCard === index ? 1.2 : 1,
              borderColor: activeCard >= index ? '#8b5cf6' : '#64748b',
              backgroundColor: activeCard >= index ? '#8b5cf6' : 'transparent'
            }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: activeCard >= index ? 'white' : '#64748b'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content area */}
      <div className="relative flex items-start px-4 flex-1">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky content panel */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block flex-shrink-0",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

// Demo Component with sample data
export default function StickyScrollDemo() {
  const sampleContent = [
    {
      title: "2024 - Launch Year",
      description: "Built and launched Aceternity UI and Aceternity UI Pro from scratch with modern design principles and cutting-edge animations.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white p-6">
          <div className="text-center">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/20 h-16 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-white/20 h-16 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-white/20 h-16 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-white/20 h-16 rounded-lg backdrop-blur-sm"></div>
            </div>
            <p className="text-sm font-medium">UI Components Library</p>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023 - Foundation",
      description: "Started building the foundation with beautiful UI components and templates. Focus on developer experience and modern web standards.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white p-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-white/40 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 h-3 w-32 rounded-full mx-auto"></div>
              <div className="bg-white/20 h-3 w-24 rounded-full mx-auto"></div>
              <div className="bg-white/20 h-3 w-28 rounded-full mx-auto"></div>
            </div>
            <p className="text-sm font-medium mt-4">Template System</p>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Planning Phase",
      description: "Research phase focusing on modern web development trends, user experience patterns, and animation libraries for the perfect developer toolkit.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white p-6">
          <div className="text-center">
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">📋</span>
                <div className="bg-white/20 h-2 w-20 rounded-full"></div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">🎨</span>
                <div className="bg-white/20 h-2 w-16 rounded-full"></div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">⚡</span>
                <div className="bg-white/20 h-2 w-24 rounded-full"></div>
              </div>
            </div>
            <p className="text-sm font-medium">Research & Planning</p>
          </div>
        </div>
      ),
    },
    {
      title: "Present - Continuous Growth",
      description: "Ongoing development with regular updates, new components, and community feedback integration. Building the future of web UI.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white p-6">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>
            <div className="space-y-1 mb-3">
              <div className="text-xs text-green-200">✅ 50+ Components</div>
              <div className="text-xs text-green-200">✅ 1000+ Users</div>
              <div className="text-xs text-green-200">✅ Active Community</div>
            </div>
            <p className="text-sm font-medium">Live & Growing</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Journey Timeline
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Scroll through our development journey with an interactive timeline that grows as you explore each milestone.
          </p>
        </div>
        
        <StickyScroll content={sampleContent} />
      </div>
    </div>
  );
}