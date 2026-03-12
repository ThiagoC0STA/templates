import WorkFlow from '@/src/components/features/work-flow';
import { CoreFeatures } from '@/src/components/home/core-features';
import Testimonial from '@/src/components/home/testimonial';
import CTA from '@/src/components/shared/cta';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <CoreFeatures btnClass="hidden" />
      <WorkFlow />
      <Testimonial />
      <CTA />
    </>
  );
};

export default page;
