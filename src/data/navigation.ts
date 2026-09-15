// Navigation structure for ClearEarth Safety Consultancy LLC

export interface NavDropdownItem {
  label: string;
  path: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Approvals',
    path: '/approvals',
  },
  {
    label: 'Services',
    path: '/services',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Inspection & Certification',
        path: '/services/inspection-certification',
        description: 'On-shore and off-shore equipment inspection & certification.',
      },
      {
        label: 'Assessment & Training',
        path: '/services/assessment-training',
        description: 'Comprehensive occupational safety and equipment operator programs.',
      },
      {
        label: 'Instrumentation',
        path: '/services/instrumentation',
        description: 'Gauges, meters, surveying, and technical testing instruments.',
      },
    ],
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];
