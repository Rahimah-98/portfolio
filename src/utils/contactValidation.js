export const emptyForm = {
  name: '',
  lastName: '',
  email: '',
  message: '',
};

export const validateField = (field, value) => {
  const trimmedValue = value.trim();

  switch (field) {
    case 'name':
      if (!trimmedValue) {
        return 'Please enter your first name.';
      }

      if (trimmedValue.length < 2) {
        return 'Name must be at least 2 characters.';
      }

      if (trimmedValue.length > 80) {
        return 'Name must be 80 characters or fewer.';
      }

      return '';

    case 'lastName':
      if (!trimmedValue) {
        return 'Please enter your last name.';
      }

      if (trimmedValue.length < 2) {
        return 'Last name must be at least 2 characters.';
      }

      if (trimmedValue.length > 80) {
        return 'Last name must be 80 characters or fewer.';
      }

      return '';

    case 'email':
      if (!trimmedValue) {
        return 'Please enter your email address.';
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue)) {
        return 'Please enter a valid email address.';
      }

      if (trimmedValue.length > 254) {
        return 'Email address is too long.';
      }

      return '';

    case 'message':
      if (!trimmedValue) {
        return 'Please enter a message.';
      }

      if (trimmedValue.length < 10) {
        return 'Message must be at least 10 characters.';
      }

      if (trimmedValue.length > 2000) {
        return 'Message must be 100 characters or fewer.';
      }

      return '';

    default:
      return '';
  }
};

export const validateForm = (values) => {
  const errors = {};

  Object.keys(emptyForm).forEach((field) => {
    const error = validateField(field, values[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
