import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { servicePillars } from '../data/services';
import heroIndustrial from '../assets/images/hero/hero-industrial.jpg';

export const Services: React.FC = () => {
  return (
    <main>
      {/* Header Banner */}
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
          <div style={{ maxWidth: '720px' }}>
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
              Comprehensive Solutions
            </span>
            <h1
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              Our Professional Services
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Three specialized divisions engineered to deliver end-to-end equipment safety, personnel qualification, and technical instrumentation verification across the UAE.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars Breakdown */}
      <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicePillars.map((pillar, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={pillar.id}
                  className="ce-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                    padding: '2.5rem',
                    backgroundColor: 'var(--ce-white)',
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: 'var(--ce-green-primary)',
                          backgroundColor: 'var(--ce-green-subtle)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--ce-radius-full)',
                        }}
                      >
                        Pillar 0{index + 1}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '2rem', color: 'var(--ce-navy-primary)', marginBottom: '0.5rem' }}>
                      {pillar.title}
                    </h2>

                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--ce-green-primary)', marginBottom: '1.25rem' }}>
                      {pillar.tagline}
                    </div>

                    <p style={{ color: 'var(--ce-text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
                      {pillar.overview}
                    </p>

                    <Button to={pillar.slug} variant="primary" icon={<ArrowRight size={16} />}>
                      Explore {pillar.title}
                    </Button>
                  </div>

                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        borderRadius: 'var(--ce-radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--ce-shadow-lg)',
                        aspectRatio: '16/10',
                      }}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
};
