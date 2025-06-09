"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AnimatedGradientCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        
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

  return (
    <div className="flex items-center justify-center p-4 min-h-[400px]">
      <motion.div
        className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-xl relative"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                "radial-gradient(circle at 80% 70%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                "radial-gradient(circle at 40% 80%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                "radial-gradient(circle at 60% 20%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                "radial-gradient(circle at 20% 30%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 70% 80%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                "radial-gradient(circle at 10% 40%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                "radial-gradient(circle at 50% 10%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                "radial-gradient(circle at 30% 60%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                "radial-gradient(circle at 70% 80%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              
            }}
          />
        </div>

        {/* Floating particles effect - adjusted for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 space-y-4">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Turn your customer support into your{" "}
              <motion.span
                className="text-white/90 relative inline-block px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{  duration: 0.8 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{  duration: 0.6 }}
                  style={{ originX: 0 }}
                />
                <span className="relative">growth engine.</span>
              </motion.span>
            </motion.h1>
          </div>

          <div className="md:w-1/2 space-y-6">
            <motion.p className="text-base md:text-lg text-white/80 leading-relaxed" variants={itemVariants}>
              Optimize your support team&apos;s performance with Intryc to fuel business growth and stay ahead in the
              market
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={containerVariants}>
              <motion.div variants={buttonVariants}>
                <Button
                  className="bg-white hover:bg-white/90 text-gray-900 font-medium px-6 py-2 rounded-lg shadow-lg"
                  asChild
                >
                  <motion.a
                    href="#"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a demo
                  </motion.a>
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 font-medium px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <motion.a
                    href="#"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional reveal animation for a subtle accent - centered on mobile */}
            <motion.div
              className="w-16 h-1 bg-white/40 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{  duration: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}