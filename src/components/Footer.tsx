import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070709] py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Dynamic Year */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
            H
          </div>
          <p className="text-xs text-zinc-400 font-light">
            Designed & Built by <span className="text-zinc-200 font-medium">{personalInfo.name}</span>.
          </p>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <p className="text-xs font-mono text-zinc-400">
            © {currentYear} Harsh. All rights reserved.
          </p>
        </div>

        {/* Technical stack hint & Back to top */}
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-mono text-zinc-400 hidden md:inline">
            React • TypeScript • Tailwind
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
