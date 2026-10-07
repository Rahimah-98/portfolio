import { Mail, MapPin } from 'lucide-react';
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

const ContactInfo = () => {
  return (
    <div>
      <h2 className='max-w-md text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl'>
        Let's work together.
      </h2>

      <p className='mt-5 max-w-md text-[15px] leading-7 text-muted sm:text-base'>
        Have a project in mind, an opportunity, or simply want to connect? I'd
        love to hear from you.
      </p>

      <ul className='w-[80%] lg:w-full mt-8 flex items-start justify-normal gap-6 flex-wrap lg:space-y-4 lg:block'>
        {contactDetails.map((detail) => {
          const Icon = detail.icon;

          const content = (
            <>
              <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-primary/10'>
                <Icon size={16} strokeWidth={1.8} aria-hidden='true' />
              </span>

              <span
                className='
                  text-sm text-muted
                  transition-colors duration-200
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
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    detail.href.startsWith('http') ? 'noreferrer' : undefined
                  }
                  className='group inline-flex items-center gap-3'>
                  {content}
                </a>
              ) : (
                <div className='inline-flex items-center gap-3'>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactInfo;
