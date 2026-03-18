"use client";
import useBaseURL from "@/Hook/useBaseURL";
import Link from "next/link";
import React from "react";

const ContactLink = ({
  link,
  buttonText,
}: {
  link: string;
  buttonText: string;
}) => {
  const baseUrl = useBaseURL();
  return (
    <Link
      href={baseUrl + link}
      className="common-btn w-100 justify-content-center"
    >
      <span>{buttonText}</span>
    </Link>
  );
};

export default ContactLink;
