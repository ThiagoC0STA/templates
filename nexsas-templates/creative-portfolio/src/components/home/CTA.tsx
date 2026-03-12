import gradient8 from '@public/images/ns-img-500.png';
import gradient13 from '@public/images/ns-img-505.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTACheckList from '../shared/cta/CTACheckList';

const ctaCheckListData = [
  { id: '1', text: 'Freelance jobs' },
  { id: '2', text: 'Based in Brooklyn, working globally' },
];

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 relative z-10 overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-8 space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Get started</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Let's make something great</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[568px]">
                Have a project in mind, or just want to say hello? I'm always open to discussing new ideas,
                partnerships, or opportunities to collaborate.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mx-6 mb-[38px] space-y-8 sm:mx-0">
          <RevealAnimation delay={0.5}>
            <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <fieldset>
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Enter your email"
                  className="shadow-1 placeholder:text-secondary/50 border-stroke-1 bg-accent dark:bg-background-6 dark:border-stroke-7 dark:placeholder:text-accent/60 focus-within:ring-primary-500 block h-12 w-full rounded-full border px-[18px] py-3 font-normal outline-none placeholder:font-normal focus:ring-[0.7px] sm:max-w-[340px] sm:min-w-[340px]"
                />
              </fieldset>
              <button type="submit" className="btn btn-md btn-primary h-12">
                <span>Get started</span>
              </button>
            </form>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <CTACheckList
              className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-center sm:gap-6 md:gap-[42px]"
              ctaCheckListData={ctaCheckListData}
            />
          </RevealAnimation>
        </div>
      </div>
      {/* cta bg img  */}
      <div>
        <RevealAnimation delay={0.6} direction="up" offset={100}>
          <figure className="pointer-events-none absolute -top-[33%] -left-[3%] -z-10 h-[300px] w-[200px] select-none md:-top-[35%] md:w-[300px] lg:-top-[60%] lg:-left-[13%] lg:h-[544px] lg:w-[584px] xl:-top-[50%] xl:-left-[10%]">
            <Image src={gradient8} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.6} direction="right" offset={100}>
          <figure className="pointer-events-none absolute -right-[5%] -bottom-[10%] -z-10 h-[200px] w-[200px] select-none lg:-right-[7%] lg:-bottom-[23%] lg:h-[435px] lg:w-[409px]">
            <Image src={gradient13} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
