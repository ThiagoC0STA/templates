"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BrandSliderProps } from '@/types/marketing-agency/hero';

const BrandSlider = ({ brands }: BrandSliderProps) => {
  return (
    <div className="swiper brand__slider">
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 1,
        }}
        loop={true}
        slidesPerView="auto"
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            spaceBetween: 50,
          },
          992: {
            spaceBetween: 70,
          },
        }}
        className="swiper-wrapper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-box">
              <Image 
                src={brand.image} 
                alt={brand.alt}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
        {brands.map((brand) => (
          <SwiperSlide key={`${brand.id}-duplicate`}>
            <div className="brand-box">
              <Image 
                src={brand.image} 
                alt={brand.alt}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
