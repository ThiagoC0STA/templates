import authorAvatarBg from '@public/images/ns-author-avatar-bg.png';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import avatar7 from '@public/images/ns-avatar-7.png';
import progressTracking from '@public/images/ns-img-400.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Feature = () => {
  return (
    <section className="relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-8">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <div className="mb-8 space-y-5 text-left sm:text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2">Feature</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Smarter risk insights</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>Track key indicators, spot trends early, and turn data into action.</p>
                </RevealAnimation>
              </div>
            </div>
            <ul className="mb-8 flex list-none flex-row flex-wrap justify-start gap-4 sm:justify-center md:flex-nowrap lg:mb-14 lg:flex-col lg:justify-start">
              <RevealAnimation delay={0.4}>
                <li className="flex items-center gap-3.5">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0">
                    <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                    <path
                      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                  <span className="text-tagline-1 dark:text-accent font-normal text-black">
                    Identify hidden threats
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-3.5">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0">
                    <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                    <path
                      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                  <span className="text-tagline-1 dark:text-accent font-normal text-black">Strengthen compliance</span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-3.5">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0">
                    <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                    <path
                      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                  <span className="text-tagline-1 dark:text-accent font-normal text-black">
                    Measure &amp; monitor in real-time
                  </span>
                </li>
              </RevealAnimation>
            </ul>
            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/features"
                  className="btn btn-xl hover:btn-primary dark:btn-accent btn-white mx-auto w-[85%] md:w-auto">
                  See how our analytics work
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-background-2 dark:bg-background-5 mx-auto max-w-max rounded-[20px] p-5 lg:mx-0 lg:p-8 xl:p-[50px]">
              <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-2.5">
                <RevealAnimation delay={0.3} direction="up" offset={100}>
                  <div className="dark:bg-background-8 w-full max-w-full rounded-2xl bg-white p-6 sm:max-w-[310px]">
                    <p className="lg:text-heading-5 text-heading-6 text-secondary dark:text-accent mb-4">
                      Task <br />
                      management
                    </p>
                    <div className="mb-7 flex items-center gap-4">
                      <figure className="relative inline-block size-10 shrink-0 overflow-hidden rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-4 ring-white lg:size-14 dark:ring-black">
                        <Image src={avatar7} alt="avatar" className="max-w-full" />
                        <Image src={authorAvatarBg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                      </figure>
                      <div>
                        <p className="lp:text-heading-5 text-tagline-1 text-secondary dark:text-accent line-clamp-1 text-nowrap">
                          Curious george
                        </p>
                        <p className="lp:text-tagline-1 text-tagline-3 line-clamp-1 text-nowrap">UI UX designer</p>
                      </div>
                    </div>
                    <div className="bg-secondary/10 dark:bg-accent/10 mb-7 h-px w-full items-center" />
                    <div className="item-center flex justify-between sm:mb-5">
                      <p className="lg:text-tagline-1 text-tagline-3">1 days Ago</p>
                      <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.6263 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                          fill=""
                          className="fill-secondary dark:fill-accent"
                        />
                      </svg>
                    </div>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.3} offset={100}>
                  <div className="dark:bg-background-6 w-full max-w-full rounded-2xl bg-white p-6 text-center sm:max-w-[228px] sm:text-left">
                    <p className="lg:text-heading-5 text-heading-6 text-secondary dark:text-accent mb-4">
                      Progress Tracking
                    </p>
                    <figure className="mx-auto max-w-[180px] sm:mx-0">
                      <Image src={progressTracking} alt="feature" className="w-full" />
                    </figure>
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4} direction="left" offset={100}>
                <div className="item-center bg-secondary dark:bg-background-6 relative z-10 mt-4 flex max-w-[420px] justify-between gap-4 rounded-2xl p-6">
                  <div className="flex cursor-pointer -space-x-3.5">
                    <Image
                      className="ring-ns-yellow inline-block size-10 shrink-0 rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-4 lg:size-14"
                      src={avatar1}
                      alt="Avatar 1"
                    />
                    <Image
                      className="ring-ns-yellow inline-block size-10 shrink-0 rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-4 lg:size-14"
                      src={avatar2}
                      alt="Avatar 2"
                    />
                    <Image
                      className="ring-ns-yellow inline-block size-10 shrink-0 rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-4 lg:size-14"
                      src={avatar3}
                      alt="Avatar 3"
                    />
                  </div>
                  <div>
                    <p className="text-accent lg:text-tagline-1 text-tagline-2 mb-1">Mischievous</p>
                    <p className="text-accent/60 lg:text-tagline-1 text-tagline-2">UI UX designer</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
