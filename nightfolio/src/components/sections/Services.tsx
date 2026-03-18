import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import Section, { SectionTitle } from "../common/global/Section";
import { ArrowDownLeftSVG } from "../arrows/Arrows";
import ServiceSlider from "../common/services/variants/ServiceSlider";
import { services_option } from "@/data/config";
import ServiceCards from "../common/services/variants/ServiceCards";
import ServiceList from "../common/services/variants/ServiceList";

const Services = () => {
  return (
    <Section id="services" className="pt-0!" separator={false}>
      {services_option !== "slider" ? (
        <MaxWidthWrapper>
          <div className="lg:flex justify-between items-center mb-48">
            <div>
              <SectionTitle margin={false} section="services">
                my <br /> services
              </SectionTitle>
            </div>
            <ArrowDownLeftSVG />
          </div>
        </MaxWidthWrapper>
      ) : null}

      {services_option === "cards" ? (
        <ServiceCards />
      ) : services_option === "list" ? (
        <ServiceList />
      ) : (
        <ServiceSlider />
      )}
    </Section>
  );
};

export default Services;
