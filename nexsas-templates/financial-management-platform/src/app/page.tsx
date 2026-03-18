import AutomationPlatform from '@/components/home/AutomationPlatform';
import Blog from '@/components/home/Blog';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import ImpressiveTemplates from '@/components/home/ImpressiveTemplates';
import Services from '@/components/home/Services';
import SimplifyFinance from '@/components/home/SimplifyFinance';
import Testimonial from '@/components/home/Testimonial';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Financial management platform || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <Services />
      <WhyChooseUs />
      <SimplifyFinance />
      <ImpressiveTemplates />
      <Testimonial />
      <AutomationPlatform />
      <Faq />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
