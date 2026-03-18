import { IServiceDetails } from "@/constant/CreativeAgency/service-details/service-details-data";
import React from "react";

interface ServiceDetailsProps {
    data: IServiceDetails;
}

const ServiceDetailsSection:React.FC<ServiceDetailsProps> = ({data:serviceDetailsData}) => {
  return (
    <section className="service-details-area">
      <div className="service-details-area-inner section-spacing-bottom">
        <div className="container">
          {serviceDetailsData?.sectionHeader && (
            <div className="section-header">
              <div className="section-title-wrapper">
                {serviceDetailsData?.sectionHeader?.subtitle && (
                  <div className="subtitle-wrapper fade-anim">
                    <span className="section-subtitle">{serviceDetailsData?.sectionHeader.subtitle}</span>
                  </div>
                )}
                {serviceDetailsData?.sectionHeader?.title && (
                  <div className="title-wrapper fade-anim">
                    <h2 className="section-title">{serviceDetailsData?.sectionHeader.title}</h2>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {serviceDetailsData?.video?.src && (
          <div className="video-box fade-anim">
            <video loop muted autoPlay playsInline>
              <source src={serviceDetailsData?.video.src} type={serviceDetailsData?.video?.type || "video/mp4"} />
            </video>
          </div>
        )}

        <div className="container">
          <div className="section-content">
            {serviceDetailsData?.content?.title && (
              <div className="title-wrapper fade-anim">
                <h2 className="title">{serviceDetailsData?.content.title}</h2>
              </div>
            )}
            {serviceDetailsData?.content?.paragraphs?.length > 0 &&
              serviceDetailsData?.content.paragraphs.map((para, idx) => (
                <div key={idx} className="text-wrapper fade-anim">
                  <p className="text">{para}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
