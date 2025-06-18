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
  
  Target,
} from "lucide-react"
import { useTranslations } from "next-intl"

const achievementsConfig = [
  {key: '01', icon: Trophy},
  {key: '02', icon: Award},
  {key: '03', icon: Star},
  {key: '04', icon: Users},
  {key: '05', icon: Shield},
  {key: '06', icon: Lightbulb},
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

const valuesConfig = [
  {key: 'studentCentric', icon: Users},
  {key: 'qualityFirst', icon: Award},
  {key: 'ownership', icon: CheckCircle},
  {key: 'reliability', icon: Shield},
  {key: 'integrity', icon: Star},
  {key: 'innovation', icon: Lightbulb},
]

export default function AccoladesPage() {
  const t = useTranslations("accoladesPage")
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
        <section className="relative min-h-screen flex items-center justify-center px-4  sm:px-6 lg:px-8 ">
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
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 sm:mb-8 border border-gray-200 shadow-sm sm:mt-12"
              >
                <Award className="w-4 h-4 text-[#9081DC]" />
                <span className="text-gray-700 text-sm font-medium">{t("hero.badge")}</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
                <span className="text-gray-900">{t("hero.heading")}</span>{" "}
                <span className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                  {t("hero.highlightedText")}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
                {t("hero.subtext")}{" "}
                <span className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent font-semibold">
                  {t("hero.subtextHighlight")}
                </span>{" "}
                {t("hero.subtextContinuation")}
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
                {t("achievementsSection.badge")}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-4">
                {t("achievementsSection.heading")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {t("achievementsSection.subtext")}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="max-w-6xl mx-auto space-y-4 sm:space-y-6"
            >
              {achievementsConfig.map((achievement, index) => {
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
                        {t(`achievements.${achievement.key}.rank`)}
                      </div>
                    </div>

                    {/* Desktop: Ranking Badge on Left */}
                    <div className="hidden sm:block absolute -left-4 top-8 z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] flex items-center justify-center text-white font-bold text-sm shadow-sm border-2 border-white">
                        {t(`achievements.${achievement.key}.rank`)}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#9081DC]/30 hover:shadow-lg transition-all duration-300 sm:ml-6 relative overflow-hidden">


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
                              {t(`achievements.${achievement.key}.title`)}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-600 font-medium mb-2 text-sm sm:text-base">
                              <span className="group-hover:text-[#9081DC] transition-colors duration-300">
                                {t(`achievements.${achievement.key}.organization`)}
                              </span>
                              <div className="flex items-center gap-1 justify-center sm:justify-start text-xs sm:text-sm">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                {t(`achievements.${achievement.key}.location`)}
                              </div>
                            </div>
                          </div>
                          <div className="text-center sm:text-right flex-shrink-0 mx-auto sm:mx-0">
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 mb-2 w-fit mx-auto sm:mx-0">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {t(`achievements.${achievement.key}.month`)} {t(`achievements.${achievement.key}.year`)}
                            </div>
                            <Badge
                              variant="outline"
                              className="border-[#9081DC]/30 text-[#9081DC] bg-[#9081DC]/5 text-xs sm:text-sm"
                            >
                              {t(`achievements.${achievement.key}.category`)}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 text-center sm:text-left">
                          {t(`achievements.${achievement.key}.description`)}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 items-center ">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9081DC] to-[#628AC8] text-white px-3 sm:px-4 py-2 rounded-full font-medium text-xs sm:text-sm">
                            <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                            {t(`achievements.${achievement.key}.impact`)}
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer group-hover:text-[#9081DC] transition-colors text-sm sm:text-base"
                          >
                            {t("achievementsSection.viewDetails")} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
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
                {t("valuesSection.badge")}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-6">
                {t("valuesSection.heading")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                {t("valuesSection.subtext")}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
            >
              {valuesConfig.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 border border-gray-200 hover:border-[#9081DC]/30 hover:shadow-lg">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-[#9081DC] to-[#628AC8] mb-4 sm:mb-6 group-hover:shadow-lg transition-shadow">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#9081DC] group-hover:to-[#628AC8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t(`values.${value.key}.description`)}</p>
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
                  {t("callToAction.heading")}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed px-4">
                  {t("callToAction.subtext")}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#9081DC] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("callToAction.buttonText")}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </DotBackground>
  )
}
