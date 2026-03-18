import Audit from '@/components/home/Audit';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Results from '@/components/home/Results';
import Services from '@/components/home/Services';
import Steps from '@/components/home/Steps';
import Testimonial from '@/components/home/Testimonial';
import WhyUs from '@/components/home/WhyUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Digital Marketing - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />
      <Services />
      <Steps />
      <WhyUs />
      <Results />
      <Testimonial />
      <Audit />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
