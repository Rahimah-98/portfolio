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

export default SkillBar