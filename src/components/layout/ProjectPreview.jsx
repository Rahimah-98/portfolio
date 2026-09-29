function ProjectPreview({ preview, liveUrl }) {
  return (
    <a
      href={liveUrl}
      target='_blank'
      rel='noreferrer'
      className=' group/preview relative block overflow-hidden rounded-lg border border-border bg-surface '
      aria-label={`Open ${preview.alt}`}>
      {' '}
      <div className='aspect-[16/9] overflow-hidden'>
        {' '}
        <img
          src={preview.src}
          alt={preview.alt}
          className=' h-full w-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.03] '
        />{' '}
      </div>{' '}
      {/* Preview overlay */}{' '}
      <div className=' pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/preview:bg-black/10 '>
        {' '}
        <span className=' translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover/preview:translate-y-0 group-hover/preview:opacity-100 '>
          {' '}
          View live preview{' '}
        </span>{' '}
      </div>{' '}
    </a>
  );
}
export default ProjectPreview;
