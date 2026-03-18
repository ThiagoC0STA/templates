"use client";
import { cv, experience } from "@/data/about";
import AboutContent, { AboutContentTitle } from "./AboutContent";
import { useStackedCards } from "@/hooks/useStackedCards";
import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ButtonArrowUpRight from "../global/ButtonArrowUpRight";
import ClickableText from "../global/ClickableText";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useStackedCards(containerRef, { scale: 0.5 });

  return (
    <AboutContent>
      <div>
        <div className="lg:sticky lg:top-20 relative flex flex-col gap-8 items-query">
          <AboutContentTitle>
            My <br /> Experience
          </AboutContentTitle>
          <div className="flex items-center gap-2 ">
            <div className="relative size-2 rounded-full bg-[#08ff00]">
              <div className="available-badge bg-[#08ff0080] absolute size-full rounded-full"></div>
            </div>
            <h1 className="max-sm:text-sm text-lg font-light">
              available for work
            </h1>
          </div>
          <Link
            href={cv.source}
            target="_blank"
            type={cv.file_type}
            className="group"
          >
            <Button variant="outline" className="px-8 h-20 text-2xl">
              <ClickableText text="View My CV" />
              <ButtonArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-2" ref={containerRef}>
        {experience.map((e, i) => (
          <div
            key={i}
            className="sticky stacked-card top-20 padding-query flex items-center justify-query md:gap-8 gap-4 border-t-2 first:border-0  border-primary bg-(--bg-secondary) group"
          >
            <h1 className="text-lg rad text-nowrap lg:p-8 p-4 2xl:inline-block hidden border-(--border) border-2 group-hover:border-(--text-primary) duration font-secondary">
              {e.years}
            </h1>

            <div className="flex flex-col gap-4 items-query text-query">
              <h1 className="text-lg text-nowrap p-4 2xl:hidden inline-block border-(--border) border font-secondary">
                {e.years}
              </h1>
              <h1 className="md:text-2xl text-xl">{e.event}</h1>
              <p className="capitalize">{e.location}</p>
            </div>
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default Experience;
