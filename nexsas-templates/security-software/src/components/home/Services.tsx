import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(0, 5);

const Services = () => {
  return (
    <section className="pt-[50px] pb-[75px] md:pt-[75px] md:pb-[100px] lg:pt-0 lg:pb-[150px] xl:pt-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2>Resources &amp; support</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[490px]">
              We&apos;re here to help you every step of the way. Whether you&apos;re looking for detailed documentation,
              community forums
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 justify-center gap-y-5 md:gap-8">
          {data?.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.3 + index * 0.1}>
              <div className={cn('col-span-12 flex md:col-span-6 xl:col-span-4', index === 3 && 'xl:col-start-3')}>
                <div className="bg-background-2 dark:bg-background-5 flex min-h-[200px] flex-1 flex-col items-center space-y-6 rounded-[20px] p-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                  <div className="mx-auto">
                    <span className={cn('text-secondary dark:text-accent text-[52px]', item.icon)} />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="sm:text-heading-5 text-heading-6">{item.title}</h3>
                    <p className="mx-auto line-clamp-2 max-w-[361px]">{item.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/services/${item.slug}`}
                      className="btn btn-white-v2 hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
                      View service
                    </LinkButton>
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

export default Services;
