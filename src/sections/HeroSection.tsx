import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  ChevronDown, 
  Linkedin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal,
  ShieldCheck,
  Cpu,
  FolderGit2
} from 'lucide-react';
import { HeroThreeScene } from '../components/HeroThreeScene';
import { ProfilePhotoFrame } from '../components/ProfilePhotoFrame';
import { portfolioProfile } from '../data/portfolioData';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigateTab?: (tabId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateTab }) => {
  const { t, isArabic } = useLanguage();
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    playTelemetryBeep(1050, 0.04);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D WebGL Background Scene (Connected analytical nodes) */}
      <HeroThreeScene interactive={true} />

      {/* Subtle Radial Gradient Vignette for pristine contrast & readability */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-transparent via-[#03060B]/75 to-[#03060B] pointer-events-none z-0" 
      />

      {/* Main 2-Column Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ==================================================== */}
          {/* LEFT / PRIMARY VISUAL AREA: PROFILE PHOTO CONTAINER */}
          {/* ==================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              {/* Outer Ambient Glow Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-indigo-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              {/* Main Photo Frame Card */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#060A12]/90 border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.18)] flex flex-col justify-between p-5 sm:p-6 space-y-4">
                
                {/* Top Status Telemetry */}
                <div className="flex items-center justify-between z-10 font-mono text-[10px] text-cyan-300">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span className="tracking-widest font-semibold uppercase">{t.hero.verifiedBadge}</span>
                  </div>
                  <span className="text-slate-500 font-mono">FARAHAT // 01</span>
                </div>

                {/* Profile Photo Display Frame */}
                <ProfilePhotoFrame />

                {/* Bottom Frame Telemetry Metadata */}
                <div className="z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <span className="text-cyan-400/80">{t.hero.telemetry.dataIntegrity}</span>
                  <span className="text-emerald-400 font-medium">{t.hero.telemetry.systemReady}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================================================== */}
          {/* RIGHT / INFORMATION AREA: BESIDE THE PHOTO */}
          {/* ==================================================== */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left rtl:text-right order-2 lg:order-2"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-slate-950/70 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-300 tracking-wider uppercase font-medium">
                {t.hero.statusAvailable}
              </span>
            </div>

            {/* Name & Title Block */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
                {isArabic ? 'فرحات عادل فرحات' : portfolioProfile.name}
              </h1>

              <div className="flex items-center gap-3">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 uppercase">
                  {isArabic ? 'محلل بيانات | Data Analyst' : portfolioProfile.title}
                </span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-cyan-400/80" />
                <span className="hidden sm:inline-block font-mono text-xs text-slate-400 tracking-widest uppercase">
                  BUSINESS INTELLIGENCE & SQL
                </span>
              </div>
            </div>

            {/* Tagline Statement */}
            <div className="relative p-5 rounded-2xl bg-[#070D18]/85 border border-cyan-500/30 backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-cyan-400 font-mono text-[10px] tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الرؤية والهدف التحليلي' : 'PROFESSIONAL STATEMENT'}</span>
                </span>
                <span className="text-slate-500">FARAHAT_ANALYTICS</span>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                {t.hero.tagline}
              </p>

              <p className="font-mono text-[11px] text-cyan-300/80 italic">
                "{t.profile.philosophyQuote}"
              </p>
            </div>

            {/* Primary Action Buttons (Direct Page Tabs Navigation) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              {/* Button 1: VIEW MY PROJECTS */}
              <button
                onClick={() => {
                  onNavigateTab ? onNavigateTab('projects') : null;
                  playTelemetryBeep(880, 0.04);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2.5 rtl:space-x-reverse px-7 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_28px_rgba(6,182,212,0.4)] hover:shadow-[0_0_36px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{t.hero.viewProjectsBtn}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              {/* Button 2: CONTACT ME */}
              <button
                onClick={() => {
                  onNavigateTab ? onNavigateTab('contact') : null;
                  playTelemetryBeep(920, 0.04);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-7 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-slate-200 border border-white/20 hover:border-cyan-400/60 bg-slate-950/70 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.hero.contactBtn}</span>
              </button>

              {/* Button 3: VIEW SKILLS */}
              <button
                onClick={() => {
                  onNavigateTab ? onNavigateTab('skills') : null;
                  playTelemetryBeep(740, 0.03);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/40 hover:bg-cyan-950/70 transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                <span>{t.hero.exploreSkillsBtn}</span>
              </button>
            </div>

            {/* Direct Contact Coordinates Bar */}
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
              {/* LinkedIn */}
              <a
                href={portfolioProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTelemetryBeep(750, 0.02)}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LINKEDIN</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* Email Shortcut */}
              <div className="inline-flex items-center rounded-lg bg-slate-900/80 border border-white/10 overflow-hidden" dir="ltr">
                <a
                  href={`mailto:${portfolioProfile.email}`}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-200 text-xs">{portfolioProfile.email}</span>
                </a>
                <button
                  onClick={() => handleCopy(portfolioProfile.email, 'email')}
                  className="px-2 py-1.5 border-l border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              {/* Phone Shortcut */}
              <div className="inline-flex items-center rounded-lg bg-slate-900/80 border border-white/10 overflow-hidden" dir="ltr">
                <a
                  href={`tel:${portfolioProfile.phone}`}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-200 text-xs">{portfolioProfile.phone}</span>
                </a>
                <button
                  onClick={() => handleCopy(portfolioProfile.phone, 'phone')}
                  className="px-2 py-1.5 border-l border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

            {/* Analytical Highlights Triple Pill */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] text-left rtl:text-right">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                  {t.hero.stats.methodology}
                </span>
                <span className="font-sans text-xs font-semibold text-slate-200">
                  {t.hero.stats.methodologySub}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] text-left rtl:text-right">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                  {t.hero.stats.focus}
                </span>
                <span className="font-sans text-xs font-semibold text-slate-200">
                  {t.hero.stats.focusSub}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] text-left rtl:text-right">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                  {t.hero.stats.tools}
                </span>
                <span className="font-sans text-xs font-semibold text-slate-200">
                  {t.hero.stats.toolsSub}
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
