import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/themeContext';

const Logo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <a href='/' aria-label='Rahimah'>
      <img
        src={theme === 'dark' ? '/logo-light.svg' : '/logo-dark.svg'}
        alt='Rahimah'
        className='block h-8 w-auto '
      />
    </a>
  );
};

export default Logo;
