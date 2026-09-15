// Single source of truth for company and contact information
// Sourced strictly from official ClearEarth documents and business cards

export interface ContactInfo {
  companyName: string;
  companyNameArabic: string;
  licenseNo: string;
  activity: string;
  technicalManager: {
    name: string;
    title: string;
  };
  phones: string[];
  primaryPhone: string;
  whatsapp: string;
  email: string;
  address: {
    area: string;
    city: string;
    country: string;
    full: string;
  };
  mapEmbedUrl: string;
}

export const contactData: ContactInfo = {
  companyName: 'ClearEarth Safety Consultancy LLC',
  companyNameArabic: 'واضح أرض شركة استشارات السلامة ذ.م.م',
  licenseNo: '1639056',
  activity: 'Occupational Safety Consultancy',
  technicalManager: {
    name: 'Rodel Lausin Acula',
    title: 'Technical Manager / Mechanical Engineer',
  },
  phones: ['+971 52 484 8216', '+971 54 1539 115'],
  primaryPhone: '+971 52 484 8216',
  whatsapp: '971524848216',
  email: 'clearearthsafety@gmail.com',
  address: {
    area: 'Al Satwa',
    city: 'Dubai',
    country: 'United Arab Emirates',
    full: 'Al Satwa, Dubai, United Arab Emirates',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14438.455088713098!2d55.26388439999999!3d25.2162383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e4ee6e9929%3A0xe54b9d0dc4152778!2sAl%20Satwa%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
};
