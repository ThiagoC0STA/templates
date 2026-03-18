"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import { servicesData } from "@/content/digital-agency/home/service";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services-digital pt-150 pb-150">
      <div className="container container-mini">
        <div className="row">
          <div className="col-12 d-sm-flex justify-content-between align-items-center text-center text-sm-start">
            <div className="section__header-v12 fade_up_anim">
              <span className="section__header-sub-title-v12">
                {servicesData.sectionSubtitle}
              </span>
              <h2 className="h2 section__header-title-v12">
                {servicesData.sectionTitle}
              </h2>
            </div>
            <Link
              href={servicesData.viewAllLink}
              className="common-btn common-btn-v1 white-btn mt-4 mt-sm-0"
            >
              <span>{servicesData.viewAllText}</span>
            </Link>
          </div>
        </div>
        <div className="row pt-100">
          <div className="col-12">
            <Accordion
              defaultActiveKey="0"
              className="services-digital__accordion"
            >
              {servicesData.services.map((service) => (
                <Accordion.Item
                  key={service.id}
                  eventKey={service.id}
                  className="services-digital__item fade_up_anim"
                  data-delay={service.delay}
                >
                  <Accordion.Header className="h4 services-digital__item-title">
                    {service.title}
                  </Accordion.Header>
                  <Accordion.Body className="services-digital__item-content-wrapper">
                    <div className="services-digital__item-content">
                      <p>{service.description}</p>
                      <ul className="custom-ul services-digital__item-tags">
                        <li>
                          <Link href={service.link}>Discover More</Link>
                        </li>
                      </ul>
                    </div>
                    <figure className="services-digital__item-thumb">
                      <Image src={service.image} alt={service.title} />
                    </figure>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
