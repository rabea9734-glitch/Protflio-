import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import { playTelemetryBeep } from '../utils/sound';
import { portfolioProfile } from '../data/portfolioData';

interface OpeningSequenceProps {
  onComplete: () => void;
}

const telemetryStream = [
  '010101', '98.7%', '42.3K', '+24.8%', 'SQL', 'POWER BI', 
  'PYTHON', 'EXCEL', 'SELECT *', 'p < 0.001', 'ROC_AUC: 0.94',
  'DAX::CALCULATE()', 'R² = 0.892', 'SNOWFLAKE', 'TABLEAU'
];

const engineSteps = [
  { text: 'INITIALIZING ANALYTICS ENGINE...', progress: 20 },
  { text: 'LOADING TRANSACTION TELEMETRY...', progress: 45 },
  { text: 'BUILDING MULTIDIMENSIONAL TOPOLOGY...', progress: 70 },
  { text: 'CALCULATING STATISTICAL INSIGHTS...', progress: 90 },
  { text: 'SYSTEM READY — EXECUTING REVEAL.', progress: 100 }
];

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete }) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [stage, setStage] = useState<'booting' | 'organizing' | 'revealing' | 'done'>('booting');
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [floatingTags, setFloatingTags] = useState<{ text: string; x: number; y: number; opacity: number }[]>([]);

  // Telemetry tags generation
  useEffect(() => {
    const tags = telemetryStream.slice(0, 10).map((text, i) => {
      const angle = (i / 10) * Math.PI * 2;
      const dist = 30 + (i % 3) * 8; // % from center
      return {
        text,
        x: 50 + Math.cos(angle) * dist,
        y: 50 + Math.sin(angle) * (dist * 0.7),
        opacity: 0.2 + (i % 4) * 0.2
      };
    });
    setFloatingTags(tags);
  }, []);

  // Progression timer
  useEffect(() => {
    let currentStep = 0;
    const timeouts: NodeJS.Timeout[] = [];

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep < engineSteps.length) {
        setStepIdx(currentStep);
        playTelemetryBeep(600 + currentStep * 150, 0.03, 'triangle', 0.015);
      } else {
        clearInterval(timer);
        setStage('revealing');
        const t1 = setTimeout(() => {
          setStage('done');
          const t2 = setTimeout(onComplete, 800);
          timeouts.push(t2);
        }, 1800);
        timeouts.push(t1);
      }
    }, 750);

    return () => {
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Three.js opening sphere / particle system
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const w = window.innerWidth || 800;
    const h = window.innerHeight || 600;
    const camera = new THREE.PerspectiveCamera(50, w / Math.max(h, 1), 0.1, 100);
    camera.position.z = 12;

    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Particle cloud
    const count = 350;
    const positions = new Float32Array(count * 3);
    const targetPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Start dispersed
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Target: structured analytical sphere / torus
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.2;

      targetPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      targetPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      targetPositions[i * 3 + 2] = r * Math.cos(phi);

      // Cyan to vibrant blue
      colors[i * 3] = 0.22 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.74 + Math.random() * 0.25;
      colors[i * 3 + 2] = 0.98;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Inner wireframe data globe
    const globeGeom = new THREE.SphereGeometry(2.4, 16, 16);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const globe = new THREE.Mesh(globeGeom, globeMat);
    scene.add(globe);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Lerp particles toward structured target
      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count * 3; i++) {
        pos[i] += (targetPositions[i] - pos[i]) * 0.045;
      }
      geometry.attributes.position.needsUpdate = true;

      particles.rotation.y = elapsed * 0.35;
      particles.rotation.x = elapsed * 0.15;
      globe.rotation.y = -elapsed * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      globeGeom.dispose();
      globeMat.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 'done' ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030508] text-white select-none overflow-hidden"
    >
      {/* 3D WebGL Background Canvas */}
      <div ref={canvasContainerRef} className="absolute inset-0 z-0 pointer-events-none opacity-85" />

      {/* Floating Data Tags & Stream Telemetry */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, tag.opacity, tag.opacity * 0.7, tag.opacity],
            y: [0, -8, 4, 0]
          }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
          style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[11px] text-cyan-400/70 tracking-widest pointer-events-none hidden sm:block border border-cyan-500/15 px-2 py-0.5 rounded bg-[#030712]/60 backdrop-blur-[2px]"
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Skip Button */}
      <button
        onClick={() => {
          playTelemetryBeep(1100, 0.04);
          onComplete();
        }}
        className="absolute top-6 right-6 z-20 font-mono text-xs text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 px-3.5 py-1.5 rounded-full transition-all bg-slate-950/70 backdrop-blur-md flex items-center space-x-2"
      >
        <span>SKIP_INIT</span>
        <span className="text-[10px] text-cyan-400">ESC / ↵</span>
      </button>

      {/* Center Cinematic Reveal Content */}
      <div className="relative z-10 max-w-xl w-full px-6 text-center">
        {stage !== 'revealing' ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Status Radar Icon */}
            <div className="flex justify-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
                <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center bg-cyan-950/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* System Status Line */}
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
                {engineSteps[stepIdx]?.text}
              </p>

              {/* Minimal Progress Bar */}
              <div className="w-48 mx-auto h-[2px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  animate={{ width: `${engineSteps[stepIdx]?.progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 font-mono text-[10px] text-slate-500 tracking-wider">
              <span>LATENCY: 0.12ms</span>
              <span>•</span>
              <span>NODES: 350_ONLINE</span>
              <span>•</span>
              <span>PARITY: 100%</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="identity"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-cyan-400 border-b border-cyan-500/30 pb-1"
            >
              DATA ANALYST
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase"
            >
              {portfolioProfile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-sans text-sm sm:text-base text-slate-300 italic tracking-wide"
            >
              "Turning Data Into Decisions."
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-3">
        <span className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PORTFOLIO_OS // BUILD 2026.04</span>
        </span>
        <span className="hidden sm:inline">PRECISION ANALYTICS SYSTEM</span>
        <span>STATUS: MOUNTED</span>
      </div>
    </motion.div>
  );
};
