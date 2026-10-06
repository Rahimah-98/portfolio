import { LuGithub } from 'react-icons/lu';

import ProjectPreview from './ProjectPreview';

function ProjectCard({ project }) {
  return (
    <article
      className='
    portfolio-card
    portfolio-card-hover
    group
    flex
    min-h-[450px]
    flex-col
    gap-5
    overflow-hidden
    p-4
    transition-all
    duration-300
  '>
      {/* Preview */}
      <div className='relative shrink-0'>
        <ProjectPreview preview={project.preview} liveUrl={project.liveUrl} />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col'>
        {/* Title */}
        <div className='flex items-start justify-between gap-3'>
          <h3
            className='
              text-base
              font-semibold
              text-foreground
              transition-colors
              duration-300
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
        <div className='mt-4 flex flex-wrap gap-2 pb-4'>
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
            mt-auto
            flex
            h-10
            shrink-0
            items-end
            border-t
            border-border
            pt-4
          '>
          <a
            href={project.githubUrl}
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
            GitHub
            <LuGithub size={15} strokeWidth={1.8} aria-hidden='true' />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
