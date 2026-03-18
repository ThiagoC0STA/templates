import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import ProcessSection from "@/components/DesignAgency/ProcessSection";
import ServiceSection from "@/components/DesignAgency/ServiceSection";
import InfoSection from "@/components/DesignAgency/InfoSection";
import ChooseUsSection from "@/components/DesignAgency/common/ChooseUsSection";
import TestimonialSection from "@/components/DesignAgency/TestimonialSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/DesignAgency/process";
import serviceData from "@/constant/DesignAgency/service";
import infoData from "@/constant/DesignAgency/info";
import chooseUsData from "@/constant/DesignAgency/common/choose-us";
import testimonialData from "@/constant/DesignAgency/testimonial";
import footerData from "@/constant/DesignAgency/footer";

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
      <div className="body-design-agency">
        <Header/>
      </div>
      <SmoothScroll>
        <main>
          <div className="body-design-agency">
            <Breadcrumb
              title="AGENCY"
              subTitle="Services"
              pageName="AGENCY SERVICES"
            />
            <ProcessSection data={processData} />
            <ServiceSection data={serviceData} />
            <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
            <InfoSection data={infoData} />
            <TestimonialSection data={testimonialData} />
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
