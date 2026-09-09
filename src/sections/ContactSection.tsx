import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Copy, Check, Send, Terminal, Sparkles } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'bi',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email);
    setCopied(true);
    playTelemetryBeep(1000, 0.05);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    playTelemetryBeep(1200, 0.06);

    const recipient = "rabea9734@gmail.com";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} [${formData.projectScope.toUpperCase()}]`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Scope: ${formData.projectScope}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden min-h-[85vh]">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{t.contact.sectionBadge}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            {isArabic ? (
              <>
                هل لديك بيانات؟
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  دعنا نكتشف قصتها معاً.
                </span>
              </>
            ) : (
              <>
                GOT DATA?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  LET'S FIND THE STORY.
                </span>
              </>
            )}
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* 2-Column Terminal & Communication Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Links & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 bg-[#070D18]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse pb-4 border-b border-white/10 text-cyan-400 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>{isArabic ? 'قنوات الاتصال المباشر' : 'DIRECT_CHANNELS'}</span>
              </div>

              {/* Email One-Click Copy */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  {t.contact.emailCard}
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/10 group">
                  <span className="font-mono text-xs text-slate-200 truncate mr-2 rtl:ml-2 rtl:mr-0" dir="ltr">
                    {portfolioProfile.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-white/10 text-cyan-400 transition-colors flex items-center gap-1 font-mono text-[11px] cursor-pointer"
                    title={t.contact.copyBtn}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{isArabic ? 'تم النسخ' : 'COPIED'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'نسخ' : 'COPY'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  {t.contact.phoneCard}
                </span>
                <a
                  href={`tel:${portfolioProfile.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs text-slate-200 font-semibold" dir="ltr">
                      {portfolioProfile.phone}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400">
                    {isArabic ? 'اتصال' : 'CALL'}
                  </span>
                </a>
              </div>

              {/* Social / Professional Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={portfolioProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LINKEDIN // PROFILE</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">{isArabic ? 'زيارة ←' : 'CONNECT →'}</span>
                </a>

                {portfolioProfile.github && (
                  <a
                    href={portfolioProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>GITHUB // REPOSITORIES</span>
                    </span>
                    <span className="text-slate-400 text-[10px]">{isArabic ? 'استعراض ←' : 'INSPECT →'}</span>
                  </a>
                )}
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-emerald-400 font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{isArabic ? 'متاح للتعاقدات والمشاريع' : 'ACCEPTING NEW CONTRACTS'}</span>
                </div>
                <p className="font-sans text-xs text-slate-300">
                  {isArabic 
                    ? 'جاهز لمشاريع تحليل البيانات وبناء لوحات التحكم التنفيذية والتعاقدات الكاملة والجزئية.'
                    : 'Currently open for strategic advisory, analytics modeling sprints, and full-time roles.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Scope Terminal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative shadow-2xl bg-[#070D18]">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    {t.contact.sentSuccessTitle}
                  </h3>
                  <p className="font-sans text-sm text-slate-300 max-w-sm mx-auto">
                    {t.contact.sentSuccessDesc}
                  </p>
                  <p className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 rounded-lg py-1.5 px-3 max-w-xs mx-auto">
                    {isArabic ? 'المرسل إليه: rabea9734@gmail.com' : 'Recipient: rabea9734@gmail.com'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-mono text-xs text-cyan-400 hover:underline pt-2 inline-block cursor-pointer"
                  >
                    {isArabic ? 'إرسال رسالة أخرى' : 'SEND ANOTHER MESSAGE'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left rtl:text-right">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                    <span className="text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.contact.formTitle}</span>
                    </span>
                    <span className="text-slate-400">DISPATCH_TELEMETRY</span>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-300">
                      {t.contact.nameField}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-white font-sans text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-300">
                      {t.contact.emailField}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-white font-mono text-sm outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>

                  {/* Project Scope */}
                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-300">
                      {t.contact.scopeField}
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-white font-sans text-sm outline-none transition-colors"
                    >
                      <option value="bi">{t.contact.scopeOptions.bi}</option>
                      <option value="eda">{t.contact.scopeOptions.eda}</option>
                      <option value="cleaning">{t.contact.scopeOptions.cleaning}</option>
                      <option value="contract">{t.contact.scopeOptions.contract}</option>
                      <option value="other">{t.contact.scopeOptions.other}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-300">
                      {t.contact.messageField}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-white font-sans text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
