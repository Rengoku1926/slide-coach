"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { DotBackground } from "@/components/ui/dot-background"
import {
  Trophy,
  Award,
  Star,
  Users,
  Shield,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"

const achievements = [
  {
    title: "Best EdTech Innovation 2024",
    organization: "German Education Technology Awards",
    location: "Berlin, Germany",
    year: "2024",
    month: "November",
    description:
      "Recognized for revolutionary AI-driven assessment solutions that have transformed learning experiences for over 50,000 students across Europe.",
    icon: Trophy,
    category: "Innovation",
    impact: "50K+ Students Impacted",
    featured: true,
    rank: "01",
  },
  {
    title: "Excellence in AI Education",
    organization: "European AI Summit",
    location: "Amsterdam, Netherlands",
    year: "2024",
    month: "September",
    description:
      "Outstanding contribution to AI-powered personalized learning platforms with industry-leading 95% accuracy in adaptive assessments.",
    icon: Lightbulb,
    category: "Technology",
    impact: "95% Accuracy Rate",
    featured: true,
    rank: "02",
  },
  {
    title: "Student Success Impact Award",
    organization: "International Learning Association",
    location: "London, UK",
    year: "2023",
    month: "December",
    description:
      "Measurable 40% improvement in student critical thinking and problem-solving capabilities through our adaptive learning methodology.",
    icon: TrendingUp,
    category: "Impact",
    impact: "40% Performance Boost",
    featured: false,
    rank: "03",
  },
  {
    title: "Startup of the Year",
    organization: "Berlin Tech Awards",
    location: "Berlin, Germany",
    year: "2023",
    month: "October",
    description:
      "Most promising startup in education technology sector with 300% year-over-year growth and fastest market penetration.",
    icon: Star,
    category: "Recognition",
    impact: "300% YoY Growth",
    featured: false,
    rank: "04",
  },
  {
    title: "Security Excellence Certificate",
    organization: "Cyber Security Institute",
    location: "Munich, Germany",
    year: "2024",
    month: "March",
    description:
      "Achieved ISO 27001 certification for maintaining the highest standards in assessment security and data protection compliance.",
    icon: Shield,
    category: "Security",
    impact: "ISO 27001 Certified",
    featured: false,
    rank: "05",
  },
  {
    title: "Learning Innovation Prize",
    organization: "Future Education Forum",
    location: "Vienna, Austria",
    year: "2023",
    month: "June",
    description:
      "Creating adaptive learning environments that prepare students for future challenges, now implemented in 200+ institutions.",
    icon: Users,
    category: "Education",
    impact: "200+ Institutions",
    featured: false,
    rank: "06",
  },
]

const stats = [
  { label: "Awards Won", value: "6+", icon: Trophy },
  { label: "Students Served", value: "50K+", icon: Users },
  { label: "Success Rate", value: "95%", icon: CheckCircle },
  { label: "Growth Rate", value: "300%", icon: TrendingUp },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function AccoladesPage() {
  return (
    <DotBackground
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      dotColor="#d4d4d4"
      dotColorDark="#374151"
      dotSize="24px"
      maskIntensity="15%"
    >
      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 sm:mb-8 border border-gray-200 shadow-sm"
              >
                <Award className="w-4 h-4 text-[#9081DC]" />
                <span className="text-gray-700 text-sm font-medium">Award-Winning EdTech Platform</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
                <span className="text-gray-900">Recognition &</span>{" "}
                <span className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                  Achievements
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
                Celebrating our commitment to transforming education through{" "}
                <span className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent font-semibold">
                  AI-driven innovation
                </span>{" "}
                and student success.
              </p>

              {/* Stats Grid */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-[#9081DC] to-[#628AC8] mb-3 sm:mb-4">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        

        {/* Awards Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative">
          {/* Achievement Counter */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white/90 rounded-full p-3 sm:p-4 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                6
              </div>
              <div className="text-xs text-gray-500 font-medium">AWARDS</div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9081DC]/20 text-[#9081DC] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Hall of Fame
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-4">
                Our Achievements
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Industry recognition that validates our mission to revolutionize education technology.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="max-w-6xl mx-auto space-y-4 sm:space-y-6"
            >
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: isEven ? 2 : -2, y: -1 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Mobile: Ranking Badge Above Card */}
                    <div className="flex items-center justify-center mb-4 sm:hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        {achievement.rank}
                      </div>
                    </div>

                    {/* Desktop: Ranking Badge on Left */}
                    <div className="hidden sm:block absolute -left-4 top-8 z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] flex items-center justify-center text-white font-bold text-sm shadow-sm border-2 border-white">
                        {achievement.rank}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#9081DC]/30 hover:shadow-lg transition-all duration-300 sm:ml-6 relative overflow-hidden">
                      {/* Featured Tag with Gradient */}
                      {achievement.featured && (
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#9081DC] to-[#628AC8] text-white px-3 sm:px-4 py-1 rounded-bl-2xl text-xs sm:text-sm font-medium flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Featured
                        </div>
                      )}

                      {/* Gradient Left Border */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9081DC] to-[#628AC8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon with Gradient Background */}
                      <div className="flex-shrink-0 order-1 sm:order-none mx-auto sm:mx-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="p-3 sm:p-4 rounded-xl bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#9081DC] group-hover:to-[#628AC8] transition-all duration-300"
                        >
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow order-2 sm:order-none text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2 sm:gap-4">
                          <div className="flex-grow">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#9081DC] group-hover:to-[#628AC8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-2 leading-tight">
                              {achievement.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-600 font-medium mb-2 text-sm sm:text-base">
                              <span className="group-hover:text-[#9081DC] transition-colors duration-300">
                                {achievement.organization}
                              </span>
                              <div className="flex items-center gap-1 justify-center sm:justify-start text-xs sm:text-sm">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                {achievement.location}
                              </div>
                            </div>
                          </div>
                          <div className="text-center sm:text-right flex-shrink-0 mx-auto sm:mx-0">
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 mb-2 w-fit mx-auto sm:mx-0">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {achievement.month} {achievement.year}
                            </div>
                            <Badge
                              variant="outline"
                              className="border-[#9081DC]/30 text-[#9081DC] bg-[#9081DC]/5 text-xs sm:text-sm"
                            >
                              {achievement.category}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 text-center sm:text-left">
                          {achievement.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 items-center sm:items-start">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9081DC] to-[#628AC8] text-white px-3 sm:px-4 py-2 rounded-full font-medium text-xs sm:text-sm">
                            <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                            {achievement.impact}
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer group-hover:text-[#9081DC] transition-colors text-sm sm:text-base"
                          >
                            View Details <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Achievement Timeline */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                Achievement Timeline
              </h3>
              <div className="flex justify-between items-center relative overflow-x-auto">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#9081DC] to-[#628AC8] hidden sm:block" />
                <div className="flex justify-between w-full min-w-max sm:min-w-0 gap-4 sm:gap-0">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="relative z-10 bg-white rounded-full p-2 sm:p-3 border-2 border-[#9081DC]/30 shadow-sm cursor-pointer hover:border-[#9081DC] transition-colors flex-shrink-0"
                    >
                      <achievement.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#9081DC]" />
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
                        {achievement.year}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9081DC]/20 text-[#9081DC] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Our Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-6">
                Built on Excellence
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Our achievements reflect our commitment to the core values that drive everything we do.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  title: "Student-Centric",
                  desc: "Every solution designed with student success in mind",
                  icon: Users,
                },
                {
                  title: "Quality First",
                  desc: "Premium products that deliver exceptional value",
                  icon: Award,
                },
                {
                  title: "Ownership",
                  desc: "Accountable for our commitments and results",
                  icon: CheckCircle,
                },
                {
                  title: "Reliability",
                  desc: "Dependable service and timely delivery",
                  icon: Shield,
                },
                {
                  title: "Integrity",
                  desc: "Highest ethical standards in every action",
                  icon: Star,
                },
                {
                  title: "Innovation",
                  desc: "Embracing technology for smarter learning",
                  icon: Lightbulb,
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 border border-gray-200 hover:border-[#9081DC]/30 hover:shadow-lg">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-[#9081DC] to-[#628AC8] mb-4 sm:mb-6 group-hover:shadow-lg transition-shadow">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#9081DC] group-hover:to-[#628AC8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <div className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] rounded-3xl mx-4 sm:mx-6 lg:mx-8">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Experience Award-Winning Education Technology?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed px-4">
                  Join thousands of students and educators who trust Campus Ready for their learning journey.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#9081DC] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </DotBackground>
  )
}
