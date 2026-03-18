import React from "react";
import { IPortfolioDetailsData } from "@/constant/DesignAgency/PortfolioDetails/portfolio-details-data";

interface PortfolioProps {
  data: IPortfolioDetailsData;
}

const PortfolioDetails: React.FC<PortfolioProps> = ({
  data: portfolioDetailsData,
}) => {
  const { meta, overview, problems, solutions } = portfolioDetailsData;

  return (
    <>
      <section className="work-details-area">
        <div className="container">
          <div className="work-details-area-inner section-spacing-top">
            <div className="work-details-wrapper fade-anim">
              <div className="work-details">
                {/* Meta Section */}
                <div className="meta-wrapper">
                  {meta?.map((item, index) => (
                    <div className="meta-item" key={index}>
                      <p className="title">{item?.title}</p>
                      <p className="text">{item?.text}</p>
                    </div>
                  ))}
                </div>

                {/* Overview Section */}
                <div className="details-info">
                  <h3 className="title">{overview?.title}</h3>
                  <div className="text-wrapper">
                    {overview?.paragraphs?.map((para, idx) => (
                      <p className="text" key={idx}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="gallery-wrapper">
                    {overview?.images?.map((src, idx) => (
                      <img src={src} alt={`overview-${idx}`} key={idx} />
                    ))}
                  </div>
                </div>

                {/* Problems Section */}
                <div className="details-info">
                  <h3 className="title">{problems?.title}</h3>
                  <div className="text-wrapper">
                    {problems?.paragraphs?.map((para, idx) => (
                      <p className="text" key={idx}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="gallery-wrapper-2">
                    {problems?.images?.map((src, idx) => (
                      <img src={src} alt={`problems-${idx}`} key={idx} />
                    ))}
                  </div>
                </div>

                {/* Solutions Section */}
                <div className="details-info">
                  <h3 className="title">{solutions?.title}</h3>
                  <div className="text-wrapper">
                    {solutions?.paragraphs?.map((para, idx) => (
                      <p className="text" key={idx}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
