import React, { useState } from "react";
import { Logo } from "./Logo";
import { LiquidButton } from "./ui/liquid-glass-button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-transparent pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-5 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Panorama-styled Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 text-left">
          
          {/* Column 1: Brand Info (Spans 2 columns on desktop) */}
          <div className="col-span-2 md:col-span-2 flex flex-col items-start gap-4 sm:gap-6">
            <Logo className="text-[#111111]" />

            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-[#6B7280] hover:text-[#A31D1D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4.5 h-4.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#6B7280] hover:text-[#A31D1D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-4.5 h-4.5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#A31D1D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-4.5 h-4.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-[#111111] text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-[#6B7280] font-sans font-normal">
              <li><a href="#home" className="hover:text-[#A31D1D] transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-[#A31D1D] transition-colors">About Us</a></li>
              <li><a href="#why-choose-eeve" className="hover:text-[#A31D1D] transition-colors">Vision & Trust</a></li>
              <li><a href="#what-we-do" className="hover:text-[#A31D1D] transition-colors">Workflow Diagram</a></li>
              <li><a href="#industries" className="hover:text-[#A31D1D] transition-colors">Industry Blueprints</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-[#111111] text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#6B7280] font-sans font-normal">
              <li><a href="#" className="hover:text-[#A31D1D] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#A31D1D] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#A31D1D] transition-colors">Press & Media</a></li>
              <li><a href="mailto:hello@eeve.ai" className="hover:text-[#A31D1D] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h4 className="text-[#111111] text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Subscription active" : "Enter your email"} 
                disabled={subscribed}
                required
                className="bg-[#FAFAFA] border border-[#EAEAEA] rounded px-4 py-2.5 text-sm text-[#111111] placeholder-[#6B7280]/40 focus:outline-none focus:border-[#A31D1D] transition-colors"
              />
              <LiquidButton 
                type="submit"
                disabled={subscribed}
                size="lg"
                className="font-semibold text-black tracking-wide flex items-center justify-center gap-2"
              >
                {subscribed ? "Verified" : "Subscribe"}
              </LiquidButton>
            </form>
          </div>

        </div>

        {/* Separator & Bottom Row */}
        <div className="border-t border-[#EAEAEA] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#6B7280] uppercase tracking-wider font-mono">
          <p>© 2026 EEVE AI. All rights reserved.</p>
          <div className="flex gap-6 font-sans font-semibold">
            <a href="#" className="hover:text-[#111111] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#111111] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
