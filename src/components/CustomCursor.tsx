import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<string>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target element for cursor intent
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== 'function') return;

      const closestAction = target.closest('[data-cursor]');
      if (closestAction) {
        const type = closestAction.getAttribute('data-cursor');
        setCursorType(type || 'default');
        return;
      }

      if (target.closest('button') || target.closest('input') || target.closest('select')) {
        setCursorType('button');
      } else if (target.closest('a')) {
        setCursorType('open');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isView = cursorType === 'view';
  const isAnalyze = cursorType === 'analyze';
  const isOpen = cursorType === 'open';
  const isButton = cursorType === 'button';
  const hasLabel = isView || isAnalyze || isOpen;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      {/* Center pinpoint */}
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          hasLabel ? 'w-1 h-1 bg-cyan-400 opacity-0' : isButton ? 'w-2 h-2 bg-cyan-400' : 'w-1.5 h-1.5 bg-cyan-400'
        }`}
      />

      {/* Orbiting / Expanding soft ring or badge */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[10px] tracking-wider uppercase font-semibold transition-all duration-200 ${
          hasLabel
            ? 'w-16 h-16 bg-cyan-950/80 border border-cyan-400/80 text-cyan-300 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.35)]'
            : isButton
            ? 'w-10 h-10 border border-cyan-400/60 bg-cyan-500/10'
            : 'w-7 h-7 border border-white/20 bg-white/[0.02]'
        }`}
      >
        {isView && <span>VIEW</span>}
        {isAnalyze && <span>ANALYZE</span>}
        {isOpen && <span>OPEN</span>}
      </div>
    </div>
  );
};
