import About from "@/components/about/About";
import React from "react";
import TestimonialAb from "@/components/about/TestimonialAb";
import TeamAb from "@/components/about/TeamAb";
import BrandSliderAb from "@/components/about/BrandSliderAb";
import Breadcrumb from "@/components/common/Breadcrumb";
import breadcrumbAboutImage from "@/assets/images/breadcrumb/breadcrumb-about-us.png";

const AboutSection = () => {
  return (
    <>
      <Breadcrumb
        classNameCustom="digital-collective"
        title="About Us"
        backgroundImage={breadcrumbAboutImage}
      />
      <About />
      <TestimonialAb />
      <TeamAb />
      <BrandSliderAb />
    </>
  );
};

export default AboutSection;
