import Feature1 from '@public/images/ns-img-213.svg';
import Feature2 from '@public/images/ns-img-214.svg';
import Feature3 from '@public/images/ns-img-215.svg';
import Feature4 from '@public/images/ns-img-216.png';
import Gradient6 from '@public/images/ns-img-498.png';
import Feature1Dark from '@public/images/ns-img-dark-144.svg';
import Feature2Dark from '@public/images/ns-img-dark-145.svg';
import Feature3Dark from '@public/images/ns-img-dark-146.svg';
import Feature4Dark from '@public/images/ns-img-dark-147.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

type StaticImageData = typeof Feature1;

interface Feature {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  imageDark: StaticImageData | string;
}

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Keep all data protected',
    description: 'End-to-end encrypted & centrally managed',
    image: Feature1,
    imageDark: Feature1Dark,
  },
  {
    id: '2',
    title: 'Multi-device support',
    description: 'Manage tablets, phones & rugged devices',
    image: Feature2,
    imageDark: Feature2Dark,
  },
  {
    id: '3',
    title: 'Team collaboration',
    description: 'Shared dashboards & role-based access',
    image: Feature3,
    imageDark: Feature3Dark,
  },
  {
    id: '4',
    title: 'Seamless sync & backup',
    description: 'Continuous performance, zero disruptions',
    image: Feature4,
    imageDark: Feature4Dark,
  },
];

const FeatureV2 = () => {
  return (
    <section
      className="bg-background-2 dark:bg-background-5 relative py-16 md:py-20 lg:py-[100px] xl:py-[200px]"
      aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-6 sm:gap-5 md:gap-8">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-8">
              <div className="dark:bg-background-8 relative min-h-[250px] overflow-hidden rounded-[20px] bg-white px-5 py-5 md:min-h-[340px] md:px-8 md:py-8 lg:min-h-[408px] lg:px-14 lg:py-[42px]">
                <RevealAnimation delay={0.2} direction="up" start="top 50%" offset={200}>
                  <figure className="pointer-events-none absolute -top-[50%] -right-[78%] -z-0 h-full max-h-[408px] w-full max-w-[400px] -rotate-[255deg] opacity-70 select-none md:-right-[39%] lg:-right-[25%] xl:-right-[30%]">
                    <Image src={Gradient6} alt="gradient" />
                  </figure>
                </RevealAnimation>
                <div className="space-y-5 md:space-y-8 lg:space-y-14">
                  <div className="space-y-3">
                    <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5 w-full max-w-[503px]">
                      Supercharge your app management
                    </h3>
                    <p className="w-full max-w-[592px]">
                      Modern tools make managing your money simpler than ever. From clear, customizable budgets to smart
                      savings goals
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md mx-auto w-[85%] md:mx-0 md:w-auto">
                      Try the app for Free
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {featuresData.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.2 + index * 0.1}>
              <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-5 md:p-8 lg:min-h-[408px]">
                  <div className="space-y-1">
                    <h3 className="md:text-heading-5 text-heading-6">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <figure className="w-full max-w-full overflow-hidden rounded-2xl xl:max-w-[344px]">
                    <Image src={feature.image as string} alt="feature" className="size-full dark:hidden" />
                    <Image src={feature.imageDark as string} alt="feature" className="hidden size-full dark:block" />
                  </figure>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
