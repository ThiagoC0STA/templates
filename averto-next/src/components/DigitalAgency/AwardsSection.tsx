import {AwardsData, IAward} from '@/constant/DigitalAgency/awards';

interface AwardsProps {
  data: AwardsData;
}
const AwardsSection: React.FC<AwardsProps> = ({ data: awardsData }) => {
  return (
    <section id="awards" className="awards-area">
      <div className="awards-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{awardsData?.section?.subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{awardsData?.section?.title}</h2>
              </div>
            </div>
            <div className="text-wrapper fade-anim" suppressHydrationWarning={true}>
              <p className="text">{awardsData?.section?.description}</p>
            </div>
          </div>
        </div>

        <div className="awards-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <div className="container">
            <div className="awards-wrapper">
              {awardsData?.list?.map((award:IAward, idx:number) => (
                <div className="award-box-1 fade-anim" key={idx} suppressHydrationWarning={true}>
                  <h3 className="title">{award?.title}</h3>
                  <span className="year">{award?.year}</span>
                  <div className="thumb">
                    <img src={award?.image} alt={award?.title} />
                  </div>
                  <span className="category">{award?.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
