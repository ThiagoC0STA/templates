import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image?: string;
  darkImage?: string;
  isMainCard?: boolean;
}

const featuresData: FeatureCard[] = [
  {
    id: 1,
    title: 'Time & Attendance Tracking',
    description: 'Monitor employee hours and overtime with accuracy.',
    isMainCard: true,
  },
  {
    id: 2,
    title: 'Project-Based Tracking',
    description: 'Assign time logs to specific projects for clear billing.',
    image: '/images/ns-img-281.png',
    darkImage: '/images/ns-img-dark-191.png',
  },
  {
    id: 3,
    title: 'Invoice generation',
    description: 'Convert timesheets into invoices instantly.',
    image: '/images/ns-img-282.png',
    darkImage: '/images/ns-img-dark-192.png',
  },
  {
    id: 4,
    title: 'Seamless payroll integration',
    description: 'Sync work hours with payroll for effortless payments.',
    image: '/images/ns-img-283.png',
    darkImage: '/images/ns-img-dark-193.png',
  },
];

const FeaturesV2 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 pt-20 pb-20 md:pb-28 xl:pb-[160px]">
        <div className="main-container">
          <div className="space-y-10 md:space-y-[70px]">
            <div className="space-y-3 text-center md:space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green-v2">Features</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Key features</h2>
              </RevealAnimation>
            </div>
            {/* features grid */}
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
              {featuresData.map((feature, index) => (
                <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                  {feature.isMainCard ? (
                    <article className="dark:bg-background-6 relative col-span-12 flex max-h-[400px] flex-col items-center justify-between overflow-hidden rounded-[20px] bg-white px-4 pt-8 md:max-h-[319px] md:px-8 lg:flex-row">
                      <RevealAnimation delay={0.3 + index * 0.1 + 0.1}>
                        <div>
                          <h3 className="text-heading-6 sm:text-heading-5 mb-1">{feature.title}</h3>
                          <p>{feature.description}</p>
                          <div className="mt-6">
                            <LinkButton
                              href="/features"
                              className="btn dark:btn-transparent dark:hover:btn-accent btn-white btn-md hover:btn-secondary w-[90%] md:w-auto">
                              View more
                            </LinkButton>
                          </div>
                        </div>
                      </RevealAnimation>
                      {/* circle Aria  */}
                      <RevealAnimation delay={0.3 + index * 0.1 + 0.2}>
                        <div className="relative top-10 lg:top-16">
                          <figure className="absolute -top-2 -left-[25%] hidden w-full max-w-[124px] overflow-hidden rounded-[12px] sm:block md:-left-[30%] lg:top-2 lg:-left-[40%]">
                            <Image
                              src="/images/ns-img-280.png"
                              alt="Satisfied user testimonial card"
                              className="block size-full dark:hidden"
                              width={124}
                              height={124}
                            />
                            <Image
                              src="/images/ns-img-dark-190.png"
                              alt="Satisfied user testimonial card"
                              className="hidden dark:block"
                              width={124}
                              height={124}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute top-[26%] left-[2%] size-16 rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/figma.svg"
                              className="h-[30px] w-[30px] object-cover object-center"
                              alt="figma"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute top-[6%] left-[20%] size-16 rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/dropbox.svg"
                              className="h-[30px] w-[30px] object-cover object-center"
                              alt="dropbox"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute -top-[4%] left-[43%] size-16 rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/slack.svg"
                              className="h-[30px] w-[30px] object-cover object-center"
                              alt="slack"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute top-[6%] left-[67%] size-16 rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/asana.svg"
                              className="object-cover object-center"
                              alt="asana"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute top-[25%] left-[82%] size-16 rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/drive-google.svg"
                              className="object-cover object-center"
                              alt="google drive"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="bg-background-4 dark:bg-background-9 absolute top-[30%] left-[43%] flex size-16 items-center justify-center rounded-full px-5 py-[17px]">
                            <Image
                              src="/images/icons/vector.svg"
                              className="block object-cover object-center dark:hidden"
                              alt="vector"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/images/icons/vector-dark.svg"
                              className="hidden object-cover object-center dark:block"
                              alt="vector"
                              width={30}
                              height={30}
                            />
                          </figure>
                          {/* Circle div */}
                          <div className="size-[399px] rounded-full">
                            <div className="dark:border-stroke-8 flex size-[399px] items-center justify-center rounded-full border border-[#E6EAF0]">
                              <div className="dark:border-stroke-8 flex size-[350px] items-center justify-center rounded-full border border-[#E6EAF0]">
                                <div className="dark:border-stroke-8 flex size-[288px] items-center justify-center rounded-full border border-[#E6EAF0]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </RevealAnimation>
                    </article>
                  ) : (
                    <article className="dark:bg-background-6 col-span-12 space-y-3 rounded-[20px] bg-white p-4 md:col-span-6 lg:col-span-4">
                      {feature.image && (
                        <figure className="max-w-full overflow-hidden rounded-2xl md:max-w-[376px]">
                          <Image
                            src={feature.image}
                            className="block h-full w-full object-cover dark:hidden"
                            alt={feature.title}
                            width={376}
                            height={200}
                          />
                          {feature.darkImage && (
                            <Image
                              src={feature.darkImage}
                              className="hidden h-full w-full object-cover dark:block"
                              alt={feature.title}
                              width={376}
                              height={200}
                            />
                          )}
                        </figure>
                      )}
                      <div className="space-y-1">
                        <h3 className="text-heading-6 sm:text-heading-5">{feature.title}</h3>
                        <p>{feature.description}</p>
                        <div className="mt-7 mb-1">
                          <LinkButton
                            href="/features"
                            className="btn dark:btn-transparent dark:hover:btn-accent btn-white btn-md hover:btn-secondary w-[90%] md:w-auto">
                            View more
                          </LinkButton>
                        </div>
                      </div>
                    </article>
                  )}
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeaturesV2;
