import {ProcessData} from '@/constant/MarketingAgency/process';

interface ProcessSectionProps {
  data: ProcessData[];
}

const ProcessSection:React.FC<ProcessSectionProps> = ({data:processData}) => {
  return (
    <section className="process-area-3">
      <div className="container">
        <div className="process-area-3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">( Discover Work Process )</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">How we works</h2>
              </div>
            </div>
          </div>
          <div className="process-wrapper-box">
            <div className="process-wrapper">
              {processData.map((item, index) => (
                <div key={index} className="process-box-3 fade-anim" suppressHydrationWarning={true}>
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p className="text">{item.text}</p>
                  </div>
                  <span className="number">{item.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
