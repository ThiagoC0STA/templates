import featureCardImg01Image from '@public/images/ns-img-90.png';
import featureCardImg02Image from '@public/images/ns-img-91.png';
import featureCardImg03Image from '@public/images/ns-img-92.png';
import featureCardImg04Image from '@public/images/ns-img-93.png';
import featureCardImg05Image from '@public/images/ns-img-94.png';
import featureCardImg01DarkImage from '@public/images/ns-img-dark-63.png';
import featureCardImg02DarkImage from '@public/images/ns-img-dark-64.png';
import featureCardImg03DarkImage from '@public/images/ns-img-dark-65.png';
import featureCardImg04DarkImage from '@public/images/ns-img-dark-66.png';
import featureCardImg05DarkImage from '@public/images/ns-img-dark-67.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    id: 1,
    light: featureCardImg01Image,
    dark: featureCardImg01DarkImage,
    alt: 'Fast and secure cloud upload feature',
    title: 'Fast & secure cloud upload',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 2,
    light: featureCardImg02Image,
    dark: featureCardImg02DarkImage,
    alt: 'Automated workflows feature',
    title: 'Automated workflows',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 3,
    light: featureCardImg03Image,
    dark: featureCardImg03DarkImage,
    alt: 'Smart search and AI insights feature',
    title: 'Smart search & AI insights',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 4,
    light: featureCardImg04Image,
    dark: featureCardImg04DarkImage,
    alt: 'Teamwork and leadership feature',
    title: 'Teamwork & leadership',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 5,
    light: featureCardImg05Image,
    dark: featureCardImg05DarkImage,
    alt: 'Custom dashboards feature',
    title: 'Custom dashboards',
    desc: 'Store, access, and manage data from anywhere.',
  },
];

const Features = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]"
      aria-label="Features">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* feature heading  */}
          <div className="flex flex-col items-center justify-center space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white">Features</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 md:text-heading-2 max-w-[578px] text-center">
                Powerful features to elevate your business
              </h2>
            </RevealAnimation>
          </div>

          {/* feature cards  */}
          <div className="grid grid-cols-12 items-center justify-center gap-y-12 sm:gap-x-8 md:gap-y-[70px]">
            {features.map((feature, idx) => (
              <RevealAnimation key={feature.id} delay={0.3 + idx * 0.1}>
                <div
                  className={`col-span-12 space-y-3 md:col-span-6 lg:col-span-4 ${feature.id === 4 ? 'lg:col-start-3' : ''}`}>
                  {/* card image */}
                  <div className="dark:bg-background-6 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                    <figure className="overflow-hidden rounded-xl">
                      <Image
                        src={feature.light}
                        alt={feature.alt}
                        className="h-full w-full object-cover dark:hidden"
                        loading="lazy"
                        width={409}
                        height={300}
                      />
                      <Image
                        src={feature.dark}
                        alt={feature.alt}
                        className="hidden h-full w-full object-cover dark:inline-block"
                        loading="lazy"
                        width={409}
                        height={300}
                      />
                    </figure>
                  </div>
                  {/* card content */}
                  <div className="space-y-1">
                    <h3 className="sm:text-heading-5 text-[22px]">{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
