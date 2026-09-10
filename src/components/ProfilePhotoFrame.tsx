import React from 'react';
import { useProfilePhoto } from '../context/PhotoContext';
import { portfolioProfile } from '../data/portfolioData';

interface ProfilePhotoFrameProps {
  compact?: boolean;
}

export const ProfilePhotoFrame: React.FC<ProfilePhotoFrameProps> = ({ compact = false }) => {
  const { photoUrl, isLoading } = useProfilePhoto();

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden select-none ${
        compact ? 'aspect-[3/4] max-h-[320px]' : 'aspect-[3/4] max-h-[460px]'
      } border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.18)] bg-slate-950`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* When Photo is Loaded: Display Protected Original Photo */}
      {photoUrl && !isLoading ? (
        <div className="relative w-full h-full pointer-events-none">
          <img
            src={photoUrl}
            alt={portfolioProfile.name}
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
          />

          {/* Protective Subtle Glare Overlay to prevent direct element inspection / ripping */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-cyan-500/5 pointer-events-none" />
        </div>
      ) : (
        /* Executive Analyst Monogram Avatar */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#060a12] via-[#09101d] to-[#040810] pointer-events-none">
          {/* Orbital Monogram Avatar */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-4">
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-cyan-500/30 bg-gradient-to-b from-cyan-950/50 to-slate-950" />
            <div className="relative flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-400">
                {portfolioProfile.profilePhoto.initials}
              </span>
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase">
                ANALYST
              </span>
            </div>
          </div>

          <div className="space-y-1.5 max-w-[260px]">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              {portfolioProfile.name}
            </h4>
            <p className="font-mono text-xs text-cyan-300 font-medium">
              {portfolioProfile.title}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Data Professional
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Cybernetic HUD Frame Reticles */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
    </div>
  );
};
