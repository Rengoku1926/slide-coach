"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FocusCard } from "@/components/ui/focus-cards";
import { blogData } from "@/data/blogPage";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { DotBackground } from "@/components/ui/dot-background";

export default function BlogSection() {
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const featuredBlogs = blogData.slice(0, 3);
  const regularBlogs = blogData.slice(3, visibleBlogs);

  const loadMore = () => {
    setVisibleBlogs((prev) => Math.min(prev + 6, blogData.length));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto py-8 md:py-12 px-4 md:px-6 flex justify-center flex-col items-center">
      <DotBackground
        className="h-auto bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row mt-30 justify-between items-start lg:items-center mb-8 md:mb-12 gap-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
              Latest stories :
            </h1>
            <div className="w-full sm:w-auto">
              <Input
                className="w-full sm:w-[280px] md:w-[320px] border-[#9081DC]/30 focus:border-[#628AC8] transition-colors"
                placeholder="What are you looking for?"
              />
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {/* Main Featured Blog */}
            <div className="flex-1 lg:flex-[2]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-xl border border-[#9081DC]/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[400px] md:min-h-[600px]"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[480px]">
                  <FocusCard className="w-full h-full">
                    <FocusCard.Image>
                      <Image
                        src={featuredBlogs[0]?.imageUrl || "/placeholder.svg"}
                        alt={featuredBlogs[0]?.title || ""}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </FocusCard.Image>
                    <FocusCard.Content>
                      <p className="text-sm md:text-base text-white font-medium line-clamp-2 px-2">
                        {featuredBlogs[0]?.excerpt}
                      </p>
                    </FocusCard.Content>
                  </FocusCard>
                </div>
                <div className="p-4 md:p-6 flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 line-clamp-2">
                    {featuredBlogs[0]?.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 md:h-7 md:w-7">
                      <AvatarImage
                        src={
                          featuredBlogs[0]?.author.avatarUrl ||
                          "/placeholder.svg"
                        }
                        alt={featuredBlogs[0]?.author.name}
                      />
                      <AvatarFallback className="text-xs">
                        {featuredBlogs[0]?.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {featuredBlogs[0]?.author.name} •{" "}
                      {formatDate(featuredBlogs[0]?.publishedAt || "")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Side Featured Blogs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6 lg:flex-1">
              {featuredBlogs.slice(1, 3).map((blog) => (
                <motion.div
                  key={blog.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-[#9081DC]/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-h-[280px] md:min-h-[285px]"
                >
                  <div className="relative h-[180px] sm:h-[160px] md:h-[220px]">
                    <FocusCard className="w-full h-full">
                      <FocusCard.Image>
                        <Image
                          src={blog.imageUrl || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </FocusCard.Image>
                      <FocusCard.Content>
                        <p className="text-xs md:text-sm text-white font-medium line-clamp-2 px-2">
                          {blog.excerpt}
                        </p>
                      </FocusCard.Content>
                    </FocusCard>
                  </div>
                  <div className="p-3 md:p-4 flex-1">
                    <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-4 w-4 md:h-5 md:w-5">
                        <AvatarImage
                          src={blog.author.avatarUrl || "/placeholder.svg"}
                          alt={blog.author.name}
                        />
                        <AvatarFallback className="text-xs">
                          {blog.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {blog.author.name} • {formatDate(blog.publishedAt)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* More Blogs Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent text-center lg:text-left">
              More Stories
            </h2>
            <div className="w-40 md:w-75 h-1 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] mx-auto lg:mx-0 mt-2 rounded-full"></div>
          </motion.div>

          {/* Regular Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {regularBlogs.map((blog) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <Card className="overflow-hidden border-[#9081DC]/20 hover:shadow-lg transition-all duration-300 h-full group">
                  <CardHeader className="p-0">
                    <FocusCard className="w-full h-[200px] sm:h-[220px] md:h-[240px]">
                      <FocusCard.Image>
                        <div className="relative w-full h-full">
                          <Image
                            src={blog.imageUrl || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>
                      </FocusCard.Image>
                      <FocusCard.Content>
                        <p className="text-sm text-white font-medium line-clamp-2 px-2">
                          {blog.excerpt}
                        </p>
                      </FocusCard.Content>
                    </FocusCard>
                  </CardHeader>
                  <CardContent className="pt-3 md:pt-4 px-3 md:px-4 flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-[#628AC8] transition-colors">
                      {blog.title}
                    </h3>
                  </CardContent>
                  <CardFooter className="flex items-center gap-2 pt-0 px-3 md:px-4 pb-3 md:pb-4">
                    <Avatar className="h-5 w-5 md:h-6 md:w-6">
                      <AvatarImage
                        src={blog.author.avatarUrl || "/placeholder.svg"}
                        alt={blog.author.name}
                      />
                      <AvatarFallback className="text-xs">
                        {blog.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {blog.author.name} • {formatDate(blog.publishedAt)}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleBlogs < blogData.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center"
            >
              <Button
                onClick={loadMore}
                className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
              >
                Load More Stories
              </Button>
            </motion.div>
          )}
        </div>
      </DotBackground>
    </section>
  );
}
