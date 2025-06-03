"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnet from "./ui/magnet";
// import Orb from "./ui/orb";

export default function EndingHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,50 Q30,20 50,30 T80,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-cyan-400"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,70 Q40,20 70,40 Q90,60 70,80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teal-400"
          />
        </svg>
      </div>

      {/* <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      /> */}

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ready to Recover More,{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Faster?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start using Aegis today to streamline your appeals, reduce denials,
            and unlock revenue you've already earned.
          </p>
        </motion.div>

        {/* CTA Button with Magnet Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Magnet
            padding={80}
            magnetStrength={3}
            activeTransition="transform 0.2s ease-out"
            inactiveTransition="transform 0.4s ease-in-out"
          >
            <Button
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Magnet>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-sm text-gray-500"
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
