import React from 'react';
import { Container } from '../components/common/Container';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { MapSection } from '../components/contact/MapSection';
import heroDubai from '../assets/images/hero/home-hero-dubai.jpg';

export const Contact: React.FC = () => {
  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Dubai Image for Contact Us */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroDubai})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          opacity: 0.12,
        }}
      />

      {/* Banner with Dubai Skyline Background */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--ce-navy-dark)',
          paddingTop: '5.5rem',
          paddingBottom: '5rem',
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
            opacity: 0.38,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(9, 24, 43, 0.95) 0%, rgba(9, 24, 43, 0.82) 60%, rgba(0, 107, 62, 0.45) 100%)',
          }}
        />

        <Container style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--ce-radius-full)',
                backgroundColor: 'rgba(0, 107, 62, 0.4)',
                color: '#6EE7B7',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Get In Touch
            </span>

            <h1
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(2.35rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                lineHeight: 1.18,
              }}
            >
              Contact Our Consultancy Team
            </h1>

            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: 1.65 }}>
              Direct WhatsApp, telephone, email, and booking enquiries for third-party inspection, operator assessment, and instrumentation testing in Dubai and across the UAE.
            </p>
          </div>
        </Container>
      </section>

      {/* Main 2-Column Section */}
      <section
        className="section-py"
        style={{
          position: 'relative',
          backgroundColor: 'rgba(248, 250, 252, 0.94)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Contact Info */}
            <ContactInfo />

            {/* Right: Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <MapSection />
    </main>
  );
};
