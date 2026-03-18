import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="py-14 lg:py-[100px] xl:py-[140px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-6 rounded-2xl px-5 py-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex flex-1/3 flex-col items-center justify-center gap-6 py-[22px]">
                <div className="bg-ns-green w-fit rounded-full px-14.5 py-3.5">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={200} speed={2000} interval={100} rooms={3} />
                    <span>+</span>
                  </p>
                </div>
                <p className="text-heading-6 text-center text-white">Integrations</p>
              </div>
              <div className="flex flex-1/3 flex-col items-center justify-center gap-6 py-[22px]">
                <div className="bg-ns-green w-fit rounded-full px-14.5 py-3.5">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={30} speed={2000} interval={100} rooms={2} />
                    <span>+</span>
                  </p>
                </div>
                <p className="text-heading-6 text-center text-white">Compliance experts and former auditors</p>
              </div>
              <div className="flex flex-1/3 flex-col items-center justify-center gap-6 py-[22px]">
                <div className="bg-ns-green w-fit rounded-full px-14.5 py-3.5">
                  <p className="text-heading-4 lg:text-heading-3 text-secondary flex items-center">
                    <NumberAnimation number={79} speed={2000} interval={100} rooms={2} />
                    <span>M</span>
                  </p>
                </div>
                <p className="text-heading-6 text-center text-white">In funding</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Counter.displayName = 'Counter';
export default Counter;
