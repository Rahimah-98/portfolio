import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section
      id='projects'
      className='container-width space-x-22 mt-16 sm:mt-20 md:my-22'>
      <div className='flex items-center gap-2'>
        <span className='text-[12px] font-semibold uppercase tracking-[0.15em] text-primary'>
          Projects
        </span>
        <span className='h-[.8px] w-18 bg-primary/80' />
      </div>
      <div className='flex items-center justify-between mt-6'>
        <h2 className='text-2xl font-bold text-foreground'>My Projects</h2>
        <a
          href='#projects'
          className='
    group
    inline-flex
    items-center
    gap-2
    text-sm
    text-primary
    transition-colors
    duration-200
    hover:text-primary
  '>
          <span className='transition-all duration-200 group-hover:transform-y-1 '>
            View All Projects
          </span>

          <ArrowRight
            size={15}
            strokeWidth={2}
            aria-hidden='true'
            className='
      transition-transform
      duration-200
      group-hover:translate-x-0.5
    '
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
