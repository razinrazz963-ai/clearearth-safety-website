// Hero configuration for ClearEarth Safety Consultancy LLC
import heroDubai from '../assets/images/hero/home-hero-dubai.jpg';

export interface HeroConfig {
  image: string;
  headline: string;
  supportingText: string;
  primaryCtaText: string;
  primaryCtaPath: string;
  secondaryCtaText: string;
  secondaryCtaPath: string;
}

export const heroConfig: HeroConfig = {
  image: heroDubai,
  headline: 'Build a Safer, Smarter Future',
  supportingText:
    'ClearEarth Safety Consultancy LLC provides accredited third-party engineering inspection, certified workforce safety training, and precision instrumentation testing across Dubai and the United Arab Emirates.',
  primaryCtaText: 'Explore Our Services',
  primaryCtaPath: '/services',
  secondaryCtaText: 'Contact Us',
  secondaryCtaPath: '/contact',
};
