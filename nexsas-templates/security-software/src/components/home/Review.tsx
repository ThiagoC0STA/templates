import { cn } from '@/utils/cn';
import x from '@public/images/icons/x.svg';
import avatar4 from '@public/images/ns-avatar-4.png';
import avatar5 from '@public/images/ns-avatar-5.png';
import avatar6 from '@public/images/ns-avatar-6.png';
import gradient22 from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    name: 'Michael Smith',
    company: 'Urban Brew',
    review:
      'They captured every moment beautifully with creativity and professionalism. Their attention to detail and seamless editing exceeded our expectations. Highly recommend!',
    href: 'https://x.com/heystaticmania',
    image: avatar4,
  },
  {
    id: 2,
    name: 'William James',
    company: 'TechFlow Solutions',
    review:
      'Working with this team was a game-changer for our business. They understood our vision perfectly and executed it flawlessly, exceeding our expectations in every way.',
    href: 'https://x.com/heystaticmania',
    image: avatar5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Studios',
    review:
      "The level of creativity and technical expertise they brought to our project was outstanding. They delivered a solution that perfectly captured our brand's essence and vision.",
    href: 'https://x.com/heystaticmania',
    image: avatar6,
  },
];

const Review = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[75px] md:py-[100px] lg:py-[150px]">
      <div className="main-container">
        <div className="mb-[72px] text-center">
          <RevealAnimation delay={0.1}>
            <h2>Client words</h2>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.2}>
        <div className="relative">
          <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee className="cards-marquee-container">
            <div className="scroll-bar flex items-center gap-x-10">
              {data.map((item, index) => (
                <article
                  key={item.id}
                  className={cn(
                    'dark:bg-background-7 group hover:bg-secondary hover:dark:bg-background-8 relative min-w-[320px] cursor-pointer space-y-6 overflow-hidden rounded-[12px] bg-white p-6 backdrop-blur-[22px] transition-all duration-500 ease-in-out sm:min-w-[400px] md:p-4 lg:min-w-[722px] lg:space-y-10 lg:rounded-[20px] lg:p-14',
                    index === 0 && 'ml-10',
                  )}>
                  <div className="pointer-events-none absolute -top-[147%] -right-[56%] max-w-[500px] rotate-[295deg] opacity-0 blur-[10px] transition-all duration-500 ease-in-out select-none group-hover:opacity-100 lg:-top-[162%] lg:-right-[56%] lg:max-w-[723px]">
                    <Image src={gradient22} alt="gradient" className="size-full object-cover" />
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <figure className="size-16 transform overflow-hidden rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[102%] md:size-[84px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="size-full bg-linear-[156deg,#a585ff_32.92%,#A585FF_91%] object-cover"
                        />
                      </figure>
                      <div className="space-y-1">
                        <h3 className="text-tagline-2 group-hover:text-accent transform font-semibold transition-all duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {item.name}
                        </h3>
                        <p className="text-tagline-3 group-hover:text-accent/60 transform transition-all duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Michael Lee's Twitter"
                      href={item.href}
                      className="bg-background-3 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 hover:shadow-4 inline-flex h-11 w-[74px] items-center justify-center rounded-[360px] px-2.5 py-1 backdrop-blur-[15px] transition-all duration-500 ease-in-out hover:scale-110">
                      <Image src={x} alt="twitter" className="dark:invert" />
                    </Link>
                  </div>
                  <blockquote>
                    <p className="group-hover:text-accent/60 max-w-[530px] transform text-wrap transition-all duration-500 ease-in-out group-hover:translate-x-1">
                      {item.review}
                    </p>
                  </blockquote>
                </article>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Review;
