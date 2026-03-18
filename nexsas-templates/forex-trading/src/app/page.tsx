import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Clients from '@/components/home/Clients';
import Contact from '@/components/home/Contact';
import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Services from '@/components/home/Services';
import Steps from '@/components/home/Steps';
import Reviews from '@/components/home/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Forex Trading - NextSaaS',
};

const page = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Steps />
      <Feature />
      <About />
      <Services />
      <Pricing />
      <Reviews />
      <Blog />
      <Contact />
      <CTA />
    </main>
  );
};

export default page;
