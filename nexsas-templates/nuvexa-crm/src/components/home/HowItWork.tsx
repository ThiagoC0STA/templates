import { CheckIcon } from '@/icons';
import roundImageImg from '@public/images/ns-img-73.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';
import LinkButton from '../ui/button/LinkButton';

const teamList = [
  { id: 1, label: 'Sales Teams' },
  { id: 2, label: 'Marketing Teams' },
  { id: 3, label: 'Customer Support Teams' },
  { id: 4, label: 'Small Businesses & Enterprises' },
];

const HowItWork = () => {
  return (
    <section
      className="bg-background-2 dark:bg-background-5 overflow-hidden pt-[100px] pb-[200px]"
      aria-label="Who uses NextSaaS CRM">
      <div className="main-container">
        <div className="flex flex-col items-center gap-[100px] lg:flex-row">
          {/* left img  */}
          <div className="relative w-full max-w-[490px] xl:max-w-[595px]">
            <RevealAnimation delay={0.1} offset={100}>
              <figure>
                <Image src={roundImageImg} alt="Finance Hero" className="h-auto w-full lg:max-w-[450px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3} offset={100} direction="right">
              <figure className="shadow-1 dark:bg-background-6 absolute right-0 bottom-24 max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 overflow-hidden rounded-[12px] bg-white p-4">
                <figcaption className="flex justify-between gap-2">
                  <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                  <span className="text-secondary dark:text-accent flex items-center gap-1 text-lg leading-[1.5] font-medium">
                    $
                    <NumberAnimation number={53224} speed={1000} interval={180} rooms={5} heightSpaceRatio={2.5} />
                  </span>
                </figcaption>
                <Progress />
              </figure>
            </RevealAnimation>
          </div>
          {/* right side content  */}
          <div className="mx-auto flex max-w-[595px] flex-col items-start lg:max-w-max">
            <RevealAnimation delay={0.4}>
              <h2 className="mb-3">Who uses NextSaaS CRM</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="mb-6">
                Take control of your finances with us and experience the confidence that comes with smart money
                management. Whether you&apos;re looking to budget better
              </p>
            </RevealAnimation>
            <ul className="mb-14 space-y-2.5">
              {teamList.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-4">
                    <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                      <CheckIcon />
                    </span>
                    <span className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.label}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/about"
                  className="btn btn-secondary btn-xl hover:btn-primary dark:btn-accent"
                  aria-label="Learn how NextSaaS CRM works">
                  How it works
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
