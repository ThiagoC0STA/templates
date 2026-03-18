"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type SwiperType from "swiper";

import {TestimonialData} from "@/constant/CreativeAgency/testimonial";
interface TestimonialProps {
  data:TestimonialData[];
  type?:string;
}
const TestimonialSlider:React.FC<TestimonialProps> = ({type,data:testimonialData}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="testimonial-area-3">
      <div className="container">
        <div className={`testimonial-area-3-inner ${type === "v2"?"section-spacing-bottom":"section-spacing"}`}>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">( Our Testimonials )</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">Voices of Our Clients</h2>
              </div>
            </div>
            <div className="slide-nav fade-anim">
              <div
                className="testimonial-3-button-prev slide-nav-button"
                role="button"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div
                className="testimonial-3-button-next slide-nav-button"
                role="button"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          {/* Swiper Sliders */}
          <div className="testimonial-wrapper-box fade-anim">
            <div className="testimonial-wrapper">
              {/* Main Content Slider */}
              <Swiper
                spaceBetween={30}
                loop={true}
                navigation={{
                  nextEl: ".testimonial-3-button-next",
                  prevEl: ".testimonial-3-button-prev",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs]}
                className="testimonial-3-content-active"
              >
                {testimonialData?.map((testimonial:TestimonialData, index:number) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item-3">
                      <div className="content">
                        <div className="text-wrapper">
                          <div className="icon">
                            <img
                              src="/assets/imgs/shape/shape-51.webp"
                              alt="shape"
                            />
                          </div>
                          <p className="text">{testimonial.text}</p>
                        </div>
                        <div className="author">
                          <div className="meta">
                            <h3 className="name has-left-line">
                              {testimonial.name}
                            </h3>
                            <span className="post">{testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnails Slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                direction="horizontal"
                breakpoints={{
                  768: {
                    direction: "vertical",
                  },
                }}
                modules={[FreeMode, Thumbs]}
                className="testimonial-3-nav-active"
              >
                {testimonialData?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="avatar" role="button">
                      <img src={testimonial.avatar} alt={testimonial.name} />
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
export default TestimonialSlider;
