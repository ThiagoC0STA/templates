import { DownArrowIcon, UpArrowIcon } from '@/icons';
import starEmojiImg from '@public/images/ns-img-203.png';
import visaCardImg from '@public/images/ns-img-204.png';
import gradientImg from '@public/images/ns-img-506.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const Features = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:gap-8 md:space-y-0">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 lg:col-span-7 xl:col-span-8">
              <div className="dark:border-background-9 relative overflow-hidden rounded-[20px] border-8 border-white">
                <RevealAnimation delay={0.2} direction="up" offset={200}>
                  <div className="pointer-events-none absolute -top-[80%] -right-[30%] -z-0 max-w-[560px] rotate-[274deg] select-none min-[400px]:-top-[105%] sm:-top-[110%] lg:-top-[90%] xl:-top-[80%]">
                    <Image src={gradientImg} alt="gradient" />
                  </div>
                </RevealAnimation>
                <div className="bg-background-3 dark:bg-background-6 h-full space-y-8 p-6 md:space-y-14 md:p-8">
                  <div className="relative z-10 space-y-2">
                    <span className="badge badge-green mb-3 md:mb-5">How it works</span>
                    <h2 className="text-secondary dark:text-accent md:max-w-[564px]">
                      Modern tools for real-life money management
                    </h2>
                    <p className="text-secondary/60 dark:text-accent/80 md:max-w-[480px]">
                      Modern tools simplify managing your money like never before. from clear, customizable budgets to
                      intelligent savings goals.
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/features"
                      className="btn btn-md btn-secondary hover:btn-primary dark:btn-transparent w-full md:w-auto">
                      Learn more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
              <div className="dark:border-background-9 bg-background-3 dark:bg-background-6 h-full space-y-6 rounded-[20px] rounded-br-[20px] rounded-bl-[20px] border-8 border-white px-4 py-6 md:px-7">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Crystal-clear budgeting</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[206px]">
                    Create, monitor, and adjust budgets with ease.
                  </p>
                </div>
                <div className="dark:bg-background-5 rounded-2xl bg-white p-6">
                  <div className="text-left">
                    <span className="text-tagline-2 text-secondary dark:text-accent font-normal">Balance</span>
                    <h3 className="text-heading-5 mt-2 mb-[30px] flex items-center lg:mb-4 xl:mb-[30px]">
                      $
                      <NumberAnimation number={48257} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-background-4 flex-1 space-y-2 rounded-xl p-4 text-left">
                      <div className="text-tagline-2 text-secondary flex items-center justify-start gap-2">
                        <span className="bg-ns-red flex size-[18px] items-center justify-center rounded-full p-1">
                          <DownArrowIcon className="dark:fill-background-5 size-[8px]" />
                        </span>
                        Income
                      </div>
                      <div className="dark:text-secondary flex items-center text-lg leading-[1.5] font-medium">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                    <div className="bg-secondary flex-1 space-y-2 rounded-xl p-4 text-left">
                      <div className="text-tagline-2 flex items-center justify-start gap-2 text-white">
                        <span className="bg-ns-green flex size-[18px] items-center justify-center rounded-full p-1">
                          <UpArrowIcon className="dark:fill-background-5 size-[9px]" />
                        </span>
                        Expenses
                      </div>
                      <div className="flex items-center text-lg leading-[1.5] font-medium text-white">
                        $
                        <NumberAnimation number={2321} speed={2000} interval={200} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="dark:border-background-9 bg-background-3 dark:bg-background-6 h-full space-y-6 rounded-[20px] rounded-br-[20px] rounded-bl-[20px] border-8 border-white px-4 py-6 md:px-7">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Smarter saving goals</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[276px]">
                    Set personal targets and watch your savings grow over time.
                  </p>
                </div>
                <div className="dark:bg-background-5 rounded-2xl bg-white p-6" aria-label="Tottal saving ">
                  <div className="text-left">
                    <span className="text-tagline-2 text-secondary dark:text-accent font-normal">Total saving</span>
                    <h3 className="total-saving text-heading-5 mt-2 mb-[30px]">$56,324</h3>
                  </div>
                  <div
                    data-progress-item=""
                    data-progress-value={88}
                    data-progress-duration="2.5"
                    className="bg-background-2 dark:bg-background-9 flex-1 space-y-2 rounded-xl p-4 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-tagline-1 dark:text-accent">May</span>
                      <span className="text-tagline-1 dark:text-accent flex items-center gap-1 font-medium">
                        $
                        <NumberAnimation number={56324} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </span>
                    </div>
                    <Progress />
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="dark:border-background-9 bg-background-3 dark:bg-background-6 h-full space-y-6 rounded-[20px] rounded-br-[20px] rounded-bl-[20px] border-8 border-white px-4 py-6 md:px-7">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Debt tracking</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[344px]">
                    Organize your loans and credit card payments with real-time progress updates.
                  </p>
                </div>
                <figure className="overflow-hidden rounded-2xl">
                  <Image src={visaCardImg} alt="Visa" className="h-full w-full object-cover" />
                </figure>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="dark:border-background-9 bg-background-3 dark:bg-background-6 h-full space-y-6 rounded-[20px] rounded-br-[20px] rounded-bl-[20px] border-8 border-white px-4 py-6 md:px-7">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Cash flow overview</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[310px]">
                    Get a visual breakdown of your income, bills, and spending patterns.
                  </p>
                </div>
                <div className="bg-background-2 dark:bg-background-5 relative flex items-center justify-center rounded-2xl py-[30px] md:py-5 lg:py-[30px]">
                  <figure>
                    <Image src={starEmojiImg} alt="Star emoji" />
                  </figure>
                  <div className="cash-flow-wrapper absolute top-1/2 -translate-x-[114%] -translate-y-[180%] -rotate-[24deg]">
                    <div className="text-heading-5 dark:text-secondary dark:bg-accent bg-secondary flex items-center gap-1 rounded-[31px] px-3.5 py-1 text-white">
                      <NumberAnimation number={90} speed={1800} interval={100} rooms={2} heightSpaceRatio={2.5} />%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
