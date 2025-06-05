import { DotBackground } from "./ui/dot-background"
import { InfiniteScrollRow } from "./ui/infinite-scroll-row"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "This product has completely transformed how we handle our daily operations. The efficiency gains are remarkable.",
    avatar: "/testImg.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Designer, Creative Co",
    content: "The user experience is phenomenal. Our team productivity has increased by 300% since implementation.",
    avatar: "/testImg.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Outstanding support and incredible results. This is exactly what our business needed to scale effectively.",
    avatar: "/testImg.png",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, InnovateLab",
    content: "The technical implementation was seamless. Best investment we've made for our development workflow.",
    avatar: "/testImg.png",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Product Manager",
    content: "Game-changing solution that delivered results from day one. Highly recommend to any growing business.",
    avatar: "/testImg.png",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder, StartupXYZ",
    content: "Incredible value and exceptional quality. This platform has exceeded all our expectations completely.",
    avatar: "/testImg.png",
  },
]

export default function TestimonialsSection() {
  return (
    <div className="my-20 bg-gray-50 overflow-hidden">
      <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
  Testimonials
</h2>

        </div>

        <div className="space-y-16">
          {/* First Row - Left to Right */}
          <InfiniteScrollRow testimonials={testimonials} direction="left" speed={60} />

          {/* Second Row - Right to Left */}
          <InfiniteScrollRow testimonials={testimonials} direction="right" speed={70} />
        </div>
      </DotBackground>
    </div>
  )
}
