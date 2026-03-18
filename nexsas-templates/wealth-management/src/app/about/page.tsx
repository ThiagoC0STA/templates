import AboutCTA from '@/components/about/CTA';
import OurMission from '@/components/about/OurMission';
import OurSuccess from '@/components/about/OurSuccess';
import Reviews from '@/components/about/Reviews';
import Team from '@/components/about/Team';
import VisionStatement from '@/components/about/VisionStatement';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About - Wealth Management || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <VisionStatement />
      <OurMission />
      <OurSuccess />
      <WhyChooseUs />
      <Team />
      <Reviews
        badgeText="Customer Success"
        buttonText="View all reviews"
        badgeColor="badge-cyan"
        title="Real people. Real results."
        description="“Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership.”"
      />
      <AboutCTA />
    </main>
  );
};

export default page;
