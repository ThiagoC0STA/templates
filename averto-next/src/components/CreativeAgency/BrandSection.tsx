"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TestimonialsData } from "@/constant/CreativeAgency/brands";

interface BrandSectionProps {
  data: TestimonialsData;
}

const BrandSection:React.FC<BrandSectionProps> = ({data:testimonialsData}) => {
  return (
    <div className="brand-area-3">
      <div className="brand-area-3-inner">
        <div className="container full-hd">
          <div className="brands-wrapper-box">
            <div className="brands-wrapper fade-anim">
              <Swiper
                className="brand-slider-active"
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={0}
                speed={5000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                modules={[Autoplay]}
              >
                {testimonialsData.map((imgSrc:string, index:number) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "auto" }}
                  >
                    <div className="brand-item-3">
                      <img src={imgSrc} alt={`Brand ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandSection;
