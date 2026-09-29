import { ArrowUpRight } from 'lucide-react';
import ProjectPreview from './ProjectPreview';

function ProjectCard({ project }) {
  return (
    <article
      className='
        portfolio-card
        portfolio-card-hover
        group
        flex
        flex-col
        gap-5
        overflow-hidden
        p-4
        transition-all
        duration-200
      '>
      {/* Project Preview */}
      <div className='relative'>
        <ProjectPreview preview={project.preview} liveUrl={project.liveUrl} />

        {project.featured && (
          <span
            className='
              pointer-events-none
              absolute
              right-3
              top-3
              z-10
              rounded-full
              bg-primary
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              shadow-sm
            '>
            Featured
          </span>
        )}
      </div>

      {/* Project Content */}
      <div className='flex flex-1 flex-col'>
        {/* Title */}
        <div className='flex items-start justify-between gap-3'>
          <h3
            className='
              text-base
              font-semibold
              text-foreground
              transition-colors
              duration-200
              group-hover:text-primary
            '>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className='
            mt-2
            text-sm
            leading-6
            text-muted
          '>
          {project.description}
        </p>

        {/* Technologies */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='
                rounded-full
                border
                border-border
                bg-surface
                px-2.5
                py-1
                text-xs
                font-medium
                text-muted
              '>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div
          className='
            mt-5
            flex
            items-center
            gap-4
            border-t
            border-border
            pt-4
          '>
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='
              inline-flex
              items-center
              gap-1.5
              text-sm
              font-medium
              text-primary
              transition-colors
              duration-200
              hover:text-primary-hover
            '>
            Live Demo
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden='true' />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              className=' inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground '>
              {' '}
              {/* <Github size={15} strokeWidth={1.8} aria-hidden='true' />{' '} */}
              GitHub{' '}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
