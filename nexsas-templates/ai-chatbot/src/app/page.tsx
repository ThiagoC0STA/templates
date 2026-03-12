import CTA from '@/components/home/Cta';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Testimonial from '@/components/home/Testimonial';
import Understanding from '@/components/home/Understanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Chatbot || NextSaaS',
  description: 'Homepage of NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 shadow-7">
      <Hero />
      <Features />
      <FeaturesV2 />
      <Pricing />
      <Integration />
      <Understanding />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
