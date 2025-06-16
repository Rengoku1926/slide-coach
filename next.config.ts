// next.config.js
import { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "user-images.githubusercontent.com",
    ],
  },
  
  transpilePackages: ["framer-motion"],
};
 
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
