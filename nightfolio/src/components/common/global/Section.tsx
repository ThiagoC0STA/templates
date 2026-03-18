import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FillText from "./FillText";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Separator from "@/components/ui/Separator";

export const SectionTitle = ({
  section,
  children,
  center = false,
  margin = true,
}: {
  section: string;
  children: ReactNode;
  center?: boolean;
  margin?: boolean;
}) => {
  return (
    <div className={margin ? "mb-48" : ""}>
      <p
        className={cn(
          "text-xl uppercase flex gap-2 items-center text-center justify-center mb-8",
          center ? "" : "lg:text-start lg:justify-start"
        )}
      >
        <span className="size-3.5 bg-(--text-primary) rounded-full " />
        {section}
      </p>

      <FillText
        className={cn(
          "text-[clamp(90px,12vw,12vw)] leading-[clamp(80px,9vw,9vw)] font-semibold tracking-tight",
          center ? "text-center" : "text-query"
        )}
      >
        {children}
      </FillText>
    </div>
  );
};

const Section = ({
  id,
  children,
  className,
  separator = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  separator?: boolean;
}) => {
  return (
    <section id={id} className={cn(separator ? "pb-48" : "py-48", className)}>
      {separator ? (
        <MaxWidthWrapper className="pb-48">
          <Separator />
        </MaxWidthWrapper>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
