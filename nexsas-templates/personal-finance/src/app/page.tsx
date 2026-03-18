import About from '@/components/home/About';
import ContactUs from '@/components/home/ContactUs';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Team from '@/components/home/Team';
import Testimonial from '@/components/home/Testimonial';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Personal Finance - NextSaaS',
};
const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <About />
      <Features />
      <WhyChooseUs />
      <Testimonial
        badgeText="What our users say"
        title="Hear from our customers about their experiences with us"
        classname="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px]"
      />
      <Team />
      <Pricing
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]"
        containerClassName="bg-background-2 dark:bg-background-5 max-w-[1460px] mx-4 sm:mx-auto py-16 md:py-20 xl:py-[120px] lg:px-[64px] rounded-[20px]"
        badgeClassName="badge-green"
      />
      <ContactUs />
      <CTA />
    </main>
  );
};

export default page;
