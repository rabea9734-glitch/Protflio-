import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Award, 
  GraduationCap, 
  Terminal, 
  Database, 
  Compass, 
  Lightbulb, 
  FileText,
  Camera,
  CheckCircle2,
  Linkedin,
  Mail,
  Phone,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioProfile, portfolioEducation, portfolioCertifications } from '../data/portfolioData';
import { playTelemetryBeep } from '../utils/sound';
import { useProfilePhoto } from '../context/PhotoContext';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { isArabic } = useLanguage();
  const { photoUrl } = useProfilePhoto();
  const [activeTab, setActiveTab] = useState<'about' | 'journey' | 'approach' | 'education' | 'interests'>('about');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>DATA_PROFILE // SECTION 02</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              ABOUT FARAHAT
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 text-left sm:text-right">
            <span>OPERATING STATUS: AVAILABLE</span>
            <br />
            <span className="text-cyan-400">DATA ANALYST & DECISION MODELING</span>
          </div>
        </div>

        {/* Analytical Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait Container & Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden group">
              {/* Scanline subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />

              {/* Portrait Container */}
              <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center ${
                photoUrl 
                  ? 'aspect-[3/4] bg-slate-950' 
                  : 'aspect-[4/3] p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40'
              }`}>
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={portfolioProfile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3 select-none">
                    {/* Concentric Data Ring Avatar */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[spin_16s_linear_infinite]" />
                      <div className="absolute inset-2 rounded-full border border-blue-500/20" />
                      <div className="w-14 h-14 rounded-full bg-cyan-950/90 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-display text-xl font-bold">
                        {portfolioProfile.profilePhoto.initials}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-mono text-[10px]">
                        <Camera className="w-2.5 h-2.5" />
                        <span>PROFILE PHOTO PLACEHOLDER</span>
                      </div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide">
                        {portfolioProfile.name}
                      </h3>
                      <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                        {portfolioProfile.title}
                      </p>
                    </div>
                  </div>
                )}

                {/* Status chip */}
                <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN FOR ANALYTICS PROJECTS</span>
                </div>
              </div>

              {/* Direct Profile Coordinates */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">PROFESSIONAL TITLE</span>
                  <span className="text-slate-200 font-semibold">{portfolioProfile.title}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">SPECIALIZED FIELD</span>
                  <span className="text-slate-200">{portfolioProfile.field}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">PHONE</span>
                  <a href={`tel:${portfolioProfile.phone}`} className="text-cyan-300 hover:underline">
                    {portfolioProfile.phone}
                  </a>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">EMAIL</span>
                  <a href={`mailto:${portfolioProfile.email}`} className="text-cyan-300 hover:underline truncate max-w-[200px]">
                    {portfolioProfile.email}
                  </a>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">LINKEDIN</span>
                  <a 
                    href={portfolioProfile.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-300 hover:underline"
                  >
                    farahat-adel-b27a03277
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content (About, Journey, Approach, Education, Interests) (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b border-white/10 gap-x-6 gap-y-2 text-xs font-mono">
              <button
                onClick={() => {
                  setActiveTab('about');
                  playTelemetryBeep(650, 0.02);
                }}
                className={`pb-3 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ABOUT FARAHAT
              </button>
              <button
                onClick={() => {
                  setActiveTab('journey');
                  playTelemetryBeep(680, 0.02);
                }}
                className={`pb-3 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === 'journey'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PROFESSIONAL JOURNEY
              </button>
              <button
                onClick={() => {
                  setActiveTab('approach');
                  playTelemetryBeep(710, 0.02);
                }}
                className={`pb-3 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === 'approach'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                APPROACH TO DATA
              </button>
              <button
                onClick={() => {
                  setActiveTab('education');
                  playTelemetryBeep(740, 0.02);
                }}
                className={`pb-3 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EDUCATION & CERTIFICATIONS
              </button>
              <button
                onClick={() => {
                  setActiveTab('interests');
                  playTelemetryBeep(770, 0.02);
                }}
                className={`pb-3 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === 'interests'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PROFESSIONAL INTERESTS
              </button>
            </div>

            {/* TAB 1: ABOUT FARAHAT */}
            {activeTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed"
              >
                <div className="p-5 rounded-2xl bg-[#080d17] border border-cyan-500/25 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                    <Terminal className="w-4 h-4" />
                    <span>BIOGRAPHY CONTAINER</span>
                  </div>
                  <p className="text-white font-medium">
                    {portfolioProfile.fullBio}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-white uppercase">
                    Core Analytical Identity
                  </h4>
                  <p className="text-slate-400 text-sm">
                    As a dedicated Data Analyst, Farahat focuses on translating raw numbers and multi-source tables into actionable business clarity, emphasizing clean SQL transformations, intuitive dashboards, and rigorous exploratory analysis.
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5">
                    <span className="font-mono text-xs text-cyan-300 font-semibold block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Analytical Hygiene
                    </span>
                    <p className="text-xs text-slate-400">
                      Auditing data completeness, handling anomalies, and ensuring accurate baselines before drawing conclusions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5">
                    <span className="font-mono text-xs text-emerald-300 font-semibold block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Executive Dashboards
                    </span>
                    <p className="text-xs text-slate-400">
                      Delivering intuitive Power BI and Tableau views engineered to guide immediate operational decisions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: PROFESSIONAL JOURNEY */}
            {activeTab === 'journey' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-[#080d17] border border-cyan-500/25 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                    <Compass className="w-4 h-4" />
                    <span>CAREER STORY CONTAINER</span>
                  </div>
                  <p className="text-white font-medium">
                    {portfolioProfile.professionalJourney}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-2 font-mono text-xs">
                  <span className="text-slate-400 uppercase">METHODOLOGY EVOLUTION:</span>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>Exploratory data analysis & statistical problem decomposition</li>
                    <li>Advanced relational database querying with SQL and automated pipelines</li>
                    <li>Business intelligence reporting using Power BI, Tableau, and Excel</li>
                    <li>Translating stakeholder requirements into concrete metrics and KPI trees</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* TAB 3: APPROACH TO DATA */}
            {activeTab === 'approach' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <blockquote className="p-4 rounded-xl bg-cyan-950/30 border-l-2 border-cyan-400 text-cyan-200 text-sm italic">
                  "{portfolioProfile.philosophy.quote}"
                </blockquote>

                <div className="space-y-3">
                  {portfolioProfile.philosophy.tenets.map((tenet, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#080d17] border border-white/10 space-y-1.5">
                      <span className="font-mono text-xs text-white font-semibold flex items-center gap-2">
                        <span className="text-cyan-400">0{idx + 1} //</span>
                        {tenet.title}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                        {tenet.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4: EDUCATION & CERTIFICATIONS */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Academic Credentials */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-wider uppercase">
                    <GraduationCap className="w-4 h-4" />
                    <span>ACADEMIC BACKGROUND</span>
                  </div>

                  {portfolioEducation.map((edu) => (
                    <div key={edu.id} className="p-5 sm:p-6 rounded-2xl bg-[#080d17] border border-cyan-500/20 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {edu.logoUrl && (
                          <div className="w-14 h-14 rounded-xl bg-slate-950 p-1.5 border border-cyan-500/30 shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                            <img
                              src={edu.logoUrl}
                              alt={isArabic ? edu.institutionAr : edu.institution}
                              className="w-full h-full object-contain rounded-lg"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="font-display font-bold text-white text-base sm:text-lg">
                              {isArabic ? (edu.degreeAr || edu.degree) : edu.degree}
                            </h4>
                            <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded self-start">
                              {edu.period}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-slate-300 mt-1">
                            {isArabic 
                              ? `${edu.facultyAr} • ${edu.institutionAr}`
                              : `${edu.faculty} • ${edu.institution}`}
                          </p>
                        </div>
                      </div>

                      {/* Grades & GPA Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/5">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          <span>{isArabic ? `التقدير: ${edu.gradeAr || edu.grade}` : `Grade: ${edu.grade}`}</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 font-mono text-xs text-amber-300 font-bold flex items-center gap-1.5">
                          <span>GPA: {edu.gpa}</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
                          {edu.location}
                        </span>
                      </div>

                      {edu.relevantStudies && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {edu.relevantStudies.map((s, i) => (
                            <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Professional Certifications */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs tracking-wider uppercase">
                    <Award className="w-4 h-4" />
                    <span>PROFESSIONAL CERTIFICATIONS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portfolioCertifications.map((cert) => (
                      <div key={cert.id} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                          <span>{cert.badgePlaceholder}</span>
                          <span className="text-emerald-400">{cert.issueDate}</span>
                        </div>
                        <h5 className="font-display font-bold text-white text-sm">
                          {cert.name}
                        </h5>
                        <p className="font-mono text-xs text-slate-400">
                          {cert.issuingOrganization}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: PROFESSIONAL INTERESTS */}
            {activeTab === 'interests' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-[#080d17] border border-cyan-500/25 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>ANALYTICAL PURSUITS & DOMAINS</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Professional domains and analytical innovations that Farahat actively explores and integrates into modern decision-making pipelines:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {portfolioProfile.interests.map((interest, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-white/10 flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span className="font-mono text-xs text-slate-200 leading-snug">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
