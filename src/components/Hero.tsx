import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { LiquidButton } from "./ui/liquid-glass-button";

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-center items-start text-[#111111] overflow-hidden bg-transparent px-6 sm:px-12 lg:px-16 xl:px-24 py-32"
    >

      {/* Main Hero Content */}
      <div className="max-w-4xl z-20 flex flex-col items-start gap-8 mt-10 lg:mt-0 relative select-none">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="hero-heading text-balance"
        >
          The Workforce <br />
          <span className="inline-flex items-baseline flex-wrap gap-x-3 gap-y-2 mt-2">
            <PointerHighlight
              containerClassName="inline-flex items-baseline"
              rectangleClassName="border-[#A31D1D] bg-[#A31D1D]/5 rounded-2xl border-2 md:border-4"
              pointerClassName="text-[#A31D1D] h-6 w-6 md:h-10 md:w-10"
            >
              <span className="text-[#A31D1D] bg-gradient-to-r from-[#A31D1D] to-[#6B0F1A] bg-clip-text text-transparent px-4 pt-2 pb-4 inline-block">
                Intelligence
              </span>
            </PointerHighlight>
            <span className="text-[#A31D1D] bg-gradient-to-r from-[#A31D1D] to-[#6B0F1A] bg-clip-text text-transparent">
              Platform.
            </span>
          </span>
        </motion.h1>

        {/* Sub Heading & Supporting Copy */}
        <div className="flex flex-col gap-6 max-w-2xl mt-8">
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
              <span>Exploree eeve</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </LiquidButton>
          </a>
        </motion.div>
      </div>


    </section>
  );
};
