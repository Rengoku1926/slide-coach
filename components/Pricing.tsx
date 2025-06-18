"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { DotBackground } from "./ui/dot-background"
import { useTranslations } from "next-intl"

interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  cta: string
  popular: boolean
  features: string[]
}

export default function PricingSection() {
  const t = useTranslations("pricing")
  const [isYearly, setIsYearly] = useState(false)

  // Get the popular plan from translations
  const popularPlan = t("popularPlan")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  // Get plan data from translations
  const getPlanData = (planId: string) => {
    // Helper function to safely get numeric values
    const getNumericValue = (key: string, fallback: number) => {
      try {
        const value = t(key)
        if (typeof value === "number") return value
        if (typeof value === "string") {
          const parsed = Number.parseInt(value, 10)
          return isNaN(parsed) ? fallback : parsed
        }
        return fallback
      } catch {
        // Return the fallback values from your JSON structure
        const fallbacks = {
          "plans.starter.monthlyPrice": 19,
          "plans.starter.yearlyPrice": 190,
          "plans.pro.monthlyPrice": 49,
          "plans.pro.yearlyPrice": 490,
          "plans.enterprise.monthlyPrice": 99,
          "plans.enterprise.yearlyPrice": 990,
        }
        return fallbacks[key as keyof typeof fallbacks] || fallback
      }
    }

    // Helper function to safely get boolean values
    const getBooleanValue = (key: string, fallback: boolean) => {
      try {
        const value = t(key)
        if (typeof value === "boolean") return value
        if (typeof value === "string") return value.toLowerCase() === "true"
        return fallback
      } catch {
        return fallback
      }
    }

    // Helper function to get features array
    const getFeatures = (planId: string) => {
      const features = []

      // Define the expected number of features for each plan based on your JSON
      const featureCounts = {
        starter: 5,
        pro: 7,
        enterprise: 8,
      }

      const maxFeatures = featureCounts[planId as keyof typeof featureCounts] || 5

      for (let i = 1; i <= maxFeatures; i++) {
        try {
          const featureKey = `plans.${planId}.features.feature${i}`
          const feature = t(featureKey)

          // Check if we got a valid translation (not the key itself)
          if (feature && !feature.includes("Could not resolve")) {
            features.push(feature)
          }
        } catch {
          // If translation fails, skip this feature
          break
        }
      }

      return features
    }

    return {
      id: planId,
      name: t(`plans.${planId}.name`),
      description: t(`plans.${planId}.description`),
      monthlyPrice: getNumericValue(`plans.${planId}.monthlyPrice`, 0),
      yearlyPrice: getNumericValue(`plans.${planId}.yearlyPrice`, 0),
      cta: t(`plans.${planId}.cta`),
      popular: getBooleanValue(`plans.${planId}.popular`, false),
      features: getFeatures(planId),
    }
  }

  const pricingPlans = ["starter", "pro", "enterprise"].map((planId) => getPlanData(planId))

  const calculatePrice = (plan: Plan) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice
  }

  const calculateSavings = (plan: Plan) => {
    return Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100)
  }

  return (
    <section className="my-24 bg-gradient-to-b from-white to-gray-50">
      <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text mb-4"
            >
              {t("heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t("subheading")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center justify-center mt-10 mb-8 space-x-3"
            >
              <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>
                {t("monthlyLabel")}
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-gradient-to-r from-violet-500 to-indigo-500"
              />
              <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
                {t("yearlyLabel")}{" "}
                <span className="inline-block ml-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t("saveTag")}
                </span>
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan) => {
              // Determine if this plan is popular - check both the plan ID and the popular flag
              const isPopular = plan.id === "pro" || plan.id === popularPlan

              return (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className={`relative rounded-2xl overflow-hidden bg-white border ${
                    isPopular
                      ? "border-violet-200 shadow-lg shadow-violet-100"
                      : "border-gray-200 shadow-md shadow-gray-100"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 inset-x-0">
                      <div className="h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
                      <div className="flex justify-center -mt-px">
                        <Badge
                          className="rounded-b-md rounded-t-none px-3 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 border-0 text-white font-medium"
                          variant="outline"
                        >
                          {(() => {
                            try {
                              return t("badgeText")
                            } catch {
                              return "Most Popular"
                            }
                          })()}
                        </Badge>
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">${calculatePrice(plan)}</span>
                        <span className="text-gray-500 ml-2">
                          /
                          {isYearly
                            ? (() => {
                                try {
                                  return t("perYear")
                                } catch {
                                  return "year"
                                }
                              })()
                            : (() => {
                                try {
                                  return t("perMonth")
                                } catch {
                                  return "month"
                                }
                              })()}
                        </span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-emerald-600 mt-1">
                          {(() => {
                            try {
                              const savingsText = t("savings")
                              if (savingsText.includes("{percent}")) {
                                return savingsText.replace("{percent}", calculateSavings(plan).toString())
                              }
                              return `Save ${calculateSavings(plan)}% with annual billing`
                            } catch {
                              return `Save ${calculateSavings(plan)}% with annual billing`
                            }
                          })()}
                        </p>
                      )}
                    </div>

                    <Button
                      className={`w-full mb-8 ${
                        isPopular
                          ? "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600"
                          : ""
                      }`}
                      variant={isPopular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="space-y-4">
                      <p className="text-sm font-medium text-gray-900">{t("includesLabel")}</p>
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
                        className="space-y-3"
                      >
                        {plan.features.map((feature, index) => (
                          <motion.li key={index} variants={featureVariants} className="flex items-start">
                            <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 text-sm">
              {t("customPlanText")}{" "}
              <a href="#" className="text-violet-600 font-medium hover:underline">
                {t("contactLink")}
              </a>{" "}
              {t("customQuote")}
            </p>
          </motion.div>
        </div>
      </DotBackground>
    </section>
  )
}
