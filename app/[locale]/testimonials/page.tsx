"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Star, Quote, User, Heart, Award, TrendingUp } from "lucide-react";
import { testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: number;
  name?: string;
  role?: string;
  position?: string;
  content?: string;
  text?: string;
  avatar?: string;
  image?: string;
  rating?: number; // Optional rating field
}

// Custom Testimonial Card Component
function CustomTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100  hover:-translate-y-1">
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6">
        <div className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent rounded-full p-2 shadow-lg">
          <Quote className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Stars Rating */}
      <div className="flex items-center gap-1 mb-4 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < (testimonial.rating || 5)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
        &quot;
        {testimonial.content ||
          testimonial.text ||
          "This product has completely transformed the way I work. Highly recommended!"}
        &quot;
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          {testimonial.avatar || testimonial.image ? (
            <Image
              src={
                testimonial.avatar || testimonial.image || "/placeholder.svg"
              }
              alt={testimonial.name ?? "User avatar"}
              width={40}
              height={40}
              className=" rounded-full object-cover ring-2 ring-purple-100"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name || "Anonymous User"}
          </h4>
          <p className="text-gray-500 text-xs">
            {testimonial.role || testimonial.position || "Verified Customer"}
          </p>
        </div>
      </div>
    </div>
  );
}

type StatsCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  number: string;
  label: string;
};

function StatsCard({ icon: Icon, number, label }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-purple-100 rounded-full p-3">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

const stats = [
  { icon: Heart, number: "50K+", label: "Happy Customers" },
  { icon: Star, number: "4.9/5", label: "Average Rating" },
  { icon: Award, number: "99.9%", label: "Uptime" },
  { icon: TrendingUp, number: "300%", label: "Growth Rate" },
];

export default function ThreeDMarqueeDemoSecond() {
  const images = [
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
    "https://img.freepik.com/free-vector/monocolor-simple-interior-design-customer-review-linkedin-post_742173-10187.jpg?semt=ais_hybrid&w=740",
    "https://marketplace.canva.com/EAEXo-4KzfA/2/0/1600w/canva-grey-minimal-customer-review-quote-instagram-post-6VqeL8N52dE.jpg",
    "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerreviewofacompanysonlinecustomerservice.png",
  ];
  const t = useTranslations("testimonialPage");

  return (
    <div className="relative w-full">
      {/* Hero Section - Full Screen */}
      <div className="relative flex min-h-screen w-full flex-col items-center text-center justify-center overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <h2 className="relative z-20 mx-4 max-w-4xl text-center text-2xl font-bold text-gray-900 md:text-4xl lg:text-6xl">
            {t("hero.heading")}{" "}
            <span className="relative z-20 inline-block rounded-xl bg-purple-500 px-4 py-1 text-white underline decoration-purple-500 decoration-[3px] underline-offset-[16px] backdrop-blur-sm">
              {t("hero.highlightedText")}
            </span>{" "}
            {t("hero.headingContinuation")}
          </h2>
          
          <p className="relative z-20 mx-4 max-w-2xl py-8 text-center text-md text-gray-900 md:text-lg">
            {t("hero.subtext")}
          </p>

          <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="rounded-md bg-gradient-to-r from-[#9081DC] to-[#628AC8] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:from-[#7d6bc7] hover:to-[#5577b3] focus:ring-2 focus:ring-[#9081DC] focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
              {t("hero.primaryButton")}
            </button>
            <button className="rounded-md border border-gray-900/20 px-6 py-2.5 text-sm font-medium text-gray-900 backdrop-blur-sm transition-colors hover:bg-gray-900/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
              {t("hero.secondaryButton")}
            </button>
          </div>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-screen w-full bg-black/20 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <CustomTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center p-4 min-h-[400px]">
          <div className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-400/20 to-orange-400/20" />
            </div>

            <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="md:w-1/2 space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {t("callToAction.heading")}{" "}
                  <span className="text-white/90 relative inline-block px-4">
                    <span className="absolute inset-0 bg-white/20 rounded-lg" />
                    <span className="relative">{t("callToAction.highlightedText")}</span>
                  </span>
                </h1>
              </div>

              <div className="md:w-1/2 space-y-6">
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {t("callToAction.subheading")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-white hover:bg-white/90 text-gray-900 font-medium px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
                    asChild
                  >
                    <Link
                      href="#"
                      aria-label={t("callToAction.primaryButtonAriaLabel")}
                    >{t("callToAction.primaryButton")}
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-white/30 bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 font-medium px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
                    asChild
                  >
                    <Link href="#" aria-label={t("callToAction.secondaryButtonAriaLabel")}>
                      {t("callToAction.secondaryButton")}
                    </Link>
                  </Button>
                </div>

                <div className="w-16 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
