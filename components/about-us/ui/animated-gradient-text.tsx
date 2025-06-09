import React from "react"
import { cn } from "@/lib/utils"
import { FlipWords } from "./flip-words"

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

  adjustedIcons.forEach((iconConfig) => {
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
      <span
        key={`icon-${index}`}
        className={cn(
          "inline-flex h-14 w-14 m-2 items-center justify-center rounded-full p-1 shadow-lg",
          `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
        )}
      >
        <Icon className="h-12 w-12 m-2 text-white" />
      </span>,
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
    <h1
      className={cn(
        "text-center text-2xl line-height:6 tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl",
        className,
      )}
    >
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </h1>
  )
}

export default AnimatedGradientText
