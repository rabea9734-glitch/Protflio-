import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioProfile } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string | null;
  setPhotoFile: (file: File) => Promise<void>;
  clearPhoto: () => void;
  isLoading: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: null,
  setPhotoFile: async () => {},
  clearPhoto: () => {},
  isLoading: true,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('farahat_custom_photo');
    if (saved) {
      setPhotoUrl(saved);
      setIsLoading(false);
      return;
    }

    // 2. Test candidate paths for the profile photo
    const candidatePaths = [
      portfolioProfile.profilePhoto.url,
      '/farahat.jpg',
      '/farahat.png',
      '/images/farahat_profile.jpg',
      '/images/farahat_profile.png',
      '/image.png',
    ].filter(Boolean);

    const testImage = (path: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path + '?t=' + Date.now();
      });
    };

    const findWorkingPhoto = async () => {
      for (const p of candidatePaths) {
        if (await testImage(p)) {
          setPhotoUrl(p);
          setIsLoading(false);
          return;
        }
      }
      // If none found, keep default or null
      setPhotoUrl(portfolioProfile.profilePhoto.url || null);
      setIsLoading(false);
    };

    findWorkingPhoto();
  }, []);

  const setPhotoFile = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string;
        setPhotoUrl(dataUrl);
        try {
          localStorage.setItem('farahat_custom_photo', dataUrl);
        } catch {
          // localStorage might be full for large images, continue
        }

        // Upload directly to server to save as public/image.png
        try {
          await fetch('/api/upload-photo', {
            method: 'POST',
            body: file,
          });
        } catch (err) {
          console.warn('Could not save photo to server disk:', err);
        }
        resolve();
      };
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.readAsDataURL(file);
    });
  };

  const clearPhoto = () => {
    setPhotoUrl(null);
    localStorage.removeItem('farahat_custom_photo');
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, setPhotoFile, clearPhoto, isLoading }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
