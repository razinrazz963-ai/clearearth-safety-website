import React from 'react';

interface SectionTitleProps {
  badge?: string;
  badgeVariant?: 'green' | 'navy';
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeVariant = 'green',
  title,
  subtitle,
  align = 'center',
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`section-title-wrap ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '680px',
        margin: align === 'center' ? '0 auto 3rem auto' : '0 0 2.5rem 0',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span
            className={`ce-badge ${badgeVariant === 'navy' ? 'ce-badge-navy' : ''}`}
            style={
              dark
                ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: 'var(--ce-white)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                  }
                : undefined
            }
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        style={{
          color: dark ? 'var(--ce-white)' : 'var(--ce-navy-primary)',
          marginBottom: subtitle ? '1rem' : 0,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: dark ? 'rgba(255, 255, 255, 0.8)' : 'var(--ce-text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
