'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

export const slides = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Risk Manager, Insurance Group',
    image: '/images/ns-avatar-6.png',
    text: 'NextSaaS gave us the clarity and control we needed to proactively manage risk. Their platform is intuitive and powerful.',
  },
  {
    id: 2,
    name: 'Michael Anderson',
    position: 'CTO, Tech Solutions Inc',
    image: '/images/ns-avatar-1.png',
    text: 'With NextSaaS, we reduced compliance headaches and improved our audit readiness. The support team is fantastic!',
  },
  {
    id: 3,
    name: 'John Smith',
    position: 'Chief Risk Officer, FinEdge',
    image: '/images/ns-avatar-2.png',
    text: 'We now have a single source of truth for risk data. NextSaaS made collaboration between departments effortless.',
  },
];

const FadeTestimonial = () => {
  useEffect(() => {
    // Add custom CSS for enhanced fade effect
    const style = document.createElement('style');
    style.textContent = `
      .reviews-fade-in-swiper .swiper-slide {
        transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out;
        opacity: 0;
        transform: scale(0.6);
        filter: blur(7px);
      }
      .reviews-fade-in-swiper .swiper-slide-active {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
      }
      .reviews-fade-in-swiper .swiper-slide-prev,
      .reviews-fade-in-swiper .swiper-slide-next {
        opacity: 0;
        transform: scale(0.6);
        filter: blur(7px);
      }
      .reviews-fade-in-swiper .swiper-slide .review-text,
      .reviews-fade-in-swiper .swiper-slide .review-name,
      .reviews-fade-in-swiper .swiper-slide .review-title,
      .reviews-fade-in-swiper .swiper-slide .avatar-ring {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      }
      .reviews-fade-in-swiper .swiper-slide-active .review-text,
      .reviews-fade-in-swiper .swiper-slide-active .review-name,
      .reviews-fade-in-swiper .swiper-slide-active .review-title,
      .reviews-fade-in-swiper .swiper-slide-active .avatar-ring {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);
  const handleSlideChangeTransitionStart = (swiper: SwiperType) => {
    // Clear all animations and reset content immediately
    const slides = swiper.slides;
    slides.forEach((slide: Element) => {
      const elements = slide.querySelectorAll('.review-text, .review-name, .review-title, .avatar-ring');
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.animation = 'none';
        (el as HTMLElement).style.transition = 'none';
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(30px)';
      });
    });
  };
  const handleSlideChangeTransitionEnd = (swiper: SwiperType) => {
    // Animate content after slide transition is complete
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const elements = activeSlide.querySelectorAll('.review-text, .review-name, .review-title, .avatar-ring');

      // Reset transition property
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });

      // Stagger the animations
      elements.forEach((el: Element, index: number) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
  };
  return (
    <RevealAnimation delay={0.2}>
      <div className="relative">
        <Swiper
          className="reviews-fade-in-swiper"
          effect="fade"
          slidesPerView={1}
          spaceBetween={70}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Autoplay, Navigation, EffectFade, Pagination]}
          speed={1000}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          navigation={{
            nextEl: '.reviews-fade-in-next',
            prevEl: '.reviews-fade-in-prev',
          }}
          pagination={{
            el: '.reviews-fade-in-pagination',
            clickable: true,
            dynamicBullets: true,
          }}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}>
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="dark:bg-background-8 relative min-h-[470px] w-full rounded-4xl bg-white">
                  <div className="absolute -top-14 left-1/2 mx-auto w-full max-w-[464px] -translate-x-1/2 px-6 text-center sm:px-0">
                    <figure className="avatar-ring bg-background-1 dark:bg-background-8 dark:border-background-5 mx-auto mb-4 size-28 overflow-hidden rounded-full border-4 border-white sm:mb-[42px]">
                      <Image
                        src={slide.image}
                        width={112}
                        height={112}
                        alt="avatar"
                        className="size-full object-cover"
                      />
                    </figure>
                    <p className="review-text text-tagline-1 text-secondary dark:text-accent leading-[27px] font-medium md:text-lg">
                      &quot;{slide.text}&quot;
                    </p>
                    <div className="bg-stroke-2 dark:bg-stroke-6 mx-auto my-7 h-px w-full origin-center" />
                    <div>
                      <h3 className="review-name text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                        {slide.name}
                      </h3>
                      <p className="review-title text-tagline-2">{slide.position}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
                    <LinkButton
                      href="/testimonial-01"
                      className="btn hover:btn-primary dark:btn-transparent btn-secondary btn-md">
                      Read success stories
                    </LinkButton>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          {/* Navigation buttons */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between px-4 sm:px-16">
            <button className="reviews-fade-in-prev pointer-events-auto" aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                <path
                  d="M14.1875 17L9.1875 12L14.1875 7"
                  className="dark:stroke-accent stroke-[#292929]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="reviews-fade-in-next pointer-events-auto" aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                <path
                  d="M10.8125 17L15.8125 12L10.8125 7"
                  className="dark:stroke-accent stroke-[#292929]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Pagination dots */}
          <div className="reviews-fade-in-pagination" />
        </Swiper>
      </div>
    </RevealAnimation>
  );
};

export default FadeTestimonial;
