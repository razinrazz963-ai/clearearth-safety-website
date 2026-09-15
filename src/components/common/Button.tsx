import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  style = {},
  disabled = false,
  type = 'button',
  target,
  rel,
  ariaLabel,
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--ce-green-primary)',
      color: 'var(--ce-white)',
      border: '1px solid var(--ce-green-dark)',
      boxShadow: '0 2px 4px rgba(0, 107, 62, 0.2)',
    },
    secondary: {
      backgroundColor: 'var(--ce-navy-primary)',
      color: 'var(--ce-white)',
      border: '1px solid var(--ce-navy-dark)',
      boxShadow: '0 2px 4px rgba(15, 39, 68, 0.2)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--ce-navy-primary)',
      border: '1.5px solid var(--ce-navy-primary)',
    },
    'outline-white': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--ce-white)',
      border: '1.5px solid rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(4px)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--ce-green-primary)',
      border: 'none',
      padding: '0.25rem 0.5rem',
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: '0.45rem 0.9rem',
      fontSize: '0.85rem',
      borderRadius: 'var(--ce-radius-sm)',
    },
    md: {
      padding: '0.7rem 1.4rem',
      fontSize: '0.95rem',
      borderRadius: 'var(--ce-radius-md)',
    },
    lg: {
      padding: '0.9rem 1.9rem',
      fontSize: '1.05rem',
      borderRadius: 'var(--ce-radius-md)',
    },
  };

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--ce-transition-normal)',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ display: 'flex' }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'flex' }}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`ce-btn ce-btn-${variant} ${className}`}
        style={baseStyle}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`ce-btn ce-btn-${variant} ${className}`}
        style={baseStyle}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ce-btn ce-btn-${variant} ${className}`}
      style={baseStyle}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
