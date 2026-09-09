import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  Database, 
  BarChart3, 
  TrendingUp,
  ExternalLink 
} from 'lucide-react';
import { 
  portfolioExperiences, 
  portfolioEducation, 
  portfolioCertifications 
} from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playTelemetryBeep } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'timeline' | 'education' | 'certifications' | 'standards'>('timeline');

  const standards = [
    {
      label: isArabic ? 'تفكيك المشكلات عبر الفرضيات' : 'HYPOTHESIS-DRIVEN DECOMPOSITION',
      sub: isArabic 
        ? 'صياغة أسئلة تجريبية قبل كتابة الكود لتجنب الانحياز الاستكشافي وهدر الجهد التحليلي.'
        : 'Formulating empirical questions before touching code to eliminate exploratory bias and wasted iterations.',
      metric: '01',
      icon: Target,
      color: 'text-cyan-400',
    },
    {
      label: isArabic ? 'نظافة البيانات وضبط المعايير' : 'DATA HYGIENE & NORMALIZATION',
      sub: isArabic
        ? 'تدقيق توزيع القيم المفقودة، قيود الهيكلية، وسلامة المفاتيح الأساسية لضمان مدخلات موثوقة.'
        : 'Auditing null distribution, schema constraints, and primary key integrity to ensure trustworthy data inputs.',
      metric: '02',
      icon: Database,
      color: 'text-blue-400',
    },
    {
      label: isArabic ? 'لوحات تحكم تنفيذية مريحة بصرياً' : 'EXECUTIVE VISUAL COCKPITS',
      sub: isArabic
        ? 'تصميم لوحات ذكاء أعمال سريعة القراءة بتسلسل بصري سليم، وفلاتر فعالة بدون تشتيت بصري.'
        : 'Designing glanceable BI dashboards with clear visual hierarchies, actionable filters, and zero clutter.',
      metric: '03',
      icon: BarChart3,
      color: 'text-teal-400',
    },
    {
      label: isArabic ? 'توصيات تجارية موجهة نحو التنفيذ' : 'ACTION-ORIENTED BUSINESS INSIGHTS',
      sub: isArabic
        ? 'تحويل الرسوم البيانية الوصفية إلى توصيات تشغيلية واستراتيجية مباشرة لأصحاب القرار.'
        : 'Converting descriptive charts into direct operational recommendations for management and key stakeholders.',
      metric: '04',
      icon: TrendingUp,
      color: 'text-emerald-400',
    }
  ];

  const ChevronIcon = isArabic ? ChevronLeft : ChevronRight;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 min-h-[85vh]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.experience.sectionBadge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.experience.sectionTitle}
            </h2>
            <p className="font-sans text-sm text-slate-300 mt-2 max-w-2xl">
              {t.experience.sectionSubtitle}
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400 text-left rtl:text-right">
            <span>{isArabic ? 'سجل مهني متكامل' : 'CHRONOLOGICAL TIMELINE'}</span>
            <br />
            <span className="text-cyan-400">
              {isArabic ? 'هيكلية مسار واضحة' : 'STRUCTURED CAREER ARCHITECTURE'}
            </span>
          </div>
        </div>

        {/* Sub-Tabs Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/80 border border-white/[0.08] rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
          {[
            { id: 'timeline', label: t.experience.timelineTab, icon: Briefcase },
            { id: 'education', label: t.experience.educationTab, icon: GraduationCap },
            { id: 'certifications', label: t.experience.certificationsTab, icon: Award },
            { id: 'standards', label: t.experience.standardsTab, icon: ShieldCheck },
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Career Timeline */}
        {activeSubTab === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative pl-6 sm:pl-8 rtl:pr-6 rtl:sm:pr-8 rtl:pl-0 border-l-2 rtl:border-l-0 rtl:border-r-2 border-white/10 space-y-10"
          >
            {portfolioExperiences.map((exp, idx) => (
              <div key={exp.id} className="relative group text-left rtl:text-right">
                {/* Indicator Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] rtl:-right-[31px] rtl:sm:-right-[39px] rtl:left-auto top-1.5 w-4 h-4 rounded-full bg-[#05070B] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-slate-950" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-[#080d17] border border-white/10 hover:border-cyan-500/40 transition-all space-y-5 shadow-xl">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <div>
                      <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-mono text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="text-slate-200 font-medium">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span>•</span>
                            <span className="text-slate-500">{exp.location}</span>
                          </>
                        )}
                      </p>
                    </div>

                    {exp.type && (
                      <span className="self-start sm:self-center font-mono text-xs px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.experience.responsibilities}</span>
                    </span>
                    <ul className="space-y-1.5 pl-1 rtl:pr-1 rtl:pl-0">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <ChevronIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.experience.achievements}</span>
                      </span>
                      <ul className="space-y-1.5 pl-1 rtl:pr-1 rtl:pl-0">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tools */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      {t.experience.toolsUsed}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 text-cyan-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Education */}
        {activeSubTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {portfolioEducation.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#080d17] border border-white/10 space-y-5 text-left rtl:text-right shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
                      {edu.period}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-slate-300 mt-0.5">
                      {edu.institution} {edu.location && `• ${edu.location}`}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    {isArabic ? 'المقررات والدراسات الأكاديمية ذات الصلة:' : 'RELEVANT ACADEMIC STUDIES:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.relevantStudies.map((study, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 text-xs font-sans text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{study}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Certifications */}
        {activeSubTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {portfolioCertifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#080d17] border border-white/10 hover:border-cyan-500/30 transition-colors space-y-4 text-left rtl:text-right shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      {cert.name}
                    </h4>
                    <span className="font-mono text-xs text-slate-400 block mt-0.5">
                      {cert.issuingOrganization}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span>{cert.issueDate}</span>
                  <span className="text-cyan-400 font-semibold">{t.experience.verifyCred}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 4: Methodological Standards */}
        {activeSubTab === 'standards' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {standards.map((std, i) => {
              const Icon = std.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#080d17] border border-white/10 space-y-3 text-left rtl:text-right hover:border-cyan-500/30 transition-all shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {std.metric}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-white">
                    {std.label}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {std.sub}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
};
