import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  enquirySubject?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  image,
  items,
  enquirySubject,
}) => {
  return (
    <div
      className="ce-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: 'var(--ce-white)',
        height: '100%',
      }}
    >
      {/* Card Header Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0.75rem 1rem',
            background: 'linear-gradient(to top, rgba(15, 39, 68, 0.9), transparent)',
          }}
        >
          <span style={{ color: 'var(--ce-green-light)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.3rem', color: 'var(--ce-navy-primary)', marginBottom: '0.65rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ce-text-secondary)', marginBottom: '1.25rem' }}>
          {description}
        </p>

        {/* Equipment Items List */}
        <div style={{ flex: 1, marginBottom: '1.5rem' }}>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--ce-navy-primary)',
              marginBottom: '0.65rem',
            }}
          >
            Equipment / Scope:
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {items.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                <Check size={15} color="var(--ce-green-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'var(--ce-text-main)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link */}
        <Link
          to={`/contact?service=${encodeURIComponent(enquirySubject || title)}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.7rem 1.25rem',
            backgroundColor: 'var(--ce-green-subtle)',
            color: 'var(--ce-green-primary)',
            borderRadius: 'var(--ce-radius-sm)',
            fontWeight: 600,
            fontSize: '0.9rem',
            border: '1px solid rgba(0, 107, 62, 0.2)',
            transition: 'all var(--ce-transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ce-green-primary)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ce-green-subtle)';
            e.currentTarget.style.color = 'var(--ce-green-primary)';
          }}
        >
          <span>Enquire for {title}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};
