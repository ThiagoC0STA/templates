import CTA from '@/components/home/CTA';
import Clients from '@/components/home/Clients';
import Counter from '@/components/home/Counter';
import Faq from '@/components/home/Faq';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import FeaturesV3 from '@/components/home/FeaturesV3';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Teams from '@/components/home/Teams';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Online Banking - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Features />
      <FeaturesV2 />
      <FeaturesV3 />
      <Clients />
      <Teams />
      <Counter />
      <Pricing />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
