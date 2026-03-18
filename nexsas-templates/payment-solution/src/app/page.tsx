import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import FinanceIntro from '@/components/home/FinanceIntro';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import TrustedByUsers from '@/components/home/TrustedByUsers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Payment Solution || NextSaaS',
};

const Homepage07 = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Hero />
      <TrustedByUsers />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FinanceIntro />
      <Integration />
      <Blog />
      <CTA />
    </main>
  );
};

export default Homepage07;
