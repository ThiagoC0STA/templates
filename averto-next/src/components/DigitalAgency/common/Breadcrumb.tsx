import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
    title: string;
    subTitle: string;
    pageName: string;
}
const Breadcrumb:React.FC<BreadcrumbProps> = ({ title, subTitle, pageName }) => {
  const finalTitle = title?.trim() || "TITLE";
  const finalSubTitle = subTitle?.trim() || "Sub Title";
  const finalPageName = pageName?.trim() || "Page Name";

  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-area-inner section-spacing-top">
          {/* <div className="area-lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
            <div className="line-5"></div>
            <div className="line-6"></div>
            <div className="line-7"></div>
            <div className="line-8"></div>
          </div> */}
          <div className="area-lines">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`line-${i + 1}`}></div>
            ))}
          </div>
          <div className="section-content-wrapper">
            <div
              className="content-shape-1 fade-anim"
              data-direction="top"
              data-ease="bounce"
              data-delay="0.60"
              data-offset="100"
            >
              <img src="/assets/imgs/shape/shape-36.webp" alt="image" />
            </div>
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title char-anim">
                    {finalTitle}
                  </h1>
                </div>
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle char-anim"
                    data-delay="0.75"
                  >
                    {finalSubTitle}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="breadcrumb-wrapper fade-anim"
              data-direction="left"
              data-offset="100"
              data-delay="0.90"
            >
              <ul className="breadcrumb">
                <li>
                  <Link href="/digital-agency">HOME</Link>
                </li>
                <li>{finalPageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
