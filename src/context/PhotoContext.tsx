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
  const defaultPhoto = portfolioProfile.profilePhoto.url || '/images/farahat_profile.jpg';
  const [photoUrl, setPhotoUrl] = useState<string | null>(defaultPhoto);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Check localStorage if user manually uploaded one in this browser session
    const saved = localStorage.getItem('farahat_custom_photo');
    if (saved) {
      setPhotoUrl(saved);
      return;
    }

    // 2. Fallback to permanent static profile photo
    setPhotoUrl(defaultPhoto);
  }, [defaultPhoto]);

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
