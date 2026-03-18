"use client";

import { useState } from "react";
import Link from "next/link";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ServiceData } from "@/constant/MarketingAgency/service";

interface ServiceProps {
  data: ServiceData;
}

const ServiceSection: React.FC<ServiceProps> = ({ data: serviceData }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabSelect = (key: string | null) => {
    if (key) {
      setActiveTab(key);
    }
  };

  return (
    <section className="service-area-5 fade-anim" suppressHydrationWarning={true}>
      <div className="container">
        <div className="service-area-5-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {serviceData?.subtitle}
                </span>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={serviceData?.buttonLink}
                >
                  {serviceData?.buttonText}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceData?.buttonLink}
                >
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="services-wrapper">
              <div className="area-bg">
                <img
                  src="/assets/imgs/shape/shape-34.webp"
                  alt="background shape"
                />
              </div>

              <Tab.Container
                id="services-tabs"
                activeKey={activeTab}
                onSelect={handleTabSelect}
              >
                <Nav variant="pills" className="nav-pills">
                  {serviceData?.navTabs?.map((tab) => (
                    <Nav.Item key={tab?.id}>
                      <Nav.Link eventKey={tab?.id}>
                        <div className="service-name">
                          <h2 className="title">
                            {tab?.title}{" "}
                            <span className="number">{tab?.number}</span>
                          </h2>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content>
                  {serviceData?.navTabs?.map((tab) => (
                    <Tab.Pane eventKey={tab?.id} key={tab?.id}>
                      <div className="service-box-5">
                        <div className="area-bg">
                          <img
                            src="/assets/imgs/shape/shape-33.webp"
                            alt="bg shape"
                          />
                        </div>
                        <div className="thumb">
                          <img src={tab?.icon} alt={tab?.title} />
                        </div>
                        <div className="content">
                          <h3 className="title">{tab?.title}</h3>
                          <p className="text">{tab?.desc}</p>
                          <div className="feature-list">
                            <ul>
                              {tab?.features?.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            className="t-btn t-btn-primary"
                            href="/marketing-agency/service-details"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>

      {/* Text slider area */}
      <div className="text-slider-area-3 section-spacing-bottom">
        <div className="text-slider-box">
          <div className="text-slider fade-anim" suppressHydrationWarning={true}>
            <Swiper
              modules={[Autoplay]}
              className="text-slider-active"
              slidesPerView="auto"
              spaceBetween={0}
              speed={10000}
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
            >
              {serviceData?.sliderItems?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="text-slider-item-3">
                    <Link href={item?.link}>
                      <h2 className="title">
                        <span className="icon">
                          <img
                            src="/assets/imgs/shape/shape-35.webp"
                            alt="icon"
                          />
                        </span>
                        <span className="text">{item?.text}</span>
                      </h2>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
