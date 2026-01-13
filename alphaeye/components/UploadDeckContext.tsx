'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UploadDeckModal } from './UploadDeckModal';

interface UploadDeckContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const UploadDeckContext = createContext<UploadDeckContextType | undefined>(undefined);

export const useUploadDeck = () => {
  const context = useContext(UploadDeckContext);
  if (!context) {
    throw new Error('useUploadDeck must be used within an UploadDeckProvider');
  }
  return context;
};

interface UploadDeckProviderProps {
  children: ReactNode;
}

export const UploadDeckProvider: React.FC<UploadDeckProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <UploadDeckContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {/* Render modal at provider level so it's available on all dashboard pages */}
      <UploadDeckModal isOpen={isModalOpen} onClose={closeModal} />
    </UploadDeckContext.Provider>
  );
};