"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { DotBackground } from "./ui/dot-background"

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  popular: boolean;
}

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: ["Up to 5 projects", "1GB storage", "Basic analytics", "24/7 email support", "1 team member"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      "Unlimited projects",
      "10GB storage",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom integrations",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Unlimited everything",
      "100GB storage",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited team members",
      "Custom development",
      "SLA guarantees",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

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

  const calculatePrice = (plan: PricingPlan) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice
  }

  const calculateSavings = (plan: PricingPlan) => {
    return Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100)
  }

  return (
    <section className="my-24 bg-gradient-to-b from-white to-gray-50">
        <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs. Always know what you'll pay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center justify-center mt-10 mb-8 space-x-3"
          >
            <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r from-violet-500 to-indigo-500"
            />
            <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Yearly{" "}
              <span className="inline-block ml-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Save 20%
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
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`relative rounded-2xl overflow-hidden bg-white border ${
                plan.popular
                  ? "border-violet-200 shadow-lg shadow-violet-100"
                  : "border-gray-200 shadow-md shadow-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
                  <div className="flex justify-center -mt-px">
                    <Badge
                      className="rounded-b-md rounded-t-none px-3 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 border-0 text-white font-medium"
                      variant="outline"
                    >
                      Most Popular
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
                    <span className="text-gray-500 ml-2">/{isYearly ? "year" : "month"}</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-emerald-600 mt-1">Save {calculateSavings(plan)}% with annual billing</p>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-900">Includes:</p>
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
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Need a custom plan?{" "}
            <a href="#" className="text-violet-600 font-medium hover:underline">
              Contact us
            </a>{" "}
            for a custom quote.
          </p>
        </motion.div>
      </div>
      </DotBackground>
    </section>
  )
}
