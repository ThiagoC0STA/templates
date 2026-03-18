import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Steps from '@/components/home/Steps';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mobile Management Software - NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Steps />
      <Feature />
      <FeatureV2 />
      <Services />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
