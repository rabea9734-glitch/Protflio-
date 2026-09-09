import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  FileSpreadsheet, 
  Activity, 
  Terminal, 
  BarChart2, 
  Cpu, 
  Sparkles, 
  Layers,
  LineChart,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { portfolioSkills } from '../data/portfolioData';
import { SkillNode, SkillCategory } from '../types/portfolio';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

interface SkillsSectionProps {
  onNavigateTab?: (tabId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigateTab }) => {
  const { t, isArabic } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(portfolioSkills[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.skills.categories.all },
    { id: 'data-analysis', label: t.skills.categories['data-analysis'] },
    { id: 'data-visualization', label: t.skills.categories['data-visualization'] },
    { id: 'programming', label: t.skills.categories['programming'] },
    { id: 'databases', label: t.skills.categories['databases'] },
    { id: 'business-intelligence', label: t.skills.categories['business-intelligence'] },
    { id: 'tools-technologies', label: t.skills.categories['tools-technologies'] },
  ];

  const filteredSkills = activeCategory === 'all'
    ? portfolioSkills
    : portfolioSkills.filter((s) => s.category === activeCategory);

  const getSkillIcon = (id: string, category: SkillCategory) => {
    switch (category) {
      case 'databases':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'data-visualization':
        return id.includes('tableau') 
          ? <BarChart2 className="w-5 h-5 text-amber-400" />
          : <Activity className="w-5 h-5 text-yellow-400" />;
      case 'programming':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'data-analysis':
        return <LineChart className="w-5 h-5 text-indigo-400" />;
      case 'business-intelligence':
        return <Sparkles className="w-5 h-5 text-cyan-300" />;
      case 'tools-technologies':
        return id.includes('excel') 
          ? <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
          : <Cpu className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#04070D]/70 min-h-[85vh]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.skills.sectionBadge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.skills.sectionTitle}
            </h2>
            <p className="font-sans text-sm text-slate-300 mt-2 max-w-2xl">
              {t.skills.sectionSubtitle}
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400 text-left rtl:text-right">
            <span>{isArabic ? 'منهجية تحليلية منضبطة' : 'DISCIPLINED ANALYTICAL METHODS'}</span>
            <br />
            <span className="text-cyan-400">
              {isArabic ? 'كفاءات مثبتة وموثقة // بدون نسب تقديرية' : 'NO ARBITRARY PERCENTAGES // VERIFIED CAPABILITIES'}
            </span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                playTelemetryBeep(700, 0.02);
              }}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-semibold'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Matrix (Interactive Skill Cards + Deep Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Nodes Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => {
                    setSelectedSkill(skill);
                    playTelemetryBeep(850, 0.03);
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left rtl:text-right flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-[#0a1220] border-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.2)]'
                      : 'bg-[#080d17] border-white/10 hover:border-cyan-500/40 hover:bg-[#09101c]'
                  }`}
                >
                  {/* Skill Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                        {getSkillIcon(skill.id, skill.category)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base">
                          {skill.name}
                        </h3>
                        <span className="font-mono text-[10px] text-slate-400 uppercase">
                          {skill.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Competency Indicator Tag */}
                    {skill.indicator && (
                      <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {skill.indicator}
                      </span>
                    )}
                  </div>

                  {/* Highlight & Description */}
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-cyan-300/90 font-medium">
                      {skill.highlight}
                    </p>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Sub-capabilities chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {skill.subCapabilities.slice(0, 2).map((cap, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900/80 border border-white/5 text-slate-300"
                      >
                        {cap}
                      </span>
                    ))}
                    {skill.subCapabilities.length > 2 && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                        +{skill.subCapabilities.length - 2} {isArabic ? 'المزيد' : 'more'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Skill Inspector Terminal (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-cyan-500/30 space-y-6 relative shadow-2xl bg-[#070D18]">
              
              {/* Header Info */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30">
                    {getSkillIcon(selectedSkill.id, selectedSkill.category)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                      {isArabic ? 'فحص تفاصيل المهارة' : 'CAPABILITY DEEP INSPECT'}
                    </span>
                    <h4 className="font-display text-xl font-bold text-white">
                      {selectedSkill.name}
                    </h4>
                  </div>
                </div>
                {selectedSkill.indicator && (
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-semibold">
                    {selectedSkill.indicator}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'الملخص المنهجي' : 'METHODOLOGICAL SUMMARY'}
                </span>
                <p className="font-sans text-sm text-slate-200 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Full Sub-Capabilities */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'القدرات الفرعية التنفيذية' : 'EXECUTABLE SUB-CAPABILITIES'}
                </span>
                <div className="space-y-1.5">
                  {selectedSkill.subCapabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code/Query Snippet if available */}
              {selectedSkill.codeSnippet && (
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{isArabic ? 'نموذج الكود / استعلام SQL' : 'QUERY / CODE PATTERN'}</span>
                    <span className="text-cyan-400">STRUCTURED SYNTAX</span>
                  </span>
                  <div className="p-3 rounded-xl bg-slate-950 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto" dir="ltr">
                    <pre>{selectedSkill.codeSnippet}</pre>
                  </div>
                </div>
              )}

              {/* Section Anchor CTA */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">
                  {isArabic ? 'التصنيف:' : 'CATEGORY:'} {selectedSkill.categoryLabel}
                </span>
                <button
                  onClick={() => {
                    onNavigateTab?.('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{isArabic ? 'مشاهدة التطبيق في المشاريع' : 'SEE IN PROJECTS'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
