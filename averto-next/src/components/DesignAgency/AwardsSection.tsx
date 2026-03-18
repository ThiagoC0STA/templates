import React from "react";
import {AwardData, IAward, IGroup} from "@/constant/DesignAgency/awards";

interface AwardProps {
  data: AwardData;
}

const AwardsSection:React.FC<AwardProps> = ({data:awardData}) => {
  return (
    <section className="awards-area-2">
      <div className="container">
        <div className="awards-area-2-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{awardData?.subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{awardData?.title}</h2>
              </div>
            </div>
          </div>

          <div className="awards-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="container">
              <div className="awards-wrapper">
                {awardData?.groups?.map((group:IGroup, idx:number) => (
                  <div className="site-group fade-anim" key={idx} suppressHydrationWarning={true}>
                    <h2 className="group-title">{group?.title}</h2>
                    <div className="group-wrapper">
                      {group?.awards?.map((award:IAward, i:number) => (
                        <div className="award-box-2" key={i}>
                          <div className="thumb">
                            <img
                              src={award?.image || "/fallback.jpg"}
                              alt={award?.title || "award image"}
                            />
                          </div>
                          <div className="award-title-wrapper">
                            <h3 className="title">{award?.title}</h3>
                            <span className="category">{award?.category}</span>
                          </div>
                          <span className="year">{award?.year}</span>
                        </div>
                      ))}
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

export default AwardsSection;
