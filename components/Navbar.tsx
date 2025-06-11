"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ChevronDown, Menu, X, FileText, Trophy, Info, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface DropdownItem {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  href: string
  scrollToId?: string
}

interface NavItem {
  name: string
  hoverText: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  dropdown?: DropdownItem[]
  href?: string
}

const navigationItems: NavItem[] = [
  {
    name: "About Us",
    hoverText: "About Us",
    icon: Info,
    href: "/about-us",
  },
  {
    name: "Blogs",
    hoverText: "Blogs",
    icon: BookOpen,
    href: "/blogs",
  },
  {
    name: "Contact us",
    hoverText: "Contact us",
    icon: Phone,
    href: "/contact-us",
  },
  {
    name: "Students",
    hoverText: "Students",
    icon: Trophy,
    dropdown: [
      {
        name: "Github Student Pack",
        description: "Signin through github verification",
        icon: Trophy,
        scrollToId: "success-stories",
        href: "/students",
      },
      {
        name: "Verification",
        description: "Verify your student email",
        icon: FileText,
        scrollToId: "success-stories",
        href: "/students/#verify",
      },
    ],
  },
]

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

interface AnimatedNavItemProps {
  item: NavItem
  isOpen: boolean
  onToggle: (isOpen: boolean) => void
}

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({ item, isOpen, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleDropdownItemClick = (dropdownItem: DropdownItem) => {
    if (dropdownItem.scrollToId) {
      smoothScrollTo(dropdownItem.scrollToId)
      onToggle(false) // Close dropdown after clicking
    }
  }

  // If the item has no dropdown, render a simple link
  if (!item.dropdown) {
    return (
      <Link
        href={item.href || "#"}
        className="flex items-center space-x-1 text-gray-800 hover:text-[#9081DC] transition-colors duration-200 font-medium relative overflow-hidden py-1"
      >
        <motion.span
          whileHover={{ color: "#9081DC" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="block whitespace-nowrap"
        >
          {item.name}
        </motion.span>
      </Link>
    )
  }

  // Otherwise render a dropdown
  return (
    <div className="relative">
      <button
        onMouseEnter={() => {
          setIsHovered(true)
          onToggle(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          onToggle(false)
        }}
        className="flex items-center space-x-1 text-gray-800 hover:text-[#9081DC] transition-colors duration-200 font-medium relative overflow-hidden py-1"
      >
        <div className="relative">
          <motion.span
            animate={{
              color: isHovered ? "#9081DC" : "#1f2937",
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="block whitespace-nowrap"
          >
            {isHovered ? item.hoverText : item.name}
          </motion.span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => onToggle(true)}
            onMouseLeave={() => onToggle(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden z-50"
          >
            <div className="p-2">
              {item.dropdown.map((dropdownItem, index) =>
                dropdownItem.href ? (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200 group text-left "
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100/80 rounded-lg flex items-center justify-center group-hover:bg-purple-200/80 transition-colors duration-200">
                      <dropdownItem.icon className="h-5 w-5 text-[#9081DC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#9081DC] transition-colors duration-200">
                        {dropdownItem.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{dropdownItem.description}</p>
                    </div>
                  </Link>
                ) : (
                  <motion.button
                    key={dropdownItem.name}
                    onClick={() => handleDropdownItemClick(dropdownItem)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200 group text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100/80 rounded-lg flex items-center justify-center group-hover:bg-purple-200/80 transition-colors duration-200">
                      <dropdownItem.icon className="h-5 w-5 text-[#9081DC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#9081DC] transition-colors duration-200">
                        {dropdownItem.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{dropdownItem.description}</p>
                    </div>
                  </motion.button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MobileNavItemProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onItemClick: (dropdownItem: DropdownItem) => void
  onMenuClose: () => void
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ item, isOpen, onToggle, onItemClick, onMenuClose }) => {
  // If the item has no dropdown, render a simple link
  if (!item.dropdown) {
    return (
      <div className="border-b border-white/10 last:border-b-0">
        <Link
          href={item.href || "#"}
          className="w-full flex items-center px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200"
          onClick={onMenuClose}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <item.icon className="h-4 w-4 text-[#9081DC]" />
            </div>
            <span className="font-medium text-gray-900">{item.name}</span>
          </div>
        </Link>
      </div>
    )
  }

  // Otherwise render a dropdown
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <motion.button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <item.icon className="h-4 w-4 text-[#9081DC]" />
          </div>
          <span className="font-medium text-gray-900">{item.name}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden bg-white/5"
          >
            <div className="py-2">
              {item.dropdown.map((dropdownItem, index) => (
                <motion.div
                  key={dropdownItem.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                >
                  {dropdownItem.href ? (
                    <Link
                      href={dropdownItem.href}
                      className="flex items-start space-x-3 px-6 py-2.5 text-sm hover:bg-white/10 transition-colors duration-200"
                      onClick={onMenuClose}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center mt-0.5">
                        <dropdownItem.icon className="h-3 w-3 text-[#9081DC]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">{dropdownItem.name}</div>
                        <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">{dropdownItem.description}</div>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => onItemClick(dropdownItem)}
                      className="w-full flex items-start space-x-3 px-6 py-2.5 text-sm hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center mt-0.5">
                        <dropdownItem.icon className="h-3 w-3 text-[#9081DC]" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="font-medium text-gray-900 truncate">{dropdownItem.name}</div>
                        <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">{dropdownItem.description}</div>
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ResizableNavbar() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  const handleDropdownToggle = (itemName: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? itemName : null)
  }

  const handleMobileItemClick = (dropdownItem: DropdownItem) => {
    if (dropdownItem.scrollToId) {
      smoothScrollTo(dropdownItem.scrollToId)
      setIsMobileMenuOpen(false)
      setOpenMobileDropdown(null)
    }
  }

  const handleMobileDropdownToggle = (itemName: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-4 z-50 w-full lg:w-full")}>
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          backdropFilter: "blur(16px)",
          boxShadow: visible
            ? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          width: visible ? "75%" : "95%",
          y: visible ? 8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className={cn(
          "relative z-[60] h-24 mx-auto hidden w-full max-w-9xl flex-row items-center justify-between self-start rounded-2xl bg-white/20 backdrop-blur-md px-6 lg:flex border border-white/30",
        )}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center cursor-pointer h-24 w-24 relative"
            onClick={() => smoothScrollTo("hero")}
          >
            <Image src="/slide-coach-logo.png" alt="Slide Coach Logo" fill className="object-contain" priority />
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-10">
          {navigationItems.map((item) => (
            <AnimatedNavItem
              key={item.name}
              item={item}
              isOpen={openDropdown === item.name}
              onToggle={(isOpen) => handleDropdownToggle(item.name, isOpen)}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-800 hover:text-[#9081DC] font-medium hover:bg-white/30">
            Log in
          </Button>
          <Button className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            Try it now
          </Button>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          backdropFilter: "blur(16px)",
          boxShadow: visible
            ? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          width: visible ? "90%" : "100%",
          borderRadius: visible ? "16px" : "20px",
          y: visible ? 8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className={cn(
          "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-white/20 backdrop-blur-md px-4 py-4 lg:hidden border border-white/30",
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Mobile Logo */}
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center cursor-pointer"
              onClick={() => smoothScrollTo("hero")}
            >
              <div className="flex items-center justify-center">
                <div className="relative h-12 w-12 mr-2">
                  <Image src="/slide-coach-logo.png" alt="Slide Coach Logo" fill className="object-contain" priority />
                </div>
                <span className="text-2xl font-bold text-gray-900">Slide-Coach</span>
              </div>
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-[#9081DC] transition-colors duration-200 p-2 rounded-lg hover:bg-white/30"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="w-full mt-4 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="max-h-[60vh] overflow-y-auto">
                {navigationItems.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    isOpen={openMobileDropdown === item.name}
                    onToggle={() => handleMobileDropdownToggle(item.name)}
                    onItemClick={handleMobileItemClick}
                    onMenuClose={closeMobileMenu}
                  />
                ))}
              </div>

              {/* Auth Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="p-4 border-t border-white/10 space-y-3"
              >
                <Button
                  variant="ghost"
                  className="w-full bg-white/10 hover:bg-white/20 text-gray-800 hover:text-[#9081DC] font-medium transition-all duration-200"
                >
                  Log In
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Try it now
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
