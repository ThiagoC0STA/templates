import FeatureList from '@/components/features/FeatureList';
import FeatureCard from '@/components/features/Features';
import FeaturesV2 from '@/components/features/FeaturesV2';
import Team from '@/components/features/Team';
import CTAV1 from '@/components/shared/cta/CTAV1';
import ReviewsV2 from '@/components/shared/reviews/ReviewsV2';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features - Messaging Platform || NextSaaS',
};

const Features = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureCard />
      <Team />
      <FeatureList
        className="pt-[100px]"
        btnClassName="btn-accent dark:btn-dark hover:btn-primary border-0 btn-md btn"
      />
      <FeaturesV2 />
      <ReviewsV2 badgeColor="badge-cyan" sectionSpacingClass="space-y-[70px] py-14 md:py-20 xl:py-[100px]" />
      <CTAV1
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

export default Features;
