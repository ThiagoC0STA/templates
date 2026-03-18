"use client";
import useBaseURL from "@/Hook/useBaseURL";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";
import React from "react";

const ContactLinkIcon = ({
  link,
  buttonText,
}: {
  link: string;
  buttonText: string;
}) => {
  const baseUrl = useBaseURL();
  return (
    <Link href={baseUrl + link} className="common-btn outline border-light">
      <span>{buttonText}</span>
      <ArrowIcon />
    </Link>
  );
};

export default ContactLinkIcon;
