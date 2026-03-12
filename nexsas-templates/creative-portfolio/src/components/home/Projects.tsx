import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuredProjects: ICaseStudy[] = getMarkDownData<ICaseStudy & { featured?: boolean; [key: string]: unknown }>(
  'src/data/case-study',
).slice(0, 4);

const Projects = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Selected work</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[680px]">
              Here’s a glimpse of projects that reflect my approach to design and development clean aesthetics, user
              first thinking, and brand-aligned strategy.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-14">
            <div className="col-span-12">
              <RevealAnimation delay={0.4}>
                <figure className="space-y-6">
                  <div className="group relative h-full max-h-[576px] w-full overflow-hidden rounded-[20px] xl:h-[576px]">
                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[0]?.thumbnail}
                      className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[0]?.slug}`}
                      className="btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform border-0 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[0]?.title}</h3>
                    <p className="line-clamp-2 max-w-[257px] text-left sm:text-right">
                      {featuredProjects[0]?.description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3}>
                <figure className="space-y-6">
                  <div className="group relative h-full w-full overflow-hidden rounded-[20px] md:max-h-[280px] lg:max-h-[400px] xl:h-[576px]">
                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[1].thumbnail}
                      className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[1].slug}`}
                      className="btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform border-0 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[1].title}</h3>
                    <p className="line-clamp-2 max-w-[257px] text-left sm:text-right">
                      {featuredProjects[1].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.4}>
                <figure className="space-y-6">
                  <div className="group relative h-full w-full overflow-hidden rounded-[20px] md:max-h-[280px] lg:max-h-[400px] xl:h-[576px]">
                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[2].thumbnail}
                      alt="portfolio"
                      className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[2].slug}`}
                      className="btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform border-0 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[2].title}</h3>
                    <p className="line-clamp-2 max-w-[257px] text-left sm:text-right">
                      {featuredProjects[2].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12">
              <RevealAnimation delay={0.5}>
                <figure className="space-y-6">
                  <div className="group relative h-full max-h-[576px] w-full overflow-hidden rounded-[20px] xl:h-[576px]">
                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[3].thumbnail}
                      className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[3].slug}`}
                      className="btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 absolute top-[55%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform border-0 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100 hover:scale-[102%]">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[3].title}</h3>
                    <p className="line-clamp-2 max-w-[257px] text-left sm:text-right">
                      {featuredProjects[3].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-xl dark:btn-transparent hover:btn-white dark:hover:btn-accent w-[90%] md:w-auto">
              See all projects
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
