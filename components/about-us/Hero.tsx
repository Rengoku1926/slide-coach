"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedGradientText from "./ui/animated-gradient-text"
import { Users, GraduationCap, Brain, ClipboardCheck } from "lucide-react"
import { UniversitySlider } from "../ui/university-slider"
import { motion } from "framer-motion"

export default function AboutUsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />

        {/* Floating background elements - responsive */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20 bg-gradient-to-r from-purple-400 to-blue-400"
              // Responsive particle sizes
              style={{
                width: `${8 + i * 2}px`,
                height: `${8 + i * 2}px`,
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 flex h-auto max-w-7xl mx-auto flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center"
          // Responsive spacing
          style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading with AnimatedGradientText */}
          <motion.div variants={itemVariants} className="w-full mt-20">
            <AnimatedGradientText
              text="A passionate team devoted to unlocking every learner's potential with intelligent, AI-driven assessment solutions."
              flipWords={{
                targetWord: "intelligent",
                alternatives: ["smart", "advanced", "innovative", "adaptive", "clever", "sophisticated"],
                duration: 2500,
              }}
              icons={[
                {
                  icon: Users,
                  index: 17,
                  gradientFrom: "from-purple-500",
                  gradientTo: "to-blue-500",
                },
                {
                  icon: GraduationCap,
                  index: 54,
                  gradientFrom: "from-yellow-400",
                  gradientTo: "to-orange-500",
                },
                {
                  icon: Brain,
                  index: 81,
                  gradientFrom: "from-cyan-400",
                  gradientTo: "to-blue-600",
                },
                {
                  icon: ClipboardCheck,
                  index: 113,
                  gradientFrom: "from-red-400",
                  gradientTo: "to-pink-600",
                },
              ]}
              className="leading-tight"
            />
          </motion.div>

          {/* Subtitle - responsive text sizing */}
          <motion.p
            className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            variants={itemVariants}
          >
            We&apos;re building the all-in-one adaptive learning and evaluation platform for modern education.
          </motion.p>

          {/* CTA Button - responsive sizing */}
          <motion.div variants={buttonVariants}>
            <Button
              className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-base font-medium rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="#">View careers</Link>
              </motion.div>
            </Button>
          </motion.div>

          {/* Decorative line - responsive width */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-16 sm:w-20 md:w-24"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{  duration: 0.3 }}
          />
        </motion.div>
      </section>

      {/* University Slider Section */}
      <motion.section
        className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50/50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          variants={itemVariants}
        >
          Trusted by leading universities
        </motion.h2>

        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full" variants={itemVariants}>
          <UniversitySlider />
        </motion.div>

        {/* Additional decorative elements - responsive spacing */}
        <motion.div className="mt-8 sm:mt-10 md:mt-12 flex space-x-2" variants={itemVariants}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                
              }}
            />
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
