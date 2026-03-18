"use client";

import { useState } from "react";
import Link from "next/link";
import { ITeam, TeamData } from "@/constant/DigitalAgency/teams";

interface TeamsSectionProps {
  all?: boolean;
  data: TeamData;
}

const TeamsSection: React.FC<TeamsSectionProps> = ({ all, data: teamData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalMembers = all ? teamData?.members : teamData?.members?.slice(0, 3);
  return (
    <section className="team-area">
      <div className="team-area-inner section-spacing">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {teamData?.section?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{teamData?.section?.title}</h2>
              </div>
            </div>

            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={teamData?.section?.buttonUrl || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={teamData?.section?.buttonUrl || "#"}
                >
                  {teamData?.section?.buttonText}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={teamData?.section?.buttonUrl || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="team-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <div className="container">
            <div className="team-wrapper team-hover-active">
              {totalMembers?.map((member:ITeam, index:number) => (
                <div
                  key={member?.id}
                  className={`team-box-1 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="thumb">
                    <span className="number">{member?.number}</span>
                    <div className="icon">
                      <img src={member?.shape} alt="shape" />
                    </div>
                    <span className="post">{member?.post}</span>
                    <img src={member?.image} alt={member?.name} />
                  </div>
                  <div className="content">
                    <h3 className="name">{member?.name}</h3>
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

export default TeamsSection;
