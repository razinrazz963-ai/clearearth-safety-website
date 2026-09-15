// Approvals and official documentation records
// Sourced strictly from verified company legal filings and certificates

import licenseImg from '../assets/images/approvals/commercial-license.png';
import nocImg from '../assets/images/approvals/eiac-approval.png';

export interface OfficialDocument {
  id: string;
  title: string;
  documentType: 'License' | 'NOC' | 'Registration';
  issuingAuthority: string;
  documentNumber?: string;
  scope: string;
  previewImage: string;
  downloadUrl?: string;
  verifiedDetails: {
    label: string;
    value: string;
  }[];
  redactionNotice: string;
}

export const officialDocuments: OfficialDocument[] = [
  {
    id: 'commercial-license',
    title: 'Commercial License (DET Dubai)',
    documentType: 'License',
    issuingAuthority: 'Department of Economy and Tourism (DET), Government of Dubai',
    documentNumber: '1639056',
    scope: 'Occupational Safety Consultancy',
    previewImage: licenseImg,
    downloadUrl: '/documents/clear-earth-commercial-license.png',
    verifiedDetails: [
      { label: 'Entity Legal Name', value: 'CLEAREARTH SAFETY CONSULTANCY L.L.C' },
      { label: 'Arabic Name', value: 'واضح أرض شركة استشارات السلامة ذ.م.م' },
      { label: 'Commercial License No.', value: '1639056' },
      { label: 'Licensed Activity', value: 'Occupational Safety Consultancy' },
      { label: 'Jurisdiction', value: 'Dubai, United Arab Emirates' },
    ],
    redactionNotice: 'Public verification copy. Sensitive personal identification numbers and personal addresses have been redacted for security.',
  },
  {
    id: 'eiac-noc-classification',
    title: 'Inspection Entity Classification NOC',
    documentType: 'NOC',
    issuingAuthority: 'Emirates International Accreditation Centre (EIAC)',
    scope: 'Inspection Entity Classification & Occupational Safety Consultancy',
    previewImage: nocImg,
    downloadUrl: '/documents/clear-earth-eiac-noc.pdf',
    verifiedDetails: [
      { label: 'Entity Legal Name', value: 'CLEAREARTH SAFETY CONSULTANCY L.L.C' },
      { label: 'Document Type', value: 'No Objection Certificate (NOC) / Entity Classification' },
      { label: 'Official Field', value: 'Occupational Safety & Health Consultancy / Inspection Classification' },
      { label: 'Jurisdiction', value: 'Emirate of Dubai, UAE' },
    ],
    redactionNotice: 'Official regulatory document. Direct business credentials and classification details verified.',
  },
];
