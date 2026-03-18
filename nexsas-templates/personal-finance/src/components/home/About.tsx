import { CheckIcon } from '@/icons';
import gradientImg from '@public/images/ns-img-506.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const aboutFeatures = [
  {
    id: 1,
    text: 'Eight years in fintech, enhancing financial management.',
  },
  {
    id: 2,
    text: 'Boosted startups&apos; online presence.',
  },
  {
    id: 3,
    text: 'Specializing in data visualization to improve financial literacy.',
  },
  {
    id: 4,
    text: 'Seeking new projects in innovative finance.',
  },
];

const About = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-[88px] lg:pb-[100px] xl:pt-[100px] 2xl:pb-[150px]">
      <div className="mx-auto max-w-[1440px] max-lg:px-5">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-6 relative z-10 overflow-hidden rounded-[32px] px-6 py-14 lg:px-[42px] lg:py-[72px]">
            <RevealAnimation delay={0.4} direction="up">
              <div className="pointer-events-none absolute -top-[46%] -right-[22%] -z-10 max-w-[700px] rotate-[314deg] select-none min-[400px]:-top-[50%] min-[510px]:-top-[80%] md:-top-[66%] lg:-top-[70%]">
                <Image src={gradientImg} alt="gradient" />
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 items-center gap-y-10 md:gap-y-14 xl:gap-[115px]">
              <div className="col-span-12 xl:col-span-6">
                <div className="space-y-10 lg:max-w-[508px] lg:space-y-14 xl:mx-auto">
                  <div className="space-y-3 lg:space-y-5">
                    <RevealAnimation delay={0.2}>
                      <span className="badge badge-blur">About NextSaaS</span>
                    </RevealAnimation>
                    <div className="space-y-2 lg:space-y-3">
                      <RevealAnimation delay={0.3}>
                        <h2 className="text-white">
                          Your path to <br className="hidden md:block" />
                          financial freedom
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4}>
                        <p className="text-accent/60">
                          I&apos;m a Brooklyn creative with 8 years in web design and front-end development, helping
                          startups turn bold ideas into reality with smart design.
                        </p>
                      </RevealAnimation>
                    </div>
                  </div>
                  <RevealAnimation delay={0.4}>
                    <LinkButton
                      href="/about"
                      className="btn btn-base btn-dark dark:btn-transparent hover:btn-primary mx-auto w-[85%] md:w-auto dark:border">
                      More about NextSaaS
                    </LinkButton>
                  </RevealAnimation>
                </div>
              </div>

              <div className="col-span-12 xl:col-span-6">
                <div>
                  <ul className="space-y-3 md:space-y-5">
                    {aboutFeatures.map((feature, index) => (
                      <RevealAnimation key={feature.id} delay={0.5 + index * 0.1}>
                        <li className="flex items-center gap-3">
                          <span className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full backdrop-blur-[15px]">
                            <CheckIcon className="dark:fill-accent" />
                          </span>
                          <p className="text-accent/60">{feature.text}</p>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default About;
