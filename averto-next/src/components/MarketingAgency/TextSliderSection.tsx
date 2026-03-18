"use client";
import Link from "next/link";
import { TextSliderData } from "@/constant/MarketingAgency/textSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
interface TextSliderProps {
  data: TextSliderData;
}
const TextSliderSection: React.FC<TextSliderProps> = ({
  data: textSliderData,
}) => {
  return (
    <section className="text-slider-area">
      <div className="text-slider-box">
        <div className="text-slider fade-anim" suppressHydrationWarning={true}>
          <Swiper
            modules={[Autoplay]}
            className="text-slider-active"
            slidesPerView="auto"
            loop={true}
            speed={10000}
            spaceBetween={0}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
          >
            {textSliderData?.slides?.map((slide) => (
              <SwiperSlide key={slide?.id}>
                <div className="text-slider-item">
                  <h2 className="title">
                    <img src={slide?.img} alt="shape" />
                    <Link href={slide?.href || "#"}>{slide?.text}</Link>
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TextSliderSection;
