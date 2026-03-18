import RevealAnimation from '../animation/RevealAnimation';
import HeroFormAndAvatar from './HeroFormAndAvatar';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <section className="pt-[115px] pb-[80px] lg:pb-[150px]">
      <div className="mx-auto max-w-[1440px] px-6 2xl:px-0">
        <div className="bg-primary-500 flex h-[860px] flex-col items-center justify-between overflow-hidden rounded-[30px] bg-[url('/images/ns-img-247.svg')] bg-cover bg-center bg-no-repeat lg:flex-row">
          <div className="w-full space-y-14 p-6 lg:ml-6 lg:max-w-[450px] lg:p-0 xl:ml-[100px] xl:max-w-[536px]">
            <div className="space-y-5 text-center md:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-blur dark:!text-ns-green inline-block" id="badge-crm">
                  Modern CRM
                </span>
              </RevealAnimation>
              <div className="space-y-4">
                <RevealAnimation delay={0.2}>
                  <h1 className="text-accent">AI-powered CRM for businesses</h1>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60 max-w-[468px] md:w-full">
                    Automate sales, streamline customer relationships, and scale your business—all in one intuitive
                    platform.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <HeroFormAndAvatar />
          </div>
          <HeroImages />
        </div>
      </div>
    </section>
  );
};

export default Hero;
