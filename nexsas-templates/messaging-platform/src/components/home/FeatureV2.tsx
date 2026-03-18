import feature1 from '@public/images/ns-img-125.png';
import feature2 from '@public/images/ns-img-126.png';
import feature3 from '@public/images/ns-img-127.png';
import feature1Dark from '@public/images/ns-img-dark-94.png';
import feature2Dark from '@public/images/ns-img-dark-95.png';
import feature3Dark from '@public/images/ns-img-dark-96.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Live chat & voice messages',
    description: 'Enjoy seamless communication that keeps you connected in real-time, eliminating any delays.',
    image: feature1,
    imageDark: feature1Dark,
  },
  {
    id: 2,
    title: 'Task & reminder management',
    description: 'Ensure your projects stay on schedule by integrating project management directly into',
    image: feature2,
    imageDark: feature2Dark,
  },
  {
    id: 3,
    title: 'Cloud storage history Checking',
    description: 'Safeguard your crucial chats and files, ensuring they are always accessible and never lost.',
    image: feature3,
    imageDark: feature3Dark,
  },
];

const FeatureV2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>
              Meet our cutting-edge <br className="hidden md:block" />
              crypto features
            </h2>
          </RevealAnimation>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:gap-x-8">
          {data.map((item) => (
            <RevealAnimation delay={0.4 + (item.id - 1) * 0.1} key={item.id}>
              <div className="col-span-12 lg:col-span-4">
                <div className="dark:bg-background-6 flex flex-col items-center space-y-6 gap-y-6 rounded-[20px] bg-white px-8 pt-[42px] pb-[42px] sm:gap-y-0 md:flex-row md:gap-x-6 md:px-[42px] lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-6 lg:pb-[56px]">
                  <figure className="my-auto overflow-hidden rounded-2xl">
                    <Image src={item.image} alt="feature image" className="size-full dark:hidden" />
                    <Image src={item.imageDark} alt="feature image" className="hidden dark:block" />
                  </figure>
                  <div className="space-y-2">
                    <h5 className="max-md:text-heading-6">{item.title}</h5>
                    <p className="line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.7}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/features"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg lg:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
              Explore features
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FeatureV2;
