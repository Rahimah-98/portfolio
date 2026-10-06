const FieldError = ({ id, children }) => {
  if (!children) return null;

  return (
    <p id={id} role='alert' className='text-sm text-red-500'>
      {children}
    </p>
  );
};

export default FieldError;
