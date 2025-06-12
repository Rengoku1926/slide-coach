"use client";
import { useEffect, useState, useRef } from "react";
import { blogData } from "@/data/blogPage";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  const params = useParams();
  const blogId = Number.parseInt(params.id as string, 10);
  const blog = blogData.find((b) => b.id === blogId);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({});
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!blog) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and has the largest intersection ratio
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (intersectingEntries.length > 0) {
          // Sort by intersection ratio and position to get the most visible section
          const mostVisible = intersectingEntries.reduce((prev, current) => {
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle portion of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      blog.content.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          sectionRefs.current[section.id] = element;
          observer.current?.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [blog]);

  // Add a scroll handler to set initial active section
  useEffect(() => {
    const handleScroll = () => {
      if (!blog) return;
      const container = document.querySelector(".overflow-y-auto");
      if (!container) return;

      const scrollPosition = container.scrollTop + container.clientHeight / 3;

      for (let i = blog.content.length - 1; i >= 0; i--) {
        const section = blog.content[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Set initial active section
    const container = document.querySelector(".overflow-y-auto");
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [blog]);

  // if not found, throw a 404
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="pt-34">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            {/* Date */}
            <p className="text-gray-600 text-sm mb-6">
              {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                <Image
                  src={
                    blog.author.avatarUrl || "/placeholder.svg?height=48&width=48"
                  }
                  alt={blog.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Article written by</p>
                <p className="font-medium text-gray-900">{blog.author.name}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={blog.imageUrl || "/placeholder.svg"}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-28 ">
        <div className="flex gap-8 ">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block w-80 sticky top-44 self-start">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {blog.content.map((section) => (
                  <button
                    key={section.id}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-[#9081DC] text-white font-medium"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    } ${section.level === 2 ? "ml-4 text-xs" : ""}`}
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <div className="bg-white rounded-xl shadow-sm border p-8 md:p-12">
              {blog.content.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-12 scroll-mt-24"
                >
                  {section.level === 1 ? (
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      {section.title}
                    </h2>
                  ) : (
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      {section.title}
                    </h3>
                  )}

                  <div className="prose prose-lg max-w-none">
                    <div
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: section.content
                          .replace(/\n\n/g, "</p><p>")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Right Sidebar - CTA Card */}
          <div className="hidden xl:block w-80 sticky top-44 self-start">
            <Card className="p-6 shadow-sm border bg-white">
              <h3 className="font-bold text-lg mb-3 text-gray-900">
                Want to see Slide-Coach in action?
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Schedule a 30-minute demo
              </p>
              <Button className="w-full bg-[#9081DC] hover:bg-[#628AC8] text-white font-medium py-3 rounded-lg transition-colors">
                Book a demo
              </Button>
            </Card>

            {/* Social sharing section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-3">
                Enjoying this article?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Share it with the world!
              </p>
              <div className="flex gap-3">
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-28">
        <div className="mt-16 mb-8">
          <Carousel className="w-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Similar articles
              </h2>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 border-gray-300" />
                <CarouselNext className="static translate-y-0 h-10 w-10 border-gray-300" />
              </div>
            </div>
            <CarouselContent className="-ml-4">
              {/* Blog Cards */}
              {blogData
                .filter((b) => b.id !== blog.id)
                .slice(0, 6)
                .map((relatedBlog, index) => (
                  <CarouselItem
                    key={relatedBlog.id}
                    className="pl-4 basis-1/3 lg:basis-1/4"
                  >
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      {/* Header with brand colors */}
                      <div
                        className={`h-20 relative flex items-center px-4 ${
                          index % 4 === 0
                            ? "bg-[#9081DC]"
                            : index % 4 === 1
                            ? "bg-gray-800"
                            : index % 4 === 2
                            ? "bg-[#628AC8]"
                            : "bg-teal-400"
                        }`}
                      >
                        <div className="flex items-center text-white">
                          <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                          <span className="font-semibold">Slide-Coach</span>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute right-4 top-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute right-8 bottom-2 w-4 h-4 bg-white/30 rounded-full"></div>
                      </div>

                      {/* Image */}
                      <div className="h-40 overflow-hidden">
                        <Image
                          src={
                            relatedBlog.imageUrl ||
                            "/placeholder.svg?height=160&width=300"
                          }
                          alt={relatedBlog.title}
                          width={300}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(relatedBlog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}

              {/* Read More Card */}
              <CarouselItem className="pl-4 basis-1/3 lg:basis-1/4">
                <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
                  {/* Header */}
                  <div className="h-20 bg-gradient-to-r from-[#9081DC] to-[#628AC8] relative flex items-center px-4">
                    <div className="flex items-center text-white">
                      <svg
                        className="w-6 h-6 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <span className="font-semibold">Slide-Coach</span>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute right-4 top-4 w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="absolute right-8 bottom-2 w-4 h-4 bg-white/30 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center items-center text-center h-48">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                      Read more blogs like this
                    </h3>
                    <Button className="bg-[#9081DC] hover:bg-[#628AC8] text-white px-6 py-2 rounded-lg">
                      Read blog
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
