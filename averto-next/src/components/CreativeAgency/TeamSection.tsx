"use client";
import React from "react";
import { TeamData } from "@/constant/CreativeAgency/teams";
import Link from "next/link";
interface TeamProps {
  data: TeamData[];
  all?: boolean;
  type?: string;
}
const TeamSection: React.FC<TeamProps> = ({ all, type, data: teamData }) => {
  const totalMembers = all ? teamData : teamData?.slice(0, 3);
  return (
    <section className="team-area-3">
      <div className="container">
        <div
          className={`team-area-3-inner ${
            type === "v2" ? "section-spacing-top" : "section-spacing"
          }`}
        >
          {/* Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">( Our Creative Team )</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">Meet Our Professionals</h2>
              </div>
            </div>
            {!all && (
              <div className="btn-wrapper fade-anim">
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href="/creative-agency/team"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href="/creative-agency/team"
                  >
                    Our Team
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href="/creative-agency/team"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Team Members */}
          <div className="team-wrapper-box">
            <div className="team-wrapper">
              {totalMembers?.map((member: TeamData, index) => (
                <div
                  className="team-box-3 fade-anim"
                  key={index}
                  data-delay={(0.3 + index * 0.15).toFixed(2)}
                  data-direction="right"
                >
                  <div className="thumb">
                    <span className="post-on-thumb">{member.shortRole}</span>
                    <div className="social-links-wrapper">
                      <div className="links-holder">
                        <i className="fa-solid fa-share-nodes"></i>
                      </div>
                      <div className="social-links">
                        <Link href={member?.socials?.facebook}>
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link href={member?.socials?.dribbble}>
                          <i className="fa-solid fa-basketball"></i>
                        </Link>
                        <Link href={member?.socials?.behance}>
                          <i className="fa-brands fa-behance"></i>
                        </Link>
                      </div>
                    </div>
                    <img src={member?.image} alt={member?.name} />
                  </div>
                  <div className="content">
                    <h3 className="name">{member?.name}</h3>
                    <span className="post">{member?.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
