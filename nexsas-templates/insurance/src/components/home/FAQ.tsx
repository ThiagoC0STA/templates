import faqData from '@/data/json/faq/faq.json';
import gradient23 from '@public/images/ns-img-511.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import LinkButton from '../ui/button/LinkButton';

const FAQ = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-16 pb-16 md:pt-20 md:pb-[100px] lg:pt-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-8 space-y-3 text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <h2>Frequently Asked Questions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>Have questions? just ask</p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <div className="text-center lg:text-left">
                <LinkButton
                  href="/faq"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto">
                  Read more
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion
                  className="w-full max-w-[850px] space-y-4"
                  defaultValue="1"
                  enableScrollAnimation={true}
                  animationDelay={0.1}>
                  {faqData.map((item) => (
                    <AccordionItem
                      className="group dark:bg-background-5 border-stroke-4 dark:border-stroke-8 relative z-10 overflow-hidden rounded-[8px] border bg-white px-6"
                      key={item.id}
                      value={item.id.toString()}>
                      <figure className="pointer-events-none absolute -top-[150%] -right-[10%] -z-10 size-[708px] opacity-0 transition-opacity duration-300 select-none group-hover:opacity-100 sm:-top-[220%] sm:-right-[50%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%]">
                        <Image src={gradient23} alt="gradient" />
                      </figure>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                        className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                        value={item.id.toString()}
                        iconType="plus">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
