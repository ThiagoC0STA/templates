import React from "react";
import {Project, WorkData} from "@/constant/CreativeAgency/work";
import Link from "next/link";
interface WorkProps {
  data: WorkData;
  pageInner?:boolean;
}

const Work: React.FC<WorkProps> = ({pageInner=false, data:workData }) => {
  return (
    <section className={`work-area-3 pin-area ${pageInner ? "section-spacing-top" : ""}`}>
      <div className="container">
        <div className="work-area-3-inner section-spacing-bottom">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title pin-element">{workData?.sectionTitle}</h2>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box fade-anim">
            <div className="container">
              <div className="works-wrapper">
                {workData?.projects?.map((project:Project, index:number) => (
                  <div key={index} className="work-box-3 portfolio-panel">
                    <div className="thumb">
                      <Link href={project?.link}>
                        <img src={project?.image} alt={project?.title} />
                      </Link>
                      <div className="content">
                        <span className="tag">{project?.tag}</span>
                        <h3 className="title">
                          <Link href={project?.link}>{project?.title}</Link>
                        </h3>
                      </div>
                      <div className="meta">
                        <span className="year">( {project?.year} )</span>
                        <span className="category">( {project?.category} )</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hidden heading for SEO or visual enhancement */}
            <h2 className="wrapper-title d-none">
              <Link href="/portfolio">
                Our Portfolio
                <svg className="icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.30804 25.0961L22.4172 8.00637L23.4428 6.98186L21.9931 6.98186L1.55157 6.98186L8.56918 0.599994L26.4094 0.599997L33.4 0.599998L33.4 7.58187L33.4 25.4392L27.0094 32.451L27.0094 13.1477L27.0094 11.7003L25.9854 12.7231L9.45292 29.2362L5.30804 25.0961Z"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                </svg>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;