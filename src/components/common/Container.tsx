import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  style = {},
}) => {
  const maxWidths: Record<string, string> = {
    sm: '780px',
    md: '1024px',
    lg: 'var(--ce-max-width)',
    full: '100%',
  };

  return (
    <div
      className={`site-container ${className}`}
      style={{
        maxWidth: maxWidths[size],
        ...style,
      }}
    >
      {children}
    </div>
  );
};
