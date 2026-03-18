import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(0, 4);

const Feature = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-[url('/images/ns-img-527.png')] bg-cover bg-bottom bg-no-repeat py-20 md:py-[100px]">
        <div className="main-container">
          <div>
            <div className="mb-13 space-y-3 text-center md:mb-[70px]">
              <RevealAnimation delay={0.1}>
                <h2 className="text-accent">All-in-one wealth management</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-accent/60 mx-auto max-w-[472px]">
                  From trade execution to education, we provide everything you need to grow as a trader.
                </p>
              </RevealAnimation>
            </div>
            <div className="space-y-14">
              <div className="grid grid-cols-12 gap-y-5 md:gap-8">
                {data.map((feature, index) => (
                  <RevealAnimation key={feature.slug} delay={0.3 + index * 0.1}>
                    <div className="col-span-12 md:col-span-6">
                      <div className="space-y-6 rounded-[20px] bg-white p-6 duration-500 ease-in-out hover:-translate-y-2 lg:space-y-8 lg:p-8 dark:bg-black">
                        <div className="space-y-4 lg:space-y-6">
                          <div>
                            <span
                              className={cn(
                                'text-secondary dark:text-accent text-4xl lg:text-[52px]',
                                feature.icon,
                              )}></span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="lg:text-heading-5 text-heading-6">{feature.title}</h3>
                            <p className="line-clamp-2">{feature.description}</p>
                          </div>
                        </div>
                        <div>
                          <LinkButton
                            href={`/services/${feature.slug}`}
                            className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent mx-auto w-[90%] md:mx-0 md:w-auto">
                            View service
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              <RevealAnimation delay={0.7}>
                <div className="text-center">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-md btn-green hover:btn-secondary mx-auto w-[90%] border-0 md:mx-0 md:w-auto">
                    Talk to sales
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Feature;
