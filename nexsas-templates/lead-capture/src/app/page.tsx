import Benefits from '@/components/home/Benefits';
import FAQ from '@/components/home/FAQ';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import FeatureV3 from '@/components/home/FeatureV3';
import Hero from '@/components/home/Hero';
import Testimonial from '@/components/home/Testimonial';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lead Capture || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <Hero />
      <Feature />
      <FeatureV2 />
      <FeatureV3 />
      <WhyUs />
      <Benefits />
      <Testimonial />
      <FAQ />
      <CTA
        className="bg-background-2 dark:bg-background-7"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Ready to capture more leads & convert faster"
        description="Drive more engagement. Improve deliverability. Automate your emails."
        descriptionClass="text-secondary/60"
        btnClass="hover:btn-secondary dark:hover:btn-white"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
