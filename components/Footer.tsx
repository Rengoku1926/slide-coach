"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Phone, Mail } from "lucide-react"

const companyLogos = [
  { name: "Walmart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Logitech", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Monday", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Google", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PayPal", logo: "/placeholder.svg?height=40&width=120" },
]

const companyLinks = [
  { name: "Home", href: "#" },
  { name: "Agency", href: "#" },
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
]

const socialLinks = [
  { name: "Pinterest", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
]

export default function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Company Logos Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 gap-12"
        >
          {/* Main CTA Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Let's make something
              <br />
              <span className="text-gray-400">great work together.</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Call Our Office</h3>
                <a
                  href="tel:+12345678910"
                  className="flex items-center text-lg hover:text-cyan-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +1 234 567 8910
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Send A Message</h3>
                <a
                  href="mailto:info@domain.com"
                  className="flex items-center text-lg hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  info@domain.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Follow Us</h3>
            <ul className="space-y-4 mb-8">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center text-xl font-bold hover:text-cyan-400 transition-colors duration-300"
            >
              Branding
              <ArrowUpRight className="w-6 h-6 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply. You must not
              use this website if you disagree with any of those website standard terms and conditions.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Crafto is Powered by{" "}
              <a href="#" className="underline hover:text-white transition-colors duration-300">
                ThemeZaa
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
