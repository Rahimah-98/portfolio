import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects, projectsSection } from '../../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        container-width
        py-20
        sm:py-24
        md:py-28
      "
    >
      {/* Section label */}
      <div className="eyebrow">
        <span>Projects</span>
        <span className="h-px w-16 bg-primary/70" />
      </div>

      {/* Section heading */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          My Projects
        </h2>

        <a
          href={projectsSection.viewAllHref}
          className="
            group
            inline-flex
            shrink-0
            items-center
            gap-2
            text-sm
            font-medium
            text-primary
            transition-colors
            duration-200
            hover:text-primary-hover
          "
        >
          <span>View All Projects</span>

          <ArrowRight
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </a>
      </div>

      {/* Project grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

