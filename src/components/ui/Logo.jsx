const Logo = () => {
  return (
    <a href='/' aria-label='Rahimah'>
      <img
        src='/logo-light.svg'
        alt='Rahimah'
        className='block h-8 w-auto dark:hidden'
      />

      <img
        src='/logo-dark.svg'
        alt=''
        aria-hidden='true'
        className='hidden h-8 w-auto dark:block'
      />
    </a>
  );
};

export default Logo;
