import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurText } from "./ui/blur-text";

export const EnterpriseTrust: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const trustTokens = [
    { text: "Trust", highlight: true },
    { text: "&", highlight: false },
    { text: "Outcome", highlight: false },
    { text: "Focused.", highlight: false }
  ];

  const trusts = [
    {
      number: "01",
      title: "Designed Around Your Business",
      desc: "Every organisation works differently. That's why EEVE adapts to your existing teams, workflows and customer experience instead of forcing you to change how your business operates. From day one, every deployment is designed to feel like a natural extension of your organisation.",
      image: "/assets/designed_around_business.jpg",
      footerLeft: "BUSINESS FIRST",
      footerRight: "ADAPTABLE"
    },
    {
      number: "02",
      title: "Built For Enterprise",
      desc: "Built for organisations where reliability matters. EEVE is designed to support complex operations with secure processes, controlled permissions and dependable execution—giving your teams confidence at every stage of the customer journey.",
      image: "/assets/built_for_enterprise.jpg",
      footerLeft: "ENTERPRISE",
      footerRight: "READY"
    },
    {
      number: "03",
      title: "People Always Come First",
      desc: "Technology should support people, not replace them. EEVE handles routine coordination behind the scenes while your team focuses on the conversations, decisions and customer relationships that matter most.",
      image: "/assets/people_always_first.jpg",
      footerLeft: "HUMAN CENTRED",
      footerRight: "INTELLIGENCE"
    },
    {
      number: "04",
      title: "A Partner, Not Just A Platform",
      desc: "Deploying EEVE is the beginning of the relationship, not the end. As your organisation evolves, EEVE evolves with it—continuously adapting to new workflows, business requirements and customer expectations.",
      image: "/assets/partner_not_platform.jpg",
      footerLeft: "BUILT TO SCALE",
      footerRight: "TOGETHER"
    }
  ];

  // Auto advance tabs every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % trusts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, trusts.length]);

  return (
    <section 
      id="why-choose-eeve" 
      className="bg-transparent relative py-16 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-hidden text-left"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20 text-left">
          <span className="section-label mb-3 sm:mb-4 block">
            WHY BUSINESSES CHOOSE EEVE
          </span>
          <BlurText
            tokens={trustTokens}
            delay={40}
            animateBy="words"
            direction="bottom"
            className="section-heading mb-6 sm:mb-8 flex-wrap"
            highlightClassName="text-[#A31D1D] !text-[#A31D1D] font-extrabold"
          />
          <p className="body-copy max-w-4xl">
            Businesses choose EEVE because enterprise AI demands more than intelligent conversations. It demands trust, accountability and technology that adapts to your organisation. Every decision is independently verified, every action is traceable and every deployment is purpose-built around the way your business operates.
          </p>
        </div>

        {/* Framer-styled Interactive Tabs Card */}
        <div 
          className="w-full bg-white/28 backdrop-blur-[40px] saturate-[180%] border border-white/55 dark:border-white/15 rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 lg:p-8 shadow-[0_35px_80px_rgba(15,23,42,0.1),0_14px_35px_rgba(15,23,42,0.06),inset_0_2px_8px_rgba(255,255,255,0.65)] relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Glass Top Edge Reflection Sweep */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-20 pointer-events-none" />

          {/* Desktop & Tablet Layout (>=1024px) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[540px]">
            
            {/* Left Column: Interactive Tab Accordion List */}
            <div className="col-span-5 flex flex-col justify-center gap-3">
              {trusts.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsPaused(true);
                    }}
                    className={`relative cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                      isActive 
                        ? "bg-white/70 dark:bg-neutral-900/80 border-white/80 dark:border-neutral-700 shadow-md" 
                        : "bg-white/20 dark:bg-neutral-900/30 border-transparent hover:bg-white/40 dark:hover:bg-neutral-900/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive 
                            ? "bg-[#A31D1D] text-white" 
                            : "bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        }`}>
                          {item.number}
                        </span>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#111111] dark:text-white" : "text-neutral-700 dark:text-neutral-300"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Expanded Content for Active Tab */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans mt-3 leading-relaxed">
                            {item.desc}
                          </p>

                          {/* Footer Badges */}
                          <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-[9px] font-mono">
                            <span className="bg-white/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-full px-2.5 py-0.5 font-semibold text-neutral-600 dark:text-neutral-400 tracking-wider">
                              {item.footerLeft}
                            </span>
                            <span className="bg-[#A31D1D]/10 dark:bg-[#F87171]/15 border border-[#A31D1D]/20 rounded-full px-2.5 py-0.5 font-bold text-[#A31D1D] dark:text-[#F87171] tracking-wider uppercase">
                              {item.footerRight}
                            </span>
                          </div>

                          {/* Progress Line Bar */}
                          <div className="w-full h-1 bg-neutral-200/60 dark:bg-neutral-800 rounded-full mt-3 overflow-hidden">
                            <motion.div
                              className="h-full bg-[#A31D1D] dark:bg-[#F87171]"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: isPaused ? 0 : 6, ease: "linear" }}
                              key={activeTab}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: High-Res Dynamic Image Display */}
            <div className="col-span-7 h-[500px] rounded-[24px] overflow-hidden relative border border-white/60 dark:border-neutral-800 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={trusts[activeTab].image}
                    alt={trusts[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans z-10">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                      {trusts[activeTab].number} // {trusts[activeTab].title}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider bg-[#A31D1D]/80 backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase">
                      {trusts[activeTab].footerRight}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile & Small Screen Layout (<1024px) */}
          <div className="flex lg:hidden flex-col gap-6">
            
            {/* Horizontal Pill Tabs Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {trusts.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                      isActive 
                        ? "bg-[#A31D1D] text-white border-[#A31D1D] shadow-md" 
                        : "bg-white/40 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border-white/60 dark:border-neutral-700"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80">{item.number}</span>
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Card Image & Details */}
            <div className="bg-white/60 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800 rounded-[24px] overflow-hidden shadow-md flex flex-col">
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={trusts[activeTab].image}
                    alt={trusts[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="p-6 flex flex-col gap-3 text-left">
                <h3 className="card-title text-xl font-bold">
                  {trusts[activeTab].title}
                </h3>
                <p className="card-body text-sm leading-relaxed">
                  {trusts[activeTab].desc}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-[9px] font-mono">
                  <span className="bg-white/60 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1 font-semibold text-neutral-600 dark:text-neutral-400">
                    {trusts[activeTab].footerLeft}
                  </span>
                  <span className="bg-[#A31D1D]/10 dark:bg-[#F87171]/15 border border-[#A31D1D]/20 rounded-full px-3 py-1 font-bold text-[#A31D1D] dark:text-[#F87171] uppercase">
                    {trusts[activeTab].footerRight}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default EnterpriseTrust;
