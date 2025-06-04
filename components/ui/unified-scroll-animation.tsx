import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const IMG_URL =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function UnifiedScrollAnimation() {
  return (
    <div className="bg-white">
      <MacbookToParallaxScroll
        imgUrl={IMG_URL}
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </MacbookToParallaxScroll>
    </div>
  );
}

const MacbookToParallaxScroll = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative">
      {/* MacBook Section */}
      <MacbookSection imgUrl={imgUrl} scrollYProgress={scrollYProgress} />

      {/* Transition Section */}
      <TransitionSection
        imgUrl={imgUrl}
        scrollYProgress={scrollYProgress}
        subheading={subheading}
        heading={heading}
      />

      {/* Content Section */}
      <div className="relative z-10 bg-white">{children}</div>
    </div>
  );
};

const MacbookSection = ({
  imgUrl,
  scrollYProgress,
}: {
  imgUrl: string;
  scrollYProgress: MotionValue<number>;
}) => {
  // MacBook animations
  const macbookScale = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  const macbookOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const lidRotate = useTransform(scrollYProgress, [0, 0.1, 0.2], [-25, -25, 0]);

  return (
    <div className="h-[100vh] flex items-center justify-center sticky top-0 z-20">
      <motion.div
        style={{
          scale: macbookScale,
          opacity: macbookOpacity,
        }}
        className="relative [perspective:800px]"
      >
        {/* MacBook Base */}
        <div className="relative h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200">
          <div className="relative h-10 w-full">
            <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
          </div>
          <div className="relative flex">
            <div className="mx-auto h-full w-[10%] overflow-hidden">
              <SpeakerGrid />
            </div>
            <div className="mx-auto h-full w-[80%]">
              <Keypad />
            </div>
            <div className="mx-auto h-full w-[10%] overflow-hidden">
              <SpeakerGrid />
            </div>
          </div>
          <Trackpad />
          <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        </div>

        {/* MacBook Lid */}
        <motion.div
          style={{
            rotateX: lidRotate,
            transformStyle: "preserve-3d",
            transformOrigin: "bottom",
          }}
          className="absolute bottom-[22rem] left-0 h-[20rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
        >
          <div className="absolute inset-0 rounded-lg bg-[#272729]" />
          <Image
            src={imgUrl}
            alt="MacBook screen"
            fill
            className="absolute inset-2 rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const TransitionSection = ({
  imgUrl,
  scrollYProgress,
  subheading,
  heading,
}: {
  imgUrl: string;
  scrollYProgress: MotionValue<number>;
  subheading: string;
  heading: string;
}) => {
  // Image expansion animations
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1.2]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const imageY = useTransform(scrollYProgress, [0.2, 0.5], [0, -100]);

  // Text animations
  const textY = useTransform(scrollYProgress, [0.4, 0.6], [200, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  // Overlay animations
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 0.7, 0.7, 0]
  );

  return (
    <div className="h-[300vh] relative">
      {/* Expanding Background Image */}
      <motion.div
        style={{
          scale: imageScale,
          opacity: imageOpacity,
          y: imageY,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />

        {/* Dark Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/70"
        />

        {/* Text Overlay */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
        >
          <motion.p className="text-xl md:text-3xl mb-4 font-light">
            {subheading}
          </motion.p>
          <motion.h1 className="text-4xl md:text-7xl font-bold">
            {heading}
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

// MacBook Components
const SpeakerGrid = () => (
  <div className="mx-auto h-full w-full">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex w-full justify-between">
        {Array.from({ length: 7 }).map((_, j) => (
          <div key={j} className="h-1 w-1 rounded-full bg-[#050505] my-0.5" />
        ))}
      </div>
    ))}
  </div>
);

const Keypad = () => (
  <div className="mx-auto h-full w-full p-1">
    {/* Function keys row */}
    <div className="flex w-full gap-1 mb-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="h-4 flex-1 rounded bg-[#0d0d0d] border border-[#050505]"
        />
      ))}
    </div>

    {/* Main keyboard rows */}
    {Array.from({ length: 4 }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex w-full gap-1 mb-1">
        {Array.from({ length: rowIndex === 3 ? 8 : 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 ${
              rowIndex === 3 && i === 3 ? "flex-[2]" : "flex-1"
            } rounded bg-[#0d0d0d] border border-[#050505]`}
          />
        ))}
      </div>
    ))}
  </div>
);

const Trackpad = () => (
  <div className="mx-auto mt-4 h-12 w-32 rounded-lg bg-[#0d0d0d] border border-[#050505]" />
);

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above experience
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        This seamless scroll animation creates a beautiful transition from the
        MacBook presentation to the full-screen parallax experience, giving
        users an immersive journey through your content.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        The animation smoothly scales and transforms the MacBook screen into a
        full viewport experience with elegant text overlays.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline ml-2" />
      </button>
    </div>
  </div>
);
