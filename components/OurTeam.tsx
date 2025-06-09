"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type React from "react";

import { useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  tags: string[];
  tagColor: string;
  bgGradient: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mohammad Anees Raza",
    role: "Business Lead",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Strategy", "Leadership", "Growth"],
    tagColor: "bg-blue-100 text-blue-700 border-blue-200",
    bgGradient: "from-blue-400/20 via-indigo-400/20 to-purple-400/20",
  },
  {
    name: "Süleyman Emre Özdemir",
    role: "Creative Design Lead",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Design", "UI/UX", "Creative"],
    tagColor: "bg-purple-100 text-purple-700 border-purple-200",
    bgGradient: "from-purple-400/20 via-pink-400/20 to-rose-400/20",
  },
  {
    name: "Jannes-Oke Voss",
    role: "Marketing Lead",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Marketing", "Brand", "Growth"],
    tagColor: "bg-green-100 text-green-700 border-green-200",
    bgGradient: "from-green-400/20 via-emerald-400/20 to-teal-400/20",
  },
  {
    name: "Karan Kartikeya",
    role: "Product Lead",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Product", "Strategy", "Innovation"],
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    bgGradient: "from-orange-400/20 via-amber-400/20 to-yellow-400/20",
  },
  {
    name: "Abhishek Arun Savakar",
    role: "Technical Lead",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Tech", "Engineering", "AI"],
    tagColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
    bgGradient: "from-cyan-400/20 via-blue-400/20 to-indigo-400/20",
  },
];

function TeamCard({ member }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Create a more organic floating effect
  const floatingAnimation = {
    y: [0, -10, 0, -5, 0],
    x: [0, 5, 0, -5, 0],
    rotate: [0, 1, 0, -1, 0],
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer w-full"
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      // New floating animation
      animate={floatingAnimation}
    >
      <motion.div
        className="relative w-full h-[420px] sm:h-[450px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl bg-white"
        style={{
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
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.bgGradient} blur-xl`}
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <div className="relative z-10 h-full bg-white rounded-2xl overflow-hidden border border-gray-100">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          {/* Image section - increased size */}
          <div className="relative h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden">
            {/* Gradient background behind image */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient}`}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>

            {/* Profile image - larger size */}
            <div className="relative z-10 flex items-center justify-center h-full p-8">
              <motion.div
                className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 176px, 192px"
                />
              </motion.div>
            </div>

            {/* Floating particles */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
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
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="p-6 space-y-4">
            <div className="text-center space-y-2">
              <motion.h3
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-gray-600 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
              >
                {member.role}
              </motion.p>
            </div>

            {/* Tags - added more space below */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {member.tags.map((tag) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    className={`${member.tagColor} text-xs font-medium px-3 py-1`}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom accent */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${member.bgGradient.replace(
              /\/20/g,
              ""
            )}`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        
      },
    },
  };

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
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-100/30 to-blue-100/30 blur-3xl"
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            The brilliant minds behind our mission to transform education
            through innovative technology
          </motion.p>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-6 sm:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Team grid - modified layout for 3-2 arrangement */}
        <div className="flex justify-center gap-10 items-center flex-col w-full">
          {/* First row - 3 cards */}
          <div className="flex justify-evenly items-center flex-wrap gap-15 lg:gap-0 md:gap-0  w-full">
            <div className="">
              <TeamCard member={teamMembers[0]} index={0} />
            </div>
            <div className="">
              <TeamCard member={teamMembers[1]} index={1} />
            </div>
            <div className="">
              <TeamCard member={teamMembers[2]} index={2} />
            </div>
          </div>

          {/* Second row - 2 cards, centered */}
          <div className="flex justify-center gap-15 items-center flex-wrap  w-full">
            <div className="">
              <TeamCard member={teamMembers[3]} index={3} />
            </div>
            <div className="">
              <TeamCard member={teamMembers[4]} index={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
