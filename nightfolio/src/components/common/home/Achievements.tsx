import { achievements } from "@/data/about";
import MaxWidthWrapper from "../global/MaxWidthWrapper";

const Achievements = () => {
  return (
    <div className="sticky! top-0 bg-(--bg-secondary) py-16 z-2">
      <MaxWidthWrapper className="grid lg:grid-cols-3 md:grid-cols-1 gap-16">
        {achievements.slice(0, 3).map((e, i) => (
          <div
            key={i}
            className="group md:space-y-0 space-y-16 flex flex-col items-center justify-between"
          >
            <div className="space-y-4 text-center w-full">
              <h1 className="lg:text-8xl text-7xl font-medium font-secondary">
                {e.count}
              </h1>
              <h1 className="lg:text-4xl text-3xl">{e.title}</h1>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Achievements;
