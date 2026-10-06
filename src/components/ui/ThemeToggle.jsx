import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { ThemeContext } from '../../context/theme/themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='theme-toggle'>
      <AnimatePresence mode='wait'>
        {theme === 'dark' ? (
          <motion.div
            key='sun'
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 180, scale: 0 }}
            transition={{ duration: 0.3 }}>
            <Sun className='w-5 h-5 text-primary' />
          </motion.div>
        ) : (
          <motion.div
            key='moon'
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -180, scale: 0 }}
            transition={{ duration: 0.3 }}>
            <Moon className='w-5 h-5 text-primary' />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
