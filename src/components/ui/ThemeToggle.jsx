import { useContext } from 'react';

import { ThemeContext } from '../../context/theme/themeContext';

import { InnerMoon } from '@theme-toggles/react';
import '@theme-toggles/react/styles/inner-moon.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <InnerMoon
      toggled={theme === 'dark'}
      onToggle={toggleTheme}
      duration={750}
      title='Toggle theme'
      className='theme-toggle text-primary'
    />
  );
};

export default ThemeToggle;
