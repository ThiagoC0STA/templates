import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ServicesV2 from '@/components/home/ServicesV2';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Decentralized Finance - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />
      <Services />
      <ServicesV2 />
      <Features />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
