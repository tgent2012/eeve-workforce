import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurText } from "./ui/blur-text";

export const IndustryBlueprints: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  const headingTokens = [
    { text: "Tailored", highlight: false },
    { text: "Industry", highlight: false },
    { text: "Blueprints.", highlight: true }
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section id="industries" className="relative w-full bg-transparent py-32 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden select-none text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl">
          <span className="section-label mb-4 block">
            BUILT AROUND YOUR BUSINESS
          </span>
          <BlurText
            tokens={headingTokens}
            delay={40}
            animateBy="words"
            direction="bottom"
            className="section-heading mb-8 flex-wrap"
            highlightClassName="text-[#A31D1D] font-extrabold"
          />
          <div className="flex flex-col gap-6 max-w-2xl text-left">
            <p className="editorial-statement leading-tight">
              Every industry works differently. EEVE is designed to adapt.
            </p>
            <p className="body-copy">
              From hospitality and healthcare to automotive and professional services, every deployment is tailored to your workflows, your policies and the way your business operates.
            </p>
          </div>
        </div>

        {/* HoverExpand Accordion Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative py-4"
        >
          <div className={`flex ${isMobile ? "flex-col w-full gap-3" : "w-full items-center justify-center gap-2"}`}>
            {industries.map((ind, index) => {
              const isActive = activeImage === index;
              return (
                <motion.div
                  key={ind.name}
                  className="relative cursor-pointer overflow-hidden rounded-[24px] border border-neutral-200/50 shadow-sm hover:shadow-md transition-shadow"
                  animate={{
                    width: isMobile ? "100%" : (isActive ? "32rem" : "7rem"),
                    height: isMobile ? (isActive ? "16rem" : "6rem") : "30rem",
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveImage(index)}
                  onHoverStart={() => !isMobile && setActiveImage(index)}
                >
                  {/* Backdrop Gradient Overlay (Always visible on mobile to maintain contrast, transitions on desktop) */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : (isMobile ? "opacity-60" : "opacity-0")
                  }`} />

                  {/* Text Overlay Details */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white z-25 pointer-events-none">
                    {/* Inactive state indicator for desktop / inactive title for mobile */}
                    {!isActive && !isMobile && (
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-base font-sans font-bold tracking-tight text-white/80 leading-none origin-bottom-left -rotate-90 whitespace-nowrap absolute bottom-12 left-1/2 -translate-x-1/2"
                      >
                        {ind.name}
                      </motion.h3>
                    )}

                    {/* Inactive state for mobile (simple row label) */}
                    {!isActive && isMobile && (
                      <div className="w-full flex items-center justify-between pointer-events-none">
                        <h3 className="text-lg font-sans font-bold tracking-tight text-white">
                          {ind.name}
                        </h3>
                        <span className="text-[10px] font-mono text-white/50 font-bold">
                          {ind.code.split(" / ")[0]}
                        </span>
                      </div>
                    )}

                    {/* Active Expanded Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <span className="font-mono text-[9px] text-[#E53935] font-bold uppercase tracking-widest block mb-1">
                            {ind.code}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white leading-none">
                            {ind.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/70 mt-2 font-sans font-normal leading-relaxed max-w-[320px]">
                            {ind.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

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
