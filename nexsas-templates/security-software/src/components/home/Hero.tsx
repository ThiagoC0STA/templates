import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import totalSales from '@public/images/ns-img-266.png';
import satisfiedUser from '@public/images/ns-img-267.png';
import incomeChart from '@public/images/ns-img-268.png';
import balance from '@public/images/ns-img-269.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="pt-0 md:pt-[30px]">
      <div className="relative mx-auto max-h-[860px] overflow-hidden rounded-none bg-linear-[180deg,#a585ff_0%,#ffc2ac_100%] pt-[220px] pb-[190px] 2xl:max-w-[1860px] 2xl:rounded-[40px]">
        <RevealAnimation delay={0.3} duration={2} useSpring={true}>
          <figure className="lp:top-[50%] shadow-3 absolute top-[18%] left-7 -z-0 max-w-28 -translate-y-1/2 rotate-[-7deg] overflow-hidden rounded-2xl sm:left-10 sm:max-w-[150px] md:top-[23%] lg:max-w-[150px] xl:top-[55%] 2xl:left-24 2xl:max-w-[254px]">
            <Image src={totalSales} alt="Total Sales" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.4} duration={2} useSpring={true}>
          <figure className="shadow-2 absolute bottom-5 left-6 -z-0 max-h-[114px] max-w-[70px] rotate-[10deg] overflow-hidden rounded-2xl sm:bottom-14 md:left-[4%] md:max-w-[130px] lg:left-[13%] lg:max-w-[150px] xl:max-w-[143px]">
            <Image src={satisfiedUser} alt="Satisfied Users" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.3} duration={2} useSpring={true}>
          <figure className="shadow-2 absolute right-5 bottom-5 -z-0 max-h-[124px] max-w-[120px] rotate-[-7deg] overflow-hidden rounded-2xl sm:bottom-14 md:right-[3%] md:max-w-[180px] lg:right-[13%] lg:max-w-[200px] xl:max-w-[270px]">
            <Image src={incomeChart} alt="Income Chart" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.4} duration={2} useSpring={true}>
          <figure className="lp:top-[40%] absolute top-[12%] right-10 -z-0 max-h-[227px] max-w-[120px] rotate-[4deg] overflow-hidden rounded-2xl sm:max-w-[150px] md:top-[15%] md:max-w-[170px] xl:top-[45%] xl:right-[3%] 2xl:top-[35%] 2xl:right-24 2xl:max-w-[268px]">
            <Image src={balance} alt="Total Sales" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="relative z-10 space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-secondary-light inline-block">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="mx-auto max-w-[350px] space-y-2 min-[500px]:max-w-[450px] sm:max-w-[550px] md:max-w-[600px] md:space-y-4 lg:mx-0 lg:max-w-full">
            <RevealAnimation delay={0.2}>
              <h1 className="text-accent">Security &amp; performance solution</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent/60">
                Your all-in-one advanced protection for your devices &amp; digital privacy
              </p>
            </RevealAnimation>
            <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:flex-nowrap lg:gap-9">
              <RevealAnimation delay={0.4}>
                <li className="flex items-center gap-2">
                  <span className="bg-accent/20 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Complete cybersecurity suite </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-2">
                  <span className="bg-accent/20 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Boost performance &amp; speed </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-2">
                  <span className="bg-accent/20 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Protect your data &amp; privacy </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        <ul className="mt-8 mb-10 flex flex-col items-center justify-center gap-4 text-center sm:mb-16 sm:flex-row md:mt-14 md:mb-[100px]">
          <RevealAnimation delay={0.7} direction="left" offset={50}>
            <li className="w-full sm:w-auto">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-white-dark w-[85%] sm:w-auto">
                Free download
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.9} direction="left" offset={50}>
            <li className="w-full sm:w-auto">
              <LinkButton href="/pricing" className="btn btn-dark btn-xl hover:btn-secondary w-[85%] sm:w-auto">
                Get premium
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <div>
          <div className="mb-[100px] flex flex-row items-center justify-center gap-4 max-[425px]:flex-col max-[425px]:gap-2">
            <div className="flex -space-x-3.5">
              <RevealAnimation delay={0.7}>
                <figure>
                  <Image
                    className="bg-ns-green inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src={avatar1}
                    alt="Avatar 1"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure>
                  <Image
                    className="bg-ns-green inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src={avatar2}
                    alt="Avatar 2"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9}>
                <figure>
                  <Image
                    className="bg-ns-green inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src={avatar3}
                    alt="Avatar 3"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1}>
                <div className="text-secondary/80 bg-ns-green text-tagline-3 inline-flex size-10 items-center justify-center rounded-full font-medium ring-2 ring-white sm:size-12">
                  99+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={1.1}>
              <div className="max-[425px]:text-center">
                <p className="text-secondary text-tagline-2 dark:text-accent block text-left font-medium max-[425px]:text-center">
                  Trusted by 20k+
                </p>
                <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 block text-left font-medium max-[425px]:text-center">
                  Customers across the globe
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
