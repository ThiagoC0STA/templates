import ProcessTestimonial from '@/src/components/process/process-testimonial';
import ProcessWork from '@/src/components/process/process-work';
import CTA from '@/src/components/shared/cta';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Process - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <ProcessWork />
      <ProcessTestimonial />
      <CTA />
    </>
  );
};

export default page;
