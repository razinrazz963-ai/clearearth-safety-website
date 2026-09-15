import React from 'react';
import { Lock } from 'lucide-react';
import { Container } from '../components/common/Container';
import { ApprovalGallery } from '../components/approvals/ApprovalGallery';
import { contactData } from '../data/contact';
import heroDubai from '../assets/images/hero/home-hero-dubai.jpg';

export const Approvals: React.FC = () => {
  return (
    <main>
      {/* Page Header Banner */}
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
              Government Credentials & Compliance
            </span>
            <h1
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              Approvals & Official Licensing
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Verifiable commercial registration, classification records, and official regulatory documents for ClearEarth Safety Consultancy LLC.
            </p>
          </div>
        </Container>
      </section>

      {/* Official Documents Grid & Lightbox */}
      <ApprovalGallery />

      {/* Verification Statement & Privacy Section */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--ce-bg-alt)' }}>
        <Container>
          <div
            className="ce-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--ce-white)',
              border: '1px solid var(--ce-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Lock size={22} color="var(--ce-navy-primary)" />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ce-navy-primary)' }}>
                Document Verification & Public Security Notice
              </h3>
            </div>

            <p style={{ color: 'var(--ce-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              In accordance with UAE personal data protection regulations, the document copies published on this website represent public verification records. Sensitive personal details, including personal identification numbers, personal residential addresses, and private signatures have been deliberately redacted to safeguard individual privacy while upholding corporate transparency.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                padding: '1.25rem',
                backgroundColor: 'var(--ce-navy-subtle)',
                borderRadius: 'var(--ce-radius-sm)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--ce-text-muted)', fontWeight: 600 }}>
                  REGISTERED ENTITY NAME
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ce-navy-primary)' }}>
                  {contactData.companyName}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--ce-text-muted)', fontWeight: 600 }}>
                  COMMERCIAL LICENSE NUMBER
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ce-green-primary)' }}>
                  DET License No. {contactData.licenseNo}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--ce-text-muted)', fontWeight: 600 }}>
                  LICENSED ECONOMIC ACTIVITY
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ce-navy-primary)' }}>
                  {contactData.activity}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
