import { ArrowRight, Download } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  icon = 'arrow',
  href,
  type = 'button',
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-8
    py-4
    text-sm
    font-medium
    leading-none
    whitespace-nowrap
    transition-all
    duration-200
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-[#8f8ff0]
      to-[#7374e8]
      text-white
      shadow-[0_4px_12px_rgba(91,92,226,0.22)]
      hover:from-[#8586ec]
      hover:to-[#6869df]
      hover:shadow-[0_6px_16px_rgba(91,92,226,0.28)]
      hover:-translate-y-px
    `,

    secondary: `
      border
      border-primary/30
      bg-transparent
      text-foreground
      shadow-[0_4px_12px_rgba(91,92,226,0.22)]
      hover:border-primary/60
      hover:bg-primary/5
    `,
  };

  const iconElement =
    icon === 'download' ? (
      <Download size={15} strokeWidth={2} aria-hidden='true' />
    ) : (
      <ArrowRight
        size={15}
        strokeWidth={2}
        aria-hidden='true'
        className='
          transition-transform
          duration-200
          group-hover:translate-x-0.5
        '
      />
    );

  const content = (
    <>
      <span>{children}</span>
      {icon && iconElement}
    </>
  );

  const classes = `
    group
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
