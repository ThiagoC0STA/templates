"use client";

import React, { useEffect } from "react";
import counterUp from "counterup2";
import {BrandData} from "@/constant/DigitalAgency/brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface BrandProps {
  data: BrandData;
}
const BrandSection:React.FC<BrandProps> = ({data:brandData}) => {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".t-counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            const value = el.dataset.value;
            const suffix = el.dataset.suffix || "";
            counterUp(el, {
              duration: 1500,
              delay: 16,
            });
            el.classList.add("is-visible");

            setTimeout(() => {
              el.innerText = value + suffix;
            }, 1600);
          }
        });
      },
      { threshold: 1 }
    );

    counters.forEach((el) => observer.observe(el));
    return () => counters.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="brand-area">
      <div className="container">
        <div className="brand-area-inner">
          <div className="section-header fade-anim" data-direction="left">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title">{brandData?.title}</h2>
              </div>
            </div>
            <div className="counter-text">
              <span
                className="t-counter brand-counter"
                data-value={brandData?.counter?.value}
                data-suffix={brandData?.counter?.suffix}
              >
                {brandData?.counter?.value}
                {brandData?.counter?.suffix}
              </span>
            </div>
          </div>

          <div className="section-content fade-anim" data-direction="right" data-delay="0.30">
            <div className="brands-wrapper-box">
              <div className="brands-wrapper">
                <Swiper
                  modules={[Autoplay]}
                  className="brand-slider-active"
                  slidesPerView="auto"
                  loop={true}
                  spaceBetween={0}
                  speed={5000}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                >
                  {brandData?.brands?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-item">
                        <img src={item?.img} alt={`brand-${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;