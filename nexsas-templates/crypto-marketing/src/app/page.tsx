import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import OurServices from '@/components/home/OurServices';
import Testimonial from '@/components/home/Testimonial';
import TimelineIntegration from '@/components/home/TimelineIntegration';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Crypto Marketing || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <About />
      <HowItWorks />
      <OurServices />
      <Faq />
      <TimelineIntegration />
      <Testimonial />
      <Blog />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        btnClass="hover:btn-secondary dark:hover:btn-white"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
