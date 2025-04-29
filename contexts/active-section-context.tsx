"use client";

import { createContext, useContext, useState } from 'react';
import { SectionName } from '@/types';

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }

  return context;
};
