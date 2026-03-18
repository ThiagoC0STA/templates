import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data: IService[] = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(5, 10);

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our services</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">All-in-one wealth management</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[520px]">Manage your money with guidance that evolves with your goals.</p>
            </RevealAnimation>
          </div>
        </div>
        {/* Services Items */}
        <div className="mb-14 grid grid-cols-12 max-md:space-y-8 md:gap-8">
          {data?.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.4 + index * 0.1}>
              <Link
                href={`/our-services/${item?.slug}`}
                className={cn(
                  'border-stroke-4 dark:bg-background-5 dark:border-stroke-6 col-span-12 block space-y-6 rounded-[20px] border bg-white px-8 py-8 md:col-span-6 lg:col-span-4 xl:py-13',
                  index >= 3 && 'col-span-12 md:col-span-6 lg:col-span-6',
                )}>
                <div>
                  <span className={cn('text-secondary dark:text-accent text-[52px]', item?.icon)} />
                </div>
                <div className="space-y-2">
                  <h5>{item?.title}</h5>
                  <p className="line-clamp-2">{item?.description}</p>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.9}>
          <div className="text-center">
            <LinkButton
              href="/services"
              className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md inline-block">
              Start managing my wealth
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
