import Features from '@/components/services/Features';
import Services from '@/components/services/Services';
import ServicesV2 from '@/components/services/ServicesV2';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services - Time Tracking Software || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Services />
      <ServicesV2 />
      <Features
        className="lg:pt-[200px] lg:pb-[100px]"
        badgeClassName="badge-green-v2"
        btnClassName="btn btn-xl dark:btn-transparent hover:btn-primary btn-white"
      />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
