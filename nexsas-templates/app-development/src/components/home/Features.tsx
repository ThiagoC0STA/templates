import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuredProjects: ICaseStudy[] = getMarkDownData<ICaseStudy & { [key: string]: unknown }>('src/data/case-study')
  .filter((project) => project.showHomePage === true)
  .slice(0, 3);

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="mx-5 max-w-[1440px] sm:mx-auto">
        <div className="bg-background-3 dark:bg-background-7 rounded-[30px] py-16 md:py-[100px]">
          <div className="main-container">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-primary-light inline-block">Featured projects</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2>Success stories from our clients</h2>
              </RevealAnimation>
            </div>

            <div className="mt-[70px] grid grid-cols-12 gap-y-14 sm:gap-x-8">
              <RevealAnimation delay={0.4}>
                <div className="col-span-12">
                  <figure className="space-y-6">
                    <div className="group relative h-[576px] w-full overflow-hidden rounded-[20px]">
                      <div className="absolute inset-0 z-10 bg-black/70 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[1].thumbnail}
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                        alt="portfolio"
                        width={1290}
                        priority
                        height={570}
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[1].slug}`}
                        className="btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center md:gap-4">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[1].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[1].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="col-span-12 lg:col-span-6">
                  <figure className="space-y-6">
                    <div className="group relative h-[576px] w-full overflow-hidden rounded-[20px]">
                      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[2].thumbnail}
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                        alt="portfolio"
                        fill
                        priority
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[2].slug}`}
                        className="btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center md:gap-4">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[2].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[2].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="col-span-12 lg:col-span-6">
                  <figure className="space-y-6">
                    <div className="group relative h-[576px] w-full overflow-hidden rounded-[20px]">
                      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[0].thumbnail}
                        alt="portfolio"
                        fill
                        priority
                        className="dark:bg-background-9 bg-background-1 h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[0].slug}`}
                        className="btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center md:gap-4">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[0].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[0].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 mt-6 justify-self-center max-md:w-full max-md:text-center">
                  <LinkButton
                    href="/case-study"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl mx-auto block w-[90%] md:inline-block md:w-auto">
                    View portfolio
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
