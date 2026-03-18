'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import reviews from '@/data/json/testimonials/testimonials.json';
import gradient9 from '@public/images/ns-img-501.png';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const GradientOverlay = () => {
  return (
    <div className="gradient-overlay pointer-events-none absolute -top-[180px] -left-[180px] -z-10 h-full w-full opacity-0 transition-opacity duration-300 select-none max-md:h-[300px] max-md:w-[350px] md:-top-[190px] md:-left-[190px] lg:-top-[150px] lg:-left-[150px] xl:-top-[220px] xl:-left-[220px]">
      <Image src={gradient9} alt="Decorative gradient background overlay" className="-rotate-[90deg]" />
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="bg-background-3 dark:bg-background-8 relative pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Customer Success</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">Real apps. Real results.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[490px] max-[426px]:max-w-[320px]">
              &quot;Real apps. Real results. &quot;Nextsaas delivered our entire platform ahead of schedule—flawless
              execution and real partnership.&quot;
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}>
              <div className="swiper-wrapper">
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className="swiper-slide">
                    <div className="bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-8 overflow-hidden rounded-[20px] p-8 sm:mx-0">
                      <GradientOverlay />
                      <figure className="dark:ring-background-5 relative inline-block size-14 overflow-hidden rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] ring-4 ring-white">
                        <Image
                          src={review.avatar}
                          height={100}
                          width={100}
                          quality={100}
                          alt="avatar"
                          className="max-w-full"
                        />
                      </figure>
                      <p className="text-secondary/60 dark:text-accent/60 review-text line-clamp-2">{review.quote}</p>
                      <div>
                        <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                          {review.name}
                        </p>
                        <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="text-center">
            <LinkButton
              href="/testimonial"
              className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white w-full sm:w-auto">
              View all reviews
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
