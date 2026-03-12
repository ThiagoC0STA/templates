import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Process from '@/components/home/Process';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home - Creative Portfolio || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
