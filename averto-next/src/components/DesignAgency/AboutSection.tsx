"use client";

import React from "react";
import Link from "next/link";
import { AboutData } from "@/constant/DesignAgency/about";
interface AboutProps {
  data: AboutData;
}
const AboutSection: React.FC<AboutProps> = ({ data: aboutData }) => {
  return (
    <section className="about-area-2">
      <div className="container">
        <div className="about-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper" suppressHydrationWarning={true}>
                <span className="section-subtitle">{aboutData?.subtitle}</span>
              </div>
            </div>
          </div>

          <div className="section-content-wrapper fade-anim" suppressHydrationWarning={true}>
            <div className="thumb">
              <img src={aboutData?.image} alt="about" />
            </div>

            <div className="section-content fade-anim" suppressHydrationWarning={true}>
              <div className="section-title-wrapper" suppressHydrationWarning={true}>
                <div className="title-wrapper" suppressHydrationWarning={true}>
                  <h2 className="section-title" suppressHydrationWarning={true}>{aboutData?.title}</h2>
                </div>
              </div>
              <div className="text-wrapper" suppressHydrationWarning={true}>
                <p className="text" suppressHydrationWarning={true}>{aboutData?.description}</p>
              </div>

              <div className="feature-list" suppressHydrationWarning={true}>
                {aboutData?.features?.map((feature, index) => (
                  <div className="feature-list-item" key={index} suppressHydrationWarning={true}>
                    <span className="icon" suppressHydrationWarning={true}>
                      <img src={feature?.icon} alt="icon" />
                    </span>
                    <div className="wrapper" suppressHydrationWarning={true}>
                      <p className="text" suppressHydrationWarning={true}>{feature?.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="btn-wrapper" suppressHydrationWarning={true}>
                <div className="t-btn-group" suppressHydrationWarning={true}>
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData?.link || "#"}
                    suppressHydrationWarning={true}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={aboutData?.link || "#"}
                    suppressHydrationWarning={true}
                  >
                    {aboutData?.buttonText}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData?.link || "#"}
                    suppressHydrationWarning={true}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
