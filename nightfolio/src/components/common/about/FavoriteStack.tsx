"use client";
import { tool_images } from "@/data/about";
import AboutContent from "./AboutContent";
import Image from "next/image";
import useScrollStaggerAnimation from "@/hooks/useScrollStaggerAnimation";

const FavoriteStack = () => {
  const containerRef = useScrollStaggerAnimation<HTMLDivElement>({
    selector: ".tool",
    fromVars: { opacity: 0, y: 100 },
    toVars: {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    },
  });

  return (
    <AboutContent
      titleChild={
        <>
          My <br /> Tech Stack
        </>
      }
    >
      <div
        className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-8 mt-2"
        ref={containerRef}
      >
        {tool_images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square flex-center group tool rounded-full border border-primary"
          >
            <Image
              src={img}
              alt="tool"
              width={48}
              height={48}
              className="grayscale-100 group-hover:grayscale-0 duration"
            />
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default FavoriteStack;
