import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers } from "lucide-react";

export const EnterpriseArchitecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers = [
    {
      name: "People",
      role: "Authority & Relationship Layer",
      tech: "Personnel Console",
      description: "Humans retain ultimate authority. When authority limits are reached, EEVE prepares a complete, verified context package and hands it over to the staff rather than an abrupt raw call transfer. Staff handles relationship management and exceptions.",
    },
    {
      name: "Voice Workforce Intelligence",
      role: "Speech & Natural Language Ingress",
      tech: "SIP Trunking & Whisper Voice Engine",
      description: "Handles low-latency, high-concurrency telephony ingress. Transcribes speech, resolves interruptions, and maps human language into structural semantic query parameters.",
    },
    {
      name: "Decision Intelligence",
      role: "Autonomy Resolution Layer",
      tech: "Deterministic Option Compiler",
      description: "Evaluates the parsed intent against active rules, permissions, and available services. Formulates a structured proposal of execution without generative text risks.",
    },
    {
      name: "Business Context Engine",
      role: "Operational State Resolver",
      tech: "Enterprise Memory Middleware",
      description: "Resolves who is calling, historical preference records, current availability states, and operator variables from local storage and core systems of record.",
    },
    {
      name: "Verification Engine",
      role: "Autonomy Safety Controller",
      tech: "Double Verification Engine",
      description: "Executes a multi-layer independent check cycle: identity match, policy constraints, pricing validation, and voice-confirmed customer intent before transaction triggers.",
    },
    {
      name: "Execution Engine",
      role: "Idempotent Transaction Gate",
      tech: "API Execution Gateway",
      description: "Performs final actions (holds, orders, cancels) via secure, idempotent API calls into core backend systems, validating receipt of success signals.",
    },
    {
      name: "Chain of Custody",
      role: "Audit Log & Telemetry",
      tech: "Immutable Ledger Database",
      description: "Maintains an append-only transaction ledger that stores state variables, policy versions, execution tokens, and text recaps for auditing and debugging.",
    },
    {
      name: "Systems of Record",
      role: "Core Data Storage",
      tech: "Enterprise PMS, CRM, POS, ERP",
      description: "The business's underlying software suite. EEVE does not replace these; it acts as a secure, certified operator on top of them.",
    },
  ];

  return (
    <section id="architecture" className="bg-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-b border-[#ECECEC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#E53935] uppercase block mb-4">
            System Topology
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-[1.1] text-balance mb-6">
            Built Like Enterprise Infrastructure.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal">
            The platform architecture separates coordination, policy, and execution. Below is the technical anatomy of a deployment, designed for zero-downtime, fully audited operational integration.
          </p>
        </div>

        {/* Stack View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Stack list column (Laid out like horizontal stacked bricks on desktop) */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            <span className="text-[10px] font-mono font-bold text-[#666666]/60 uppercase tracking-widest block mb-1">
              Click a layer to audit specification:
            </span>
            {layers.map((layer, index) => {
              const isSelected = selectedLayer === index;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedLayer(index)}
                  className={`w-full text-left p-4.5 rounded-lg border text-sm sm:text-base font-sans font-semibold transition-all duration-300 flex justify-between items-center ${
                    isSelected
                      ? "bg-[#111111] text-[#FFFFFF] border-[#111111] shadow-md shadow-black/5"
                      : "bg-[#FAFAFA] text-[#666666] hover:bg-[#FFFFFF] border-[#ECECEC] hover:border-[#D5D5D5]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${isSelected ? "text-[#E53935]" : "text-[#666666]/50"}`}>
                      0{8 - index}
                    </span>
                    <span className={`${isSelected ? "text-white" : "text-[#111111]"}`}>
                      {layer.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs opacity-60 font-normal">
                    {layer.tech}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Details column */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="bg-[#FAFAFA] border border-[#ECECEC] rounded-3xl p-8 min-h-[380px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLayer}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-[#ECECEC] pb-6">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#E53935] uppercase tracking-wider block mb-1">
                        Architecture Layer 0{8 - selectedLayer}
                      </span>
                      <h3 className="text-2xl font-sans font-bold text-[#111111] tracking-tight">
                        {layers[selectedLayer].name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#E53935]/5 border border-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-semibold text-[#111111] uppercase tracking-widest mb-2">
                      Role / Subsystem
                    </h4>
                    <p className="text-base text-[#111111] font-sans font-medium">
                      {layers[selectedLayer].role}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-semibold text-[#111111] uppercase tracking-widest mb-2">
                      Technical Audit
                    </h4>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-sans font-normal">
                      {layers[selectedLayer].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-[#ECECEC] pt-6 mt-8 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#666666]/60 uppercase tracking-widest">
                  Compliance Level: ISO/IEC 27001
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58] animate-pulse" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
