import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const steps = [
  {
    id: 1,
    title: 'Sign up for free',
    description: "Try our services commitment-free! Explore all we offer without a credit card—it's a risk-free",
  },
  {
    id: 2,
    title: 'Customize your setup',
    description: 'Customize NextSaaS to perfectly align with the unique requirements of your business.',
  },
  {
    id: 3,
    title: 'Start scaling',
    description: 'Streamline your processes, enhance efficiency, and expand your business horizons.',
    extraClass: 'md:col-start-4 lg:col-start-auto', // to match your original grid offset
  },
];

export default function Steps() {
  return (
    <section className="py-[60px] md:py-[90px] lg:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="mb-[35px] space-y-5 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-white">Steps</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 id="steps-heading">
              Get started in <br className="sm:hidden" />3 simple steps
            </h2>
          </RevealAnimation>
        </div>

        {/* steps cards */}
        <div className="grid grid-cols-12 items-center justify-center gap-8">
          {steps.map((step, idx) => (
            <RevealAnimation key={step.id} delay={0.3 + idx * 0.1}>
              <div
                className={`col-span-12 w-full space-y-6 py-10 md:col-span-6 md:max-w-[408px] lg:col-span-4 ${
                  step.extraClass || ''
                }`}
                aria-label={`Step ${step.id}`}>
                <p className="text-center">
                  <span
                    className="text-heading-6 bg-secondary dark:bg-accent dark:text-secondary text-accent rounded-[34px] px-9 py-2.5"
                    aria-hidden="true">
                    {step.id}
                  </span>
                </p>
                <div className="space-y-1 px-5 text-center">
                  <h3 className="text-heading-5">{step.title}</h3>
                  <p className="mx-auto">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.6}>
          <div className="mt-9 text-center md:mt-14">
            <LinkButton
              href="/process-01"
              className="btn btn-secondary hover:btn-primary dark:btn-accent btn-md mx-auto w-[90%] md:mx-0 md:w-auto"
              aria-label="Learn more about our process">
              See our process
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
