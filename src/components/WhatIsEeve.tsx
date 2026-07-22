import React from "react";
import { BlurText } from "./ui/blur-text";

export const WhatIsEeve: React.FC = () => {
  const quoteTokens = [
    { text: '"We', highlight: false },
    { text: "don't", highlight: false },
    { text: "believe", highlight: false },
    { text: "businesses", highlight: false },
    { text: "should", highlight: false },
    { text: "adapt", highlight: true },
    { text: "to", highlight: true },
    { text: "AI.", highlight: true },
    { text: "We", highlight: false, lineBreakBefore: true },
    { text: "believe", highlight: false },
    { text: "AI", highlight: true },
    { text: "should", highlight: true },
    { text: "adapt", highlight: true },
    { text: "to", highlight: false },
    { text: 'businesses."', highlight: false }
  ];

  return (
    <section id="about" className="relative bg-transparent py-16 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ScrollReveal Transition Header */}
        <div className="mb-16 sm:mb-20 lg:mb-28 text-left max-w-5xl">
          <span className="section-label mb-3 sm:mb-4 block">
            ABOUT EEVE
          </span>
          <BlurText
            text="Businesses don't struggle because they lack technology. They struggle because the technology they rely on often forces people to adapt to systems instead of allowing systems to adapt to people."
            delay={30}
            animateBy="words"
            direction="bottom"
            className="editorial-statement block text-left"
          />
        </div>

        {/* Section Label & Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-16 sm:mb-20 lg:mb-24">
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            <p className="editorial-pullquote text-left">
              Every <span className="text-[#A31D1D] font-bold">EEVE</span> deployment begins by understanding how your organisation works before intelligence is introduced.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-12 flex flex-col gap-4 sm:gap-6 max-w-2xl text-left">
            <p className="body-copy">
              At EEVE, we believe intelligence should fit naturally into the way organisations already operate. Every business has its own way of serving customers, managing teams and running daily operations. That's why we never begin with technology—we begin by understanding your business.
            </p>
            <p className="body-copy">
              For us, Workforce Intelligence starts with the conversations your business has every day. That's why every EEVE deployment is built around Voice AI that works naturally alongside your people, your processes and your customers.
            </p>
            <p className="body-copy">
              Every solution we create is thoughtfully designed around your people, your processes and your customer experience, integrating seamlessly into the way your organisation already works.
            </p>
            <p className="body-copy">
              From discovery and deployment to optimisation and long-term support, we work as a technology partner—not just a software provider—helping businesses adopt AI with confidence while keeping people at the centre of every experience.
            </p>
          </div>
        </div>

        {/* Large Quote at End */}
        <div className="pt-12 sm:pt-16 lg:pt-24 flex justify-center text-center">
          <BlurText
            tokens={quoteTokens}
            delay={60}
            animateBy="words"
            direction="bottom"
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-[#111111] dark:text-white tracking-tight max-w-5xl mx-auto leading-tight justify-center flex-wrap"
            highlightClassName="text-[#A31D1D] dark:text-[#F87171] font-extrabold"
          />
        </div>

      </div>
    </section>
  );
};
