import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-dm-sans font-extrabold rounded-[22px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-global-5 inline-flex items-center justify-center gap-[10px]';
  
  const variants = {
    primary: 'bg-global-10 text-global-1 hover:bg-global-9 hover:shadow-lg active:scale-95 disabled:bg-global-6 disabled:text-global-4',
    secondary: 'bg-global-2 text-global-10 hover:bg-global-3 disabled:bg-global-6 disabled:text-global-4',
    outline: 'border border-global-10 text-global-10 hover:bg-global-10 hover:text-global-1 disabled:border-global-6 disabled:text-global-6',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm sm:px-4 sm:py-1.5 sm:text-base',
    medium: 'px-4 py-1.5 text-base sm:px-6 sm:py-2 sm:text-lg',
    large: 'px-5 py-2 text-lg sm:px-8 sm:py-3 sm:text-xl',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <span className="text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[24px]">
        {children}
      </span>
      {rightImage && (
        <img 
          src={rightImage?.src} 
          alt="Button Icon" 
          className={`w-[${rightImage?.width}px] h-[${rightImage?.height}px] flex-shrink-0`}
          style={{
            width: `${rightImage?.width}px`,
            height: `${rightImage?.height}px`
          }}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes?.node,
  onClick: PropTypes?.func,
  variant: PropTypes?.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes?.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes?.bool,
  type: PropTypes?.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes?.bool,
  rightImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number?.isRequired,
    height: PropTypes?.number?.isRequired,
  }),
  className: PropTypes?.string,
};

export default Button;