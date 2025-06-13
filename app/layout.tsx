"use client"

import { Poppins } from "next/font/google";
import "./globals.css";
import ResizableNavbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import {motion} from "framer-motion"
import { ReactNode, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

interface SmoothSectionProps {
  id?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}


const SmoothSection = ({
  id,
  children,
  delay = 0,
  className = "",
}: SmoothSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      id={id}
      ref={sectionRef}
      style={{ y, opacity }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        {/* Fixed Navbar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <ResizableNavbar />
        </motion.div>
        {children}
         {/* Footer Section */}
        <SmoothSection id="footer" delay={0.2} className="scroll-mt-16">
          <FooterSection />
        </SmoothSection>
        </body>
    </html>
  );
}
