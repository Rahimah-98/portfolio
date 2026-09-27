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
    href: null 
  },
  {
    id: 'email',
    icon: 'Mail',
    label: 'rahimaansari98@gmail.com',
    href: 'mailto:rahimah@gmail.com',
  },
  {
    id: 'linkedin',
    icon: 'Linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    id: 'github',
    icon: 'Github',
    label: 'GitHub',
    href: 'https://github.com',
  },
];

const About = () => {
  return (
    <section
      id='about'
      className='container-width flex items-center space-x-22 mt-16 sm:mt-20 md:my-22'>
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <span className='text-[12px] font-semibold uppercase tracking-[0.15em] text-primary'>
            About me
          </span>
          <span className='h-[.8px] w-18 bg-primary/80' />
        </div>
        <div className='w-full mt-6 grid gap-10 md:grid-cols-[2fr_0.5fr]'>
          <p className='text-sm leading-relaxed text-muted sm:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            eveniet qui! Illum modi nemo iste dolore earum, minus magni
            molestiae rem nesciunt nulla vitae accusantium est quibusdam ab
            sequi officiis aperiam aliquam quam. Autem, accusantium quas. Et
            eius pariatur harum ipsum alias repudiandae, vitae dolor repellendus
            fuga amet asperiores! Suscipit.
          </p>
          <ul className='flex flex-wrap md:flex-col gap-3'>
            {contactDetails.map((detail) => {
              const Icon =
                Icons[detail.icon] ?? brandIcons[detail.icon] ?? Icons.Circle;
              const content = (
                <>
                  <Icon size={16} className='text-primary' />
                  <span className='text-sm text-muted'>{detail.label}</span>
                </>
              );

              return (
                <li key={detail.id} className='flex items-center gap-3'>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className='flex items-center gap-3 transition-colors duration-200 hover:text-accent'>
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
      </div>
    </section>
  );
};

export default About;
