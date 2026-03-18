import React from "react";
import type { HeroData } from "@/constant/CreativeAgency/hero";
import Link from "next/link";


interface HeroProps {
  data: HeroData;
}

const Hero:React.FC<HeroProps> = ({data:heroData}) => {
  
  return (
    <section className="hero-area-3">
      <div className="container">
        <div className="hero-area-3-inner section-spacing">
          <div className="area-shape-1">
            <img src={heroData?.shapes?.shape1} alt="shape" />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper" suppressHydrationWarning={true}>
                <h1 className="section-title move-anim" data-delay="0.45" suppressHydrationWarning={true} >
                  {heroData?.title}&nbsp;
                  <span className="title-shape-1">
                    <span className="parallax-wrap">
                      <img
                        className="parallax-element"
                        src={heroData?.shapes?.shape16}
                        alt="decoration"
                      />
                    </span>
                  </span>
                  <span>{heroData?.highlightedText}</span> {heroData?.subtitle}
                </h1>
              </div>
            </div>
          </div>
          <div className="section-content-wrapper">
            <div
              className="content-shape-1 fade-anim btn-item"
              data-direction="top"
              data-offset="150"
              data-ease="bounce"
              data-delay="1.05"
              suppressHydrationWarning={true}
            >
              <div className="btn-move">
                <Link href="#about">
                  <img src={heroData?.shapes?.shape17} alt="arrow shape" />
                </Link>
              </div>
            </div>
            <div className="section-content">
              <div className="text-wrapper fade-anim" data-delay="0.60" suppressHydrationWarning={true}>
                <p className="text">{heroData?.description}</p>
              </div>
              <div className="btn-wrapper fade-anim" data-delay="0.75" suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={heroData?.cta?.href}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={heroData?.cta?.href}>
                    {heroData?.cta?.text}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={heroData?.cta?.href}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-wrapper parallax-view fade-anim" suppressHydrationWarning={true}>
        <img
          className="w-100"
          src={heroData?.mainImage}
          alt="hero visual"
          data-speed="0.5"
        />
      </div>
    </section>
  );
};

export default Hero;
