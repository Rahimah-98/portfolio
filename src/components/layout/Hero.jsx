import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id='home'
      className='container-width mt-16 space-y-6 sm:mt-20 md:mt-22
      '>
      <div
        className=' flex w-fit items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-1
        '>
        <span className='h-2 w-2 shrink-0 rounded-full bg-green-400' />

        <span
          className=' text-[10px] font-medium uppercase tracking-wide text-muted sm:text-[11px]
          '>
          Open to work
        </span>
      </div>

      <h1
        className='w-full md:max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl
        '>
        Hello, I'm <span className='text-primary'>Rahimah Ansari</span> a Web
        Developer
      </h1>

      <div
        className=' max-w-xl space-y-3 text-sm leading-6 text-muted sm:text-base
        '>
        <p>
          — a web developer specializing in React, Next.js, and JavaScript. I
          build scalable, performant web applications that users love.
        </p>

        <p>
          — a web developer specializing in React, Next.js, and JavaScript. I
          build scalable.
        </p>
      </div>

      <div
        className=' flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center
        '>
        <Button href='#projects' variant='primary' className='w-full sm:w-auto'>
          View My Projects
        </Button>

        <Button
          href='/Rahimah-Ansari-CV.pdf'
          variant='secondary'
          icon='download'>
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default Hero;
