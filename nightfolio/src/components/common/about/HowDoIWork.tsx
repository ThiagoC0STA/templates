"use client";
import { how_do_i_work } from "@/data/about";
import AboutContent from "./AboutContent";
import FillText from "../global/FillText";
import { cn } from "@/lib/utils";

const HowDoIWork = () => {
  const text_class = "lg:text-[2.3rem] sm:text-3xl text-2xl text-query";
  return (
    <AboutContent
      titleChild={
        <>
          How <br /> Do I Work
        </>
      }
      sticky
    >
      <div className="space-y-8">
        {how_do_i_work.map((txt, i) => (
          <div key={i} className="space-y-2">
            <FillText className={cn(text_class, "text-start!")}>
              ✺ {i < 9 ? 0 : null}
              {i + 1}
            </FillText>

            <FillText
              textType="paragraph"
              className={cn(text_class, "text-start!")}
            >
              {txt}
            </FillText>
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default HowDoIWork;
