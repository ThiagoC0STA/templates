"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IService, ServiceData } from "@/constant/DesignAgency/service";

interface ServiceProps{
  data:ServiceData;
}
const ServiceSection:React.FC<ServiceProps> = ({data:serviceData}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="service-area-2">
      <div className="container">
        <div className="service-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle light">
                  {serviceData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{serviceData?.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href="/design-agency/services">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href="/design-agency/services">
                  Discover All
                </Link>
                <Link className="t-btn t-btn-circle" href="/design-agency/services">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="services-wrapper service-hover-active">
              {serviceData?.services?.map((item:IService, index:number) => (
                <div
                  key={index}
                  className={`service-box-2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                  <Link href={item?.link || "#"}>
                    <div className="header">
                      <h3 className="title">
                        {item?.title}
                        <span className="number">{item?.number}</span>
                      </h3>
                    </div>
                  </Link>
                  <div className="service-box-2-inner">
                    <div className="shape-1">
                      <img src={item?.shapeImage} alt="shape" />
                    </div>
                    <div className="thumb">
                      <img src={item?.thumb} alt="thumb" />
                    </div>
                    <div className="content">
                      <div className="thumb-2">
                        <img src={item?.thumb2} alt="thumb2" />
                      </div>
                      <p className="text">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
