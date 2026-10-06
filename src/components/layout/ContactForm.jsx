import { ArrowUpRight } from 'lucide-react';

import { celebrate } from '../../utils/confetti';
import { useContactForm } from '../../hooks/useContactForm';

import FieldError from '../ui/FieldError';

import { Toast } from '../ui/Toast';

const fieldClass = (hasError) =>
  `w-full rounded-lg border bg-surface px-4 py-3 text-sm
   text-foreground outline-none transition duration-200
   placeholder:text-muted-foreground
   focus:ring-2 focus:ring-primary/10
   disabled:cursor-not-allowed disabled:opacity-60
   ${
     hasError
       ? 'border-red-500 focus:border-red-500'
       : 'border-border focus:border-primary'
   }`;

const ContactForm = () => {
  const {
    formData,
    errors,
    submitError,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm({
    onSuccess: celebrate,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-busy={loading}
        className='rounded-xl border border-border bg-card p-5 shadow-card sm:p-6'>
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
              autoComplete='given-name'
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Your name'
              maxLength={80}
              disabled={loading}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={fieldClass(Boolean(errors.name))}
            />

            <FieldError id='name-error'>{errors.name}</FieldError>
          </div>

          {/* Last Name */}
          <div className='space-y-2'>
            <label
              htmlFor='lastName'
              className='text-sm font-medium text-foreground'>
              Last Name
            </label>

            <input
              id='lastName'
              name='lastName'
              type='text'
              autoComplete='family-name'
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Your last name'
              maxLength={80}
              disabled={loading}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              className={fieldClass(Boolean(errors.lastName))}
            />

            <FieldError id='lastName-error'>{errors.lastName}</FieldError>
          </div>

          {/* Email */}
          <div className='space-y-2 sm:col-span-2'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-foreground'>
              Email
            </label>

            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='you@example.com'
              maxLength={254}
              disabled={loading}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={fieldClass(Boolean(errors.email))}
            />

            <FieldError id='email-error'>{errors.email}</FieldError>
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
            rows='5'
            minLength={10}
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Tell me about your project...'
            disabled={loading}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={fieldClass(Boolean(errors.message))}
          />

          <div className='flex items-center justify-between gap-4'>
            <FieldError id='message-error'>{errors.message}</FieldError>

            <span className='ml-auto text-xs text-muted-foreground'>
              {formData.message.length}/2000
            </span>
          </div>
        </div>

        {/* Submission error */}
        {submitError && (
          <p
            role='alert'
            aria-live='polite'
            className='mt-4 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500'>
            {submitError}
          </p>
        )}

        {/* Submit */}
        <button
          type='submit'
          disabled={loading}
          className='mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'>
          {loading ? 'Sending message...' : 'Send Message'}

          {!loading && (
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden='true' />
          )}
        </button>
      </form>

      <Toast success={success} />
    </>
  );
};

export default ContactForm;
