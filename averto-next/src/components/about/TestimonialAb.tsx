"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { testimonialAbContent } from "@/content/about/testimonialAb";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <ul className="custom-ul rating">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <i
            className={`fa-solid fa-star ${index < rating ? "" : "text-muted"}`}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default function TestimonialAb() {
  return (
    <div className="testimonial-ab__area pt-150 pb-150 overflow-hidden">
      <div className="section__header">
        <div className="container container-custom">
          <div className="row g-3 justify-content-between align-items-end text-center text-md-start">
            <div className="col-lg-7 col-xl-7">
              <span
                className="section__header-sub-title fade_up_anim"
                data-delay=".2"
              >
                {testimonialAbContent.sectionSubTitle}
              </span>
              <h2
                className="h2 section__header-title fade_up_anim"
                data-delay=".4"
              >
                {testimonialAbContent.sectionTitle}
              </h2>
            </div>
            <div className="col-lg-5 col-xl-4 fade_up_anim" data-delay=".6">
              <p>{testimonialAbContent.sectionDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-custom pt-100">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          className="testimonial-ab__slider"
        >
          {testimonialAbContent.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-ab__item">
                <div className="slider-content">
                  <StarRating rating={testimonial.rating} />
                  <p>{testimonial.content}</p>
                </div>
                <div className="content-footer">
                  <div className="author">
                    <Image
                      src={testimonial.authorAvatar}
                      alt={testimonial.authorName}
                      width={60}
                      height={60}
                    />
                    <div className="author-info">
                      <span className="author-title">
                        {testimonial.authorName}
                      </span>
                      <span className="author-designation">
                        {testimonial.authorDesignation}
                      </span>
                    </div>
                  </div>
                  <div className="brand-image">
                    <Image
                      src={testimonial.brandImage}
                      alt="brand"
                      width={80}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
