import Pricing from '@/src/components/home/pricing';
import PricingTestimonial from '@/src/components/pricing/testimonial';
import CTA from '@/src/components/shared/cta';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <Pricing className="pt-28 md:pt-32 lg:pt-36 xl:pt-44 2xl:pt-48" />
      <PricingTestimonial />
      <CTA />
    </>
  );
};

export default page;
