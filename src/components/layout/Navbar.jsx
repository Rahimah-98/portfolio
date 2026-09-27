import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import ThemeToggle from '../ui/ThemeToggle';
import Logo from '../ui/Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className='
        sticky
        top-0
        z-50
        border-b
        border-border-light
        bg-surface-light/80
        backdrop-blur
        transition-colors
        duration-300
        dark:border-border-dark
        dark:bg-surface-dark/80
      '>
      <nav
        className='
          relative
          flex
          h-16
          w-full
          items-center
          justify-between
          px-6
          md:container-width
          md:px-0
        '>
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-16 md:flex'>
          <div className='flex items-center gap-7'>
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    relative
                    py-2
                    text-xs
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? 'text-foreground'
                        : 'text-muted hover:text-foreground'
                    }
                  `}>
                  {item.label}

                  {isActive && (
                    <span
                      className='
                        absolute
                        inset-x-0
                        -bottom-1
                        h-px
                        bg-primary
                      '
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className='flex items-center gap-2 md:hidden'>
          <ThemeToggle />

          <button
            type='button'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className='
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-md
              text-muted
              transition-colors
              hover:bg-surface-hover
              hover:text-foreground
            '>
            {isMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className='
              absolute
              left-0
              right-0
              top-full
              z-50
              rounded-b-md
              border
              border-border
              bg-background
              py-3
              shadow-lg
              md:hidden
            '>
            <div className='flex flex-col'>
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? 'bg-primary/5 text-primary'
                          : 'text-muted hover:bg-surface-hover hover:text-foreground'
                      }
                    `}>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
