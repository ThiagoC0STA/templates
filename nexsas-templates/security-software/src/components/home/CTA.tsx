import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="bg-secondary relative z-10 overflow-hidden py-28">
      <RevealAnimation delay={0.2} direction="up" offset={100}>
        <figure className="cta-gradient pointer-events-none absolute -top-[150%] left-[5%] -z-10 size-[1140px] rotate-[10deg] select-none">
          <Image src={gradient4} alt="pricing bg" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-y-12 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="space-y-3 text-center xl:text-left">
              <RevealAnimation delay={0.1}>
                <h2 className="xl:text-heading-2 text-heading-5 mx-auto max-w-[300px] text-white md:max-w-[649px] xl:mx-0">
                  Need help? contact our experts
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-accent/60 max-w-[350px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-full">
                  Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec tellus cras
                  ornare.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="sm:flex-1">
            <div className="mx-auto w-full max-w-full space-y-6 sm:max-w-[462px] xl:mx-0 xl:ml-auto">
              <RevealAnimation delay={0.3}>
                <form className="flex flex-col items-center gap-3 sm:flex-row">
                  <input
                    aria-label="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-accent/10 bg-accent/10 focus:ring-primary-500 placeholder:text-tagline-1 text-accent placeholder:text-accent/60 h-12 w-[90%] flex-1 rounded-full border px-5 py-3 font-normal placeholder:font-normal focus:ring-1 focus:outline-none sm:w-auto"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent h-12 w-[90%] sm:w-auto">
                    <span>Get started</span>
                  </button>
                </form>
              </RevealAnimation>
              <ul className="flex flex-col items-center gap-y-5 sm:flex-row md:gap-x-12">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span className="bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        viewBox="0 0 10 7"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                          className="fill-accent"
                        />
                      </svg>
                    </span>
                    <span className="text-accent text-tagline-2 font-normal">No credit card required</span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span className="bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        viewBox="0 0 10 7"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                          className="fill-accent"
                        />
                      </svg>
                    </span>
                    <span className="text-accent text-tagline-2 font-normal">14-Day free trial</span>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
