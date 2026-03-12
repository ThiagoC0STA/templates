import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Process from '@/components/home/Process';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'App Development - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <WhatWeOffer />
      <Process />
      <WhyChooseUs />
      <Features />
      <Integration />
      <Pricing />
      <CTA />
    </main>
  );
};

export default page;
