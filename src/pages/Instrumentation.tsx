import React from 'react';
import { Container } from '../components/common/Container';
import { InstrumentationSection } from '../components/services/Instrumentation';
import heroDubai from '../assets/images/hero/home-hero-dubai.jpg';

export const Instrumentation: React.FC = () => {
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
            backgroundImage: `url(${heroDubai})`,
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
              Division 03
            </span>
            <h1
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              Instrumentation
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Testing, condition inspection, and verification for pressure gauges, electrical instruments, flow meters, temperature gauges, surveying tools, and gas equipment.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <InstrumentationSection />
    </main>
  );
};
