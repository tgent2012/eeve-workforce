import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, Clock, ShieldAlert, CheckCircle2, Database, Zap, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const Problem: React.FC = () => {
  const [viewMode, setViewMode] = useState<"before" | "after">("before");

  // Left panel feature list data
  const beforeFeatures = [
    {
      icon: <AlertCircle className="w-4.5 h-4.5 text-[#F06D5F]" />,
      title: "Manual Coordination Overhead",
      desc: "Teams spend crucial minutes after every call routing emails, messaging co-workers, and writing tasks."
    },
    {
      icon: <Clock className="w-4.5 h-4.5 text-[#F06D5F]" />,
      title: "System Integration Lag",
      desc: "Customer updates are copy-pasted across CRM, PMS, and local spreadsheets, risking sync errors."
    },
    {
      icon: <ShieldAlert className="w-4.5 h-4.5 text-[#F06D5F]" />,
      title: "Deflection & Wait Queues",
      desc: "High inbound volume creates immediate bottlenecks, causing dropped calls and staff fatigue."
    }
  ];

  const afterFeatures = [
    {
      icon: <CheckCircle2 className="w-4.5 h-4.5 text-[#34C759]" />,
      title: "Automated Dispatching",
      desc: "EEVE handles follow-ups, team notifications, and confirmations automatically without delay."
    },
    {
      icon: <Database className="w-4.5 h-4.5 text-[#34C759]" />,
      title: "Instant Database Write",
      desc: "Connects securely with Opera PMS, Salesforce, or local servers, writing clean data in milliseconds."
    },
    {
      icon: <Zap className="w-4.5 h-4.5 text-[#34C759]" />,
      title: "Infinite Scalability",
      desc: "Addresses thousands of simultaneous customer conversations instantly, eliminating hold queues."
    }
  ];

  // Right panel workflow pipeline data
  const beforeSteps = [
    {
      id: "b1",
      step: "1. Customer Inbound",
      badge: "Inbound",
      badgeClass: "bg-white/45 border-white/50 text-[#F06D5F]",
      desc: "Needs urgent room change or booking update",
      connector: "Manual routing"
    },
    {
      id: "b2",
      step: "2. Conversation",
      badge: "Voice call",
      badgeClass: "bg-white/45 border-white/50 text-[#6B7280]",
      desc: "Front desk staff answers and notes details",
      connector: "Repetitive log"
    },
    {
      id: "b3",
      step: "3. Manual Tasks",
      badge: "Waiting",
      badgeClass: "bg-white/45 border-white/50 text-[#F06D5F] animate-pulse",
      desc: "Updating internal PMS and notifying managers",
      connector: "System delay"
    },
    {
      id: "b4",
      step: "4. Follow Ups",
      badge: "Outbound",
      badgeClass: "bg-white/45 border-white/50 text-[#6B7280]",
      desc: "Confirming outcome back to the customer"
    }
  ];

  const afterSteps = [
    {
      id: "a1",
      step: "1. Customer Inbound",
      badge: "Live inbound",
      badgeClass: "bg-white/45 border-white/50 text-[#34C759]",
      desc: "Call routed directly to EEVE AI Engine",
      connector: "Instant analysis"
    },
    {
      id: "a2",
      step: "2. EEVE Workforce Intelligence",
      badge: "EEVE AI Active",
      badgeClass: "bg-[#A31D1D]/10 border-[#A31D1D]/25 text-[#A31D1D] font-bold",
      isBrand: true,
      desc: "Interprets dialogue, cross-checks rules, and extracts outcomes",
      connector: "Automated API sync"
    },
    {
      id: "a3",
      step: "3. PMS / CRM Auto-Updated",
      badge: "Auto-resolved",
      badgeClass: "bg-white/45 border-white/50 text-[#34C759]",
      desc: "Actions written directly to systems; confirmation sent"
    }
  ];

  return (
    <section id="what-we-do" className="relative bg-transparent py-32 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(240,109,95,0.06)_0%,_transparent_75%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* ScrollReveal Transition Header */}
        <div className="mb-28 text-left max-w-5xl">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#F06D5F] font-bold uppercase block mb-6">
            WHAT WE DO
          </span>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur={true}
            baseRotation={3}
            blurStrength={10}
            textClassName="font-sans font-medium text-3xl sm:text-5xl lg:text-6xl text-[#161616] leading-tight tracking-tight block"
            wordAnimationEnd="bottom+=10% bottom"
          >
            Every day, businesses speak with customers for countless reasons: a new enquiry, a booking, a support request, a service appointment, a product question, a complaint, or a simple follow-up.
          </ScrollReveal>
        </div>

        {/* Section Title & Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#161616] leading-[1.05] text-balance">
              Every <span className="text-[#A31D1D]">Conversation</span> Creates <span className="text-[#A31D1D]">Opportunity.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 flex flex-col gap-6 text-base sm:text-lg text-[#5B6473] font-sans font-normal leading-relaxed text-balance">
            <p>
              While the conversation may only last a few minutes, what happens afterwards often determines the quality of the customer experience and the efficiency of the business itself.
            </p>
            <p>
              For many organisations, these moments still rely on people manually coordinating information, passing tasks between teams and making sure nothing gets missed. As businesses grow, these everyday processes become more complex, making it increasingly difficult to deliver consistent experiences at scale.
            </p>
          </div>
        </div>

        {/* Apple visionOS Glassmorphism Container */}
        <div className="bg-white/32 backdrop-blur-[40px] saturate-[180%] border border-white/45 rounded-[32px] p-6 sm:p-12 lg:p-16 xl:p-24 shadow-[0_30px_80px_rgba(15,23,42,0.1),0_10px_35px_rgba(15,23,42,0.08),inset_0_2px_8px_rgba(255,255,255,0.55)] relative overflow-hidden before:absolute before:inset-0 before:opacity-[0.02] before:pointer-events-none before:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3D%22www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20%2F%3E%3C%2Fsvg%3E')]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
            
            {/* Left panel: Controls and premium visionOS feature cards */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center h-full">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#F06D5F] font-bold uppercase mb-4 block">
                OPERATIONAL WORKFLOW COMPARISON
              </span>
              
              <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-sans font-extrabold text-[#161616] tracking-[-0.02em] leading-[1.05] mb-6">
                Compare your workflow
              </h3>
              
              <p className="text-base sm:text-lg text-[#5B6473] leading-relaxed mb-8">
                Toggle the views to discover how EEVE replaces manual hand-offs and waiting loops with verified, automated operations.
              </p>

              {/* Redesigned Apple Glass Capsule Toggle Switch */}
              <div className="relative inline-flex p-1 bg-white/28 backdrop-blur-[25px] rounded-full border border-white/30 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.06)] gap-1 w-full max-w-[340px] mb-10 select-none">
                <button
                  onClick={() => setViewMode("before")}
                  className="relative flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 text-center cursor-pointer"
                >
                  {viewMode === "before" && (
                    <motion.div
                      layoutId="activeToggleBg"
                      className="absolute inset-0 bg-[#141414]/88 rounded-full shadow-md shadow-black/20 border border-white/10 backdrop-blur-sm"
                      transition={{ type: "spring", stiffness: 355, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-20 transition-colors duration-300 ${viewMode === "before" ? "text-white" : "text-slate-500 hover:text-slate-800"}`}>
                    Before EEVE
                  </span>
                </button>
                
                <button
                  onClick={() => setViewMode("after")}
                  className="relative flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 text-center cursor-pointer"
                >
                  {viewMode === "after" && (
                    <motion.div
                      layoutId="activeToggleBg"
                      className="absolute inset-0 bg-[#141414]/88 rounded-full shadow-md shadow-black/20 border border-white/10 backdrop-blur-sm"
                      transition={{ type: "spring", stiffness: 355, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-20 transition-colors duration-300 ${viewMode === "after" ? "text-white" : "text-slate-500 hover:text-slate-800"}`}>
                    With EEVE
                  </span>
                </button>
              </div>

              {/* visionOS Notification-style Left Feature Cards */}
              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {viewMode === "before" ? (
                    <motion.div
                      key="before-list"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {beforeFeatures.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 p-5 rounded-[18px] border border-white/55 bg-white/22 backdrop-blur-[35px] shadow-[0_16px_32px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:border-[#F06D5F]/35 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all duration-300 group"
                        >
                          <div className="flex-shrink-0 mt-0.5 w-9 h-9 bg-white/40 border border-white/50 shadow-xs flex items-center justify-center rounded-full">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-[#202020] tracking-tight mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#667085] leading-relaxed font-sans font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="after-list"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {afterFeatures.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 p-5 rounded-[18px] border border-white/55 bg-white/22 backdrop-blur-[35px] shadow-[0_16px_32px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:border-[#34C759]/35 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all duration-300 group"
                        >
                          <div className="flex-shrink-0 mt-0.5 w-9 h-9 bg-white/40 border border-white/50 shadow-xs flex items-center justify-center rounded-full">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-[#202020] tracking-tight mb-1 flex items-center gap-1.5">
                              {item.title}
                              {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-[#A31D1D] animate-pulse" />}
                            </h4>
                            <p className="text-xs text-[#667085] leading-relaxed font-sans font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Right panel: Floating Frosted-Glass Workflow Panel */}
            <div className="lg:col-span-7 bg-white/22 backdrop-blur-[35px] border border-white/55 rounded-[28px] p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[580px] relative overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              
              {/* Radial gradient glow and faint grids */}
              <div className="absolute inset-0 grid-bg-light opacity-25 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
              
              {/* Glass Top Edge Reflection Sweep Overlay */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[pulse_4s_infinite]" />

              {/* Dynamic state glows */}
              <AnimatePresence mode="wait">
                {viewMode === "before" ? (
                  <motion.div
                    key="glow-before"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F06D5F_0%,_transparent_65%)] pointer-events-none"
                  />
                ) : (
                  <motion.div
                    key="glow-after"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#34C759_0%,_transparent_65%)] pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Dynamic scroll content pipeline */}
              <div className="relative w-full max-w-md z-10 flex flex-col items-center py-4">
                
                {/* Active pipeline connector line */}
                <div className="absolute top-8 bottom-8 left-12 w-[2px] pointer-events-none overflow-hidden">
                  <div className={`w-full h-full border-l-2 border-dashed ${viewMode === "before" ? "border-[#F06D5F]/20" : "border-[#34C759]/20"}`} />
                  
                  {/* Glowing moving particle dot */}
                  <motion.div
                    className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${viewMode === "before" ? "bg-[#F06D5F] shadow-[0_0_10px_#F06D5F]" : "bg-[#34C759] shadow-[0_0_10px_#34C759]"}`}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  {viewMode === "before" ? (
                    <motion.div
                      key="steps-before"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5 }}
                      className="w-full space-y-8"
                    >
                      {beforeSteps.map((step) => (
                        <div key={step.id} className="relative flex flex-col items-start w-full">
                          
                          {/* Liquid Glass Step Card */}
                          <div className="flex gap-4 items-center bg-white/38 backdrop-blur-[28px] border border-white/60 rounded-[20px] p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:bg-white/45 transition-all duration-300 w-full pl-12 relative z-10">
                            
                            {/* Visual index node */}
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#F06D5F] bg-white flex items-center justify-center shadow-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F06D5F]" />
                            </div>

                            <div className="flex-1 text-left">
                              <span className="text-xs font-bold text-[#161616] tracking-tight block">
                                {step.step}
                              </span>
                              <span className="text-[10px] text-slate-500 font-sans block mt-0.5">
                                {step.desc}
                              </span>
                            </div>
                            
                            <span className={`text-[9px] font-bold font-mono tracking-wider px-2.5 py-0.5 rounded-full border bg-white/45 backdrop-blur-[20px] uppercase shadow-xs ${step.badgeClass}`}>
                              {step.badge}
                            </span>
                          </div>

                          {/* Connector label */}
                          {step.connector && (
                            <div className="w-full flex justify-start pl-16 py-1 select-none pointer-events-none">
                              <span className="text-[8px] sm:text-[9px] font-bold font-mono text-[#F06D5F] bg-white/45 backdrop-blur-[20px] border border-white/60 px-2 py-0.5 rounded-full uppercase tracking-wider relative z-20 shadow-xs">
                                {step.connector}
                              </span>
                            </div>
                          )}

                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="steps-after"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5 }}
                      className="w-full space-y-8"
                    >
                      {afterSteps.map((step) => (
                        <div key={step.id} className="relative flex flex-col items-start w-full">
                          
                          {/* Liquid Glass Step Card */}
                          <div className={`flex gap-4 items-center bg-white/38 backdrop-blur-[28px] border rounded-[20px] p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:bg-white/45 transition-all duration-300 w-full pl-12 relative z-10 ${
                            step.isBrand ? "border-[#A31D1D]/35 shadow-[0_4px_16px_rgba(163,29,29,0.05)] bg-[#A31D1D]/5" : "border-white/60"
                          }`}>
                            
                            {/* Visual index node */}
                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center shadow-xs ${
                              step.isBrand ? "border-[#A31D1D]" : "border-[#34C759]"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${step.isBrand ? "bg-[#A31D1D]" : "bg-[#34C759]"}`} />
                            </div>

                            <div className="flex-1 text-left">
                              <span className={`text-xs font-bold tracking-tight block ${step.isBrand ? "text-[#A31D1D] lowercase" : "text-[#161616]"}`}>
                                {step.step}
                              </span>
                              <span className="text-[10px] text-slate-500 font-sans block mt-0.5">
                                {step.desc}
                              </span>
                            </div>
                            
                            <span className={`text-[9px] font-bold font-mono tracking-wider px-2.5 py-0.5 rounded-full border bg-white/45 backdrop-blur-[20px] uppercase shadow-xs ${step.badgeClass}`}>
                              {step.badge}
                            </span>
                          </div>

                          {/* Connector label */}
                          {step.connector && (
                            <div className="w-full flex justify-start pl-16 py-1 select-none pointer-events-none">
                              <span className={`text-[8px] sm:text-[9px] font-bold font-mono border px-2 py-0.5 rounded-full uppercase tracking-wider relative z-20 shadow-xs ${
                                step.isBrand 
                                  ? "text-[#A31D1D] bg-[#A31D1D]/10 border-white/60 animate-pulse"
                                  : "text-[#34C759] bg-white/45 backdrop-blur-[20px] border-white/60"
                              }`}>
                                {step.connector}
                              </span>
                            </div>
                          )}

                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

          </div>

        </div>

        {/* Large Statement at End */}
        <div className="pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Statement Left (Span 7) */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-[10px] text-[#F06D5F] font-bold uppercase tracking-widest block">
              OPERATIONAL CONTEXT
            </span>
            <h3 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#161616] leading-tight text-balance">
              Unlock the <span className="text-[#A31D1D] font-black">Value</span> <br />
              Within Every <span className="text-[#A31D1D] font-black">Interaction.</span>
            </h3>
            <p className="text-base text-[#6B7280] font-sans leading-relaxed max-w-xl font-normal">
              By converting incoming dialogue into clean structured outputs and verified database actions, EEVE removes administrative friction and captures hidden opportunities in every single phone call.
            </p>
          </motion.div>

          {/* Overlapping Images Right (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-5 relative h-[380px] w-full flex items-center justify-center"
          >
            {/* Base Image */}
            <div className="absolute left-0 top-0 w-[65%] h-[240px] rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-sm group">
              <img
                src="/assets/conversation_potential_1.jpg"
                alt="Boutique reception welcome"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Overlapping Image */}
            <div className="absolute right-0 bottom-0 w-[65%] h-[240px] rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-md group z-10">
              <img
                src="/assets/conversation_potential_2.jpg"
                alt="Architectural studio phone call"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
