import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { contactData } from '../../data/contact';
import bgSkyline from '../../assets/images/hero/dubai-skyline.png';

export const ContactCTA: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--ce-navy-dark)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background with dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.22,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(9, 24, 43, 0.95) 0%, rgba(0, 77, 44, 0.85) 100%)',
        }}
      />

      <Container style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--ce-radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: '#6EE7B7',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.825rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Start Your Safety Consultation
          </span>

          <h2
            style={{
              color: 'var(--ce-white)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            Ready to Certify Your Equipment or Train Your Personnel?
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.88)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Connect directly with ClearEarth Safety Consultancy LLC. Our engineering team is ready to assist you with on-site inspection schedules, accredited training sessions, and technical testing.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Send Direct Enquiry
            </Button>
            <Button
              href={`https://wa.me/${contactData.whatsapp}`}
              target="_blank"
              variant="outline-white"
              size="lg"
              icon={<WhatsAppIcon size={18} color="#25D366" />}
            >
              WhatsApp Us (+971 52 484 8216)
            </Button>
            <Button
              href={`tel:${contactData.primaryPhone.replace(/\s+/g, '')}`}
              variant="outline-white"
              size="lg"
              icon={<Phone size={18} />}
            >
              Call {contactData.primaryPhone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
