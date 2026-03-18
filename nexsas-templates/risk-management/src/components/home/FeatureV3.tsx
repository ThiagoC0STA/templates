import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const featureCards = [
  {
    id: 'risk-assessments',
    title: 'Risk assessments',
    description: 'Built with modern business challenges in mind',
    icon: 'ns-shape-35',
  },
  {
    id: 'business-continuity-planning',
    title: 'Business continuity planning',
    description: "Only what you need, nothing you don't",
    icon: 'ns-shape-34',
  },
  {
    id: 'vendor-due-diligence',
    title: 'Vendor due diligence',
    description: 'Designed to impress, built to perform',
    icon: 'ns-shape-8',
  },
  {
    id: 'claims-incident-management',
    title: 'Claims & incident management',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-10',
  },
  {
    id: 'financial-risk-planning',
    title: 'Financial risk planning',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-45',
  },
  {
    id: 'data-governance-compliance',
    title: 'Data governance & compliance',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-35',
  },
];

const FeatureV3 = () => {
  return (
    <section className="relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-10 lg:gap-y-20 xl:gap-[100px]">
          <div className="col-span-12 lg:sticky lg:top-28 xl:col-span-6">
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
              <div className="space-y-3 text-center xl:text-left">
                <RevealAnimation delay={0.1}>
                  <h2 className="mx-auto w-full max-w-[450px] md:max-w-[500px] lg:max-w-[598px] xl:mx-0">
                    End-to-end risk management across functions
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="mx-auto w-full max-w-[450px] md:max-w-[500px] lg:max-w-[505px] xl:mx-0">
                    What distinguishes us is our commitment to empowering bold founders, dynamic teams, and innovative
                    entrepreneurs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center xl:text-left">
                  <LinkButton
                    href="/case-study"
                    className="btn btn-secondary hover:btn-primary dark:btn-transparent btn-md mx-auto w-[90%] md:w-auto">
                    Browse all use cases
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <StackCardWrapper
              topOffset="12vh"
              gap="24px"
              initDelay={100}
              className="mx-auto w-full max-w-full sm:max-w-[60%] md:max-w-[50%] lg:mx-0 lg:max-w-full lg:flex-1">
              {featureCards.map((card) => (
                <StackCardItem key={card.id}>
                  <div className="max-w-full max-sm:min-h-[200px] xl:max-w-[562px]">
                    <div className="border-stroke-8/10 dark:border-stroke-5 bg-background-2 dark:bg-background-5 w-full space-y-3 rounded-xl border p-5 sm:rounded-[20px] md:space-y-6 md:p-6 lg:p-8">
                      <div>
                        <span
                          className={`${card.icon} text-secondary dark:text-accent mx-auto inline-block text-[52px] sm:mx-0`}
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1">{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
