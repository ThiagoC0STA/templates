import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import FaqSection from "@/components/MarketingAgency/Faq/FaqSection";
import ContactSection from "@/components/MarketingAgency/Contact/ContactSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/MarketingAgency/footer";
import contactData from "@/constant/MarketingAgency/Contact/contact";
import faqData from "@/constant/MarketingAgency/faq/faq-data";

export const metadata: Metadata = {
  title: "FAQ || Averto - Creative Digital Agency NextJS Template",
  description:
    "Find answers to frequently asked questions about Averto, our Next.js templates, and services. Get quick support and clear information to help you make the most of our agency solutions.",
  keywords: [
    "Averto FAQ page",
    "NextJS FAQ template",
    "agency frequently asked questions",
    "customer support FAQ",
    "digital agency FAQ",
    "startup FAQ page",
    "common questions",
    "template support",
    "NextJS support page",
    "responsive FAQ design",
    "professional FAQ layout",
    "help and support",
    "template information",
    "client questions",
    "FAQ page design",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "FAQ Page",
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
              subTitle="FAQ’s"
              pageName="AGENCY FAQ’s"
            />
            <FaqSection data={faqData} />
            <ContactSection data={contactData} />
            <FaqSection type={2} imageSrc={2} data={faqData} />
          </div>
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;
