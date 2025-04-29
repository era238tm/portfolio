"use client";

import Image from 'next/image';
import Link from 'next/link';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { projects } from '@/data/projects';

export default function Projects() {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="scroll-m-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-md flex flex-col gap-4">
            <Image
              src={project.image}
              width={540}
              height={360}
              alt={project.title}
              className='rounded-sm object-cover w-full max-h-72 border border-neutral-200 dark:border-neutral-800'
            ></Image>

            <h2 className="text-xl font-bold">{project.title}</h2>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 text-xs px-2 py-1 rounded-md"
                >
                  <i className={tech.icon}></i>
                  {tech.name}
                </span>
              ))}
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {project.description}
            </p>

            <div className="flex gap-2">
              {project.links.map(
                (link) => link.url !== '' && (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-700 px-2 py-1 rounded-md transition-colors duration-200"
                  >
                    <i className={link.icon}></i>
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
