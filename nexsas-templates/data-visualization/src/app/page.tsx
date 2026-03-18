import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import FeatureV3 from '@/components/home/FeatureV3';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import NewsLetter from '@/components/home/NewsLetter';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';
import Reviews from '@/components/home/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Data Visualization Software - NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-6 bg-white">
      <Hero />
      <Services />
      <Highlights />
      <Feature />
      <FeatureV2 />
      <Process />
      <FeatureV3 />
      <Reviews />
      <CTA />
      <Blog />
      <NewsLetter />
    </main>
  );
};

export default page;
