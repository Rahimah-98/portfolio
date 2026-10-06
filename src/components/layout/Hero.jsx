import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id='home'
      className='container-width relative py-20 sm:py-24 md:py-28'>
      {/* Availability */}
      <div
        className='mb-8 flex w-fit items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-1.5
        '>
        <span className='h-2 w-2 shrink-0 rounded-full bg-green-400' />

        <span className='text-[11px] font-medium uppercase tracking-[0.08em] text-muted'>
          Available to work
        </span>
      </div>

      {/* Heading */}
      <h1 className='max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl'>
        Hello, I'm <span className='text-primary'>Rahimah Ansari</span> a Web
        Developer
      </h1>

      {/* Description */}
      <p className=' mt-6 max-w-2xl text-[15px] leading-7 text-muted sm:text-base'>
        I’m a web developer specializing in React, Next.js, and JavaScript. I
        build modern, scalable web applications with a focus on performance,
        usability, and clean design.
      </p>

      {/* Actions */}
      <div className=' mt-12 flex flex-col gap-3 sm:flex-row sm:items-center'>
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
