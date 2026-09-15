import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/images/logo/clear-earth-logo.png';

interface LogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'compact';
  className?: string;
  linkToHome?: boolean;
  dropShadow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  linkToHome = true,
  dropShadow = false,
}) => {
  // Sizing specs strictly based on client requirements:
  // Desktop: 200–240px width (approx 230px), maintaining original proportions
  // Mobile: 150–180px width (approx 165px)
  const sizeStyles: Record<string, { width: string; maxWidth: string; maxHeight: string }> = {
    header: { width: '230px', maxWidth: '240px', maxHeight: '92px' },
    footer: { width: '240px', maxWidth: '250px', maxHeight: '96px' },
    hero: { width: '320px', maxWidth: '360px', maxHeight: '140px' },
    compact: { width: '180px', maxWidth: '190px', maxHeight: '72px' },
  };

  const currentSize = sizeStyles[variant] || sizeStyles.header;

  const content = (
    <div
      className={`logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'transparent',
        padding: '2px 0',
      }}
    >
      <img
        src={logoSrc}
        alt="ClearEarth Safety Consultancy LLC - واضح أرض شركة استشارات السلامة ذ.م.م"
        className="ce-logo-img"
        style={{
          width: currentSize.width,
          maxWidth: currentSize.maxWidth,
          maxHeight: currentSize.maxHeight,
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          filter: dropShadow ? 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))' : 'none',
          transition: 'width 0.2s ease, transform 0.2s ease',
        }}
        loading="eager"
      />
      <style>{`
        @media (max-width: 768px) {
          .ce-logo-img {
            width: 165px !important;
            max-width: 180px !important;
            max-height: 68px !important;
          }
        }
      `}</style>
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        aria-label="ClearEarth Safety Consultancy LLC Homepage"
        style={{ display: 'inline-block', lineHeight: 0 }}
      >
        {content}
      </Link>
    );
  }

  return content;
};
