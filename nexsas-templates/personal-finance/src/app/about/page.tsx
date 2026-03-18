import FinanceIntro from '@/components/about/FinanceIntro';
import OurMission from '@/components/about/OurMission';
import Reviews from '@/components/about/Reviews';
import TrustedByUsers from '@/components/about/TrustedByUsers';
import VisionStatement from '@/components/about/VisionStatement';
import CTAV2 from '@/components/shared/cta/CTAV2';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About - Personal Finance || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <VisionStatement />
      <TrustedByUsers
        className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
        title="Grow together"
        description="We’re not just a software platform
        we’re a partner in your long-term success."
      />
      <OurMission />
      <FinanceIntro />
      <Reviews />
      <CTAV2
        ctaHeading="Experience a free trial today and watch your business grow."
        ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
        ctaBtnText="7- day free trial"
        ctaCheckListData={[
          {
            id: '1',
            text: 'No credit card required',
          },
          {
            id: '2',
            text: 'free for 30 day trial.',
          },
          {
            id: '3',
            text: 'Money back guarantee.',
          },
        ]}
      />
    </main>
  );
};

export default page;
