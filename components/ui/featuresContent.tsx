"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, ArrowLeftRight, BarChart3, Settings, Users, Sparkles } from "lucide-react"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features = [
  {
    icon: Search,
    title: "Prioritized Denial Identification",
    description:
      "See which claims need attention and why, with AI recommendations to prioritize high-value, winnable denials first.",
  },
  {
    icon: FileText,
    title: "Automated Appeal Generation",
    description:
      "Instantly create strong, payer-specific appeal letters using AI trained on policies, codes, and clinical documentation.",
  },
  {
    icon: ArrowLeftRight,
    title: "End-to-End Appeal Tracking",
    description: "Track every claim from denial to resolution. One platform, full visibility, zero guesswork.",
  },
  {
    icon: BarChart3,
    title: "Actionable Revenue Analytics",
    description:
      "Analyze revenue by provider, department, payer, or appeal type to spot patterns, cut denials, and optimize performance.",
  },
  {
    icon: Settings,
    title: "Seamless EHR + Payer Integration",
    description:
      "Connects with all major EHRs and insurance systems to auto-pull data, so you never have to enter it twice.",
  },
  {
    icon: Users,
    title: "Multi-Team Collaboration",
    description: "Assign tasks, tag teammates, manage workflows, and ensure no appeal slips through the cracks.",
  },
]

const FeatureCard: React.FC<FeatureCardProps> = ({ feature })  => {
  const Icon = feature.icon

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          {/* Icon and Sparkle */}
          <div className="flex items-start justify-between mb-6">
            <div className="p-2">
              <Icon className="w-6 h-6 text-gray-700" />
            </div>
            <Sparkles className="w-4 h-4 text-gray-300" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const FeaturesSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50/30 via-white to-gray-50/50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-medium">
              FEATURES
            </Badge>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Why We Shine ?</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Fast, automated appeals that recover the revenue you&apos;ve already earned.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
