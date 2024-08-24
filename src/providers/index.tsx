import React from 'react';
import { PhotosProvider } from './photos';

export const AppProvider = ({ children }: any) => {
  return <PhotosProvider>{children}</PhotosProvider>;
};
