"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import {
  testimonialSectionContent,
  testimonialData,
} from "@/constant/DigitalAgency/testimonial";

interface TestimonialSectionProps {
  className?: string;
  pageService?: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  className: cls,
  pageService,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section
      className={`testimonial-area ${cls} ${pageService ? "page-service" : ""}`}
    >
      <div
        className={`testimonial-area-inner ${
          cls ? "section-spacing" : "section-spacing-top"
        } ${pageService ? "section-spacing" : ""}`}
      >
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {testimonialSectionContent?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  {testimonialSectionContent?.title}
                </h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <a
                  className="t-btn t-btn-circle"
                  href={testimonialSectionContent?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a
                  className="t-btn t-btn-primary"
                  href={testimonialSectionContent?.buttonLink}
                >
                  {testimonialSectionContent?.buttonText}
                </a>
                <a
                  className="t-btn t-btn-circle"
                  href={testimonialSectionContent?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <div className="container">
            <div className="testimonial-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="slide-nav">
                <div className="testimonial-button-prev slide-nav-button cursor-pointer">
                  <img
                    src={testimonialSectionContent?.prevButtonImage}
                    alt="Prev"
                  />
                </div>
                <div className="testimonial-button-next slide-nav-button cursor-pointer">
                  <img
                    src={testimonialSectionContent?.nextButtonImage}
                    alt="Next"
                  />
                </div>
              </div>

              {/* Main Testimonial Swiper */}
              <Swiper
                loop={true}
                spaceBetween={30}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper?.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs]}
                className="testimonial-content-active"
              >
                {testimonialData?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item-1">
                      <div className="content">
                        <div className="text-wrapper">
                          <p className="text">{testimonial?.quote}</p>
                        </div>
                        <div className="author">
                          <div className="meta">
                            <h3 className="name has-left-line">
                              {testimonial?.author}
                            </h3>
                            <span className="post">
                              {testimonial?.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper for Navigation */}
              <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                breakpoints={{
                  768: {
                    direction: "vertical",
                  },
                }}
                modules={[Thumbs]}
                className="testimonial-nav-active"
              >
                {testimonialData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="avatar cursor-pointer">
                      <img src={testimonial?.image} alt={testimonial?.author} />
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

export default TestimonialSection;
