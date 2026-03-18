"use client";

import { useState } from "react";
import Link from "next/link";
import { TeamData } from "@/constant/MarketingAgency/team";

interface TeamProps {
  data: TeamData;
  all?: boolean;
}
const TeamSection: React.FC<TeamProps> = ({ all, data: teamData }) => {
  const [activeTab, setActiveTab] = useState(teamData?.members?.[0]?.id);
  const members = all ? teamData?.members : teamData?.members?.slice(0, 3);

  return (
    <section className="team-area-5">
      <div className="team-area-5-inner section-spacing">
        <div className="container">
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

            {!all && (
              <div
                className="btn-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={teamData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={teamData?.cta?.url || "#"}
                  >
                    {teamData?.cta?.text}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={teamData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="team-wrapper-box fade-anim"
            suppressHydrationWarning={true}
          >
            <div className="team-wrapper-5">
              <ul className="nav nav-team" id="team-tab" role="tablist">
                {teamData?.members?.map((member) => (
                  <li className="nav-item" role="presentation" key={member?.id}>
                    <div
                      className={`nav-link ${
                        activeTab === member?.id ? "active" : ""
                      }`}
                      role="tab"
                      onClick={() => setActiveTab(member?.id)}
                    >
                      <div className="author">
                        <h3 className="name">{member?.name}</h3>
                        <span className="post">{member?.role}</span>
                        <Link
                          className="t-btn t-btn-circle"
                          href="/marketing-agency/contact"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="team-tabContent">
                {members?.map((member) => (
                  <div
                    key={member?.id}
                    className={`tab-pane fade ${
                      activeTab === member?.id ? "show active" : ""
                    }`}
                    id={`team-${member?.id}`}
                    role="tabpanel"
                  >
                    <div className="team-box">
                      <div className="thumb">
                        <img
                          src={member?.image}
                          alt={member?.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="social-links">
                        {member?.socials?.map((social, idx) => (
                          <Link key={idx} href={social?.url || "#"}>
                            <i className={social?.icon}></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
