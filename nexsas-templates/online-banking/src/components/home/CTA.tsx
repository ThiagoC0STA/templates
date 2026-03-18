import gradient5 from '@public/images/ns-img-497.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTACheckList from '../shared/cta/CTACheckList';
import CtaInputForm from '../shared/cta/CtaInputForm';

const CTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="cta section wrapper">
      <div className="mx-auto px-5 lg:max-w-[980px] xl:max-w-[1260px] xl:px-0 2xl:max-w-[1440px]">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-8 relative overflow-hidden rounded-[20px] px-6 md:px-10 xl:px-20">
            <RevealAnimation delay={0.1} offset={200}>
              <div className="pointer-events-none absolute -bottom-52 left-7 -z-0 h-[600px] w-[600px] -translate-x-1/2 rotate-[120deg] select-none">
                <figure>
                  <Image src={gradient5} alt="cta-bg" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>

            <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="cta section">
              <div className="main-container">
                <div className="xl :gap-0 flex flex-col items-center justify-between gap-8 xl:flex-row">
                  <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
                    <RevealAnimation delay={0.3}>
                      <span className="badge badge-green badge-blur text-ns-green">Get started</span>
                    </RevealAnimation>

                    <div className="space-y-3">
                      <RevealAnimation delay={0.4}>
                        <h2 className="md:text-heading-2 text-heading-5 text-accent" aria-label="cta-heading">
                          Build a complete website using the assistance
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.5}>
                        <p aria-label="cta-description" className="text-accent/60">
                          Start your free trial today and see your ideas come to life easily and creatively.
                        </p>
                      </RevealAnimation>
                    </div>
                  </div>
                  {/* newsletter form  */}
                  <div className="mt-[40px] w-full max-w-[562px] space-y-6 lg:mt-[67px] lg:pl-9 xl:pl-[96px]">
                    <CtaInputForm
                      btnClass={undefined}
                      ctaBtnText="Get started"
                      inputFieldClass="sm:w-auto flex-1 bg-accent/5 border-0 px-5 py-3 shadow-1 rounded-full min-h-[48px] h-12 placeholder:text-accent/40 placeholder:text-tagline-1 placeholder:font-normal focus:outline-none focus:border focus:border-primary-600 dark:focus:border-primary-400 text-accent font-normal w-[85%]"
                    />
                    <CTACheckList
                      className="gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0 xl:justify-start"
                      ctaCheckListData={[
                        {
                          id: '1',
                          text: 'No credit card required',
                        },
                        {
                          id: '2',
                          text: '14-Day free trial',
                        },
                      ]}
                      listTextClass="text-accent font-normal text-tagline-3 sm:text-tagline-2"
                      checkListVariant="gray"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
