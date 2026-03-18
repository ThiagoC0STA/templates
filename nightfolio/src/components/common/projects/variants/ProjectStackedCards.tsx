"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectTags from "../ProjectTags";
import { cn } from "@/lib/utils";
import CountTitle from "../../global/CountTitle";
import { useRef } from "react";
import { useStackedCards } from "@/hooks/useStackedCards";
import { useProjectDialog } from "@/hooks/useProjectDialog";

const ProjectStackedCard = ({
  idx,
  image,
  title,
  sticky,
}: {
  idx: number;
  image: string;
  title: string;
  sticky: boolean;
}) => {
  const { openProjectDialog } = useProjectDialog();

  return (
    <div
      className={cn(
        sticky ? "sticky top-16" : "relative",
        "stacked-card aspect-[16/10] z-30 overflow-hidden block group rad lightbox-trigger"
      )}
      onClick={() => openProjectDialog(idx)}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 75vw"
        className="object-cover rad scale-115 zoom-out-image"
      />

      <div className="absolute left-0 bottom-0 size-full bg-gradient-to-b from-black/45 to-black/0 rad opacity-0 group-hover:opacity-100 duration" />

      <div className="absolute left-8 top-0 w-[calc(100%-64px)] sm:flex hidden items-start justify-between gap-4 rad group-hover:translate-y-full -translate-y-full duration">
        <div className="text-4xl flex gap-4">
          <CountTitle idx={idx} className="text-white!" active />
          <h1 className="mix-blend-difference line-clamp-1 flex-1 text-white!">
            {title}
          </h1>
        </div>

        <ProjectTags
          idx={idx}
          limit={3}
          className="bg-white/15 text-white border-none"
        />
      </div>
    </div>
  );
};

const ProjectStackedCards = ({ sticky = true }: { sticky?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useStackedCards(containerRef, { start: "top 25%" });

  return (
    <div className="relative 2xl:px-32 space-y-16" ref={containerRef}>
      {projects.map((project, i) => (
        <ProjectStackedCard key={i} idx={i} {...project} sticky={sticky} />
      ))}
    </div>
  );
};

export default ProjectStackedCards;
