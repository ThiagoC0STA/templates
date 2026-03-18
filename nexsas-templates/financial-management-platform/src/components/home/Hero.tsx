import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import HeroCardImg from './HeroCardImg';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1} instant>
      <section
        className="mx-[8px] mt-[8px] h-[830px] overflow-hidden rounded-2xl bg-linear-to-b from-[#142e6e] to-[#edf2ff] max-[376px]:h-[850px] sm:h-[920px] md:rounded-3xl lg:h-[1078px] lg:rounded-4xl xl:rounded-[56px]"
        aria-label="Hero section - Financial management platform introduction">
        <div className="main-container">
          <div className="relative pt-[160px] lg:pt-[206px]">
            <div className="flex items-center justify-center gap-x-14">
              {/* text content  */}
              <div className="space-y-13 lg:space-y-16 xl:space-y-19">
                {/* content  */}
                <div className="space-y-8">
                  {/* avatar group  */}
                  <div className="flex items-center justify-center gap-x-3" aria-label="User testimonials">
                    <div className="flex items-center justify-center -space-x-3.5" aria-label="User avatars">
                      <RevealAnimation delay={0.1} direction="left" offset={50} instant>
                        <figure className="size-[50px] overflow-hidden rounded-full bg-[#FFC5C5] ring-2 ring-white">
                          <Image
                            src={avatar1Img}
                            alt="User avatar representing a satisfied customer"
                            width={50}
                            height={50}
                            className="size-full object-cover"
                            itemProp="image"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.2} direction="left" offset={50} instant>
                        <figure className="size-[50px] overflow-hidden rounded-full bg-[#DBD6FF] ring-2 ring-white">
                          <Image
                            src={avatar2Img}
                            alt="User avatar representing a satisfied customer"
                            width={50}
                            height={50}
                            className="size-full object-cover"
                            itemProp="image"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.3} direction="left" offset={50} instant>
                        <figure className="size-[50px] overflow-hidden rounded-full bg-[#EED0BF] ring-2 ring-white">
                          <Image
                            src={avatar3Img}
                            alt="User avatar representing a satisfied customer"
                            width={50}
                            height={50}
                            className="size-full object-cover"
                            itemProp="image"
                          />
                        </figure>
                      </RevealAnimation>
                    </div>
                    <RevealAnimation delay={0.4} direction="right" offset={50} instant>
                      <p
                        className="text-tagline-2 max-w-[90px] font-normal text-white/80"
                        itemProp="aggregateRating"
                        itemType="https://schema.org/AggregateRating">
                        <span itemProp="ratingCount">10,000+</span> people joined
                      </p>
                    </RevealAnimation>
                  </div>
                  {/* text  */}
                  <div className="space-y-3 text-center">
                    <RevealAnimation delay={0.5} instant>
                      <h1 className="mx-auto max-w-[780px] font-medium text-white" itemProp="headline">
                        Build & grow with scalable financial tools
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6} instant>
                      <p
                        className="text-accent/80 mx-auto max-w-[620px] text-lg leading-[150%] font-normal lg:max-w-[682px]"
                        itemProp="description">
                        Manage your payments, track growth, and streamline financial operations with a modern and
                        intuitive platform built for teams and businesses of all sizes.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
                {/* btns  */}
                <div
                  className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0"
                  aria-label="Call to action buttons">
                  <RevealAnimation delay={0.7} direction="left" offset={50} instant>
                    <div className="w-[80%] text-center sm:w-auto md:mx-0 md:w-auto">
                      <LinkButton href="/pricing" className="btn-v3-lg btn-v3-white w-full sm:w-auto">
                        Get started
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.8} direction="left" offset={50} instant>
                    <div className="w-[80%] text-center sm:w-auto md:mx-0 md:w-auto">
                      <LinkButton
                        href="/contact-us"
                        className="btn-v3-lg btn-v3-white bg-secondary/20 w-full text-white backdrop-blur-[2px] sm:w-auto">
                        Book a Demo
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            {/* credit card round img  */}
            <RevealAnimation delay={0.9} instant>
              <HeroCardImg />
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Hero.displayName = 'Hero';
export default Hero;
