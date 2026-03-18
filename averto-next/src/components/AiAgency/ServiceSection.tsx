"use client";
import Link from "next/link";
import { Tab, Nav, Container } from "react-bootstrap";
import { serviceSectionData, servicesData, Service } from "@/constant/AiAgency/service";

const ServiceSection: React.FC = () => {
  return (
    <div className="service-area-4">
      <div className="service-area-4-inner section-spacing">
        <Container>
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {serviceSectionData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  {serviceSectionData?.title}
                </h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceSectionData?.exploreLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={serviceSectionData?.exploreLink || "#"}
                >
                  Explore More
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={serviceSectionData?.exploreLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <Container>
            <div className="services-wrapper">
              <Tab.Container defaultActiveKey={servicesData?.[0]?.id}>
                <Nav
                  variant="pills"
                  className="flex-column nav nav-pills"
                  role="tablist"
                >
                  {servicesData?.map((service: Service) => (
                    <Nav.Item key={service?.id}>
                      <Nav.Link eventKey={service?.id} role="tab">
                        <div className="service-name">
                          <h2 className="title">{service?.title}</h2>
                          <p className="text">
                            {service?.projectsAvailable} Projects Available
                          </p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content id="pills-tabContent">
                  {servicesData?.map((service) => (
                    <Tab.Pane key={service?.id} eventKey={service?.id}>
                      <div className="service-box-4">
                        <div className="thumb">
                          <div className="meta">
                            {service?.projectsDone} Projects Done
                          </div>
                          <img
                            src={service?.image}
                            alt={service?.title || "Service image"}
                          />
                        </div>
                        <div className="content">
                          <h3 className="title">{service?.title}</h3>
                          <p className="text">{service?.description}</p>
                          <div className="t-btn-group">
                            <Link
                              className="t-btn t-btn-circle"
                              href={service?.detailLink || "#"}
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <Link
                              className="t-btn t-btn-primary"
                              href={service?.detailLink || "#"}
                            >
                              View Details
                            </Link>
                            <Link
                              className="t-btn t-btn-circle"
                              href={service?.detailLink || "#"}
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
