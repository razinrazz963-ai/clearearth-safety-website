import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, MapPin, ShieldCheck, Award, Gauge } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { navigationItems } from '../../data/navigation';
import { contactData } from '../../data/contact';
import { Logo } from '../common/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [servicesExpanded, setServicesExpanded] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(11, 25, 44, 0.6)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Drawer */}
      <div
        className="animate-slide-down"
        style={{
          position: 'relative',
          width: '88%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: 'var(--ce-white)',
          boxShadow: 'var(--ce-shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          zIndex: 210,
        }}
      >
        {/* Header with Logo & Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1rem',
            borderBottom: '1px solid var(--ce-border)',
            backgroundColor: 'var(--ce-white)',
          }}
        >
          <Logo variant="compact" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              padding: '0.5rem',
              color: 'var(--ce-navy-primary)',
              borderRadius: 'var(--ce-radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div style={{ padding: '1rem', flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <li key={item.label} style={{ marginBottom: '0.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--ce-radius-sm)',
                        backgroundColor: 'var(--ce-navy-subtle)',
                        fontWeight: 700,
                        color: 'var(--ce-navy-primary)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        style={{ color: 'inherit', flex: 1 }}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: servicesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </div>

                    {servicesExpanded && (
                      <ul
                        style={{
                          listStyle: 'none',
                          paddingLeft: '0.75rem',
                          marginTop: '0.35rem',
                        }}
                      >
                        {item.dropdownItems.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <li key={sub.path} style={{ marginBottom: '0.25rem' }}>
                              <Link
                                to={sub.path}
                                onClick={onClose}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.65rem',
                                  padding: '0.65rem 0.85rem',
                                  borderRadius: 'var(--ce-radius-sm)',
                                  fontSize: '0.9rem',
                                  fontWeight: isSubActive ? 700 : 500,
                                  color: isSubActive ? 'var(--ce-green-primary)' : 'var(--ce-text-main)',
                                  backgroundColor: isSubActive ? 'var(--ce-green-subtle)' : 'transparent',
                                }}
                              >
                                {sub.path.includes('inspection') && <ShieldCheck size={16} />}
                                {sub.path.includes('training') && <Award size={16} />}
                                {sub.path.includes('instrumentation') && <Gauge size={16} />}
                                <span>{sub.label}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--ce-radius-sm)',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--ce-green-primary)' : 'var(--ce-navy-primary)',
                      backgroundColor: isActive ? 'var(--ce-green-subtle)' : 'transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick Contact Box */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.25rem',
              backgroundColor: 'var(--ce-bg-alt)',
              borderRadius: 'var(--ce-radius-md)',
              border: '1px solid var(--ce-border)',
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--ce-green-primary)',
                marginBottom: '0.85rem',
              }}
            >
              Direct Contacts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <a
                href={`tel:${contactData.primaryPhone.replace(/\s+/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ce-text-main)' }}
              >
                <Phone size={15} color="var(--ce-green-primary)" />
                <span>{contactData.primaryPhone}</span>
              </a>
              <a
                href={`mailto:${contactData.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ce-text-main)' }}
              >
                <Mail size={15} color="var(--ce-green-primary)" />
                <span>{contactData.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ce-text-secondary)' }}>
                <MapPin size={15} color="var(--ce-green-primary)" />
                <span>{contactData.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp & Call Action Buttons */}
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid var(--ce-border)',
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <a
            href={`https://wa.me/${contactData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: 'var(--ce-radius-md)',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.88rem',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
            }}
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${contactData.primaryPhone.replace(/\s+/g, '')}`}
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: 'var(--ce-radius-md)',
              backgroundColor: 'var(--ce-green-primary)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.88rem',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};
