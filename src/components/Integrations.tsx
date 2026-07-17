"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  IconBrandWhatsapp,
  IconBrandSlack,
  IconCalendar,
  IconMail,
  IconDatabase,
  IconCloud,
  IconSettings,
  IconMessage2,
  IconTerminal2,
} from "@tabler/icons-react";

interface TechIconProps {
  icon: React.ComponentType<any>;
  color: string;
  label: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
  isMobile: boolean;
}

const TechIcon = ({
  icon: IconComponent,
  color,
  label,
  index,
  centerIndex,
  scrollYProgress,
  isMobile,
}: TechIconProps) => {
  const distanceFromCenter = index - centerIndex;

  // Horizontal convergence (narrower offset on mobile to prevent overflow)
  const x = useTransform(
    scrollYProgress,
    [0, 0.7],
    [distanceFromCenter * (isMobile ? 32 : 75), 0],
  );
  // Vertical divergence that resolves to baseline
  const y = useTransform(
    scrollYProgress,
    [0, 0.7],
    [-Math.abs(distanceFromCenter) * (isMobile ? 8 : 20), 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.7], [isMobile ? 0.7 : 0.8, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.7],
    [distanceFromCenter * 15, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7],
    [0.2, 1, 1]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotate,
        opacity,
        transformOrigin: "center",
      }}
      className="inline-flex flex-col items-center justify-center p-2.5 sm:p-5 bg-white border border-[#EAEAEA] rounded-[18px] sm:rounded-[24px] shadow-sm relative group cursor-pointer hover:border-neutral-300 transition-colors duration-300 mx-1 sm:mx-2"
    >
      <IconComponent className="h-5 w-5 sm:h-9 sm:w-9" style={{ color }} />
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] font-bold tracking-widest text-[#6B7280] uppercase font-mono whitespace-nowrap bg-white border border-[#EAEAEA] px-2 py-1 rounded shadow-sm z-20 pointer-events-none">
        {label}
      </span>
    </motion.div>
  );
};

export const Integrations = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const techStack = [
    { icon: IconBrandWhatsapp, color: "#25D366", label: "WhatsApp" },
    { icon: IconMail, color: "#EA4335", label: "Gmail" },
    { icon: IconCloud, color: "#009EDB", label: "Salesforce" },
    { icon: IconCalendar, color: "#4285F4", label: "Calendar" },
    // Center node is EEVE Brand Node
    { icon: IconSettings, color: "#A31D1D", label: "EEVE AI Engine" },
    { icon: IconBrandSlack, color: "#4A154B", label: "Slack" },
    { icon: IconDatabase, color: "#718096", label: "Opera PMS / EHR" },
    { icon: IconMessage2, color: "#3182CE", label: "SMS Gateway" },
    { icon: IconTerminal2, color: "#E28743", label: "n8n Webhooks" },
  ];

  const centerIndex = Math.floor(techStack.length / 2);

  return (
    <div
      ref={targetRef}
      id="integrations"
      className={`relative w-full bg-transparent overflow-hidden select-none ${
        isMobile ? "py-24" : "min-h-[150vh]"
      }`}
    >
      {isMobile ? (
        <div className="w-full flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#A31D1D] uppercase block">
              ENTERPRISE INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] leading-[1.05]">
              Connects with your <span className="text-[#A31D1D]">Tech Stack.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] font-sans font-normal leading-relaxed max-w-xl text-balance">
              EEVE works alongside the software your teams already rely on. No manual workflows, no database migration, and no API friction.
            </p>

            {/* Static Converged Carousel Row */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 py-6 relative w-full overflow-hidden scale-[0.72] xs:scale-75 sm:scale-100 origin-center">
              <Bracket className="h-10 sm:h-24 text-neutral-300 flex-shrink-0" />
              
              <div className="flex items-center justify-center overflow-visible py-4">
                {techStack.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center justify-center p-2.5 bg-white border border-[#EAEAEA] rounded-[18px] shadow-xs mx-0.5"
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                ))}
              </div>

              <Bracket className="h-10 sm:h-24 scale-x-[-1] text-neutral-300 flex-shrink-0" />
            </div>

            <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-neutral-400 uppercase mt-4">
              Integrations connect automatically
            </span>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col gap-6 items-center overflow-hidden">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#A31D1D] uppercase block">
              ENTERPRISE INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] leading-[1.05]">
              Connects with your <span className="text-[#A31D1D]">Tech Stack.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] font-sans font-normal leading-relaxed max-w-xl text-balance">
              EEVE works alongside the software your teams already rely on. No manual workflows, no database migration, and no API friction.
            </p>

            {/* Bracket wrapper & Converging Carousel Icons */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 py-12 relative w-full overflow-hidden scale-[0.72] xs:scale-75 sm:scale-100 origin-center">
              <Bracket className="h-10 sm:h-24 text-neutral-300 flex-shrink-0" />
              
              <div className="flex items-center justify-center overflow-visible py-4">
                {techStack.map((item, index) => (
                  <TechIcon
                    key={index}
                    icon={item.icon}
                    color={item.color}
                    label={item.label}
                    index={index}
                    centerIndex={centerIndex}
                    scrollYProgress={scrollYProgress}
                    isMobile={isMobile}
                  />
                ))}
              </div>

              <Bracket className="h-10 sm:h-24 scale-x-[-1] text-neutral-300 flex-shrink-0" />
            </div>

            <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-neutral-400 uppercase mt-4">
              Scroll to see integrations connect
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
export default Integrations;
