import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Gauge, ArrowRight, Check } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { servicePillars } from '../../data/services';

export const ServicesPreview: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    'inspection-certification': <ShieldCheck size={28} color="var(--ce-green-primary)" />,
    'assessment-training': <Award size={28} color="var(--ce-green-primary)" />,
    instrumentation: <Gauge size={28} color="var(--ce-green-primary)" />,
  };

  const featureHighlights: Record<string, string[]> = {
    'inspection-certification': [
      'Lifting Equipment & Mobile/Tower Cranes',
      'Lifting Accessories, Slings & Shackles',
      'Pressure Vessels & Boilers',
      'Earth Moving Machineries & Excavators',
      'Scaffolding Audits & Green Tagging',
      'NDT Non-Destructive Testing',
    ],
    'assessment-training': [
      'Heavy Equipment & Crane Operator Training',
      'Rigging, Slinging & Banksman Courses',
      'Fire Fighting, First Aid & Emergency Response',
      'Working at Height & Scaffolding by PASMA',
      'Welder Training & Qualification (1G-6G)',
      'HSE, Risk Assessment & PTW Awareness',
    ],
    instrumentation: [
      'Pressure Gauges & Transmitters',
      'Electrical Diagnostic Instruments',
      'Fluid & Liquid Flow Meters',
      'Temperature Gauges & RTD Sensors',
      'Optical & Laser Surveying Instruments',
      'Gas Regulators & Detection Equipment',
    ],
  };

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-alt)' }}>
      <Container>
        <SectionTitle
          badge="Core Specializations"
          badgeVariant="green"
          title="Our Three Core Service Divisions"
          subtitle="ClearEarth Safety Consultancy delivers specialized inspection, workforce assessment, and precision instrumentation for UAE industries."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="ce-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backgroundColor: 'var(--ce-white)',
              }}
            >
              {/* Image with Pillar Tag */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--ce-navy-primary)',
                    color: 'var(--ce-white)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--ce-radius-sm)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  Division Pillar
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--ce-radius-md)',
                      backgroundColor: 'var(--ce-green-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {pillarIcons[pillar.id]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '2px' }}>{pillar.title}</h3>
                    <div style={{ fontSize: '0.825rem', color: 'var(--ce-green-primary)', fontWeight: 600 }}>
                      {pillar.tagline}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--ce-text-secondary)', marginBottom: '1.5rem' }}>
                  {pillar.overview}
                </p>

                {/* Scope Highlights */}
                <div style={{ marginBottom: '2rem', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--ce-navy-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Key Equipment / Disciplines:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {(featureHighlights[pillar.id] || []).map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <Check size={15} color="var(--ce-green-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: 'var(--ce-text-main)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <Link
                  to={pillar.slug}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    backgroundColor: 'var(--ce-navy-subtle)',
                    color: 'var(--ce-navy-primary)',
                    borderRadius: 'var(--ce-radius-md)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--ce-green-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--ce-navy-subtle)';
                    e.currentTarget.style.color = 'var(--ce-navy-primary)';
                  }}
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
