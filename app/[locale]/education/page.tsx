"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, CreditCard, Play, Check, Target, BarChart3, Presentation, BookOpen, MessageSquare, Clock, CheckCircle, Users } from "lucide-react";
import AICampusCard from "@/components/ui/3d-card";
import { UniversitySlider } from "@/components/ui/university-slider";
import FAQSection from "@/components/Faqs";
import { DotBackground } from "@/components/ui/dot-background";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { faq } from "@/data/studentPage";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const benefitsConfig = [
  {key:"tailored", icon:Target },
  {key:"analytics", icon:BarChart3},
  {key:"career", icon:Presentation}
]

const featuresConfig = [
  {key:"upload", icon:BookOpen},
  {key:"mockSessions", icon:MessageSquare},
  {key:"coaching", icon:Clock},
  {key:"analytics", icon:BarChart3},
  {key:"tracking", icon:CheckCircle},
  {key:"collaboration", icon:Users}
]

const howItWorksConfig = [
  {key:"1"},
  {key:"2"},
  {key:"3"}
]

export default function GitHubStudentLanding() {
  // Track screen size for responsive animations
  const [screenSize, setScreenSize] = useState("desktop");
  const t = useTranslations("githubStudentPage")

  // Set up responsive values based on screen size
  useEffect(() => {
    // Function to determine screen size
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create animation variants based on screen size and index
  const getDropInAnimation = (index: number): Variants => {
    // Different values for different screen sizes
    const config = {
      mobile: {
        distance: -200,
        stiffness: 70,
        damping: 10,
        delay: index * 0.1,
      },
      tablet: {
        distance: -300,
        stiffness: 80,
        damping: 12,
        delay: index * 0.15,
      },
      desktop: {
        distance: -400,
        stiffness: 90,
        damping: 13,
        delay: index * 0.2,
      },
    };

    // Get values based on current screen size
    const values = config[screenSize as keyof typeof config];

    return {
      initial: {
        opacity: 0,
        y: values.distance,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: values.stiffness,
          damping: values.damping,
          delay: values.delay,
          bounce: 0.4,
        },
      },
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <DotBackground
        className="min-h-screen bg-transparent"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        {/* Hero Section */}
        <section className="pt-16 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9081DC]/10 to-[#628AC8]/10 opacity-50" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-gradient-to-r bg-[#2A2F33] mt-14 text-white hover:opacity-90 mb-6 px-4 py-2 border-0">
                  <Github className="w-4 h-4 mr-2" />
                  {t("hero.badge")}
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
              >
                {t("hero.title.part1")}
                <br />
                <span className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                  {t("hero.title.highlight")}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r bg-[#2A2F33] hover:opacity-90 text-white text-lg px-8 py-6 border-0"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {t("hero.buttons.primary")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-[#9081DC] text-[#9081DC] hover:bg-gradient-to-r hover:from-[#9081DC] hover:to-[#628AC8] hover:text-white"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t("hero.buttons.secondary")}
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              >
                <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-[#9081DC]/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-2">
                    {t("hero.stats.credits.value")}
                  </div>
                  <div className="text-gray-600">{t("hero.stats.credits.label")}</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-[#9081DC]/20">
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent ml-2">
                      4.9
                    </span>
                  </div>
                  <div className="text-gray-600">{t("hero.stats.rating.label")}</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-[#9081DC]/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent mb-2">
                    10K+
                  </div>
                  <div className="text-gray-600">{t("hero.stats.students.label")}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-gray-200/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-gray-500 mb-8 font-medium">
                {t("socialProof")}
              </p>
              <UniversitySlider />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("benefitsSection.heading")}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t("benefitsSection.description")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {benefitsConfig.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={getDropInAnimation(index)}
                >
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9081DC]/20 to-[#628AC8]/20 rounded-lg flex items-center justify-center mb-6">
                        <benefit.icon className="w-6 h-6 text-[#9081DC]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t(`benefitsSection.items.${benefit.key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`benefitsSection.items.${benefit.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("features.heading")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("features.description")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-0">
              {featuresConfig.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={getDropInAnimation(index)}
                >
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-lg flex items-center justify-center mb-6">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t(`features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`features.items.${feature.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="container mx-auto px-4 w-full">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("howItWorks.heading")}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t("howItWorks.description")}
              </p>
            </motion.div>

            <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-28 max-w-6xl mx-auto">
              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {howItWorksConfig.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex flex-col md:flex-row items-start mb-16 last:mb-0 text-left"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-lg flex items-center justify-center text-white text-lg font-semibold mb-6 md:mb-0 md:mr-8">
                        {t(`howItWorks.steps.${step.key}.id`)}
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
                          {t(`howItWorks.steps.${step.key}.title`)}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-left">
                          {t(`howItWorks.steps.${step.key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <motion.div
                  className="flex justify-center items-center w-full max-w-sm md:max-w-md lg:max-w-none"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <AICampusCard />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Student Benefits */}
        <section
          id="verify"
          className="py-34 md:pt-34 lg:pt-44 md:max-h-screen lg:min-h-screen bg-gradient-to-r from-[#2A2F33] to-[#1a1f23] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <Github className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("githubExclusive.heading")}
                </h2>
                <p className="text-xl text-white/90 mb-12">
                  {t("githubExclusive.description")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-8 mb-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <CreditCard className="w-8 h-8 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-3">
                    {t("githubExclusive.benefits.credits.title")}
                  </h3>
                  <p className="text-white/90">
                   {t("githubExclusive.benefits.credits.description")}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <Check className="w-8 h-8 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-3">
                   {t("githubExclusive.benefits.premium.title")}
                  </h3>
                  <p className="text-white/90">
                    {t("githubExclusive.benefits.premium.description")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -3 }} // animation on hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-[#2A2F33] hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {t("githubExclusive.button")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <FAQSection data={faq} />
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {t("cta.heading")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-12"
              >
                {t("cta.description")}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r bg-[#2A2F33] hover:opacity-90 text-white text-lg px-8 py-6 border-0"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {t("cta.buttons.primary")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-[#9081DC] text-[#9081DC] hover:bg-gradient-to-r hover:from-[#9081DC] hover:to-[#628AC8] hover:text-white"
                >
                  {t("cta.buttons.secondary")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </DotBackground>
    </div>
  );
}
