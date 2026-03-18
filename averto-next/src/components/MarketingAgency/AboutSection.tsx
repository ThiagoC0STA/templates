"use client";

import { useEffect } from "react";
import Link from "next/link";
import { IAboutData, ICounters } from "@/constant/MarketingAgency/about";
import counterUp from "counterup2";

interface AboutProps {
  data: IAboutData;
}

const AboutSection: React.FC<AboutProps> = ({ data: aboutData }) => {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".t-counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 1500,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      },
      { threshold: 1 }
    );

    counters.forEach((el) => observer.observe(el));

    return () => {
      counters.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="about-area-5">
      <div className="container">
        <div className="about-area-5-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="content-first fade-anim" data-direction="right" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{aboutData?.subtitle}</span>
              </div>
              <div className="content-shape-1">
                <img src={aboutData?.shapes?.[0] || ""} alt="Shape" />
              </div>
            </div>
            <div className="section-content fade-anim" data-direction="left" suppressHydrationWarning={true}>
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{aboutData?.title}</h2>
                </div>
              </div>
              <div className="btn-wrapper">
                <div className="t-btn-group">
                  <Link
                    href={aboutData?.buttonLink || "#"}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href={aboutData?.buttonLink || "#"}
                    className="t-btn t-btn-primary"
                  >
                    {aboutData?.buttonText}
                  </Link>
                  <Link
                    href={aboutData?.buttonLink || "#"}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-wrapper-box section-spacing-top">
            <div className="counter-wrapper fade-anim" data-direction="right" suppressHydrationWarning={true}>
              {aboutData?.counters?.map((counter: ICounters, index: number) => (
                <div key={index} className="counter-item-5">
                  <span className="number t-counter">{counter?.number}</span>
                  <p className="text">{counter?.label}</p>
                </div>
              ))}
            </div>
            <div
              className="counter-thumb img_anim_reveal fade-anim"
              data-direction="right"
              suppressHydrationWarning={true}
            >
              <img src={aboutData?.image || ""} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
