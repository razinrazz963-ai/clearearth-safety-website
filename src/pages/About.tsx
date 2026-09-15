import React from 'react';
import { ShieldCheck, HardHat, FileCheck, CheckCircle2, UserCheck, ArrowRight, Award } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionTitle } from '../components/common/SectionTitle';
import { Button } from '../components/common/Button';
import { contactData } from '../data/contact';
import heroDubai from '../assets/images/hero/home-hero-dubai.jpg';

export const About: React.FC = () => {
  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Texture */}
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
          opacity: 0.1,
        }}
      />

      {/* Hero / Header Banner with Dubai Background */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--ce-navy-dark)',
          paddingTop: '5rem',
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
            opacity: 0.35,
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
          <div style={{ maxWidth: '820px' }}>
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
              Corporate Profile & Scope
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
              About ClearEarth Safety Consultancy LLC
            </h1>

            <div
              className="font-arabic"
              style={{
                color: 'var(--ce-green-light)',
                fontSize: '1.4rem',
                marginBottom: '1.5rem',
              }}
            >
              {contactData.companyNameArabic}
            </div>

            {/* Exact Required Sentence: established in July 2026 */}
            <p
              style={{
                color: 'var(--ce-white)',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 600,
                lineHeight: 1.6,
                paddingLeft: '1rem',
                borderLeft: '4px solid var(--ce-green-light)',
                marginBottom: '1.5rem',
              }}
            >
              The ClearEarth Safety Consultancy LLC was established in July 2026.
            </p>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Operating as a licensed third-party engineering and occupational safety entity under Dubai Department of Economy and Tourism (DET) Commercial License No. <strong>{contactData.licenseNo}</strong>.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Company Overview Section — Clean Full-Width Content Layout */}
      <section
        className="section-py"
        style={{
          position: 'relative',
          backgroundColor: 'rgba(248, 250, 252, 0.94)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Container>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <SectionTitle
              badge="Who We Are"
              badgeVariant="green"
              title="Licensed Occupational Safety Consultancy in Dubai"
              align="left"
            />

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--ce-text-main)' }}>
              <strong>The ClearEarth Safety Consultancy LLC was established in July 2026.</strong> We are an officially registered commercial establishment in the Emirate of Dubai, United Arab Emirates, holding Commercial License No. <strong>{contactData.licenseNo}</strong> issued by the Department of Economy and Tourism (DET).
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--ce-text-secondary)' }}>
              Our officially licensed economic activity is <strong>{contactData.activity}</strong>. ClearEarth is classified as an inspection entity holding an official No Objection Certificate (NOC) in the occupational safety and health consultancy field.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--ce-text-secondary)' }}>
              Under direct mechanical engineering technical leadership, we are dedicated to safeguarding industrial personnel, lifting machinery, and jobsite operations across the UAE through systematic third-party testing, compliance verification, and certified safety instruction.
            </p>

            {/* Verified Information Badges (Full-Width Responsive Grid) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--ce-white)',
                  borderRadius: 'var(--ce-radius-md)',
                  border: '1.5px solid var(--ce-border)',
                  boxShadow: 'var(--ce-shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <FileCheck size={28} color="var(--ce-green-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ce-text-muted)', letterSpacing: '0.04em' }}>
                    Government Registration
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ce-navy-primary)' }}>
                    DET License No. {contactData.licenseNo}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--ce-white)',
                  borderRadius: 'var(--ce-radius-md)',
                  border: '1.5px solid var(--ce-border)',
                  boxShadow: 'var(--ce-shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Award size={28} color="var(--ce-green-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ce-text-muted)', letterSpacing: '0.04em' }}>
                    Official Classification
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ce-navy-primary)' }}>
                    Inspection Entity NOC
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--ce-white)',
                  borderRadius: 'var(--ce-radius-md)',
                  border: '1.5px solid var(--ce-border)',
                  boxShadow: 'var(--ce-shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <ShieldCheck size={28} color="var(--ce-green-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ce-text-muted)', letterSpacing: '0.04em' }}>
                    Licensed Activity
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ce-navy-primary)' }}>
                    {contactData.activity}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/approvals" variant="primary" icon={<ArrowRight size={16} />}>
                View Official Approvals
              </Button>
              <Button to="/contact" variant="outline">
                Contact Our Engineers
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The Three Operational Disciplines */}
      <section
        className="section-py"
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
        }}
      >
        <Container>
          <SectionTitle
            badge="Operational Scope"
            badgeVariant="navy"
            title="Our Three Specialized Safety Disciplines"
            subtitle="Verified technical capabilities serving industrial, construction, and marine sectors across the UAE."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Discipline 1 */}
            <div
              className="ce-card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--ce-white)',
                borderRadius: 'var(--ce-radius-lg)',
                border: '1px solid var(--ce-border)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--ce-radius-md)',
                  backgroundColor: 'var(--ce-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <ShieldCheck size={28} color="var(--ce-green-primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ce-navy-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Inspection & Certification
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--ce-text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                Third-party technical inspection and proof load testing of on-shore and off-shore equipment including mobile cranes, tower cranes, lifting accessories, pressure vessels, earthmoving machinery, scaffolding, and Non-Destructive Testing (NDT).
              </p>
              <Button to="/services/inspection-certification" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                Explore Inspection Scope
              </Button>
            </div>

            {/* Discipline 2 */}
            <div
              className="ce-card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--ce-white)',
                borderRadius: 'var(--ce-radius-lg)',
                border: '1px solid var(--ce-border)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--ce-radius-md)',
                  backgroundColor: 'var(--ce-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <HardHat size={28} color="var(--ce-green-primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ce-navy-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Assessment & Training
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--ce-text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                Comprehensive qualification programs for equipment operators, riggers, and site workers, covering heavy machinery, PASMA scaffolding, height safety, fire fighting, first aid, and welder qualifications (1G to 6G).
              </p>
              <Button to="/services/assessment-training" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                Browse Training Catalog
              </Button>
            </div>

            {/* Discipline 3 */}
            <div
              className="ce-card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--ce-white)',
                borderRadius: 'var(--ce-radius-lg)',
                border: '1px solid var(--ce-border)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--ce-radius-md)',
                  backgroundColor: 'var(--ce-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <FileCheck size={28} color="var(--ce-green-primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ce-navy-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Instrumentation Testing
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--ce-text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                Functional verification, inspection, and condition testing for pressure gauges, electrical diagnostic meters, flow meters, temperature gauges, surveying tools, and industrial gas equipment.
              </p>
              <Button to="/services/instrumentation" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                View Technical Instruments
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Management & Engineering Direction */}
      <section
        className="section-py"
        style={{
          position: 'relative',
          backgroundColor: 'rgba(248, 250, 252, 0.94)',
        }}
      >
        <Container>
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              backgroundColor: 'var(--ce-white)',
              borderRadius: 'var(--ce-radius-lg)',
              padding: '3rem',
              border: '1px solid var(--ce-border)',
              boxShadow: 'var(--ce-shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--ce-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <UserCheck size={28} color="var(--ce-green-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--ce-navy-primary)', marginBottom: '2px', fontWeight: 800 }}>
                  {contactData.technicalManager.name}
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--ce-green-primary)', fontWeight: 700 }}>
                  {contactData.technicalManager.title}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ce-text-secondary)', marginBottom: '1.75rem' }}>
              ClearEarth Safety Consultancy operates under qualified mechanical engineering leadership, ensuring that all technical inspection procedures, proof load calculations, testing methodologies, and certification assessments adhere to strict safety engineering principles and UAE regulatory criteria.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--ce-text-main)' }}>
                  Engineering evaluation of lifting gears, shackles, and cranes
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--ce-text-main)' }}>
                  Supervision of Non-Destructive Testing (NDT) procedures
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--ce-text-main)' }}>
                  Adherence to Dubai DET and EIAC safety guidelines
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--ce-green-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--ce-text-main)' }}>
                  Objective third-party inspection without conflict of interest
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
