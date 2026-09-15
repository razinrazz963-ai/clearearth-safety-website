import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { contactData } from '../../data/contact';
import { navigationItems } from '../../data/navigation';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--ce-bg-dark)',
        color: 'var(--ce-text-light)',
        borderTop: '4px solid var(--ce-green-primary)',
        paddingTop: '4.5rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="site-container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--ce-border-dark)',
          }}
        >
          {/* Column 1: Company Brand & Verified Credentials */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="footer" />
            </div>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              {contactData.companyName} is an authorized Occupational Safety Consultancy based in Dubai, United Arab Emirates, providing rigorous third-party inspection, operator competence assessment, and instrumentation services.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 'var(--ce-radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <ShieldCheck size={16} color="var(--ce-green-light)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--ce-white)', fontWeight: 600 }}>
                DET Commercial License #{contactData.licenseNo}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                color: 'var(--ce-white)',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.65rem',
              }}
            >
              Quick Links
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '36px',
                  height: '2px',
                  backgroundColor: 'var(--ce-green-light)',
                }}
              />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navigationItems.map((item) => (
                <li key={item.label} style={{ marginBottom: '0.65rem' }}>
                  <Link
                    to={item.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.92rem',
                      transition: 'color var(--ce-transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ce-green-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    <ArrowRight size={13} color="var(--ce-green-light)" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              style={{
                color: 'var(--ce-white)',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.65rem',
              }}
            >
              Our Core Services
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '36px',
                  height: '2px',
                  backgroundColor: 'var(--ce-green-light)',
                }}
              />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link
                  to="/services/inspection-certification"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.92rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ce-green-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  <ArrowRight size={13} color="var(--ce-green-light)" />
                  <span>Inspection & Certification</span>
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link
                  to="/services/assessment-training"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.92rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ce-green-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  <ArrowRight size={13} color="var(--ce-green-light)" />
                  <span>Assessment & Training</span>
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link
                  to="/services/instrumentation"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.92rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ce-green-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  <ArrowRight size={13} color="var(--ce-green-light)" />
                  <span>Instrumentation</span>
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link
                  to="/approvals"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.92rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ce-green-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  <ArrowRight size={13} color="var(--ce-green-light)" />
                  <span>Approvals & Credentials</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h4
              style={{
                color: 'var(--ce-white)',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.65rem',
              }}
            >
              Contact Office
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '36px',
                  height: '2px',
                  backgroundColor: 'var(--ce-green-light)',
                }}
              />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="var(--ce-green-light)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{contactData.address.full}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Phone size={18} color="var(--ce-green-light)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  {contactData.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s+/g, '')}`}
                      style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="var(--ce-green-light)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${contactData.email}`} style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Statement */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.825rem',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {contactData.companyName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Commercial License #{contactData.licenseNo}</span>
            <span>Dubai, UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
