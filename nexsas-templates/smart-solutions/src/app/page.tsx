import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Clients from '@/components/home/Clients';
import DownloadApp from '@/components/home/DownloadApp';
import GetStarted from '@/components/home/GetStarted';
import Hero from '@/components/home/Hero';
import MeetOurTeam from '@/components/home/MeetOurTeam';
import Solutions from '@/components/home/Solutions';
import Steps from '@/components/home/Steps';
import Tools from '@/components/home/Tools';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Smart Solutions - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <MeetOurTeam />
      <Solutions />
      <Clients />
      <Tools />
      <GetStarted />
      <DownloadApp />
      <Steps />
      <Blog />
      <CTA />
    </main>
  );
};

export default page;
