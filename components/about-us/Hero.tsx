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
        delayChildren: 0.2,
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
      <section className="relative flex min-h-[700px] flex-col items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 flex h-auto max-w-7xl mx-auto flex-col items-center justify-center space-y-8 px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading with AnimatedGradientText */}
          <motion.div variants={itemVariants} className="w-full">
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

          {/* Subtitle */}
          <motion.p
            className="max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            We&apos;re building the all-in-one adaptive learning and evaluation platform for modern education.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={buttonVariants}>
            <Button
              className="mt-6 px-8 py-6 text-base font-medium rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="#">View careers</Link>
              </motion.div>
            </Button>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>
      </section>

      {/* University Slider Section */}
      <motion.section
        className="w-full py-16 md:py-24 lg:py-32 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50/50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent text-center"
          variants={itemVariants}
        >
          Trusted by leading universities
        </motion.h2>

        <motion.div className="max-w-7xl mx-auto px-4 md:px-6 w-full" variants={itemVariants}>
          <UniversitySlider />
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div className="mt-12 flex space-x-2" variants={itemVariants}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
