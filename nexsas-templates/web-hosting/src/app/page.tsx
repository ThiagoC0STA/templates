import Blogs from '@/components/home/Blogs';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Process from '@/components/home/Process';
import Reviews from '@/components/home/Reviews';
import SearchCta from '@/components/home/SearchCta';
import Services from '@/components/home/Services';
import Solutions from '@/components/home/Solutions';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Web Hosting - NextSaaS',
  description: 'Web Hosting of NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <Hero />
      <SearchCta />
      <Solutions />
      <Services />
      <Pricing />
      <Reviews />
      <Process />
      <Blogs />
    </main>
  );
};

export default page;
