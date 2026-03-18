"use client";

import React from "react";
import { InfoData, IStatItem } from "@/constant/DesignAgency/info";
import Link from "next/link";

interface InfoProps {
  data: InfoData;
  type?: number;
}
const InfoSection: React.FC<InfoProps> = ({ data:infoData, type }) => {
  return (
    <section className="info-area" suppressHydrationWarning={true}>
      <div className="container" suppressHydrationWarning={true}>
        <div className="info-area-inner section-spacing" suppressHydrationWarning={true}>
          <div className="section-header" suppressHydrationWarning={true}>
            <div className="area-shape-1">
              {type === 2
                ? infoData?.shapeImage2 && (
                    <img src={infoData?.shapeImage2} alt="shape" />
                  )
                : infoData?.shapeImage1 && (
                    <img src={infoData?.shapeImage1} alt="shape" />
                  )}
            </div>

            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper" suppressHydrationWarning={true}>
                <span className="section-subtitle light" suppressHydrationWarning={true}>{infoData?.subtitle}</span>
              </div>
              <div className="title-wrapper" suppressHydrationWarning={true}>
                <h2 className="section-title" suppressHydrationWarning={true}>{infoData?.title}</h2>
              </div>
            </div>

            <div className="text-wrapper fade-anim" suppressHydrationWarning={true}>
              <p className="text" suppressHydrationWarning={true}>{infoData?.description}</p>
            </div>

            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group" suppressHydrationWarning={true}>
                <Link
                  className="t-btn t-btn-circle"
                  href={infoData?.contactLink || "#"}
                  suppressHydrationWarning={true}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={infoData?.contactLink || "#"}
                  suppressHydrationWarning={true}
                >
                  Contact Us
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={infoData?.contactLink || "#"}
                  suppressHydrationWarning={true}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="info-wrapper-box" suppressHydrationWarning={true}>
            <div
              className="info-wrapper fade-anim"
              suppressHydrationWarning={true}
              data-direction="right"
              data-delay="0.45"
            >
              {infoData?.stats?.map((stat:IStatItem, idx:number) => (
                <div className="info-box" key={idx} suppressHydrationWarning={true}>
                  <h3 className="number" suppressHydrationWarning={true}>{stat?.number}</h3>
                  <p className="text" suppressHydrationWarning={true}>{stat?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
