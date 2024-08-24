import React, { createContext, useContext, useState } from 'react';
import { Photo } from '../types';

interface PhotosContextType {
  photos: Array<Photo>;
  addPhoto: (photo: Photo) => void;
}

const PhotosContext = createContext<PhotosContextType | undefined>(undefined);

export const PhotosProvider = ({ children }: { children: React.ReactNode }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const addPhoto = (photo: Photo) => {
    if (photo) {
      const newList = [photo, ...photos];
      setPhotos(newList);
    }
  };

  return <PhotosContext.Provider value={{ photos, addPhoto }}>{children}</PhotosContext.Provider>;
};

export const usePhotosContext = () => {
  const context = useContext(PhotosContext);
  if (!context) {
    throw new Error('usePhotosContext must be used within a PhotosProvider');
  }
  return context;
};
