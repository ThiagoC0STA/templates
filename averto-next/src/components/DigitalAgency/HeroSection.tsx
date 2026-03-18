"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { HeroData } from "@/constant/DigitalAgency/hero";
interface HeroProps {
  data: HeroData;
}

const HeroSection:React.FC<HeroProps> = ({data:heroData}) => {
  return (
    <section className="hero-area">
      <div className="hero-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper">
              {heroData?.shapeImg && (
                <div
                  className="shape-1 fade-anim"
                  data-direction="top"
                  data-ease="bounce"
                  data-delay="0.90"
                  data-offset="100"
                  suppressHydrationWarning={true}
                >
                  <img src={heroData?.shapeImg} alt="shape" />
                </div>
              )}

              {heroData?.subtitle && (
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle char-anim"
                    data-direction="left"
                    data-delay="0.45"
                    data-offset="100"
                    suppressHydrationWarning={true}
                  >
                    {heroData?.subtitle}
                  </span>
                </div>
              )}

              {heroData.typewriterStrings && heroData.typewriterStrings.length > 0  && (
                <div className="title-wrapper type-out-wrapper">
                  <h1
                    className="section-title typed-out fade-anim"
                    data-direction="left"
                    data-delay="0.30"
                    data-offset="100"
                    suppressHydrationWarning={true}
                  >
                    <Typewriter
                      options={{
                        strings: heroData?.typewriterStrings,
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50,
                        cursorClassName: "opacity-0 w-1 d-inline-block",
                      }}
                    />
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="section-content-wrapper">
          <div className="container">
            <div className="section-content section-spacing-bottom">
              {heroData.lines && heroData.lines.length > 0 && (
                <div className="content-lines">
                  {heroData?.lines?.map((line, idx) => (
                    <div key={idx} className={line}></div>
                  ))}
                </div>
              )}

              {heroData?.videoUrl && (
                <div
                  className="hero-thumb fade-anim"
                  data-direction="left"
                  data-delay="0.60"
                  data-duration="2"
                  data-offset="100"
                  suppressHydrationWarning={true}
                >
                  <video loop muted autoPlay playsInline>
                    <source src={heroData?.videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="hero-content">
                {heroData?.description && (
                  <div className="text-wrapper">
                    <p className="text word-anim" data-stagger="0.1" suppressHydrationWarning={true}>
                      {heroData?.description}
                    </p>
                  </div>
                )}

                {heroData?.button?.text && heroData?.button?.url && (
                  <div className="btn-wrapper fade-anim" data-delay="0.60" suppressHydrationWarning={true}>
                    <div className="t-btn-group">
                      <Link
                        href={heroData?.button?.url}
                        className="t-btn t-btn-circle"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                      <Link
                        href={heroData?.button?.url}
                        className="t-btn t-btn-primary"
                      >
                        {heroData?.button?.text}
                      </Link>
                      <Link
                        href={heroData?.button?.url}
                        className="t-btn t-btn-circle"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
