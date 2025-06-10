"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Brain, ClipboardCheck } from "lucide-react";
import { items } from "@/data/aboutPage";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { UniversitySlider } from "@/components/ui/university-slider";
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo";
import { DotBackground } from "@/components/ui/dot-background";
// import TeamSection from "@/components/OurTeam";
import type React from "react";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ProfileCard from "@/components/ui/ProfileCard";

// Consolidated animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  },

  containerFast: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  section: {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  item: {
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
  },

  button: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  },

  card: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
  },
};

// Reusable background decorative component
const BackgroundDecorative = ({ count = 6, baseSize = 32, className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full bg-gradient-to-r from-purple-100/20 to-blue-100/20 blur-3xl`}
        style={{
          width: `${baseSize + i * (baseSize / 4)}px`,
          height: `${baseSize + i * (baseSize / 4)}px`,
          left: `${10 + i * 15}%`,
          top: `${20 + i * 10}%`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15 + i * 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    ))}
  </div>
);

// Reusable floating particles component
const FloatingParticles = ({ count = 8, className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-20 bg-gradient-to-r from-purple-400 to-blue-400"
        style={{
          width: `${8 + i * 2}px`,
          height: `${8 + i * 2}px`,
          left: `${10 + i * 12}%`,
          top: `${20 + i * 8}%`,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    ))}
  </div>
);

// Reusable decorative dots component
const DecorativeDots = ({ count = 3, className = "" }) => (
  <motion.div
    className={`flex space-x-2 ${className}`}
    variants={animations.item}
  >
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    ))}
  </motion.div>
);

const Page = () => {
  const imageRef = useRef<HTMLDivElement>(null);
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
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <DotBackground
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      dotColor="#d4d4d4"
      dotColorDark="#374151"
      dotSize="24px"
      maskIntensity="15%"
    >
      <motion.div
        className="w-full relative"
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={animations.section}>
          <div className="min-h-screen">
            <section className="relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />
              <FloatingParticles />

              <motion.div
                className="relative z-10 flex h-auto max-w-7xl mx-auto flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center"
                style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}
                variants={animations.container}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={animations.item} className="w-full mt-20">
                  <AnimatedGradientText
                    text="A passionate team devoted to unlocking every learner's potential with intelligent, AI-driven assessment solutions."
                    flipWords={{
                      targetWord: "intelligent",
                      alternatives: [
                        "smart",
                        "advanced",
                        "innovative",
                        "adaptive",
                        "clever",
                        "sophisticated",
                      ],
                      duration: 2500,
                    }}
                    icons={[
                      {
                        icon: Users,
                        index: 17,
                        gradientFrom: "from-purple-500",
                        gradientTo: "to-blue-500",
                      },
                      {
                        icon: GraduationCap,
                        index: 54,
                        gradientFrom: "from-yellow-400",
                        gradientTo: "to-orange-500",
                      },
                      {
                        icon: Brain,
                        index: 81,
                        gradientFrom: "from-cyan-400",
                        gradientTo: "to-blue-600",
                      },
                      {
                        icon: ClipboardCheck,
                        index: 113,
                        gradientFrom: "from-red-400",
                        gradientTo: "to-pink-600",
                      },
                    ]}
                    className="leading-tight"
                  />
                </motion.div>

                <motion.p
                  className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  variants={animations.item}
                >
                  We&apos;re building the all-in-one adaptive learning and
                  evaluation platform for modern education.
                </motion.p>

                <motion.div variants={animations.button}>
                  <Button
                    className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-base font-medium rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href="#">View careers</Link>
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-16 sm:w-20 md:w-24"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </section>

            {/* University Slider Section */}
            <motion.section
              className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50/50"
              variants={animations.section}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] leading-relaxed bg-clip-text text-transparent text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                variants={animations.item}
              >
                Trusted by leading universities
              </motion.h2>

              <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full"
                variants={animations.item}
              >
                <UniversitySlider />
              </motion.div>

              <DecorativeDots className="mt-8 sm:mt-10 md:mt-12" />
            </motion.section>
          </div>
        </motion.section>

        {/* About Company Section */}
        <motion.section
          variants={animations.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
            {/* Background stays behind */}
            <BackgroundDecorative className="absolute inset-0 z-0" />

            {/* Content wrapper */}
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <ScrollFloat
                  scrollStart={0.2}
                  scrollEnd={0.5}
                  stagger={0.03}
                  ease="backInOut"
                 textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Meet Our Team
                </ScrollFloat>
              </motion.div>

              {/* Main Grid */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                {/* Left Side Text & Stats */}
                <motion.div
                  className="lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScrollReveal>
                    <div className="space-y-4">
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                        We are a diverse group of educators, engineers, and
                        innovators united by a common goal: to transform
                        learning through cutting-edge technology.
                      </p>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Our team combines decades of experience in education,
                        artificial intelligence, and software development to
                        create solutions that truly make a difference in how
                        people learn and grow.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Stats */}
                  <motion.div
                    className="grid grid-cols-3 gap-6 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
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
                        <div className="text-sm text-gray-600 mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Side Image */}
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
                    style={{ perspective: "1000px" }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div
                      className="relative rounded-[40px] overflow-hidden p-6 cursor-pointer"
                      style={{
                        background:
                          "radial-gradient(circle at center, transparent 60%, #A3BFE1 100%)",
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                      }}
                      animate={{ scale: isHovered ? 1.02 : 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Background blur */}
                      <motion.div
                        className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 blur-xl"
                        animate={{
                          opacity: isHovered ? 0.6 : 0.2,
                          scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Foreground image */}
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

                        {/* Top gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Optional floating particles */}
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
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                scale: 0,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                y: [
                                  `${Math.random() * 100}%`,
                                  `${Math.random() * 100}%`,
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
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
        </motion.section>

        {/* Team Section */}
        {/* <motion.section
          variants={animations.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex justify-evenly items-center flex-wrap gap-15 lg:gap-0 md:gap-0  w-full">
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              grainUrl="data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E"
              behindGradient="radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.08) 50%, rgba(29, 78, 216, 0.05) 100%)"
              innerGradient="linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.7) 50%, rgba(191, 219, 254, 0.5) 100%)"
              className="grainy-blue-card"
              showBehindGradient={true}
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/testImg.png"
              iconUrl="https://campus-ready.com/_next/image?url=%2Flogin%2Flogo-black.png&w=128&q=75"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/testImg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/testImg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
          <div className="flex justify-center gap-15 items-center flex-wrap  w-full">
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/testImg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/testImg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </motion.section> */}

        {/* Company Values Section */}
        <motion.section
          variants={animations.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BentoGrid className="mx-auto max-w-7xl">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                textColor={item.textColor}
                className={cn(
                  "md:col-span-1",
                  i === 0 && "md:col-span-2",
                  i === 5 && "md:col-span-3 md:auto-rows-auto h-60"
                )}
              />
            ))}
          </BentoGrid>
        </motion.section>

        {/* Cards Section */}
        <motion.section
          className="py-16 md:py-24 lg:py-32 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BackgroundDecorative
            count={4}
            baseSize={32}
            className="from-purple-200/20 to-blue-200/20"
          />

          <motion.div
            className="max-w-7xl mx-auto px-4 md:px-6 relative z-10"
            variants={animations.containerFast}
          >
            <motion.div
              className="text-center mb-12"
              variants={animations.section}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Explore More
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0 }}
              >
                Discover our latest insights and join our growing team
              </motion.p>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-col lg:flex-row justify-center items-stretch gap-8"
              variants={animations.containerFast}
            >
              <motion.div
                variants={animations.card}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-1"
              >
                <BackgroundBoxesDemo
                  heading="Blogs"
                  paragraph="Discover insights, trends, and innovations in educational technology through our expert perspectives"
                  buttonText="Read Our Blog >"
                  buttonHref="/blog"
                />
              </motion.div>

              <motion.div
                variants={animations.card}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-1"
              >
                <BackgroundBoxesDemo
                  heading="Careers"
                  paragraph="Join our mission to revolutionize education. We're hiring passionate individuals who want to shape the future"
                  buttonText="View Opportunities >"
                  buttonHref="/careers"
                />
              </motion.div>
            </motion.div>

            <DecorativeDots count={5} className="justify-center mt-12" />
          </motion.div>
        </motion.section>

        {/* Ending Hero Section */}
        <motion.section
          variants={animations.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center p-4 min-h-[400px]">
            <motion.div
              className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-xl relative"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 30%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                      "radial-gradient(circle at 80% 70%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                      "radial-gradient(circle at 40% 80%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                      "radial-gradient(circle at 60% 20%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                      "radial-gradient(circle at 20% 30%, rgba(78, 84, 200, 0.8) 0%, rgba(78, 84, 200, 0) 70%)",
                    ],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "radial-gradient(circle at 70% 80%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                      "radial-gradient(circle at 10% 40%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                      "radial-gradient(circle at 50% 10%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                      "radial-gradient(circle at 30% 60%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                      "radial-gradient(circle at 70% 80%, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)",
                    ],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>

              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
                variants={animations.container}
                initial="hidden"
                animate="visible"
              >
                <div className="md:w-1/2 space-y-4">
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    variants={animations.item}
                  >
                    Turn your customer support into your{" "}
                    <motion.span
                      className="text-white/90 relative inline-block px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/20 rounded-lg"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ originX: 0 }}
                      />
                      <span className="relative">growth engine.</span>
                    </motion.span>
                  </motion.h1>
                </div>

                <div className="md:w-1/2 space-y-6">
                  <motion.p
                    className="text-base md:text-lg text-white/80 leading-relaxed"
                    variants={animations.item}
                  >
                    Optimize your support team&apos;s performance with Intryc to
                    fuel business growth and stay ahead in the market
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    variants={animations.container}
                  >
                    <motion.div variants={animations.button}>
                      <Button
                        className="bg-white hover:bg-white/90 text-gray-900 font-medium px-6 py-2 rounded-lg shadow-lg"
                        asChild
                      >
                        <motion.a
                          href="#"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book a demo
                        </motion.a>
                      </Button>
                    </motion.div>

                    <motion.div variants={animations.button}>
                      <Button
                        variant="outline"
                        className="border-2 border-white/30 bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 font-medium px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-300"
                        asChild
                      >
                        <motion.a
                          href="#"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255,255,255,0.15)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn more
                        </motion.a>
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="w-16 h-1 bg-white/40 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </DotBackground>
  );
};

export default Page;
