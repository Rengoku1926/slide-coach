"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Presentation,
  FileText,
  DollarSign,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropdownItem {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  scrollToId?: string;
}

interface NavItem {
  name: string;
  hoverText: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dropdown: DropdownItem[];
}

const navigationItems = [
  {
    name: "Products",
    hoverText: "Products",
    icon: Presentation,
    dropdown: [
      {
        name: "Oral Exam",
        description: "AI-powered mock interviews and presentations",
        icon: Presentation,
        href: "#",
      },
      {
        name: "Written Exams",
        description: "Comprehensive written assessment tools",
        icon: FileText,
        href: "#",
      },
    ],
  },
  {
    name: "Pricing",
    hoverText: "Pricing",
    icon: DollarSign,
    dropdown: [
      {
        name: "Starter Plan",
        description: "Perfect for individuals getting started",
        icon: DollarSign,
        scrollToId: "pricing",
      },
      {
        name: "Professional",
        description: "For teams and growing businesses",
        icon: Presentation,
        scrollToId: "pricing",
      },
      {
        name: "Enterprise",
        description: "Custom solutions for large organizations",
        icon: Trophy,
        scrollToId: "pricing",
      },
    ],
  },
  {
    name: "Testimonials",
    hoverText: "Testimonials",
    icon: Trophy,
    dropdown: [
      {
        name: "Case Studies",
        description: "Real success stories from our users",
        icon: Trophy,
        scrollToId: "success-stories",
      },
      {
        name: "Customer Reviews",
        description: "What our customers are saying",
        icon: FileText,
        scrollToId: "success-stories",
      },
    ],
  },
];

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

interface AnimatedNavItemProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDropdownItemClick = (dropdownItem: DropdownItem) => {
    if (dropdownItem.scrollToId) {
      smoothScrollTo(dropdownItem.scrollToId);
      onToggle(false); // Close dropdown after clicking
    }
  };

  return (
    <div className="relative">
      <button
        onMouseEnter={() => {
          setIsHovered(true);
          onToggle(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onToggle(false);
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
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
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
              {item.dropdown.map((dropdownItem, index) => (
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
                    <p className="text-sm text-gray-600 mt-1">
                      {dropdownItem.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ResizableNavbar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const handleDropdownToggle = (itemName: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? itemName : null);
  };

  const handleMobileItemClick = (dropdownItem: DropdownItem) => {
    if (dropdownItem.scrollToId) {
      smoothScrollTo(dropdownItem.scrollToId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-50 w-full px-4 lg:w-full")}
    >
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
          "relative z-[60] mx-auto hidden w-full max-w-9xl flex-row items-center justify-between self-start rounded-2xl bg-white/20 backdrop-blur-md px-6 py-4 lg:flex border border-white/30"
        )}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center cursor-pointer"
          onClick={() => smoothScrollTo("hero")}
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#9081DC] to-[#628AC8] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Slide-Coach</span>
          </div>
        </motion.div>

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
          <Button
            variant="ghost"
            className="text-gray-800 hover:text-[#9081DC] font-medium hover:bg-white/30"
          >
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
          "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-white/20 backdrop-blur-md px-4 py-4 lg:hidden border border-white/30"
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Mobile Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              smoothScrollTo("hero");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#9081DC] to-[#628AC8] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Slide-Coach</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-[#9081DC] transition-colors duration-200 p-2 rounded-lg hover:bg-white/30"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-h-[80vh] overflow-y-auto border-t border-white/20 bg-white/10 backdrop-blur-sm mt-4 pt-4 rounded-lg"
            >
              <div className="space-y-2 px-2">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white/20 rounded-md">
                      {item.name}
                    </div>
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => handleMobileItemClick(dropdownItem)}
                        className="w-full flex items-start space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#9081DC] hover:bg-white/30 rounded-md transition-colors duration-200"
                      >
                        <dropdownItem.icon className="h-4 w-4 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium">{dropdownItem.name}</div>
                          <div className="text-xs text-gray-600">
                            {dropdownItem.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}

                {/* Auth Buttons */}
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-transparent  shadow-md text-gray-800 text-sm hover:text-[#9081DC] hover:bg-white/30">
                    Log In
                  </Button>
                  <Button className="w-full text-sm bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white shadow-md">
                    Try it now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>  
      </motion.div>
    </motion.div>
  );
}