import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import SelectUs from '@/components/home/SelectUs';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cyber Security - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Features />
      <SelectUs />
      <Services />
      <Integration />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
