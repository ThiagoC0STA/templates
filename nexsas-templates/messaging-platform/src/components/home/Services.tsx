import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
const servicesData = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(6, 12);

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px] lg:text-left">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Our Services</span>
          </RevealAnimation>
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <RevealAnimation delay={0.3}>
              <h2>Explore our solutions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[518px] text-center lg:mx-0 lg:text-left">
                Explore the ways our innovative solutions significantly improve communication and boost overall
                efficiency in your organization.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          {servicesData.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.5 + index * 0.1}>
              <div
                className={cn(
                  'dark:bg-background-6 col-span-12 flex flex-col items-start space-y-6 rounded-[20px] bg-white px-6 py-8 sm:col-span-6',
                  index >= 3 ? 'lg:col-span-6' : 'lg:col-span-4',
                )}>
                <span className={cn('text-secondary dark:text-accent text-[52px]', item.icon)}> </span>
                <div>
                  <h5 className="max-md:text-heading-6 mb-2">{item.title}</h5>
                  <p className="">{item.description}</p>
                </div>
                <LinkButton
                  href={`/services/${item.slug}`}
                  className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent mx-auto inline-block w-[90%] md:mx-0 md:w-auto">
                  Read more
                </LinkButton>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={1}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/services"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
              More services
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
