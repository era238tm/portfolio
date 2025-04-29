"use client";

import { useSectionInView } from '@/hooks/use-section-in-view';

import Header from '@/components/header';
import Introduction from '@/components/introduction';
import TechStacks from '@/components/tech-stacks';
import Projects from '@/components/projects';
import Experience from '@/components/experiences';
import Footer from '@/components/footer';

export default function Home() {
  const { ref } = useSectionInView('Home');

  return (
    <>
      <Header />

      <main className="container mx-auto my-20 px-8 flex flex-col gap-20">
        <section
          ref={ref}
          id="home"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-m-28"
        >
          <Introduction />
          <TechStacks />
        </section>

        <Projects />
        <Experience />
      </main>

      <Footer />
    </>
  );
}
