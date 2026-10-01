import SkillBar from './SkillBar';

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

export default SkillCard;
