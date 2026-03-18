"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {BrandData} from "@/constant/DesignAgency/brand";

interface BrandSectionProps {
  type?: string;
  brandSix?: boolean;
  data:BrandData;
}

const BrandSection:React.FC<BrandSectionProps> = ({type,brandSix,data:brandData}) => {
  return (
    <section className={`${brandSix ? 'brand-area-6' : 'brand-area-2'}`}>
      <div className="container">
        <div className={`${type === "v2" ? "section-spacing" : "section-spacing-top" } ${brandSix ? 'brand-area-6-inner' :'brand-area-2-inner' }`}>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper fade-anim" suppressHydrationWarning={true}>
                <h2 className="section-title">{brandData?.title}</h2>
              </div>
            </div>
          </div>

          <div className="brands-wrapper-box">
            <div className="brands-wrapper fade-anim" suppressHydrationWarning={true}>
              <Swiper
                modules={[Autoplay]}
                className="brand-slider-active"
                slidesPerView={"auto"}
                loop={true}
                spaceBetween={0}
                speed={5000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
              >
                {brandData?.brands?.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <div className="brand-item-2">
                      <img src={brand?.image} alt={`brand-${index}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
