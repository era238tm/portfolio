"use client";

import Link from 'next/link';
import clsx from 'clsx';

import { navs, socials } from '@/data/header';
import { useActiveSection } from '@/contexts/active-section-context';

import ThemeSwitch from './theme-switch';

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b-2 border-neutral-300 dark:border-neutral-700">
      <div className="container mx-auto flex gap-8 px-8 py-4">
        <Link
          href="#home"
          className={clsx(
            'text-xl font-bold hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors duration-200',
            activeSection !== 'Home' && 'text-neutral-600 dark:text-neutral-400'
          )}
          onClick={() => setActiveSection('Home')}
        >
          VN
        </Link>

        <nav className="flex items-center gap-4 ml-auto">
          {navs.map((nav) => (
            <Link
              key={nav.name}
              href={nav.hash}
              className={clsx(
                'font-semibold hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors duration-200',
                activeSection !== nav.name && 'text-neutral-600 dark:text-neutral-400'
              )}
              onClick={() => setActiveSection(nav.name)}
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.icon} w-5 h-5`}
            ></Link>
          ))}

          <ThemeSwitch className='w-5 h-5 border border-neutral-300 dark:border-neutral-700 ml-4' />
        </div>
      </div>
    </header>
  );
}
