import React from 'react';
import { ShieldCheck, Eye, Download } from 'lucide-react';
import type { OfficialDocument } from '../../data/approvals';
import { Button } from '../common/Button';

interface ApprovalCardProps {
  document: OfficialDocument;
  onView: (document: OfficialDocument) => void;
}

export const ApprovalCard: React.FC<ApprovalCardProps> = ({ document, onView }) => {
  return (
    <div
      className="ce-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: 'var(--ce-white)',
        border: '1px solid var(--ce-border)',
      }}
    >
      {/* Thumbnail Header */}
      <div
        style={{
          position: 'relative',
          height: '240px',
          backgroundColor: '#F8FAFC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          borderBottom: '1px solid var(--ce-border)',
          overflow: 'hidden',
        }}
      >
        <img
          src={document.previewImage}
          alt={document.title}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '4px',
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'var(--ce-navy-primary)',
            color: 'var(--ce-white)',
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--ce-radius-sm)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {document.documentType}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--ce-green-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '0.45rem',
          }}
        >
          <ShieldCheck size={14} /> Official Verified Filing
        </div>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--ce-navy-primary)', marginBottom: '0.35rem' }}>
          {document.title}
        </h3>

        <div style={{ fontSize: '0.85rem', color: 'var(--ce-text-muted)', marginBottom: '1rem' }}>
          {document.issuingAuthority}
        </div>

        <div
          style={{
            padding: '0.75rem',
            backgroundColor: 'var(--ce-bg-alt)',
            borderRadius: 'var(--ce-radius-sm)',
            marginBottom: '1.5rem',
            fontSize: '0.825rem',
            flex: 1,
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--ce-navy-primary)' }}>Scope: </span>
          <span style={{ color: 'var(--ce-text-secondary)' }}>{document.scope}</span>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button
            onClick={() => onView(document)}
            variant="primary"
            size="sm"
            style={{ flex: 1 }}
            icon={<Eye size={15} />}
          >
            View Document
          </Button>
          {document.downloadUrl && (
            <Button
              href={document.downloadUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<Download size={15} />}
              ariaLabel={`Download ${document.title}`}
            >
              PDF
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
