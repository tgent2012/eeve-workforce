import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is an AI Voice Agent and AI Employee?",
      a: "An AI Voice Agent and AI Employee from eeveai is an autonomous software worker that answers inbound phone calls, conducts natural human-like conversations, handles appointment bookings, updates CRMs, and uses proprietary proof-of-work engines to verify that the task was actually completed — serving businesses across India, UAE, and MEASA."
    },
    {
      q: "How does eeveai function as an AI Receptionist for businesses?",
      a: "eeveai acts as a 24/7 AI Receptionist for hotels, clinics, real estate agencies, automotive dealerships, and retail businesses. It handles call spikes, answers customer questions, checks live database availability, and books reservations without human intervention."
    },
    {
      q: "What makes eeveai different from standard Voice AI tools?",
      a: "Standard Voice AI simply transcribes and answers calls. eeveai acts as a Workforce Intelligence agent: checking live database capacity, enforcing company policy rules, writing transactions directly to system of record databases (PMS, CRM, EHR, ERP), and delivering verified proof-of-work logs."
    },
    {
      q: "Which regions do eeveai AI Voice Agents serve?",
      a: "eeveai is based in the UAE with R&D out of Trivandrum, India, and operations in Dubai. We deploy multi-lingual AI Voice Agents and AI Employees for enterprise clients across India, Dubai, the UAE, and the wider MEASA region."
    },
    {
      q: "Can eeveai AI Voice Agents integrate with our existing CRM and PMS databases?",
      a: "Yes. eeveai is built to interface directly with existing PMS, CRM, ERP, EHR, and calendar databases of record via secure APIs, acting as the intelligent execution layer."
    },
    {
      q: "Do eeveai AI Employees replace human staff?",
      a: "No. eeveai AI Employees absorb repetitive operational tasks—like phone answering, hold-code checking, and routine data entry—so human teams can focus on high-value guest relations and complex escalations."
    }
  ];

  return (
    <section id="faq" className="bg-transparent py-16 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Editorial Heading */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className="section-label mb-3 sm:mb-4 block">
            RESOURCES
          </span>
          <h2 className="section-heading text-balance mb-6 sm:mb-8">
            Frequently Asked <span className="text-[#A31D1D] dark:text-[#FBBF24] font-extrabold">Questions</span>
          </h2>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur={true}
            baseRotation={3}
            blurStrength={10}
            textClassName="editorial-statement block"
            wordAnimationEnd="bottom+=10% bottom"
          >
            Technical answers regarding deployment, verification, security architecture, and system integration.
          </ScrollReveal>
        </div>

        {/* Premium Accordion - No borders, smooth expansion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="card-title text-left pr-4 group-hover:text-[#A31D1D] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A7A7A] transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-[#A31D1D]" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="card-body text-balance">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
