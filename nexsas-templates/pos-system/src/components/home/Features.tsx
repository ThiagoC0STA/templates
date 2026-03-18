import feature1 from '@public/images/ns-img-237.png';
import feature2 from '@public/images/ns-img-238.png';
import feature3 from '@public/images/ns-img-239.png';
import featureDark1 from '@public/images/ns-img-dark-158.png';
import featureDark2 from '@public/images/ns-img-dark-159.png';
import featureDark3 from '@public/images/ns-img-dark-160.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDark: StaticImageData;
}

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Billing & invoicing',
    description: 'Create comprehensive receipts that include itemized purchases, taxes, and discounts',
    image: feature1,
    imageDark: featureDark1,
  },
  {
    id: '2',
    title: 'Supplier management',
    description: 'Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your',
    image: feature2,
    imageDark: featureDark2,
  },
  {
    id: '3',
    title: 'Cloud-based accessibility',
    description: 'Easily view your POS dashboard from any device, allowing you to manage sales',
    image: feature3,
    imageDark: featureDark3,
  },
];

const Features = () => {
  return (
    <section className="bg-background-1 dark:bg-background-5 py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">More Features</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Key Features</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[578px]">
                Our platform is designed with a focus on performance, usability, and innovation, delivering a seamless
                experience tailored to modern needs.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-start gap-y-8 md:gap-8 lg:gap-10 xl:gap-14">
          {featuresData.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-4">
                <div className="space-y-6 md:space-y-8 xl:space-y-11">
                  <figure className="mx-auto w-full md:mx-0 md:max-w-[393px]">
                    <Image className="size-full object-cover dark:hidden" src={feature.image} alt="features" />
                    <Image
                      className="hidden size-full object-cover dark:block"
                      src={feature.imageDark}
                      alt="features"
                    />
                  </figure>
                  <div className="space-y-2 text-left">
                    <h3 className="xl:text-heading-5 text-heading-6">{feature.title}</h3>
                    <p className="lg:text-tagline-1 text-tagline-2 mx-auto max-w-[340px] md:mx-0 md:max-w-full">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
