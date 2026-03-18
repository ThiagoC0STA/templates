"use client";

import Link from "next/link";
import { ITeam, TeamData } from "@/constant/AiAgency/teamTwo";

interface TeamsSectionProps {
  all?: boolean;
  data: TeamData;
}

const TeamsSection: React.FC<TeamsSectionProps> = ({ all, data: teamData }) => {
  const totalMembers = all ? teamData?.members : teamData?.members?.slice(0, 3);
  return (
    <section className="team-area">
      <div className="team-area-inner section-spacing">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {teamData?.section?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{teamData?.section?.title}</h2>
              </div>
            </div>

            {!all && (
              <div className="btn-wrapper fade-anim">
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
            )}
          </div>
          {/* Team Members */}

          <div className="row g-4 teams-wrapper-box">
            {totalMembers?.map((member: ITeam, index: number) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="team-box-4 fade-anim"
                  data-direction="right"
                  data-delay={index % 2 === 0 ? "0.30" : "0.45"}
                >
                  <div className="thumb">
                    <img
                      src={member?.image}
                      alt={member?.name || "Team Member"}
                    />
                  </div>
                  <div className="content">
                    <h3 className="name">{member?.name}</h3>
                    <span className="post">({member?.position})</span>
                  </div>
                  <div className="social-links-wrapper">
                    <div className="links-holder">
                      <i className="fa-solid fa-share-nodes"></i>
                      <div className="social-links">
                        <a href={member?.socials?.instagram} target="_blank">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href={member?.socials?.twitter} target="_blank">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href={member?.socials?.facebook} target="_blank">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href={member?.socials?.linkedin} target="_blank">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
