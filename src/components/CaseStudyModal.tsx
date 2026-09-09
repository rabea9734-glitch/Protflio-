import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Database, 
  ShieldAlert, 
  Cpu, 
  Sparkles, 
  Sliders, 
  BarChart3, 
  Wrench, 
  BookOpen,
  Check,
  Linkedin,
  FileSpreadsheet,
  ExternalLink,
  Target,
  Filter,
  Layers,
  Download
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { playTelemetryBeep } from '../utils/sound';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'metrics'>('narrative');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { detailedCaseStudy } = project;
  const isExcelProject = project.subsection === 'Excel Analytics Projects';

  const handleDownloadImage = async () => {
    if (!project.image) return;
    try {
      const response = await fetch(project.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const extension = project.image.split('.').pop()?.split('?')[0] || 'png';
      a.download = `${project.id}-dashboard.${extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      const a = document.createElement('a');
      a.href = project.image;
      a.download = `${project.id}-dashboard.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#03060a]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#090e17] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#070b13]">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded font-semibold">
                CASE_STUDY // {project.number}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">•</span>
              <span className="text-xs text-slate-300 font-mono hidden sm:inline uppercase">
                {project.category}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Tab Selector */}
              <div className="flex bg-slate-900 border border-white/10 rounded-lg p-0.5 text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveTab('narrative');
                    playTelemetryBeep(700, 0.02);
                  }}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'narrative' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  STORYLINE
                </button>
                {detailedCaseStudy.metricsBeforeAfter && detailedCaseStudy.metricsBeforeAfter.length > 0 && (
                  <button
                    onClick={() => {
                      setActiveTab('metrics');
                      playTelemetryBeep(750, 0.02);
                    }}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      activeTab === 'metrics' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    METRICS AUDIT
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8 divide-y divide-white/[0.06]">
            {/* Title & Headline summary */}
            <div className="space-y-4">
              {/* Optional Dashboard Preview Image */}
              {project.image && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {project.tagline}
                </p>
              </div>

              {/* Action Links Buttons if present */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.image && (
                  <button
                    onClick={handleDownloadImage}
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900/60 font-mono text-xs font-semibold transition-all shadow-sm cursor-pointer"
                    title="Download Dashboard Image"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Image</span>
                  </button>
                )}

                {project.links && project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-blue-950/70 border border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-900/60 font-mono text-xs font-semibold transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Post</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                )}

                {project.links && project.links.excelDashboard && (
                  <a
                    href={project.links.excelDashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-900/60 font-mono text-xs font-semibold transition-all shadow-sm"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                    <span>Interactive Excel Dashboard</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                )}
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 text-cyan-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* KPI Cards Row if present */}
            {project.kpis && project.kpis.length > 0 && (
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      {kpi.label}
                    </span>
                    <div className="mt-1 flex items-baseline space-x-2">
                      <span className="font-mono text-base sm:text-lg font-bold text-white">{kpi.value}</span>
                      {kpi.change && (
                        <span className="font-mono text-xs text-emerald-400 font-medium">
                          {kpi.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Structured Case Study Narrative */}
            {activeTab === 'narrative' ? (
              isExcelProject ? (
                /* Strict 7-Section Organization for Excel Analytics Projects */
                <div className="pt-6 space-y-7">
                  {/* 01 — Business Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
                      <ShieldAlert className="w-4 h-4" />
                      <span>01 — Business Problem</span>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-6 border-l border-amber-500/30">
                      {project.businessProblem || detailedCaseStudy?.problem}
                    </p>
                  </div>

                  {/* 02 — Objective */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                      <Target className="w-4 h-4" />
                      <span>02 — Objective</span>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-6 border-l border-cyan-500/30">
                      {project.objective || detailedCaseStudy?.objective || detailedCaseStudy?.overview}
                    </p>
                  </div>

                  {/* 03 — Tools */}
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
                      <Wrench className="w-4 h-4" />
                      <span>03 — Tools</span>
                    </div>
                    <div className="pl-6 border-l border-teal-500/30 flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="font-mono text-xs px-3 py-1 rounded bg-slate-900 border border-white/10 text-emerald-300 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 04 — Data Processing */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                      <Database className="w-4 h-4" />
                      <span>04 — Data Processing</span>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-6 border-l border-blue-500/30">
                      {project.dataSource || detailedCaseStudy?.data}
                    </p>
                  </div>

                  {/* 05 — Interactive Visualization */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                      <Sliders className="w-4 h-4" />
                      <span>05 — Interactive Visualization</span>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-6 border-l border-indigo-500/30">
                      {detailedCaseStudy?.dataVisualization || detailedCaseStudy?.analysisProcess || 'Dynamic interactive filters, slicers, and executive visual charts.'}
                    </p>
                  </div>

                  {/* 06 — Key KPIs */}
                  {project.kpis && project.kpis.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-yellow-400 font-mono text-xs uppercase tracking-wider">
                        <BarChart3 className="w-4 h-4" />
                        <span>06 — Key KPIs</span>
                      </div>
                      <div className="pl-6 border-l border-yellow-500/30 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.kpis.map((kpi, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs">
                            <span className="text-slate-400 block">{kpi.label}:</span>
                            <span className="text-white font-bold text-base">{kpi.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 07 — Business Insights */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>07 — Business Insights</span>
                    </div>
                    <div className="pl-6 border-l border-emerald-500/30 space-y-2.5">
                      {(detailedCaseStudy?.keyInsights || project.keyInsights || []).map((insight, i) => (
                        <div key={i} className="flex items-start space-x-2 text-sm text-slate-200">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-6 space-y-7">
                
                {/* 01 — PROJECT OVERVIEW */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>01 — PROJECT OVERVIEW</span>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-6 border-l border-cyan-500/30">
                    {detailedCaseStudy.overview}
                  </p>
                </div>

                {/* 02 — THE PROBLEM */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    <span>02 — THE BUSINESS PROBLEM</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-6 border-l border-amber-500/30">
                    {detailedCaseStudy.problem}
                  </p>
                </div>

                {/* 03 — THE DATA */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                    <Database className="w-4 h-4" />
                    <span>03 — THE DATA SOURCE & PREPARATION</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-6 border-l border-blue-500/30">
                    {detailedCaseStudy.data}
                  </p>
                </div>

                {/* 04 — ANALYSIS PROCESS */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>04 — ANALYSIS PROCESS & METHODOLOGY</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-6 border-l border-indigo-500/30">
                    {detailedCaseStudy.analysisProcess}
                  </p>
                </div>

                {/* 05 — TOOLS USED */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
                    <Wrench className="w-4 h-4" />
                    <span>05 — TOOLS & TECHNOLOGIES USED</span>
                  </div>
                  <div className="pl-6 border-l border-teal-500/30 flex flex-wrap gap-2">
                    {detailedCaseStudy.toolsUsed.map((tool, i) => (
                      <span key={i} className="font-mono text-xs px-3 py-1 rounded bg-slate-900 border border-white/10 text-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 06 — DATA VISUALIZATION */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-yellow-400 font-mono text-xs uppercase tracking-wider">
                    <BarChart3 className="w-4 h-4" />
                    <span>06 — DATA VISUALIZATION & DASHBOARD DESIGN</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-6 border-l border-yellow-500/30">
                    {detailedCaseStudy.dataVisualization}
                  </p>
                </div>

                {/* 07 — KEY INSIGHTS */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>07 — KEY INSIGHTS UNCOVERED</span>
                  </div>
                  <div className="pl-6 border-l border-cyan-500/30 space-y-2">
                    {detailedCaseStudy.keyInsights.map((insight, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-slate-200">
                        <span className="text-cyan-400 font-bold">✓</span>
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 08 — RESULTS & LESSONS LEARNED */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>08 — MEASURABLE RESULTS</span>
                  </div>
                  <div className="pl-6 border-l border-emerald-500/30 space-y-2">
                    {detailedCaseStudy.results.map((res, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-slate-200">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                {detailedCaseStudy.lessonsLearned && detailedCaseStudy.lessonsLearned.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                      LESSONS LEARNED & ANALYTICAL TAKEAWAYS:
                    </span>
                    <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-300">
                      {detailedCaseStudy.lessonsLearned.map((lesson, i) => (
                        <li key={i}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )
          ) : (
              /* Before/After Audit Tab */
              <div className="pt-6 space-y-6">
                <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase block">
                  MEASURABLE BENCHMARKS (BEFORE VS. AFTER)
                </span>
                <div className="space-y-3">
                  {detailedCaseStudy.metricsBeforeAfter?.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="font-mono text-sm text-white font-medium">{item.metric}</span>
                      <div className="flex items-center space-x-4 font-mono text-xs">
                        <div className="text-slate-400">
                          <span className="text-[10px] uppercase text-slate-500 block">BEFORE:</span>
                          <span className="line-through">{item.before}</span>
                        </div>
                        <span className="text-cyan-400">→</span>
                        <div className="text-emerald-400 font-bold">
                          <span className="text-[10px] uppercase text-emerald-500/80 block">AFTER:</span>
                          <span>{item.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#070b13] border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              FARAHAT ADEL FARAHAT // DATA AUDIT
            </span>
            <button
              onClick={onClose}
              className="font-mono text-xs px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
