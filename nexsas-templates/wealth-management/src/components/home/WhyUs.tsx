import faqData from '@/data/json/faq/faq.json';
import holdMobileImg from '@public/images/ns-img-206.png';
import gradient24Img from '@public/images/ns-img-512.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const WhyUs = () => {
  return (
    <section className="dark:bg-background-6 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-[70px] max-w-[620px] space-y-5 text-center">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Why choose NextSaaS?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                At NextSaaS, we combine innovation, reliability, and user-centric design to deliver powerful solutions
                that scale.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-14 md:gap-y-18 lg:grid-cols-2 lg:gap-x-[97px]">
          <RevealAnimation delay={0.3}>
            <div className="order-2 space-y-6 pt-[30px] lg:order-none">
              <Accordion
                className="w-full max-w-[850px] space-y-4"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="border-stroke-4 dark:border-stroke-6 rounded-[20px] border px-8"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4} offset={100}>
            <div className="bg-secondary dark:bg-background-7 item-end relative flex flex-col justify-end overflow-hidden rounded-[30px]">
              <RevealAnimation delay={0.4} direction="right" offset={100}>
                <figure className="pointer-events-none absolute top-[-20%] right-[-35%] w-full max-w-[1250px] rotate-[-19deg] select-none">
                  <Image src={gradient24Img} alt="gradient bg" className="size-full object-cover" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.5} offset={100}>
                <figure className="order-1 lg:order-none">
                  <Image src={holdMobileImg} alt="why us image" className="h-full w-full object-cover" />
                </figure>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
