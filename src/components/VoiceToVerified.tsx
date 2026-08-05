import React from "react";
import ScrollReveal from "./ScrollReveal";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { BlurText } from "./ui/blur-text";

export const VoiceToVerified: React.FC = () => {
  const pictureTokens = [
    { text: "Every", highlight: false },
    { text: "Conversation.", highlight: false },
    { text: "One", highlight: false, lineBreakBefore: true },
    { text: "Clear", highlight: false },
    { text: "Picture.", highlight: true }
  ];

  return (
    <section id="platform" className="bg-transparent py-16 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Section Heading & Label */}
        <div className="mb-8 sm:mb-12">
          <span className="section-label mb-3 sm:mb-4 block">
            SEE EEVE IN ACTION
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="section-heading text-balance max-w-2xl">
              Voice to <span className="text-[#A31D1D] dark:text-[#FBBF24] font-extrabold">Verified.</span>
            </h2>
            <p className="body-copy max-w-xl text-left">
              Watch how incoming phone calls transform into real-time database transactions, automated CRM records, and timestamped proof-of-work confirmation logs.
            </p>
          </div>
        </div>

        {/* ScrollReveal Statement Banner */}
        <div className="mb-8 sm:mb-12">
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur={true}
            baseRotation={3}
            blurStrength={10}
            textClassName="editorial-statement block"
            wordAnimationEnd="bottom+=10% bottom"
          >
            A live, transparent telemetry dashboard that proves every call was answered, handled, and verified.
          </ScrollReveal>
        </div>

        {/* ContainerScroll Component with High-Res Real Dashboard Screenshot */}
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center mb-8">
              <BlurText
                tokens={pictureTokens}
                delay={60}
                animateBy="words"
                direction="bottom"
                className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#111111] dark:text-white tracking-tight text-center justify-center flex-wrap"
                highlightClassName="text-[#A31D1D] dark:text-[#FBBF24]"
              />
              <p className="text-xs sm:text-sm font-mono text-[#6B7280] uppercase tracking-widest mt-3 font-semibold">
                LEMON TREE PREMIER · LIVE TELEMETRY DASHBOARD
              </p>
            </div>
          }
        >
          {/* Browser Window Mockup Frame */}
          <div className="w-full h-full bg-white dark:bg-[#111116] rounded-2xl shadow-2xl overflow-hidden border border-[#EAEAEA] dark:border-white/10 flex flex-col">
            
            {/* Top Mac-style Window Titlebar */}
            <div className="w-full bg-[#F3F3F3] dark:bg-[#18181F] px-4 py-3 border-b border-[#EAEAEA] dark:border-white/10 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="bg-white dark:bg-black/40 px-6 py-1 rounded-md border border-[#EAEAEA] dark:border-white/10 text-[11px] font-mono text-[#6B7280] dark:text-slate-400 font-medium">
                eeve.ai/lemon-tree-premier
              </div>
              <div className="w-12 flex-shrink-0 hidden sm:block" />
            </div>

            {/* Updated High-Res Dashboard Screenshot */}
            <div className="w-full bg-[#FAFAFA] flex flex-col relative overflow-hidden">
              <img 
                src="/assets/dashboard_lemon_tree.png" 
                alt="eeveai Lemon Tree Premier Real-Time Telemetry Dashboard" 
                className="w-full h-auto object-cover object-top select-none pointer-events-none rounded-b-2xl shadow-2xl" 
              />
            </div>
          </div>
        </ContainerScroll>

      </div>
    </section>
  );
};
