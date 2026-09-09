import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Filter, Compass, Cpu, BarChart3, Lightbulb, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioPipelineStages } from '../data/portfolioData';
import { PipelineStage } from '../types/portfolio';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export const ProcessSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [activeStage, setActiveStage] = useState<PipelineStage>(portfolioPipelineStages[0]);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'raw-data': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'clean': return <Filter className="w-5 h-5 text-teal-400" />;
      case 'explore': return <Compass className="w-5 h-5 text-blue-400" />;
      case 'analyze': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'visualize': return <BarChart3 className="w-5 h-5 text-yellow-400" />;
      case 'insight': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'decision': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Database className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#05080E]/70 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PIPELINE_ARCHITECTURE // SECTION 06</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.lab.pipelineTitle}
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 text-left rtl:text-right">
            <span>{isArabic ? 'مسار هندسي متكرر' : 'TRANSFORMATION PROTOCOL'}</span>
            <br />
            <span className="text-cyan-400">{t.lab.pipelineSubtitle}</span>
          </div>
        </div>

        {/* Pipeline Nodes Flow Track (Horizontal on desktop, scrollable) */}
        <div className="relative">
          {/* Animated Connecting Stream Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-slate-800 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Stages Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {portfolioPipelineStages.map((stage, idx) => {
              const isSelected = activeStage.id === stage.id;

              return (
                <motion.div
                  key={stage.id}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setActiveStage(stage);
                    playTelemetryBeep(650 + idx * 50, 0.02);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border relative flex flex-col justify-between text-center items-center ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-950/80 border-white/10 hover:border-white/25 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Step counter */}
                  <span className="font-mono text-[10px] text-slate-500 block mb-2">
                    STAGE 0{idx + 1}
                  </span>

                  {/* Icon */}
                  <div className={`p-2.5 rounded-full mb-3 border transition-colors ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400'
                      : 'bg-slate-900 border-white/10'
                  }`}>
                    {getStageIcon(stage.id)}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="font-mono font-bold text-xs text-white uppercase tracking-wider">
                      {stage.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 block font-sans mt-0.5">
                      {stage.subtitle}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-3 animate-pulse" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Deep Stage Inspector Cockpit */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Purpose (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded">
                  PIPELINE_INSPECTOR // {activeStage.title}
                </span>
                <span className="font-mono text-xs text-slate-500">STAGE {portfolioPipelineStages.indexOf(activeStage) + 1} OF 7</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {activeStage.subtitle}: Operational Definition
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeStage.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                  STAGE INPUT ARTIFACT:
                </span>
                <p className="font-mono text-xs text-cyan-300">
                  {activeStage.inputs}
                </p>
              </div>
            </div>

            {/* Right: Actions & Output (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Transformation actions checklist */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  SYSTEMATIC EXECUTION STEPS:
                </span>
                <div className="space-y-2">
                  {activeStage.actions.map((action, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-900/60 border border-white/5 flex items-start space-x-3 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Deliverable Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block">
                    STAGE VERIFIED OUTPUT:
                  </span>
                  <p className="font-mono text-sm font-semibold text-white mt-0.5">
                    {activeStage.output}
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-bold px-3 py-1 rounded bg-emerald-950/60 border border-emerald-500/30">
                  READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
