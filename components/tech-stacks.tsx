"use client";

import { Fragment, useState } from 'react';
import clsx from 'clsx';

import { techStackLevels } from '@/data/tech-stacks';

export default function TechStacks() {
  const [activeLevel, setActiveLevel] = useState(techStackLevels[0]);

  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md">
      <div className="flex bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
        {techStackLevels.map((level) => (
          <button
            key={level.name}
            className={clsx(
              'flex items-center gap-2 capitalize px-3 py-1.5 rounded-t-md transition-colors duration-200',
              level.name === activeLevel.name && 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-neutral-50'
            )}
            onClick={() => setActiveLevel(level)}
          >
            <span className={level.icon}></span>
            {level.name}
          </button>
        ))}
      </div>

      <div className="p-6">
        {Object.entries(activeLevel.categories).map(
          ([category, items]) => items.length !== 0 && (
            <Fragment key={category}>
              <h3 className="capitalize font-semibold mb-1">{category}</h3>

              <div className="flex flex-wrap gap-2 not-last:mb-4">
                {items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 text-sm px-2 py-1 rounded-md"
                  >
                    <i className={item.icon}></i>
                    {item.name}
                  </span>
                ))}
              </div>
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}
