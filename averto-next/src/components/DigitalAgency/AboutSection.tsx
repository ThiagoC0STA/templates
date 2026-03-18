"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import counterUp from "counterup2";
import { AboutData, ICounter } from "@/constant/DigitalAgency/about";

interface AboutProps {
  className?: string;
  data:AboutData;
}

const AboutSection:React.FC<AboutProps> = ({className:updateClass,data:aboutData}) => {
  useEffect(() => {
    const counters = document.querySelectorAll(".t-counter-value");

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
    return () => counters.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className={`about-area ${updateClass}`}>
      <div className="container">
        <div className={`about-area-inner ${updateClass ? 'section-spacing' : 'section-spacing-top'}`}>
          <div className="section-content-wrapper btn-move">
            <div className="section-content">
              <div className="section-title-wrapper fade-anim">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{aboutData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{aboutData?.title}</h2>
                </div>
              </div>

              <div className="text-wrapper fade-anim">
                <p className="text">{aboutData?.description}</p>
              </div>

              <div className="btn-wrapper fade-anim">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={aboutData?.ctaLink || "#"}>
                    {aboutData?.ctaText}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-thumb fade-anim">
              <div className="btn-wrapper">
                <Link href={aboutData?.circleImages?.link || "#"} className="circle-text btn-item">
                  <img src={aboutData?.circleImages?.textImg} alt="text shape" className="text" />
                  <img src={aboutData?.circleImages?.iconImg} alt="icon shape" className="icon" />
                </Link>
              </div>
              <div className="image img_anim_reveal">
                <img src={aboutData?.mainImage} alt="about image" />
              </div>
            </div>
          </div>

          <div className="counter-wrapper-box fade-anim">
            <div className="counter-wrapper">
              {aboutData?.counters?.map((counter:ICounter, index:number) => (
                <div className="counter-item fade-anim" data-delay={counter?.delay} key={index}>
                  <span className="number">
                    <span
                      className="t-counter-value"
                      data-value={counter?.value}
                    >
                      {counter?.value}
                    </span>
                    <span className="counter-suffix">{counter?.suffix}</span>
                  </span>
                  <p className="text">{counter?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;