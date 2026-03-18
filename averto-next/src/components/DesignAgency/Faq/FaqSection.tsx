"use client";
import { IFaq } from "@/constant/DesignAgency/faq/faq-data";
import { Accordion } from "react-bootstrap";

interface FaqProps {
  type?: number;
  imageSrc?: number;
  data: IFaq[];
}

const FaqSection:React.FC<FaqProps> = ({ type, imageSrc: img,data:faqData }) => {
  const imageSrc1 = "/assets/imgs/gallery/image-21.webp";
  const imageSrc2 = "/assets/imgs/gallery/image-22.webp";
  const imageSrc = img === 2 ? imageSrc2 : imageSrc1;

  return (
    <section className={`${type === 2 ? "faq-area-2" : "faq-area"} `}>
      <div className="container">
        <div
          className={`${
            type === 2 ? "faq-area-2-inner" : "faq-area-inner"
          }  section-spacing`}
        >
          <div className="section-content-wrapper">
            <div
              className={`faq-thumb fade-anim order-${type === 2 ? 1 : 0}`}
              data-direction={type === 2 ? "right" : "left"}
            >
              <img src={imageSrc} alt="FAQ Image" />
            </div>
            <div
              className={`section-content fade-anim order-${
                type === 2 ? 0 : 1
              }`}
              data-direction={type === 2 ? "left" : "right"}
            >
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">Have any questions?</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Discover answers in FAQ’s</h2>
                </div>
              </div>

              <div
                className={`${
                  type === 2 ? "accordion-wrapper-2" : "accordion-wrapper"
                }`}
              >
                <Accordion defaultActiveKey="0">
                  {faqData?.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>{item?.question}</Accordion.Header>
                      <Accordion.Body>{item?.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
