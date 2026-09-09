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
  Download,
  Github
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
              {/* Dashboard Preview Image with Custom Frame for BI-01 */}
              {project.image && (
                (project.id === 'project-powerbi-01' || project.number === 'BI-01') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0f172a] via-[#090f1d] to-[#050811] border-2 border-emerald-500/40 shadow-[0_16px_45px_rgba(16,185,129,0.2),0_0_30px_rgba(59,130,246,0.15)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" title="Sales: $2.38M // Net Profit: $2.29M" />
                        <span className="w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]" title="Total Cost: $84.1K" />
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Avg Sales: $475.72" />
                        <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="VIP Customer Segment" />
                        <span className="text-slate-300 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          EXECUTIVE SALES & PROFITABILITY CONSOLE // POWER BI
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-emerald-950/90 border border-emerald-500/50 px-3 py-1 rounded-full text-emerald-300 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold">96.5% NET MARGIN</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_saas_sales_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-blue-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-emerald-300 font-semibold">Star Schema Model // Fact_Sales ↔ Dim_Product, Dim_Customer, Dim_Date</span>
                        <span className="text-slate-400">$2.38M Commercial Revenue</span>
                      </div>
                    </div>
                  </div>
                ) : (project.id === 'project-powerbi-02' || project.number === 'BI-02') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0c1929] via-[#081220] to-[#040912] border-2 border-cyan-500/40 shadow-[0_16px_45px_rgba(6,182,212,0.2),0_0_30px_rgba(59,130,246,0.15)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Total Sales: $780 ($400 in 2024 / $380 in 2025)" />
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Top Customers: Mary ($350), Jossef ($250)" />
                        <span className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.9)]" title="50% Delivered / 50% Shipped" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="SQL UNION ALL & LEFT JOIN Pipeline" />
                        <span className="text-slate-300 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          E-COMMERCE & SQL PIPELINE CONSOLE // POWER BI
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-cyan-950/90 border border-cyan-500/50 px-3 py-1 rounded-full text-cyan-300 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-bold">20 ORDERS • $780</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_ecommerce_sql_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-cyan-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-blue-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-cyan-300 font-semibold">SQL ETL Pipeline // UNION ALL & LEFT JOIN Inactive Buyer Analysis</span>
                        <span className="text-slate-400">50% Shipped / 50% Delivered</span>
                      </div>
                    </div>
                  </div>
                ) : (project.id === 'project-powerbi-03' || project.number === 'BI-03') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#102416] via-[#0b1810] to-[#040a06] border-2 border-emerald-500/40 shadow-[0_16px_45px_rgba(16,185,129,0.2),0_0_30px_rgba(245,158,11,0.15)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" title="Email: $19.7K Profit // 150.80 ROAS" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="Total Profit: $40.75K // Launches by Channel" />
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Spend: 6.74M Top Segment // 47M Impressions (45+)" />
                        <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="Blended ROI: 38.67x // CTR: 0.04" />
                        <span className="text-slate-300 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          DIGITAL MARKETING ANALYTICS // POWER BI
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-emerald-950/90 border border-emerald-500/50 px-3 py-1 rounded-full text-emerald-300 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-bold">ROAS 39.67 • $40.75K PROFIT</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_digital_marketing_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-amber-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-emerald-300 font-semibold">Email ROAS: 150.80x • Lead Attribution Pipeline</span>
                        <span className="text-amber-300 font-medium">ROI: 38.67x • CTR: 0.04</span>
                      </div>
                    </div>
                  </div>
                ) : (project.id === 'project-powerbi-04' || project.number === 'BI-04') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#1c0e30] via-[#120920] to-[#08040f] border-2 border-purple-500/40 shadow-[0_16px_45px_rgba(168,85,247,0.2),0_0_30px_rgba(236,72,153,0.15)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="90bn Total Box Office // 228 Movies" />
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="6-Month Moving Average DAX Trend" />
                        <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.9)]" title="23bn Production Budget // 3.91x ROI" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="19.37% YoY% Movies Growth" />
                        <span className="text-slate-300 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          CINEMA INDUSTRY & TIME INTELLIGENCE // POWER BI
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-purple-950/90 border border-purple-500/50 px-3 py-1 rounded-full text-purple-300 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-xs font-bold">228 MOVIES • $90BN</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_cinema_industry_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-purple-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-pink-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-purple-300 font-semibold">6-Month Moving Average DAX • 3.91x Return on Budget</span>
                        <span className="text-pink-300 font-medium">YoY Movie Growth: +19.37%</span>
                      </div>
                    </div>
                  </div>
                ) : (project.id === 'project-powerbi-05' || project.number === 'BI-05') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#181a20] via-[#101216] to-[#08090b] border-2 border-slate-400/40 shadow-[0_16px_45px_rgba(255,255,255,0.12),0_0_30px_rgba(6,182,212,0.18)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" title="17K Completed Rides (61.44%)" />
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Go Sedan: 27K Requests Segment" />
                        <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)]" title="10K Lost Rides Deficit (38.56%)" />
                        <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" title="2K Cancelled Rides" />
                        <span className="text-slate-200 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          UBER FLEET // DEMAND FULFILLMENT & GAP ANALYTICS
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-black/90 border border-white/40 px-3 py-1 rounded-full text-slate-100 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-bold">17K COMPLETED • 27K TOTAL</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_uber_analytics_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-white pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-cyan-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-cyan-300 font-semibold">61.44% Completed Rides (17K) • 38.56% Lost Demand (10K)</span>
                        <span className="text-slate-100 font-medium">Go Sedan Fleet Segment Filtered</span>
                      </div>
                    </div>
                  </div>
                ) : (project.id === 'project-powerbi-06' || project.number === 'BI-06') ? (
                  <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0e172a] via-[#09101f] to-[#050811] border-2 border-sky-500/40 shadow-[0_16px_45px_rgba(14,165,233,0.2),0_0_30px_rgba(249,115,22,0.14)] space-y-2.5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-1 text-xs font-mono">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Completed: 560 Requests (49%)" />
                        <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)]" title="Pending: 352 Requests (31%)" />
                        <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" title="Canceled: 240 Requests (21%)" />
                        <span className="w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.9)]" title="562.10K SAR Paid Amount" />
                        <span className="text-slate-200 font-bold ml-2 rtl:ml-0 rtl:mr-2 tracking-wider hidden sm:inline">
                          SERVICE REQUEST MANAGEMENT & REGIONAL SLA // POWER BI
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-sky-950/90 border border-sky-500/50 px-3 py-1 rounded-full text-sky-300 font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-xs font-bold">1.2K REQUESTS • 49% COMPLETED</span>
                      </div>
                    </div>

                    {/* Image Surface with Corner Accents */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl group">
                      <img
                        src={project.image || "/images/powerbi_service_request_dashboard.png"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-4 h-4 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-cyan-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-4 h-4 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-orange-400 pointer-events-none opacity-80" />
                      
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 pointer-events-none">
                        <span className="text-cyan-300 font-semibold">Completed: 49% (560) • Pending: 31% (352) • Canceled: 21% (240)</span>
                        <span className="text-sky-300 font-medium">Riyadh Top Paid: 130.67K SAR • Total: 562.10K SAR</span>
                      </div>
                    </div>
                  </div>
                ) : (
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
                )
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

                {project.links && project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-800 font-mono text-xs font-semibold transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
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
