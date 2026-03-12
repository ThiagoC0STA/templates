import gradient12 from '@public/images/ns-img-504.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const About = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-10 md:py-20 xl:py-[100px]">
      <div className="mx-auto max-w-[1140px] px-5 xl:max-w-[1270px] xl:px-0 2xl:max-w-[1440px]">
        <div className="bg-secondary relative z-10 overflow-hidden rounded-[20px] px-5 py-14 sm:px-8 md:rounded-[32px] md:px-[42px] md:py-[72px]">
          {/* bg gradient */}
          <RevealAnimation delay={0.7} offset={100} direction="right">
            <figure className="pointer-events-none absolute -top-[125%] -right-[15%] -z-10 size-[1060px] rotate-[10deg] select-none md:-top-[110%] md:-right-[20%] md:rotate-[68deg] xl:-top-[142%] xl:-right-[39%]">
              <Image src={gradient12} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="grid grid-cols-12 items-center gap-y-8 md:gap-y-14 xl:gap-[115px]">
            <div className="col-span-12 xl:col-span-6">
              <div className="mx-auto max-w-[508px] space-y-8 text-center md:space-y-14 xl:mx-0 xl:text-left">
                <div className="space-y-5">
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-blur-light dark:!text-accent">About me</span>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <RevealAnimation delay={0.3}>
                      <h2 className="text-white">
                        Nice to meet you <br />
                        I&apos;m alex.
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
                <RevealAnimation delay={0.5}>
                  <div>
                    <LinkButton
                      href="/about"
                      className="btn btn-base btn-dark dark:btn-transparent hover:btn-white w-full md:w-auto dark:border">
                      Download Resume
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <div className="flex flex-col items-center xl:items-start">
                <ul className="space-y-5">
                  <RevealAnimation delay={0.6}>
                    <li className="flex items-center gap-3">
                      <span className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full backdrop-blur-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                          <path
                            d="M9.125 1.375L3.875 6.62477L1.25 4"
                            stroke="#FCFCFC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-accent/60">8+ years of experience in creative direction, design &amp; code</p>
                    </li>
                  </RevealAnimation>

                  <RevealAnimation delay={0.7}>
                    <li className="flex items-center gap-3">
                      <span className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full backdrop-blur-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                          <path
                            d="M9.125 1.375L3.875 6.62477L1.25 4"
                            stroke="#FCFCFC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-accent/60">Worked with 50+ brands across tech, fashion, and media</p>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.8}>
                    <li className="flex items-center gap-3">
                      <span className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full backdrop-blur-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                          <path
                            d="M9.125 1.375L3.875 6.62477L1.25 4"
                            stroke="#FCFCFC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-accent/60">Passionate about typography, interaction, and minimalism</p>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.9}>
                    <li className="flex items-center gap-3">
                      <span className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full backdrop-blur-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                          <path
                            d="M9.125 1.375L3.875 6.62477L1.25 4"
                            stroke="#FCFCFC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-accent/60">Currently available for freelance &amp; collaborations</p>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
