import selectUsReason from '@public/images/ns-img-208.png';
import selectUsReasonDark from '@public/images/ns-img-dark-141.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featuresData = [
  {
    id: '1',
    icon: 'ns-shape-10',
    title: ' Understand your options clearly',
  },
  {
    id: '2',
    icon: 'ns-shape-12',
    title: 'Choose your own coverage limits',
  },
  {
    id: '3',
    icon: 'ns-shape-14',
    title: 'File claims in minutes, not days',
  },
  {
    id: '4',
    icon: 'ns-shape-16',
    title: 'Access support from any device',
  },
];

const Features = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-[100px] lg:py-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} offset={100}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[669px]">
                <Image src={selectUsReason} alt="select-us-reason" className="size-full dark:hidden" />
                <Image src={selectUsReasonDark} alt="select-us-reason" className="hidden size-full dark:block" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[500px] space-y-5 sm:space-y-8 lg:mx-0 lg:max-w-full">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan">Reasons to select us</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2>Personalized coverage that makes sense</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      Your lifestyle is unique—your insurance should be too. Our team helps you find the perfect policy
                      by analyzing your needs, explaining your options, and guiding you through every step.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="space-y-1 sm:space-y-2">
                  {featuresData.map((item, index) => (
                    <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                      <li className="flex items-center gap-4 p-2">
                        <span className={`${item.icon} text-secondary dark:text-accent text-[36px]`} />
                        <span className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.title}</span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
