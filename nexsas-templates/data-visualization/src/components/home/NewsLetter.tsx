import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NewsLetter = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-secondary dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[76px] lg:pb-[76px]">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur dark:!text-accent/60 dark:!bg-accent/10 mb-5">Let&apos;s start</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">Finance is evolving. are you ready?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">
                &nbsp;Sign up for free and experience secure, decentralized financial tools with no borders and no
                limits
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="/pricing"
                  className="btn btn-primary hover:btn-accent btn-md mx-auto w-[90%] border-0 md:mx-0 md:w-auto">
                  Book your free strategy call
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default NewsLetter;
