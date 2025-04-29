import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSection } from '@/contexts/active-section-context';
import { SectionName } from '@/types';

export function useSectionInView(sectionName: SectionName) {
  const sectionRef = useRef<HTMLElement>(null);
  const [threshold, setThreshold] = useState(0.5);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const updateThreshold = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const { height } = section.getBoundingClientRect();
      setThreshold(Math.min(1, window.innerHeight / height * 0.5));
    };

    updateThreshold();
    window.addEventListener('resize', updateThreshold);
    return () => window.removeEventListener('resize', updateThreshold);
  }, []);

  const { ref: inViewRef, inView } = useInView({ threshold });

  const setRef = useCallback((node: HTMLElement) => {
    sectionRef.current = node;
    inViewRef(node);
  }, [inViewRef]);

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return { ref: setRef };
}
