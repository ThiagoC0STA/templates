"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { WorkData } from "@/constant/MarketingAgency/work";


interface WorkProps {
  data: WorkData;
}
const WorkSection: React.FC<WorkProps> = ({data:workData}) => {
  return (
    <section className="work-area-5">
      <div className="work-area-5-inner section-spacing">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {workData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{workData?.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={workData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={workData?.buttonLink}
                >
                  {workData?.buttonText}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={workData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="works-wrapper">
              {/* Swiper Slider Inside JSX */}
              <Swiper
                modules={[Autoplay, Navigation, Pagination]} // Import Swiper modules
                className="work-2-slider swiper-container overflow-visible"
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
                  prevEl: ".work-2-button-prev",
                  nextEl: ".work-2-button-next",
                }}
                pagination={{
                  el: ".work-2-pagination",
                  clickable: true,
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
                    slidesPerView: 2,
                  },
                  1367: {
                    slidesPerView: 2,
                  },
                }}
              >
                {/* Iterate over portfolio works */}
                {workData?.works?.map((work) => (
                  <SwiperSlide key={work?.id}>
                    <div className="work-box-5">
                      <div className="thumb">
                        <div className="meta">
                          <span className="tag">{work?.tag}</span>
                        </div>
                        <Link className="t-btn t-btn-circle" href={work?.link}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link href={work?.link}>
                          <img src={work?.image} alt={work?.title} />
                        </Link>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <Link href={work?.link}>{work?.title}</Link>
                        </h3>
                        <p className="text">{work?.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Swiper Pagination */}
              <div className="work-2-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
