"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Brain, ClipboardCheck } from "lucide-react"
import { items } from "@/data/aboutPage"
import { DotBackground } from "@/components/ui/dot-background"
import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import { UniversitySlider } from "@/components/ui/university-slider"
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo"
import ScrollFloat from "@/components/ui/ScrollFloat"

const Page = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <DotBackground
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      dotColor="#d4d4d4"
      dotColorDark="#374151"
      dotSize="24px"
      maskIntensity="15%"
    >
      <div className="w-full relative">
        {/* Hero Section */}
        <section>
          <div className="min-h-screen">
            <section className="relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />

              <div
                className="relative z-10 flex h-auto max-w-7xl mx-auto flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center"
                style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                <div className="w-full mt-20">
                  <AnimatedGradientText
                    text="A passionate team devoted to unlocking every learner's potential with intelligent, AI-driven assessment solutions."
                    flipWords={{
                      targetWord: "intelligent",
                      alternatives: [
                        "smart",
                        "advanced",
                        "innovative",
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
                </div>

                <p className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  We&apos;re building the all-in-one adaptive learning and evaluation platform for modern education.
                </p>

                <div>
                  <Button
                    className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-base font-medium rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    asChild
                  >
                    <Link href="#">View careers</Link>
                  </Button>
                </div>

                <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-16 sm:w-20 md:w-24" />
              </div>
            </section>

            {/* University Slider Section */}
            <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50/50">
              <h2 className="font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] leading-relaxed bg-clip-text text-transparent text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Trusted by leading universities
              </h2>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
                <UniversitySlider />
              </div>
            </section>
          </div>
        </section>

        {/* About Company Section */}
        <section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
            {/* Content wrapper */}
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              {/* Heading */}
              <div className="mb-16">
                <ScrollFloat
                  scrollStart={0.2}
                  scrollEnd={0.5}
                  stagger={0.03}
                  ease="backInOut"
                  textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Meet Our Team
                </ScrollFloat>
              </div>

              {/* Main Grid */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                {/* Left Side Text & Stats */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                      We are a diverse group of educators, engineers, and innovators united by a common goal: to
                      transform learning through cutting-edge technology.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Our team combines decades of experience in education, artificial intelligence, and software
                      development to create solutions that truly make a difference in how people learn and grow.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8">
                    {[
                      { number: "50+", label: "Team Members" },
                      { number: "15+", label: "Countries" },
                      { number: "5+", label: "Years Experience" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side Image */}
                <div className="lg:w-1/2">
                  <div
                    ref={imageRef}
                    className="relative w-full max-w-2xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`relative rounded-[40px] overflow-hidden p-6 cursor-pointer transition-transform duration-300 ${
                        isHovered ? "scale-102" : "scale-100"
                      }`}
                      style={{
                        background: "radial-gradient(circle at center, transparent 60%, #A3BFE1 100%)",
                      }}
                    >
                      {/* Background blur */}
                      <div
                        className={`absolute inset-0 rounded-[40px] bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 blur-xl transition-opacity duration-300 ${
                          isHovered ? "opacity-60 scale-110" : "opacity-20"
                        }`}
                      />

                      {/* Foreground image */}
                      <div className="relative z-10 rounded-[30px] overflow-hidden shadow-2xl">
                        <Image
                          src="/about-us/aboutUsImg.png"
                          alt="Our Team"
                          width={1000}
                          height={600}
                          className={`w-full h-full object-cover transition-transform duration-300 ${
                            isHovered ? "scale-105" : "scale-100"
                          }`}
                          loading="lazy"
                        />

                        {/* Top gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${
                            isHovered ? "opacity-30" : "opacity-10"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Company Values Section */}
        <section>
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
                  i === 5 && "md:col-span-3 md:auto-rows-auto h-60",
                )}
              />
            ))}
          </BentoGrid>
        </section>

        {/* Cards Section */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                Explore More
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our latest insights and join our growing team
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full mx-auto mt-6" />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
              <div className="flex-1 hover:scale-102 hover:-translate-y-1 transition-transform duration-300">
                <BackgroundBoxesDemo
                  heading="Blogs"
                  paragraph="Discover insights, trends, and innovations in educational technology through our expert perspectives"
                  buttonText="Read Our Blog >"
                  buttonHref="/blog"
                />
              </div>

              <div className="flex-1 hover:scale-102 hover:-translate-y-1 transition-transform duration-300">
                <BackgroundBoxesDemo
                  heading="Careers"
                  paragraph="Join our mission to revolutionize education. We're hiring passionate individuals who want to shape the future"
                  buttonText="View Opportunities >"
                  buttonHref="/careers"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ending Hero Section */}
        <section>
          <div className="flex items-center justify-center p-4 min-h-[400px]">
            <div className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl">
                <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-400/20 to-orange-400/20" />
              </div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="md:w-1/2 space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Turn your customer support into your{" "}
                    <span className="text-white/90 relative inline-block px-4">
                      <span className="absolute inset-0 bg-white/20 rounded-lg" />
                      <span className="relative">growth engine.</span>
                    </span>
                  </h1>
                </div>

                <div className="md:w-1/2 space-y-6">
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    Optimize your support team&apos;s performance with Intryc to fuel business growth and stay ahead in
                    the market
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="bg-white hover:bg-white/90 text-gray-900 font-medium px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
                      asChild
                    >
                      <Link href="#">Book a demo</Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-2 border-white/30 bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 font-medium px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link href="#">Learn more</Link>
                    </Button>
                  </div>

                  <div className="w-16 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DotBackground>
  )
}

export default Page
