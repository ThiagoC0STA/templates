import gradient15 from '@public/images/ns-img-507.png';
import gradient50 from '@public/images/ns-img-538.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-[100px] md:py-[150px]" aria-label="Call to Action">
      <div className="mx-auto max-w-[1440px]">
        <div className="dark:bg-background-6 relative overflow-hidden rounded-[30px] bg-white py-[76px]">
          <RevealAnimation delay={0.7} direction="left" offset={240}>
            <figure className="pointer-events-none absolute bottom-[-103px] left-[-120px] w-full max-w-[230px] select-none md:max-w-[300px] lg:max-w-[340px] xl:max-w-[386px]">
              <Image src={gradient15} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
          <div className="main-container">
            <div className="space-y-6">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-primary-light">Let&apos;s connect</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2>Ready to grow smarter?</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="mx-auto max-w-[558px] md:w-full">
                      Let&apos;s make your marketing budget work harder—not bigger. Book your strategy call today and
                      take the first step toward predictable growth.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.5}>
                <div className="cta-button text-center">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl">
                    Book your free strategy call
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* right bg  */}
          <RevealAnimation delay={0.7} direction="right" offset={240}>
            <figure className="pointer-events-none absolute top-[-152px] right-[-104px] w-full max-w-[290px] select-none md:top-[-195px] md:right-[-188px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[535px]">
              <Image src={gradient50} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
