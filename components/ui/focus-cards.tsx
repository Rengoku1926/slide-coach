"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { cn } from "@/lib/utils"

const FocusContext = createContext<{
  isHovered: boolean
}>({
  isHovered: false,
})

export const FocusCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <FocusContext.Provider value={{ isHovered }}>
      <div
        className={cn("relative overflow-hidden rounded-lg", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </FocusContext.Provider>
  )
}

const FocusImage = ({ children }: { children: React.ReactNode }) => {
  const { isHovered } = useContext(FocusContext)
  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out h-full",
        isHovered ? "scale-105 blur-sm brightness-75" : "scale-100",
      )}
    >
      {children}
    </div>
  )
}

const FocusContent = ({ children }: { children: React.ReactNode }) => {
  const { isHovered } = useContext(FocusContext)
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  )
}

FocusCard.Image = FocusImage
FocusCard.Content = FocusContent
