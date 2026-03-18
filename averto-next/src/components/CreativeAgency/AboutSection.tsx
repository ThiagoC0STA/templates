'use client';

import { useEffect } from 'react';
import {AboutData} from '@/constant/CreativeAgency/about';
import counterUp from 'counterup2';
import Link from 'next/link';

interface AboutProps {
  data: AboutData;
  type?:string;
}
const AboutSection:React.FC<AboutProps> = ({data:aboutData,type}) => {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".t-counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 1500,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 1,
      }
    );

    counters.forEach((el) => observer.observe(el));

    return () => {
      counters.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="about-area-3">
      <div className="container">
        <div className={`about-area-3-inner ${type === "v2" ? "section-spacing-top section-spacing-bottom" : "section-spacing-top"}`}>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper fade-anim" suppressHydrationWarning={true}>
                <span className="section-subtitle">{aboutData?.subtitle}</span>
              </div>
              <div className="title-wrapper fade-anim" suppressHydrationWarning={true}>
                <h2 className="section-title">{aboutData?.title}</h2>
              </div>
            </div>
          </div>

          <div className="section-content-wrapper">
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={aboutData?.buttonLink}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={aboutData?.buttonLink}>
                  {aboutData?.buttonText}
                </Link>
                <Link className="t-btn t-btn-circle" href={aboutData?.buttonLink}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="counter-wrapper-box">
              <div className="counter-wrapper">
                {aboutData?.counters.map((item, index) => (
                  <div key={index} className="counter-item fade-anim" data-delay={`0.${30 + index * 15}`} suppressHydrationWarning={true}>
                    <span className="number t-counter">
                      {item.number}
                      {item.suffix}
                    </span>
                    <p className="text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
