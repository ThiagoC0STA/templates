import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types/inner-pages/team";
import TeamLink from "@/components/Link/TeamLink";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team__card">
      <div className="team__card-thumb">
        <Image src={member.image} alt={member.alt} />
        <ul className="custom-ul social-link">
          {member.socialLinks.map((social) => (
            <li key={social.id}>
              <a href={social.href}>
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="team__card-content">
        <TeamLink link={member.href} memberName={member.name} />
        <span>{member.position}</span>
      </div>
    </div>
  );
};

export default TeamCard;
