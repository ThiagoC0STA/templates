import ContactUs from '@/components/home/ContactUs';
import CTA from '@/components/home/CTA';
import Eligibility from '@/components/home/Eligibility';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Solutions from '@/components/home/Solutions';
import Steps from '@/components/home/Steps';
import WhyChooseNextSaas from '@/components/home/WhyChooseNextSaas';
import Reviews from '@/components/shared/reviews/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mortgage Services - NextSaaS',
};
const HomePage14 = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Solutions />
      <WhyChooseNextSaas />
      <Steps />
      <Feature />
      <Eligibility />
      <Reviews
        title="What our clients say."
        description="Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership."
      />
      <ContactUs />
      <CTA />
    </main>
  );
};

export default HomePage14;
