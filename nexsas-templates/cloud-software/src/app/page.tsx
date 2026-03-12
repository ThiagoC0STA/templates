import ClientsMarquee from '@/components/home/ClientsMarquee';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Reviews from '@/components/home/Reviews';
import SelectUs from '@/components/home/SelectUs';
import Steps from '@/components/home/Steps';
import CTA from '@/components/shared/cta/CTA';
import OurAchievements from '@/components/shared/OurAchievements';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cloud based software || NextSaaS',
};
const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <ClientsMarquee />
      <Features />
      <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
        <div className="main-container">
          <OurAchievements achievements={projectAchievements} className="dark:bg-background-8" instant={true} />
        </div>
      </section>
      <SelectUs />
      <Pricing />
      <Steps />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-secondary py-[50px] md:py-20 lg:py-28"
        badgeClass="badge badge-blur"
        badgeText="Get started"
        ctaHeading="Ready to start earning with NextSaaS?"
        headingClass="text-accent text-heading-5 lg:text-heading-2"
        description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
        descriptionClass="text-accent/60 max-w-[534px] mx-auto xl:mx-0"
        ctaBtnText="Get started"
        inputFieldClass="px-[18px]  border-0 shadow-1 h-12 py-3 dark:text-accent placeholder:text-accent/40 rounded-full lg:max-w-[340px] md:w-[71%] w-[85%] dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-1 focus:outline-primary-600 dark:focus:outline-primary-400 bg-accent/5 text-accent font-normal placeholder:font-normal"
        btnClass="btn-primary h-12 w-[85%] max-[376px]:w-[97%%] md:w-[28%] lg:w-auto"
        checkListVariant="gray"
        listTextClass="text-tagline-2 text-accent dark:text-accent/60"
      />
    </main>
  );
};

export default page;
