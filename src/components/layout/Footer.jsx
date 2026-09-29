import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { profile, socialLinks } from '../../data/profile';

const iconMap = {
  Github: FaGithub,
  GitHub: FaGithub,
  Linkedin: FaLinkedinIn,
  LinkedIn: FaLinkedinIn,
  Mail,
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-border bg-background'>
      <div
        className='
          container-width
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-6
          sm:flex-row
        '>
        {/* Social links */}
        <ul className='flex items-center gap-2'>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];

            if (!Icon) return null;

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target='_blank'
                  rel='noreferrer'
                  className='
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    bg-surface
                    text-muted
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-primary/40
                    hover:bg-primary/10
                    hover:text-primary
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/30
                    focus:ring-offset-2
                    focus:ring-offset-background
                  '>
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden='true'
                    className='transition-transform duration-200 group-hover:scale-105'
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Copyright */}
        <p className='text-center text-xs text-muted sm:text-right'>
          &copy; {year} {profile.firstName} {profile.lastName}.{' '}
          {profile.footerNote}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
