import Clients from '@/components/home/Clients';
import Contact from '@/components/home/Contact';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Invitation from '@/components/home/Invitation';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import WhyUs from '@/components/home/WhyUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Insurance || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Clients />
      <Invitation />
      <Services />
      <WhyUs />
      <Features />
      <Testimonial />
      <FAQ />
      <Contact />
      <CTA />
    </main>
  );
};

export default page;
