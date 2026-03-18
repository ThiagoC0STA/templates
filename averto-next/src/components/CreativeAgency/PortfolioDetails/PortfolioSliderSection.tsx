"use client";

import React from "react";
import Link from "next/link";
import { IPortfolioSliderData } from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

interface IPortfolioSliderProps {
  data: IPortfolioSliderData[];
}
const PortfolioSliderSection: React.FC<IPortfolioSliderProps> = ({
  data: portfolioSliderData,
}) => {
  return (
    <section className="work-area-9">
      <div className="container">
        <div className="work-area-9-inner section-spacing-bottom">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper fade-anim">
                <h2 className="section-title">More Projects</h2>
              </div>
            </div>
            <div className="slide-nav fade-anim">
              <div className="work-button-prev slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="work-button-next slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box fade-anim">
            <div className="works-wrapper">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                speed={1800}
                navigation={{
                  prevEl: ".work-button-prev",
                  nextEl: ".work-button-next",
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
                {portfolioSliderData?.map(
                  (project: IPortfolioSliderData, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="work-box-9">
                        <div className="thumb">
                          <div className="meta">
                            {project?.tags?.map(
                              (tag: string, tagIndex: number) => (
                                <Link
                                  className="tag"
                                  href={project?.link}
                                  key={tagIndex}
                                >
                                  {tag}
                                </Link>
                              )
                            )}
                          </div>
                          <Link href={project?.link}>
                            <img src={project?.image} alt="project image" />
                          </Link>
                          <div className="content">
                            <h3 className="title">
                              <Link href={project?.link}>{project?.title}</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioSliderSection;
