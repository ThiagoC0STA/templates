import services1 from '@public/images/ns-img-144.png';
import services2 from '@public/images/ns-img-145.png';
import services3 from '@public/images/ns-img-146.png';
import services4 from '@public/images/ns-img-147.png';
import services5 from '@public/images/ns-img-148.png';
import services1Dark from '@public/images/ns-img-dark-100.png';
import services4Dark from '@public/images/ns-img-dark-101.png';
import services5Dark from '@public/images/ns-img-dark-102.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>What I can help you with</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[776px]">
              Whether you need a new visual identity, a high-performing website, or a design system, I offer creative
              services tailored to help your brand grow with clarity and confidence.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-[72px]">
          <div className="grid grid-cols-12 gap-y-8 sm:gap-8">
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-6 md:p-8">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Web design &amp; front-end development</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="w-full max-w-full overflow-hidden rounded-2xl sm:max-w-[345px]">
                      <Image src={services1} alt="services" className="h-full w-full object-cover dark:hidden" />
                      <Image
                        src={services1Dark}
                        alt="services"
                        className="hidden h-full w-full object-cover dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-6 md:p-8">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Ui/ux design for saas and products</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="w-full max-w-full sm:max-w-[345px]">
                      <Image src={services5} alt="services" className="h-full w-full object-cover dark:hidden" />
                      <Image
                        src={services5Dark}
                        alt="services"
                        className="hidden h-full w-full object-cover dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-6 md:p-8">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Brand identity design</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="w-full max-w-full sm:max-w-[345px]">
                      <Image src={services2} alt="services" className="h-full w-full object-cover" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-6 md:p-8">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Framer, webflow &amp; next.js development</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="w-full max-w-full overflow-hidden rounded-2xl sm:max-w-[345px]">
                      <Image src={services3} alt="services" className="h-full w-full object-cover" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.8}>
              <div className="col-span-12 lg:col-span-8">
                <div className="dark:bg-background-8 space-y-6 rounded-[20px] bg-white p-6 md:p-8">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Art direction &amp; creative consulting</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="w-full max-w-[784px] overflow-hidden rounded-2xl">
                      <Image src={services4} alt="services" className="h-full w-full object-cover dark:hidden" />
                      <Image
                        src={services4Dark}
                        alt="services"
                        className="hidden h-full w-full object-cover dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.9}>
          <div className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-3">
            <LinkButton
              href="/services"
              className="btn btn-secondary dark:btn-accent btn-md hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto">
              Explore services
            </LinkButton>
            <LinkButton
              href="/contact-us"
              className="btn hover:btn-secondary dark:btn-transparent btn-white btn-md dark:hover:btn-accent w-[90%] md:w-auto">
              Book a call
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
