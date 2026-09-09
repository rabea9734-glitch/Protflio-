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
  Download
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

  const categories = [
    { id: 'all', label: isArabic ? 'جميع المشاريع' : 'ALL PROJECTS' },
    { id: 'excel', label: isArabic ? 'مشاريع تحليلات إكسيل' : 'EXCEL ANALYTICS PROJECTS' },
    { id: 'revenue', label: isArabic ? 'الإيرادات والاحتفاظ بالعملاء' : 'REVENUE & RETENTION' },
    { id: 'operations', label: isArabic ? 'سلاسل الإمداد والعمليات' : 'SUPPLY CHAIN & OPS' },
    { id: 'commercial', label: isArabic ? 'التجارة والنمو' : 'COMMERCIAL & GROWTH' },
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === 'excel') return p.subsection === 'Excel Analytics Projects';
    if (activeCategory === 'revenue') return p.category.toLowerCase().includes('revenue');
    if (activeCategory === 'operations') return p.category.toLowerCase().includes('supply');
    if (activeCategory === 'commercial') return p.category.toLowerCase().includes('commercial');
    return true;
  });

  const displayedProjects = (showAllProjects || activeCategory !== 'all') 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    playTelemetryBeep(1100, 0.05);
  };

  const handleImageUpload = async (projectId: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/upload-project-image', {
        method: 'POST',
        body: file,
      });
      if (res.ok) {
        const data = await res.json();
        const imageUrl = `${data.url}?t=${Date.now()}`;
        setCardImages(prev => ({ ...prev, [projectId]: imageUrl }));
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setCardImages(prev => ({ ...prev, [projectId]: e.target!.result as string }));
          }
        };
        reader.readAsDataURL(file);
      }
    } catch {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setCardImages(prev => ({ ...prev, [projectId]: e.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadImage = async (e: React.MouseEvent, imageSrc: string, projectId: string) => {
    e.stopPropagation();
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const extension = imageSrc.split('.').pop()?.split('?')[0] || 'png';
      a.download = `${projectId}-dashboard.${extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      const a = document.createElement('a');
      a.href = imageSrc;
      a.download = `${projectId}-dashboard.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

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
                ? (isArabic ? 'عرض أهم 3 مشاريع' : 'SHOW FEATURED (TOP 3)') 
                : (isArabic ? 'عرض جميع المشاريع' : 'VIEW ALL PROJECTS')}
            </span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {/* Subsection Header for Excel Analytics Projects */}
          {(activeCategory === 'all' || activeCategory === 'excel') && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 gap-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                    <span>Excel Analytics Projects</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full font-normal">
                      {isArabic ? '04 مشاريع مفعّلة' : '04 PROJECTS ACTIVE'}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">
                    {isArabic 
                      ? 'لوحات تحكم تفاعلية ونماذج ذكاء الأعمال وتحليل البيانات المتقدم باستخدام Microsoft Excel'
                      : 'Interactive dashboards, business intelligence models, and advanced data visualization with Microsoft Excel'}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[11px] text-emerald-400/80 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/20 self-start sm:self-auto">
                {isArabic ? 'إكسيل • باور كويري • نمذجة' : 'EXCEL // POWER QUERY // BI'}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => {
              const projectImg = cardImages[project.id] || project.image;
              const isExcelProject = project.subsection === 'Excel Analytics Projects';

              return (
                <motion.div
                  key={project.id}
                  data-cursor="view"
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  onClick={() => handleOpenProject(project)}
                  className="group relative rounded-2xl bg-[#080d17] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(6,182,212,0.18)] text-left rtl:text-right"
                >
                  {/* Top Ambient Highlight Gradient */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-4">
                      {/* Meta Bar: Case Number & Category */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
                          {isArabic ? `دراسة // ${project.number}` : `CASE // ${project.number}`}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isExcelProject && (
                            <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                              EXCEL
                            </span>
                          )}
                          <span className="font-mono text-[11px] text-slate-400 uppercase truncate max-w-[150px]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* 1. Project Image / Thumbnail */}
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                        {projectImg ? (
                          <>
                            <img
                              src={projectImg}
                              alt={project.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                // If broken image link, switch to telemetry preview
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            {/* Hover download button overlay */}
                            <button
                              type="button"
                              onClick={(e) => handleDownloadImage(e, projectImg, project.id)}
                              className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 p-1.5 rounded-lg bg-slate-950/80 hover:bg-cyan-950 border border-white/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all opacity-80 hover:opacity-100 shadow-md backdrop-blur-sm cursor-pointer"
                              title="Download Image"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-400 group-hover:scale-110 transition-transform mb-2">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[10px] text-cyan-300 font-semibold block uppercase tracking-wider">
                              {project.imagePlaceholder || "DASHBOARD PREVIEW"}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080d17]/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* 2. Project Title */}
                      <div className="space-y-1">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                        </h3>
                      </div>

                      {/* 3. Category & 4. Tools Used */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-cyan-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* 5. Short Business Problem */}
                      <div className="p-3 rounded-xl bg-amber-950/15 border border-amber-500/20 space-y-1">
                        <span className="font-mono text-[10px] text-amber-400 font-semibold uppercase tracking-wider block">
                          {isArabic ? 'المشكلة التشغيلية والمالية:' : 'Short Business Problem:'}
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {project.businessProblem || project.detailedCaseStudy?.problem}
                        </p>
                      </div>

                      {/* 6. Selected KPIs */}
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

                    {/* Action Buttons: 7. LinkedIn, 8. Excel Dashboard & 9. View Case Study */}
                    <div className="pt-3 border-t border-white/5 space-y-2.5">
                      {/* External Direct Links if present */}
                      {project.links && (project.links.linkedin || project.links.excelDashboard) && (
                        <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
                          {project.links.linkedin && (
                            <a
                              href={project.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/30 text-blue-300 hover:text-white text-[11px] font-mono font-medium transition-colors"
                              title="Open LinkedIn Post"
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
                              className="inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-2.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 hover:text-white text-[11px] font-mono font-medium transition-colors"
                              title="Open Interactive Excel Dashboard"
                            >
                              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="truncate">Excel Dashboard</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5 shrink-0" />
                            </a>
                          )}
                        </div>
                      )}

                      {/* 9. View Case Study Button */}
                      <div className="flex items-center justify-between font-mono text-xs pt-1">
                        <span className="text-slate-400 text-[11px] group-hover:text-slate-200">
                          {isArabic ? 'دراسة حالة تفصيلية' : 'CASE STUDY AUDIT'}
                        </span>
                        <span className="inline-flex items-center space-x-1 rtl:space-x-reverse text-cyan-400 font-bold group-hover:underline">
                          <span>{t.projects.caseStudyBtn}</span>
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
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
    </section>
  );
};
