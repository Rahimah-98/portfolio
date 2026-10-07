import { Sparkles } from 'lucide-react';
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiGithub,
} from 'react-icons/si';

const focusAreas = [
  {
    name: 'React',
    icon: <SiReact />,
    iconColor: 'text-[#22b8ed]',
    background: 'bg-react-bg',
    border: 'border-react-border',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    iconColor: 'text-[#f7df1e]',
    background: 'bg-javascript-bg',
    border: 'border-javascript-border',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    iconColor: 'text-foreground',
    background: 'bg-nextjs-bg',
    border: 'border-nextjs-border',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    iconColor: 'text-[#06b6d4]',
    background: 'bg-tailwind-bg',
    border: 'border-tailwind-border',
  },
  {
    name: 'Github',
    icon: <SiGithub />,
    iconColor: 'text-foreground',
    background: 'bg-github-bg',
    border: 'border-github-border',
  },
];

const About = () => {
  return (
    <section id='about' className='container-width py-14 sm:py-18 md:py-22'>
      {/* Section label */}
      <div className='eyebrow'>
        <span>About me</span>
        <span className='h-px w-16 bg-primary/60' />
      </div>

      <div className='grid gap-10 lg:grid-cols-[1fr_0.75fr] md:items-end md:gap-14 lg:gap-18'>
        <div>
          <h2 className='my-8 mb-6 text-3xl font-bold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl'>
            About me
          </h2>

          <div className='max-w-[760px] text-justify md:ml-4 space-y-4 text-base leading-5 text-muted sm:text-[16px] sm:leading-[1.75]'>
            <p>
              I’m a web developer focused on building modern and useful web
              experiences. I enjoy turning ideas into clean, responsive
              interfaces and continuously improving my skills through real-world
              projects.
            </p>

            <p>
              I care about writing maintainable code, creating thoughtful user
              experiences, and learning through building. My current focus is
              React, JavaScript, and Next.js.
            </p>
          </div>
        </div>

        <div className='float w-full rounded-xl border border-border bg-card p-4 shadow-card sm:p-6'>
          <div className='flex items-center gap-3'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <Sparkles className='h-5 w-5' strokeWidth={1.8} />
            </div>

            <p className='text-xs font-semibold uppercase tracking-[0.1em] text-primary'>
              Currently focused on
            </p>
          </div>

          <div className='mt-8 flex items-center justify-center flex-wrap gap-3'>
            {focusAreas.map((item) => (
              <div
                key={item.name}
                className={`flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 ${item.background} ${item.border}`}>
                <span className={`shrink-0 text-base ${item.iconColor}`}>
                  {item.icon}
                </span>

                <span className='text-xs font-medium tracking-[-0.01em] text-muted'>
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className='mt-10 flex items-center gap-3'>
            <span className='h-px flex-1 bg-primary/20' />
            <span className='whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
              Tools that power my work
            </span>
            <span className='h-px flex-1 bg-primary/20' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
