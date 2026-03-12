import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Result from '@/components/home/Result';
import Steps from '@/components/home/Steps';
import VoiceSamples from '@/components/home/VoiceSamples';
import VoiceStyle from '@/components/home/VoiceStyle';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Voice Generator - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <VoiceStyle />
      <VoiceSamples />
      <Features />
      <FeaturesV2 />
      <Steps />
      <Integration />
      <Result />
      <Pricing />
      <CTA />
    </main>
  );
};

export default page;
