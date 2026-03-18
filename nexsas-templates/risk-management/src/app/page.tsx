import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import FeatureV3 from '@/components/home/FeatureV3';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Risk Management Software || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <Hero />
      <Services />
      <Feature />
      <FeatureV2 />
      <FeatureV3 />
      <Testimonial />
      <Pricing />
      <CTA />
    </main>
  );
};

export default page;
