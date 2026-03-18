import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import breadcrumbServicesImage from "@/assets/images/breadcrumb/breadcrumb-services.png";
import ServiceGrid from "@/components/inner-pages/ServiceGrid";

const Service = () => {
  return (
    <>
      <Breadcrumb
        classNameCustom="digital-collective"
        title="Service Grid"
        backgroundImage={breadcrumbServicesImage}
      />
      <ServiceGrid />
    </>
  );
};

export default Service;
