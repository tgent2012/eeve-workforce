import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { LiquidButton } from "./ui/liquid-glass-button";

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-[#111111] dark:text-white overflow-hidden bg-transparent px-5 sm:px-10 lg:px-16 xl:px-20 pt-28 sm:pt-36 pb-20 sm:pb-28"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#A31D1D]/15 via-[#FBBF24]/10 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-center gap-8 sm:gap-12 relative z-20 select-none">

        {/* Oversized Dominant Headline */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.25rem] font-extrabold tracking-tighter leading-[0.92] text-balance text-[#111111] dark:text-white"
        >
          The Workforce <br />
          <span className="inline-flex items-baseline flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 mt-2">
            <PointerHighlight
              containerClassName="inline-flex items-baseline"
              rectangleClassName="border-[#A31D1D] dark:border-[#FBBF24] bg-[#A31D1D]/10 dark:bg-[#FBBF24]/15 rounded-2xl sm:rounded-3xl border-3 md:border-6"
              pointerClassName="text-[#A31D1D] dark:text-[#FBBF24] fill-[#A31D1D] dark:fill-[#FBBF24] h-6 w-6 sm:h-9 sm:w-9 md:h-12 md:w-12"
            >
              <span className="text-[#A31D1D] dark:text-[#FBBF24] px-3 sm:px-6 pt-1 pb-3 inline-block font-black">
                Intelligence
              </span>
            </PointerHighlight>
            <span className="text-[#A31D1D] dark:text-[#FBBF24] font-black">
              Platform.
            </span>
          </span>
        </motion.h1>

        {/* Minimal Supporting Elements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full mt-2 sm:mt-6 pt-6 border-t border-black/5 dark:border-white/10">
          
          {/* Statement & Body Copy */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-tight"
            >
              Intelligence That Works With People
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed text-balance"
            >
              Eeve is an enterprise Voice AI platform that powers Workforce Intelligence, working alongside your people to turn every customer conversation into meaningful business outcomes. Built to augment your workforce, never replace it.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-4 w-full justify-end"
          >
            <a href="#contact" className="block w-full sm:w-auto">
              <LiquidButton size="xxl" className="w-full font-semibold text-black tracking-wide justify-center">
                Book discovery call
              </LiquidButton>
            </a>
            <a href="#platform" className="block w-full sm:w-auto">
              <LiquidButton size="xxl" className="w-full font-semibold text-black tracking-wide flex items-center justify-center gap-2">
                <span>Explore EEVE</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </LiquidButton>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
