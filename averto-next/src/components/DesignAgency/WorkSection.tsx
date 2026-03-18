"use client";

import React from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/DesignAgency/work";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface WorkProps {
  data: WorkData;
}
const WorkSection: React.FC<WorkProps> = ({ data: workData }) => {
  return (
    <section className="work-area-2">
      <div className="container">
        <div className="work-area-2-inner section-spacing">
          <div className="section-header">
            <div className="subtitle-wrapper fade-anim" suppressHydrationWarning={true}>
              <span className="section-subtitle">{workData?.subtitle}</span>
            </div>
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="title-wrapper">
                <h2 className="section-title">{workData?.title}</h2>
              </div>
              <div className="text-wrapper">
                <p className="text">{workData?.description}</p>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="works-wrapper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                speed={1800}
                watchSlidesProgress={true}
                navigation={{
                  prevEl: ".work-button-prev",
                  nextEl: ".work-button-next",
                }}
                pagination={{
                  el: ".work-pagination",
                  type: "progressbar",
                  clickable: true,
                }}
                breakpoints={{
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1201: { slidesPerView: 3 },
                  1367: { slidesPerView: 3 },
                }}
                className="work-slider"
              >
                {workData?.projects?.map((item: IProject, idx: number) => (
                  <SwiperSlide key={idx}>
                    <div className="work-box-2">
                      <div className="thumb">
                        <div className="meta">
                          {item?.tags?.map((tag: string, tagIdx: number) => (
                            <Link
                              key={tagIdx}
                              className="tag"
                              href={item?.link || "#"}
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <Link href={item?.link || "#"}>
                          <img src={item?.image} alt="portfolio" />
                        </Link>
                        <div className="content">
                          <h3 className="title">
                            <Link href={item?.link || "#"}>{item?.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="work-pagination fade-anim" suppressHydrationWarning={true}></div>

              <div className="slide-nav-wrapper">
                <div className="slide-nav fade-anim" suppressHydrationWarning={true}>
                  <div
                    className="work-button-prev slide-nav-button"
                    role="button"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    className="work-button-next slide-nav-button"
                    role="button"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                  <div className="t-btn-group">
                    <Link className="t-btn t-btn-circle" href="/design-agency/portfolio">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link className="t-btn t-btn-primary" href="/design-agency/portfolio">
                      Discover All
                    </Link>
                    <Link className="t-btn t-btn-circle" href="/design-agency/portfolio">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
