import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { Button } from '../common/Button';
import { contactData } from '../../data/contact';

export const ContactForm: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Inspection & Certification',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Read URL query parameter ?service=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      // Map to closest matching service option if possible
      let matched = serviceParam;
      if (serviceParam.toLowerCase().includes('inspect') || serviceParam.toLowerCase().includes('lifting')) {
        matched = 'Inspection & Certification';
      } else if (serviceParam.toLowerCase().includes('train') || serviceParam.toLowerCase().includes('assessment')) {
        matched = 'Assessment & Training';
      } else if (serviceParam.toLowerCase().includes('instrument') || serviceParam.toLowerCase().includes('gauge')) {
        matched = 'Instrumentation';
      }

      setFormData((prev) => ({
        ...prev,
        service: matched,
      }));
    }
  }, [location.search]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in your name, email, and phone number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    const messageLines = [
      `Hello ClearEarth Safety,`,
      `My Name: ${formData.name}`,
      `Company: ${formData.company.trim() ? formData.company.trim() : 'N/A'}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service Interested In: ${formData.service}`,
    ];

    if (formData.message && formData.message.trim()) {
      messageLines.push(`Message: ${formData.message.trim()}`);
    }

    const whatsappMessage = encodeURIComponent(messageLines.join('\n'));

    return (
      <div
        className="ce-card animate-scale-in"
        style={{
          padding: '3.5rem 2.5rem',
          backgroundColor: 'var(--ce-white)',
          textAlign: 'center',
          border: '2px solid var(--ce-green-light)',
          borderRadius: 'var(--ce-radius-lg)',
          boxShadow: 'var(--ce-shadow-lg)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--ce-green-subtle)',
            color: 'var(--ce-green-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.65rem', color: 'var(--ce-navy-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>
          Enquiry Prepared
        </h3>
        <p
          style={{
            color: 'var(--ce-text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '460px',
            margin: '0 auto 2rem auto',
          }}
        >
          Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.service}</strong> has been structured. You can also send this directly to our team on WhatsApp for immediate priority response.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <a
            href={`https://wa.me/${contactData.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              padding: '0.85rem 1.75rem',
              borderRadius: 'var(--ce-radius-md)',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
            }}
          >
            <WhatsAppIcon size={22} color="#FFFFFF" />
            <span>Send Direct via WhatsApp (+971 52 484 8216)</span>
          </a>

          <Button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                service: 'Inspection & Certification',
                message: '',
              });
            }}
            variant="outline"
            size="sm"
          >
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--ce-radius-sm)',
    border: '1.5px solid var(--ce-border)',
    fontSize: '0.95rem',
    color: 'var(--ce-text-main)',
    backgroundColor: 'var(--ce-white)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--ce-navy-primary)',
    marginBottom: '0.45rem',
  };

  return (
    <div
      className="ce-card"
      style={{
        padding: '2.5rem',
        backgroundColor: 'var(--ce-white)',
        borderRadius: 'var(--ce-radius-lg)',
        boxShadow: 'var(--ce-shadow-md)',
      }}
    >
      <h3 style={{ fontSize: '1.6rem', color: 'var(--ce-navy-primary)', marginBottom: '0.5rem', fontWeight: 800 }}>
        Send Us an Enquiry
      </h3>
      <p style={{ fontSize: '0.925rem', color: 'var(--ce-text-secondary)', marginBottom: '2rem' }}>
        Fill in your contact details and service requirements below. Our technical team will reach out promptly.
      </p>

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            borderRadius: 'var(--ce-radius-sm)',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
          }}
        >
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label htmlFor="name" style={labelStyle}>
              Name <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
            />
          </div>

          <div>
            <label htmlFor="company" style={labelStyle}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company / Organization Name"
              value={formData.company}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
            />
          </div>

          <div>
            <label htmlFor="phone" style={labelStyle}>
              Phone <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+971 50 000 0000"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" style={labelStyle}>
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
          >
            <option value="Inspection & Certification">Inspection & Certification</option>
            <option value="Assessment & Training">Assessment & Training</option>
            <option value="Instrumentation">Instrumentation</option>
            <option value="General Enquiry">General Enquiry</option>
            {formData.service &&
              !['Inspection & Certification', 'Assessment & Training', 'Instrumentation', 'General Enquiry'].includes(
                formData.service
              ) && <option value={formData.service}>{formData.service}</option>}
          </select>
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Provide equipment types, project location, training courses, or technical specifications..."
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--ce-green-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--ce-border)')}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />}>
          Send Enquiry
        </Button>
      </form>
    </div>
  );
};
