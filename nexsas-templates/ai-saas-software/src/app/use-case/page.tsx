import CTA from '@/src/components/shared/cta';
import ServicesSection from '@/src/components/use-case/services-section';
import Showcase from '@/src/components/use-case/showcase';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Use Cases - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <Showcase />
      <ServicesSection />
      <CTA />
    </>
  );
};

export default page;
