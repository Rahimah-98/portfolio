import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

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
