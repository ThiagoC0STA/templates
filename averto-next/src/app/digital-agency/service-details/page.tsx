import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ServiceSection from "@/components/DigitalAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceDetailsSection from "@/components/DigitalAgency/ServiceDetails/ServiceDetailsSection";
import TextSliderSection from "@/components/DigitalAgency/TextSliderSection";
import FaqSection from "@/components/DigitalAgency/Faq/FaqSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";


// all data 
import processData from "@/constant/DigitalAgency/process";
import serviceDetailsData from "@/constant/DigitalAgency/service-details/service-details-data";
import serviceData from "@/constant/DigitalAgency/service-details/service-section-data";
import textSliderData from "@/constant/DigitalAgency/textSlider";
import faqData from "@/constant/DigitalAgency/faq/faq-data";
import footerData from "@/constant/DigitalAgency/footer";

export const metadata:Metadata = {
  title: "Service Details || Averto - Creative Digital Agency NextJS Template",
  description:
    "Explore detailed information about our services with the Averto Service Details template. Perfect for showcasing features, benefits, and case studies of your agency's offerings with SEO-friendly design.",
  keywords: [
    "Averto service details",
    "NextJS service details template",
    "agency service page",
    "service features showcase",
    "responsive service details",
    "SEO optimized service page",
    "digital agency services",
    "startup service details",
    "professional service layout",
    "service benefits",
    "case studies",
    "service description",
    "modern service page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Service Details Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Service Details"
            pageName="AGENCY SERVICES"
          />
          <ServiceSection data={serviceData}/>
          <ProcessSection className="page-services" data={processData}/>
          <ServiceDetailsSection data={serviceDetailsData}/>
          <TextSliderSection data={textSliderData}/>
          <FaqSection type={2} data={faqData} />
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;
