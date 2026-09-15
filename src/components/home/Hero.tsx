import React from 'react';
import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';
import { heroConfig } from '../../data/heroImages';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth',
    });
  };

  return (
    <section
      aria-label="ClearEarth Safety Consultancy LLC"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--ce-navy-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Single Dubai Skyline Background Image with Slow Cinematic Zoom */}
      <div
        className="animate-cinematic-zoom"
        style={{
          position: 'absolute',
          inset: '-20px',
          backgroundImage: `url(${heroConfig.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Balanced Luxury Dark/Gradient Overlay for Contrast and Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(9, 24, 43, 0.40) 0%, rgba(9, 24, 43, 0.72) 75%, rgba(9, 24, 43, 0.88) 100%)',
          zIndex: 2,
        }}
      />

      {/* Hero Content — Clean, Centered, Authoritative */}
      <div
        className="site-container animate-fade-in-up"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        {/* Prominent Visible ClearEarth Logo Pod */}
        <div
          style={{
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              padding: '1rem 2.25rem',
              borderRadius: 'var(--ce-radius-lg)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Logo variant="hero" linkToHome={false} dropShadow={false} />
          </div>
        </div>

        {/* Primary Headline Starting with requested sentence */}
        <h1
          style={{
            color: 'var(--ce-white)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.65)',
            textTransform: 'uppercase',
          }}
        >
          {heroConfig.headline}
        </h1>

        {/* Professional Supporting Text related to ClearEarth */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            fontWeight: 500,
            lineHeight: 1.65,
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          {heroConfig.supportingText}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <Button
            to={heroConfig.primaryCtaPath}
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            style={{
              padding: '1rem 2.25rem',
              fontSize: '1.1rem',
              borderRadius: 'var(--ce-radius-md)',
              boxShadow: '0 8px 25px rgba(0, 107, 62, 0.5)',
            }}
          >
            {heroConfig.primaryCtaText}
          </Button>

          <Button
            to={heroConfig.secondaryCtaPath}
            variant="outline"
            size="lg"
            icon={<MessageSquare size={18} />}
            style={{
              padding: '1rem 2.25rem',
              fontSize: '1.1rem',
              borderRadius: 'var(--ce-radius-md)',
              backgroundColor: 'rgba(15, 39, 68, 0.55)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: 'var(--ce-white)',
              backdropFilter: 'blur(6px)',
            }}
          >
            {heroConfig.secondaryCtaText}
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to main content"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.75)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          transition: 'color 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--ce-green-light)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        }}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
          Scroll Down
        </span>
        <ChevronDown size={22} />
      </button>
    </section>
  );
};
