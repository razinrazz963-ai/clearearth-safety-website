import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 14px rgba(15, 39, 68, 0.08)',
          borderBottom: '1px solid rgba(15, 39, 68, 0.08)',
          width: '100%',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            paddingBottom: '0.85rem',
            minHeight: '84px',
          }}
        >
          {/* Prominent Large ClearEarth Logo (200-240px width desktop, 150-180px mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation Links (Clean, Centered, No duplicate green Contact button) */}
          <div className="desktop-nav-wrap" style={{ display: 'flex', alignItems: 'center' }}>
            <Navbar />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            style={{
              display: 'none',
              padding: '0.65rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--ce-navy-primary)',
              borderRadius: 'var(--ce-radius-sm)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-wrap {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
