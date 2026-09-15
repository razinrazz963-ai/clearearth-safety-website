import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ApprovalsPreview } from '../components/home/ApprovalsPreview';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Hero Image Slider */}
      <Hero />

      {/* 2. Introduction / About Preview */}
      <AboutPreview />

      {/* 3. Main Services Preview (3 Pillars) */}
      <ServicesPreview />

      {/* 4. Why Choose ClearEarth */}
      <WhyChooseUs />

      {/* 5. Approvals & Credentials Preview */}
      <ApprovalsPreview />

      {/* 6. Contact CTA Banner */}
      <ContactCTA />
    </main>
  );
};
