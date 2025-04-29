import { StaticImageData } from "next/image";
import { navs } from "@/data/header";

export type SectionName = typeof navs[number]['name'] | 'Home';

export type TechItem = {
  name: string;
  icon: string;
};

export type TechStack = {
  [category: string]: TechItem[];
};

export type TechStackLevel = {
  name: string;
  icon: string;
  categories: TechStack;
};

export type ProjectLink = {
  name: string;
  url: string;
  icon: string;
};

export type Project = {
  title: string;
  image: StaticImageData;
  techStack: TechItem[];
  description: string;
  links: ProjectLink[];
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export type Theme = 'light' | 'dark';
