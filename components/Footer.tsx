"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowUpRight,
  MapPin,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sponsorLogos = [
  {
    name: "Bundesministerium für Wirtschaft und Klimaschutz",
    logo: "/sponsors/spons1.png",
  },
  {
    name: "EXIST Existenzgründungen aus der Wissenschaft",
    logo: "/sponsors/spons2.png",
  },
  {
    name: "Founders Space",
    logo: "/sponsors/spons3.png",
  },
  {
    name: "HNU University of Applied Sciences",
    logo: "/sponsors/spons4.png",
  },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
];

const serviceLinks = [
  {
    name: "Preparation for Students",
    href: "/services/preparation-for-students",
  },
  { name: "AI-Powered Exam Builder", href: "/services/ai-exam-builder" },
];

const helpLinks = [{ name: "Customer Support", href: "/support" }];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/campusready",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/campusready",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

export default function FooterSection() {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sponsor Logos Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12"
          >
            {sponsorLogos.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={160}
                  height={60}
                  className="h-12 w-15 md:h-15 md:w-19 lg:h-18 lg:w-22  opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain bg-white p-2 rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Logo & Contact */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-4 space-y-6"
          >
            <div className="flex items-center justify-start ">
              <Link href="/" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center justify-center cursor-pointer h-24 w-24 relative"
                >
                  <Image
                    src="/slide-coach-logo.png"
                    alt="Slide Coach Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                Slide Coach
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@campus-ready.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>info@campus-ready.com</span>
                </a>
                <a
                  href="tel:+4915901366303"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>+49 15901366303</span>
                </a>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    HNU Founders Space,
                    <br />
                    John-F.-Kennedy-Straße 7,
                    <br />
                    89231 Neu-Ulm
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-1 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-1 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help & Social */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Help
            </h3>
            <ul className="space-y-3 mb-6 sm:mb-8">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <ul className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 flex items-center justify-center"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe to Newsletter */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on Slide-Coach features, AI tips, and
              more—straight to your inbox.
            </p>
            <form
              action="#"
              className="mt-2 flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-700 bg-gray-800 py-2 px-3 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] px-4 py-2 text-white font-medium hover:from-[#628AC8] hover:via-[#9081DC] transition-colors duration-300"
              >
                Subscribe
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400 text-sm"
        >
          © 2025 Campus Ready. All rights reserved.{" "}
          <Link
            href="/imprint"
            className="underline hover:text-white transition-colors duration-300"
          >
            Imprint
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
