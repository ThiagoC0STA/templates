import CTA from '@/components/home/CTA';
import CustomerFeedback from '@/components/home/CustomerFeedback';
import Faq from '@/components/home/Faq';
import Features from '@/components/home/Features';
import FeaturesHighlight from '@/components/home/FeaturesHighlight';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Process from '@/components/home/Process';
import Reviews from '@/components/home/Reviews';
import OurAchievements from '@/components/shared/OurAchievements';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home - Email Marketing || NextSaaS',
};

const HomePage11 = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <CustomerFeedback />
      <FeaturesHighlight />
      <Features />
      <Process />
      <section className="py-16 max-xl:px-5 md:py-[120px]">
        <div className="main-container">
          <OurAchievements achievements={projectAchievements} instant={false} />
        </div>
      </section>
      <Pricing />
      <Reviews />
      <Faq />
      <CTA />
    </main>
  );
};

export default HomePage11;
