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

    // 2. Check portfolioData config
    if (portfolioProfile.profilePhoto.url) {
      setPhotoUrl(portfolioProfile.profilePhoto.url);
      setIsLoading(false);
      return;
    }

    // 3. Test if /image.png or /farahat.jpg exists in public
    const testImage = (path: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path + '?t=' + Date.now();
      });
    };

    const checkDefaultFiles = async () => {
      if (await testImage('/farahat.jpg')) {
        setPhotoUrl('/farahat.jpg');
      } else if (await testImage('/images/farahat_profile.jpg')) {
        setPhotoUrl('/images/farahat_profile.jpg');
      }
      setIsLoading(false);
    };

    checkDefaultFiles();
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
