import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import hotjarIcon from '@public/images/icons/hotjar.svg';
import notionIcon from '@public/images/icons/notion-v2.svg';
import scapicIcon from '@public/images/icons/scapic.svg';
import stripeIcon from '@public/images/icons/stripe.svg';
import avatar32 from '@public/images/ns-avatar-32.png';
import avatar40 from '@public/images/ns-avatar-40.jpg';
import avatar41 from '@public/images/ns-avatar-41.jpg';
import avatar42 from '@public/images/ns-avatar-42.jpg';
import Image from 'next/image';

const Result = () => {
  return (
    <section
      className="bg-ns-ivory py-[80px] md:py-[120px] lg:py-[156px]"
      aria-label="AI voice generator results and customer testimonials">
      <div className="main-container">
        <div className="space-y-12 md:space-y-19">
          <RevealAnimation delay={0.1}>
            <h2 className="text-center font-normal lg:text-left">
              Proven results, <span className="text-ns-linen">real voices</span>
            </h2>
          </RevealAnimation>

          {/* stories */}
          <div className="flex flex-col items-center justify-center gap-5 max-lg:flex-wrap lg:flex-row lg:gap-2">
            {/* card one - three  */}
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:gap-2">
              {/* card one  */}
              <RevealAnimation delay={0.2}>
                <div className="dark:bg-background-5 flex h-[370px] w-full max-w-[316px] flex-col justify-between rounded-4xl bg-white p-6">
                  <figure>
                    <Image src={hotjarIcon} alt="Hotjar company logo" />
                  </figure>

                  <div className="space-y-8">
                    <p className="text-secondary dark:text-accent">
                      We easily converted scripts into natural voices and scaled our ad campaigns faster than ever.
                    </p>

                    <figure className="flex items-center gap-3">
                      <Image
                        src={avatar42}
                        className="size-11 rounded-full object-cover object-center"
                        alt="Priya S., Creative Director at Sonic Ads"
                        width={44}
                        height={44}
                        loading="lazy"
                      />

                      <figure>
                        <h3 className="text-tagline-1 leading-[150%] font-semibold sm:text-lg">Priya S.</h3>
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                          Creative Director, Sonic Ads
                        </p>
                      </figure>
                    </figure>
                  </div>
                </div>
              </RevealAnimation>

              <div className="w-full max-w-[317px] space-y-5 lg:space-y-2">
                {/* card two  */}
                <RevealAnimation delay={0.3}>
                  <div className="dark:bg-background-5 flex h-[370px] flex-col items-start justify-between rounded-4xl bg-white p-6 xl:max-w-[316px]">
                    <span className="badge badge-ivory" aria-label="Content category: Case study">
                      Case study
                    </span>
                    <div className="space-y-8">
                      <p className="text-secondary dark:text-accent pt-16 pb-8">
                        SoundWave Studios boosts video output by 40% using AI-generated voices.
                      </p>

                      <div className="w-[90%] md:w-auto">
                        <LinkButton
                          href="/case-study/ai-powered-patient-care-solutions-in-healthcare"
                          btnClass="btn-md-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                          Read now
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>

                {/* card three  */}
                <RevealAnimation delay={0.4}>
                  <div className="bg-ns-linen w-full max-w-[316px] space-y-3 rounded-4xl p-6">
                    <h2
                      className="flex items-center justify-start pt-6 text-4xl font-light text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[110%]"
                      aria-label="50 percent time reduction">
                      <NumberAnimation number={50} speed={2000} interval={100} rooms={2} heightSpaceRatio={2} />%
                    </h2>

                    <p className="text-accent/60 font-normal">
                      less time spent on dubbing compared to traditional workflows.
                    </p>
                  </div>
                </RevealAnimation>
              </div>
            </div>

            {/* card 4 -7  */}
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:gap-x-2">
              <div className="flex flex-col gap-y-5 lg:gap-y-2">
                {/* card four  */}
                <RevealAnimation delay={0.2}>
                  <div className="dark:bg-background-5 flex h-[370px] w-full max-w-[317px] flex-col justify-between rounded-4xl bg-white p-6">
                    <figure>
                      <Image src={stripeIcon} alt="Stripe company logo" />
                    </figure>

                    <div className="space-y-8">
                      <p className="text-secondary dark:text-accent">
                        The voice clarity and tone customization blew us away!
                      </p>

                      <figure className="flex items-center gap-3">
                        <Image
                          src={avatar32}
                          className="size-11 rounded-full object-cover object-center"
                          alt="Carlos M., Business Owner"
                          width={44}
                          height={44}
                          loading="lazy"
                        />

                        <figure>
                          <h3 className="text-tagline-1 leading-[150%] font-semibold sm:text-lg">Carlos M.</h3>
                          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                            Business Owner
                          </p>
                        </figure>
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>

                {/* card five  */}
                <RevealAnimation delay={0.3}>
                  <div className="dark:bg-background-5 flex h-[370px] w-full max-w-[317px] flex-col justify-between rounded-4xl bg-white p-6">
                    <figure>
                      <Image src={notionIcon} alt="Notion company logo" />
                    </figure>

                    <div className="space-y-8">
                      <p className="text-secondary dark:text-accent">
                        We instantly localize our campaigns with natural accents — no extra cost, no delays.
                      </p>

                      <figure className="flex items-center gap-3">
                        <Image
                          src={avatar41}
                          className="size-11 rounded-full object-cover object-center"
                          alt="Nora Kim, Marketing Lead at AdPulse Global"
                          width={44}
                          height={44}
                          loading="lazy"
                        />

                        <figure>
                          <h3 className="text-tagline-1 leading-[150%] font-semibold sm:text-lg">Nora Kim</h3>
                          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                            Marketing Lead, AdPulse Global
                          </p>
                        </figure>
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              {/* card 6 -7  */}
              <div className="flex flex-col gap-y-5 lg:gap-y-2">
                {/* card six  */}
                <RevealAnimation delay={0.2}>
                  <div className="bg-secondary dark:bg-background-5 w-full max-w-[317px] rounded-4xl p-6">
                    <span
                      className="badge badge-secondary bg-accent/10! font-normal"
                      aria-label="Content category: Case study">
                      Case study
                    </span>
                    <p className="pt-5 pb-8 text-white">
                      SoundWave Studios boosts video output by 40% using AI-generated voices.
                    </p>

                    <div className="w-[90%] md:w-auto">
                      <LinkButton
                        href="/case-study/cove-financial-risk-management-and-compliance"
                        btnClass="btn-md-v2 btn-v2-white !border-0 group-hover/btn-v2:btn-primary-v2">
                        Read now
                      </LinkButton>
                    </div>
                  </div>
                </RevealAnimation>

                {/* card seven  */}
                <RevealAnimation delay={0.2}>
                  <div className="dark:bg-background-5 flex h-[370px] w-full max-w-[317px] flex-col justify-between rounded-4xl bg-white p-6">
                    <figure>
                      <Image src={scapicIcon} alt="Scapic company logo" />
                    </figure>

                    <div className="space-y-8">
                      <p className="text-secondary dark:text-accent">
                        Our explainer videos now sound professional without hiring multiple voice actors. It's a total
                        game-changer.
                      </p>

                      <figure className="flex items-center gap-3">
                        <Image
                          src={avatar40}
                          className="size-11 rounded-full object-cover object-center"
                          alt="Liam Brooks, Video Producer at BrightMotion"
                          width={44}
                          height={44}
                          loading="lazy"
                        />

                        <figure>
                          <h3 className="text-tagline-1 leading-[150%] font-semibold sm:text-lg">Liam Brooks</h3>
                          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                            Video Producer, BrightMotion
                          </p>
                        </figure>
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
