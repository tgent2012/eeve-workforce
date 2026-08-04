import React from "react";
import { Logo } from "./Logo";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent pt-16 sm:pt-20 lg:pt-24 pb-10 px-5 sm:px-10 lg:px-16 xl:px-24 border-t border-black/5 dark:border-white/10 text-slate-800 dark:text-slate-200 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Multi-column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 text-left">
          
          {/* Far Left: Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <Logo className="text-[#111111] dark:text-white" />
            
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-sm">
              Eeve is an enterprise Voice AI platform that powers Workforce Intelligence, working alongside your people to turn every customer conversation into meaningful business outcomes.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#A31D1D] dark:hover:text-[#FBBF24] hover:bg-[#A31D1D]/10 dark:hover:bg-[#FBBF24]/15 transition-all duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#A31D1D] dark:hover:text-[#FBBF24] hover:bg-[#A31D1D]/10 dark:hover:bg-[#FBBF24]/15 transition-all duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/133388027/admin/dashboard/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#A31D1D] dark:hover:text-[#FBBF24] hover:bg-[#A31D1D]/10 dark:hover:bg-[#FBBF24]/15 transition-all duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Grouped Sitemap Links (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Group 1: Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-white mb-5">Product</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-sans font-medium">
                <li><a href="#platform" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Voice AI Platform</a></li>
                <li><a href="#what-we-do" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Workforce Intelligence</a></li>
                <li><a href="#industries" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Industry Blueprints</a></li>
                <li><a href="#why-choose-eeve" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Enterprise Security</a></li>
                <li><a href="#platform" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Group 2: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-white mb-5">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-sans font-medium">
                <li><a href="#about" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">About Us</a></li>
                <li><a href="#why-choose-eeve" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Vision & Values</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Press & News</a></li>
                <li><a href="#contact" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Group 3: Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-white mb-5">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-sans font-medium">
                <li><a href="#faq" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">FAQ & Support</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Voice AI Guide</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">System Status</a></li>
              </ul>
            </div>

            {/* Group 4: Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-white mb-5">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-sans font-medium">
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Security Overview</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors">GDPR & Compliance</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="border-t border-black/5 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-sans">
          <p>© 2026 EEVE AI Inc. All rights reserved. Built to augment your workforce, never replace it.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#A31D1D] dark:hover:text-[#FBBF24] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
