import React from "react";
import { TeamData } from "@/constant/DesignAgency/team";
import Link from "next/link";

interface TeamProps {
  data: TeamData;
  all?: boolean;
}
const TeamSection: React.FC<TeamProps> = ({ all, data: teamData }) => {
  const displayTeamData = all
    ? teamData?.members
    : teamData?.members.slice(0, 3);

  return (
    <section className="team-area-2">
      <div className="container">
        <div
          className={`team-area-2-inner ${
            all ? "section-spacing" : "section-spacing"
          }`}
        >
          {!all && (
            <div className="section-header">
              <div
                className="section-title-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{teamData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{teamData?.title}</h2>
                </div>
              </div>
              <div
                className="btn-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={teamData?.teamPageLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={teamData?.teamPageLink || "#"}
                  >
                    {teamData?.teamPageLinkTitle}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={teamData?.teamPageLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div
            className={`team-wrapper-box fade-anim ${
              all ? "mt-0 pt-0 border-0" : "section-spacing"
            } `}
            suppressHydrationWarning={true}
          >
            <div className="team-wrapper">
              {displayTeamData?.map((member, idx) => (
                <div
                  className="team-box-2 fade-anim"
                  suppressHydrationWarning={true}
                  key={idx}
                  data-delay={`0.${30 + idx * 15}`}
                  data-direction="right"
                >
                  <div className="social-links">
                    <a href={member?.socials?.fb || "#"}>FB</a>
                    <a href={member?.socials?.ln || "#"}>LN</a>
                    <a href={member?.socials?.in || "#"}>IN</a>
                  </div>
                  <div className="thumb">
                    <img
                      src={member?.image}
                      alt={member?.name || "team member"}
                    />
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
