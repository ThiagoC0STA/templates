import { CheckIcon } from '@/icons';
import gradient25Img from '@public/images/ns-img-513.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const accessibilityFeatures = [
  {
    id: 1,
    text: 'iOS, android, web app',
  },
  {
    id: 2,
    text: '24/7 portfolio access',
  },
  {
    id: 3,
    text: 'Dedicated wealth coaches',
  },
  {
    id: 4,
    text: 'Live support when you need it',
  },
];

const Accessibility = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="bg-secondary dark:bg-background-7 border-stroke-1 dark:border-stroke-6 relative z-10 grid grid-cols-1 items-center overflow-hidden rounded-[32px] border px-[42px] py-18 max-md:space-y-18 md:grid-cols-2">
          <RevealAnimation delay={0.6} offset={100} direction="up">
            <figure className="pointer-events-none absolute -top-[100%] -right-[100%] -z-10 size-[1060px] -rotate-[130deg] select-none sm:-top-[100%] sm:-right-[100%] md:-top-[100%] md:-right-[50%] md:-rotate-[130deg] lg:-top-[133%] lg:-right-[40%] xl:-top-[123%] xl:-right-[40%]">
              <Image src={gradient25Img} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="max-w-[630px] space-y-14">
            <div className="space-y-5 text-center md:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-blur text-ns-green">Accessible</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-white">Guiding you with intelligence and heart</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60">
                    Whether you&apos;re just starting or optimizing your legacy, we’re here with a blend of automated
                    intelligence and real human advice—accessible anywhere, anytime.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="text-center md:text-left">
                <LinkButton href="/affiliates" className="btn btn-dark btn-lg hover:btn-primary">
                  Start earning more
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex flex-col justify-center md:items-center">
            <ul className="flex flex-col gap-y-4">
              {accessibilityFeatures.map((feature, index) => (
                <RevealAnimation key={feature.id} delay={0.5 + index * 0.1}>
                  <li className="flex shrink-0 items-center gap-3">
                    <span className="dark:bg-accent/15 size-6 rounded-full bg-white/15">
                      <CheckIcon className="dark:fill-accent fill-white" />
                    </span>
                    <span className="text-accent/60">{feature.text}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
