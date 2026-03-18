import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import SuccessStats from '@/components/home/SuccessStats';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/shared/cta/CTA';
import Reviews from '@/components/home/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Time Tracking Software - NextSaaS',
};

const Homepage31 = () => {
  return (
    <main className="bg-background-2 dark:bg-background-6">
      <Hero />
      <Features />
      <SuccessStats />
      <WhyUs />
      <FeaturesV2 />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Get started"
        badgeClass="!badge-green"
        ctaHeading="Start tracking smarter today"
        description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
        descriptionClass="text-secondary/60"
        btnClass="btn-green hover:btn-white-dark"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Homepage31;
