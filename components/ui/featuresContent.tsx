"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DotBackground } from "./dot-background"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl" // or your i18n hook

// Import original features data
import { features as homeFeatures } from "@/data/homePage"

// Define translation keys in correct order
const featureKeys = [
  "upload",
  "mockSession",
  "interactiveQA",
  "timing",
  "feedback",
  "presenter",
] as const

type FeatureKey = typeof featureKeys[number]

// Translation-aware feature interface
interface TransFeature {
  key: FeatureKey
  icon: React.ElementType
}

interface FeatureCardProps {
  feature: TransFeature
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const t = useTranslations("featuresSection.cards")
  const Icon = feature.icon

  // Track screen size
  const [screenSize, setScreenSize] = useState("desktop")
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize("mobile")
      else if (width < 1024) setScreenSize("tablet")
      else setScreenSize("desktop")
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Animation variants based on screen size
  const getDropIn = () => {
    const cfg = {
      mobile: { distance: -200, stiffness: 70, damping: 10, delay: index * 0.1 },
      tablet: { distance: -300, stiffness: 80, damping: 12, delay: index * 0.15 },
      desktop: { distance: -400, stiffness: 90, damping: 13, delay: index * 0.2 },
    }
    const v = cfg[screenSize as keyof typeof cfg]
    return {
      initial: { opacity: 0, y: v.distance },
      animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: v.stiffness, damping: v.damping, delay: v.delay, bounce: 0.4 } },
    }
  }

  // Pull translations
  const title = t(`${feature.key}.title`)
  const description = t(`${feature.key}.description`)

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={getDropIn()}
      whileHover={{ scale: 1.02, y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Card className="h-full bg-white border border-gray-200 shadow-sm hover:border-transparent hover:shadow-lg transition-all duration-200 rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-md bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] group-hover:from-[#628AC8] group-hover:via-[#9081DC] transition-colors duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const FeaturesSection = () => {
  const t = useTranslations("featuresSection")

  // Pair icons with translation keys
  const features: TransFeature[] = featureKeys.map((key, idx) => ({
    key,
    icon: homeFeatures[idx].icon,
  }))

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50/30 via-white to-gray-50/50 py-20 px-6 lg:px-16">
      <DotBackground className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50" dotColor="#d4d4d4" dotColorDark="#374151" dotSize="24px" maskIntensity="15%">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16 max-w-2xl">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t("heading", { highlight: t("highlight") })}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-gray-600 leading-relaxed">
              {t("subheading")}
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.key} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </DotBackground>
    </section>
  )
}

export default FeaturesSection
