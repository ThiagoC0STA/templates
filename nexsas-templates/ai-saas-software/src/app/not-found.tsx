import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import { Metadata } from 'next';
import { defaultMetadata } from '../utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - AI SaaS Software || Nexsas',
};

const page = () => {
  return (
    <section className="pt-28 pb-39 md:pt-36 lg:pt-44">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative w-full overflow-hidden rounded-2xl bg-[url('/images/opai-img-138.jpg')] bg-cover bg-center bg-no-repeat p-8">
            <div className="flex flex-col items-center gap-14 rounded-xl bg-white/30 px-8 py-20 backdrop-blur-[60px] md:gap-16 md:px-20 md:py-28 lg:px-39 lg:py-39">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="font-sora text-background-13/90 text-[100px] leading-[1.2] font-normal md:text-[150px] lg:text-[175px] xl:text-[200px]">
                  404
                </h2>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="font-sora text-sora-heading-4 text-background-13/90 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal">
                    Oops! Page
                    <br />
                    <span className="font-instrument-serif text-background-13/30 italic">
                      {' '}
                      Not Found
                    </span>
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 max-w-[378px] text-center">
                    The page does&apos;t exist or was moved. Don&apos;t worry, we&apos;ll guide you
                    back.
                  </p>
                </div>
              </div>
              <LinkPrimary href="/" className="inline-flex">
                Go back home
              </LinkPrimary>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default page;
