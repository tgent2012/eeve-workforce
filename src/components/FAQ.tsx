import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Workforce Intelligence?",
      a: "Workforce Intelligence is a new category of enterprise software that transforms raw speech data into verified database actions. Instead of simply generating chat transcripts, EEVE executes operations directly into systems of record under custom policy rules."
    },
    {
      q: "How is EEVE different from Voice AI?",
      a: "Voice AI simply transcribes and answers calls. EEVE acts as a workforce intelligence agent: checking live database capacity, enforcing company policies, creating transaction folios, and scheduling downstream workflows automatically."
    },
    {
      q: "Can EEVE integrate with our existing systems?",
      a: "Yes. EEVE is built to interface directly with existing PMS, CRM, ERP, and calendar databases of record via secure APIs, acting as the intelligent orchestration layer."
    },
    {
      q: "Does EEVE replace our employees?",
      a: "No. EEVE absorbs repetitive operational tasks—like checking hold codes or data entry—so human teams can focus on high-value guest relations and complex escalations."
    },
    {
      q: "How long does deployment take?",
      a: "A typical EEVE instance is calibrated and deployed within 14 business days, complete with verified policy limits and system integration tests."
    },
    {
      q: "Is EEVE secure?",
      a: "Yes. EEVE enforces strict enterprise security protocols, including multi-factor verification prompts, custom permission guardrails, audit logging, and full encryption of data in transit and at rest."
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
            Frequently Asked <span className="text-[#A31D1D] !text-[#A31D1D] font-extrabold">Questions</span>
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
