import React from "react";
import { motion } from "motion/react";
import { LiquidButton } from "./ui/liquid-glass-button";

export const PremiumCTA: React.FC = () => {

  return (
    <section 
      id="contact" 
      className="relative w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-16 xl:px-24 bg-transparent overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-4xl z-10 flex flex-col items-center gap-6 relative">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-bold border rounded-full px-4.5 py-1.5 text-[#111111] !text-[#111111] border-[#D1D5DB] bg-white/90 backdrop-blur-md shadow-xs">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-3.5 w-3.5 text-[#A31D1D] dark:text-[#F87171] animate-pulse"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            Start Your Transformation
          </span>
        </motion.div>

        {/* Headings */}
        <div className="text-center max-w-3xl mt-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] !text-[#111111] tracking-tight leading-[1.15] sm:leading-[1.1]"
          >
            EEVE is ready to accelerate your business.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] !text-[#111111] mt-1.5 sm:mt-2 leading-[1.15] sm:leading-[1.1]"
          >
            <span className="italic font-serif text-[#A31D1D] dark:text-[#FBBF24] font-extrabold pr-1">
              Are you?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-[#2A2A2A] !text-[#2A2A2A] font-sans font-medium max-w-xl mx-auto leading-relaxed text-balance"
          >
            Book a demo with us to see how EEVE can help you.
          </motion.p>

          {/* Interactive CTA Button */}
          <div className="relative inline-block group mt-8">
            <LiquidButton 
              size="xl" 
              onClick={() => window.location.href = "mailto:hello@eeve.ai"}
              className="font-semibold text-black tracking-wide whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>Book A Free Call</span>
              <svg className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </LiquidButton>
          </div>

          {/* Contact Info Row */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center justify-center text-sm font-sans"
          >
            <a href="mailto:hello@eeve.ai" className="group text-[#111111] !text-[#111111] hover:text-[#A31D1D] transition-colors duration-200 flex items-center gap-2 cursor-pointer font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-[#A31D1D]"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              hello@eeve.ai
            </a>
          </motion.div>



        </div>

      </div>
    </section>
  );
};
