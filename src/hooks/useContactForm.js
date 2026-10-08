import { useEffect, useRef, useState } from 'react';

import { sendContactEmail } from '../services/emailService';

import {
  emptyForm,
  validateField,
  validateForm,
} from '../utils/contactValidation';

const STORAGE_KEY = 'contactForm';

export const useContactForm = ({ onSuccess } = {}) => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return { ...emptyForm };
      }

      const parsed = JSON.parse(saved);

      return {
        ...emptyForm,
        ...parsed,
      };
    } catch {
      localStorage.removeItem(STORAGE_KEY);

      return { ...emptyForm };
    }
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const successTimerRef = useRef(null);

  /*
   * Persist unfinished form
   */
  useEffect(() => {
    const isEmpty = Object.values(formData).every((value) => !value.trim());

    if (isEmpty) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  /*
   * Cleanup success timer
   */
  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  /*
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    /*
     * Clear submission-level error
     * as soon as the user starts editing.
     */
    if (submitError) {
      setSubmitError('');
    }

    /*
     * Hide success state if user starts
     * interacting with the form again.
     */
    if (success) {
      setSuccess(false);
    }

    /*
     * Revalidate an already-invalid field
     * while the user fixes it.
     */
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  /*
   * Validate field when user leaves it
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((prev) => {
      const nextErrors = {
        ...prev,
      };

      if (error) {
        nextErrors[name] = error;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  };

  /*
   * Submit form
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    /*
     * Normalize data before validation/submission
     */
    const normalizedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()]),
    );

    /*
     * Validate entire form
     */
    const validationErrors = validateForm(normalizedData);

    setErrors(validationErrors);
    setSubmitError('');

    /*
     * Stop submission if validation failed
     */
    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(emptyForm).find(
        (field) => validationErrors[field],
      );

      document.getElementById(firstInvalidField)?.focus();

      return;
    }

    setLoading(true);

    try {
      await sendContactEmail(normalizedData);

      /*
       * Success
       */
      onSuccess?.();

      setSuccess(true);
      setErrors({});
      setSubmitError('');

      setFormData({
        ...emptyForm,
      });

      localStorage.removeItem(STORAGE_KEY);

      /*
       * Reset success state after 3 seconds
       */
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }

      successTimerRef.current = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Contact form submission failed:', error);

      /*
       * Keep the user's form data intact.
       * They can retry without typing everything again.
       */
      setSubmitError(
        'Your message could not be sent. Please check your connection and try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    submitError,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
