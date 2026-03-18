import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'services', label: 'Services', href: './services' },
      { id: 'team', label: 'Our Team', href: './team' },
      { id: 'career', label: 'Career', href: './career' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: './why-choose-us' },
      { id: 'success-stories', label: 'Success Stories', href: './success-stories' },
      { id: 'customers', label: 'Customers', href: './customer' },
      { id: 'testimonials', label: 'Testimonials', href: './testimonial' },
      { id: 'contact-us', label: 'Contact Us', href: './contact-us' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'features', label: 'Features', href: './features' },
      { id: 'integrations', label: 'Integrations', href: './integration' },
      { id: 'process', label: 'Process', href: './process' },
      { id: 'analytics', label: 'Analytics', href: './analytics' },
      { id: 'security', label: 'Security', href: './security' },
      { id: 'press', label: 'Press', href: './press' },
      { id: 'whitepaper', label: 'Whitepaper', href: './whitepaper' },
      { id: 'build-overview', label: 'Build overview', href: './signup' },
      { id: 'download', label: 'Download', href: './download' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Tutorial', href: './tutorial' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'glossary', label: 'Glossary', href: './glossary' },
      { id: 'changelog', label: 'Changelog', href: './changelog' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Plans & Support',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: './pricing' },
      { id: 'login', label: 'Login', href: './login' },
      { id: 'create-account', label: 'Create Account', href: './signup' },
      { id: 'referral-program', label: 'Referral Program', href: './referral-program' },
      { id: 'affiliate', label: 'Affiliate', href: './affiliates' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: './refund-policy' },
      { id: 'gdpr', label: 'GDPR', href: './gdpr' },
      { id: 'legal', label: 'Legal', href: './legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '#' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '#' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '#' },
    ],
  },
];
