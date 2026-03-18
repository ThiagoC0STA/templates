import transactionChart from '@public/images/ns-img-235.svg';
import profitChart from '@public/images/ns-img-240.png';
import transactionRing from '@public/images/ns-img-74.png';
import profitDarkChart from '@public/images/ns-img-dark-161.png';
import transactionRingDark from '@public/images/ns-img-dark-50.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    icon: 'ns-shape-7',
    title: 'Our platform is both flexible and scalable',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Enjoy the convenience of offline mode',
  },

  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Setting up our system is a breeze',
  },

  {
    id: 4,
    icon: 'ns-shape-21',
    title: 'We prioritize robust security measures',
  },
];

const WhyChooseUsV2 = () => {
  return (
    <section
      className="bg-background-4 dark:bg-background-9 overflow-hidden py-[100px]"
      aria-label="Reasons to select us">
      <div className="main-container">
        <div className="flex flex-col items-center lg:flex-row lg:gap-[100px]">
          <div>
            <div className="mb-6 max-w-[536px] space-y-5 md:mb-10 md:w-full lg:mb-14">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Reasons to select us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[446px]">Why choose our POS system</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[536px]">
                    NextSaaS helps businesses manage customer relationships, automate workflows, and close deals
                    faster—all in one seamless platform.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <ul className="space-y-2" aria-label="Our key features">
              {data.map((item, index) => (
                <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                  <li className="flex items-center gap-3 p-2 md:p-3">
                    <div className="flex items-center justify-center">
                      <span className={`${item.icon} text-secondary dark:text-accent text-[24px] md:text-[36px]`} />
                    </div>
                    <p className="sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-normal md:text-lg md:leading-[27px]">
                      {item.title}
                    </p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="relative">
            <RevealAnimation delay={0.3}>
              <figure className="h-full w-full max-w-[500px] rounded-[20px] object-cover lg:max-w-[735px]">
                <Image
                  src={transactionRing}
                  alt="transaction-statistics"
                  className="block size-full object-cover dark:hidden"
                />
                <Image
                  src={transactionRingDark}
                  alt="transaction-statistics"
                  className="hidden size-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="right" offset={100}>
              <figure className="absolute top-[15%] right-8 w-full max-w-[130px] overflow-hidden rounded-[20px] md:right-0 md:max-w-[200px] xl:max-w-[253px]">
                <Image src={transactionChart} alt="features" className="h-full w-full object-cover" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="up" offset={150} start="top 95%">
              <div className="absolute top-[20%] right-6 z-10 w-[70px] md:w-[92px] lg:-right-[4%]">
                <div className="text-heading-6 md:text-heading-5 bg-ns-yellow flex -rotate-[14deg] items-center justify-center rounded-[8px] px-2 py-1 font-normal">
                  <NumberAnimation number={20} speed={2000} interval={200} rooms={2} />
                  <span>%</span>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7} direction="right" offset={100}>
              <figure className="shadow-3 absolute right-0 bottom-[10%] w-full max-w-[200px] overflow-hidden rounded-lg md:max-w-[320px] md:rounded-[20px] xl:max-w-[395px]">
                <Image src={profitChart} alt="features" className="h-full w-full dark:hidden" />
                <Image src={profitDarkChart} alt="features" className="hidden h-full w-full dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsV2;
