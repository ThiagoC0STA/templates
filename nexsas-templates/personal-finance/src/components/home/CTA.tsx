import gradient8 from '@public/images/ns-img-500.png';
import gradient13 from '@public/images/ns-img-505.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTAV4 from '../shared/cta/CTAV4';

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 relative z-10 overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <CTAV4
        badgeText="Get started"
        ctaHeading="Let’s make something great"
        ctaDescription="Have a project in mind, or just want to say hello? I’m always open to discussing new ideas, partnerships, or opportunities to collaborate."
        ctaBtnText="Get started"
        inputFieldClass="px-[18px] h-12 outline-none py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 sm:min-w-[340px] sm:max-w-[340px] w-full bg-accent dark:bg-background-6 dark:border-stroke-7 dark:placeholder:text-accent/60 block focus:ring-[0.7px] focus-within:ring-primary-500 font-normal placeholder:font-normal"
        ctaCheckListData={[
          { id: '1', text: 'Freelance jobs' },
          { id: '2', text: 'Based in Brooklyn, working globally' },
        ]}
      />
      {/* cta bg img  */}
      <div>
        <RevealAnimation delay={0.6} direction="up" offset={100}>
          <figure className="pointer-events-none absolute -top-[33%] -left-[3%] -z-10 h-[300px] w-[200px] select-none md:-top-[35%] md:w-[300px] lg:-top-[60%] lg:-left-[13%] lg:h-[544px] lg:w-[584px] xl:-top-[50%] xl:-left-[10%]">
            <Image src={gradient8} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.6} direction="right" offset={100}>
          <figure className="pointer-events-none absolute -right-[5%] -bottom-[10%] -z-10 h-[200px] w-[200px] select-none lg:-right-[7%] lg:-bottom-[23%] lg:h-[435px] lg:w-[409px]">
            <Image src={gradient13} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
