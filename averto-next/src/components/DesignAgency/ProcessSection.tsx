"use client";

import React, { useState } from "react";
import { ProcessData } from "@/constant/DesignAgency/process";

interface ProcessProps {
  data: ProcessData;
  type?: string;
}
const ProcessSection: React.FC<ProcessProps> = ({type, data: processData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section className="process-area-2">
      <div className="container">
      <div className={`process-area-2-inner ${type === "v2" ? "section-spacing" : "section-spacing-top"}`}>
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle light">
                  {processData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{processData?.title}</h2>
              </div>
            </div>
          </div>

          <div className="process-wrapper-box">
            <div className="process-wrapper process-hover-active fade-anim" suppressHydrationWarning={true}>
              {processData?.steps?.map((step, index) => (
                <div
                  key={index}
                  className={`process-box-2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                  <span className="number">{step?.number}</span>
                  <div className="content">
                    <h3 className="title">{step?.title}</h3>
                    <div className="process-list">
                      <ul>
                        {step?.items?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
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

export default ProcessSection;
