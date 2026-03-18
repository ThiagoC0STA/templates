"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { HeroData, SocialLink } from "@/constant/DesignAgency/hero";

interface HeroProps {
    data: HeroData;
}
const HeroSection:React.FC<HeroProps> = ({data:heroData}) => {
  return (
    <section className="hero-area-2">
      <div className="hero-area-2-inner section-spacing-top">
        <div className="container large">
          <div className="section-header">
            <div
              className="social-links fade-anim"
              data-delay="0.75"
              data-direction="bottom"
              suppressHydrationWarning={true}
            >
              {heroData?.socials?.map((item:SocialLink, i:number) => (
                <Link
                  key={i}
                  href={item?.href}
                  className={item?.activeStatus ? "active" : ""}
                >
                  <img src={item?.image} alt={`social-${i}`} />
                </Link>
              ))}
            </div>

            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1 className="section-title typewriter-text fade-anim" suppressHydrationWarning={true}>
                  <Typewriter
                    options={{
                      strings: heroData?.titleChange ?? [],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 50,
                      cursorClassName: "d-none",
                    }}
                  />
                </h1>
              </div>

              <div className="subtitle-wrapper">
                <span
                  className="section-subtitle fade-anim"
                  data-direction="bottom"
                  data-delay="0.75"
                  suppressHydrationWarning={true}
                >
                  <span className="marquee">
                    <span>{heroData?.marqueeText}</span>
                    <span>{heroData?.marqueeText}</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content-wrapper">
          <div className="container large">
            <div className="section-content section-spacing-bottom">
              <div
                className="hero-shape fade-anim"
                data-delay="0.75"
                data-direction="top"
                suppressHydrationWarning={true}
              >
                <svg
                  width="68"
                  height="95"
                  viewBox="0 0 68 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.08"
                    cx="34"
                    cy="61"
                    r="33"
                    stroke="#0E0F11"
                    strokeWidth="2"
                  />
                  <path d="M34 0L34 60" stroke="#FD5D39" strokeWidth="2" />
                </svg>
              </div>

              <div className="hero-content">
                <div className="text-wrapper">
                  <p className="text fade-anim" data-delay="0.90" suppressHydrationWarning={true}>
                    {heroData?.description}
                  </p>
                </div>
              </div>

              <div
                className="hero-thumb fade-anim"
                data-delay="1.05"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                <Link href={heroData?.buttonLink ?? "#"} className="circle-text">
                  <img
                    src={heroData?.circleTextImg}
                    alt="circle text"
                    className="text"
                  />
                  <img
                    src={heroData?.circleIconImg}
                    alt="circle icon"
                    className="icon"
                  />
                </Link>
                <img src={heroData?.mainImage} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
