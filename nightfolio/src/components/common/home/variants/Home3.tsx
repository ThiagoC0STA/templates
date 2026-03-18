import { personal_data } from "@/data/home";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import Section from "../../global/Section";
import HeroName from "../HeroName";
import SocialLinks from "../../global/SocialLinks";
import Image from "next/image";
import { achievements } from "@/data/about";
import { cn } from "@/lib/utils";
import ArrowButtonNav from "@/components/ui/ArrowButtonNav";
import PortfolioOverviewSubSection from "@/components/sections/PortfolioOverviewSubSection";

const HeroImage = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative 2xl:size-90 lg:size-80 size-70", className)}>
      <div className="absolute position-center 2xl:size-90 lg:size-80 flex-center rounded-full scale-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlLang="en"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          className="absolute 2xl:size-[500px] lg:size-[426px] size-[360px] rounded-full scale-up circular-text"
        >
          <defs>
            <path
              id="textcircle"
              d="M250,400
                            a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)"
            />
          </defs>
          <g className="textcircle">
            <text
              textLength="940"
              className="text-3xl uppercase fill-(--text-primary)"
            >
              <textPath
                xlinkHref="#textcircle"
                aria-label="contact me"
                textLength="940"
              >
                {`${achievements
                  .slice(0, 3)
                  .map((a) => `${a.count} ${a.title}`)
                  .join(" ✺ ")} ✺`}
                &#160;
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <div className="absolute position-center 2xl:size-70 lg:size-60 size-50 aspect-square bg-(--color-landing) rounded-full">
        <Image
          src={personal_data.image}
          fill
          alt="hero"
          sizes="75vw"
          className="object-cover absolute rounded-full"
        />
      </div>
    </div>
  );
};

const Home3 = () => {
  return (
    <Section id="home" className="pt-38! pb-0!" separator={false}>
      <HeroName className="text-center! shrink-text origin-bottom" />

      <MaxWidthWrapper className="space-y-16 bg-(--bg-primary) py-16">
        <div className="relative flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:gap-0 gap-16">
          <div className="space-y-16 flex-1">
            <h1 className="2xl:text-[6.5vw] 2xl:leading-[6.5vw] text-[clamp(40px,7vw,7vw)] leading-[clamp(40px,7vw,7vw)] md:text-start text-center overflow-hidden">
              <span className="slide-up block">{personal_data.job}</span>
            </h1>

            <div className="flex 2xl:flex-row flex-col 2xl:items-center md:items-start items-center  md:justify-start justify-center gap-16">
              <SocialLinks theme />
              <h1 className="text-5xl lg:inline hidden">✺</h1>
              <ArrowButtonNav text="Let's Talk" section="contact" />
            </div>
          </div>

          <HeroImage />
        </div>
      </MaxWidthWrapper>

      <div className="mt-32">
        <PortfolioOverviewSubSection />
      </div>
    </Section>
  );
};

export default Home3;
