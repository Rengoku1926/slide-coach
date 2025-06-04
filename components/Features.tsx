import React from "react";
import ScrollFloat from "./ui/ScrollFloat";
import ScrollTextAnimation from "./ui/scroll-text-animation";

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <ScrollFloat
        scrollStart={0.2} // Now uses 0-1 range instead of GSAP strings
        scrollEnd={0.8}
        stagger={0.03}
        ease="backInOut"
        textClassName="text-7xl md:text-8xl lg:text-9xl font-bold text-center "
      >
        Features
      </ScrollFloat>
      <div>
        <div><ScrollTextAnimation/></div>
        <div></div>

      </div>
    </div>
  );
};

export default Features;
