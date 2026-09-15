import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from './ServiceCard';
import { inspectionCategories } from '../../data/services';
import flyerImg from '../../assets/images/services/inspection-certification/lifting-equipment-flyer.jpg';
import { Button } from '../common/Button';

export const InspectionCertificationSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Site Visual & Dimensional Inspection',
      desc: 'Checking structural integrity, wear limits, deformation, corrosion, and safety markings.',
    },
    {
      num: '02',
      title: 'Functional & Load Testing',
      desc: 'Operational testing of limit switches, emergency stops, hydraulic circuits, and proof load verification.',
    },
    {
      num: '03',
      title: 'NDT Examination',
      desc: 'Magnetic Particle (MPI) and Ultrasonic Testing (UT) on critical hooks, welds, and high-stress points.',
    },
    {
      num: '04',
      title: 'Official Certification & Tagging',
      desc: 'Issuance of comprehensive third-party inspection certificates and green site compliance tags.',
    },
  ];

  return (
    <div>
      {/* Intro & Categories Grid */}
      <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
        <Container>
          <SectionTitle
            badge="Inspection Scope"
            badgeVariant="green"
            title="Inspection and Certification of On-Shore & Off-Shore Equipment"
            subtitle="Third-party safety verification across mobile cranes, lifting gears, pressure vessels, earthmoving machinery, scaffolding, and NDT."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4.5rem',
            }}
          >
            {inspectionCategories.map((cat) => (
              <ServiceCard
                key={cat.id}
                title={cat.title}
                subtitle={cat.subtitle}
                description={cat.description}
                image={cat.image}
                items={cat.items}
                enquirySubject={`Inspection: ${cat.title}`}
              />
            ))}
          </div>

          {/* Reference Document / Flyer Section */}
          <div
            style={{
              backgroundColor: 'var(--ce-bg-alt)',
              borderRadius: 'var(--ce-radius-lg)',
              border: '1px solid var(--ce-border)',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--ce-green-primary)',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem',
                }}
              >
                <ShieldCheck size={16} /> Official Technical Collateral
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--ce-navy-primary)', marginBottom: '1rem' }}>
                Lifting Equipment & Accessories Scope
              </h3>
              <p style={{ color: 'var(--ce-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Our inspection methodologies adhere to international lifting standards and UAE industrial requirements. We provide complete testing of mobile cranes, suspended cradles, passenger hoists, slings, shackles, and pressure vessels.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Proof load testing & thorough mechanical examination</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Slings & shackles color coding and safe working load (SWL) verification</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Non-destructive weld testing on critical structural joints</span>
                </div>
              </div>
              <Button to="/contact?service=Lifting%20Inspection" variant="primary" icon={<ArrowRight size={16} />}>
                Schedule Equipment Inspection
              </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  maxWidth: '380px',
                  borderRadius: 'var(--ce-radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--ce-shadow-xl)',
                  border: '1px solid var(--ce-border)',
                }}
              >
                <img
                  src={flyerImg}
                  alt="ClearEarth Lifting Equipment Inspection Flyer"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Inspection Process Steps */}
      <section className="section-py-sm" style={{ backgroundColor: 'var(--ce-navy-subtle)' }}>
        <Container>
          <SectionTitle
            badge="Standard Operating Procedure"
            badgeVariant="navy"
            title="Rigorous 4-Stage Inspection Process"
            subtitle="Ensuring every piece of machinery operates at peak safety before certification."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {steps.map((st) => (
              <div
                key={st.num}
                className="ce-card"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--ce-white)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--ce-green-light)',
                    opacity: 0.35,
                    marginBottom: '0.5rem',
                  }}
                >
                  {st.num}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--ce-navy-primary)', marginBottom: '0.65rem' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ce-text-secondary)' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
