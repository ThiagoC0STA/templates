"use client";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useProjectContext } from "@/context/ProjectContext";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { X } from "lucide-react";
import ProjectTags from "./ProjectTags";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import { ReactNode } from "react";
import ButtonArrowUpRight from "../global/ButtonArrowUpRight";
import ClickableText from "../global/ClickableText";

const ProjectLightboxContent = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </div>
  );
};

const ProjectLightbox = () => {
  const { projectIdx } = useProjectContext();
  const { title, description, image, link, tools } = projects[projectIdx];

  const { setIsOpenProject, isOpenProject } = useProjectContext();

  return (
    <>
      <div
        className={cn(
          "fixed bg-white/50 dark:bg-black/50 backdrop-blur-sm left-0 top-0 size-full z-40",
          isOpenProject
            ? "opacity-100 translate-y-0"
            : "translate-y-full opacity-0"
        )}
        onClick={() => setIsOpenProject(false)}
        style={{
          transitionDuration: isOpenProject
            ? "calc(var(--animation-duration)/2)"
            : "calc(var(--animation-duration)*2)",
        }}
      />

      <div
        className={cn(
          "animation-duration fixed right-4 group top-0 z-[42] rounded-full flex-center text-white p-4",
          isOpenProject
            ? "translate-y-4 opacity-100"
            : "-translate-y-full opacity-0"
        )}
        onClick={() => setIsOpenProject(false)}
      >
        <Button className="size-24 border" variant="primary">
          <X size={48} className="group-hover:rotate-90 duration-300" />
        </Button>
      </div>

      <div
        className={cn(
          "fixed z-[41] bg-(--bg-secondary) left-0 bottom-0 overflow-y-auto overflow-x-hidden size-full overscroll-contain",
          isOpenProject ? "translate-y-0" : "translate-y-full"
        )}
        style={{
          transitionDuration: "var(--animation-duration)",
        }}
        data-lenis-prevent
      >
        <MaxWidthWrapper className="space-y-16 py-16">
          <AnimatePresence>
            {isOpenProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="relative aspect-[16/12] size-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 75vw, 50vw"
                    className="object-cover pointer-events-auto duration-1000 ease-in-out"
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex max-sm:flex-col justify-between gap-4 sm:items-center">
            <h1 className="lg:text-7xl text-4xl">{title}</h1>

            {link ? (
              <Link href={link} target="_blank" className="group">
                <Button
                  variant="outline"
                  className="px-8 h-20 text-2xl rounded-full"
                >
                  <ClickableText text="Visit Site" /> <ButtonArrowUpRight />
                </Button>
              </Link>
            ) : null}
          </div>

          <ProjectLightboxContent title="project tags">
            <ProjectTags idx={projectIdx} />
          </ProjectLightboxContent>

          <ProjectLightboxContent title="about work">
            <p className="text-xl">{description}</p>
          </ProjectLightboxContent>

          <ProjectLightboxContent title="tools">
            <div className="flex items-center flex-wrap gap-4">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="rad border border-(--border) text-sm p-3"
                >
                  <Image
                    src={`/images/tools/${tool.toLowerCase()}.svg`}
                    alt={tool}
                    width={36}
                    height={36}
                  />
                </div>
              ))}
            </div>
          </ProjectLightboxContent>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default ProjectLightbox;
