import faqData from '@/data/json/faq/faq.json';
import { ClockIcon, MessageIcon, UserIcon } from '@/icons';
import avatar10 from '@public/images/ns-avatar-10.png';
import avatar11 from '@public/images/ns-avatar-11.png';
import avatar9 from '@public/images/ns-avatar-9.png';
import faqThumbnail from '@public/images/ns-img-111.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 overflow-hidden pt-14 pb-28 md:pt-16 md:pb-32 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div className="flex-1 space-y-10 lg:space-y-14">
            <div className="space-y-3.5 md:space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent max-w-full md:max-w-[429px]">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>
            {/* faq  */}
            <RevealAnimation delay={0.3}>
              <Accordion
                className="w-full max-w-[576px] space-y-2"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="bg-background-1 dark:bg-background-6 w-full rounded-[20px] px-6"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left text-tagline-1 font-medium text-secondary dark:text-accent"
                      className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>
          </div>
          {/* faq image */}
          <RevealAnimation delay={0.4} offset={70}>
            <figure className="relative flex flex-1 justify-end">
              <Image src={faqThumbnail} alt="Business agency services illustration" />
              <div className="absolute right-[7%] bottom-9">
                <RevealAnimation delay={0.5} offset={50} rotation={14} duration={1} direction="right">
                  <article className="relative opacity-0">
                    <div className="shadow-4 bg-background-1 dark:bg-background-9 border-stroke-1 dark:border-stroke-8 marketing-hero-asset-inner max-h-[188px] min-h-[188px] max-w-[250px] min-w-[250px] rounded-xl border border-dashed md:max-w-[302px] md:min-w-[302px]" />
                    <div className="bg-background-1 dark:bg-background-6 shadow-4 marketing-hero-asset-content absolute inset-0 max-h-[188px] min-h-[188px] max-w-[250px] min-w-[250px] -rotate-[10deg] space-y-4 rounded-xl p-6 md:max-w-[302px] md:min-w-[302px]">
                      <div>
                        <h2 className="text-xl leading-[1.5] font-normal">E-learning website</h2>
                        <p className="text-tagline-3 flex items-center gap-1">
                          <span aria-hidden="true">
                            <ClockIcon />
                          </span>
                          15 january 2025
                        </p>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="text-tagline-3 bg-ns-yellow rounded-[4px] px-4 py-1"
                          aria-label="View design category">
                          Design
                        </Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-1" aria-label="Team members">
                          <Image
                            className="inline-block size-6 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] object-cover object-center ring-[3px] ring-white"
                            src={avatar9}
                            alt="Team member 1"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                          <Image
                            className="obje inline-block size-6 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-[3px] ring-white"
                            src={avatar10}
                            alt="Team member 2"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                          <Image
                            className="obje relative z-0 inline-block size-6 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-[3px] ring-white"
                            src={avatar11}
                            alt="Team member 3"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="flex items-center gap-1">
                            <span aria-hidden="true">
                              <UserIcon />
                            </span>
                            <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">5</span>
                          </p>
                          <p className="flex items-center gap-1">
                            <span aria-hidden="true">
                              <MessageIcon />
                            </span>
                            <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">7</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealAnimation>
              </div>
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
