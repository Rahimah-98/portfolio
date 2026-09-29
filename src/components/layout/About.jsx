import * as Icons from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

const brandIcons = {
  Github: LuGithub,
  Linkedin: LuLinkedin,
};

const contactDetails = [
  {
    id: 'location',
    icon: 'MapPin',
    label: 'Herat, Afghanistan',
    href: null,
  },
  {
    id: 'email',
    icon: 'Mail',
    label: 'rahimaansari98@gmail.com',
    href: 'mailto:rahimaansari98@gmail.com',
  },
  {
    id: 'linkedin',
    icon: 'Linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    id: 'github',
    icon: 'Github',
    label: 'GitHub',
    href: 'https://github.com/',
  },
];

const About = () => {
  return (
    <section id='about' className='container-width py-20 sm:py-24 md:py-28'>
      {/* Section label */}
      <div className='eyebrow'>
        <span>About me</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      {/* Content */}
      <div
        className='
          mt-8
          grid
          gap-10
          md:grid-cols-[1.7fr_1fr]
          md:gap-16
        '>
        {/* About text */}
        <p
          className='
            max-w-2xl
            text-[15px]
            leading-7
            text-muted
            sm:text-base
          '>
          I’m a web developer focused on building modern and useful web
          experiences. I enjoy turning ideas into clean, responsive interfaces
          and continuously improving my skills through real-world projects.
        </p>

        {/* Contact details */}
        <ul className='flex flex-col gap-4'>
          {contactDetails.map((detail) => {
            const Icon =
              Icons[detail.icon] ?? brandIcons[detail.icon] ?? Icons.Circle;

            const content = (
              <>
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className='shrink-0 text-primary'
                />

                <span className='text-sm text-muted'>{detail.label}</span>
              </>
            );

            return (
              <li key={detail.id} className='flex items-center gap-3'>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.id === 'email' ? undefined : '_blank'}
                    rel={detail.id === 'email' ? undefined : 'noreferrer'}
                    className='
                      flex
                      items-center
                      gap-3
                      transition-colors
                      duration-200
                      hover:text-primary
                    '>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
