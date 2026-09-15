import React from 'react';
import { CheckCircle2, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { contactData } from '../../data/contact';

export const AboutPreview: React.FC = () => {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Verified Official Card */}
          <div>
            <div
              className="ce-card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--ce-navy-primary)',
                color: 'var(--ce-white)',
                borderRadius: 'var(--ce-radius-lg)',
                border: '2px solid var(--ce-green-light)',
                boxShadow: 'var(--ce-shadow-xl)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1rem',
                }}
              >
                <ShieldCheck size={26} color="var(--ce-green-light)" />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--ce-green-light)',
                  }}
                >
                  Official Verified Entity
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--ce-white)', marginBottom: '0.4rem' }}>
                {contactData.companyName}
              </h3>
              <div
                className="font-arabic"
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '1.5rem',
                }}
              >
                {contactData.companyNameArabic}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '1.25rem',
                  fontSize: '0.92rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>DET License No:</span>
                  <strong style={{ color: 'var(--ce-white)', fontSize: '1rem' }}>{contactData.licenseNo}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Licensed Activity:</span>
                  <span style={{ color: 'var(--ce-green-light)', fontWeight: 600 }}>{contactData.activity}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Jurisdiction:</span>
                  <span style={{ color: 'var(--ce-white)' }}>Dubai, United Arab Emirates</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Technical Direction:</span>
                  <span style={{ color: 'var(--ce-white)' }}>Mechanical Engineering</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--ce-radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <FileCheck size={18} color="var(--ce-green-light)" style={{ flexShrink: 0 }} />
                <span>Established July 2026 under Dubai Economy & Tourism</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <SectionTitle
              badge="About ClearEarth"
              badgeVariant="green"
              title="Professional Occupational Safety & Engineering Consultancy"
              align="left"
            />

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem', color: 'var(--ce-text-main)' }}>
              <strong>The ClearEarth Safety Consultancy LLC was established in July 2026.</strong> We are a licensed third-party safety consultancy operating in the Emirate of Dubai, United Arab Emirates, under Commercial License No. <strong>{contactData.licenseNo}</strong>.
            </p>

            <p style={{ lineHeight: 1.7, marginBottom: '1.75rem', color: 'var(--ce-text-secondary)' }}>
              Under qualified mechanical engineering direction, ClearEarth delivers objective third-party inspection, load testing, workforce qualification, and precision instrumentation testing to uphold rigorous UAE safety standards across construction, industrial, and marine sites.
            </p>

            {/* Verified Scope Points */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--ce-navy-primary)' }}>
                  On-Shore & Off-Shore Equipment Inspection
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--ce-navy-primary)' }}>
                  Lifting Gears, Shackles & Slings Certification
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--ce-navy-primary)' }}>
                  Operator Competence & HSE Training
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--ce-navy-primary)' }}>
                  Pressure Gauges & Technical Instrumentation Testing
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/about" variant="primary" icon={<ArrowRight size={16} />}>
                Read Full Profile
              </Button>
              <Button to="/approvals" variant="outline">
                View Official Licenses
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
