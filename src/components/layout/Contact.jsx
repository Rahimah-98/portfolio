import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';

import { sendContactEmail } from '../../utils/emailService';
import { celebrate } from '../../utils/confetti';
import { Toast } from '../ui/Toast';

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

const emptyForm = {
  name: '',
  email: '',
  message: '',
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('contactForm');

    if (!saved) {
      return emptyForm;
    }

    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem('contactForm');
      return emptyForm;
    }
  });

  const successTimerRef = useRef(null);

  useEffect(() => {
    const isEmpty =
      !formData.name.trim() &&
      !formData.email.trim() &&
      !formData.message.trim();

    if (isEmpty) {
      localStorage.removeItem('contactForm');
      return;
    }

    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError('');
    }

    if (success) {
      setSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      setError('');

      await sendContactEmail({
        name,
        email,
        message,
      });

      celebrate();

      setSuccess(true);

      localStorage.removeItem('contactForm');

      setFormData(emptyForm);

      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }

      successTimerRef.current = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);

      setError('Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='container-width py-20 sm:py-24 md:py-28'>
      <div className='eyebrow'>
        <span>Contact</span>
        <span className='h-px w-16 bg-primary/70' />
      </div>

      <div className='mt-8 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16'>
        <div>
          <h2 className='max-w-md text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl'>
            Let's work together.
          </h2>

          <p className='mt-5 max-w-md text-[15px] leading-7 text-muted sm:text-base'>
            Have a project in mind, an opportunity, or simply want to connect?
            I'd love to hear from you.
          </p>

          <ul className='mt-8 space-y-4'>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              const content = (
                <>
                  <span
                    className='
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-border
                      bg-surface
                      text-primary
                      transition-colors duration-200
                      group-hover:border-primary/40
                      group-hover:bg-primary/10
                    '>
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
                      target={
                        detail.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        detail.href.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className='group inline-flex items-center gap-3'>
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

        <div>
          <form
            onSubmit={handleSubmit}
            className='
              rounded-xl
              border border-border
              bg-card
              p-5
              shadow-card
              sm:p-6
            '>
            <div className='grid gap-5 sm:grid-cols-2'>
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
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  disabled={loading}
                  className='
                    w-full
                    rounded-lg
                    border border-border
                    bg-surface
                    px-4 py-3
                    text-sm text-foreground
                    outline-none
                    placeholder:text-muted-foreground
                    transition duration-200
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  '
                />
              </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='you@example.com'
                  disabled={loading}
                  className='
                    w-full
                    rounded-lg
                    border border-border
                    bg-surface
                    px-4 py-3
                    text-sm text-foreground
                    outline-none
                    placeholder:text-muted-foreground
                    transition duration-200
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  '
                />
              </div>
            </div>

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
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell me about your project...'
                disabled={loading}
                className='
                  w-full
                  resize-none
                  rounded-lg
                  border border-border
                  bg-surface
                  px-4 py-3
                  text-sm
                  leading-6
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  transition duration-200
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                '
              />
            </div>

            {error && (
              <p role='alert' className='mt-4 text-sm text-red-500'>
                {error}
              </p>
            )}

            <button
              type='submit'
              disabled={loading}
              className='
                mt-5
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-primary
                px-6 py-3
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
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
              '>
              {loading ? 'Sending...' : 'Send Message'}

              {!loading && (
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden='true' />
              )}
            </button>
          </form>
        </div>

        <Toast success={success} />
      </div>
    </section>
  );
};

export default Contact;
