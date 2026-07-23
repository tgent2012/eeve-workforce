"use client";

import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { LiquidButton } from "./ui/liquid-glass-button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

export const Navigation: React.FC = () => {
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

  const navItems = [
    { name: "About", link: "#about" },
    { name: "What We Do", link: "#what-we-do" },
    { name: "Industries", link: "#industries" },
    { name: "Platform", link: "#platform" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
          <Logo />
        </a>
        
        <NavItems items={navItems} />

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
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

          <a href="#contact" className="hidden sm:inline-block">
            <LiquidButton size="lg" className="font-semibold text-black tracking-wide">
              Get in touch
            </LiquidButton>
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border flex items-center justify-center cursor-pointer ${
                isDarkMode
                  ? "bg-white/10 text-amber-300 border-white/20"
                  : "bg-black/5 text-slate-700 border-slate-200"
              }`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-base font-semibold text-slate-700 dark:text-neutral-200 py-1 hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors w-full"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              <LiquidButton size="lg" className="w-full font-semibold text-black tracking-wide text-center">
                Get in touch
              </LiquidButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
