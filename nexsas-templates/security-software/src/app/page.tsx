import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import FeatureV3 from '@/components/home/FeatureV3';
import FeatureV4 from '@/components/home/FeatureV4';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Review from '@/components/home/Review';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Security software - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Testimonial />
      <Feature />
      <FeatureV2 />
      <FeatureV3 />
      <FeatureV4 />
      <Review />
      <Pricing />
      <Services />
      <CTA />
    </main>
  );
};

export default page;
