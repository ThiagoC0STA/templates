import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import ServiceSection from "@/components/MarketingAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/MarketingAgency/ProcessSection";
import ServiceDetailsSection from "@/components/MarketingAgency/ServiceDetails/ServiceDetailsSection";
import TextSliderSection from "@/components/MarketingAgency/TextSliderSection";
import FaqSection from "@/components/MarketingAgency/Faq/FaqSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";


// all data 
import processData from "@/constant/MarketingAgency/process";
import serviceDetailsData from "@/constant/MarketingAgency/service-details/service-details-data";
import serviceData from "@/constant/MarketingAgency/service-details/service-section-data";
import textSliderData from "@/constant/MarketingAgency/textSlider";
import faqData from "@/constant/MarketingAgency/faq/faq-data";
import footerData from "@/constant/MarketingAgency/footer";

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
    <div className="body-marketing-agency">
      <Header />
    </div>
      <SmoothScroll>
        <main>
        <div className="body-marketing-agency">
          <Breadcrumb
            title="AGENCY"
            subTitle="Service Details"
            pageName="AGENCY SERVICES"
          />
          <ServiceSection data={serviceData}/>
          <ProcessSection data={processData}/>
          <ServiceDetailsSection data={serviceDetailsData}/>
          <TextSliderSection data={textSliderData}/>
          <FaqSection type={2} data={faqData} />
        </div>
        </main>
        <div className="body-marketing-agency">
        <FooterSection data={footerData}/>
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;
