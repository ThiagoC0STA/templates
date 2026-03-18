"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ITestimonial, TestimonialData } from "@/constant/DesignAgency/testimonial";
interface TestimonialProps {
    data: TestimonialData;
}
const TestimonialSection:React.FC<TestimonialProps> = ({data:testimonialData}) => {
  return (
    <section className="testimonial-area-2">
      <div className="area-shape-1">
        <img src="/assets/imgs/shape/shape-41.webp" alt="shape" />
      </div>
      <div className="container">
        <div className="testimonial-area-2-inner section-spacing">
          <div className="section-header">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">
                {testimonialData?.subtitle}
              </span>
            </div>
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title">{testimonialData?.title}</h2>
              </div>
              <div className="text-wrapper">
                <p className="text">{testimonialData?.description}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-wrapper-box">
            <div className="testimonial-wrapper">
              <Swiper
                className="testimonial-2-active"
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={1}
                spaceBetween={100}
                speed={1800}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                pagination={{
                  el: ".testimonial-pagination",
                  type: "fraction",
                  clickable: true,
                  formatFractionCurrent: (number) => ("0" + number).slice(-2),
                  formatFractionTotal: (number) => ("0" + number).slice(-2),
                  renderFraction: (currentClass, totalClass) =>
                    `<span class="${currentClass}"></span> <span class="mid-line">/</span> <span class="${totalClass}"></span>`,
                }}
              >
                {testimonialData?.items?.map((item:ITestimonial, index:number) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item-2">
                      <div className="content">
                        <div className="text-wrapper">
                          <p className="text">&quot;{item?.text}&quot;</p>
                        </div>
                        <div className="author">
                          <div className="avatar">
                            <img
                              src={item?.image}
                              alt={item?.name || "client"}
                            />
                          </div>
                          <div className="meta">
                            <h3 className="name">{item?.name}</h3>
                            <span className="post">{item?.designation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slide-nav-wrapper">
                <div className="slide-nav">
                  <div
                    className="testimonial-button-prev slide-nav-button"
                    role="button"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    className="testimonial-button-next slide-nav-button"
                    role="button"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="testimonial-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
