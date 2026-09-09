import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PhotoProvider } from './context/PhotoContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { TelemetryBar } from './components/TelemetryBar';
import { OpeningSequence } from './components/OpeningSequence';
import { HeroSection } from './sections/HeroSection';
import { PersonalProfileSection } from './components/PersonalProfileSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { VisualizationLab } from './sections/VisualizationLab';
import { ProcessSection } from './sections/ProcessSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { MetricsSection } from './sections/MetricsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { playDataClick } from './utils/sound';

function MainPortfolioApp() {
  const [introActive, setIntroActive] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const { isArabic } = useLanguage();

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    playDataClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      dir={isArabic ? 'rtl' : 'ltr'} 
      className={`relative min-h-screen bg-[#05070B] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-300 font-sans ${
        isArabic ? 'font-arabic' : ''
      }`}
    >
      {/* Custom Contextual Cursor for Desktop */}
      <CustomCursor />

      {/* Cinematic 3D Opening Sequence */}
      <AnimatePresence>
        {introActive && (
          <OpeningSequence onComplete={() => setIntroActive(false)} />
        )}
      </AnimatePresence>

      {/* Fixed Top Navigation Bar with Language Switcher & Tab Buttons */}
      <Navbar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onReplayIntro={() => setIntroActive(true)} 
      />

      {/* Tab-Based Dedicated Pages (Split View Architecture) */}
      <main className="relative pt-20">
        <AnimatePresence mode="wait">
          {/* 1. HOME PAGE: Hero + Personal Bio & Details + Telemetry */}
          {activeTab === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-4"
            >
              {/* Hero Banner with Farahat's Photograph & Identity */}
              <HeroSection onNavigateTab={handleTabChange} />

              {/* Personal Data, Bio, Core Focus & Analytical Philosophy */}
              <PersonalProfileSection onNavigateTab={handleTabChange} />

              {/* Live Status Telemetry Ribbon */}
              <TelemetryBar />
            </motion.div>
          )}

          {/* 2. SKILLS PAGE: Dedicated Skills Ecosystem & Deep Inspector */}
          {activeTab === 'skills' && (
            <motion.div
              key="skills-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SkillsSection onNavigateTab={handleTabChange} />
            </motion.div>
          )}

          {/* 3. PROJECTS PAGE: Dedicated Deep Case Studies & Interactive Modal Audits */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ProjectsSection />
            </motion.div>
          )}

          {/* 4. DATA LAB & PIPELINE: Interactive Analytics Sandbox & 7-Stage Architecture */}
          {activeTab === 'lab' && (
            <motion.div
              key="lab-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-8"
            >
              <VisualizationLab />
              <ProcessSection />
            </motion.div>
          )}

          {/* 5. EXPERIENCE & TRACK RECORD: Career Timeline, Education, Certs & Benchmarks */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ExperienceSection />
            </motion.div>
          )}

          {/* 6. CONTACT PAGE: Direct Coordinates, Copyable Email & Dispatch Form */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigateTab={handleTabChange} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PhotoProvider>
        <MainPortfolioApp />
      </PhotoProvider>
    </LanguageProvider>
  );
}
