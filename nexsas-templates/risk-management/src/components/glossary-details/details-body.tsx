import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DetailsBody = () => {
  return (
    <section className="pb-14 md:pb-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-3 dark:bg-background-8 mx-auto max-w-[950px] space-y-6 rounded-4xl p-9 md:p-14">
            <RevealAnimation delay={0.2}>
              <div className="flex items-center gap-x-3">
                <p className="text-secondary dark:text-accent flex items-center gap-x-1 font-medium">
                  <Link href="/glossary">Glossary</Link>
                  <span className="flex size-[22px] shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="stroke-secondary dark:stroke-accent">
                      <path d="M7.5 15L12.5 10L7.5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </p>
                <p>What is A/B testing?</p>
              </div>
            </RevealAnimation>
            <div className="space-y-2">
              <RevealAnimation delay={0.3}>
                <h3 className="text-heading-5 font-normal">What is A/B Testing?</h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  A/B testing, also known as split testing, is a method used to compare two versions of a webpage,
                  email, or feature to determine which one performs better based on user behavior. In this process,
                  users are randomly shown either version A (the control) or version B (the variation), and their
                  interactions—such as clicks, <br />
                  conversions, or engagement—are measured. By analyzing the data collected, teams can <br />
                  identify which version drives better results and make informed decisions to optimize user experience,
                  boost performance, and achieve business goals more effectively.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DetailsBody;
