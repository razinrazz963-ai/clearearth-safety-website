import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, Lock } from 'lucide-react';
import type { OfficialDocument } from '../../data/approvals';
import { Button } from '../common/Button';

interface DocumentViewerProps {
  doc: OfficialDocument | null;
  onClose: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ doc, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (doc) {
      window.addEventListener('keydown', handleKeyDown);
      window.document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflow = 'unset';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${doc.title}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(9, 24, 43, 0.85)',
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Modal Dialog Content */}
      <div
        className="animate-scale-in"
        style={{
          position: 'relative',
          zIndex: 260,
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          backgroundColor: 'var(--ce-white)',
          borderRadius: 'var(--ce-radius-lg)',
          boxShadow: 'var(--ce-shadow-xl)',
          border: '1px solid var(--ce-border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--ce-border)',
            backgroundColor: 'var(--ce-navy-primary)',
            color: 'var(--ce-white)',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--ce-green-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '2px',
              }}
            >
              <ShieldCheck size={14} /> Official Verified Document
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--ce-white)' }}>{doc.title}</h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close document viewer"
            style={{
              padding: '0.5rem',
              color: 'var(--ce-white)',
              borderRadius: 'var(--ce-radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '1.75rem',
            overflowY: 'auto',
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Document Preview Image */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: 'var(--ce-radius-md)',
              border: '1px solid var(--ce-border)',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--ce-shadow-sm)',
            }}
          >
            <img
              src={doc.previewImage}
              alt={doc.title}
              style={{
                maxWidth: '100%',
                maxHeight: '520px',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
          </div>

          {/* Verification Details Table */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--ce-navy-primary)',
                marginBottom: '1rem',
              }}
            >
              Official Registration Details
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
              <tbody>
                {doc.verifiedDetails.map((detail, index) => (
                  <tr
                    key={detail.label}
                    style={{
                      borderBottom: '1px solid var(--ce-border)',
                      backgroundColor: index % 2 === 0 ? 'var(--ce-bg-alt)' : 'var(--ce-white)',
                    }}
                  >
                    <td style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--ce-navy-primary)', width: '42%' }}>
                      {detail.label}
                    </td>
                    <td style={{ padding: '0.75rem', color: 'var(--ce-text-main)' }}>
                      {detail.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Privacy Redaction Notice */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--ce-navy-subtle)',
                borderRadius: 'var(--ce-radius-sm)',
                border: '1px solid var(--ce-border)',
                marginBottom: '1.75rem',
              }}
            >
              <Lock size={16} color="var(--ce-navy-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--ce-text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--ce-navy-primary)' }}>Data Privacy: </strong>
                {doc.redactionNotice}
              </div>
            </div>

            {/* Document Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {doc.downloadUrl && (
                <Button
                  href={doc.downloadUrl}
                  target="_blank"
                  variant="primary"
                  icon={<Download size={16} />}
                >
                  Download Verification Document
                </Button>
              )}
              <Button onClick={onClose} variant="outline">
                Close Viewer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
