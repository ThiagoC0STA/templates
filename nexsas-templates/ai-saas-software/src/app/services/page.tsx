import ServicesHero from '@/src/components/services/services-hero';
import ServicesShowcase from '@/src/components/services/services-showcase';
import WhyChoose from '@/src/components/services/why-choose';
import CTA from '@/src/components/shared/cta';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesShowcase />
      <WhyChoose />
      <CTA />
    </>
  );
};

export default page;
