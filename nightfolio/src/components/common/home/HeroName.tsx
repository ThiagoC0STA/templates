import { personal_data } from "@/data/home";
import { cn } from "@/lib/utils";

const HeroName = ({ className }: { className?: string }) => {
  const nameLength =
    personal_data.name.length < 9 ? 9 : personal_data.name.length;

  const viewWidth = `${100 / (nameLength - (nameLength / 100) * 49.5)}vw`;

  return (
    <h1
      className={cn(
        "font-extrabold text-center text-nowrap overflow-hidden group scale-y-175",
        className
      )}
      style={{
        fontSize: viewWidth,
        lineHeight: viewWidth,
      }}
    >
      <span className="block slide-up">{personal_data.name}</span>
    </h1>
  );
};

export default HeroName;
