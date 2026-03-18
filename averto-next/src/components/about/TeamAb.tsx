import Image from "next/image";
import { teamContent } from "@/content/about/teamAb";
import TeamLink from "../Link/TeamLink";

const TeamAb = () => {
  return (
    <div className="team-ab__area pb-150">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-6">
            <h2
              className="h2 section__header-title fade_up_anim"
              data-delay=".2"
            >
              {teamContent.sectionTitle}
            </h2>
            <p className="fade_up_anim" data-delay=".4">
              {teamContent.sectionDescription}
            </p>
          </div>
        </div>
        <div className="row gx-4 gy-5 pt-100">
          {teamContent.members.map((member) => (
            <div
              key={member.id}
              className="col-sm-6 col-md-4 col-xl-3 fade_up_anim"
              data-delay={member.delay}
            >
              <div className="team__card">
                <div className="team__card-thumb">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={350}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <ul className="custom-ul social-link">
                    {member.socialLinks.map((social) => (
                      <li key={social.id}>
                        <a href={social.url} aria-label={social.platform}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="team__card-content">
                  <TeamLink link={member.detailsUrl} memberName={member.name} />
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAb;
