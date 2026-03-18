import feature2 from '@public/images/ns-img-81.png';
import selectUsImg02 from '@public/images/ns-img-96.png';
import selectUsImg03 from '@public/images/ns-img-97.png';
import feature2Dark from '@public/images/ns-img-dark-55.png';
import selectUsImg02Dark from '@public/images/ns-img-dark-69.png';
import selectUsImg03Dark from '@public/images/ns-img-dark-70.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FeaturesV3Data = [
  {
    icon: 'ns-shape-8',
    text: 'A version for offline use is available.',
  },
  {
    icon: 'ns-shape-9',
    text: 'Designed to be both scalable and secure.',
  },
  {
    icon: 'ns-shape-12',
    text: 'Feature powered by artificial intelligence.',
  },
  {
    icon: 'ns-shape-21',
    text: 'It offers both scalability and robust security.',
  },
];

const FeaturesV3 = () => {
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="lp:gap-[100px] grid grid-cols-12 items-center gap-y-8 md:gap-y-14 lg:gap-14 lg:gap-y-0 xl:gap-20">
          <div className="lp:col-span-7 col-span-12 max-lg:order-1 lg:col-span-6">
            <div className="mx-auto max-w-[704px] lg:mx-0">
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:mx-0 xl:max-w-[504px]">
                <RevealAnimation delay={0.1} offset={100}>
                  <figure>
                    <Image src={feature2} alt="features" className="h-full w-full object-cover dark:hidden" />
                    <Image src={feature2Dark} alt="features" className="hidden h-full w-full object-cover dark:block" />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.3} offset={100} direction="right" useSpring duration={2}>
                  <figure className="absolute top-[40%] right-0 z-10 w-full max-w-[150px] sm:max-w-[200px] xl:top-[38%] xl:-right-7 xl:max-w-[253px]">
                    <Image src={selectUsImg03} alt="features" className="h-full w-full dark:hidden" />
                    <Image src={selectUsImg03Dark} alt="features" className="hidden h-full w-full dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.4} offset={100} direction="right" useSpring duration={2}>
                  <figure className="absolute right-0 bottom-10 w-full max-w-[200px] overflow-hidden rounded-[10px] sm:max-w-[300px] xl:bottom-1/12 xl:max-w-[395px]">
                    <Image src={selectUsImg02} alt="features" className="h-full w-full dark:hidden" />
                    <Image src={selectUsImg02Dark} alt="features" className="hidden h-full w-full dark:block" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="lp:col-span-5 col-span-12 max-lg:order-0 lg:col-span-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan">Reasons to select us</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[521px]">Easily manage your cash flow.</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                      &amp; After magazine.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {FeaturesV3Data.map((item, idx) => (
                    <RevealAnimation delay={0.4 + idx * 0.1} key={item.icon}>
                      <li className="flex items-center gap-4 p-2">
                        <span className={`${item.icon} text-secondary dark:text-accent text-[36px]`}> </span>
                        <span className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.text}</span>
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

export default FeaturesV3;
