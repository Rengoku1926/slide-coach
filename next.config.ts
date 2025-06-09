// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "user-images.githubusercontent.com",
    ],
  },
  
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
