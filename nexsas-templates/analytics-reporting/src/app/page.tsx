import Blog from '@/components/home/Blog';
import Faq from '@/components/home/Faq';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Number from '@/components/home/Number';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics & Reporting - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Feature />
      <Services />
      <Process />
      <Faq />
      <Integration />
      <Number />
      <Team />
      <CTA
        className="dark:bg-background-6 bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
        ctaHeading=" Build a complete software using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
      />
      <Blog />
    </main>
  );
};

export default page;
