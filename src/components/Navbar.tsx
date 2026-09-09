import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Terminal,
  Home,
  Cpu,
  FolderGit2,
  BarChart3,
  Award,
  Mail,
  Languages
} from 'lucide-react';
import { isSoundEnabled, toggleSound, playTelemetryBeep } from '../utils/sound';
import { portfolioProfile } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onTabChange, 
  onReplayIntro 
}) => {
  const { language, isArabic, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
    if (next) playTelemetryBeep(1000, 0.05);
  };

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'skills', label: t.nav.skills, icon: Cpu },
    { id: 'projects', label: t.nav.projects, icon: FolderGit2 },
    { id: 'lab', label: t.nav.lab, icon: BarChart3 },
    { id: 'experience', label: t.nav.experience, icon: Award },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    playTelemetryBeep(680, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#05070B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-4 sm:py-5 bg-[#05070B]/60 backdrop-blur-sm border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left rtl:text-right focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {isArabic ? 'فرحات عادل فرحات' : portfolioProfile.name.toUpperCase()}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              </span>
              <span className="block font-mono text-[9px] text-slate-400 tracking-widest uppercase">
                {isArabic ? 'محلل بيانات // محفظة الأعمال' : `${portfolioProfile.title.toUpperCase()} // PORTFOLIO`}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Each represents a dedicated Page View) */}
          <nav className="hidden lg:flex items-center gap-1 border border-cyan-500/20 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-full shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-slate-950 font-bold bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.45)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Hub: Translation Toggle, Audio, Replay Intro & Contact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Translation Button */}
            <button
              onClick={() => {
                toggleLanguage();
                playTelemetryBeep(850, 0.03);
              }}
              title={isArabic ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
              className="px-3 py-1.5 rounded-full border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/50 hover:bg-cyan-950 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.switchLang}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-200 font-bold">
                {t.nav.langCode}
              </span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute audio feedback' : 'Enable telemetry audio'}
              className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 bg-slate-900/50 transition-colors cursor-pointer"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Replay Intro Sequence */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                title={t.nav.replayIntro}
                className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 bg-slate-900/50 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            )}

            {/* Direct Contact Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`relative inline-flex items-center justify-center font-mono text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-cyan-300 text-slate-950 ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.3)] active:scale-95'
              }`}
            >
              {t.nav.startProject}
            </button>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Translation Button */}
            <button
              onClick={() => {
                toggleLanguage();
                playTelemetryBeep(850, 0.03);
              }}
              className="px-2.5 py-1 rounded-lg border border-cyan-500/30 bg-cyan-950/60 text-cyan-300 font-mono text-[11px] flex items-center gap-1"
            >
              <Languages className="w-3 h-3 text-cyan-400" />
              <span>{t.nav.langCode}</span>
            </button>

            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg border border-white/10 text-slate-400 bg-slate-900/50"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playTelemetryBeep(700, 0.03);
              }}
              className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white bg-slate-900/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 lg:hidden bg-[#070b13]/98 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-2 mb-1">
                {isArabic ? 'أقسام الموقع المخصصة' : 'DEDICATED PAGES'}
              </span>

              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick(item.id);
                    }}
                    className={`font-mono text-sm py-3 px-4 rounded-xl border transition-all flex items-center justify-between text-left rtl:text-right ${
                      isActive
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'border-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}</span>
                  </button>
                );
              })}

              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('contact');
                  }}
                  className="w-full text-center font-mono text-sm font-semibold py-3 rounded-xl bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  {t.nav.startProject}
                </button>

                {onReplayIntro && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReplayIntro();
                    }}
                    className="w-full text-center font-mono text-xs text-slate-400 py-2.5 rounded-xl border border-white/10 hover:text-cyan-400"
                  >
                    {t.nav.replayIntro}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
