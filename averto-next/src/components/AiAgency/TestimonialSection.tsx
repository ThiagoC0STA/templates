"use client";

import { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TestimonialData } from "@/constant/AiAgency/testimonial";

interface TestimonialSectionProps {
  data: TestimonialData;
  type?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  data: testimonialData,
  type
}) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="testimonial-area-4">
      <div className="container">
        <div className={`testimonial-area-4-inner ${type === "v2"?"section-spacing":"section-spacing-top"}`}>
          <div className="section-content-wrapper">
            <div className="section-content fade-anim" data-direction="left" suppressHydrationWarning={true}>
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">
                    {testimonialData?.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{testimonialData?.title}</h2>
                </div>
              </div>

              <div className="testimonial-reviews">
                <span className="number">{testimonialData?.reviewCount}</span>
                <p className="text">
                  <span className="ratings">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </span>{" "}
                  {testimonialData?.ratingText}
                </p>
              </div>
            </div>

            <div className="testimonial-wrapper-box">
              <div className="testimonial-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="slide-nav-wrapper">
                  <div className="slide-nav">
                    <div
                      className="testimonial-4-button-prev slide-nav-button"
                      role="button"
                      ref={prevRef}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div
                      className="testimonial-4-button-next slide-nav-button"
                      role="button"
                      ref={nextRef}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper: SwiperClass) => {
                    if (
                      swiper.params.navigation &&
                      typeof swiper.params.navigation !== "boolean"
                    ) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }
                  }}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  speed={1800}
                  className="testimonial-4-active"
                >
                  {testimonialData?.testimonials?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-item-4">
                        <div className="content">
                          <div className="text-wrapper">
                            <p className="text">{item?.text}</p>
                          </div>
                          <div className="author">
                            <div className="avatar">
                              <img src={item?.avatar} alt={item?.name} />
                            </div>
                            <div className="meta">
                              <h3 className="name">{item?.name}</h3>
                              <span className="post">{item?.post}</span>
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
      </div>
    </section>
  );
};

export default TestimonialSection;
