"use client";
import useBaseURL from "@/Hook/useBaseURL";
import Link from "next/link";
import React from "react";

const TeamLink = ({
  link,
  memberName,
}: {
  link: string;
  memberName: string;
}) => {
  const baseUrl = useBaseURL();
  return (
    <h6 className="h6">
      <Link href={baseUrl + link}>{memberName}</Link>
    </h6>
  );
};

export default TeamLink;
