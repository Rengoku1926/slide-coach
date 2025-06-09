"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { FlipWords } from "./flip-words"
import { motion } from "framer-motion"

interface AnimatedGradientTextProps {
  text: string
  flipWords?: {
    targetWord: string
    alternatives: string[]
    duration?: number
  }
  icons: {
    icon: React.ElementType
    index: number
    gradientFrom: string
    gradientTo: string
  }[]
  className?: string
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ text, flipWords, icons, className }) => {
  const parts = []
  let lastIndex = 0

  // Sort icons by index to ensure correct insertion order
  const sortedIcons = [...icons].sort((a, b) => a.index - b.index)

  // If flipWords is provided, find and replace the target word
  let processedText = text
  let flipWordsComponent = null
  let flipWordIndex = -1

  if (flipWords) {
    const targetWordIndex = text.toLowerCase().indexOf(flipWords.targetWord.toLowerCase())
    if (targetWordIndex !== -1) {
      flipWordIndex = targetWordIndex
      const beforeFlipWord = text.substring(0, targetWordIndex)
      const afterFlipWord = text.substring(targetWordIndex + flipWords.targetWord.length)

      // Create the flip words component
      flipWordsComponent = (
        <FlipWords
          words={[flipWords.targetWord, ...flipWords.alternatives]}
          duration={flipWords.duration || 3000}
          className="inline-block"
        />
      )

      // Update processedText to exclude the flip word for now
      processedText = beforeFlipWord + "FLIP_WORD_PLACEHOLDER" + afterFlipWord
    }
  }

  // Adjust icon indices if they come after the flip word
  const adjustedIcons = sortedIcons.map((iconConfig) => {
    if (flipWordIndex !== -1 && iconConfig.index > flipWordIndex) {
      return {
        ...iconConfig,
        index: iconConfig.index + ("FLIP_WORD_PLACEHOLDER".length - (flipWords?.targetWord.length || 0)),
      }
    }
    return iconConfig
  })

  adjustedIcons.forEach((iconConfig, iconIndex) => {
    const { icon: Icon, index, gradientFrom, gradientTo } = iconConfig
    if (index > lastIndex) {
      const textSegment = processedText.substring(lastIndex, index)
      if (textSegment.includes("FLIP_WORD_PLACEHOLDER")) {
        const beforePlaceholder = textSegment.substring(0, textSegment.indexOf("FLIP_WORD_PLACEHOLDER"))
        const afterPlaceholder = textSegment.substring(
          textSegment.indexOf("FLIP_WORD_PLACEHOLDER") + "FLIP_WORD_PLACEHOLDER".length,
        )

        if (beforePlaceholder) parts.push(beforePlaceholder)
        if (flipWordsComponent) parts.push(flipWordsComponent)
        if (afterPlaceholder) parts.push(afterPlaceholder)
      } else {
        parts.push(textSegment)
      }
    }
    parts.push(
      <motion.span
        key={`icon-${index}`}
        className={cn(
          // Responsive icon sizing
          "inline-flex items-center justify-center rounded-full shadow-lg mx-1 sm:mx-2",
          // Mobile: smaller icons
          "h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14",
          `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
        )}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.5 + iconIndex * 0.2,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-white" />
      </motion.span>,
    )
    lastIndex = index
  })

  if (lastIndex < processedText.length) {
    const remainingText = processedText.substring(lastIndex)
    if (remainingText.includes("FLIP_WORD_PLACEHOLDER")) {
      const beforePlaceholder = remainingText.substring(0, remainingText.indexOf("FLIP_WORD_PLACEHOLDER"))
      const afterPlaceholder = remainingText.substring(
        remainingText.indexOf("FLIP_WORD_PLACEHOLDER") + "FLIP_WORD_PLACEHOLDER".length,
      )

      if (beforePlaceholder) parts.push(beforePlaceholder)
      if (flipWordsComponent) parts.push(flipWordsComponent)
      if (afterPlaceholder) parts.push(afterPlaceholder)
    } else {
      parts.push(remainingText)
    }
  }

  return (
    <motion.h1
      className={cn(
        // Responsive text sizing with proper line height
        "text-center tracking-tight leading-tight",
        // Mobile first approach
        "text-2xl leading-8 sm:text-3xl sm:leading-10 md:text-4xl md:leading-12 lg:text-5xl lg:leading-14 xl:text-6xl xl:leading-16",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </motion.h1>
  )
}

export default AnimatedGradientText
