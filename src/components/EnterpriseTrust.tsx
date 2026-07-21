import React from "react";
import { motion } from "motion/react";

export const EnterpriseTrust: React.FC = () => {
  const trusts = [
    {
      title: "Designed Around Your Business",
      desc: "Every organisation works differently. That's why EEVE adapts to your existing teams, workflows and customer experience instead of forcing you to change how your business operates. From day one, every deployment is designed to feel like a natural extension of your organisation.",
      image: "/assets/designed_around_business.jpg",
      footerLeft: "BUSINESS FIRST",
      footerRight: "ADAPTABLE"
    },
    {
      title: "Built For Enterprise",
      desc: "Built for organisations where reliability matters. EEVE is designed to support complex operations with secure processes, controlled permissions and dependable execution—giving your teams confidence at every stage of the customer journey.",
      image: "/assets/built_for_enterprise.jpg",
      footerLeft: "ENTERPRISE",
      footerRight: "READY"
    },
    {
      title: "People Always Come First",
      desc: "Technology should support people, not replace them. EEVE handles routine coordination behind the scenes while your team focuses on the conversations, decisions and customer relationships that matter most.",
      image: "/assets/people_always_first.jpg",
      footerLeft: "HUMAN CENTRED",
      footerRight: "INTELLIGENCE"
    },
    {
      title: "A Partner, Not Just A Platform",
      desc: "Deploying EEVE is the beginning of the relationship, not the end. As your organisation evolves, EEVE evolves with it—continuously adapting to new workflows, business requirements and customer expectations.",
      image: "/assets/partner_not_platform.jpg",
      footerLeft: "BUILT TO SCALE",
      footerRight: "TOGETHER"
    }
  ];

  return (
    <section 
      id="why-choose-eeve" 
      className="bg-transparent relative py-32 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#F06D5F] font-bold uppercase block mb-4">
            WHY BUSINESSES CHOOSE EEVE
          </span>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight text-[#171717] leading-[1.05] text-balance mb-6">
            Trust & Outcome Focused.
          </h2>
          <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-sans font-normal max-w-2xl text-balance">
            Businesses choose EEVE because enterprise AI demands more than intelligent conversations. It demands trust, accountability and technology that adapts to the way your organisation operates. Every decision is independently verified, every action is traceable and every deployment is tailored to your people, your processes and your customer experience.
          </p>
        </div>

        {/* Floating Liquid Glass Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {trusts.map((trust, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              whileHover={{ 
                y: -8, 
                scale: 1.015,
                transition: { type: "spring", stiffness: 120, damping: 16 }
              }}
              className="bg-white/28 backdrop-blur-[38px] saturate-[180%] border border-white/55 rounded-[30px] shadow-[0_35px_80px_rgba(15,23,42,0.12),0_14px_35px_rgba(15,23,42,0.08),inset_0_2px_8px_rgba(255,255,255,0.65)] hover:bg-white/35 transition-all duration-500 group flex flex-col min-h-[500px] text-left relative overflow-hidden"
            >
              {/* Glass Top Edge Reflection Sweep */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 pointer-events-none" />

              {/* Card Grain Texture Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3D%22www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20%2F%3E%3C%2Fsvg%3E')] opacity-[0.02] pointer-events-none" />

              {/* Photo Area */}
              <div className="relative h-[220px] overflow-hidden rounded-t-[30px]">
                <img
                  src={trust.image}
                  alt={trust.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-sans font-bold tracking-tight text-[#171717] mb-3">
                    {trust.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans font-normal">
                    {trust.desc}
                  </p>
                </div>
                
                {/* Divider and Floating Glass Pills */}
                <div className="mt-8 pt-6 border-t border-white/30 flex items-center justify-between text-[9px] font-mono">
                  <span className="bg-white/32 backdrop-blur-[18px] border border-white/40 shadow-xs rounded-full px-3 py-1 font-semibold text-[#667085] tracking-[0.18em]">
                    {trust.footerLeft}
                  </span>
                  <span className="bg-white/32 backdrop-blur-[18px] border border-white/40 shadow-xs rounded-full px-3 py-1 font-bold text-[#F06D5F] tracking-[0.18em] uppercase">
                    {trust.footerRight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default EnterpriseTrust;
