import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, ArrowUpRight, ArrowDownRight, Check
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { BlurText } from "./ui/blur-text";

export const VoiceToVerified: React.FC = () => {
  const pictureTokens = [
    { text: "Every", highlight: false },
    { text: "Conversation.", highlight: false },
    { text: "One", highlight: false, lineBreakBefore: true },
    { text: "Clear", highlight: false },
    { text: "Picture.", highlight: true }
  ];

  // Dashboard Live State Simulation
  const [callsHandled, setCallsHandled] = useState(1284);
  const [roomsHeld, setRoomsHeld] = useState(218);
  const [diningHeld, setDiningHeld] = useState(173);
  const [requestsCaptured, setRequestsCaptured] = useState(396);
  const [humanHandoffs, setHumanHandoffs] = useState(92);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Lists corresponding to PDF layout
  const [chainOfCustody, setChainOfCustody] = useState([
    { id: "coc-1", time: "14:38", code: "HOLD-2291", action: "Room hold ➔ finalise…", dest: "Front desk", hash: "a3f1·9c" },
    { id: "coc-2", time: "13:55", code: "DIN-1043", action: "Table reserved ➔ con…", dest: "F&B", hash: "7b20·e4" },
    { id: "coc-3", time: "12:20", code: "REQ-7782", action: "Early check-in reque…", dest: "Front desk", hash: "c5da·11" },
    { id: "coc-4", time: "11:47", code: "HOLD-2290", action: "Room hold ➔ finalise…", dest: "Front desk", hash: "9e08·a7" },
    { id: "coc-5", time: "10:31", code: "REQ-7781", action: "Custom cake enquiry", dest: "Pastry chef", hash: "2f6c·bd" },
    { id: "coc-6", time: "09:18", code: "MOD-0337", action: "Booking modified", dest: "Reservations", hash: "44a9·30" },
  ]);

  const [proofOfWork, setProofOfWork] = useState([
    { id: "pow-1", name: "Anita R.", time: "14:38", type: "Room hold", desc: "Deluxe · 24–26 Jun · 2 guests · read back & confirmed" },
    { id: "pow-2", name: "Vikram S.", time: "13:55", type: "Dining reservation", desc: "Citrus Café · 8:00 PM · party of 4 · confirmed" },
    { id: "pow-3", name: "Meera J.", time: "12:20", type: "Request captured", desc: "Early check-in · flagged, not promised · confirmed" },
    { id: "pow-4", name: "Rohit K.", time: "11:47", type: "Room hold", desc: "Premier Suite · 1–3 Jul · 2 guests · confirmed" },
    { id: "pow-5", name: "Fatima A.", time: "10:31", type: "Cake order", desc: "Anniversary · routed to pastry chef · confirmed" },
    { id: "pow-6", name: "Suresh P.", time: "09:18", type: "Booking change", desc: "LTP-4471 · checkout +1 day · recapped & confirmed" },
  ]);

  const [recentCalls, setRecentCalls] = useState([
    { id: "rc-1", time: "14:38", caller: "Anita R.", lang: "EN", intent: "Room booking", outcome: "Deluxe held, 24–26 Jun", duration: "3:12", status: "Notified" },
    { id: "rc-2", time: "13:55", caller: "Vikram S.", lang: "EN", intent: "Dining", outcome: "Citrus Café, party of 4", duration: "2:01", status: "Notified" },
    { id: "rc-3", time: "13:02", caller: "Priya N.", lang: "HI", intent: "Hotel info", outcome: "Check-in time answered", duration: "0:48", status: "Handled" },
    { id: "rc-4", time: "12:20", caller: "Meera J.", lang: "EN", intent: "Request", outcome: "Early check-in flagged", duration: "1:34", status: "Notified" },
    { id: "rc-5", time: "11:47", caller: "Rohit K.", lang: "EN", intent: "Room booking", outcome: "Premier Suite held", duration: "4:05", status: "Notified" },
    { id: "rc-6", time: "11:10", caller: "Arjun D.", lang: "TA", intent: "Events", outcome: "Banquet enquiry captured", duration: "2:48", status: "Notified" },
    { id: "rc-7", time: "10:31", caller: "Fatima A.", lang: "EN", intent: "Special order", outcome: "Anniversary cake ➔ pastry", duration: "1:57", status: "Notified" },
    { id: "rc-8", time: "09:42", caller: "Karthik V.", lang: "TA", intent: "Concierge", outcome: "Routed to manager", duration: "2:15", status: "Handed off" },
  ]);

  // Simulation Pool for live updates
  const newCallPool = [
    { caller: "Sanjay T.", lang: "EN", intent: "Room booking", outcome: "Suite held, 15-18 Jul", duration: "1:55", type: "room" },
    { caller: "Rachel M.", lang: "EN", intent: "Dining", outcome: "Table for 2 held, 8 PM", duration: "1:20", type: "dining" },
    { caller: "Anjali K.", lang: "HI", intent: "Request", outcome: "Extra pillows logged", duration: "0:50", type: "request" },
    { caller: "Devin B.", lang: "EN", intent: "Concierge", outcome: "Cab booked, 10 AM", duration: "2:10", type: "handoff" }
  ];

  const poolIndex = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const call = newCallPool[poolIndex.current];
      poolIndex.current = (poolIndex.current + 1) % newCallPool.length;

      // Update counters
      setCallsHandled(prev => prev + 1);
      if (call.type === "room") setRoomsHeld(prev => prev + 1);
      if (call.type === "dining") setDiningHeld(prev => prev + 1);
      if (call.type === "request") setRequestsCaptured(prev => prev + 1);
      if (call.type === "handoff") setHumanHandoffs(prev => prev + 1);

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      const codeStr = `${call.type === "room" ? "HOLD" : call.type === "dining" ? "DIN" : "REQ"}-${Math.floor(1000 + Math.random() * 9000)}`;
      const hashStr = Math.random().toString(16).substring(2, 6) + "·" + Math.random().toString(16).substring(2, 4);

      // Flash highlight / Toast message
      setToastMessage(`New Action: ${call.intent} by ${call.caller}`);
      setTimeout(() => setToastMessage(null), 3000);

      const uniqueId = Math.random().toString(36).substring(2, 9);

      // Append to Chain of Custody
      setChainOfCustody(prev => [
        { id: `coc-${uniqueId}`, time: timeStr, code: codeStr, action: `${call.intent} ➔ execute…`, dest: call.type === "room" ? "Front desk" : call.type === "dining" ? "F&B" : "Concierge", hash: hashStr },
        ...prev.slice(0, 5)
      ]);

      // Append to Proof of Work
      setProofOfWork(prev => [
        { id: `pow-${uniqueId}`, name: call.caller, time: timeStr, type: call.intent, desc: `${call.outcome} · read back & confirmed` },
        ...prev.slice(0, 5)
      ]);

      // Append to Recent Calls Feed
      setRecentCalls(prev => [
        { id: `rc-${uniqueId}`, time: timeStr, caller: call.caller, lang: call.lang, intent: call.intent, outcome: call.outcome, duration: call.duration, status: call.type === "handoff" ? "Handed off" : "Notified" },
        ...prev.slice(0, 7)
      ]);

    }, 6000); // Trigger every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="platform" className="bg-transparent pt-0 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col relative">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col text-left mb-10 sm:mb-16">
              {/* Editorial Title Block */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 text-left border-b border-[#EAEAEA] pb-6 sm:pb-8 mb-6 sm:mb-8">
                <div>
                  <span className="section-label mb-3 sm:mb-4 block">
                    SEE EEVE IN ACTION
                  </span>
                  <BlurText
                    tokens={pictureTokens}
                    delay={40}
                    animateBy="words"
                    direction="bottom"
                    className="section-heading flex-wrap"
                    highlightClassName="text-[#A31D1D] dark:text-[#F87171] font-extrabold"
                  />
                </div>
                
                <div className="flex items-center gap-3 bg-[#A31D1D]/5 border border-[#A31D1D]/20 px-5 py-2.5 rounded-full font-mono text-[10px] text-[#A31D1D] font-bold mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A31D1D] animate-pulse" />
                  <span>REAL-TIME SIMULATION FEED</span>
                </div>
              </div>

              {/* Full-width ScrollReveal Statement */}
              <div className="text-left max-w-5xl">
                <ScrollReveal
                  baseOpacity={0.08}
                  enableBlur={true}
                  baseRotation={3}
                  blurStrength={10}
                  textClassName="editorial-statement block"
                  wordAnimationEnd="bottom+=10% bottom"
                >
                  Every customer conversation leaves behind valuable business information. EEVE brings those insights together into a single operational view, helping teams stay informed, respond faster and make better decisions throughout the day.
                </ScrollReveal>
              </div>
            </div>
          }
        >
          {/* Recreated Dashboard Container Frame styled as a premium browser mockup */}
          <div className="w-full h-full bg-white flex flex-col relative select-none overflow-y-auto overflow-x-hidden no-scrollbar">
          {/* Browser Control Header Bar */}
          <div className="w-full bg-[#FAFAFA] border-b border-[#EAEAEA] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
            {/* Window control buttons */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] block" />
            </div>
            {/* Address Bar */}
            <div className="bg-white border border-[#EAEAEA] rounded-lg px-4 sm:px-8 py-1 sm:py-1.5 text-[9px] sm:text-[11px] font-mono text-[#9CA3AF] w-full max-w-[180px] sm:max-w-sm text-center truncate shadow-sm">
              eeve.ai/lemon-tree-premier
            </div>
            {/* Spacer (Hidden on mobile) */}
            <div className="w-12 flex-shrink-0 hidden sm:block" />
          </div>

          {/* Recreated Dashboard Body */}
          <div className="w-full bg-[#FAFAFA] flex flex-col relative min-h-[600px]">
          
          {/* Real-time Toast Notifications */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div 
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                className="absolute bottom-6 right-6 z-30 bg-neutral-950 text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 max-w-[340px] font-sans text-left border border-neutral-800"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">Transaction Confirmed</span>
                  <p className="text-[12px] font-semibold text-white mt-1 leading-snug">{toastMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Dashboard Grid */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* 1. LEFT SIDEBAR */}
            <div className="w-48 border-r border-[#EAEAEA] bg-white p-5 flex flex-col justify-between hidden md:flex text-left">
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center gap-1.5 pl-1.5">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <rect x="6" y="11" width="28" height="4.5" rx="2.25" fill="#111111" />
                      <circle cx="34" cy="11" r="3" fill="#A31D1D" />
                      <rect x="6" y="18" width="21" height="4.5" rx="2.25" fill="#111111" />
                      <rect x="6" y="25" width="14" height="4.5" rx="2.25" fill="#111111" />
                    </svg>
                  </div>
                  <span className="font-sans font-black text-sm text-[#111111] lowercase">eeveai</span>
                </div>

                {/* Sidebar Navigation */}
                <div className="flex flex-col gap-0.5 text-xs font-sans font-bold text-[#6B7280]">
                  <div className="px-3 py-2 bg-[#FAFAFA] text-[#111111] rounded-lg border border-[#EAEAEA] flex items-center gap-2 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A31D1D]" />
                    <span>Overview</span>
                  </div>
                  <div className="px-3 py-2 hover:bg-[#FAFAFA]/65 hover:text-[#111111] rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                    <span>Calls</span>
                  </div>
                  <div className="px-3 py-2 hover:bg-[#FAFAFA]/65 hover:text-[#111111] rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                    <span>Bookings</span>
                  </div>
                  <div className="px-3 py-2 hover:bg-[#FAFAFA]/65 hover:text-[#111111] rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                    <span>Logs</span>
                  </div>
                  <div className="px-3 py-2 hover:bg-[#FAFAFA]/65 hover:text-[#111111] rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              {/* Bottom sidebar info */}
              <div className="space-y-1 font-sans border-t border-[#EAEAEA] pt-4">
                <div className="flex items-center gap-2 text-[10px] text-emerald-600 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Eeve · live</span>
                </div>
                <span className="text-[9px] text-[#6B7280]/60 block leading-none">Powered by eeve</span>
                <span className="text-[8px] text-[#6B7280]/40 block leading-none font-mono">from hello to handled</span>
              </div>
            </div>

            {/* 2. MAIN DASHBOARD CONTENT AREA */}
            <div className="flex-1 min-w-0 flex flex-col p-4 sm:p-6 gap-6 text-left">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#EAEAEA] pb-4 text-left gap-2">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#A31D1D]" />
                  <div>
                    <h4 className="text-xs font-sans font-bold text-[#111111]">Lemon Tree Premier</h4>
                    <span className="text-[9px] text-[#6B7280] font-mono block">Hospitality · Trivandrum, IN</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#6B7280]">
                  <span className="font-bold text-[#111111]">EEVE · WHATSAPP</span>
                  <span className="bg-[#111111] text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase">Last 30 days</span>
                </div>
              </div>

              {/* STATS ROW 1 (with sparklines) */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-left">
                {[
                  { name: "CALLS HANDLED", val: callsHandled, pct: "18%", up: true },
                  { name: "ROOMS HELD", val: roomsHeld, pct: "23%", up: true },
                  { name: "DINING & FACILITIES", val: diningHeld, pct: "12%", up: true },
                  { name: "REQUESTS CAPTURED", val: requestsCaptured, pct: "9%", up: true },
                  { name: "HUMAN HANDOFFS", val: humanHandoffs, pct: "14%", up: false }
                ].map((stat) => (
                  <div key={stat.name} className="bg-white border border-[#EAEAEA] p-3 rounded-xl shadow-inner relative flex flex-col justify-between min-h-[90px]">
                    <div>
                      <span className="text-[8px] font-mono text-[#6B7280] block font-bold leading-none mb-1">{stat.name}</span>
                      <span className="text-xl font-sans font-black text-[#111111] tracking-tight">{stat.val.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      {/* Sparkline simulation */}
                      <svg className="w-16 h-5 stroke-[#A31D1D] stroke-[1.2] fill-none" viewBox="0 0 100 30">
                        <path d={stat.up 
                          ? "M0,25 Q15,22 30,18 T60,10 T90,5" 
                          : "M0,5 Q15,8 30,12 T60,20 T90,25"} 
                        />
                      </svg>
                      
                      <span className={`text-[9px] font-bold flex items-center ${stat.up ? "text-emerald-600" : "text-[#A31D1D]"}`}>
                        {stat.up ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                        {stat.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* STATS ROW 2 (Certainty Banner) */}
              <div className="bg-white border-l-[3px] border-[#A31D1D] border-y border-r border-[#EAEAEA] p-4 rounded-r-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-left">
                <div>
                  <span className="text-[9px] font-mono text-[#A31D1D] font-bold uppercase tracking-wide block">WE SELL CERTAINTY</span>
                  <p className="text-[11px] text-[#6B7280] font-sans">Every call resolved, re-read, and logged to a human. No silent failures.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6 w-full lg:w-auto text-center lg:text-left border-t lg:border-t-0 pt-2 lg:pt-0">
                  <div>
                    <span className="text-sm font-sans font-black text-[#111111]">92.8%</span>
                    <span className="text-[8px] font-mono text-[#6B7280] block font-semibold leading-none">Resolved sans human</span>
                  </div>
                  <div>
                    <span className="text-sm font-sans font-black text-[#111111]">96.3%</span>
                    <span className="text-[8px] font-mono text-[#6B7280] block font-semibold leading-none">Re-read & confirmed</span>
                  </div>
                  <div>
                    <span className="text-sm font-sans font-black text-[#111111]">1.2s</span>
                    <span className="text-[8px] font-mono text-[#6B7280] block font-semibold leading-none">To first response</span>
                  </div>
                  <div>
                    <span className="text-sm font-sans font-black text-[#111111]">100%</span>
                    <span className="text-[8px] font-mono text-[#6B7280] block font-semibold leading-none">Logged to the team</span>
                  </div>
                </div>
              </div>

              {/* STATS ROW 3 (Pipeline) */}
              <div className="bg-white border border-[#EAEAEA] p-4 rounded-xl text-left">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-wide block">THE PIPELINE</span>
                    <h5 className="text-[11px] font-sans font-bold text-[#111111]">from hello to handled</h5>
                  </div>
                  <span className="text-[9px] font-mono text-[#6B7280]">1,061 fully handled</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 relative">
                  {/* Step indicators */}
                  {[
                    { step: "01", val: "1,284", title: "Call connected", desc: "Picked up, greeted" },
                    { step: "02", val: "1,236", title: "Intent understood", desc: "Need identified", p: "96%" },
                    { step: "03", val: "1,102", title: "Action taken", desc: "Tool fired in n8n", p: "89%" },
                    { step: "04", val: "1,061", title: "Confirmed", desc: "Re-read & dual-confirmed", p: "96%" },
                    { step: "05", val: "1,061", title: "Human notified", desc: "Logged to the team", p: "100%" }
                  ].map((step) => (
                    <div key={step.step} className="bg-[#FAFAFA] border border-[#EAEAEA] p-2.5 rounded-lg text-left relative overflow-hidden group">
                      <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-[#6B7280]">
                        <span>{step.step}</span>
                        {step.p && <span className="font-bold text-[#111111]">{step.p}</span>}
                      </div>
                      <span className="text-base font-sans font-black text-[#111111] block leading-none mb-1">{step.val}</span>
                      <span className="text-[10px] font-sans font-bold text-[#111111] block leading-none">{step.title}</span>
                      <span className="text-[9px] text-[#6B7280] block mt-0.5">{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS ROW 4 (Three Columns Layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-left">
                
                {/* Column 1: Chain of Custody */}
                <div className="lg:col-span-5 bg-white border border-[#EAEAEA] p-4 rounded-xl flex flex-col h-[280px]">
                  <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-2 mb-3">
                    <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-wide font-bold">CHAIN OF CUSTODY</span>
                    <span className="text-[8px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-bold">APPEND-ONLY</span>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                    <AnimatePresence initial={false}>
                      {chainOfCustody.map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-[10px] font-mono flex items-start justify-between border-b border-[#EAEAEA]/40 pb-1.5 gap-2"
                        >
                          <span className="text-[#6B7280] flex-shrink-0">{log.time}</span>
                          <div className="flex-1 min-w-0">
                            <span className="text-[#A31D1D] font-bold mr-1.5">{log.code}</span>
                            <span className="text-[#111111] font-medium">{log.action}</span>
                            <span className="text-[#6B7280]/60 block text-[9px] mt-0.5">{log.dest} ➔ {log.hash}</span>
                          </div>
                          <span className="text-emerald-600 font-bold flex-shrink-0 flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" />
                            sent
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Column 2: Proof of Work */}
                <div className="lg:col-span-4 bg-white border border-[#EAEAEA] p-4 rounded-xl flex flex-col h-[280px]">
                  <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-2 mb-3">
                    <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-wide font-bold">PROOF OF WORK</span>
                    <span className="text-[8px] text-[#6B7280] font-mono">Agent verification recap</span>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 scrollbar-thin">
                    <AnimatePresence initial={false}>
                      {proofOfWork.map((pow) => (
                        <motion.div
                          key={pow.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border-l-2 border-[#A31D1D] pl-2 text-[10px]"
                        >
                          <div className="flex justify-between items-center font-bold text-[#111111]">
                            <span>{pow.name}</span>
                            <span className="text-[#6B7280] font-mono text-[9px]">{pow.time}</span>
                          </div>
                          <p className="text-[#6B7280] leading-snug mt-0.5">{pow.desc}</p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Column 3: Volume and Languages */}
                <div className="lg:col-span-3 flex flex-col gap-3 h-[280px]">
                  {/* Call Volume Chart */}
                  <div className="bg-white border border-[#EAEAEA] p-3.5 rounded-xl flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-1.5">
                      <span className="text-[8px] font-mono text-[#6B7280] uppercase font-bold">CALL VOLUME · 24H</span>
                      <span className="text-[8px] font-mono text-[#6B7280]/60">peak 18:00</span>
                    </div>
                    {/* Simulated bar peaks */}
                    <div className="flex items-end justify-between h-14 pt-2">
                      {[3, 5, 2, 8, 12, 18, 15, 28, 42, 38, 55, 71, 48, 22, 10, 4].map((h, i) => (
                        <div 
                          key={i} 
                          className={`w-[4.5%] rounded-t-sm transition-all duration-500 ${
                            h > 50 ? "bg-[#A31D1D]" : "bg-neutral-300"
                          }`}
                          style={{ height: `${(h / 75) * 100}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#6B7280]/60 leading-none pt-1">
                      <span>00</span>
                      <span>06</span>
                      <span>12</span>
                      <span>18</span>
                      <span>23</span>
                    </div>
                  </div>

                  {/* Calls by Language */}
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded-xl">
                    <span className="text-[8px] font-mono text-[#6B7280] uppercase font-bold block mb-2">CALLS BY LANGUAGE</span>
                    <div className="space-y-1.5 font-sans text-[10px]">
                      <div>
                        <div className="flex justify-between items-center text-[#111111] mb-0.5">
                          <span className="font-semibold">English</span>
                          <span className="font-mono text-[#6B7280]">745 (58%)</span>
                        </div>
                        <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-[#A31D1D] w-[58%] h-full rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-[#111111] mb-0.5">
                          <span className="font-semibold">Hindi</span>
                          <span className="font-mono text-[#6B7280]">347 (27%)</span>
                        </div>
                        <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-neutral-400 w-[27%] h-full rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-[#111111] mb-0.5">
                          <span className="font-semibold">Tamil</span>
                          <span className="font-mono text-[#6B7280]">192 (15%)</span>
                        </div>
                        <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-neutral-400 w-[15%] h-full rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* STATS ROW 5: Recent Calls Feed Table */}
              <div className="bg-white border border-[#EAEAEA] p-4 rounded-xl text-left">
                <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-2 mb-3">
                  <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-wide font-bold">RECENT CALLS (LIVE FEED)</span>
                  <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-600 font-bold">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span>FEED SYNCHRONIZED</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-[11px] min-w-[600px]">
                    <thead>
                      <tr className="text-[#6B7280] font-mono text-[9px] uppercase tracking-wider font-semibold border-b border-[#EAEAEA] pb-1">
                        <th className="pb-1.5">TIME</th>
                        <th className="pb-1.5">CALLER</th>
                        <th className="pb-1.5">LANG</th>
                        <th className="pb-1.5">INTENT</th>
                        <th className="pb-1.5">OUTCOME</th>
                        <th className="pb-1.5">DURATION</th>
                        <th className="pb-1.5 text-right">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAEAEA]/50">
                      <AnimatePresence initial={false}>
                        {recentCalls.map((call) => (
                          <motion.tr 
                            key={call.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hover:bg-[#FAFAFA] transition-colors"
                          >
                            <td className="py-2 font-mono text-[10px] text-[#6B7280]">{call.time}</td>
                            <td className="py-2 font-bold text-[#111111]">{call.caller}</td>
                            <td className="py-2">
                              <span className="bg-white border border-[#EAEAEA] text-[#6B7280] px-1.5 py-0.2 rounded font-mono text-[8px] font-bold">
                                {call.lang}
                              </span>
                            </td>
                            <td className="py-2 font-semibold text-[#111111]">{call.intent}</td>
                            <td className="py-2 text-[#6B7280]">{call.outcome}</td>
                            <td className="py-2 font-mono text-[10px] text-[#6B7280]">{call.duration}</td>
                            <td className="py-2 text-right">
                              <span className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase ${
                                call.status === "Handed off"
                                  ? "bg-amber-50 text-amber-600 border border-amber-100"
                                  : call.status === "Handled"
                                  ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                  : "bg-[#A31D1D]/5 text-[#A31D1D] border border-[#A31D1D]/10"
                              }`}>
                                {call.status}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom border brand label */}
          <div className="border-t border-[#EAEAEA] px-5 py-2.5 bg-white flex justify-between items-center text-[10px] font-mono text-[#6B7280]">
            <span>Lemon Tree Premier · Last 30 days</span>
            <span className="text-[#A31D1D] font-bold tracking-widest uppercase">eeve — we sell certainty</span>
          </div>

          </div>
        </div>
      </ContainerScroll>

      </div>
    </section>
  );
};
