import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/DesignAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/DesignAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/DesignAgency/Contact/ContactSection";
import Header from "@/components/DesignAgency/common/Header";
import FooterSection from "@/components/DesignAgency/FooterSection";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/DesignAgency/footer";
import contactData from "@/constant/DesignAgency/Contact/contact";
import chooseUsData from "@/constant/DesignAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Contact || Averto - Creative Digital Agency NextJS Template",
  description:
    "Get in touch with the Averto team. Whether you have questions, project inquiries, or want to collaborate, our contact page makes it easy to connect.",
  keywords: [
    "Averto contact page",
    "NextJS contact template",
    "agency contact",
    "business contact page",
    "get in touch",
    "contact form NextJS",
    "digital agency contact",
    "startup contact page",
    "professional contact page",
    "customer support",
    "contact details",
    "business inquiries",
    "NextJS contact form",
    "responsive contact page",
    "contact us",
    "contact page template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Contact Page",
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
              subTitle="Contact"
              pageName="AGENCY CONTACT"
            />
            <ContactMetaSection />
          </div>
          <ContactSection data={contactData} />
          <div className="body-design-agency">
            <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
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
