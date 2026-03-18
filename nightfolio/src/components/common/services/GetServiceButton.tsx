import Button from "@/components/ui/Button";
import { useServiceContext } from "@/context/ServiceContext";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { ArrowRight } from "lucide-react";
import ClickableText from "../global/ClickableText";

const GetServiceButton = ({ idx }: { idx: number }) => {
  const { setServiceToggle, setServiceIdx } = useServiceContext();
  const scrollTo = useScrollToSection();

  const getService = () => {
    scrollTo("contact-form");
    setServiceIdx(idx);
    setServiceToggle((p) => !p);
  };

  return (
    <Button
      variant="outline"
      onClick={getService}
      className="px-8 h-20 text-2xl bg-transparent space-x-1.5"
    >
      <ClickableText text="get service" />
      <ArrowRight strokeWidth={1.75} size={28} className="button-arrow-right" />
    </Button>
  );
};

export default GetServiceButton;
