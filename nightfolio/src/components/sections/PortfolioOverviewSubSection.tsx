import { personal_data } from "@/data/home";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import ProjectSliderParallax from "../common/projects/ProjectSliderParallax";
import ArrowButtonNav from "../ui/ArrowButtonNav";
import Separator from "../ui/Separator";

const PortfolioOverviewSubSection = () => {
  return (
    <div className="bg-(--bg-secondary) relative z-20 space-y-8 pb-48">
      <Separator />
      <MaxWidthWrapper>
        <div className="flex lg:justify-between lg:flex-row flex-col gap-4 items-center">
          <p className=" lg:w-140 lg:text-2xl text-lg text-query text-(--text-primary)!">
            {personal_data.short_description}
          </p>

          <ArrowButtonNav text="My Work" section="portfolio" />
        </div>
      </MaxWidthWrapper>
      <ProjectSliderParallax />
    </div>
  );
};

export default PortfolioOverviewSubSection;
