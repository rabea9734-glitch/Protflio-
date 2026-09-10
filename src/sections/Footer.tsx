import React from 'react';
import { ArrowUp, Terminal, ShieldCheck, MessageCircle, Code2 } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateTab?: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const { t, isArabic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playTelemetryBeep(900, 0.03);
  };

  return (
    <footer className="w-full bg-[#020407] border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8 relative z-10 select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-left rtl:text-right">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-white">
                {isArabic ? 'فرحات عادل فرحات' : portfolioProfile.name}
              </span>
              <p className="font-mono text-[10px] text-slate-400 tracking-wider">
                {t.footer.role} // FARAHAT_ANALYTICS
              </p>
            </div>
          </div>

          {/* Middle Notice */}
          <div className="text-center font-mono text-xs text-slate-400 space-y-1">
            <p className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.footer.rights}</span>
            </p>
            <p className="text-[10px] text-slate-500">
              {t.footer.tagline}
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 px-3.5 py-2 rounded-full bg-slate-950 transition-colors cursor-pointer"
          >
            <span>{isArabic ? 'العودة للأعلى' : 'RETURN_TO_TOP'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Developer Credit & WhatsApp Contact (In English) */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-400 text-center sm:text-left">
            <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Portfolio Designed & Developed by:</span>
            <span className="text-cyan-300 font-bold tracking-wide">Eng. Ahmed Rabie</span>
          </div>

          <a
            href="https://wa.me/201104627201"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold font-mono tracking-wider">01104627201</span>
            <span className="text-[10px] text-emerald-300/90 font-sans px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30">WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
