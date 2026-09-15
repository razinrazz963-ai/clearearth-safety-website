import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Gauge } from 'lucide-react';
import { navigationItems } from '../../data/navigation';

interface ServiceDropdownProps {
  onSelect?: () => void;
}

export const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ onSelect }) => {
  const servicesItem = navigationItems.find((item) => item.path === '/services');
  if (!servicesItem || !servicesItem.dropdownItems) return null;

  const serviceIcons: Record<string, React.ReactNode> = {
    '/services/inspection-certification': <ShieldCheck size={20} color="var(--ce-green-primary)" />,
    '/services/assessment-training': <Award size={20} color="var(--ce-green-primary)" />,
    '/services/instrumentation': <Gauge size={20} color="var(--ce-green-primary)" />,
  };

  return (
    <div
      style={{
        width: '320px',
        backgroundColor: 'var(--ce-white)',
        borderRadius: 'var(--ce-radius-md)',
        boxShadow: 'var(--ce-shadow-xl)',
        border: '1px solid var(--ce-border)',
        padding: '0.65rem',
      }}
    >
      {servicesItem.dropdownItems.map((sub) => (
        <Link
          key={sub.path}
          to={sub.path}
          onClick={onSelect}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '0.75rem 0.85rem',
            borderRadius: 'var(--ce-radius-sm)',
            transition: 'background-color var(--ce-transition-fast)',
            color: 'var(--ce-navy-primary)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--ce-navy-subtle)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <div style={{ marginTop: '2px' }}>
            {serviceIcons[sub.path] || <ShieldCheck size={18} />}
          </div>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '2px' }}>
              {sub.label}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--ce-text-muted)', lineHeight: 1.35 }}>
              {sub.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
