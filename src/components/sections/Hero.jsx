import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id='home'
      className='container-width relative py-16 sm:py-20 md:py-24'>
      {/* Availability */}
      <div className='mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-1.5'>
        <span className='h-2 w-2 shrink-0 rounded-full bg-green-400' />
        <span className='text-[11px] font-medium uppercase tracking-[0.08em] text-muted'>
          Open to Work
        </span>
      </div>  

      {/* Heading */}
      <h1 className='text-4xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-5xl md:text-6xl'>
        Hi, I'm <span className='text-primary'>Rahimah Ansari </span>
        a web Developer.
      </h1>

      {/* Description */}
      <p className='mt-6 max-w-2xl text-[15px] leading-7 text-muted sm:text-base'>
        I build modern, responsive web applications with React, JavaScript, and
        Next.js, with a focus on clean interfaces, usability, and real-world
        problem solving.
      </p>

      {/* Actions */}
      <div className='mt-12 flex flex-col gap-3 sm:flex-row sm:items-center'>
        <Button href='#projects' variant='primary' className='w-full sm:w-auto'>
          View My Projects
        </Button>

        <a href='/cv/Rahimah-CV.pdf' download='Rahimah-CV.pdf'>
          <Button
            type='button'
            variant='secondary'
            icon='download'
            className='w-full sm:w-auto'>
            Download CV
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
