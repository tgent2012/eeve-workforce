import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { LiquidButton } from "./ui/liquid-glass-button";
import Strands from "./ui/Strands";

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center text-[#111111] overflow-hidden bg-transparent px-5 sm:px-10 lg:px-16 xl:px-24 py-20 sm:py-28 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 relative z-20">
        
        {/* Left Side: Headline, Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-8 select-none">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="hero-heading text-balance"
          >
            The Workforce <br />
            <span className="inline-flex items-baseline flex-wrap gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2 mt-1 sm:mt-2">
              <PointerHighlight
                containerClassName="inline-flex items-baseline"
                rectangleClassName="border-[#A31D1D] dark:border-[#FBBF24] bg-[#A31D1D]/10 dark:bg-[#FBBF24]/15 rounded-xl sm:rounded-2xl border-2 md:border-4"
                pointerClassName="text-[#A31D1D] dark:text-[#FBBF24] fill-[#A31D1D] dark:fill-[#FBBF24] h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9"
              >
                <span className="text-[#A31D1D] dark:text-[#FBBF24] px-2.5 sm:px-4 pt-1.5 pb-2.5 inline-block font-extrabold">
                  Intelligence
                </span>
              </PointerHighlight>
              <span className="text-[#A31D1D] dark:text-[#FBBF24] font-extrabold">
                Platform.
              </span>
            </span>
          </motion.h1>

          {/* Sub Heading & Supporting Copy */}
          <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl mt-2 sm:mt-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="editorial-statement leading-tight"
            >
              Intelligence That Works With People
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="body-copy max-w-xl text-balance"
            >
              Eeve is an enterprise Voice AI platform that powers Workforce Intelligence, working alongside your people to turn every customer conversation into meaningful business outcomes. Built to augment your workforce, never replace it.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a href="#contact" className="block sm:inline-block">
              <LiquidButton size="xxl" className="font-semibold text-black tracking-wide">
                Book discovery call
              </LiquidButton>
            </a>
            <a href="#platform" className="block sm:inline-block">
              <LiquidButton size="xxl" className="font-semibold text-black tracking-wide flex items-center justify-center gap-2">
                <span>Explore EEVE</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </LiquidButton>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Strands Visual Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0 h-[360px] sm:h-[450px] lg:h-[520px] w-full"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#6116f9]/15 via-[#00154f]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

          {/* Strands Component with updated user configuration */}
          <Strands
            colors={["#6116f9", "#112119", "#00154f"]}
            count={3}
            speed={0.5}
            amplitude={1}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            taper={3}
            spread={0.9}
            intensity={0.6}
            saturation={1.5}
            opacity={1}
            scale={1.9}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
