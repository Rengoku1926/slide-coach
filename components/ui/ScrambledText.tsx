import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface CharData {
  char: string;
  index: number;
  isScrambling: boolean;
  currentText: string;
  originalText: string;
  isSpace: boolean;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 50,
  duration = 0.8,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [chars, setChars] = useState<CharData[]>([]);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Initialize character data
  useEffect(() => {
    const text = typeof children === 'string' ? children : children?.toString() || '';
    const charArray: CharData[] = text.split('').map((char, index) => ({
      char,
      index,
      isScrambling: false,
      currentText: char,
      originalText: char,
      isSpace: char === ' ',
    }));
    setChars(charArray);
    charRefs.current = new Array(charArray.length).fill(null);
  }, [children]);

  const scrambleChar = useCallback((
    charData: CharData,
    progress: number,
    scrambleCharsStr: string
  ): string => {
    if (progress >= 1 || charData.isSpace) return charData.originalText;
    
    // Generate random scrambled character
    const randomChar = scrambleCharsStr[Math.floor(Math.random() * scrambleCharsStr.length)];
    return Math.random() < progress ? charData.originalText : randomChar;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!rootRef.current) return;

    charRefs.current.forEach((charRef, index) => {
      if (!charRef || chars[index]?.isSpace) return;

      const rect = charRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < radius) {
        const normalizedDistance = distance / radius;
        const animationDuration = duration * (1 - normalizedDistance);
        
        // Start scrambling animation
        setChars(prevChars => {
          const newChars = [...prevChars];
          if (newChars[index] && !newChars[index].isSpace) {
            newChars[index] = {
              ...newChars[index],
              isScrambling: true,
            };
          }
          return newChars;
        });

        // Animate scrambling effect
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
          if (startTime === null) startTime = timestamp;
          
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / (animationDuration * 1000), 1);
          
          setChars(prevChars => {
            const newChars = [...prevChars];
            if (newChars[index] && !newChars[index].isSpace) {
              const scrambledChar = scrambleChar(
                newChars[index],
                progress,
                scrambleChars
              );
              
              newChars[index] = {
                ...newChars[index],
                currentText: scrambledChar,
                isScrambling: progress < 1,
              };
            }
            return newChars;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    });
  }, [radius, duration, scrambleChar, scrambleChars, chars]);

  return (
    <div
      ref={rootRef}
      className={` text-center text-[clamp(14px,4vw,32px)] text-gray-900 ${className}`}
      style={style}
      onPointerMove={handlePointerMove}
    >
      <p className="whitespace-pre-wrap leading-relaxed" style={{ fontFamily: 'monospace' }}>
        {chars.map((charData, index) => (
          charData.isSpace ? (
            <span 
              key={`space-${index}`} 
              className="inline-block"
              style={{ width: '0.5em' }}
            >
              &nbsp;
            </span>
          ) : (
            <motion.span
              key={`char-${charData.index}-${charData.originalText}`}
              ref={(el) => {
                charRefs.current[index] = el;
              }}
              className="inline-block will-change-transform text-center"
              initial={false}
              animate={{
                scale: charData.isScrambling ? [1, 1.05, 1] : 1,
              }}
              transition={{
                duration: speed * 0.3,
                ease: "easeInOut",
              }}
              style={{
                width: '0.6em',
                textAlign: 'center',
                fontFamily: 'monospace',
              }}
            >
              {charData.currentText}
            </motion.span>
          )
        ))}
      </p>
    </div>
  );
};

export default ScrambledText;