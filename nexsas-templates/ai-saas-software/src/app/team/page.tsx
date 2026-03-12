import CTA from '@/src/components/shared/cta';
import CoreValue from '@/src/components/team/core-value';
import OurTeam from '@/src/components/team/our-team';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <OurTeam />
      <CoreValue />
      <CTA />
    </>
  );
};

export default page;
