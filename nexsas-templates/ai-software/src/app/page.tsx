import About from '@/components/home/About';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Reviews from '@/components/home/Reviews';
import Work from '@/components/home/Work';
import VideoModal from '@/components/shared/VideoModal';
import { ModalProvider } from '@/context/ModalContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Software || NextSaaS',
};

const page = () => {
  return (
    <ModalProvider>
      <main>
        <Hero />
        <About />
        <Work />
        <Feature />
        <Pricing />
        <Integration />
        <Reviews />
        <VideoModal />
      </main>
    </ModalProvider>
  );
};
export default page;
