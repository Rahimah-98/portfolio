import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 95, color: '#ee7112' },
      { name: 'CSS', level: 70, color: '#0070fa' },
      { name: 'JavaScript', level: 60, color: '#ffea03' },
      { name: 'React', level: 80, color: '#61dafb' },
      { name: 'Next.js', level: 50, color: '#484848' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 60, color: '#22c55e' },
      { name: 'Express', level: 65, color: '#94a3b8' },
      { name: 'MongoDB', level: 75, color: '#16a34a' },
      { name: 'Postman', level: 70, color: '#fb5e15' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 75, color: '#f97316' },
      { name: 'GitHub', level: 75, color: '#64748b' },
      { name: 'VS Code', level: 95, color: '#3b82f6' },
      { name: 'Netlify', level: 80, color: '#06b6d4' },
    ],
  },
];

const Skills = () => {
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
      className='container-width py-14 sm:py-28 md:py-22'>
      {/* Section label */}
      <div className='eyebrow'>
        <span>Skills</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      {/* Heading */}
      <h2 className='my-8 text-2xl font-bold tracking-tight text-foreground'>
        Skills I've Built
      </h2>

      {/* Skill cards */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
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

export default Skills;
