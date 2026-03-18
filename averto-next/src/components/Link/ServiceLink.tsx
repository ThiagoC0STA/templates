"use client";
import useBaseURL from "@/Hook/useBaseURL";
import ArrowRightIconOne from "@/icons/ArrowRightIconOne";
import Link from "next/link";
import React from "react";

const ServiceLink = ({
  link,
  className,
  buttonText,
}: {
  link: string;
  className: string;
  buttonText: string;
}) => {
  const baseUrl = useBaseURL();
  return (
    <Link
      href={baseUrl + link}
      className={`common-btn ${className}`}
      data-delay=".45"
    >
      <span>{buttonText}</span>
      <ArrowRightIconOne />
    </Link>
  );
};

export default ServiceLink;
