import RevealAnimation from '../animation/RevealAnimation';
import CTACheckList from '../shared/cta/CTACheckList';

const listItems = [
  { id: '1', text: 'No credit card required' },
  { id: '2', text: '14-Day free trial' },
];

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[120px] pb-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="space-y-8">
          <div>
            <div className="mb-10 space-y-5 text-center sm:mb-14">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-5">Get started</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-secondary dark:text-accent mx-auto max-w-[1042px] font-normal text-white">
                    {' '}
                    NextSaaS – your ultimate email &amp; transactional messaging platform
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[600px]">
                    Drive more engagement. improve deliverability. automate your emails.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <form className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-3 md:gap-y-0">
                <fieldset className="inline-block">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="shadow-1 placeholder:text-secondary/50 border-stroke-1 dark:bg-background-6 text-secondary/60 dark:bg-dark-200 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500/20 h-12 w-[330px] rounded-full border px-[18px] py-3 placeholder:font-normal focus:ring-2 focus:outline-none max-[376px]:w-[285px] md:w-[440px] dark:border-[#31332F] dark:text-white/60 dark:placeholder:text-white/40"
                  />
                </fieldset>
                <button className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-full md:w-auto">
                  <span>Get started</span>
                </button>
              </form>
            </RevealAnimation>
          </div>
          <CTACheckList ctaCheckListData={listItems} className="gap-y-5 sm:gap-x-[42px]" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
