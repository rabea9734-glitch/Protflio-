import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  BarChart3, 
  FolderKanban, 
  ArrowRight,
  ArrowLeft,
  Linkedin,
  FileSpreadsheet,
  ExternalLink,
  Upload,
  AlertCircle,
  Github,
  Maximize2,
  X
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { playTelemetryBeep } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cardImages, setCardImages] = useState<Record<string, string>>({});
  const [previewModalImg, setPreviewModalImg] = useState<{ src: string; title: string } | null>(null);

  const powerBIProjects = portfolioProjects.filter(
    (p) => p.subsection === 'Power BI Analytics Projects' || p.number.startsWith('BI-')
  );
  const excelProjects = portfolioProjects.filter(
    (p) => p.subsection === 'Excel Analytics Projects' || p.number.startsWith('EX-')
  );

  const categories = [
    { id: 'all', label: isArabic ? `جميع المشاريع (${portfolioProjects.length})` : `ALL PROJECTS (${portfolioProjects.length})`, count: portfolioProjects.length },
    { id: 'powerbi', label: isArabic ? `مشاريع Power BI (${powerBIProjects.length})` : `POWER BI (${powerBIProjects.length})`, count: powerBIProjects.length },
    { id: 'excel', label: isArabic ? `مشاريع Excel (${excelProjects.length})` : `EXCEL (${excelProjects.length})`, count: excelProjects.length },
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === 'excel') return p.subsection === 'Excel Analytics Projects' || p.number.startsWith('EX-');
    if (activeCategory === 'powerbi') return p.subsection === 'Power BI Analytics Projects' || p.number.startsWith('BI-');
    return true;
  });

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    playTelemetryBeep(1100, 0.05);
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const renderProjectCard = (project: Project) => {
    const isProjectBI01 = project.id === 'project-powerbi-01' || project.number === 'BI-01';
    const isProjectBI02 = project.id === 'project-powerbi-02' || project.number === 'BI-02';
    const isProjectBI03 = project.id === 'project-powerbi-03' || project.number === 'BI-03';
    const isProjectBI04 = project.id === 'project-powerbi-04' || project.number === 'BI-04';
    const isProjectBI05 = project.id === 'project-powerbi-05' || project.number === 'BI-05';
    const isProjectBI06 = project.id === 'project-powerbi-06' || project.number === 'BI-06';
    const projectImg = isProjectBI01 
      ? '/images/powerbi_saas_sales_dashboard.png' 
      : isProjectBI02 
      ? '/images/powerbi_ecommerce_sql_dashboard.png' 
      : isProjectBI03
      ? '/images/powerbi_digital_marketing_dashboard.png'
      : isProjectBI04
      ? '/images/powerbi_cinema_industry_dashboard.png'
      : isProjectBI05
      ? '/images/powerbi_uber_analytics_dashboard.png'
      : isProjectBI06
      ? '/images/powerbi_service_request_dashboard.png'
      : (cardImages[project.id] || project.image);
    const isExcelProject = project.subsection === 'Excel Analytics Projects';
    const isPowerBIProject = project.subsection === 'Power BI Analytics Projects' || project.tools.some(t => t.toLowerCase().includes('power bi'));

    return (
      <motion.div
        key={project.id}
        data-cursor="view"
        onMouseEnter={() => setHoveredProjectId(project.id)}
        onMouseLeave={() => setHoveredProjectId(null)}
        onClick={() => handleOpenProject(project)}
        className={`group relative rounded-2xl bg-[#080d17] border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between text-left rtl:text-right ${
          isProjectBI01
            ? 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.24)] ring-1 ring-emerald-500/30'
            : isProjectBI02
            ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(6,182,212,0.24)] ring-1 ring-cyan-500/30'
            : isProjectBI03
            ? 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.24),0_0_30px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/30'
            : isProjectBI04
            ? 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25),0_0_30px_rgba(236,72,153,0.18)] ring-1 ring-purple-500/30'
            : isProjectBI05
            ? 'border-slate-400/40 hover:border-cyan-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.18),0_0_30px_rgba(6,182,212,0.22)] ring-1 ring-white/20'
            : isProjectBI06
            ? 'border-sky-500/40 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(14,165,233,0.24),0_0_30px_rgba(249,115,22,0.18)] ring-1 ring-sky-500/30'
            : isPowerBIProject 
            ? 'border-amber-500/25 hover:border-amber-400/80 hover:shadow-[0_16px_45px_rgba(245,158,11,0.22)]'
            : isExcelProject
            ? 'border-emerald-500/25 hover:border-emerald-400/80 hover:shadow-[0_16px_45px_rgba(16,185,129,0.2)]'
            : 'border-white/10 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(6,182,212,0.18)]'
        }`}
      >
        {/* Top Accent Gradient Bar */}
        <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${
          isProjectBI01
            ? 'from-emerald-400 via-blue-500 to-purple-500'
            : isProjectBI02
            ? 'from-cyan-400 via-sky-400 to-blue-600'
            : isProjectBI03
            ? 'from-emerald-500 via-amber-400 to-yellow-500'
            : isProjectBI04
            ? 'from-purple-600 via-pink-500 to-amber-400'
            : isProjectBI05
            ? 'from-white via-cyan-400 to-slate-800'
            : isProjectBI06
            ? 'from-sky-400 via-blue-500 to-amber-500'
            : project.accentColor || 
              (isPowerBIProject 
                ? 'from-amber-400 via-yellow-400 to-amber-600' 
                : isExcelProject 
                ? 'from-emerald-400 via-teal-400 to-emerald-600' 
                : 'from-cyan-400 to-blue-500')
        }`} />

        {/* Card Main Body */}
        <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
          
          <div className="space-y-4">
            {/* Meta Bar: Case Number & Badges */}
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md border ${
                isProjectBI01
                  ? 'text-emerald-300 bg-emerald-950/85 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                  : isProjectBI02
                  ? 'text-cyan-300 bg-cyan-950/85 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : isProjectBI03
                  ? 'text-amber-300 bg-amber-950/85 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                  : isProjectBI04
                  ? 'text-purple-300 bg-purple-950/85 border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                  : isProjectBI05
                  ? 'text-slate-100 bg-slate-900/90 border-slate-400/50 shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : isProjectBI06
                  ? 'text-sky-300 bg-sky-950/85 border-sky-500/40 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
                  : isPowerBIProject 
                  ? 'text-amber-400 bg-amber-950/70 border-amber-500/30'
                  : isExcelProject
                  ? 'text-emerald-400 bg-emerald-950/70 border-emerald-500/30'
                  : 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30'
              }`}>
                {isArabic ? `دراسة // ${project.number}` : `CASE // ${project.number}`}
              </span>
              <div className="flex items-center gap-1.5">
                {isProjectBI01 ? (
                  <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/85 border border-emerald-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SaaS POWER BI
                  </span>
                ) : isProjectBI02 ? (
                  <span className="font-mono text-[10px] text-cyan-300 bg-cyan-950/85 border border-cyan-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SQL ETL & POWER BI
                  </span>
                ) : isProjectBI03 ? (
                  <span className="font-mono text-[10px] text-amber-300 bg-emerald-950/90 border border-emerald-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    GROWTH & ROAS ANALYTICS
                  </span>
                ) : isProjectBI04 ? (
                  <span className="font-mono text-[10px] text-purple-300 bg-purple-950/90 border border-purple-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    CINEMA & DAX INTELLIGENCE
                  </span>
                ) : isProjectBI05 ? (
                  <span className="font-mono text-[10px] text-slate-100 bg-black/90 border border-white/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    UBER FLEET // 27K RIDES
                  </span>
                ) : isProjectBI06 ? (
                  <span className="font-mono text-[10px] text-sky-300 bg-sky-950/90 border border-sky-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    SERVICE OPS // 1.2K REQUESTS
                  </span>
                ) : isExcelProject ? (
                  <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded font-bold tracking-wider">
                    MICROSOFT EXCEL
                  </span>
                ) : isPowerBIProject ? (
                  <span className="font-mono text-[10px] text-amber-300 bg-amber-950/80 border border-amber-500/50 px-2.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1">
                    <BarChart3 className="w-3 h-3 text-amber-400 inline" />
                    POWER BI
                  </span>
                ) : null}
                <span className="font-mono text-[11px] text-slate-400 uppercase truncate max-w-[130px]">
                  {project.category}
                </span>
              </div>
            </div>

            {/* 1. Project Image / Thumbnail */}
            {isProjectBI01 ? (
              /* Custom Decorated Executive Bezel Tailored to the SaaS Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#0f172a] via-[#090f1d] to-[#050811] border-2 border-emerald-500/40 hover:border-emerald-400 shadow-[0_12px_36px_rgba(16,185,129,0.22),0_0_25px_rgba(59,130,246,0.18)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Emerald, Coral, Blue, Purple) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Emerald / Mint dot for Sales & Profit */}
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" title="Sales: $2.38M // Net Profit: $2.29M" />
                    {/* Coral / Red dot for Total Cost */}
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]" title="Total Cost: $84.1K" />
                    {/* Royal Blue dot for Avg Sales & Top 5 Products */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Avg Sales: $475.72" />
                    {/* Purple dot for VIP Customer Segment */}
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="High-Value Tier: $2.08M" />
                    <span className="text-slate-300 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      EXECUTIVE CONSOLE // DAX
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-emerald-950/85 border border-emerald-500/50 px-2 py-0.5 rounded-full text-emerald-300 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-bold">96.5% MARGIN</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-blue-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-cyan-950 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          SaaS UI & Star Schema
                        </span>
                        <span className="text-slate-300 font-medium">$2.38M Sales • 18.4K Clients</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : isProjectBI02 ? (
              /* Custom Decorated Console Tailored to the E-Commerce & SQL Pipeline Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#0c1929] via-[#081220] to-[#040912] border-2 border-cyan-500/40 hover:border-cyan-400 shadow-[0_12px_36px_rgba(6,182,212,0.22),0_0_25px_rgba(59,130,246,0.18)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Cyan, Blue, Amber, Teal) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Blue dot for Total Sales */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Total Sales: $780 ($400 in 2024 / $380 in 2025)" />
                    {/* Cyan dot for Top Customers & Products */}
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Top Customers: Mary ($350), Jossef ($250)" />
                    {/* Teal dot for Fulfillment status */}
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.9)]" title="50% Delivered / 50% Shipped" />
                    {/* Amber dot for SQL UNION ALL */}
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="SQL UNION ALL & LEFT JOIN Pipeline" />
                    <span className="text-slate-300 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      E-COMMERCE CONSOLE // SQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-cyan-950/85 border border-cyan-500/50 px-2 py-0.5 rounded-full text-cyan-300 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[9px] font-bold">20 ORDERS • $780</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-cyan-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-blue-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-cyan-950 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          SQL Views & 3D Geo Map
                        </span>
                        <span className="text-slate-300 font-medium">50% Shipped / 50% Delivered</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : isProjectBI03 ? (
              /* Custom Decorated Console Tailored to the Digital Marketing & Growth Analytics Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#102416] via-[#0b1810] to-[#040a06] border-2 border-emerald-500/40 hover:border-emerald-400 shadow-[0_12px_36px_rgba(16,185,129,0.22),0_0_25px_rgba(245,158,11,0.18)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Forest Green, Gold, Dark Navy, Violet) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Green dot for Email Profit & 150.80 ROAS */}
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" title="Email: $19.7K Profit // 150.80 ROAS" />
                    {/* Gold dot for Total Profit $40.75K & Launches */}
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="Total Profit: $40.75K // Launches by Channel" />
                    {/* Navy/Blue dot for Spend & Audience */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" title="Spend: 6.74M Top Segment // 47M Impressions (45+)" />
                    {/* Purple dot for Cross-Channel Attribution */}
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="Blended ROI: 38.67x // CTR: 0.04" />
                    <span className="text-slate-300 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      MARKETING CONSOLE // ROAS & ROI
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-emerald-950/85 border border-emerald-500/50 px-2 py-0.5 rounded-full text-emerald-300 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] font-bold">ROAS 39.67 • $40.75K</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents in Emerald and Amber */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-amber-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-emerald-950 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Email ROAS: 150.80x
                        </span>
                        <span className="text-amber-300 font-medium">Blended ROAS: 39.67x • ROI: 38.67x</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : isProjectBI04 ? (
              /* Custom Decorated Console Tailored to the Cinema Industry & Box Office Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#1c0e30] via-[#120920] to-[#08040f] border-2 border-purple-500/40 hover:border-purple-400 shadow-[0_12px_36px_rgba(168,85,247,0.25),0_0_25px_rgba(236,72,153,0.18)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Cinema Neon Purple, Cyan Line, Magenta Budget, Gold YoY) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Purple dot for $90Bn Total Box Office */}
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" title="90bn Total Box Office // 228 Movies" />
                    {/* Cyan dot for 6-Month Moving Average DAX */}
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="6-Month Moving Average DAX Trend" />
                    {/* Magenta dot for $23Bn Budget */}
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.9)]" title="23bn Production Budget // 3.91x ROI" />
                    {/* Gold dot for YoY% Movies Growth */}
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" title="19.37% YoY% Movies Growth" />
                    <span className="text-slate-300 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      CINEMA CONSOLE // TIME INTELLIGENCE
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-purple-950/85 border border-purple-500/50 px-2 py-0.5 rounded-full text-purple-300 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[9px] font-bold">228 MOVIES • $90BN</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents in Neon Purple and Pink */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-purple-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-pink-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-purple-950 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          6-Mo Moving Avg • 3.91x ROI
                        </span>
                        <span className="text-pink-300 font-medium">YoY Growth: +19.37%</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-400/40 flex items-center justify-center mx-auto text-purple-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : isProjectBI05 ? (
              /* Custom Decorated Console Tailored to the Uber Ride Performance & Fleet Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#181a20] via-[#101216] to-[#08090b] border-2 border-slate-400/40 hover:border-cyan-300 shadow-[0_12px_36px_rgba(255,255,255,0.15),0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Uber White, Cyan Fulfilled, Navy Lost, Red Cancelled) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Platinum dot for 17K Completed Rides */}
                    <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" title="17K Completed Rides (61.44%)" />
                    {/* Cyan dot for Go Sedan Segment */}
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Go Sedan: 27K Requests Segment" />
                    {/* Navy dot for 10K Lost Rides */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)]" title="10K Lost Rides Deficit (38.56%)" />
                    {/* Red dot for 2K Cancelled */}
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" title="2K Cancelled Rides" />
                    <span className="text-slate-200 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      UBER FLEET // DEMAND FULFILLMENT
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-black/90 border border-white/40 px-2 py-0.5 rounded-full text-slate-100 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[9px] font-bold">17K COMPLETED • 27K TOTAL</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents in Sleek White and Cyan */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-white pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-cyan-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-black/90 hover:bg-slate-900 border border-white/40 hover:border-cyan-400 text-slate-200 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/90 backdrop-blur-md border border-white/20 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          61.44% Completed • 38.56% Lost Gap
                        </span>
                        <span className="text-slate-100 font-medium">Go Sedan Fleet Segment</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/30 flex items-center justify-center mx-auto text-cyan-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : isProjectBI06 ? (
              /* Custom Decorated Console Tailored to the Service Request Management & Regional SLA Dashboard */
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#0e172a] via-[#09101f] to-[#050811] border-2 border-sky-500/40 hover:border-cyan-400 shadow-[0_12px_36px_rgba(14,165,233,0.22),0_0_25px_rgba(249,115,22,0.16)] transition-all duration-300 space-y-2 group/bezel">
                {/* Console Window Header with color-matched traffic dots (Cyan Completed, Royal Blue Pending, Orange Canceled, Sky KSA) */}
                <div className="flex items-center justify-between px-1 text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Cyan dot for Completed 560 (49%) */}
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" title="Completed: 560 Requests (49%)" />
                    {/* Royal Blue dot for Pending 352 (31%) */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)]" title="Pending: 352 Requests (31%)" />
                    {/* Orange dot for Canceled 240 (21%) */}
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" title="Canceled: 240 Requests (21%)" />
                    {/* Sky dot for 562.10K SAR Paid Amount */}
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.9)]" title="562.10K SAR Paid Amount" />
                    <span className="text-slate-200 font-bold ml-1.5 rtl:ml-0 rtl:mr-1.5 tracking-wider hidden sm:inline">
                      SERVICE OPS // REGIONAL SLA
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-sky-950/85 border border-sky-500/50 px-2 py-0.5 rounded-full text-sky-300 font-semibold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-[9px] font-bold">1.2K REQUESTS • 49% COMPLETED</span>
                  </div>
                </div>

                {/* Inner Image Screen Surface */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-inner group/inner">
                  {projectImg ? (
                    <>
                      <img
                        src={projectImg}
                        alt={project.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-top group-hover/inner:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Corner Target Accents in Sky and Orange */}
                      <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 w-3 h-3 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-cyan-400 pointer-events-none opacity-80" />
                      <div className="absolute bottom-2 right-2 rtl:right-auto rtl:left-2 w-3 h-3 border-b-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-orange-400 pointer-events-none opacity-80" />

                      {/* Action Buttons: Expand */}
                      <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModalImg({ src: projectImg, title: project.title });
                          }}
                          className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-sky-950 border border-sky-500/40 hover:border-cyan-400 text-sky-300 hover:text-white transition-all opacity-90 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                          title={isArabic ? 'تكبير وعرض الصورة بالحجم الكامل' : 'Expand Full Resolution'}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Floating Info Pill */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none opacity-95">
                        <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          Completed: 49% • Pending: 31% • Canceled: 21%
                        </span>
                        <span className="text-sky-300 font-medium">Riyadh Top: 130.67K SAR</span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-400/40 flex items-center justify-center mx-auto text-sky-400 mb-2">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                        {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Standard Project Image / Thumbnail */
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-white/10 group-hover:border-amber-400/40 transition-colors shadow-inner">
                {projectImg ? (
                  <>
                    <img
                      src={projectImg}
                      alt={project.title}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform mb-2 ${
                      isPowerBIProject ? 'bg-amber-950/80 border border-amber-400/40 text-amber-400' : 'bg-cyan-950/80 border border-cyan-400/40 text-cyan-400'
                    }`}>
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-300 font-semibold block uppercase tracking-wider">
                      {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d17]/85 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            {/* 2. Project Title */}
            <div className="space-y-1">
              <h3 className={`font-display text-lg sm:text-xl font-bold text-white transition-colors flex items-center justify-between ${
                isProjectBI01 ? 'group-hover:text-emerald-300' : isPowerBIProject ? 'group-hover:text-amber-300' : 'group-hover:text-cyan-300'
              }`}>
                <span>{project.title}</span>
                <ArrowUpRight className={`w-4 h-4 shrink-0 ml-1 transition-all ${
                  isProjectBI01
                    ? 'text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    : isPowerBIProject 
                    ? 'text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' 
                    : 'text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                }`} />
              </h3>
            </div>

            {/* 3. Tools Used */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                    isProjectBI01
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 font-medium'
                      : isPowerBIProject 
                      ? 'bg-amber-950/40 border-amber-500/25 text-amber-300 font-medium'
                      : isExcelProject
                      ? 'bg-emerald-950/40 border-emerald-500/25 text-emerald-300 font-medium'
                      : 'bg-slate-900 border-white/5 text-cyan-300'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* 4. Short Business Problem */}
            <div className={`p-3 rounded-xl border space-y-1 ${
              isProjectBI01
                ? 'bg-emerald-950/20 border-emerald-500/30'
                : isPowerBIProject 
                ? 'bg-amber-950/20 border-amber-500/25' 
                : isExcelProject 
                ? 'bg-emerald-950/20 border-emerald-500/25' 
                : 'bg-slate-900/60 border-white/10'
            }`}>
              <span className={`font-mono text-[10px] font-semibold uppercase tracking-wider block ${
                isProjectBI01 ? 'text-emerald-400' : isPowerBIProject ? 'text-amber-400' : isExcelProject ? 'text-emerald-400' : 'text-cyan-400'
              }`}>
                {isArabic ? 'المشكلة وأهداف ذكاء الأعمال:' : 'Business Problem & Objectives:'}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {project.businessProblem || project.detailedCaseStudy?.problem}
              </p>
            </div>

            {/* 5. Key Metrics / KPIs */}
            {project.kpis && project.kpis.length > 0 && (
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                {project.kpis.slice(0, 4).map((kpi, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900/80 border border-white/5 font-mono">
                    <span className="text-[10px] text-slate-400 uppercase tracking-tight block truncate">
                      {kpi.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5 truncate">
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons: GitHub, LinkedIn, Excel Dashboard, Case Study */}
          <div className="pt-3.5 border-t border-white/10 space-y-2.5">
            {/* Direct External Links Bar */}
            {project.links && (project.links.github || project.links.linkedin || project.links.excelDashboard || project.links.liveDemo) && (
              <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white text-[11px] font-mono font-semibold transition-colors shadow-sm cursor-pointer"
                    title={isArabic ? 'فتح مستودع الكود على جيت هاب' : 'Open GitHub Repository'}
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                  </a>
                )}

                {project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-blue-950/50 hover:bg-blue-900/70 border border-blue-500/40 text-blue-300 hover:text-white text-[11px] font-mono font-semibold transition-colors shadow-sm cursor-pointer"
                    title={isArabic ? 'عرض المنشور على لينكد إن' : 'Open LinkedIn Post'}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                  </a>
                )}

                {project.links.excelDashboard && (
                  <a
                    href={project.links.excelDashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 hover:text-white text-[11px] font-mono font-semibold transition-colors"
                    title={isArabic ? 'فتح ملف ولوحة الإكسيل' : 'Open Excel Dashboard'}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="truncate">Excel File</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5 shrink-0" />
                  </a>
                )}

                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-amber-950/50 hover:bg-amber-900/60 border border-amber-500/30 text-amber-300 hover:text-white text-[11px] font-mono font-semibold transition-colors"
                    title="Open Live Report"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate">Live Report</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5 shrink-0" />
                  </a>
                )}
              </div>
            )}

            {/* View Full Case Study CTA */}
            <div className="flex items-center justify-between font-mono text-xs pt-1">
              <span className={`text-[11px] ${
                isPowerBIProject ? 'text-amber-400/90 font-semibold' : isExcelProject ? 'text-emerald-400/90 font-semibold' : 'text-slate-400'
              }`}>
                {isPowerBIProject 
                  ? (isArabic ? 'دراسة حالة Power BI' : 'POWER BI CASE STUDY') 
                  : isExcelProject
                  ? (isArabic ? 'دراسة حالة Excel' : 'EXCEL CASE STUDY')
                  : (isArabic ? 'دراسة حالة تفصيلية' : 'CASE STUDY AUDIT')}
              </span>
              <span className={`inline-flex items-center space-x-1 rtl:space-x-reverse font-bold group-hover:underline ${
                isPowerBIProject ? 'text-amber-400' : isExcelProject ? 'text-emerald-400' : 'text-cyan-400'
              }`}>
                <span>{t.projects.caseStudyBtn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 min-h-[85vh]">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.projects.sectionBadge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {t.projects.sectionTitle}
            </h2>
            <p className="font-sans text-sm text-slate-300 mt-2 max-w-2xl">
              {t.projects.sectionSubtitle}
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400 text-left rtl:text-right">
            <span>{isArabic ? 'المنهجية: المشكلة ← البيانات ← الرؤى ← النتيجة' : 'NARRATIVE: PROBLEM → DATA → INSIGHT → RESULT'}</span>
            <br />
            <span className="text-cyan-400">
              {isArabic ? 'اضغط على أي مشروع لفتح دراسة الحالة الكاملة' : 'SELECT ANY PROJECT TO AUDIT FULL CASE STUDY'}
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  playTelemetryBeep(700, 0.02);
                }}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setShowAllProjects(!showAllProjects);
              playTelemetryBeep(800, 0.03);
            }}
            className="font-mono text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl bg-slate-900/60 flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
          >
            <span>
              {showAllProjects 
                ? (isArabic ? 'عرض مشاريع إكسيل المميزة' : 'SHOW FEATURED (TOP 4)') 
                : (isArabic ? 'عرض جميع المشاريع' : 'VIEW ALL PROJECTS')}
            </span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Projects Grid Container */}
        <div className="space-y-12">
          {/* 1. POWER BI SHOWCASE (When viewing 'all' or 'powerbi') */}
          {(activeCategory === 'all' || activeCategory === 'powerbi') && (
            <div className="space-y-6">
              {/* Power BI Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 via-[#0c121e] to-amber-950/20 border border-amber-500/30 shadow-[0_4px_25px_rgba(245,158,11,0.08)] gap-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                      <span>Power BI Enterprise Projects</span>
                      <span className="text-[11px] font-mono text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        {isArabic ? '06 مشاريع معتمدة' : '06 PROJECTS'}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                      {isArabic 
                        ? 'لوحات تحكم ذكاء أعمال مؤسسية تفاعلية، نمذجة بيانات متقدمة بمقاييس DAX مع روابط مباشرة لـ GitHub و LinkedIn'
                        : 'Enterprise Power BI dashboards, advanced star schema data modeling, custom DAX metrics, and verified GitHub/LinkedIn repositories'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="font-mono text-xs text-amber-400 font-semibold bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30">
                    POWER BI // GITHUB // LINKEDIN
                  </span>
                </div>
              </div>

              {/* 6 Power BI Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {powerBIProjects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

          {/* 2. EXCEL SHOWCASE (When viewing 'all' or 'excel') */}
          {(activeCategory === 'all' || activeCategory === 'excel') && (
            <div className="space-y-6">
              {/* Excel Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0c121e] to-emerald-950/20 border border-emerald-500/30 shadow-[0_4px_25px_rgba(16,185,129,0.08)] gap-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                      <span>Excel Analytics Projects</span>
                      <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        {isArabic ? '04 مشاريع معتمدة' : '04 PROJECTS'}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                      {isArabic 
                        ? 'لوحات تحكم تفاعلية ونماذج ذكاء الأعمال وتحليل البيانات المالي والتشغيلي باستخدام Microsoft Excel و Power Query'
                        : 'Interactive financial and operational dashboards, Power Query pipelines, and DAX models built in Microsoft Excel'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="font-mono text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    EXCEL // POWER QUERY // DAX
                  </span>
                </div>
              </div>

              {/* 4 Excel Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {excelProjects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}
        </div>

        {/* Big Bottom Action: VIEW ALL PROJECTS */}
        <div className="text-center pt-4">
          <button
            onClick={() => {
              setShowAllProjects(!showAllProjects);
              playTelemetryBeep(900, 0.04);
            }}
            className="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            <FolderKanban className="w-4 h-4" />
            <span>
              {showAllProjects 
                ? (isArabic ? 'الرجوع إلى أهم 3 مشاريع' : 'COLLAPSE TO TOP 3') 
                : (isArabic ? 'عرض جميع المشاريع' : 'VIEW ALL PROJECTS')}
            </span>
          </button>
        </div>

      </div>

      {/* Case Study Modal Viewer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          playTelemetryBeep(600, 0.03);
        }}
      />

      {/* Full-Resolution Dashboard Lightbox Preview */}
      {previewModalImg && (
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setPreviewModalImg(null)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-[#0b1220] border-2 border-emerald-500/50 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-950/90 font-mono">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-xs sm:text-sm font-bold text-white ml-2 rtl:ml-0 rtl:mr-2 tracking-wide truncate max-w-[280px] sm:max-w-md">
                  {previewModalImg.title} // 4K PREVIEW
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setPreviewModalImg(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-950/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 overflow-auto flex items-center justify-center bg-slate-950/60">
              <img 
                src={previewModalImg.src} 
                alt={previewModalImg.title} 
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="max-h-[78vh] w-auto object-contain rounded-xl border border-white/10 shadow-2xl select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
