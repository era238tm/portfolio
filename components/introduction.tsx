import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-5xl font-bold">Vishal Narwal</h1>
      <h2 className="text-2xl text-neutral-600 dark:text-neutral-400 font-semibold">
        Full Stack Developer
      </h2>

      <ul className="my-4">
        <li className="flex items-center gap-2">
          <i className="icon-[lucide--map-pinned]"></i>
          New Delhi, India
        </li>

        <li className="flex items-center gap-2">
          <i className="icon-[lucide--mail]"></i>
          <Link href="mailto:era238tm.work@gmail.com">era238tm.work@gmail.com</Link>
        </li>
      </ul>

      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        I am a full-stack developer with working with TypeScript, and Next.js. I focus on building scalable web applications, handling authentication, implementing deployment workflows, and working with databases.
      </p>

      <Link href="/template-cv.pdf" download>
        <button className="flex items-center gap-2 bg-neutral-950 dark:bg-gray-50 hover:bg-neutral-950/86 dark:hover:bg-gray-50/86 text-gray-50 dark:text-neutral-950 font-semibold px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-200">
          <i className="icon-[lucide--download] w-5 h-5"></i>
          Download CV
        </button>
      </Link>
    </div>
  );
}
