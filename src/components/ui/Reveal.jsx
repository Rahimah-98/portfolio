import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
  transition-all
  duration-700
  ease-out
  ${
    isVisible
      ? 'translate-y-0 scale-100 opacity-100'
      : 'translate-y-10 scale-[0.98] opacity-0'
  }
  ${className}
`}>
      {children}
    </div>
  );
};

export default Reveal;
