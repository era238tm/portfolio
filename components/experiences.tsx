"use client";

import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiences } from '@/data/experiences';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section ref={ref} id="experience" className="scroll-m-24">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-md flex flex-col gap-1"
          >
            <div className="flex justify-between gap-4">
              <h2 className="text-xl font-bold">{experience.title}</h2>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                {experience.duration}
              </span>
            </div>

            <h3 className="text-neutral-600 dark:text-neutral-400 font-semibold mb-3">
              {experience.company}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
