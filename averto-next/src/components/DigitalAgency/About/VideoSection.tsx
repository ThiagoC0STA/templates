import React from "react";
import { IVideoData } from "@/constant/DigitalAgency/About/video";
interface VideoProps {
  data: IVideoData;
}

const VideoSection = ({ data: videoData }: VideoProps) => {
  const { videoUrl, subtitle, title } = videoData;
  return (
    <section className="video-area fade-anim">
      <div className="area-bg">
        <video loop muted autoPlay playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="video-area-inner section-spacing">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper fade-anim">
                <span className="section-subtitle">{subtitle}</span>
              </div>
              <div className="title-wrapper fade-anim ">
                <h2 className="section-title">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
