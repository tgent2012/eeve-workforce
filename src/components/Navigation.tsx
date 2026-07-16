import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Logo } from "./Logo";
import { LiquidButton } from "./ui/liquid-glass-button";

export const Navigation: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Transparent while on hero, white with blur after scrolling
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Smooth navigation hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Track active section for indicator line
  useEffect(() => {
    const sections = ["about", "what-we-do", "industries", "platform", "faq", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between">
        {/* Logo left */}
        <a href="#" className="text-black hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Menu center/right */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-sans font-medium transition-colors duration-200 relative py-1 ${
                activeSection === item.id
                  ? "text-[#A31D1D]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A31D1D]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Primary Button */}
        <div>
          <a href="#contact" className="inline-block">
            <LiquidButton size="lg" className="font-semibold text-black tracking-wide">
              Get in touch
            </LiquidButton>
          </a>
        </div>
      </div>
    </motion.header>
  );
};
