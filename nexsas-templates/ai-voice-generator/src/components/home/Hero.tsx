import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import HeroVideoBackground from './HeroVideoBackground';
import HeroVoiceSVG from './HeroVoiceSVG';

const Hero = () => {
  return (
    <section
      className="lp:pt-[254px] relative overflow-hidden pt-[170px] pb-12 lg:pb-24"
      aria-label="AI Voice Generator Hero Section">
      {/* Video Background */}
      <HeroVideoBackground />

      <div className="main-container relative z-10">
        <div className="lp:space-y-34 space-y-10 md:space-y-15">
          {/* content  */}
          <div className="mx-auto space-y-10 text-center lg:space-y-14">
            {/* text groups */}
            <div className="space-y-3 text-center">
              {/* badge and text */}
              <div className="space-y-5">
                {/* badge  */}
                <RevealAnimation instant delay={0.1}>
                  <span className="badge badge-metal text-accent/80" aria-label="Product Hunt announcement badge">
                    We're live on productHunt
                  </span>
                </RevealAnimation>
                {/* main text  */}
                <RevealAnimation instant delay={0.2}>
                  <h1 className="text-accent lg:text-heading-1 text-heading-3 mx-auto max-w-[350px] leading-[110%] lg:max-w-[500px]">
                    Your voice, reinvented by AI.
                  </h1>
                </RevealAnimation>
              </div>
              <RevealAnimation instant delay={0.3}>
                <p className="text-accent/80 mx-auto max-w-[465px]" aria-label="AI Voice Generator description">
                  Bring your words to life with ultra-realistic AI voices powered by deep learning. Perfect for videos,
                  podcasts, ads, and more.
                </p>
              </RevealAnimation>
            </div>

            {/* btns  */}
            <div className="space-y-7" aria-label="Call to action buttons">
              <div
                className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0"
                aria-label="Primary action buttons">
                <RevealAnimation instant delay={0.4} direction="left" offset={50}>
                  <div className="w-[85%] md:w-auto">
                    <LinkButton
                      href="/signup"
                      btnClass="btn-lg-v2 lg:btn-xl-v2 btn-v2-white border-0 group-hover/btn-v2:btn-primary-v2">
                      Get started
                    </LinkButton>
                  </div>
                </RevealAnimation>
                <RevealAnimation instant delay={0.5} direction="left" offset={50}>
                  <div className="w-[85%] md:w-auto">
                    <LinkButton
                      href="/pricing"
                      btnClass="btn-lg-v2 lg:btn-xl-v2 btn-v2-accent group-hover/btn-v2:btn-secondary-v2">
                      Download the app
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation instant delay={0.6}>
                <i className="text-tagline-3 text-accent font-normal" aria-label="Demo information" role="note">
                  No signup required for demo — try it in your browser.
                </i>
              </RevealAnimation>
            </div>
          </div>

          {/* voice animation svg  */}
          <RevealAnimation instant delay={0.7}>
            <div className="flex items-center justify-center" aria-label="Voice waveform visualization">
              <HeroVoiceSVG />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
