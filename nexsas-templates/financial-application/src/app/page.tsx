import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Financial Application - NextSaaS',
  description:
    'Discover NextSaaS, a comprehensive financial application designed to streamline your business finances, enhance productivity, and drive growth.',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 overflow-x-hidden bg-white">
      <Hero />
      <Services />
      <About />
      <Integration />
      <Faq />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
