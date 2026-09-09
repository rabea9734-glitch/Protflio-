import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Compass, 
  ArrowRight, 
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProfile } from '../data/portfolioData';
import { playTelemetryBeep } from '../utils/sound';

interface PersonalProfileSectionProps {
  onNavigateTab: (tabId: string) => void;
}

export const PersonalProfileSection: React.FC<PersonalProfileSectionProps> = ({ onNavigateTab }) => {
  const { t, isArabic } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'details' | 'bio' | 'philosophy' | 'interests'>('details');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email);
    setCopiedEmail(true);
    playTelemetryBeep(1000, 0.05);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-cyan-500/15 bg-gradient-to-b from-[#05070B] via-[#070C16] to-[#05070B]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{t.profile.sectionBadge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            {t.profile.sectionTitle}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.profile.sectionSubtitle}
          </p>
        </div>

        {/* Sub-Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-950/70 border border-white/[0.08] rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
          {[
            { id: 'details', label: isArabic ? 'البيانات الشخصية' : 'Personal Data', icon: User },
            { id: 'bio', label: isArabic ? 'النبذة المهنية' : 'Professional Bio', icon: FileText },
            { id: 'philosophy', label: isArabic ? 'فلسفة التحليل' : 'Philosophy', icon: Compass },
            { id: 'interests', label: isArabic ? 'مجالات التركيز' : 'Focus Areas', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab(tab.id as any);
                  playTelemetryBeep(700, 0.02);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Sub-Tab Content */}
        <div className="max-w-5xl mx-auto">
          {/* 1. Personal Details View */}
          {activeSubTab === 'details' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Left Column: Direct Identity Coordinates */}
              <div className="rounded-2xl bg-[#080E1B] border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {t.profile.personalDataTitle}
                      </h3>
                      <span className="font-mono text-[10px] text-cyan-400">VERIFIED PROFILE</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-sm">
                  {/* Full Name */}
                  <div className="flex items-start justify-between p-3 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 font-medium">{t.profile.fullNameLabel}</span>
                    <span className="text-white font-bold">{t.profile.fullNameVal}</span>
                  </div>

                  {/* Role */}
                  <div className="flex items-start justify-between p-3 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 font-medium">{t.profile.roleLabel}</span>
                    <span className="text-cyan-300 font-mono font-semibold">{t.profile.roleVal}</span>
                  </div>

                  {/* Field */}
                  <div className="flex items-start justify-between p-3 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 font-medium">{t.profile.fieldLabel}</span>
                    <span className="text-slate-200">{t.profile.fieldVal}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-start justify-between p-3 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 font-medium">{t.profile.locationLabel}</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      {t.profile.locationVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact & Connectivity Coordinates */}
              <div className="rounded-2xl bg-[#080E1B] border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {isArabic ? 'قنوات التواصل المباشر' : 'Direct Channels'}
                        </h3>
                        <span className="font-mono text-[10px] text-cyan-400">OFFICIAL REACH</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Email with copy button */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.04] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-mono text-xs sm:text-sm text-slate-200 truncate" dir="ltr">
                          {portfolioProfile.email}
                        </span>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                      >
                        {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedEmail ? (isArabic ? 'تم النسخ' : 'Copied') : (isArabic ? 'نسخ' : 'Copy')}</span>
                      </button>
                    </div>

                    {/* Phone */}
                    <a
                      href={`tel:${portfolioProfile.phone}`}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.04] flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-mono text-xs sm:text-sm text-slate-200" dir="ltr">
                          {portfolioProfile.phone}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-400">
                        {isArabic ? 'اتصال مباشر' : 'Direct Call'}
                      </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={portfolioProfile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.04] flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                          Farahat Adel Farahat
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-400">
                        {isArabic ? 'زيارة الملف' : 'Visit Profile'}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => onNavigateTab('contact')}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
                  >
                    <span>{isArabic ? 'تواصل معي مباشرة الآن' : 'Initiate Communication Now'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Professional Bio View */}
          {activeSubTab === 'bio' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[#080E1B] border border-cyan-500/20 p-6 sm:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.profile.bioTitle}
                  </h3>
                  <span className="font-mono text-xs text-cyan-400">EXECUTIVE NARRATIVE</span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-base text-slate-300 leading-relaxed">
                <p>{t.profile.bioText}</p>
                <p className="text-slate-400">
                  {t.profile.approachText}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.04] text-center space-y-1">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                    {isArabic ? 'التحليل الاستكشافي' : 'Exploratory EDA'}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {isArabic ? 'اكتشاف الأنماط والشذوذ' : 'Pattern & Anomaly Detection'}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.04] text-center space-y-1">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                    {isArabic ? 'ذكاء الأعمال' : 'BI Architecture'}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {isArabic ? 'لوحات قيادة تنفيذية' : 'Executive Command Dashboards'}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.04] text-center space-y-1">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                    {isArabic ? 'الأثر التجاري' : 'Business Impact'}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {isArabic ? 'دعم القرارات الاستباقية' : 'Proactive Decision Support'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. Analytical Philosophy View */}
          {activeSubTab === 'philosophy' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Quote Card */}
              <div className="rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 p-8 shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                    {isArabic ? '// الفلسفة والرسالة الجوهرية' : '// CORE PHILOSOPHY'}
                  </span>
                  <p className="font-display text-lg sm:text-xl text-white italic leading-relaxed">
                    "{t.profile.philosophyQuote}"
                  </p>
                  <span className="font-mono text-xs text-slate-400 block pt-2">
                    — {t.profile.fullNameVal}
                  </span>
                </div>
              </div>

              {/* 3 Tenets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-[#080E1B] border border-white/[0.08] p-6 space-y-3 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                    01
                  </div>
                  <h4 className="font-display text-base font-bold text-white">
                    {t.profile.tenet1Title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {t.profile.tenet1Desc}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#080E1B] border border-white/[0.08] p-6 space-y-3 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center font-mono text-xs text-blue-400 font-bold">
                    02
                  </div>
                  <h4 className="font-display text-base font-bold text-white">
                    {t.profile.tenet2Title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {t.profile.tenet2Desc}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#080E1B] border border-white/[0.08] p-6 space-y-3 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-500/40 flex items-center justify-center font-mono text-xs text-teal-400 font-bold">
                    03
                  </div>
                  <h4 className="font-display text-base font-bold text-white">
                    {t.profile.tenet3Title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {t.profile.tenet3Desc}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. Interests / Focus Areas View */}
          {activeSubTab === 'interests' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[#080E1B] border border-cyan-500/20 p-6 sm:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {isArabic ? 'مجالات التركيز والتطوير المستمر' : 'Domains of Interest & Analytical Focus'}
                  </h3>
                  <span className="font-mono text-xs text-cyan-400">STRATEGIC FOCUS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.profile.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.05] flex items-center gap-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-sans text-sm text-slate-200 font-medium">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Navigation Cards to Dedicated Page Views */}
        <div className="pt-6 border-t border-white/[0.06] max-w-5xl mx-auto">
          <p className="font-mono text-xs text-slate-400 uppercase tracking-wider text-center mb-6">
            {t.profile.quickNavTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigateTab('skills')}
              className="p-4 rounded-xl bg-[#080E1B] border border-cyan-500/20 hover:border-cyan-400 text-left rtl:text-right group transition-all"
            >
              <span className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase block mb-1">
                TAB // 02
              </span>
              <div className="flex items-center justify-between text-white group-hover:text-cyan-300 font-bold text-sm">
                <span>{t.profile.goToSkills}</span>
                <ArrowIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigateTab('projects')}
              className="p-4 rounded-xl bg-[#080E1B] border border-cyan-500/20 hover:border-cyan-400 text-left rtl:text-right group transition-all"
            >
              <span className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase block mb-1">
                TAB // 03
              </span>
              <div className="flex items-center justify-between text-white group-hover:text-cyan-300 font-bold text-sm">
                <span>{t.profile.goToProjects}</span>
                <ArrowIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigateTab('contact')}
              className="p-4 rounded-xl bg-[#080E1B] border border-cyan-500/20 hover:border-cyan-400 text-left rtl:text-right group transition-all"
            >
              <span className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase block mb-1">
                TAB // 06
              </span>
              <div className="flex items-center justify-between text-white group-hover:text-cyan-300 font-bold text-sm">
                <span>{t.profile.goToContact}</span>
                <ArrowIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
