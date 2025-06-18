"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline";
import { TextParallaxContentExample } from "@/components/ui/TextParallexContent";
import FAQSection from "@/components/Faqs";
import TestimonialsSection from "@/components/Testimonials";
import PricingSection from "@/components/Pricing";
import EndingHeroSection from "@/components/EndingHero";
import { DotBackground } from "@/components/ui/dot-background";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Image from "next/image";
import { faqData } from "@/data/homePage";
import { useTranslations } from "next-intl";

interface SmoothScrollContainerProps {
  children: ReactNode;
}
interface SmoothSectionProps {
  id?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SmoothScrollContainer = ({ children }: SmoothScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      <motion.div style={{ y: useTransform(smoothProgress, [0, 1], [0, 0]) }}>
        {children}
      </motion.div>
    </div>
  );
};

const SmoothSection = ({
  id,
  children,
  delay = 0,
  className = "",
}: SmoothSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      id={id}
      ref={sectionRef}
      style={{ y, opacity }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



export default function HomePage() {
  const t = useTranslations("timeline")
  const data = [
    {
      title: t("steps.upload.title"),
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {t("steps.upload.description")}
        </p>
      ),
      content: (
        <div className="flex">
          <Image
            src="/home/upload.png"
            alt="startup template"
            width={800}
            height={320}
            className="h-40 w-auto overflow-hidden rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: t("steps.presentation.title"),
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {t("steps.presentation.description")}
        </p>
      ),
      content: (
        <div className="flex">
          <Image
            src="/home/presentation.png"
            alt="startup template"
            width={800}
            height={320}
            className="h-40 w-auto overflow-hidden rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: t("steps.feedback.title"),
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {t("steps.feedback.description")}
        </p>
      ),
      content: (
        <div className="flex">
          <Image
            src="/home/feedback.png"
            alt="startup template"
            width={800}
            height={320}
            className="h-40 w-auto overflow-hidden rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
  ];

  // Inject smooth-scroll CSS
  useEffect(() => {
    const smoothScrollStyle = document.createElement("style");
    smoothScrollStyle.textContent = `
      html {
        scroll-behavior: smooth;
      }
      body {
        overflow-x: hidden;
      }
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #9081DC, #628AC8);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #7d6bc7, #5577b3);
      }
    `;
    document.head.appendChild(smoothScrollStyle);
    return () => {
      document.head.removeChild(smoothScrollStyle);
    };
  }, []);

  return (
    <SmoothScrollContainer>
      <DotBackground
        className="h-auto bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        

        {/* Hero Section */}
        <SmoothSection id="hero" className="scroll-mt-16">
          <Hero />
        </SmoothSection>

        

        {/* Features Section */}
        <SmoothSection id="features" delay={0.1} className="scroll-mt-16 relative max-w-9xl mx-auto">
          <Features />
        </SmoothSection>

        {/* Text Parallax Section */}
        <SmoothSection id="parallax" delay={0.2} className="scroll-mt-16 relative mx-auto">
          <TextParallaxContentExample />
        </SmoothSection>

        {/* Timeline Section */}
        <SmoothSection id="timeline" delay={0.3} className="scroll-mt-16 relative w-full mx-auto">
          <Timeline data={data} />
        </SmoothSection>

        {/* FAQ Section */}
        <SmoothSection id="faq" delay={0.1} className="scroll-mt-16">
          <FAQSection data={faqData}/>
        </SmoothSection>

        {/* Testimonials (“Success Stories”) Section */}
        <SmoothSection id="success-stories" delay={0.2} className="scroll-mt-16">
          <TestimonialsSection />
        </SmoothSection>

        {/* Pricing Section */}
        <SmoothSection id="pricing" delay={0.3} className="scroll-mt-16">
          <PricingSection />
        </SmoothSection>

        {/* Ending Hero Section */}
        <SmoothSection id="ending" delay={0.1} className="scroll-mt-16">
          <EndingHeroSection />
        </SmoothSection>

        

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] transform-gpu z-50"
          style={{
            scaleX: useSpring(useScroll().scrollYProgress, {
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }),
            transformOrigin: "0%",
          }}
        />
      </DotBackground>
    </SmoothScrollContainer>
  );
}
