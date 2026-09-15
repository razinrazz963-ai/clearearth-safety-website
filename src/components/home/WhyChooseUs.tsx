import React from 'react';
import { ShieldCheck, HardHat, Compass, FileCheck, CheckCircle2, Award } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck size={26} color="var(--ce-green-primary)" />,
      title: 'Third-Party Impartiality',
      description: 'Independent evaluation adhering to international safety engineering standards without conflict of interest.',
    },
    {
      icon: <HardHat size={26} color="var(--ce-green-primary)" />,
      title: 'Qualified Engineering Leadership',
      description: 'Technical management led by mechanical engineers experienced in heavy machinery, rigging, and pressure systems.',
    },
    {
      icon: <FileCheck size={26} color="var(--ce-green-primary)" />,
      title: 'Licensed Dubai DET Entity',
      description: 'Officially registered Occupational Safety Consultancy under Commercial License No. 1639056.',
    },
    {
      icon: <Award size={26} color="var(--ce-green-primary)" />,
      title: 'Comprehensive 60+ Course Curriculum',
      description: 'Extensive operator, technical, fire safety, and HSE training programs structured to certify site personnel.',
    },
    {
      icon: <Compass size={26} color="var(--ce-green-primary)" />,
      title: 'On-Shore & Off-Shore Scope',
      description: 'Inspection capability covering mobile plants, offshore cranes, pressure tanks, and precision instrumentation.',
    },
    {
      icon: <CheckCircle2 size={26} color="var(--ce-green-primary)" />,
      title: 'Zero-Defect Safety Focus',
      description: 'Dedicated to preventing workplace incidents through systematic inspection, tagging, and safety training.',
    },
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--ce-white)' }}>
      <Container>
        <SectionTitle
          badge="Why ClearEarth"
          badgeVariant="navy"
          title="Engineering Rigor. Complete Compliance."
          subtitle="Our consultancy is built on precision, impartiality, and verified UAE occupational safety standards."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {points.map((pt) => (
            <div
              key={pt.title}
              className="ce-card"
              style={{
                padding: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                backgroundColor: 'var(--ce-white)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--ce-radius-md)',
                  backgroundColor: 'var(--ce-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {pt.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem', color: 'var(--ce-navy-primary)' }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ce-text-secondary)' }}>
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
