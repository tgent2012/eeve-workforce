import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PhoneCall, Cpu, Database, MessageSquare, LayoutDashboard, UserCheck, ArrowRight } from "lucide-react";

export const VoiceWorkforce: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: PhoneCall,
      label: "Voice",
      title: "Inbound Call",
      description: "Guest calls to request early check-in or reservation modification.",
      status: "Connected · 100% Captured",
    },
    {
      icon: Cpu,
      label: "Decision Engine",
      title: "Policy Check",
      description: "EEVE retrieves policy rules and evaluates the request criteria.",
      status: "Authorized · Under Limits",
    },
    {
      icon: Database,
      label: "Business Systems",
      title: "System Update",
      description: "The execution engine writes the update directly into the PMS.",
      status: "API Write Success",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp / SMS",
      title: "Confirmation",
      description: "A secure confirmation link and recap are delivered to the caller.",
      status: "Delivered · Read Recapped",
    },
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      title: "Observability",
      description: "The dashboard updates live, appending to the append-only log.",
      status: "Chain of Custody Written",
    },
    {
      icon: UserCheck,
      label: "Human",
      title: "Collaboration",
      description: "The staff is notified; relationship and exceptions remain with people.",
      status: "Staff Informed",
    },
  ];

  // Automatically cycle through steps for demo visualization
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 px-6 sm:px-12 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#E53935] uppercase block mb-4">
            Unified Workflow Integration
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-[1.1] text-balance mb-6">
            Voice Starts The Work. <br />
            People Finish The Relationship.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal max-w-xl">
            Voice remains the highest-value interface, but execution is what matters. EEVE completes the execution, extending the workflow over WhatsApp and SMS while ensuring humans only step in for judgment.
          </p>
        </div>

        {/* Large Horizontal Workflow (desktop) / Stack (mobile) */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 mt-12 bg-white border border-[#ECECEC] p-8 sm:p-12 rounded-3xl shadow-sm">
          
          {/* Timeline Connector Line (desktop) */}
          <div className="absolute top-[82px] left-[10%] right-[10%] h-[1px] bg-[#ECECEC] hidden lg:block z-0">
            {/* Animated Progress Line */}
            <motion.div
              className="h-[2px] bg-[#E53935]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <div
                key={idx}
                className="w-full lg:w-[15%] flex flex-col items-center text-center relative z-10 cursor-pointer group"
                onClick={() => setActiveStep(idx)}
              >
                {/* Icon Circle */}
                <motion.div
                  animate={{
                    borderColor: isActive ? "#E53935" : isCompleted ? "#0F9D58" : "#ECECEC",
                    backgroundColor: isActive ? "#FFFFFF" : isCompleted ? "#FFFFFF" : "#FAFAFA",
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center relative shadow-sm transition-all duration-300`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-[#E53935]" : isCompleted ? "text-[#0F9D58]" : "text-[#666666]"
                    }`}
                  />
                  {/* Step index badge */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FAFAFA] border border-[#ECECEC] text-[9px] font-mono font-medium flex items-center justify-center text-[#666666]">
                    {idx + 1}
                  </span>
                </motion.div>

                {/* Step Name */}
                <h4 className="text-sm font-sans font-bold text-[#111111] mt-4 tracking-tight">
                  {step.label}
                </h4>

                {/* Flow Arrow (only shown on desktop between nodes) */}
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#ECECEC] absolute top-5 -right-6 hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* Step details drawer */}
        <div className="mt-8 bg-white border border-[#ECECEC] p-8 rounded-3xl shadow-sm min-h-[160px] flex flex-col justify-center">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#ECECEC] pb-4 md:pb-0 md:pr-8">
              <span className="text-[10px] font-mono font-semibold text-[#E53935] uppercase tracking-wider block mb-1">
                Workflow Phase {activeStep + 1}
              </span>
              <h3 className="text-xl font-sans font-bold text-[#111111]">
                {steps[activeStep].title}
              </h3>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E53935]/5 border border-[#E53935]/10 text-[10px] font-mono font-semibold text-[#E53935]">
                {steps[activeStep].status}
              </div>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
