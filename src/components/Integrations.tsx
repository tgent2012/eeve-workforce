"use client";

import React, { forwardRef, useRef } from "react";
import {
  IconDatabase,
  IconCloud,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div className="relative group flex items-center justify-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-slate-200/80 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 p-2.5 sm:p-3 shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-110 cursor-pointer",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] font-mono font-medium text-slate-700 dark:text-neutral-200 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-neutral-700 pointer-events-none whitespace-nowrap shadow-xs z-30">
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export const Integrations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Left side refs
  const div1Ref = useRef<HTMLDivElement>(null); // WhatsApp
  const div2Ref = useRef<HTMLDivElement>(null); // Slack
  const div3Ref = useRef<HTMLDivElement>(null); // Salesforce
  const div4Ref = useRef<HTMLDivElement>(null); // SMS Gateway

  // Center ref
  const centerRef = useRef<HTMLDivElement>(null); // EEVE AI Favicon

  // Right side refs
  const div5Ref = useRef<HTMLDivElement>(null); // Gmail
  const div6Ref = useRef<HTMLDivElement>(null); // Calendar
  const div7Ref = useRef<HTMLDivElement>(null); // Opera PMS / EHR
  const div8Ref = useRef<HTMLDivElement>(null); // n8n Webhooks

  return (
    <section
      id="integrations"
      className="relative w-full bg-transparent overflow-hidden select-none py-16 sm:py-24 px-5 sm:px-10"
    >
      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Section Label */}
        <span className="section-label mb-3 sm:mb-4 block">
          ENTERPRISE INTEGRATIONS
        </span>

        {/* Section Heading */}
        <h2 className="section-heading text-balance mb-6 sm:mb-8">
          Connects with your{" "}
          <span className="text-[#A31D1D] dark:text-[#FBBF24] font-extrabold">
            Tech Stack.
          </span>
        </h2>

        {/* Body Copy */}
        <p className="body-copy max-w-xl text-balance mb-8 sm:mb-12">
          EEVE works alongside the software your teams already rely on. No
          manual workflows, no database migration, and no API friction.
        </p>

        {/* Animated Beam Visual Container */}
        <div
          ref={containerRef}
          className="relative flex h-[380px] sm:h-[440px] w-full max-w-3xl items-center justify-between overflow-hidden rounded-3xl bg-white/40 dark:bg-neutral-900/40 border border-white/60 dark:border-neutral-800 p-6 sm:p-12 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.06),inset_0_2px_8px_rgba(255,255,255,0.7)]"
        >
          {/* Glass Top Edge Sweep */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

          {/* Left Column (4 Nodes stacked vertically) */}
          <div className="flex flex-col justify-between h-full z-10">
            <Circle ref={div1Ref} label="WhatsApp">
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            </Circle>
            <Circle ref={div2Ref} label="Slack">
              <img src="/slack-icon.png" alt="Slack" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            </Circle>
            <Circle ref={div3Ref} label="Salesforce">
              <IconCloud className="w-7 h-7 sm:w-8 sm:h-8 text-[#009EDB]" />
            </Circle>
            <Circle ref={div4Ref} label="SMS Gateway">
              <img src="/sms-icon.png" alt="SMS Gateway" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            </Circle>
          </div>

          {/* Center EEVE AI Favicon Node (Dead Center) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Circle
              ref={centerRef}
              label="EEVE AI Engine"
              className="size-16 sm:size-20 border-2 border-[#10B981] dark:border-[#34D399] bg-white dark:bg-neutral-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] dark:shadow-[0_0_35px_rgba(52,211,153,0.35)]"
            >
              {/* EEVE AI Custom SVG Favicon Icon with signature red dot */}
              <svg
                width="44"
                height="44"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 sm:w-10 sm:h-10"
              >
                <rect
                  x="20"
                  y="30"
                  width="40"
                  height="14"
                  rx="7"
                  fill="currentColor"
                  className="text-[#111111] dark:text-white"
                />
                <circle
                  cx="74"
                  cy="37"
                  r="7"
                  fill="#E53935"
                  className="dark:fill-[#FBBF24]"
                />
                <rect
                  x="20"
                  y="50"
                  width="60"
                  height="14"
                  rx="7"
                  fill="currentColor"
                  className="text-[#111111] dark:text-white"
                />
                <rect
                  x="20"
                  y="70"
                  width="30"
                  height="14"
                  rx="7"
                  fill="currentColor"
                  className="text-[#111111] dark:text-white"
                />
              </svg>
            </Circle>
          </div>

          {/* Right Column (4 Nodes stacked vertically) */}
          <div className="flex flex-col justify-between h-full z-10">
            <Circle ref={div5Ref} label="Gmail">
              <img src="/mail-icon.png" alt="Gmail" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            </Circle>
            <Circle ref={div6Ref} label="Calendar">
              <img src="/calendar-icon.png" alt="Calendar" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            </Circle>
            <Circle ref={div7Ref} label="Opera PMS / EHR">
              <IconDatabase className="w-7 h-7 sm:w-8 sm:h-8 text-[#718096]" />
            </Circle>
            <Circle ref={div8Ref} label="n8n Webhooks">
              <IconTerminal2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#E28743]" />
            </Circle>
          </div>

          {/* Animated Light Green Beams linking all 8 outer nodes to Center EEVE AI node */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={centerRef}
            curvature={-60}
            endYOffset={-12}
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={centerRef}
            curvature={-20}
            endYOffset={-4}
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={centerRef}
            curvature={20}
            endYOffset={4}
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={centerRef}
            curvature={60}
            endYOffset={12}
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={centerRef}
            curvature={-60}
            endYOffset={-12}
            reverse
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={centerRef}
            curvature={-20}
            endYOffset={-4}
            reverse
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={centerRef}
            curvature={20}
            endYOffset={4}
            reverse
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div8Ref}
            toRef={centerRef}
            curvature={60}
            endYOffset={12}
            reverse
            gradientStartColor="#10B981"
            gradientStopColor="#4ADE80"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
