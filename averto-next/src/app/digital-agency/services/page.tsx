import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import InfoSection from "@/components/DigitalAgency/InfoSection";
import ChooseUsSection from "@/components/DigitalAgency/common/ChooseUsSection";
import TestimonialSection from "@/components/DigitalAgency/TestimonialSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/DigitalAgency/process";
import serviceData from "@/constant/DigitalAgency/service";
import infoData from "@/constant/DigitalAgency/info";
import chooseUsData from "@/constant/DigitalAgency/common/choose-us";
import footerData from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
  title: "Services || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your agency’s wide range of services with the Averto Services template. Designed to present offerings clearly and attractively, optimized for performance and SEO in Next.js.",
  keywords: [
    "Averto services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
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
            subTitle="Services"
            pageName="AGENCY SERVICES"
          />
          <ProcessSection className="page-services" data={processData} />
          <ServiceSection data={serviceData} />
          <InfoSection type={2} data={infoData} />
          <ChooseUsSection data={chooseUsData} />
          <TestimonialSection pageService={true} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default Home;
