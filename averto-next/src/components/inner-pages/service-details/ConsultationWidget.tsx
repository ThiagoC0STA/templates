import { StaticImageData } from "next/image";
import ContactLink from "@/components/Link/ContactLink";

interface ConsultationWidgetProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: StaticImageData;
}

const ConsultationWidget = ({
  title,
  buttonText,
  buttonHref,
  backgroundImage,
}: ConsultationWidgetProps) => {
  return (
    <div className="widget__item widget__consultation">
      <div
        className="consultation-content"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <h6 className="h6">{title}</h6>
        <ContactLink link={buttonHref} buttonText={buttonText} />
      </div>
    </div>
  );
};

export default ConsultationWidget;
