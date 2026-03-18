import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-46',
    title: 'Identify patterns',
    description: 'Spot trends and behaviors hidden in your financial data.',
  },
  {
    id: 2,
    icon: 'ns-shape-44',
    title: 'Improve team performance',
    description: 'Spot trends and behaviors hidden in your financial data.',
  },
  {
    id: 3,
    icon: 'ns-shape-48',
    title: 'Accelerate growth with insights.',
    description: 'Make faster, data-backed moves that fuel business growth.',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-[90px] pb-[50px] sm:pt-[100px] md:pt-[130px] md:pb-[100px] xl:pt-[200px]">
        <div className="main-container">
          <div className="mb-11 space-y-3 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[828px]">
                Empower everyone to make data-driven decisions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[390px] sm:max-w-[450px] md:max-w-[600px]">
                NextSaaS offers a smarter approach to managing your digital assets by providing intuitive tools and
                expert guidance tailored to your needs.
              </p>
            </RevealAnimation>
          </div>
          <div className="mb-10 grid grid-cols-12 gap-y-6 md:gap-8 lg:mb-14 lg:gap-9">
            {servicesData.map((service, index) => {
              const colSpanClass =
                index === 2 ? 'col-span-12 lg:col-span-4 md:col-span-12' : 'col-span-12 lg:col-span-4 md:col-span-6';

              return (
                <RevealAnimation key={service.id} delay={0.3 + index * 0.1}>
                  <div className={colSpanClass}>
                    <div className="bg-background-2 dark:bg-background-5 space-y-4 rounded-[20px] p-6 sm:space-y-6 sm:p-8">
                      <div>
                        <span
                          className={`${service.icon} text-secondary dark:text-accent text-[40px] sm:text-[52px]`}></span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="sm:text-heading-5 text-heading-6 line-clamp-1">{service.title}</h3>
                        <p className="max-w-[273px]">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
          <RevealAnimation delay={0.6}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/pricing"
                className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md mx-auto w-[90%] md:mx-0 md:w-auto">
                Start your free trial today
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
