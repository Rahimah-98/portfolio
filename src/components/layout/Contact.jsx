import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';


const contactDetails = [
  {
    id: 'location',
    icon: MapPin,
    label: 'Herat, Afghanistan',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'rahimaansari98@gmail.com',
    href: 'mailto:rahimaansari98@gmail.com',
  },
  {
    id: 'linkedin',
    icon: LuLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    id: 'github',
    icon: LuGithub,
    label: 'GitHub',
    href: 'https://github.com/',
  },
];

const Contact = () => {
  return (
    <section
      id='contact'
      className='
        container-width
        py-20
        sm:py-24
        md:py-28
      '>
      {/* Section label */}
      <div className='eyebrow'>
        <span>Contact</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      {/* Main content */}
      <div
        className='
          mt-8
          grid
          gap-12
          md:grid-cols-[1fr_1.1fr]
          md:gap-16
        '>
        {/* Left side */}
        <div>
          <h2
            className='
              max-w-md
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-foreground
              sm:text-4xl
            '>
            Let's work together.
          </h2>

          <p
            className='
              mt-5
              max-w-md
              text-sm
              leading-7
              text-muted
              sm:text-base
            '>
            Have a project in mind, an opportunity, or simply want to connect?
            I'd love to hear from you.
          </p>

          {/* Contact details */}
          <ul className='mt-8 space-y-4'>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              const content = (
                <>
                  <span
                    className='
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-surface
                      text-primary
                      transition-colors
                      duration-200
                      group-hover:border-primary/40
                      group-hover:bg-primary/10
                    '>
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden='true'
                    />
                  </span>

                  <span
                    className='
                      text-sm
                      text-muted
                      transition-colors
                      duration-200
                      group-hover:text-foreground
                    '>
                    {detail.label}
                  </span>
                </>
              );

              return (
                <li key={detail.id}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={
                        detail.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        detail.href.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className='
                        group
                        inline-flex
                        items-center
                        gap-3
                      '>
                      {content}
                    </a>
                  ) : (
                    <div className='inline-flex items-center gap-3'>
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side - Contact form */}
        <form
          className='
            rounded-xl
            border
            border-border
            bg-card
            p-5
            shadow-card
            sm:p-6
          '>
          <div className='grid gap-5 sm:grid-cols-2'>
            {/* Name */}
            <div className='space-y-2'>
              <label
                htmlFor='name'
                className='text-sm font-medium text-foreground'>
                Name
              </label>

              <input
                id='name'
                name='name'
                type='text'
                placeholder='Your name'
                className='
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  px-4
                  py-3
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  transition
                  duration-200
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                '
              />
            </div>

            {/* Email */}
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-foreground'>
                Email
              </label>

              <input
                id='email'
                name='email'
                type='email'
                placeholder='you@example.com'
                className='
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  px-4
                  py-3
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  transition
                  duration-200
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                '
              />
            </div>
          </div>

          {/* Message */}
          <div className='mt-5 space-y-2'>
            <label
              htmlFor='message'
              className='text-sm font-medium text-foreground'>
              Message
            </label>

            <textarea
              id='message'
              name='message'
              rows='6'
              placeholder='Tell me about your project...'
              className='
                w-full
                resize-none
                rounded-lg
                border
                border-border
                bg-surface
                px-4
                py-3
                text-sm
                leading-6
                text-foreground
                outline-none
                placeholder:text-muted-foreground
                transition
                duration-200
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              '
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='
              mt-5
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-primary-hover
              focus:outline-none
              focus:ring-2
              focus:ring-primary/30
              focus:ring-offset-2
              focus:ring-offset-background
            '>
            Send Message

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              aria-hidden='true'
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
