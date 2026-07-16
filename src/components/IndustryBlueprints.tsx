import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const IndustryBlueprints: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  const industries = [
    {
      name: "Hospitality",
      image: "/assets/hospitality_swap.jpg",
      code: "01 / CAPACITIES & PMS",
      desc: "Room holds, dining reservations, and guest intake.",
    },
    {
      name: "Healthcare",
      image: "/assets/healthcare_swap.jpg",
      code: "02 / SCHEDULING & EHR",
      desc: "Patient scheduling, specialty referrals, and intake records.",
    },
    {
      name: "Retail",
      image: "/assets/retail_swap.jpg",
      code: "03 / DISPATCH & SHOPIFY",
      desc: "Order dispatch status, payment tracking, and inventory sync.",
    },
    {
      name: "Automotive",
      image: "/assets/automotive_swap.jpg",
      code: "04 / LEADS & SHOWROOM",
      desc: "Test drive booking, lead logging, and CRM integration.",
    },
    {
      name: "Real Estate",
      image: "/assets/real_estate_swap.jpg",
      code: "05 / LEASING & MLS",
      desc: "Viewing appointment schedules, lead follow-ups, and portfolio sync.",
    },
    {
      name: "Education",
      image: "/assets/education_swap.jpg",
      code: "06 / ENROLMENT & DATABASE",
      desc: "Course registration details, enquiry routing, and student record logging.",
    },
    {
      name: "Professional Services",
      image: "/assets/professional_swap.jpg",
      code: "07 / CLIENTS & CALENDAR",
      desc: "Brief captures, specialist routing, and director calendars.",
    }
  ];

  return (
    <section id="industries" className="relative w-full bg-transparent py-32 px-6 sm:px-12 md:px-24 overflow-hidden select-none text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#A31D1D] uppercase block mb-4">
            BUILT AROUND YOUR BUSINESS
          </span>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight text-[#111111] leading-[1.05] text-balance mb-6">
            Tailored Industry Blueprints.
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-sans font-normal max-w-xl">
            Discover how EEVE automates repetitive coordination and logs transactions directly into core systems of record across seven leading industries.
          </p>
        </div>

        {/* HoverExpand Accordion Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative overflow-x-auto no-scrollbar py-4"
        >
          <div className="flex min-w-max md:min-w-0 md:w-full items-center justify-start md:justify-center gap-2">
            {industries.map((ind, index) => {
              const isActive = activeImage === index;
              return (
                <motion.div
                  key={ind.name}
                  className="relative cursor-pointer overflow-hidden rounded-[24px] border border-neutral-200/50 shadow-sm hover:shadow-md transition-shadow"
                  animate={{
                    width: isActive ? "32rem" : "7rem",
                    height: "30rem",
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveImage(index)}
                  onHoverStart={() => setActiveImage(index)}
                >
                  {/* Backdrop Gradient Overlay (Only visible when active) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10"
                      />
                    )}
                  </AnimatePresence>

                  {/* Text Overlay Details (Only visible when active) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white z-25 pointer-events-none"
                      >
                        <span className="font-mono text-[9px] text-[#A31D1D] font-bold uppercase tracking-widest block mb-1">
                          {ind.code}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white leading-none">
                          {ind.name}
                        </h3>
                        <p className="text-xs text-white/70 mt-2 font-sans font-normal leading-relaxed max-w-[280px]">
                          {ind.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Industry Image */}
                  <img
                    src={ind.image}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    alt={ind.name}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer indicators */}
        <div className="w-full flex items-center justify-end">
          <div className="flex gap-2">
            {industries.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  activeImage === i ? "bg-[#A31D1D]" : "bg-[#E5E7EB]"
                }`} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default IndustryBlueprints;
