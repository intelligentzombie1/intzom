import { useState } from "react";
import { motion } from "framer-motion";

import type { LucideIcon } from "lucide-react";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface MainNavigationProps {
  items: NavItem[];
}

const MainNavigation = ({ items }: MainNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeTab = items[0].name; // Always keep Home active

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Function to handle navigation clicks
  const handleNavClick = (item: NavItem) => {
    const sectionId = item.url.replace("#", ""); // Remove # from URL
    scrollToSection(sectionId);
  };

  return (
    <div className="relative">
      <div className="p-4 lg:px-10 xl:px-20 flex justify-between overflow-hidden">
        {/* logo */}
        <div className="flex items-center gap-1">
          <div className="w-14 h-14">
            <img src="logo.png" alt="Logo" />
          </div>
          <h2 className="text-2xl font-bold text-[#E0E1DD]">IntZom</h2>
        </div>
        {/* main nav */}
        <div className="hidden lg:flex items-center gap-3 bg-white/10 border border-gray-200/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map(item => {
            const isActive = activeTab === item.name;

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`
                relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors
                text-gray-600 hover:text-blue-600
                ${isActive ? "bg-gray-100 text-blue-600" : ""}
              `}
              >
                <span
                  className={`${
                    isActive ? "text-[#0D1B2A]" : "text-[#E0E1DD]"
                  } `}
                >
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-blue-500/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-blue-500/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-blue-500/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg z-40
            transition-all duration-200 ease-in-out
            ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }
          `}
        >
          <div className="px-4 py-2">
            {items.map((item, index) => {
              const isActive = activeTab === item.name;
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  className="animate-fade-in-up"
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`
                      flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/10 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default MainNavigation;
