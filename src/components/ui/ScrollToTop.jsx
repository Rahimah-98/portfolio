import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label='Back to top'
      className='fixed bottom-12 right-12 z-50 flex size-10 items-center justify-center rounded-full text-white bg-primary border border-border shadow-xl float transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl'>
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
