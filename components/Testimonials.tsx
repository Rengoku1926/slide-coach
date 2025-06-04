"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { DotBackground } from "./ui/dot-background";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "This product has completely transformed how we handle our daily operations. The efficiency gains are remarkable.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Designer, Creative Co",
    content:
      "The user experience is phenomenal. Our team productivity has increased by 300% since implementation.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Outstanding support and incredible results. This is exactly what our business needed to scale effectively.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, InnovateLab",
    content:
      "The technical implementation was seamless. Best investment we've made for our development workflow.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Product Manager",
    content:
      "Game-changing solution that delivered results from day one. Highly recommend to any growing business.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder, StartupXYZ",
    content:
      "Incredible value and exceptional quality. This platform has exceeded all our expectations completely.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  
];

const TestimonialCard = ({
  testimonial,
  className = "",
}: {
  testimonial: (typeof testimonials)[0];
  className?: string;
}) => (
  <Card
    className={`flex-shrink-0 bg-white border lg:w-98 lg:h-50 border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
  >
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <Image
          src="/testImg.png"
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            &quot;{testimonial.content}&quot;
          </p>
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              {testimonial.name}
            </p>
            <p className="text-gray-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to horizontal movement
  // First row: moves left to right (negative to positive)
  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  // Second row: moves right to left (positive to negative)
  const x2 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  // Create duplicated arrays for infinite effect
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div ref={containerRef} className="my-20 bg-gray-50 overflow-hidden">
      <DotBackground
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight">
            Testimonials
          </h2>
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative">
            <motion.div
              style={{ x: x1 }}
              className="flex space-x-6 will-change-transform"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  className="w-80"
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <motion.div
              style={{ x: x2 }}
              className="flex space-x-6 will-change-transform"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  className="w-72"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </DotBackground>
    </div>
  );
}
