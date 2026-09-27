import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      {
        name: 'HTML',
        level: 95,
        color: '#ee7112',
        fact: 'First tool I used to turn static ideas into structured, real web pages.',
      },
      {
        name: 'CSS',
        level: 60,
        color: '#0070fa',
        fact: 'Where I learned how small visual tweaks completely change user perception.',
      },
      {
        name: 'JavaScript',
        level: 93,
        color: '#ffea03',
        fact: 'The first language that made UI behavior feel alive instead of static.',
      },
      {
        name: 'React',
        level: 92,
        color: '#61dafb',
        fact: 'Changed how I build UIs by thinking in reusable components instead of pages.',
      },
      {
        name: 'Next.js',
        level: 75,
        color: '#484848',
        fact: 'Helped me bridge frontend and backend in a single production-ready structure.',
      },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      {
        name: 'Node.js',
        level: 90,
        color: '#22c55e',
        fact: 'Let me run JavaScript outside the browser and build real server logic.',
      },
      {
        name: 'Express',
        level: 88,
        color: '#94a3b8',
        fact: 'Simplified API design into clean routes instead of complex server setups.',
      },
      {
        name: 'MongoDB',
        level: 85,
        color: '#16a34a',
        fact: 'Made working with flexible, evolving data structures much more natural.',
      },
      {
        name: 'Postman',
        level: 90,
        color: '#fb5e15',
        fact: 'Made working with flexible, evolving data structures much more natural.',
      },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      {
        name: 'Git',
        level: 90,
        color: '#f97316',
        fact: 'Taught me how to track progress, collaborate safely, and recover from mistakes.',
      },
      {
        name: 'GitHub',
        level: 88,
        color: '#64748b',
        fact: 'My central hub for version control, project management, and showcasing work.',
      },
      {
        name: 'VS Code',
        level: 95,
        color: '#3b82f6',
        fact: 'The editor where most of my projects come to life, from first idea to deployment.',
      },
      {
        name: 'Netlify',
        level: 80,
        color: '#06b6d4',
        fact: 'Made deploying static and frontend applications fast, reliable, and beginner-friendly.',
      },
    ],
  },
];

const SkillBar = ({ skill, animate }) => {
  return (
    <div className='group relative'>
      <div className='mb-2 flex items-center justify-between gap-2 text-[12px]'>
        <span className='truncate'>{skill.name}</span>
        <span className='shrink-0'>{skill.level}%</span>
      </div>

      {/* Skill explanation */}
      <div
        className='
          pointer-events-none
          absolute
          bottom-full
          left-0
          z-20
          mb-2
          hidden
          max-w-xs
          rounded-md
          bg-foreground
          px-3
          py-2
          text-xs
          leading-relaxed
          text-background
          shadow-lg
          group-hover:block
        '>
        {skill.fact}
      </div>

      {/* Progress bar */}
      <div className='h-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10'>
        <div
          className='h-full rounded-full transition-[width] duration-1000 ease-out'
          style={{
            width: animate ? `${skill.level}%` : '0%',
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}`,
          }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category, animate }) => {
  const Icon = category.icon;

  return (
    <article
      className='
        min-w-0
        rounded-3xl
        border
        border-primary/30
        p-4
        sm:p-5
        md:p-6
        glass
      '>
      <div className='mb-6 flex min-w-0 items-center gap-2'>
        <Icon
          className='h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6'
          strokeWidth={1.8}
          aria-hidden='true'
        />

        <h3 className='truncate text-base font-bold text-foreground sm:text-lg'>
          {category.title}
        </h3>
      </div>

      <div className='space-y-3'>
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} animate={animate} />
        ))}
      </div>
    </article>
  );
};

export const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='container-width mt-16 sm:mt-20 md:my-22'>
      {/* Section label */}
      <div className='flex items-center gap-2'>
        <span
          className='
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-primary
          '>
          Skills
        </span>

        <span className='h-px w-18 bg-primary/80' />
      </div>

      {/* Heading */}
      <h2 className='mt-6 text-2xl font-bold text-foreground'>
        Skills I've Built
      </h2>

      {/* Skill cards */}
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-3'>
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            category={category}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
};
