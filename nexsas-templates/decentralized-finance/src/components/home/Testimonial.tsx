'use client';
import reviews from '@/data/json/testimonials/testimonials.json';
import gradient9 from '@public/images/ns-img-501.png';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[80px] md:py-[100px] lg:py-[150px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2>What our users say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[472px]">
              &quot;DeFi solutions launched our complete financial ecosystem ahead of time—seamless implementation and
              true collaboration.&quot;
            </p>
          </RevealAnimation>
        </div>

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
                  <div className="bg-background-2 dark:bg-background-5 relative z-0 flex flex-col gap-y-6 overflow-hidden rounded-[20px] p-8">
                    <div className="gradient-overlay pointer-events-none absolute -top-[180px] -left-[180px] -z-10 h-full w-full opacity-0 transition-opacity duration-300 select-none max-md:h-[300px] max-md:w-[350px] md:-top-[190px] md:-left-[190px] lg:-top-[150px] lg:-left-[150px] xl:-top-[220px] xl:-left-[220px]">
                      <Image src={gradient9} alt="Decorative gradient background overlay" className="-rotate-[90deg]" />
                    </div>
                    <figure className="relative inline-block size-14 overflow-hidden rounded-full bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%]">
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
      </div>
    </section>
  );
};

export default Testimonial;
