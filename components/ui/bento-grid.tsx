"use client";
import { cn } from "@/lib/utils";
import type React from "react";

export const BentoGrid = ({
  className,
  children,
}: //   title = "Our Values",
{
  className?: string;
  children?: React.ReactNode;
  title?: string;
}) => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  header,
  textColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
       {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
        {icon}
        <div
          className={`text-lg sm:text-xl md:text-2xl lg:text-2xl mt-2 mb-2 font-sans font-bold ${
            textColor || "text-neutral-600"
          } dark:text-neutral-200`}
        >
          {title}
        </div>
        <div className="font-sans text-sm sm:text-base md:text-md lg:text-md font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
