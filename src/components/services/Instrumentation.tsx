import React, { useState } from 'react';
import { Check, ChevronDown, ArrowRight, ShieldCheck, Gauge } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { instrumentationCategories } from '../../data/services';

export const InstrumentationSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div>
      <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
        <Container>
          <SectionTitle
            badge="Technical Instrumentation"
            badgeVariant="green"
            title="Instrumentation & Calibration Verification"
            subtitle="Testing, functional verification, and condition inspection of industrial measuring gauges, flow meters, electrical diagnostic instruments, surveying tools, and gas equipment."
            align="center"
          />

          {/* 6 Dedicated Category Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {instrumentationCategories.map((cat) => {
              const isExpanded = expandedCard === cat.id;

              return (
                <div
                  key={cat.id}
                  className="ce-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    backgroundColor: 'var(--ce-white)',
                    borderRadius: 'var(--ce-radius-lg)',
                    boxShadow: 'var(--ce-shadow-md)',
                    border: '1px solid var(--ce-border)',
                  }}
                >
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: 'var(--ce-navy-subtle)' }}>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      }}
                    >
                      {cat.subtitle}
                    </div>
                  </div>

                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--ce-navy-primary)', marginBottom: '0.65rem', fontWeight: 800 }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ce-text-secondary)', marginBottom: '1.5rem' }}>
                      {cat.description}
                    </p>

                    {/* Expandable Specifications List */}
                    <div style={{ marginBottom: '1.75rem', flex: 1 }}>
                      <button
                        onClick={() => toggleDetails(cat.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'var(--ce-bg-alt)',
                          borderRadius: 'var(--ce-radius-sm)',
                          border: '1px solid var(--ce-border)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--ce-navy-primary)',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{isExpanded ? 'Hide Equipment Items' : 'View Equipment & Range'}</span>
                        <ChevronDown
                          size={16}
                          style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </button>

                      {isExpanded && (
                        <div
                          className="animate-slide-down"
                          style={{
                            marginTop: '0.75rem',
                            padding: '1rem',
                            backgroundColor: 'var(--ce-bg-main)',
                            borderRadius: 'var(--ce-radius-sm)',
                            border: '1px solid var(--ce-border)',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              color: 'var(--ce-green-primary)',
                              marginBottom: '0.65rem',
                              letterSpacing: '0.04em',
                            }}
                          >
                            Inspection & Testing Range:
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {cat.items.map((item) => (
                              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                                <Check size={16} color="var(--ce-green-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Button
                      to={`/contact?service=Instrumentation:%20${encodeURIComponent(cat.title)}`}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight size={15} />}
                    >
                      Enquire for {cat.title}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Quality & Scope Commitment (No brochure flyer) */}
          <div
            className="ce-card"
            style={{
              padding: '3rem',
              backgroundColor: 'var(--ce-white)',
              borderRadius: 'var(--ce-radius-lg)',
              border: '1px solid var(--ce-border)',
              boxShadow: 'var(--ce-shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Gauge size={24} color="var(--ce-green-primary)" />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--ce-navy-primary)', fontWeight: 800 }}>
                Rigorous Instrumentation Testing Standards
              </h3>
            </div>
            <p style={{ color: 'var(--ce-text-secondary)', lineHeight: 1.7, maxWidth: '820px', marginBottom: '1.75rem' }}>
              Our mechanical engineering inspection team verifies the accuracy, operational integrity, and safety tolerance of all measuring and sensing instruments. From hydrostatic pressure transmitters to laser optical alignment tools and industrial gas regulators, we provide clear reporting and compliance documentation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/contact?service=Instrumentation" variant="primary" icon={<ArrowRight size={15} />}>
                Request Testing Consultation
              </Button>
              <Button to="/approvals" variant="outline" icon={<ShieldCheck size={15} />}>
                View Government Licenses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
