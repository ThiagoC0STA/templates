"use client";
import useBaseURL from "@/Hook/useBaseURL";
import Link from "next/link";
import React from "react";

const BlogLink = ({ link, linkText }: { link: string; linkText: string }) => {
  const baseUrl = useBaseURL();
  return <Link href={baseUrl + link}>{linkText}</Link>;
};

export default BlogLink;
