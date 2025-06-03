"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { TextParallaxContentExample } from "@/components/ui/TextParallexContent"
import FAQSection from "@/components/Faqs"
import TestimonialsSection from "@/components/Testimonials"
import PricingSection from "@/components/Pricing"
import EndingHeroSection from "@/components/EndingHero"
import FooterSection from "@/components/Footer"
import ResizableNavbar from "@/components/ui/resizable-navbar"
import { DotBackground } from "@/components/ui/dot-background"
import Hero from "@/components/Hero"

export default function HomePage() {
  const data = [
    {
      title: "Upload Your File",
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      ),
      content: (
        <div className="flex">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            className="h-40 w-full overflow-hidden rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Give Your Presentation",
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      ),
      content: (
        <div className="flex">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            className="h-40 w-full overflow-hidden object-cover rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Review the Feedback",
      description: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      ),
      content: (
        <div className="flex">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            className="h-40 w-full overflow-hidden object-cover rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      ),
    },
  ]

  return (
    <DotBackground
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      dotColor="#d4d4d4"
      dotColorDark="#374151"
      dotSize="24px"
      maskIntensity="15%"
    >
      <ResizableNavbar />

      {/* Hero Section */}
      <Hero/>

      {/* Additional Sections */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto"
      >
        <MacbookScroll />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto"
      >
        <TextParallaxContentExample />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full mx-auto"
      >
        <Timeline data={data} />
      </motion.div>

      <FAQSection />

      <TestimonialsSection />

      <PricingSection />

      <EndingHeroSection />

      <FooterSection />
    </DotBackground>
  )
}
