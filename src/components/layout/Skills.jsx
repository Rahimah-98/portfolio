import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 95, color: '#ee7112' },
      { name: 'CSS', level: 60, color: '#0070fa' },
      { name: 'JavaScript', level: 93, color: '#ffea03' },
      { name: 'React', level: 92, color: '#61dafb' },
      { name: 'Next.js', level: 75, color: '#484848' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90, color: '#22c55e' },
      { name: 'Express', level: 88, color: '#94a3b8' },
      { name: 'MongoDB', level: 85, color: '#16a34a' },
      { name: 'Postman', level: 90, color: '#fb5e15' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 90, color: '#f97316' },
      { name: 'GitHub', level: 88, color: '#64748b' },
      { name: 'VS Code', level: 95, color: '#3b82f6' },
      { name: 'Netlify', level: 80, color: '#06b6d4' },
    ],
  },
];

const SkillBar = ({ skill, animate }) => {
  return (
    <div>
      <div className='mb-2 flex items-center justify-between gap-2 text-xs'>
        <span className='truncate text-muted'>{skill.name}</span>

        <span className='shrink-0 text-muted'>{skill.level}%</span>
      </div>

      <div className='h-1 overflow-hidden rounded-full bg-foreground/10'>
        <div
          className='h-full rounded-full transition-[width] duration-1000 ease-out'
          style={{
            width: animate ? `${skill.level}%` : '0%',
            backgroundColor: skill.color,
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
        portfolio-card
        min-w-0
        p-5
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-card-hover
        sm:p-6
      '>
      <div className='mb-6 flex min-w-0 items-center gap-3'>
        <Icon
          className='h-5 w-5 shrink-0 text-primary'
          strokeWidth={1.8}
          aria-hidden='true'
        />

        <h3 className='truncate text-base font-semibold text-foreground'>
          {category.title}
        </h3>
      </div>

      <div className='space-y-4'>
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
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='container-width py-20 sm:py-24 md:py-28'>
      {/* Section label */}
      <div className='eyebrow'>
        <span>Skills</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      {/* Heading */}
      <h2 className='mt-8 text-2xl font-bold tracking-tight text-foreground'>
        Skills I've Built
      </h2>

      {/* Skill cards */}
      <div className='mt-8 grid gap-4 md:grid-cols-3'>
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
