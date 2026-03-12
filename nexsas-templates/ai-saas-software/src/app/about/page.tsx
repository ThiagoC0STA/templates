import Hero from '@/src/components/about/hero';
import OurMission from '@/src/components/about/our-mission';
import { Clients } from '@/src/components/home/clients';
import Integration from '@/src/components/home/integration';
import Team from '@/src/components/home/team';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'About us - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <>
      <Hero />
      <Clients />
      <OurMission />
      <Team />
      <Integration />
      <CTA />
    </>
  );
};

export default page;
