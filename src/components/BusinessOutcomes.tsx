import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, CheckCircle, Clock, Shield, Workflow } from "lucide-react";

// Helper Counter component for animating numbers on view
const AnimatedNumber: React.FC<{ value: number; decimals?: number; suffix?: string; prefix?: string }> = ({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        setCount(end);
        return;
      }
      const progress = elapsedTime / duration;
      // Ease out quad formula
      const easeOutProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easeOutProgress;
      setCount(currentVal);
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const BusinessOutcomes: React.FC = () => {
  const stats = [
    {
      value: 99.8,
      decimals: 1,
      suffix: "%",
      label: "Verification Accuracy",
      desc: "Zero hallucination rate backed by double verification.",
      icon: Shield,
    },
    {
      value: 2,
      decimals: 0,
      prefix: "< ",
      suffix: " Seconds",
      label: "Response Time",
      desc: "Telephony answering and database sync execution.",
      icon: Clock,
    },
    {
      value: 24,
      decimals: 0,
      suffix: "/7",
      label: "Availability",
      desc: "Constant coverage during holiday peaks and night shifts.",
      icon: Phone,
    },
    {
      value: 100,
      decimals: 0,
      suffix: "%",
      label: "Chain Of Custody",
      desc: "Every step logged to the immutable database ledger.",
      icon: CheckCircle,
    },
    {
      label: "Workflow Capacity",
      valueText: "Unlimited",
      labelSub: "Concurrent Capacity",
      desc: "Handles hundreds of concurrent conversations instantly.",
      icon: Workflow,
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-b border-[#ECECEC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#E53935] uppercase block mb-4">
            Operational Audit
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-[1.1] text-balance mb-6">
            Business Performance. <br />
            Measured Continuously.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal">
            EEVE doesn't just route calls—it handles operations. Below is a live extract of executive key performance indicators, measured across core channels with complete certainty.
          </p>
        </div>

        {/* Large Counting Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-24">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white border border-[#ECECEC] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#D5D5D5] transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAFAFA] border border-[#ECECEC] flex items-center justify-center text-[#E53935] mb-6">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[#111111] mb-2">
                    {stat.valueText ? (
                      stat.valueText
                    ) : (
                      <AnimatedNumber
                        value={stat.value!}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    )}
                  </h3>
                  <h4 className="text-xs font-sans font-bold text-[#111111] tracking-wide uppercase mb-3">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-[#666666] leading-relaxed font-sans font-normal border-t border-[#ECECEC] pt-4 mt-4">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mockup Executive Dashboard (Vercel/Palantir aesthetic) */}
        <div className="bg-white border border-[#ECECEC] rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row min-h-[580px]">
          
          {/* Dashboard Left Sidebar */}
          <div className="w-full lg:w-56 border-r border-[#ECECEC] bg-[#FAFAFA] p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {/* Profile Card */}
              <div className="flex items-center gap-3 pb-6 border-b border-[#ECECEC]">
                <div className="w-8 h-8 rounded bg-[#E53935] flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm">
                  LT
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-[#111111] leading-tight">
                    Lemon Tree Premier
                  </h4>
                  <span className="text-[9px] font-mono text-[#666666]/70 block">
                    Hospitality · Trivandrum
                  </span>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="flex flex-col gap-1 text-xs font-sans font-semibold">
                <span className="px-3 py-2 bg-white text-[#111111] border border-[#ECECEC] rounded-md shadow-sm cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" />
                  Overview
                </span>
                <span className="px-3 py-2 text-[#666666] hover:text-[#111111] hover:bg-white/50 rounded-md cursor-pointer flex items-center gap-2 transition-colors duration-200">
                  Calls
                </span>
                <span className="px-3 py-2 text-[#666666] hover:text-[#111111] hover:bg-white/50 rounded-md cursor-pointer flex items-center gap-2 transition-colors duration-200">
                  Bookings
                </span>
                <span className="px-3 py-2 text-[#666666] hover:text-[#111111] hover:bg-white/50 rounded-md cursor-pointer flex items-center gap-2 transition-colors duration-200">
                  Logs
                </span>
                <span className="px-3 py-2 text-[#666666] hover:text-[#111111] hover:bg-white/50 rounded-md cursor-pointer flex items-center gap-2 transition-colors duration-200">
                  Settings
                </span>
              </div>
            </div>

            <div className="border-t border-[#ECECEC] pt-6 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#666666]">
                <span>EEVE STATUS</span>
                <span className="text-[#0F9D58] font-bold">ONLINE</span>
              </div>
              <div className="w-full bg-[#ECECEC] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0F9D58] w-[92.8%] h-full rounded-full" />
              </div>
              <span className="text-[8px] font-mono text-[#666666]/60 leading-none block">
                92.8% Resolved without Human
              </span>
            </div>
          </div>

          {/* Dashboard Main Content */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-8">
            
            {/* Metric headers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-4 rounded-xl">
                <span className="text-[9px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
                  CALLS HANDLED
                </span>
                <div className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
                  1,284
                </div>
                <span className="text-[10px] font-mono text-[#0F9D58] font-bold">
                  +18% vs Last Month
                </span>
              </div>
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-4 rounded-xl">
                <span className="text-[9px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
                  ROOMS HELD
                </span>
                <div className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
                  218
                </div>
                <span className="text-[10px] font-mono text-[#0F9D58] font-bold">
                  +23% vs Last Month
                </span>
              </div>
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-4 rounded-xl">
                <span className="text-[9px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
                  DINING RESERVED
                </span>
                <div className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
                  173
                </div>
                <span className="text-[10px] font-mono text-[#0F9D58] font-bold">
                  +12% vs Last Month
                </span>
              </div>
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-4 rounded-xl">
                <span className="text-[9px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
                  HUMAN HANDOFFS
                </span>
                <div className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
                  92
                </div>
                <span className="text-[10px] font-mono text-[#E53935] font-bold">
                  14% deflection rate
                </span>
              </div>
            </div>

            {/* Dashboard Middle Section: Chart & Activity logs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
              {/* Call Volume Chart Mock */}
              <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#ECECEC] p-5 rounded-2xl flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between border-b border-[#ECECEC] pb-3 mb-4">
                  <span className="text-[10px] font-mono text-[#111111] font-bold uppercase tracking-wider">
                    CALL VOLUME · 24H
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">
                    Peak 18:00 · 71 calls
                  </span>
                </div>
                
                {/* Visual Line Chart (SVG) */}
                <div className="w-full h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E53935" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" y1="20" x2="500" y2="20" stroke="#ECECEC" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="500" y2="50" stroke="#ECECEC" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#ECECEC" strokeWidth="0.5" strokeDasharray="3 3" />
                    
                    {/* Area fill */}
                    <path
                      d="M 0 90 Q 50 85 100 80 T 200 70 T 300 40 T 400 15 T 450 75 T 500 90 L 500 100 L 0 100 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line path */}
                    <path
                      d="M 0 90 Q 50 85 100 80 T 200 70 T 300 40 T 400 15 T 450 75 T 500 90"
                      fill="none"
                      stroke="#E53935"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-[#666666] pt-2">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>

              {/* Chain of Custody mini Feed */}
              <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#ECECEC] p-5 rounded-2xl flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between border-b border-[#ECECEC] pb-3 mb-4">
                  <span className="text-[10px] font-mono text-[#111111] font-bold uppercase tracking-wider">
                    CHAIN OF CUSTODY (LIVE)
                  </span>
                  <span className="text-[9px] font-mono text-[#0F9D58] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58] animate-pulse" />
                    APPEND-ONLY
                  </span>
                </div>

                <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[140px] pr-1">
                  <div className="flex items-start justify-between text-xs border-b border-[#ECECEC]/60 pb-2">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[9px] text-[#666666] mt-0.5">14:38</span>
                      <div>
                        <span className="font-sans font-bold text-[#111111]">HOLD-2291</span>
                        <p className="text-[10px] text-[#666666]">Room hold → finalise... (Front desk)</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#0F9D58] font-bold bg-[#0F9D58]/5 px-1.5 py-0.5 rounded border border-[#0F9D58]/10">
                      SENT
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs border-b border-[#ECECEC]/60 pb-2">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[9px] text-[#666666] mt-0.5">13:55</span>
                      <div>
                        <span className="font-sans font-bold text-[#111111]">DIN-1043</span>
                        <p className="text-[10px] text-[#666666]">Table reserved → confirm (F&B)</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#0F9D58] font-bold bg-[#0F9D58]/5 px-1.5 py-0.5 rounded border border-[#0F9D58]/10">
                      SENT
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[9px] text-[#666666] mt-0.5">12:20</span>
                      <div>
                        <span className="font-sans font-bold text-[#111111]">REQ-7782</span>
                        <p className="text-[10px] text-[#666666]">Early check-in request (Front desk)</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#0F9D58] font-bold bg-[#0F9D58]/5 px-1.5 py-0.5 rounded border border-[#0F9D58]/10">
                      SENT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="border-t border-[#ECECEC] pt-4 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-[#666666]/60 gap-4">
              <span>Lemon Tree Premier · Last 30 days</span>
              <span className="text-[#E53935] font-bold tracking-widest uppercase">
                EEVE — WE SELL CERTAINTY
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
