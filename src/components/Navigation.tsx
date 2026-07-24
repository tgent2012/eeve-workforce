import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { LiquidButton } from "./ui/liquid-glass-button";

export const Navigation: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Track active section for link indicator
  useEffect(() => {
    const sections = ["about", "what-we-do", "industries", "platform", "faq", "contact"];
    let ticking = false;
    let cached: { id: string; top: number; bottom: number }[] = [];

    const updateOffsets = () => {
      cached = sections
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          return { id, top, bottom: top + el.offsetHeight };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 120;
          let matched = "";

          for (let i = 0; i < cached.length; i++) {
            const { id, top, bottom } = cached[i];
            if (scrollPos >= top && scrollPos < bottom) {
              matched = id;
              break;
            }
          }

          setActiveSection((prev) => (prev !== matched ? matched : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffsets);
    };
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "What We Do", id: "what-we-do" },
    { label: "Industries", id: "industries" },
    { label: "Platform", id: "platform" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Clean Horizontal Sticky Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md py-3.5 border-b border-black/5 dark:border-white/10 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          
          {/* Logo on Far Left */}
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity select-none">
            <Logo />
          </a>

          {/* Navigation Links in Center */}
          <nav className="hidden lg:flex items-center gap-8 font-sans">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  activeSection === item.id
                    ? "text-[#A31D1D] dark:text-[#FBBF24] font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A31D1D] dark:bg-[#FBBF24] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Primary Actions & CTA at Far Right */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 border flex items-center justify-center cursor-pointer ${
                isDarkMode
                  ? "bg-white/10 text-amber-300 border-white/20 hover:bg-white/20"
                  : "bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10 hover:text-black"
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Primary CTA Button */}
            <a href="#contact" className="hidden sm:inline-block">
              <LiquidButton size="lg" className="font-semibold text-black tracking-wide">
                Get in touch
              </LiquidButton>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50 lg:hidden"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-[290px] bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border-l border-slate-200/80 dark:border-neutral-800 shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden text-left"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-neutral-800 mb-8">
                  <Logo />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base font-sans font-semibold transition-colors duration-200 py-1.5 border-b border-transparent hover:border-slate-200 dark:hover:border-neutral-800 ${
                        activeSection === item.id
                          ? "text-[#A31D1D] dark:text-[#FBBF24]"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions inside drawer */}
              <div className="pt-6 border-t border-slate-100 dark:border-neutral-800 flex flex-col gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white font-medium text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
                  <span>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
                </button>
                
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full"
                >
                  <LiquidButton size="lg" className="w-full font-semibold text-black tracking-wide text-center justify-center">
                    Get in touch
                  </LiquidButton>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
