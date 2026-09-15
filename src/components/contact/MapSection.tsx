import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Container } from '../common/Container';
import { contactData } from '../../data/contact';
import { Button } from '../common/Button';

export const MapSection: React.FC = () => {
  return (
    <section className="section-py-sm" style={{ backgroundColor: 'var(--ce-bg-alt)' }}>
      <Container>
        <div
          className="ce-card"
          style={{
            overflow: 'hidden',
            borderRadius: 'var(--ce-radius-lg)',
            border: '1px solid var(--ce-border)',
            backgroundColor: 'var(--ce-white)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid var(--ce-border)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2px' }}>
                <MapPin size={18} color="var(--ce-green-primary)" />
                <h4 style={{ fontSize: '1.15rem', color: 'var(--ce-navy-primary)' }}>
                  Our Dubai Operational Office
                </h4>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ce-text-secondary)' }}>
                {contactData.address.full}
              </div>
            </div>

            <Button
              href="https://maps.google.com/?q=Al+Satwa+Dubai+UAE"
              target="_blank"
              variant="outline"
              size="sm"
              icon={<ExternalLink size={14} />}
            >
              Open in Google Maps
            </Button>
          </div>

          {/* Map Frame */}
          <div style={{ width: '100%', height: '360px', backgroundColor: '#E2E8F0' }}>
            <iframe
              title="ClearEarth Safety Consultancy LLC Location"
              src={contactData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
