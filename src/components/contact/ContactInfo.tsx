import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { contactData } from '../../data/contact';

export const ContactInfo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Official Registry Card */}
      <div
        className="ce-card"
        style={{
          padding: '2.25rem',
          backgroundColor: 'var(--ce-navy-primary)',
          color: 'var(--ce-white)',
          borderRadius: 'var(--ce-radius-lg)',
          boxShadow: 'var(--ce-shadow-lg)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <ShieldCheck size={22} color="var(--ce-green-light)" />
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--ce-green-light)',
            }}
          >
            Licensed Occupational Safety Consultancy
          </span>
        </div>

        <h3 style={{ fontSize: '1.4rem', color: 'var(--ce-white)', marginBottom: '4px', fontWeight: 800 }}>
          {contactData.companyName}
        </h3>
        <div
          className="font-arabic"
          style={{
            fontSize: '1.1rem',
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
            gap: '0.65rem',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Commercial License No:</span>
            <strong style={{ color: 'var(--ce-white)', fontSize: '0.95rem' }}>{contactData.licenseNo}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Economic Activity:</span>
            <strong style={{ color: 'var(--ce-green-light)' }}>{contactData.activity}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Technical Management:</span>
            <strong style={{ color: 'var(--ce-white)' }}>{contactData.technicalManager.name}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Designation:</span>
            <span style={{ color: 'var(--ce-green-light)', fontSize: '0.85rem' }}>
              {contactData.technicalManager.title}
            </span>
          </div>
        </div>
      </div>

      {/* Direct Contact Channels Card */}
      <div
        className="ce-card"
        style={{
          padding: '2.25rem',
          backgroundColor: 'var(--ce-white)',
          borderRadius: 'var(--ce-radius-lg)',
          boxShadow: 'var(--ce-shadow-md)',
        }}
      >
        <h4 style={{ fontSize: '1.25rem', color: 'var(--ce-navy-primary)', marginBottom: '1.5rem', fontWeight: 700 }}>
          Direct Communication Channels
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* WhatsApp Direct */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--ce-radius-md)',
                backgroundColor: '#DCFCE7',
                color: '#16A34A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <WhatsAppIcon size={24} color="#16A34A" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ce-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                WhatsApp Direct (Official)
              </div>
              <a
                href={`https://wa.me/${contactData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#15803D',
                  marginTop: '2px',
                  textDecoration: 'none',
                }}
              >
                +971 52 484 8216
              </a>
              <div style={{ fontSize: '0.8rem', color: 'var(--ce-text-muted)' }}>
                Fast technical enquiries & inspection bookings
              </div>
            </div>
          </div>

          {/* Telephone */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--ce-radius-md)',
                backgroundColor: 'var(--ce-green-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={22} color="var(--ce-green-primary)" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ce-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Telephone / Mobile
              </div>
              {contactData.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s+/g, '')}`}
                  style={{
                    display: 'block',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: 'var(--ce-navy-primary)',
                    marginTop: '2px',
                    textDecoration: 'none',
                  }}
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--ce-radius-md)',
                backgroundColor: 'var(--ce-green-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={22} color="var(--ce-green-primary)" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ce-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Email Enquiry
              </div>
              <a
                href={`mailto:${contactData.email}`}
                style={{
                  display: 'block',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: 'var(--ce-navy-primary)',
                  marginTop: '2px',
                  textDecoration: 'none',
                }}
              >
                {contactData.email}
              </a>
            </div>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--ce-radius-md)',
                backgroundColor: 'var(--ce-green-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MapPin size={22} color="var(--ce-green-primary)" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ce-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Registered Location
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--ce-navy-primary)', marginTop: '2px' }}>
                {contactData.address.full}
              </div>
            </div>
          </div>

          {/* Primary WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${contactData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '0.95rem 1.5rem',
              borderRadius: 'var(--ce-radius-md)',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1rem',
              marginTop: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#20BD5A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
          >
            <WhatsAppIcon size={22} color="#FFFFFF" />
            <span>Chat on WhatsApp (+971 52 484 8216)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
