import React from "react";
import Link from "next/link";
import { IHeroData } from "@/constant/MarketingAgency/hero";

interface HeroProps {
  data: IHeroData;
}
const HeroSection: React.FC<HeroProps> = ({ data: heroData }) => {
  return (
    <section className="hero-area-5">
      <div className="area-bg">
        <img src={heroData?.backgroundShapes?.[0] || ""} alt="image" />
        <img
          className="lines"
          src={heroData?.backgroundShapes?.[1] || ""}
          alt="image"
        />
        <div className="dots">
          <img src={heroData?.backgroundShapes?.[2] || ""} alt="image" />
        </div>
      </div>
      <div className="container large">
        <div className="hero-area-5-inner section-spacing">
          <div className="section-content-wrapper section-spacing-top">
            <div className="social-links">
              {heroData?.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.href || "#"}
                  className={link?.active ? "active" : ""}
                >
                  <i className={link?.icon || ""}></i>
                </a>
              ))}
            </div>
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle char-anim"
                    data-delay="0.60"
                    suppressHydrationWarning={true}
                  >
                    {heroData?.subtitle}
                  </span>
                </div>
                <div
                  className="title-wrapper fade-anim"
                  data-delay="0.75"
                  suppressHydrationWarning={true}
                >
                  <h1 className="section-title">
                    {heroData?.titleParts?.map((part, index) =>
                      part?.highLight ? (
                        <span key={index}>{part?.text}</span>
                      ) : (
                        <React.Fragment key={index}>
                          {part?.text}
                        </React.Fragment>
                      )
                    )}
                  </h1>
                </div>
              </div>
              <div className="text-wrapper fade-anim" data-delay="0.90" suppressHydrationWarning={true}>
                <p className="text">{heroData?.description}</p>
              </div>
              <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                {/* Using Next.js Link component for routing */}
                <Link
                  href={heroData?.buttonLink || "#"}
                  className="t-btn t-btn-primary"
                >
                  {heroData?.buttonText}
                </Link>
              </div>
            </div>
            <div
              className="area-shape-image fade-anim"
              data-delay="1.20"
              data-direction="top"
              data-offset="100"
              data-ease="bounce"
              suppressHydrationWarning={true}
            >
              <div className="shape-1">
                <img src={heroData?.backgroundShapes?.[3] || ""} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
