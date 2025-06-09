"use client"
import { Boxes } from "./background-boxes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface BackgroundBoxesDemoProps {
  heading: string
  paragraph: string
  buttonText: string
  buttonHref: string
}

export default function BackgroundBoxesDemo({ heading, paragraph, buttonText, buttonHref }: BackgroundBoxesDemoProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center rounded-xl p-8 shadow-lg">
      {/* Animated Boxes in the background */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Boxes />
      </motion.div>

      {/* Gradient mask with softer effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 z-10 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />

      {/* Content wrapper with animations */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center space-y-6 px-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        {/* Animated heading with gradient */}
        <motion.h1
          className={cn(
            "md:text-5xl text-2xl font-bold text-center bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
            "tracking-tight leading-tight",
          )}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          {heading}
        </motion.h1>

        {/* Paragraph with staggered character animation */}
        <motion.p
          className="text-center text-neutral-700 max-w-md md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {paragraph}
        </motion.p>

        {/* Animated button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={buttonHref} passHref>
            <Button className="mt-6 px-8 py-6 text-base font-medium rounded-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] text-white hover:from-[#628AC8] hover:to-[#9081DC] transition-all duration-300 shadow-md hover:shadow-xl">
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
