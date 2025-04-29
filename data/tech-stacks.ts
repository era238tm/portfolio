import { TechStackLevel } from "@/types";

export const techStackLevels: TechStackLevel[] = [
  {
    name: 'proficient',
    icon: 'icon-[lucide--code]',
    categories: {
      frontend: [
        { name: 'React', icon: 'icon-[cib--react]' },
        { name: 'Tailwind CSS', icon: 'icon-[simple-icons--tailwindcss]' },
        { name: 'TypeScript', icon: 'icon-[cib--typescript]' }
      ],
      backend: [
        { name: 'Node.js', icon: 'icon-[simple-icons--nodedotjs]' },
        { name: 'Express', icon: 'icon-[simple-icons--express]' },
        { name: 'MongoDB', icon: 'icon-[simple-icons--mongodb]' }
      ],
      tools: [
        { name: 'Git', icon: 'icon-[cib--git]' },
        { name: 'GitHub', icon: 'icon-[cib--github]' }
      ]
    }
  },
  {
    name: 'exploring',
    icon: 'icon-[lucide--search-code]',
    categories: {
      frontend : [
        { name: 'Sass', icon: 'icon-[cib--sass-alt]' },
        { name: 'Next.js', icon: 'icon-[cib--next-js]' },
      ],
      backend: [
        { name: 'Firebase', icon: 'icon-[cib--firebase]' },
        { name: 'Django', icon: 'icon-[cib--django]' },
      ],
      tools: [
        { name: 'Figma', icon: 'icon-[cib--figma]' },
        { name: 'Vercel', icon: 'icon-[simple-icons--vercel]' }
      ]
    }
  }
];
