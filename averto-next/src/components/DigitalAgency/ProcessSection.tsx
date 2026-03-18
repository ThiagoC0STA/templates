import React from "react";
import Link from "next/link";
import {IProcessStep, ProcessData} from "@/constant/DigitalAgency/process";

interface ProcessSectionProps {
  processSix?: boolean;
  className?: string;
  data: ProcessData;
}

const ProcessSection:React.FC<ProcessSectionProps> = ({processSix,className:cls,data:processData}) => {
  return (
    <section className={processSix ? 'process-area-6' : `process-area ${cls}`}>
      <div className={`${processSix ? 'process-area-6-inner':'process-area-inner'} section-spacing`}>
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{processData?.sectionSubtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{processData?.sectionTitle}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim">
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={processData?.ctaLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={processData?.ctaLink || "#"}>
                  {processData?.ctaText}
                </Link>
                <Link className="t-btn t-btn-circle" href={processData?.ctaLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="process-wrapper-box fade-anim">
          <div className="container">
            <div className="process-wrapper">
              {processData?.steps?.map((step:IProcessStep) => (
                <div className="process-box-1 fade-anim" key={step?.id}>
                  <span className="number">{step?.number}</span>
                  <div className="thumb">
                    <img src={step?.image} alt={step?.title || "process step"} />
                  </div>
                  <div className="content">
                    <h3 className="title">{step?.title}</h3>
                    <p className="text">{step?.description}</p>
                  </div>
                </div>
              ))}
              {!processData?.steps?.length && <p>No process steps available.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;