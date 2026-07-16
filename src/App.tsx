import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WhatIsEeve } from "./components/WhatIsEeve";
import { Problem } from "./components/Problem";
import { IndustryBlueprints } from "./components/IndustryBlueprints";
import { VoiceToVerified } from "./components/VoiceToVerified";
import { EnterpriseTrust } from "./components/EnterpriseTrust";
import { FAQ } from "./components/FAQ";
import { PremiumCTA } from "./components/PremiumCTA";
import { Footer } from "./components/Footer";
import { Integrations } from "./components/Integrations";
import LineSidebar from "./components/LineSidebar";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = ["home", "about", "why-choose-eeve", "what-we-do", "industries", "integrations", "platform", "faq"];

  // Scroll spy effect to keep LineSidebar selection in sync with current viewport section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      // Determine active section index
      let currentSection = 0;
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = i;
            break;
          }
        }
      }
      setActiveSection(currentSection);

      // Show/hide scroll top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check if we are near the bottom of the page (near PremiumCTA which is dark).
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isNearBottom = (window.scrollY + windowHeight) > (docHeight - 650);

      setIsDarkBg(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index: number) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Load and initialize Unicorn Studio WebGL Aura Shader Background globally
  useEffect(() => {
    const scriptSrc = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

    const initUnicorn = () => {
      // @ts-ignore
      if (window.UnicornStudio) {
        try {
          // @ts-ignore
          window.UnicornStudio.init();
        } catch (e) {
          console.warn("UnicornStudio already initialized or error: ", e);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        initUnicorn();
      };
      document.head.appendChild(script);
    } else {
      initUnicorn();
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent font-sans antialiased text-[#111111] relative">
      {/* Global Unicorn Studio Aura Background */}
      <div className="aura-background-component fixed inset-0 w-full h-full z-0 pointer-events-none bg-transparent">
        <div data-us-project="SrJYfPcDUR4StI3maLL6" className="w-full h-full"></div>
      </div>

      {/* Main Page Content Wrapper (Stacks on top of z-0 Aura backdrop) */}
      <div className="relative z-10 flex flex-col min-h-screen bg-transparent">
        {/* Sticky Floating Header Navigation */}
        <Navigation />

        {/* Floating Right Side LineSidebar (Visible on Desktop Viewports, Adaptive Colors) */}
        <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden xl:block select-none">
          <LineSidebar
            items={["Overview", "About", "Trust", "Workflow", "Industries", "Integrations", "Dashboard", "FAQ"]}
            accentColor="#A31D1D"
            textColor={isDarkBg ? "#E5E7EB" : "#6B7280"}
            markerColor={isDarkBg ? "#555555" : "#E5E7EB"}
            fontSize={0.78}
            maxShift={15}
            markerLength={32}
            itemGap={12}
            showIndex={true}
            showMarker={true}
            activeIndexOverride={activeSection}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Main Storytelling Sections */}
        <main>
          {/* Section 1: Hero Visual Nodes Canvas & Abstract Sculpture */}
          <Hero />

          {/* Section 2: About EEVE (Bento Editorial layout with clean text columns) */}
          <WhatIsEeve />

          {/* Section 3: Why Businesses Choose EEVE (Photography Editorial Cards, Trust & Outcomes) */}
          <EnterpriseTrust />

          {/* Section 4: What We Do (Opportunity Copy & Morphing BEFORE/WITH Diagram) */}
          <Problem />

          {/* Section 5: Built Around Your Business (Fullscreen Expanding Accordion transitions) */}
          <IndustryBlueprints />

          {/* Section 6: Enterprise Integrations (Converging App Icons driven by scroll progress) */}
          <Integrations />

          {/* Section 7: See EEVE In Action (Lemon Tree Premier Dashboard Showcase & Live Feeds inside ContainerScroll) */}
          <VoiceToVerified />

          {/* FAQ Accordion (Accordion, Minimal, No borders, Smooth expand) */}
          <FAQ />

          {/* Premium CTA (Crimson Drifting Gradient, Discovery Call, Contact) */}
          <PremiumCTA />
        </main>

        {/* Footer (Minimal, Four Columns Layout) */}
        <Footer />

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`fixed bottom-8 right-8 xl:right-12 z-50 p-3.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer flex items-center justify-center ${
                isDarkBg 
                  ? "bg-white/95 text-neutral-900 border border-white/20 hover:bg-white" 
                  : "bg-neutral-900/90 text-white border border-neutral-800 hover:bg-black"
              }`}
              title="Scroll to Top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
