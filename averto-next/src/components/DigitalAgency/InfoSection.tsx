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
    <section className="info-area">
      <div className="container">
        <div className="info-area-inner section-spacing">
          <div className="section-header">
            <div className="area-shape-1">
              {type === 2
                ? infoData?.shapeImage2 && (
                    <img src={infoData?.shapeImage2} alt="shape" />
                  )
                : infoData?.shapeImage1 && (
                    <img src={infoData?.shapeImage1} alt="shape" />
                  )}
            </div>

            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle light">{infoData?.subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{infoData?.title}</h2>
              </div>
            </div>

            <div className="text-wrapper move-anim">
              <p className="text">{infoData?.description}</p>
            </div>

            <div className="btn-wrapper move-anim">
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={infoData?.contactLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={infoData?.contactLink || "#"}
                >
                  Contact Us
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={infoData?.contactLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="info-wrapper-box">
            <div
              className="info-wrapper fade-anim"
              data-direction="right"
              data-delay="0.45"
            >
              {infoData?.stats?.map((stat:IStatItem, idx:number) => (
                <div className="info-box" key={idx}>
                  <h3 className="number">{stat?.number}</h3>
                  <p className="text">{stat?.label}</p>
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
