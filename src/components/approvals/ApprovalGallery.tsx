import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ApprovalCard } from './ApprovalCard';
import { DocumentViewer } from './DocumentViewer';
import { officialDocuments } from '../../data/approvals';
import type { OfficialDocument } from '../../data/approvals';

export const ApprovalGallery: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<OfficialDocument | null>(null);

  return (
    <div>
      <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
        <Container>
          <SectionTitle
            badge="Official Credentials"
            badgeVariant="green"
            title="Approvals, Licensing & Compliance Documents"
            subtitle="Verified official documents confirming our registration, classification, and licensed operational scope in Dubai, United Arab Emirates."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {officialDocuments.map((doc) => (
              <ApprovalCard
                key={doc.id}
                document={doc}
                onView={(document) => setSelectedDoc(document)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Full-Screen Document Viewer Modal */}
      <DocumentViewer doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
};
