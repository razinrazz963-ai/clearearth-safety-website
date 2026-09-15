import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { contactData } from '../../data/contact';

export const FloatingActions: React.FC = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (scrolledPastHero) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Floating WhatsApp Action */}
      <a
        href={`https://wa.me/${contactData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ClearEarth Safety on WhatsApp (+971 52 484 8216)"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(37, 211, 102, 0.45)',
          border: '2px solid #FFFFFF',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 22px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.45)';
        }}
      >
        <WhatsAppIcon size={30} color="#FFFFFF" />
      </a>

      {/* Move Down / Back to Top Action */}
      <button
        onClick={handleScrollAction}
        aria-label={scrolledPastHero ? 'Scroll back to top' : 'Scroll down to content'}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--ce-navy-primary)',
          color: 'var(--ce-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(15, 39, 68, 0.35)',
          border: '2px solid rgba(255, 255, 255, 0.85)',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ce-green-primary)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ce-navy-primary)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {scrolledPastHero ? <ArrowUp size={20} /> : <ChevronDown size={22} />}
      </button>
    </div>
  );
};
