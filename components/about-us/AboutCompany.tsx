"use client"
import type React from "react"
import { useRef, useState } from "react"
import ScrollReveal from "./ui/scroll-reveal"
import Image from "next/image"
import ScrollFloat from "../ui/ScrollFloat"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function AboutCompany() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-100/20 to-blue-100/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <ScrollFloat
            scrollStart={0.2}
            scrollEnd={0.5}
            stagger={0.03}
            ease="backInOut"
            textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent"
          >
            Meet Our Team
          </ScrollFloat>
        </motion.div>

        {/* Content container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Description text */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3}}
          >
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  We are a diverse group of educators, engineers, and innovators united by a common goal: to transform
                  learning through cutting-edge technology.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our team combines decades of experience in education, artificial intelligence, and software
                  development to create solutions that truly make a difference in how people learn and grow.
                </p>
              </div>
            </ScrollReveal>

            {/* Team stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4    }}
            >
              {[
                { number: "50+", label: "Team Members" },
                { number: "15+", label: "Countries" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={imageRef}
              className="relative w-full max-w-2xl mx-auto"
              style={{
                perspective: "1000px",
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Gradient background container */}
              <motion.div
                className="relative rounded-[40px] overflow-hidden p-6 cursor-pointer"
                style={{
                  background: "radial-gradient(circle at center, transparent 60%, #A3BFE1 100%)",
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 blur-xl"
                  animate={{
                    opacity: isHovered ? 0.6 : 0.2,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image container */}
                <motion.div
                  className="relative z-10 rounded-[30px] overflow-hidden shadow-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(50px)",
                  }}
                >
                  <Image
                    src="/about-us/aboutUsImg.png"
                    alt="Our Team"
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    animate={{
                      opacity: isHovered ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Floating elements */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                          scale: 0,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
