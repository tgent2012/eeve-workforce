import React from "react";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

export const WhatIsEeve: React.FC = () => {
  return (
    <section id="about" className="relative bg-transparent py-32 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ScrollReveal Transition Header */}
        <div className="mb-28 text-left max-w-5xl">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#A31D1D] uppercase block mb-6">
            ABOUT EEVE
          </span>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur={true}
            baseRotation={3}
            blurStrength={10}
            textClassName="font-sans font-medium text-3xl sm:text-5xl lg:text-6xl text-[#A31D1D] leading-tight tracking-tight block"
            wordAnimationEnd="bottom+=10% bottom"
          >
            Businesses don't struggle because they lack technology. They struggle because the technology they rely on often forces people to adapt to systems instead of allowing systems to adapt to people.
          </ScrollReveal>
        </div>

        {/* Section Label & Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#111111] leading-[1.05] text-balance">
              <span className="text-[#A31D1D]">Technology</span> should adapt to the way people work.
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pl-12 flex flex-col gap-6 text-base sm:text-lg text-[#111111] font-sans font-normal leading-relaxed text-balance">
            <p>
              At EEVE, we believe intelligence should fit naturally into the way organisations already operate. Every business has its own way of serving customers, managing teams and running daily operations. That's why we never begin with technology—we begin by understanding your business.
            </p>
            <p>
              Every solution we create is thoughtfully designed around your people, your processes and your customer experience, integrating seamlessly into the way your organisation already works.
            </p>
            <p>
              From discovery and deployment to optimisation and long-term support, we work as a technology partner—not just a software provider—helping businesses adopt AI with confidence while keeping people at the centre of every experience.
            </p>
          </div>
        </div>

        {/* Large Quote at End */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2 }}
          className="pt-24 text-center"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-sans font-normal text-[#111111] tracking-tight max-w-5xl mx-auto leading-tight text-balance">
            "We don't believe businesses should adapt to AI. <br />
            <span className="text-[#A31D1D] font-bold">We believe AI should adapt to businesses.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
};
