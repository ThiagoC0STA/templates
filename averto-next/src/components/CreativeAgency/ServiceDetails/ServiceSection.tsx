import Link from "next/link";
import { IServiceData } from "@/constant/CreativeAgency/service-details/service-section-data";

interface ServiceSectionProps {
  data: IServiceData;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  data: serviceData,
}) => {
  return (
    <section className="service-area-6">
      <div className="container">
        <div className="service-area-6-inner section-spacing-top">
          <div className="section-content-wrapper">
            <div className="section-content fade-anim" data-direction="left">
              <div className="section-title-wrapper">
                {serviceData?.subtitle && (
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">
                      {serviceData?.subtitle}
                    </span>
                  </div>
                )}
                {serviceData?.title && (
                  <div className="title-wrapper">
                    <h2 className="section-title">{serviceData?.title}</h2>
                  </div>
                )}
              </div>
              {serviceData?.buttons?.length > 0 && (
                <div className="btn-wrapper">
                  <div className="t-btn-group">
                    {serviceData?.buttons?.map((btn, index) => (
                      <Link
                        key={index}
                        href={btn?.href}
                        className={`t-btn ${btn?.style}`}
                      >
                        {btn?.icon ? <i className={btn?.icon}></i> : btn?.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="services-wrapper-box fade-anim"
              data-direction="right"
            >
              {serviceData?.description && (
                <div className="text-wrapper">
                  <p className="text">{serviceData?.description}</p>
                </div>
              )}
              {serviceData?.services?.length > 0 && (
                <div className="services-wrapper">
                  <ul>
                    {serviceData?.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {serviceData?.gallery?.length > 0 && (
            <div className="gallery-wrapper">
              {serviceData?.gallery.map((img, i) =>
                img?.src ? (
                  <img
                    key={i}
                    className="fade-anim"
                    src={img.src}
                    alt={img.alt || "image"}
                  />
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
