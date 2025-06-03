"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Presentation, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const products = [
    {
      name: "Oral Exam",
      description: "AI-powered mock interviews and presentations",
      icon: Presentation,
    },
    {
      name: "Written Exams",
      description: "Comprehensive written assessment tools",
      icon: FileText,
    },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9081DC] to-[#628AC8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Slide-Coach</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#9081DC] transition-colors duration-200 font-medium"
              >
                <span>Products</span>
                <motion.div animate={{ rotate: isProductsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="p-2">
                      {products.map((product, index) => (
                        <motion.a
                          key={product.name}
                          href="#"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                            <product.icon className="h-5 w-5 text-[#9081DC]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#9081DC] transition-colors duration-200">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="text-gray-700 hover:text-[#9081DC] transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-[#9081DC] transition-colors duration-200 font-medium">
              Success Stories
            </a>
            <a href="#" className="text-gray-700 hover:text-[#9081DC] transition-colors duration-200 font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-[#9081DC] transition-colors duration-200 font-medium">
              Enterprise
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 font-medium">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              Try it now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#9081DC] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-gray-900">Products</div>
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href="#"
                      className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover:text-[#9081DC] hover:bg-purple-50 rounded-md transition-colors duration-200"
                    >
                      <product.icon className="h-4 w-4" />
                      <span>{product.name}</span>
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#9081DC] hover:bg-purple-50 rounded-md transition-colors duration-200"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#9081DC] hover:bg-purple-50 rounded-md transition-colors duration-200"
                >
                  Success Stories
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#9081DC] hover:bg-purple-50 rounded-md transition-colors duration-200"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#9081DC] hover:bg-purple-50 rounded-md transition-colors duration-200"
                >
                  Enterprise
                </a>
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-[#9081DC]">
                    Log in
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white">
                    Try it now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
