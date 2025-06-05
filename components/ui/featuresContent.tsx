"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Upload,
  Video,
  MessageCircle,
  CheckCircle2,
  Clock,
  User,
} from "lucide-react";
import { DotBackground } from "./dot-background";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: Feature[] = [
  {
    icon: Upload,
    title: "Slide Upload & Setup",
    description:
      "Easily upload your PPT or PDF and set your speaking duration so Slide-Coach knows how to simulate your real presentation.",
  },
  {
    icon: Video,
    title: "AI-Powered Mock Session",
    description:
      "Practice your presentation slide-by-slide. The AI times you, guides you, and creates a real-world mock environment.",
  },
  {
    icon: MessageCircle,
    title: "Interactive AI Q&A",
    description:
      "After presenting, engage in an AI-led Q&A based on your slides—get asked context-aware questions just like a live audience.",
  },
  {
    icon: Clock,
    title: "Real-Time Timing Feedback",
    description:
      "Receive live pacing data during practice. Know if you’re ahead, behind, or right on track to finish on time.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive AI Feedback",
    description:
      "Get detailed insights on pronunciation, filler words, clarity, and slide engagement so you know exactly where to improve.",
  },
  {
    icon: User,
    title: "Ideal for Any Presenter",
    description:
      "Whether you’re a student defending a thesis, a job candidate in an interview, or a professional pitching a client, Slide-Coach has you covered.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Card className="h-full bg-white border border-gray-200 shadow-sm hover:border-transparent hover:shadow-lg transition-all duration-200 rounded-lg overflow-hidden">
        <CardContent className="p-6">
          {/* Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-md bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] group-hover:from-[#628AC8] group-hover:via-[#9081DC] transition-colors duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50/30 via-white to-gray-50/50 py-20 px-6 lg:px-16">
      <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why We{" "}
              <span className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                Shine?
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Slide-Coach empowers you with AI-driven practice, Q&A, and feedback—so every presentation is your best one yet.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </DotBackground>
    </section>
  );
};

export default FeaturesSection;
