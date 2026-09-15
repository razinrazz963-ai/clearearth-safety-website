import React from 'react';
import { Container } from '../components/common/Container';
import { InspectionCertificationSection } from '../components/services/InspectionCertification';
import heroIndustrial from '../assets/images/hero/hero-industrial.jpg';

export const InspectionCertification: React.FC = () => {
  return (
    <main>
      {/* Banner */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--ce-navy-dark)',
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroIndustrial})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.22,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(9, 24, 43, 0.95), rgba(9, 24, 43, 0.78))',
          }}
        />
        <Container style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '760px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--ce-radius-full)',
                backgroundColor: 'rgba(0, 107, 62, 0.4)',
                color: '#6EE7B7',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Division 01
            </span>
            <h1
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              Inspection & Certification
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Specialized third-party safety inspection and certification of on-shore and off-shore equipment across the United Arab Emirates.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Section Breakdown */}
      <InspectionCertificationSection />
    </main>
  );
};
