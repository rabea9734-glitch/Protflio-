import React, { useRef, useState } from 'react';
import { Camera, Upload, RefreshCw } from 'lucide-react';
import { useProfilePhoto } from '../context/PhotoContext';
import { portfolioProfile } from '../data/portfolioData';

interface ProfilePhotoFrameProps {
  compact?: boolean;
}

export const ProfilePhotoFrame: React.FC<ProfilePhotoFrameProps> = ({ compact = false }) => {
  const { photoUrl, setPhotoFile, isLoading } = useProfilePhoto();
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('الرجاء اختيار ملف صورة صالح (JPG, PNG, WebP)');
      return;
    }
    setIsProcessing(true);
    try {
      await setPhotoFile(file);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await handleFile(e.target.files[0]);
    }
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 ${
        compact ? 'aspect-[3/4] max-h-[320px]' : 'aspect-[3/4] max-h-[460px]'
      } ${
        isDragging
          ? 'border-2 border-cyan-400 ring-4 ring-cyan-500/30 scale-[1.01]'
          : 'border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.18)]'
      } bg-slate-950`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />

      {/* When Photo is Loaded: Display EXACT Original Photo */}
      {photoUrl && !isLoading ? (
        <div className="relative w-full h-full group/photo">
          <img
            src={photoUrl}
            alt={portfolioProfile.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />

          {/* Discreet hover control to change or re-upload photo without altering image */}
          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 backdrop-blur-xs">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold shadow-lg transition-transform active:scale-95 flex items-center gap-2"
              title="تغيير أو تحديث ملف الصورة الأصلية"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
              <span>تغيير الصورة الأصلية</span>
            </button>
            <p className="mt-2 text-[10px] font-mono text-cyan-200/80 text-center">
              الصورة الأصلية معروضة كما هي 100%
            </p>
          </div>
        </div>
      ) : (
        /* Empty State / Photo Upload Trigger */
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer select-none bg-gradient-to-br from-[#060a12] via-[#09101d] to-[#040810] hover:bg-slate-900/60 transition-colors"
        >
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

          <div className="space-y-2 max-w-[260px]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-semibold">
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              <span>إضافة صورتك الأصلية</span>
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed font-medium">
              انقر لاختيار ملف صورتك الأصلية (image.png) أو اسحبها هنا
            </p>
            <p className="font-mono text-[10px] text-cyan-400/80">
              سيتم عرض صورتك كما هي تماماً بدون أي تعديل
            </p>
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
