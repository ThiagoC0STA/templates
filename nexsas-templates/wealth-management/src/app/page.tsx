import Accessibility from '@/components/home/Accessibility';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import WhyUs from '@/components/home/WhyUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Wealth Management - NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Statistics />
      <WhyUs />
      <Services />
      <Accessibility />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </main>
  );
};

export default page;
