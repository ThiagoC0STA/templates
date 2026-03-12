import RevealAnimation from '@/components/animation/RevealAnimation';
import podcastingImage from '@public/images/ns-img-545.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import VoiceStyleBadges from './VoiceStyleBadges';
import VoiceStyleLeftCards from './VoiceStyleLeftCards';

interface Language {
  flagSrc: string;
  flagAlt: string;
  name: string;
}

const VoiceStyle = () => {
  const languages: Language[] = [
    {
      flagSrc: '/images/icons/united-kindom-flag.svg',
      flagAlt: 'United Kingdom flag representing English language',
      name: 'English',
    },
    { flagSrc: '/images/icons/germany-flag.svg', flagAlt: 'Germany flag representing Dutch language', name: 'Dutch' },
    { flagSrc: '/images/icons/china-flag.svg', flagAlt: 'China flag representing Chinese language', name: 'Chinese' },
    {
      flagSrc: '/images/icons/south-korea-flag.svg',
      flagAlt: 'South Korea flag representing Korean language',
      name: 'Korean',
    },
  ];

  return (
    <section className="py-[80px] xl:py-[112px]" aria-labelledby="voice-styles-section-heading">
      <div className="main-container">
        <div className="space-y-8 md:space-y-16 xl:space-y-24">
          <div className="flex flex-col items-center justify-center gap-y-10 xl:flex-row xl:justify-between">
            {/* content  */}
            <div className="ml-0 w-full space-y-3 text-center xl:max-w-[398px] xl:text-left">
              <RevealAnimation delay={0.1}>
                <h2 className="font-normal" id="voice-styles-section-heading">
                  Choose from the <span className="text-ns-linen">voice</span> styles
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>Select from a diverse range of AI voice styles — from warm narrators to energetic presenters.</p>
              </RevealAnimation>
            </div>

            {/* card  badge  */}
            <VoiceStyleBadges />
          </div>

          {/* cards  */}
          <div
            className="flex flex-col items-center justify-center gap-y-8 overflow-hidden xl:flex-row xl:gap-x-8 xl:gap-y-0"
            aria-label="Use case examples">
            {/* left area  */}
            <VoiceStyleLeftCards />

            {/* middle area  */}
            <RevealAnimation delay={0.4}>
              <div
                className="w-full max-w-[695px] space-y-[89px] rounded-4xl border border-[#F4EFE7] p-6 xl:max-w-[560px]"
                aria-labelledby="languages-heading">
                <div className="space-y-2">
                  <p className="text-secondary text-tagline-1 font-normal">Voices from around the world</p>
                  <h3 id="languages-heading" className="text-heading-5 font-normal">
                    Engage your audience in 30 languages.
                  </h3>
                </div>

                {/* marquee  */}
                <div
                  className="relative w-full space-y-[14px] overflow-hidden rounded-2xl bg-[#F4EFE7] p-4 xl:max-w-[512px]"
                  aria-labelledby="language-marquee-heading">
                  <h4 id="language-marquee-heading" className="text-heading-6 relative z-20 font-normal">
                    Language
                  </h4>

                  <div className="overflow-hidden" aria-label="Available languages for AI voice generation">
                    <Marquee autoFill speed={50} gradient={false}>
                      <div className="ml-3 flex items-center justify-center gap-x-3">
                        {languages.map((language) => (
                          <div
                            key={language.name}
                            className="shadow-14 flex h-12 w-[131px] shrink-0 items-center justify-start gap-x-3 rounded-full bg-white p-1"
                            aria-label={`${language.name} language option`}>
                            <figure className="size-10 overflow-hidden rounded-full">
                              <Image
                                src={language.flagSrc}
                                alt={language.flagAlt}
                                width={40}
                                height={40}
                                className="size-full object-cover"
                                title={`${language.name} language flag`}
                              />
                            </figure>
                            <p className="text-secondary font-normal">{language.name}</p>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                  </div>

                  {/* left bg  */}

                  <div
                    className="absolute top-0 left-0 z-10 h-36 w-[126px] rotate-180"
                    style={{ background: 'linear-gradient(270deg, #f4efe7 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                  {/* right bg  */}

                  <div
                    className="absolute top-0 right-0 z-10 h-36 w-[126px]"
                    style={{ background: 'linear-gradient(270deg, #f4efe7 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                </div>
              </div>
            </RevealAnimation>

            {/* right area  */}
            <RevealAnimation delay={0.5} direction="right" offset={80}>
              <div className="group relative hidden overflow-hidden xl:block" aria-label="Podcasting use case">
                <figure className="w-full max-w-[218px] overflow-hidden rounded-4xl">
                  <Image
                    src={podcastingImage}
                    alt="Podcasting use case example for AI voice generator"
                    width={218}
                    height={327}
                    className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
                    title="Podcasting AI voice application"
                  />
                </figure>
                <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[202px] -translate-x-1/2 translate-y-0 rounded-full bg-white px-4 py-2 opacity-0 backdrop-blur-[15px] transition-all duration-600 ease-in-out group-hover:-translate-y-12 group-hover:opacity-100">
                  Podcasting
                </h3>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceStyle;
