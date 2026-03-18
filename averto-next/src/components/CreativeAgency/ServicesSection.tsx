"use client";

import { useEffect, useRef } from "react";
import { ServiceData } from "@/constant/CreativeAgency/services";
import Link from "next/link";
interface ServicesProps {
  data: ServiceData[];
  type?: string;
}
const ServiceSection: React.FC<ServicesProps> = ({ data: servicesData,type }) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    containerRefs.current.forEach((container) => {
      if (!container) return;

      const video =
        container.querySelector<HTMLVideoElement>(".video_on_hover");
      if (!video) return;

      const handleMouseOver = () => video.play();
      const handleMouseOut = () => video.pause();

      container.addEventListener("mouseover", handleMouseOver);
      container.addEventListener("mouseout", handleMouseOut);

      // Cleanup
      return () => {
        container.removeEventListener("mouseover", handleMouseOver);
        container.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);

  return (
    <section className={`services-area-3 ${type === "v2" ? "v2" : null}`}>
      <div className={`services-area-inner ${type === "v2" ? "section-spacing-top" : "section-spacing"}`}>
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">( Our Services )</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">Our Expertise in Action</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href="/creative-agency/services">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href="/creative-agency/services">
                  Our Services
                </Link>
                <Link className="t-btn t-btn-circle" href="/creative-agency/services">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper">
            {servicesData?.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  containerRefs.current[index] = el;
                }}
                className="service-box-3 fade-anim video-container"
                data-delay={(0.3 + index * 0.15).toFixed(2)}
                suppressHydrationWarning={true}
              >
                <div className="container">
                  <div className="service-box-3-inner">
                    <div className="number">{service.number}</div>
                    <div className="content">
                      <h3 className="title">{service.title}</h3>
                      <Link className="t-btn t-btn-primary" href={service.link}>
                        See Details
                      </Link>
                    </div>
                    <div className="video">
                      <video loop muted playsInline className="video_on_hover">
                        <source src={service.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
