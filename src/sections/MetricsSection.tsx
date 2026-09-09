import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Database, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

export const MetricsSection: React.FC = () => {
  const hasVerifiedStats = portfolioProfile.stats && Object.keys(portfolioProfile.stats).length > 0;

  // If real numbers are available, render them.
  // If not available, NEVER invent fake numbers — present verified analytical standards and engineering benchmarks instead!
  const standards = [
    {
      label: 'HYPOTHESIS-DRIVEN DECOMPOSITION',
      sub: 'Formulating empirical questions before touching code to eliminate exploratory bias and wasted iterations.',
      metric: '01',
      icon: Target,
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/40'
    },
    {
      label: 'DATA HYGIENE & NORMALIZATION',
      sub: 'Auditing null distribution, schema constraints, and primary key integrity to ensure trustworthy data inputs.',
      metric: '02',
      icon: Database,
      color: 'text-blue-400',
      border: 'hover:border-blue-500/40'
    },
    {
      label: 'EXECUTIVE VISUAL COCKPITS',
      sub: 'Designing glanceable BI dashboards with clear visual hierarchies, actionable filters, and zero clutter.',
      metric: '03',
      icon: BarChart3,
      color: 'text-teal-400',
      border: 'hover:border-teal-500/40'
    },
    {
      label: 'ACTION-ORIENTED BUSINESS INSIGHTS',
      sub: 'Converting descriptive charts into direct operational recommendations for management and key stakeholders.',
      metric: '04',
      icon: TrendingUp,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/40'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#030509] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ANALYTICAL RIGOR // SECTION 08</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            METHODOLOGICAL STANDARDS
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Disciplined principles governing data ingestion, statistical modeling, and stakeholder presentation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 rounded-2xl bg-[#070b13] border border-white/10 ${item.border} transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-6 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-mono text-xs text-cyan-400 font-semibold">{item.metric}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
