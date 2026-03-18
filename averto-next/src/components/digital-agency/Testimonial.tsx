"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { testimonialData } from "@/content/digital-agency/home/testimonial";

const Testimonial = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <li key={index}>
        <i className={`fas fa-star ${index < rating ? "" : "text-muted"}`}></i>
      </li>
    ));
  };

  return (
    <div className="testimonial-digital pt-150 pb-150">
      <div className="container container-mini">
        <div className="row">
          <div className="col-12">
            <div className="section__header-v12 text-center">
              <h2 className="h2 section__header-title-v12 fade_up_anim">
                {testimonialData.title}
              </h2>
              <p className="fade_up_anim" data-delay=".4">
                {testimonialData.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-100">
          <div className="col-12">
            <Swiper
              className="testimonial-digital__slider"
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={2300}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".testimonial-digital__slider-pagination",
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonialData.testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="testimonial-digital__item"
                >
                  <div className="testimonial-digital__item-content">
                    <ul className="custom-ul rating">
                      {renderStars(testimonial.rating)}
                    </ul>
                    <p>{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-digital__item-author">
                    <div className="author-thumb">
                      <Image
                        src={testimonial.authorAvatarSrc}
                        alt={testimonial.authorName}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="author-info">
                      <h5 className="h5">{testimonial.authorName}</h5>
                      <span>{testimonial.authorPosition}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="testimonial-digital__slider-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
