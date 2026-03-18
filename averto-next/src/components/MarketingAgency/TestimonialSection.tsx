"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TestimonialData } from "@/constant/MarketingAgency/testimonial";

interface TestimonialProps {
    data: TestimonialData;
    type?:string;
}
const TestimonialsSection:React.FC<TestimonialProps> = ({type,data:testimonialData}) => {
  return (
    <section className="testimonial-area-5">
      <div className={`testimonial-area-5-inner ${type === "v2" ?"section-spacing":"section-spacing-top"}`}>
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {testimonialData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{testimonialData?.title}</h2>
              </div>
            </div>
            <div className="slide-nav fade-anim" suppressHydrationWarning={true}>
              <div className="testimonial-5-button-prev slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="testimonial-5-button-next slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="testimonial-wrapper">
              <Swiper
                className="testimonial-5-active"
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                speed={1800}
                loop={true}
                watchSlidesProgress={true}
                navigation={{
                  nextEl: ".testimonial-5-button-next",
                  prevEl: ".testimonial-5-button-prev",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1201: {
                    slidesPerView: 3,
                    centeredSlides: true,
                  },
                  1367: {
                    slidesPerView: 3,
                    centeredSlides: true,
                  },
                }}
              >
                {testimonialData?.testimonials?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item-5">
                      <div className="content">
                        <div className="text-wrapper">
                          <p className="text">{testimonial?.text}</p>
                        </div>
                        <div className="ratings">
                          {Array(testimonial?.rating || 5)
                            .fill(0)
                            .map((_, i) => (
                              <i className="fa-solid fa-star" key={i}></i>
                            ))}
                        </div>
                        <div className="author">
                          <div className="avatar">
                            <img
                              src={testimonial?.avatar}
                              alt={testimonial?.name || "Client"}
                            />
                          </div>
                          <div className="meta">
                            <h3 className="name">{testimonial?.name}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
