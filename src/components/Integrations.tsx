"use client";

import React, { forwardRef, useRef } from "react";
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
  const div1Ref = useRef<HTMLDivElement>(null); // Google Drive
  const div2Ref = useRef<HTMLDivElement>(null); // Notion
  const div3Ref = useRef<HTMLDivElement>(null); // WhatsApp
  const div4Ref = useRef<HTMLDivElement>(null); // Center EEVE AI Favicon
  const div5Ref = useRef<HTMLDivElement>(null); // Google Docs
  const div6Ref = useRef<HTMLDivElement>(null); // Zapier
  const div7Ref = useRef<HTMLDivElement>(null); // Messenger

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
          className="relative flex h-[360px] sm:h-[420px] w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl bg-white/40 dark:bg-neutral-900/40 border border-white/60 dark:border-neutral-800 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.06),inset_0_2px_8px_rgba(255,255,255,0.7)]"
        >
          {/* Glass Top Edge Sweep */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

          {/* 3-Column Node Layout */}
          <div className="flex size-full max-h-[280px] sm:max-h-[320px] max-w-xl flex-col items-stretch justify-between gap-6 sm:gap-10 relative z-10">
            {/* Top Row */}
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref} label="Google Drive">
                <Icons.googleDrive />
              </Circle>
              <Circle ref={div5Ref} label="Google Docs">
                <Icons.googleDocs />
              </Circle>
            </div>

            {/* Middle Row */}
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref} label="Notion">
                <Icons.notion />
              </Circle>

              {/* Center Node: EEVE AI Favicon */}
              <Circle
                ref={div4Ref}
                label="EEVE AI Engine"
                className="size-16 sm:size-20 border-2 border-[#A31D1D] dark:border-[#FBBF24] bg-white dark:bg-neutral-950 shadow-[0_0_35px_rgba(163,29,29,0.35)] dark:shadow-[0_0_35px_rgba(251,191,36,0.35)]"
              >
                {/* EEVE AI Custom SVG Favicon Icon */}
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
                    fill="#A31D1D"
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

              <Circle ref={div6Ref} label="Zapier">
                <Icons.zapier />
              </Circle>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref} label="WhatsApp">
                <Icons.whatsapp />
              </Circle>
              <Circle ref={div7Ref} label="Messenger">
                <Icons.messenger />
              </Circle>
            </div>
          </div>

          {/* Animated Beams linking outer nodes to Center EEVE AI node */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            reverse
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            reverse
            gradientStartColor="#A31D1D"
            gradientStopColor="#F06D5F"
          />
        </div>
      </div>
    </section>
  );
};

/* SVG Icons Dictionary */
const Icons = {
  notion: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
        className="dark:fill-white"
      />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
        fill="#4285F4"
      />
      <polygon
        fill="#A1C2FA"
        points="29.375 0 29.375 17.727 47 17.727"
      />
      <path
        d="M11.75 32.5h23.5v2.95H11.75zM11.75 38.4h23.5v2.95H11.75zM11.75 44.3h23.5v2.95H11.75zM11.75 50.2h17.625v2.95H11.75z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  zapier: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 244 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
        fill="#201515"
        className="dark:fill-white"
      />
      <path
        d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 84.8206 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297Z"
        fill="#201515"
        className="dark:fill-white"
      />
      <path
        d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
        fill="#201515"
        className="dark:fill-white"
      />
      <path
        d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
        fill="#201515"
        className="dark:fill-white"
      />
      <path
        d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147Z"
        fill="#201515"
        className="dark:fill-white"
      />
      <path d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z" fill="#FF4F00" />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <radialGradient
        id="messengerGradient"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#messengerGradient)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
};

export default Integrations;
