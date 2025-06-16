import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

const MouseScrollDown = () => {
  const t = useTranslations()
  return (
    <div className='mt-35'>
       <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-gray-500 text-sm mb-4 font-medium">
              {t("mouseScrollDown")}
            </p>
            
            {/* Animated Mouse Icon */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Mouse body */}
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full relative bg-white/50 backdrop-blur-sm">
                {/* Mouse wheel */}
                <motion.div
                  animate={{ y: [2, 6, 2] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-2 bg-gradient-to-b from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-2"
                ></motion.div>
              </div>
            </motion.div>

            {/* Alternative with ChevronDown */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="mt-2"
            >
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </motion.div>
          </motion.div>
    </div>
  )
}

export default MouseScrollDown
