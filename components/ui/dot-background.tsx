import { cn } from "@/lib/utils"
import type React from "react"

interface DotBackgroundProps {
  children: React.ReactNode
  className?: string
  dotColor?: string
  dotColorDark?: string
  dotSize?: string
  maskIntensity?: string
}

export function DotBackground({
  children,
  className,
  dotColor ,
  dotColorDark,
  dotSize ,
  maskIntensity ,
}: DotBackgroundProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${dotSize} ${dotSize}`,
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
        }}
      />

      {/* Dark mode dot pattern */}
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          backgroundSize: `${dotSize} ${dotSize}`,
          backgroundImage: `radial-gradient(${dotColorDark} 1px, transparent 1px)`,
        }}
      />

      {/* Radial gradient mask for faded effect */}
      <div
        className="pointer-events-none absolute inset-0 bg-white dark:bg-black"
        style={{
          maskImage: `radial-gradient(ellipse at center, transparent ${maskIntensity}, black)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${maskIntensity}, black)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
