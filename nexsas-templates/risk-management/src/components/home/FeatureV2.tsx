import { cn } from '@/utils/cn';
import realTimeChart from '@public/images/ns-img-200.png';
import gradient6 from '@public/images/ns-img-498.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Cross-functional visibility',
    description: 'Connect risks across silos',
    icon: 'ns-shape-34',
  },
  {
    id: 2,
    title: 'Automation & workflows',
    description: 'Reduce manual work and errors',
    icon: 'ns-shape-36',
  },
  {
    id: 3,
    title: 'Customizable modules',
    description: 'Tailor solutions to your industry',
    icon: 'ns-shape-8',
  },
  {
    id: 4,
    title: 'Real-time data',
    description: 'See your app in action as you create it',
    icon: 'ns-shape-8',
  },
  {
    id: 5,
    title: 'Enterprise-grade security',
    description: 'Your data, protected and compliant',
    icon: 'ns-shape-41',
  },
  {
    id: 6,
    title: 'Smart insights',
    description: 'Actionable reports at a glance',
    icon: 'ns-shape-3',
  },
];

const FeatureV2 = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="dark:bg-background-8 relative space-y-[70px] overflow-hidden rounded-4xl bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-[42px] md:py-14">
          <RevealAnimation delay={0.3} direction="up" offset={100}>
            <figure className="pointer-events-none absolute -top-[15%] -right-[72%] max-h-[480px] max-w-[420px] rotate-[103deg] blur-[4px] select-none min-[470px]:-right-[60%] sm:-right-[40%] lg:-top-[30%] lg:-right-[24%] xl:-top-[27%] xl:-right-[21%]">
              <Image src={gradient6} className="h-full w-full object-cover" alt="NextSass" />
            </figure>
          </RevealAnimation>
          <div className="space-y-4 text-center sm:space-y-7 sm:text-left">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto w-full max-w-[350px] sm:mx-0 sm:max-w-[500px] lg:max-w-[731px]">
                Strategic risk management that moves you forward
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div>
                <LinkButton
                  href="/analytics"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto w-[90%] md:w-auto">
                  Learn our approach
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-y-8 min-[575px]:gap-8 md:gap-6 lg:gap-10 xl:gap-[60px]">
              <div className="order-1 col-span-12 min-[575px]:col-span-6 lg:order-1 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {data.slice(0, 3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="left" offset={100} key={item.id}>
                      <div className="space-y-4">
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
              <div className="order-3 col-span-12 lg:order-2 lg:col-span-6">
                <RevealAnimation delay={0.3} offset={100}>
                  <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-4 sm:p-6 xl:p-8">
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">Real-time data</h3>
                      <p>See your app in action as you create it</p>
                    </div>
                    <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-4">
                      <div className="bg-background-3 dark:bg-background-8 h-full flex-1 overflow-hidden rounded-2xl">
                        <div className="bg-ns-green flex items-center justify-between px-[25px] py-2">
                          <p className="text-tagline-2 text-secondary">Mon</p>
                          <p className="text-tagline-2">12</p>
                        </div>
                        <div className="px-4 py-2">
                          <div className="space-y-2 py-9">
                            <div className="bg-background-2 dark:bg-background-5 rounded-lg p-2">
                              <p className="text-tagline-2 text-secondary dark:text-accent">05:00</p>
                              <p className="text-tagline-2">Combo room</p>
                            </div>
                            <div className="dark:bg-background-7 rounded-lg p-2">
                              <p className="text-tagline-2 text-secondary dark:text-accent">09:00</p>
                              <p className="text-tagline-2">Combo room</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-background-3 dark:bg-background-8 h-full flex-1 overflow-hidden rounded-2xl">
                        <div className="p-4">
                          <p className="text-secondary dark:text-accent text-tagline-2">Customers</p>
                          <figure className="mx-auto mt-5 mb-4 w-full max-w-[150px]">
                            <Image src={realTimeChart} alt="customer" />
                          </figure>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Total customers</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">45%</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Returning’s customers</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">100%</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Avg. spent per visit</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">45%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <div className="order-2 col-span-12 min-[575px]:col-span-6 lg:order-3 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {data.slice(3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="right" offset={100} key={item.id}>
                      <div className="space-y-4">
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
