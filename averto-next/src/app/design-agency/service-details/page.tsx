import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import ServiceSection from "@/components/DesignAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/DesignAgency/ProcessSection";
import ServiceDetailsSection from "@/components/DesignAgency/ServiceDetails/ServiceDetailsSection";
import TextSliderSection from "@/components/DesignAgency/TextSliderSection";
import FaqSection from "@/components/DesignAgency/Faq/FaqSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/DesignAgency/process";
import serviceDetailsData from "@/constant/DesignAgency/service-details/service-details-data";
import serviceData from "@/constant/DesignAgency/service-details/service-section-data";
import textSliderData from "@/constant/DesignAgency/text-slider";
import faqData from "@/constant/DesignAgency/faq/faq-data";
import footerData from "@/constant/DesignAgency/footer";

export const metadata: Metadata = {
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
      <div className="body-design-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-design-agency">
            <Breadcrumb
              title="AGENCY"
              subTitle="Service Details"
              pageName="AGENCY SERVICES"
            />
            <ServiceSection type="v2" data={serviceData} />
            <ProcessSection type="v2" data={processData} />
            <ServiceDetailsSection type="v2" data={serviceDetailsData} />
            <TextSliderSection data={textSliderData} />
            <FaqSection type={2} data={faqData} />
          </div>
        </main>
        <div className="body-design-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;
