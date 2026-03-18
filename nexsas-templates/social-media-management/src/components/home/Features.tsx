import { cn } from '@/utils/cn';
import selectUs from '@public/images/ns-img-246.png';
import selectUsDark from '@public/images/ns-img-dark-163.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featuresData = [
  {
    id: 1,
    icon: 'ns-shape-8',
    title: 'Ai-powered recommendations',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Seamless tenant communication',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Automated rent collection',
  },
  {
    id: 4,
    icon: 'ns-shape-21',
    title: 'Integrated hosting and application deployment',
  },
];

const Features = () => {
  return (
    <section className="dark:bg-background-5 bg-white py-[50px] md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mx-auto grid max-w-[720px] grid-cols-12 items-center gap-y-10 lg:mx-0 lg:max-w-full lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <RevealAnimation delay={0.2} offset={100}>
              <figure className="mx-auto w-full max-w-[450px] md:max-w-[550px] lg:max-w-[647px]">
                <Image src={selectUs} alt="reasons to select us" className="h-full w-full object-cover dark:hidden" />
                <Image
                  src={selectUsDark}
                  alt="reasons to select us"
                  className="hidden h-full w-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green">Reasons to select us</span>
                </RevealAnimation>

                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[420px] xl:max-w-full">
                      Why <span className="text-primary-500">thousands trust </span> us to build their apps
                    </h2>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {featuresData.map((feature, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} key={feature.id}>
                      <li className="flex items-center gap-4 py-2 xl:py-3">
                        <div>
                          <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                        </div>
                        <span className="text-tagline-1 text-secondary dark:text-accent font-medium">
                          {feature.title}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
