"use client"
import { motion } from "framer-motion"
import AboutUsHero from "@/components/about-us/Hero"
import AboutCompany from "@/components/about-us/AboutCompany"
import CompanyValuesSection from "@/components/about-us/company-values"
import BackgroundBoxesDemo from "@/components/about-us/Boxes"
import EndingHeroAboutUs from "@/components/about-us/EndingHero"
import { DotBackground } from "@/components/ui/dot-background"
import OurTeam from "@/components/about-us/OurTeam"
const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
       
      },
    },
  }

  const sectionVariants = {
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
  }

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
       
      },
    },
  }

  const cardVariants = {
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
  }

  return (
    <DotBackground
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      dotColor="#d4d4d4"
      dotColorDark="#374151"
      dotSize="24px"
      maskIntensity="15%"
    >
      <motion.div className="w-full relative" variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero Section */}
        <motion.section variants={sectionVariants}>
          <AboutUsHero />
        </motion.section>

        {/* About Company Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutCompany />
        </motion.section>

         <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurTeam/>
        </motion.section>

        {/* Company Values Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CompanyValuesSection />
        </motion.section>

        {/* Cards Section */}
        <motion.section
          className="py-16 md:py-24 lg:py-32 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-200/20 to-blue-200/20 blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 15}%`,
                }}
              />
            ))}
          </div>

          <motion.div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10" variants={cardContainerVariants}>
            {/* Section heading */}
            <motion.div className="text-center mb-12" variants={sectionVariants}>
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
                transition={{ duration: 0. }}
              >
                Discover our latest insights and join our growing team
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              className="flex flex-col lg:flex-row justify-center items-stretch gap-8"
              variants={cardContainerVariants}
            >
              <motion.div
                variants={cardVariants}
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
                variants={cardVariants}
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

            {/* Additional decorative elements */}
            <motion.div
              className="flex justify-center mt-12 space-x-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Ending Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <EndingHeroAboutUs />
        </motion.section>

        {/* Floating action elements */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="w-12 h-12 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full shadow-lg flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </DotBackground>
  )
}

export default page
