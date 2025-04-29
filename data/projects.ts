import { Project } from "@/types";

import Default from '@/assets/images/default.jpg';
import SiwpCalculator from '@/assets/images/siwp-calculator.png';
import Portfolio from '@/assets/images/portfolio.png';

export const projects: Project[] = [
  {
    title: 'Art Gallery & Store',
    image: Default,
    techStack: [
      { name: 'React', icon: 'icon-[cib--react]' },
      { name: 'TypeScript', icon: 'icon-[cib--typescript]' },
      { name: 'Tailwind CSS', icon: 'icon-[simple-icons--tailwindcss]' },
      { name: 'Express', icon: 'icon-[simple-icons--express]' },
      { name: 'MongoDB', icon: 'icon-[simple-icons--mongodb]' }
    ],
    description: 'A full-stack web application that allows artists to showcase their artwork, accept commission requests, and sell art pieces through an integrated store.',
    links: [
      { name: 'GitHub', url: '', icon: 'icon-[cib--github]' },
      { name: 'Live Demo', url: '', icon: 'icon-[lucide--external-link]' }
    ]
  },
  {
    title: 'Personal Developer Portfolio',
    image: Portfolio,
    techStack: [
      { name: 'Next.js', icon: 'icon-[cib--next-js]' },
      { name: 'TypeScript', icon: 'icon-[cib--typescript]' },
      { name: 'Tailwind CSS', icon: 'icon-[simple-icons--tailwindcss]' }
    ],
    description: 'A responsive single-page website built to showcase my projects, experience, and technical skills.',
    links: [
      { name: 'GitHub', url: 'https://github.com/era238tm/portfolio', icon: 'icon-[cib--github]' },
      { name: 'Live Demo', url: 'https://era238tm.vercel.app/', icon: 'icon-[lucide--external-link]' }
    ]
  },
  {
    title: 'SWIP Calculator',
    image: SiwpCalculator,
    techStack: [
      { name: 'React', icon: 'icon-[cib--react]' },
      { name: 'TypeScript', icon: 'icon-[cib--typescript]' },
    ],
    description: 'A web application that allows users to compute Systematic Investment and Withdrawal Plans, with configurable inputs for effective financial planning.',
    links: [
      { name: 'GitHub', url: '', icon: 'icon-[cib--github]' },
      { name: 'Live Demo', url: 'https://siwp-calculator.vercel.app/', icon: 'icon-[lucide--external-link]' }
    ]
  }
];
