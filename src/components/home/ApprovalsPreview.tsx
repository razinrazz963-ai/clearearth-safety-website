import React from 'react';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { officialDocuments } from '../../data/approvals';

export const ApprovalsPreview: React.FC = () => {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--ce-navy-subtle)' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Description */}
          <div>
            <SectionTitle
              badge="Compliance & Credentials"
              badgeVariant="green"
              title="Official Licensing & Verification"
              subtitle="ClearEarth Safety Consultancy LLC operates under official commercial registration and regulatory classification in the Emirate of Dubai, UAE."
              align="left"
            />

            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--ce-text-secondary)' }}>
              Transparency and compliance form the cornerstone of all our inspection and safety consultancy activities. All commercial activities are strictly performed under approved governmental classification.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/approvals" variant="primary" icon={<ArrowRight size={16} />}>
                View All Approvals & Documents
              </Button>
            </div>
          </div>

          {/* Right Document Cards Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {officialDocuments.slice(0, 2).map((doc) => (
              <div
                key={doc.id}
                className="ce-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--ce-white)',
                }}
              >
                <div
                  style={{
                    width: '74px',
                    height: '92px',
                    borderRadius: 'var(--ce-radius-sm)',
                    overflow: 'hidden',
                    border: '1px solid var(--ce-border)',
                    flexShrink: 0,
                    backgroundColor: '#F1F5F9',
                  }}
                >
                  <img
                    src={doc.previewImage}
                    alt={doc.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--ce-green-primary)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    <ShieldCheck size={14} />
                    <span>Official Document</span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--ce-navy-primary)' }}>
                    {doc.title}
                  </h4>
                  <div style={{ fontSize: '0.825rem', color: 'var(--ce-text-muted)', marginBottom: '0.5rem' }}>
                    {doc.issuingAuthority}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ce-navy-primary)' }}>
                    Scope: {doc.scope}
                  </div>
                </div>

                <Button to="/approvals" variant="outline" size="sm" icon={<ExternalLink size={14} />}>
                  View
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
